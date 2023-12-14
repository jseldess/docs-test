---
title: Filtering with metadata
category: 6495c32609a24b00434e5b53
---

You can limit your vector search based on metadata. Pinecone lets you attach metadata key-value pairs to vectors in an index, and specify filter expressions when you query the index.

Searches with metadata filters retrieve exactly the number of nearest-neighbor results that match the filters. For most cases, the search latency will be even lower than unfiltered searches.

Searches without metadata filters do not consider metadata. To combine keywords with semantic search, see [sparse-dense embeddings](hybrid-search).

For more background information on metadata filtering, see: [The Missing WHERE Clause in Vector Search](https://www.pinecone.io/learn/vector-search-filtering/).

<html><iframe width="450" height="253" src="https://www.youtube.com/embed/tn_Y19oB5bs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></html>

## Supported metadata types

You can associate a metadata payload with each vector in an index, as key-value pairs in a JSON object where keys are strings and values are one of:

- String
- Number (integer or floating point, gets converted to a 64 bit floating point)
- Booleans (true, false)
- List of String

> ℹ️ Note
>
> **High cardinality consumes more memory:** Pinecone indexes metadata to allow
> for filtering. If the metadata contains many unique values — such as a unique
> identifier for each vector — the index will consume significantly more
> memory. Consider using [selective metadata indexing](manage-indexes/#selective-metadata-indexing) to avoid indexing
> high-cardinality metadata that is not needed for filtering.

> ⚠️ Warning
>
> Null metadata values are not supported. Instead of setting a key to hold a
> null value, we recommend you remove that key from the metadata payload.

For example, the following would be valid metadata payloads:

```json
{
    "genre": "action",
    "year": 2020,
    "length_hrs": 1.5
}

{
    "color": "blue",
    "fit": "straight",
    "price": 29.99,
    "is_jeans": true
}
```
## Supported metadata size

Pinecone supports 40kb of metadata per vector.

## Metadata query language

> ℹ️ Note
>
> Pinecone's filtering query language is based on [MongoDB's query and projection operators](https://docs.mongodb.com/manual/reference/operator/query/). We
> currently support a subset of those selectors.

The metadata filters can be combined with AND and OR:

- `$eq` - Equal to _(number, string, boolean)_
- `$ne` - Not equal to _(number, string, boolean)_
- `$gt` - Greater than _(number)_
- `$gte` - Greater than or equal to _(number)_
- `$lt` - Less than _(number)_
- `$lte` - Less than or equal to _(number)_
- `$in` - In array _(string or number)_
- `$nin` - Not in array _(string or number)_

### Using arrays of strings as metadata values or as metadata filters

A vector with metadata payload...

```json
{ "genre": ["comedy", "documentary"] }
```

...means the `"genre"` takes on both values.

For example, queries with the following filters will match the vector:

```json
{"genre":"comedy"}

{"genre": {"$in":["documentary","action"]}}

{"$and": [{"genre": "comedy"}, {"genre":"documentary"}]}
```

Queries with the following filter will **not** match the vector:

```json
{ "$and": [{ "genre": "comedy" }, { "genre": "drama" }] }
```

And queries with the following filters will **not** match the vector because they are invalid. They will result in a query compilation error:

```
# INVALID QUERY:
{"genre": ["comedy", "documentary"]}
```

```
# INVALID QUERY:
{"genre": {"$eq": ["comedy", "documentary"]}}
```

## Inserting metadata into an index

Metadata can be included in upsert requests as you insert your vectors.

For example, here's how to insert vectors with metadata representing movies into an index:

```python
import pinecone

pinecone.init(api_key="your-api-key", environment="us-west1-gcp")
index = pinecone.Index("example-index")

index.upsert([
    ("A", [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1], {"genre": "comedy", "year": 2020}),
    ("B", [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2], {"genre": "documentary", "year": 2019}),
    ("C", [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3], {"genre": "comedy", "year": 2019}),
    ("D", [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], {"genre": "drama"}),
    ("E", [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], {"genre": "drama"})
])
```
```js
await index.upsert({
  vectors: [
    {
      id: "A",
      values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      metadata: { genre: "comedy", year: 2020 },
    },
    {
      id: "B",
      values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      metadata: { genre: "documentary", year: 2019 },
    },
    {
      id: "C",
      values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
      metadata: { genre: "comedy", year: 2019 },
    },
    {
      id: "D",
      values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
      metadata: { genre: "drama" },
    },
    {
      id: "E",
      values: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      metadata: { genre: "drama" },
    },
  ],
});
```
```shell curl
curl -i -X POST https://YOUR_INDEX-YOUR_PROJECT.svc.YOUR_ENVIRONMENT.pinecone.io/vectors/upsert \
  -H 'Api-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "vectors": [
      {
        "id": "A",
        "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        "metadata": {"genre": "comedy", "year": 2020}
      },
      {
        "id": "B",
        "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
        "metadata": {"genre": "documentary", "year": 2019}
      },
      {
        "id": "C",
        "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        "metadata": {"genre": "comedy", "year": 2019}
      },
      {
        "id": "D",
        "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
        "metadata": {"genre": "drama"}
      },
      {
        "id": "E",
        "values": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        "metadata": {"genre": "drama"}
      }
    ]
  }'
```

Projects on the `gcp-starter` environment do not support metadata strings containing the character `Δ`.

## Querying an index with metadata filters

Metadata filter expressions can be included with queries to limit the search to only vectors matching the filter expression.

For example, we can search the previous movies index for documentaries from the year 2019. This also uses the `include_metadata` flag so that vector metadata is included in the response.

> ⚠️ Warning
>
> For performance reasons, do not return vector data and metadata when
> `top_k>1000`. Queries with `top_k` over 1000 should not contain
> `include_metadata=True` or `include_data=True`.

```python
index.query(
    vector=[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    filter={
        "genre": {"$eq": "documentary"},
        "year": 2019
    },
    top_k=1,
    include_metadata=True
)

# Returns:
# {'matches': [{'id': 'B',
#               'metadata': {'genre': 'documentary', 'year': 2019.0},
#               'score': 0.0800000429,
#               'values': []}],
#  'namespace': ''}
```
```js
const queryResponse = await index.query({
  vector: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
  filter: { genre: { $in: ["comedy", "documentary", "drama"] } },
  topK: 1,
  includeMetadata: true,
});
console.log(queryResponse.data);
// Returns:
// {'matches': [{'id': 'B',
//               'metadata': {'genre': 'documentary', 'year': 2019.0},
//               'score': 0.0800000429,
//               'values': []}],
//  'namespace': ''}
```

```shell curl
curl -i -X POST https://YOUR_INDEX-YOUR_PROJECT.svc.YOUR_ENVIRONMENT.pinecone.io/query \
  -H 'Api-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "vector": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    "filter": {"genre": {"$in": ["comedy", "documentary", "drama"]}},
    "topK": 1,
    "includeMetadata": true
  }'

# Output:
# {
#       "matches": [
#         {
#           "id": "B",
#           "score": 0.0800000429,
#           "values": [],
#           "metadata": {
#             "genre": "documentary",
#             "year": 2019
#           }
#         }
#       ],
#       "namespace": ""
#     }
```

### More example filter expressions

A comedy, documentary, or drama:

```json
{
  "genre": { "$in": ["comedy", "documentary", "drama"] }
}
```

A drama from 2020:

```json
{
  "genre": { "$eq": "drama" },
  "year": { "$gte": 2020 }
}
```

A drama from 2020 (equivalent to the previous example):

```json
{
  "$and": [{ "genre": { "$eq": "drama" } }, { "year": { "$gte": 2020 } }]
}
```

A drama or a movie from 2020:

```json
{
  "$or": [{ "genre": { "$eq": "drama" } }, { "year": { "$gte": 2020 } }]
}
```

## Deleting vectors by metadata filter

To specify vectors to be deleted by metadata values, pass a metadata filter expression to the delete operation. This deletes all vectors matching the metadata filter expression.

Projects in the `gcp-starter` region do not support deleting by metadata.

**Example**

This example deletes all vectors with genre "documentary" and year 2019 from an index.

```python
index.delete(
    filter={
        "genre": {"$eq": "documentary"},
        "year": 2019
    }
)
```
```js
await index._delete({
  deleteRequest: {
    filter: {
    genre: { $eq: "documentary" },
    year: 2019,
  }
});
```
```shell curl
curl -i -X POST https://YOUR_INDEX-YOUR_PROJECT.svc.YOUR_ENVIRONMENT.pinecone.io/vectors/delete \
  -H 'Api-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "filter": {"genre": {"$in": ["comedy", "documentary", "drama"]}}
  }'
```

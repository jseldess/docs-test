---
title: Insert data
category: 6495c32609a24b00434e5b53
---

After creating a Pinecone index, you can start inserting vector embeddings and metadata into the index.

<html><iframe width="450" height="253" src="https://www.youtube.com/embed/HjeW6ed2dmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></html>

## Inserting records

1. Create a client instance and target an index:

```python
import pinecone

pinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENVIRONMENT")
index = pinecone.Index("pinecone-index")
```
```js
import { Pinecone } from '@pinecone-database/pinecone'

const pinecone = new Pinecone({
  apiKey: "YOUR_API_KEY",
  environment: "YOUR_ENVIRONMENT"
})
const index = pinecone.index("pinecone-index")
```
```shell curl
# Not applicable
```

2. Use the upsert operation to write records into the index:

```python
# Insert sample data (5 8-dimensional vectors)
index.upsert([
    ("A", [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]),
    ("B", [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]),
    ("C", [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]),
    ("D", [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]),
    ("E", [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])
])
```
```js
 const records = [
    {
      id: 'A',
      values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    },
    {
      id: 'B',
      values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
    },
    {
      id: 'C',
      values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    },
    {
      id: 'D',
      values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
    },
    {
      id: 'E',
      values: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    }
]

await index.upsert(records);
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'
INDEX_NAME='index-name'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "vectors": [
      {
        "id": "A",
        "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
      },
      {
        "id": "B",
        "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
      },
      {
        "id": "C",
        "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
      },
      {
        "id": "D",
        "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
      },
      {
        "id": "E",
        "values": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
      }
    ]
  }'
```

Immediately after the upsert response is received, records may not be visible to queries yet. This is because Pinecone is eventually consistent. In most situations, you can check if the records have been received by checking for the record counts returned by `describe_index_stats()` to be updated. Keep in mind that if you have multiple replicas, they may not all become consistent at the same time.

```python
index.describe_index_stats()
```
```js
await index('index-name').describeIndexStats()
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'
INDEX_NAME='index-name'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/describe_index_stats" \
  -H "Api-Key: $PINECONE_API_KEY"
```

## Batching upserts

For clients upserting larger amounts of data, you should insert data into an index in batches of 100 vectors or fewer over multiple upsert requests.

**Example**

```python
import random
import itertools

def chunks(iterable, batch_size=100):
    """A helper function to break an iterable into chunks of size batch_size."""
    it = iter(iterable)
    chunk = tuple(itertools.islice(it, batch_size))
    while chunk:
        yield chunk
        chunk = tuple(itertools.islice(it, batch_size))

vector_dim = 128
vector_count = 10000

# Example generator that generates many (id, vector) pairs
example_data_generator = map(lambda i: (f'id-{i}', [random.random() for _ in range(vector_dim)]), range(vector_count))

# Upsert data with 100 vectors per upsert request
for ids_vectors_chunk in chunks(example_data_generator, batch_size=100):
    index.upsert(vectors=ids_vectors_chunk)  # Assuming `index` defined elsewhere
```

## Sending upserts in parallel

By default, all vector operations sent using the Python client block until the response has been received. But using our client they can be made asynchronous. For the [Batching Upserts](#batching-upserts) example this can be done as follows:

```python
# Upsert data with 100 vectors per upsert request asynchronously
# - Create pinecone.Index with pool_threads=30 (limits to 30 simultaneous requests)
# - Pass async_req=True to index.upsert()
with pinecone.Index('example-index', pool_threads=30) as index:
    # Send requests in parallel
    async_results = [
        index.upsert(vectors=ids_vectors_chunk, async_req=True)
        for ids_vectors_chunk in chunks(example_data_generator, batch_size=100)
    ]
    # Wait for and retrieve responses (this raises in case of error)
    [async_result.get() for async_result in async_results]
```
```shell
# Not applicable
```

Pinecone is thread-safe, so you can launch multiple read requests and multiple write requests in parallel. Launching multiple requests can help with improving your throughput. However, reads and writes can’t be performed in parallel, therefore writing in large batches might affect query latency and vice versa.

If you experience slow uploads, see [Performance tuning](performance-tuning) for advice.

## Partitioning an index into namespaces

You can organize the records added to an index into partitions, or "namespaces," to limit queries and other vector operations to only one such namespace at a time. For more information, see: [Namespaces](namespaces).

## Inserting records with metadata

You can insert records that contain metadata as key-value pairs.

You can then use the metadata to filter for those criteria when sending the query. Pinecone will search for similar vector embeddings only among those items that match the filter. For more information, see: [Metadata Filtering](metadata-filtering).

[//]: # "This sample code is a copy from metadata-filtering"

```python
index.upsert([
    ("A", [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1], {"genre": "comedy", "year": 2020}),
    ("B", [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2], {"genre": "documentary", "year": 2019}),
    ("C", [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3], {"genre": "comedy", "year": 2019}),
    ("D", [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], {"genre": "drama"}),
    ("E", [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], {"genre": "drama"})
])
```
```js
const records = [
    {
      id: 'A',
      values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      metadata: { genre: "comedy", year: 2020 },
    },
    {
      id: 'B',
      values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
      metadata: { genre: "documentary", year: 2019 },
    },
    {
      id: 'C',
      values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
      metadata: { genre: "comedy", year: 2019 },
    },
    {
      id: 'D',
      values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
      metadata: { genre: "drama" },
    },
    {
      id: 'E',
      values: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      metadata: { genre: "drama" },
    }
]

await index.upsert(records);
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'
INDEX_NAME='index-name'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
  -H "Api-Key: $PINECONE_API_KEY" \
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

## Upserting records with sparse values

[Sparse vector values](hybrid-search) can be upserted alongside dense vector values.

```python
index = pinecone.Index('example-index') 

upsert_response = index.upsert(
  vectors=[
    {'id': 'vec1',
      'values': [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      'metadata': {'genre': 'drama'},
      'sparse_values': {
          'indices': [1, 5],
          'values': [0.5, 0.5]
      }},
    {'id': 'vec2',
      'values': [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      'metadata': {'genre': 'action'},
      'sparse_values': {
          'indices': [5, 6],
          'values': [0.4, 0.5]
      }}
  ],
  namespace='example-namespace'
)
```
```js
index = pinecone.index('example-index')

await index.upsert([
    {
      id: 'vec1',
      values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      sparseValues: {
          indices: [1, 5],
          values: [0.5, 0.5]
      },
      metadata: {genre: 'drama'},
    },
    {
      id: 'vec2',
      values: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      metadata: {'genre': 'action'},
      sparseValues: {
          indices: [5, 6],
          values: [0.4, 0.5]
      }
    }
])
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'
INDEX_NAME='index-name'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H "content-type: application/json" \
  -d '{
        "vectors": [
          {
            "values": [
              0.1,
              0.2,
              0.3,
              0.4,
              0.5,
              0.6,
              0.7,
              0.8
            ],
            "sparseValues": {
              "indices": [
                2,
                7
              ],
              "values": [
                0.4,
                0.5
              ]
            },
            "id": "vec1"
          },
          {
            "values": [
              0.2,
              0.3,
              0.4,
              0.5,
              0.6,
              0.7,
              0.8,
              0.9
            ],
            "sparseValues": {
              "indices": [
                1,
                4
              ],
              "values": [
                0.1,
                0.2
              ]
            },
            "id": "vec2"
          }
        ]
      }'
```

### Limitations

The following limitations apply to upserting records with sparse vectors:

+ You cannot upsert a record with sparse vector values without dense vector values.
+ Only `s1` and `p1` pod types using the `dotproduct` metric support querying sparse vectors. There is no error at upsert time: if you attempt to query any other pod type using sparse vectors, Pinecone returns an error.
+ You can only upsert sparse vector values of sizes up to 1000 non-zero values.
+ Indexes created before February 22, 2023 do not support sparse values.

## Troubleshooting index fullness errors

When upserting data, you may receive the following error:

```console
Index is full, cannot accept data.
```

New upserts may fail as the capacity becomes exhausted. While your index can still serve queries, you need to scale your environment to accommodate more vectors.

To resolve this issue, you can [scale your index](scaling-indexes). 


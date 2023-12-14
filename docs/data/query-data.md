---
title: Query data
category: 6495c32609a24b00434e5b53
---

After your data is [indexed](insert-data), you can start sending queries to Pinecone.

The `Query` operation searches the index using a query vector. It retrieves the IDs of the most similar records in the index, along with their similarity scores. This operation can optionally return the result's vector values and metadata, too. You specify the number of vectors to retrieve each time you send a query. Matches are always ordered by similarity from most similar to least similar.

The similarity score for a vector represents its distance to the query vector, calculated according to the [distance metric](indexes#distance-metrics) for the index. The significance of the score depends on the similarity metric. For example, for indexes using the `euclidean` distance metric, scores with lower values are more similar, while for indexes using the `dotproduct` metric, higher scores are more similar.

## Sending a query

When you send a query, you provide vector values representing your query embedding. The `top_k` parameter indicates the number of results to return. For example, this example sends a query vector and retrieves three matching vectors:

```python
import pinecone

pinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENVIRONMENT")
index = pinecone.Index('example-index')

index.query(
  vector=[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
  top_k=3,
  include_values=True
)
# Returns:
# {
#     "matches": [
#         {
#             "id": "C",
#             "score": -1.76717265e-07,
#             "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
#         },
#         {
#             "id": "B",
#             "score": 0.080000028,
#             "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
#         },
#         {
#             "id": "D",
#             "score": 0.0800001323,
#             "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
#         },
#     ],
#     "namespace": "",
# }
```
```js
import { Pinecone } from '@pinecone-database/pinecone'

const pinecone = new Pinecone({
  apiKey: "YOUR_API_KEY",
  environment: "YOUR_ENVIRONMENT"
})
const index = pinecone.index("example-index");

const queryResponse = await index.query({
    vector: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    topK: 3,
    includeValues: true,
});
// Returns:
// { 
//   matches: [
//             { 
//               id: 'C',
//               score: 0.000072891,
//               values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
//             },
//             {
//               id: 'B',
//               score: 0.080000028,
//               values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
//             },
//             {
//               id: 'D',
//               score: 0.0800001323,
//               values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
//             }
//           ],
//   namespace: ''
// }
```
```shell curl
INDEX_NAME='index-name' \
PROJECT='project-id' \
ENVIRONMENT='your-environment' \
API_KEY='your-api-key' \
  curl -i -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/query" \
    -H "Api-Key: $API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "vector":[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
      "topK": 3,
      "includeValues": true
    }'
```

Depending on your data and your query, you may get fewer than `top_k` results. This happens when `top_k` is larger than the number of possible matching vectors for your query.

## Querying by namespace

You can organize the records added to an index into partitions, or "namespaces," to limit queries and other vector operations to only one such namespace at a time. For more information, see: [Namespaces](namespaces).

## Using metadata filters in queries

You can add metadata to document embeddings within Pinecone, and then filter for those criteria when sending the query. Pinecone will search for similar vector embeddings only among those items that match the filter. For more information, see: [Metadata Filtering](metadata-filtering).

[//]: # "This sample code is a copy from metadata-filtering"

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
```
```js
const index = pinecone.index('example-index');
const queryResponse = await index.query({
    vector: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    topK: 1,
    includeMetadata: true,
    filter: {
      "genre": {"$eq": "documentary"}
    }
});
```
```shell curl
INDEX_NAME='index-name' \
PROJECT='project-id' \
ENVIRONMENT='your-environment' \
API_KEY='your-api-key' \
  curl -i -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/query" \
    -H "Api-Key: $API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "vector": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      "filter": {"genre": {"$in": ["comedy", "documentary", "drama"]}},
      "topK": 1,
      "includeMetadata": true
    }'
```
## Querying vectors with sparse and dense values

When querying an index containing [sparse and dense vectors](hybrid-search), include a `sparse_vector` in your query parameters.

**Examples**

The following example shows how to query with a sparse-dense vector.

```python
query_response = index.query(
    namespace="example-namespace",
    top_k=10,
    vector=[0.1, 0.2, 0.3, 0.4],
    sparse_vector={
        'indices': [3],
        'values':  [0.8]
    }
)
```
```js
const queryResponse = await index.namespace('example-namespace').query({
  topK: 10,
  vector: [0.1, 0.2, 0.3, 0.4],
  sparseVector: {
    indices: [3]
    values: [0.8]
  }
})
```
```shell curl
INDEX_NAME='index-name' \
PROJECT='project-id' \
ENVIRONMENT='your-environment' \
API_KEY='your-api-key' \
  curl -i -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/query" \
    -H "Api-Key: $API_KEY" \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
      "includeValues": "false",
      "includeMetadata": "false",
      "vector": [
          0.1,
          0.2,
          0.3,
          0.4
      ],
      "sparseVector": {
          "indices": [ 0 ],
          "values": [ 0.8 ]
      },
      "topK": 10,
      "namespace": "example-namespace"
    }'
``` 

To learn more, see [Querying sparse-dense vectors](query-sparse-dense-vectors).

## Limitations

Avoid returning vector data and metadata when `top_k` is greater than 1000. This means queries with `top_k` over 1000 should not contain `include_metadata=True` or `include_data=True`. For more limitations, see: [Limits](limits).

Pinecone is eventually consistent, so queries may not reflect very recent upserts.

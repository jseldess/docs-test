---
title: Quickstart
description: Set up a Pinecone vector database in minutes.
sidebar_position: 2
---

This guide explains how to set up a Pinecone vector database in minutes.

## Before you begin

- If you haven't already, [sign up for a free Pinecone account](https://app.pinecone.io/). 

  On the free [Starter plan](/docs/starter-environment), you get one project and one index with enough resources for testing Pinecone and for running small applications. Although the [Starter plan does not support all Pinecone features](/docs/starter-environment#limitations), it's easy to [upgrade](/docs/changing-your-billing-plan) when you're ready.  

- If you'd prefer to get started in your browser, use the ["Hello, Pinecone!" colab notebook](https://colab.research.google.com/github/pinecone-io/examples/blob/master/docs/quick-tour/hello-pinecone.ipynb).


## 1. Install a Pinecone client

Pinecone exposes a simple REST API for interacting with your vector database. You can use the [API](/reference) directly, or you can use one of the official Pinecone clients:

```python
pip install pinecone-client
```
```javascript
npm install @pinecone-database/pinecone
```

Currently, Pinecone supports a [Python client](/docs/python-client) and a [Node.js client](https://sdk.pinecone.io/typescript/). For community-supported clients and other client resources, see [Libraries](/page/libraries).

## 2. Get your API key

You need an API key and environment name to make API calls to your Pinecone project. To get your key and environment, follow these steps:

1. Open the [Pinecone Console](https://app.pinecone.io/).
1. Go to **API Keys**.
1. Copy your API key and environment.  

## 3. Initialize your connection

Using your API key and environment, initialize your client connection to Pinecone:

```python
import pinecone

pinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENVIRONMENT")
```
```javascript
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({ 
    apiKey: 'YOUR_API_KEY',
    environment: 'YOUR_ENVIRONMENT'
})
```

> ℹ️  Note
> When using the API directly, each HTTP request must contain an `Api-Key` header that specifies your API key, and your environment must be specified in the URL. You'll see this in all subsequent `curl` examples. 

## 4. Create an index

In Pinecone, you store vector embeddings in [indexes](/docs/indexes). In each index, the vectors share the same dimensionality and distance metric for measuring similarity. 

Create an index named "quickstart" that performs nearest-neighbor search using the [Euclidean distance metric](/docs/manage-indexes/#distance-metrics) for 8-dimensional vectors:

```python
pinecone.create_index("quickstart", dimension=8, metric="euclidean")
pinecone.describe_index("quickstart")
```
```javascript
await pinecone.createIndex({
    name: "quickstart",
    dimension: 8,
    metric: "euclidean",
});
await pinecone.describeIndex("quickstart");
```
```shell curl
PINECONE_API_KEY="YOUR_API_KEY"
PINECONE_ENVIRONMENT="YOUR_ENVIRONMENT"

# Create the index
curl -X POST "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/databases" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "quickstart",
    "dimension": 8,
    "metric": "euclidean"
  }'

# Check index status
curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/databases/quickstart" \
  -H "Api-Key: $PINECONE_API_KEY"
```

## 5. Insert vectors

Now that you've created your index, [insert](/docs/insert-data) sample vectors into 2 distinct namespaces. 

[Namespaces](namespaces) let you logically separate vectors within a single index. Although optional, they are a best practice for speeding up queries, which can be filtered by namespace, and for complying with [multi-tenancy](multitenancy) requirements.

1. Create a client instance that targets the "quickstart" index:

    ```python
    index = pinecone.Index("quickstart")
    ```
    ```javascript
    const index = pinecone.index("quickstart");
    ```
    ```shell curl
    # Not applicable
    ```

1. Use the [`upsert`](/reference/upsert) operation to write 8 8-dimensional vectors into 2 distinct namespaces:

    ```python
    index.upsert(
      vectors=[
        {"id": "vec1", "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]},
        {"id": "vec2", "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]},
        {"id": "vec3", "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]},
        {"id": "vec4", "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]}
      ],
      namespace="ns1"
    )

    index.upsert(
      vectors=[
        {"id": "vec5", "values": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]},
        {"id": "vec6", "values": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"id": "vec7", "values": [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]},
        {"id": "vec8", "values": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]}
      ],
      namespace="ns2"
    )
    ```
    ```javascript
    await index.namespace("ns1").upsert([
      {
        "id": "vec1", 
        "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
      },
      {
        "id": "vec2", 
        "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
      },
      {
        "id": "vec3", 
        "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
      },
      {
        "id": "vec4", 
        "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
      }
    ]);

    await index.namespace("ns2").upsert([
      {
        "id": "vec5", 
        "values": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
      },
      {
        "id": "vec6", 
        "values": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
      },
      {
        "id": "vec7", 
        "values": [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
      },
      {
        "id": "vec8", 
        "values": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
      }
    ]);
    ```
    ```shell curl
    # The `POST` requests below use the unique endpoint for your Pinecone index.
    # See https://docs.pinecone.io/docs/manage-data#specify-an-index-endpoint.
    PINECONE_API_KEY="YOUR_API_KEY"
    PINECONE_ENVIRONMENT="YOUR_ENVIRONMENT"

    PINECONE_PROJECT_ID=$(
      curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
        -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
    )

    curl -X POST "https://quickstart-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
      -H "Api-Key: $PINECONE_API_KEY" \
      -H 'Content-Type: application/json' \
      -d '{
        "vectors": [
          {
            "id": "vec1", 
            "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
          },
          {
            "id": "vec2", 
            "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
          },
          {
            "id": "vec3", 
            "values": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
          },
          {
            "id": "vec4", 
            "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
          }
        ],
        "namespace": "ns1"
      }'

    curl -X POST "https://quickstart-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
      -H "Api-Key: $PINECONE_API_KEY" \
      -H 'Content-Type: application/json' \
      -d '{
        "vectors": [
          {
            "id": "vec5", 
            "values": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
          },
          {
            "id": "vec6", 
            "values": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
          },
          {
            "id": "vec7", 
            "values": [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
          },
          {
            "id": "vec8", 
            "values": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
          }
        ],
        "namespace": "ns2"
      }'
    ```

> ℹ️  Note
> When upserting larger amounts of data, [upsert data in batches](insert-data/#batching-upserts) of 100 vectors or fewer over multiple upsert requests.

## 6. Check the index

Pinecone is eventually consistent, so there can be a delay before your vectors are visible to queries. Use the [`describe_index_stats`](/reference/describe_index_stats_post) operation to check if the current vector count matches the number of vectors you inserted:

```python
index.describe_index_stats()

# Returns:
# {'dimension': 8,
#  'index_fullness': 8e-05,
#  'namespaces': {'ns1': {'vector_count': 4}, 'ns2': {'vector_count': 4}},
#  'total_vector_count': 8}
```
```javascript
const stats = await index.describeIndexStats();

// Returns:
// {
//   namespaces: { ns1: { recordCount: 4 }, ns2: { recordCount: 4 } },
//   dimension: 8,
//   indexFullness: 0.00008,
//   totalRecordCount: 8
// }
```
```shell curl
PINECONE_API_KEY="YOUR_API_KEY"
PINECONE_ENVIRONMENT="YOUR_ENVIRONMENT"

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://quickstart-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/describe_index_stats" \
  -H "Api-Key: $PINECONE_API_KEY"

# Output:
# {
#   "namespaces": {
#     "ns1": {
#       "vectorCount": 4
#     },
#     "ns2": {
#       "vectorCount": 4
#     }
#   },
#   "dimension": 8,
#   "indexFullness": 0.00008,
#   "totalVectorCount": 8
# }
```

## 7. Run a similarity search

Query each namespace in your index for the 3 vectors that are most similar to an example 8-dimensional vector, using the Euclidean distance metric you specified for the index:

```python
index.query(
  namespace="ns1",
  vector=[0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
  top_k=3,
  include_values=True
)

index.query(
  namespace="ns2",
  vector=[0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
  top_k=3,
  include_values=True
)

# Returns:
# {'matches': [{'id': 'vec3',
#               'score': 0.0,
#               'values': [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]},
#              {'id': 'vec4',
#               'score': 0.0799999237,
#               'values': [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]},
#              {'id': 'vec2',
#               'score': 0.0800000429,
#               'values': [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]}],
#  'namespace': 'ns1'}
# {'matches': [{'id': 'vec7',
#               'score': 0.0,
#               'values': [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]},
#              {'id': 'vec6',
#               'score': 0.0799999237,
#               'values': [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
#              {'id': 'vec8',
#               'score': 0.0799999237,
#               'values': [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]}],
#  'namespace': 'ns2'}
```
```javascript
const queryResponse1 = await index.namespace("ns1").query({
    topK: 3,
    vector: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    includeValues: true
});

const queryResponse2 = await index.namespace("ns2").query({
    topK: 3,
    vector: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
    includeValues: true
});

// Returns:
// {
// 	matches: [{
// 		id: "vec3",
// 		score: 0,
// 		values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
// 	}, {
// 		id: "vec4",
// 		score: 0.0799999237,
// 		values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
// 	}, {
// 		id: "vec2",
// 		score: 0.0800000429,
// 		values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
// 	}],
// 	namespace: "ns1"
// }
// {
//  matches: [{
//    id: "vec7",
//    score: 0,
//    values: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
//  }, {
//    id: "vec6",
//    score: 0.0799999237,
//    values: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
//  }, {
//    id: "vec8",
//    score: 0.0800000429,
//    values: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
//  }],
//  namespace: "ns2"
// }

```
```shell curl
PINECONE_API_KEY="YOUR_API_KEY"
PINECONE_ENVIRONMENT="YOUR_ENVIRONMENT"

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://quickstart-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/query" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "namespace": "ns1",
    "vector": [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
    "topK": 3,
    "includeValues": true
  }'

curl -X POST "https://quickstart-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/query" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "namespace": "ns2",
    "vector": [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
    "topK": 3,
    "includeValues": true
  }'

# Output:
# {
#   "matches":[
#     {
#       "id": "vec3",
#       "score": 0,
#       "values": [0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3]
#     },
#     {
#       "id": "vec2",
#       "score": 0.0800000429,
#       "values": [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
#     },
#     {
#       "id": "vec4",
#       "score": 0.0799999237,
#       "values": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
#     }
#   ],
#   "namespace": "ns1"
# }
# {
#   "matches": [
#     {
#       "id": "vec7",
#       "score": 0,
#       "values": [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
#     },
#     {
#       "id": "vec6",
#       "score": 0.0799999237,
#       "values": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
#     },
#     {
#       "id": "vec8",
#       "score": 0.0799999237,
#       "values": [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
#     }
#   ],
#   "namespace": "ns2"
# }
```

This is a simple example. As you put more demands on Pinecone, you'll see it returning low-latency, accurate results at huge scales, with indexes of up to billions of vectors. 

## 8. Clean up

The Starter plan allows only a single index, so once you're done with the "quickstart" index, use the `delete_index` operation to delete it: 

```python
pinecone.delete_index("quickstart")
```
```javascript
await pinecone.deleteIndex("quickstart");
```
```shell curl
PINECONE_API_KEY="YOUR_API_KEY"
PINECONE_ENVIRONMENT="YOUR_ENVIRONMENT"

curl -X DELETE "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/databases/quickstart" \
  -H "Api-Key: $PINECONE_API_KEY"
```

> ⚠️ Warning
> After you delete an index, you cannot use it again.

## Next steps

Now that you have a free Pinecone account and experience with basic Pinecone operations, check out our [sample applications](/page/examples) using common AI patterns, tools, and algorithms, or start [inserting your own vector embeddings](/docs/insert-data).


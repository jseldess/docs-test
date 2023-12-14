---
title: Using namespaces
category: 6495c32609a24b00434e5b53
---

Pinecone allows you to partition the records in an index into **namespaces**.* Queries and other operations are then limited to one namespace, so different requests can search different subsets of your index.

For example, you might want to define a namespace for indexing articles by **content**, and another for indexing articles by **title**. For a complete example, see our [Namespaces example notebook](https://github.com/pinecone-io/examples/blob/master/learn/search/namespaces/namespaces_demo.ipynb).

Every index is made up of one or more namespaces. Every record exists in exactly one namespace.

Namespaces are uniquely identified by a namespace name, which almost all operations accept as a parameter to limit their work to the specified namespace. When you don't specify a namespace name for an operation, Pinecone uses the default namespace name of `""` (the empty string).


## Creating a namespace

Namespaces are created automatically the first time they are used to upsert records. If the namespace doesn't exist, it is created implicitly.

The example below will create a `"my-first-namespace"` namespace if it doesn’t already exist:

```python
# Upsert records while creating a new namespace
index.upsert(vectors=[('id-1', [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1])],
             namespace='my-first-namespace')
```
```js
// Create a client instance scoped to perform all operations
// within that namespace.
const ns1 = index.namespace('my-first-namespace');
await ns1.upsert([
  {
    id: 'id-1',
    values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
  }
])
```
```shell curl
INDEX_NAME='index-name' \
PROJECT='project-id' \
ENVIRONMENT='your-environment' \
API_KEY='your-api-key' \
  curl -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/vectors/upsert" \
    -H "Api-Key: $API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "vectors": [
        {
          "id": "id-1",
          "values": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
        }
      ],
      "namespace": "my-first-namespace"
    }'
```

Then you can submit queries and other operations specifying that namespace as a parameter. For example, to query the records in namespace `"my-first-namespace"` use code like the following:

```python
index.query(vector=[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            top_k=1,
            namespace='my-first-namespace')
```
```js
const ns1 = index.namespace('my-first-namespace');
await ns1.query({
  topK: 1,
  vector: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
});
```
```shell curl
INDEX_NAME='index-name' \
PROJECT='project-id' \
ENVIRONMENT='your-environment' \
API_KEY='your-api-key' \
  curl -X POST "https://$INDEX_NAME-$PROJECT.svc.$ENVIRONMENT.pinecone.io/query" \
    -H "Api-Key: $API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "topK": 1,
      "vector": [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
      "namespace": "my-first-namespace"
    }'
```

## Creating more than one namespace

You can create more than one namespace. For example, insert data into separate namespaces:

```python
import numpy as np

# Create three sets of 8-dimensional vectors
vectors_a = np.random.rand(15, 8).tolist()
vectors_b = np.random.rand(20, 8).tolist()
vectors_c = np.random.rand(30, 8).tolist()

# Create ids
ids_a = map(str, np.arange(15).tolist())
ids_b = map(str, np.arange(20).tolist())
ids_c = map(str, np.arange(30).tolist())

# Insert into separate namespaces
index.upsert(vectors=zip(ids_a,vectors_a),namespace='namespace_a')
index.upsert(vectors=zip(ids_b,vectors_b),namespace='namespace_b')

# If no namespaces are specified, the index uses the default namespace ''
index.upsert(vectors=zip(ids_c,vectors_c))

# At this point, index.describe_index_stats() returns:
# {'dimension': 8,
#  'namespaces': {'': {'vector_count': 30},
#                 'namespace_a': {'vector_count': 15},
#                 'namespace_b': {'vector_count': 20}}}
```
```js
// First, set up some records. In a real use case, the vector values in these records would probably be outputs of an embedding model.
const records = [{
    id: 'id-1',
    values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
 }]

// Calling upsert on the 'nsA' client instance upserts to the namespace 'namespace_a'.
const nsA = index.namespace('namespace_a')
await nsA.upsert(recordsA);

// If we perform another operation like fetch with this client instance, it will also execute within the namespace 'namespace_a' and the record should be found and returned.
const fetchResult = await nsA.fetch([ 'id-1' ])
console.log(fetchResult.records['id-1'] !== undefined) // true
console.log(fetchResult.namespace === 'namespace_a') // true

// If we execute the same command with the client instance scoped to a different namespace, such as `namespace_b`, then no records should be found by fetch when looking for the id `id-1`.
const fetchResult2 = await index.namespace('namespace_b').fetch(['id-1'])
console.log(fetchResult2.records['id-1'] !== undefined) // false because no data returned by fetch
```
```shell curl
# No example
```

## Operations across all namespaces

All vector operations apply to a single namespace, with one exception:

The `DescribeIndexStatistics` operation returns per-namespace statistics about the contents of **all** namespaces in an index. [More details](/reference/describe_index_stats_post)

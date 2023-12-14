---
title: Manage indexes
sidebar_position: 2
---

In this section, we explain how you can get a list of your indexes, create an index, delete an index, and describe an index.

To learn about the concepts related to indexes, see [Indexes](indexes).

> ⚠️ Warning
>
> Indexes on the Starter (free) plan are deleted after 7 days of inactivity. To
> prevent this, send any API request or log into the console. This will count
> as activity.

<html><iframe width="450" height="253" src="https://www.youtube.com/embed/DCQrrnFbLt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></html>

## Getting information on your indexes

List all your Pinecone indexes:

```python
pinecone.list_indexes()
```
```js
await pinecone.listIndexes();
```
```shell curl
curl -i https://controller.YOUR_ENVIRONMENT.pinecone.io/databases \
  -H 'Api-Key: YOUR_API_KEY'
```

Get the configuration and current status of an index named "example-index":

```python
pinecone.describe_index('example-index')
```
```js
await pinecone.describeIndex('example-index');
```
```shell curl
INDEX_NAME='example-index' \
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X GET "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \
    -H "Api-Key: $API_KEY"
```

## Creating an index

The simplest way to create an index is as follows. This gives you an index with a single pod that will perform approximate nearest neighbor (ANN) search using cosine similarity:

```python
pinecone.create_index("example-index", dimension=128)
```
```js
await pinecone.createIndex({
  name: "example-index",
  dimension: 128,
});
```
```shell curl
curl -i -X POST https://controller.YOUR_ENVIRONMENT.pinecone.io/databases \
  -H 'Api-Key: YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "example-index",
    "dimension": 128
  }'
```

A more complex index can be created as follows. This creates an index that measures similarity by Euclidean distance and runs on 4 s1 (storage-optimized) pods of size `x1`:

[//]: # "TODO: Add these code samples to Docs Code Samples Test.ipynb"

```python
pinecone.create_index("example-index", dimension=128, metric="euclidean", pods=4, pod_type="s1.x1")
```
```js
await pinecone.createIndex({
  name: "example-index",
  dimension: 128,
  metric: "euclidean",
  pods: 4,
  podType: "s1.x1",
});
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "name": "example-index",
      "dimension": 128,
      "metric": "euclidean",
      "pods": 4,
      "pod_type": "p1.x1"
    }'
```

### Create an index from a collection

To create an index from a [collection](collections), use the [`create_index`](/reference/create_index/) operation and provide a [`source_collection`](/reference/create_index/#!path=source_collection&t=request) parameter containing the name of the collection from which you wish to create an index. The new index is queryable and writable.

Creating an index from a collection generally takes about 10 minutes. Creating a p2 index from a collection can take several hours when the number of vectors is on the order of 1M.

**Example**

The following example creates an index named `example-index` with 128 dimensions from a collection named `example-collection`.

```python
pinecone.create_index("example-index", dimension=128, source_collection="example-collection")
```
```js
await pinecone.createIndex({
  name: "example-index",
  dimension: 128,
  sourceCollection: "example-collection",
});
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "name": "example-index",
      "source_collection":"example-collection"}
    }'
```

For more information about each pod type and size, see [Indexes](indexes).

For the full list of parameters available to customize an index, see the [create_index API reference](/reference/create_index/).

## Changing pod sizes

The default pod size is `x1`. After index creation, you can increase the pod size for an index.

Increasing the pod size of your index does not result in downtime. Reads and writes continue uninterrupted during the scaling process. Currently, you cannot reduce the pod size of your indexes. Your number of replicas and your total number of pods remain the same, but each pod changes size. Resizing completes in about 10 minutes.

To learn more about pod sizes, see [Indexes](indexes/#pods-pod-types-and-pod-sizes).

### Increasing the pod size for an index

To change the pod size of an existing index, use the [configure_index](/reference/configure_index/) operation and append the new size to the `pod_type` parameter, separated by a period (.).

Projects in the `gcp-starter` environment do not use pods.

**Example**

The following example assumes that `example-index` has size `x1` and changes the size to `x2`.

```python
pinecone.configure_index("example-index", pod_type="s1.x2")
```
```js
await client.configureIndex('example-index', {
  podType: 's1.x2',
});
```
```shell curl
INDEX_NAME='example-index' \
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X PATCH "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "pod_type": "s1.x2"
    }'
```

### Checking the status of a pod size change

To check the status of a pod size change, use the [describe_index](/reference/describe_index/) operation. The `status` field in the results contains the key-value pair `"state":"ScalingUp"` or `"state":"ScalingDown"` during the resizing process and the key-value pair `"state":"Ready"` after the process is complete.

The index fullness metric provided by [`describe_index_stats`](/reference/describe_index_stats_post) may be inaccurate until the resizing process is complete.

**Example**

The following example uses `describe_index` to get the index status of the index `example-index`. The `status` field contains the key-value pair `"state":"ScalingUp"`, indicating that the resizing process is still ongoing.

```python
pinecone.describe_index("example-index")
```
```js
await pinecone.describeIndex({
  name: "example-index",
});
```
```shell curl
INDEX_NAME='example-index' \
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \
    -H "Api-Key: $API_KEY" 
# Results:
# {
#   "database": {
#     "name": "example-index",
#     "dimensions": "768",
#     "metric": "cosine",
#     "pods": 6,
#     "replicas": 2,
#     "shards": 3,
#     "pod_type": "p1.x2",
#     "index_config": {},
#     "status": {
#       "ready": true,
#       "state": "ScalingUp"
#     }
#   }
# }
```

## Replicas

You can increase the number of replicas for your index to increase throughput (QPS). All indexes start with replicas=1.

Indexes in the `gcp-starter` environment do not support replicas.

**Example**

The following example uses the [`configure_index`](/reference/configure_index/) operation to set the number of replicas for the index `example-index` to 4.

```python
pinecone.configure_index("example-index", replicas=4)
```
```js
await pinecone.configureIndex("example-index", {
  replicas: 4,
});
```
```shell curl
INDEX_NAME='example-index' \
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X PATCH "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "replicas": 4
    }'
```

See the [configure_index API reference](/reference/configure_index/) for more details.

## Selective metadata indexing

By default, Pinecone indexes all [metadata](metadata-filtering). When you index metadata fields, you can filter vector search queries using those fields. When you store metadata fields without indexing them, you [keep memory utilization low](metadata-filtering/#supported-metadata-types), especially when you have many unique metadata values, and therefore can fit more vectors per pod.

Searches without metadata filters do not consider metadata. To combine keywords with semantic search, see [sparse-dense embeddings](hybrid-search).

When you create a new index, you can specify which metadata fields to index using the `metadata_config` parameter. Projects on the `gcp-starter` environment do not support the `metadata_config` parameter.

**Example**

```python
metadata_config = {
    "indexed": ["metadata-field-name"]
}

pinecone.create_index("example-index", dimension=128,
                      metadata_config=metadata_config)
```
```js
await pinecone.createIndex({
  name: 'example-index',
  dimension: 128,
  metadata_config: {
    indexed: ["metadata-field-name"],
  },
});
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "name": "example-index",
      "dimension": 128,
      "metadata_config": {
        "indexed": ["metadata-field-name"]
      }
    }'
```

The value for the `metadata_config` parameter is a JSON object containing the names of the metadata fields to index.

```JSON
{
    "indexed": [
        "metadata-field-1",
        "metadata-field-2",
        "metadata-field-n"
    ]
}
```

When you provide a `metadata_config` object, Pinecone only indexes the metadata fields present in that object: any metadata fields absent from the `metadata_config` object are not indexed.

When a metadata field is indexed, you can [filter your queries](metadata-filtering) using that metadata field; if a metadata field is not indexed, metadata filtering ignores that field.

### Examples

The following example creates an index that only indexes the `genre` metadata field. Queries against this index that filter for the `genre` metadata field may return results; queries that filter for other metadata fields behave as though those fields do not exist.

```python
metadata_config = {
    "indexed": ["genre"]
}

pinecone.create_index("example-index", dimension=128,
                      metadata_config=metadata_config)
```
```js
await pinecone.createIndex({
  name: 'example-index',
  dimension: 128,
  metadata_config: {
    indexed: ["genre"],
  },
});
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/databases" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "name": "example-index",
      "dimension": 128,
      "metadata_config": {
        "indexed": ["genre"]
      }
    }'
```

## Deleting an index

This operation will delete all of the data and the computing resources associated with the index.

> ℹ️ Note
>
> When you create an index, it runs as a service until you delete it. Users are
> billed for running indexes, so we recommend you delete any indexes you're not
> using. This will minimize your costs.

Delete a Pinecone index named "pinecone-index":

```python
pinecone.delete_index("example-index")
```
```js
await pinecone.deleteIndex('example-index');
```
```shell curl
INDEX_NAME='example-index' \
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X DELETE "https://controller.$ENVIRONMENT.pinecone.io/databases/$INDEX_NAME" \
    -H "Api-Key: $API_KEY"
```

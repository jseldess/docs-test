---
title: Back up indexes
sidebar_position: 3
---

This document describes how to make backup copies of your indexes using [collections](collections).

To learn how to create an index from a collection, see [Manage indexes](manage-indexes/#creating-an-index).

## Create a backup using a collection

To create a backup of your index, use the [`create_collection`](/reference/create_collection) operation. A collection is a static copy of your index that only consumes storage.

**Example**

The following example creates a collection named `example-collection` from an index named `example-index`.

```python
pinecone.create_collection("example-collection", "example-index")
```
```js
await pinecone.createCollection({
  name: "example-collection",
  source: "example-index",
});
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X POST "https://controller.$ENVIRONMENT.pinecone.io/collections" \
    -H "Api-Key: $API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
          "name": "example-collection",
          "source": "example-index"
    }'
```

## Check the status of a collection

To retrieve the status of the process creating a collection and the size of the collection, use the [`describe_collection`](/reference/describe_collection) operation. Specify the name of the collection to check. You can only call `describe_collection` on a collection in the current project.

The `describe_collection` operation returns an object containing key-value pairs representing the name of the collection, the size in bytes, and the creation status of the collection.

**Example**

The following example gets the creation status and size of a collection named `example-collection`.

```python
pinecone.describe_collection("example-collection")
```
```js
await pinecone.describeCollection('example-collection');
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
COLLECTION_NAME='example-collection' \
  curl -i -X GET "https://controller.$ENVIRONMENT.pinecone.io/collections/$COLLECTION_NAME" \
    -H "Api-Key: $API_KEY"
```

## List your collections

To get a list of the collections in the current project, use the [`list_collections`](/reference/list_collections) operation.

**Example**

The following example gets a list of all collections in the current project.

```python
pinecone.list_collections()
```
```js
await pinecone.listCollections();
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X GET "https://controller.$ENVIRONMENT.pinecone.io/collections" \
    -H "Api-Key: $API_KEY"
```

## Delete a collection

To delete a collection, use the [`delete_collection`](/reference/delete_collection) operation. Specify the name of the collection to delete.

Deleting the collection takes several minutes. During this time, the `describe_collection` operation returns the status `"deleting"`.

**Example**

The following example deletes the collection `example-collection`.

```python
pinecone.delete_collection("example-collection")
```
```js
await pinecone.deleteCollection("example-collection");
```
```shell curl
API_KEY='your-api-key' \
ENVIRONMENT='your-environment' \
  curl -i -X DELETE "https://controller.$ENVIRONMENT.pinecone.io/collections" \
    -H "Api-Key: $API_KEY"
```

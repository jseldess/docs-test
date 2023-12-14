---
title: Manage data
category: 6495c32609a24b00434e5b53
---

In addition to [inserting](insert-data) and [querying](query-data) data, there are other ways you can interact with vector data in a Pinecone index. This section walks through the various vector operations available.

<html><iframe width="450" height="253" src="https://www.youtube.com/embed/cqzWyNWU8oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></html>

## Create a client instance

If you're using a Pinecone client library to access an index, you'll need to create a client instance:

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

## Specify an index endpoint

Pinecone indexes each have their own DNS endpoint. For cURL and other direct
API calls to a Pinecone index, you'll need to know the dedicated endpoint for
your index.

Index endpoints take the following form:

`https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io`

- `$INDEX_NAME` is the name you gave your index when you created it.
- `$PINECONE_PROJECT_ID` is the Pinecone project id that your API key is associated
  with. This can be retrieved using the `whoami` operation below.
- `$PINECONE_ENVIRONMENT` is the [cloud region for your Pinecone project](projects#project-environment)..

### Call `whoami` to retrieve your project id.

The following command retrieves your Pinecone project id.

```python
pinecone.whoami()
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY"
```

## Describe index statistics

Get statistics about an index, such as record count per namespace:

```python
index.describe_index_stats()
```
```js
const indexStats = await index.describeIndexStats();
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

## Fetching records

The `Fetch` operation looks up and returns records, by id, from an index. The returned records include the vector values and/or metadata. Typical fetch latency is under 5ms.

Fetch records by their ids:

```python
index.fetch(["id-1", "id-2"])

# Returns:
# {'namespace': '',
#  'vectors': {'id-1': {'id': 'id-1',
#                       'values': [0.568879, 0.632687092, 0.856837332, ...]},
#              'id-2': {'id': 'id-2',
#                       'values': [0.00891787093, 0.581895, 0.315718859, ...]}}}
```
```js
const fetchResult = await index.fetch(['id-1', 'id-2']);
// Returns:
// {'namespace': '',
//  'records': {'id-1': {'id': 'id-1',
//                       'values': [0.568879, 0.632687092, 0.856837332, ...]},
//              'id-2': {'id': 'id-2',
//                       'values': [0.00891787093, 0.581895, 0.315718859, ...]}}}
```
```shell curl
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'
INDEX_NAME='index-name'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/fetch?ids=id-1&ids=id-2" \
  -H "Api-Key: $PINECONE_API_KEY"
# Output:
# {
#   "vectors": {
#     "id-1": {
#       "id": "id-1",
#       "values": [0.568879, 0.632687092, 0.856837332, ...]
#     },
#     "id-2": {
#       "id": "id-2",
#       "values": [0.00891787093, 0.581895, 0.315718859, ...]
#     }
#   },
#   "namespace": ""
# }
```

## Updating records

There are two methods for updating records and metadata, using _full_ or _partial_ updates.

### Full update

Full updates modify the entire record, including vector values and metadata. Updating a record by id is done the same way as [inserting records](insert-data). (Write operations in Pinecone are [idempotent](https://en.wikipedia.org/wiki/Idempotence).)

The `Upsert` operation writes records into an index.

> ℹ️ Note
>
> If a new value is upserted for an existing vector id, it will overwrite the
> previous value.

1. Update the value of the record `("id-3", [3.3, 3.3])`:

```python
index.upsert([("id-3", [3.3, 3.3])])
```
```js
await index.upsert([
  { id: '3', values: [3.3, 3.3] }
]);
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/upsert" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -d '{
    "vectors": [
      {
        "id": "id-3",
        "values": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
      }
    ]
  }'
```

2.  Fetch the record again. We should get `("id-3", [3.3, 3.3])`:

```python
index.fetch(["id-3"])
```
```js
await index.fetch(['id-3']);
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/fetch?ids=id-3" \
  -H "Api-Key: $PINECONE_API_KEY"
```

### Partial update

The `Update` operation performs partial updates that allow changes to _part_ of a record. Given an ID, we can update the vector value with the `values` argument or update metadata with the `set_metadata` argument.

> ⚠️ Warning
>
> The `Update` operation does not validate the existence of ids within an
> index. If a non-existent id is given then no changes are made and a `200 OK`
> will be returned.

To update the vector values of record `("id-3", [3.0, 3.0], {"type": "doc", "genre": "drama"})`:

```python
index.update(id="id-3", values=[4.0, 2.0])
```
```js
await index.update({
  id: 'id-3',
  values: [4.0, 2.0]
});
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/update" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
      "id": "id-3",
      "values": [
          4.0,
          2.0
      ]
    }'
```

The updated record would now be `("id-3", [4.0, 2.0], {"type": "doc", "genre": "drama"})`. Values have been updated but the metadata is unchanged.

When updating metadata only specified fields will be modified. If a specified field does not exist, it is added.

> ℹ️ Note
>
> Metadata updates apply _only_ to fields passed to the `set_metadata`
> argument. Any other fields will remain unchanged.

To update the metadata of record `("id-3", [4.0, 2.0], {"type": "doc", "genre": "drama"})`, use code like the following:

```python
index.update(id="id-3", set_metadata={"type": "web", "new": True})
```
```js
# Update the metadata
await index.update({
  id: 'id-3',
  metadata: {
    type: "web",
    new: true,
  },
});

# View the updated results
const fetchResults = await index.fetch(['id-3'])
console.log(fetchResults.records['id-3'])
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

# Update the metadata
curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/update" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
      "id": "id-3",
      "setMetadata": {
          "type": "web",
          "new": true
      }
    }'

# Fetch the record to view the results of the update
curl "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/fetch?ids=id-3" \
  -H "Api-Key: $PINECONE_API_KEY"
```

The updated record would now be `("id-3", [4.0, 2.0], {"type": "web", "genre": "drama", "new": true})`. The `type` metadata field has been updated to `web`, the `new` property has been added with value `true`, and the `genre` property has been unchanged.

Both vector and metadata can be updated at once by including both `values` and metadata arguments. To update both these parts of the `"id-3"` record we write:

```python
index.update(id="id-3", values=[1.0, 2.0], set_metadata={"type": "webdoc"})
```
```js
await index.update({
  id: 'id-3',
  values: [1.0, 2.0],
  metadata: {
    type: "webdoc",
  },
});
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

# Update both values and metadata
curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/update" \
  -H "Api-Key: $PINECONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
        "id": "id-3",
        "values": [1.0, 2.0],
        "setMetadata": {"type": "webdoc"}
      }'

# Fetch the record to view the results of the update
curl "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/fetch?ids=id-3" \
  -H "Api-Key: $PINECONE_API_KEY"
```

The updated record would now be `("id-3", [1.0, 2.0], {"type": "webdoc", "genre": "drama", "new": true})`.

## Deleting records

The `Delete` operation deletes records from an index.

Alternatively, it can also delete all records from an index or [namespace](namespaces).

When deleting large numbers of records, limit the scope of delete operations to hundreds of records per operation.

Instead of deleting all records in an index, [delete the index](https://www.pinecone.io/docs/manage-indexes/#deleting-an-index) and [recreate it](https://www.pinecone.io/docs/manage-indexes/#creating-an-index).

### Delete records by ID

**Example**

```python
index.delete(ids=["id-1", "id-2"], namespace='example-namespace')
```
```js
const ns = index.namespace('example-namespace')
// Delete one record by ID.
await ns.deleteOne('id-1');
// Delete more than one record by ID.
await ns.deleteMany(['id-2', 'id-3']);
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/delete?ids=id-1&ids=id-2&namespace=example-namespace" \
  -H "Api-Key: $PINECONE_API_KEY" 
```

### Delete records by namespace

To delete all records from a namespace, specify the appropriate parameter for your client and provide a
`namespace` parameter.

> ℹ️ Note
>
> If you delete all records from a single namespace, it will also delete the
> namespace.

**Example**:

```python
index.delete(delete_all=True, namespace='example-namespace')
```
```js
await index.namespace('example-namespace').deleteAll();
```
```shell curl
INDEX_NAME='index-name'
PINECONE_ENVIRONMENT='your-environment'
PINECONE_API_KEY='your-api-key'

PINECONE_PROJECT_ID=$(
  curl "https://controller.$PINECONE_ENVIRONMENT.pinecone.io/actions/whoami" \
    -H "Api-Key: $PINECONE_API_KEY" | jq -r '.project_name'
)

curl -X POST "https://$INDEX_NAME-$PINECONE_PROJECT_ID.svc.$PINECONE_ENVIRONMENT.pinecone.io/vectors/delete?deleteAll=true&namespace=example-namespace" \
  -H "Api-Key: $PINECONE_API_KEY" 
```

### Delete records by metadata

To delete records by metadata, [pass a metadata filter expression to the delete operation](https://www.pinecone.io/docs/metadata-filtering/#deleting-vectors-by-metadata-filter).

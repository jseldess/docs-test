---
title: Sparse-dense vectors
category: 6495c32609a24b00434e5b53
---

## Overview

Pinecone supports vectors with sparse and dense values, which allows you to perform [hybrid search](hybrid-search), or semantic and keyword search over your data in one query and combine the results for more relevant results. This topic describes the sparse-dense vector format in Pinecone.

To see sparse-dense embeddings in action, see the [Ecommerce hybrid search example](ecommerce-search).

## Sparse-dense vector format

Pinecone represents sparse values as a dictionary of two arrays: `indices` and `values`. The elements of `indices` have type `uint32`; the elements of `values` have type `float32`. 

**Example**

The following example defines two records with sparse and dense values.

```python
index = pinecone.Index('example-index') 

records=[
    {'id': 'vec1',
     # The 'values' are dense vector values.
     'values': [0.1, 0.2, 0.3],
     'metadata': {'genre': 'drama'},
     'sparse_values': {
         'indices': [10, 45, 16],
         'values': [0.5, 0.5, 0.2]
     }
    },
    {'id': 'vec2',
     'values': [0.2, 0.3, 0.4],
     'metadata': {'genre': 'action'},
     'sparse_values': {
             # Indices have type uint32 
             'indices': [15, 40, 11],
             # Values have type float32
             'values': [0.4, 0.5, 0.2]
     }
    }
]

```

Pinecone supports sparse vector values of sizes up to 1000 non-zero values and over 4 billion dimensions.

Assuming a dense vector component with 768 dimensions, Pinecone supports roughly 2.8M sparse vectors per `s1` pod or 900k per `p1` pod.

## Upserting records with sparse-dense values

You can upsert these values inside a vector parameter to [upsert a sparse-dense record](insert-data#upserting-vectors-with-sparse-values).

**Examples**

The following example upserts two vectors with sparse and dense values.

```python
index = pinecone.Index('example-index') 

upsert_response = index.upsert(
    vectors=[
        {'id': 'vec1',
         'values': [0.1, 0.2, 0.3],
         'metadata': {'genre': 'drama'},
         'sparse_values': {
             'indices': [10, 45, 16],
             'values': [0.5, 0.5, 0.2]
         }},
        {'id': 'vec2',
         'values': [0.2, 0.3, 0.4],
         'metadata': {'genre': 'action'},
         'sparse_values': {
             # Indices have type uint32 
             'indices': [15, 40, 11],
             # Values have type float32
             'values': [0.4, 0.5, 0.2]
         }}
    ],
    namespace='example-namespace'
)
```

Pinecone only supports upserting sparse-dense vectors to `p1` and `s1` indexes.

## Querying records with sparse-dense values

The following example queries an index using a sparse-dense vector.

```python
query_response = index.query(
    namespace="example-namespace",
    top_k=10,
    vector=[0.1, 0.2, 0.3],
    sparse_vector={
        'indices': [10, 45, 16],
        'values':  [0.5, 0.5, 0.2]
    }
)
```

In order to query an index using sparse values, the index must use the dotproduct metric. Attempting to query any other index with sparse values returns an error.`

To learn about weighting your sparse and dense vectors in queries, see [Weighting sparse and dense vectors](weighting-sparse-and-dense-vectors).



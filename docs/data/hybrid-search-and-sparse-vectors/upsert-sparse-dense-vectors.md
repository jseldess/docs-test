---
title: Upserting sparse-dense vectors
category: 6495c32609a24b00434e5b53
---

## Overview

Pinecone supports vectors with sparse and dense values, called [sparse-dense vectors](sparse-dense-vectors), which allows you to perform [hybrid search](hybrid-search). This topic describes how to upsert sparse-dense vectors.

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
    ]
)
```

Pinecone only supports upserting sparse-dense vectors to `p1` and `s1` indexes. Only indexes using the `dotproduct` [distance metric](indexes#distance-metrics) support querying sparse vectors. 

## Next steps

+ [Querying sparse-dense vectors](query-sparse-dense-vectors)

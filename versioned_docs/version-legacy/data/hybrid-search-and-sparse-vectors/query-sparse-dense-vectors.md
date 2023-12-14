---
title: Querying sparse-dense vectors
category: 6495c32609a24b00434e5b53
---

## Overview

Pinecone supports vectors with sparse and dense values, which allows you to perform [hybrid search](hybrid-search). This topic describes how to query sparse-dense vectors in Pinecone.

Pinecone only supports upserting sparse-dense vectors to `p1` and `s1` indexes.

## Querying records with sparse-dense values

To query records with sparse-dense values, use the `query` operation, specifying a value for [`sparse_vector`](/reference/query), which is an object containing the key-value pairs `indices` and `values`.  

> ⚠️  Warning 
> Providing a value for `sparse_values` to the `query` operation does not result in querying the sparse values. Use `sparse_vector` instead. 

The following example queries an index using a sparse-dense vector.

```python
query_response = index.query(
    top_k=10,
    vector=[0.1, 0.2, 0.3],
    sparse_vector={
        'indices': [10, 45, 16],
        'values':  [0.5, 0.5, 0.2]
    }
)
```

The value of `query_response` is like the following:

```shell
{'matches': [{'id': 'vec5', 'score': 0.44, 'values': []},
             {'id': 'vec1', 'score': 0.32, 'values': []},
             {'id': 'vec2', 'score': 0.26000002, 'values': []},
             {'id': 'vec3', 'score': 0.200000018, 'values': []},
             {'id': 'vec4', 'score': 0.140000015, 'values': []}]
}
```

In order to query an index using sparse values, the index must use [the `dotproduct` metric](indexes#distance-metrics). Attempting to query any other index with sparse values returns an error.

## Querying a sparse-dense index with explicit weighting

Because Pinecone's index views your sparse-dense vector as a single vector, it does not offer a built-in parameter to adjust the weight of a query's dense part against its sparse part; the index is agnostic to density or sparsity of coordinates in your vectors. You may, however, incorporate a linear weighting scheme by customizing your query vector, as we demonstrate in the function below.

**Examples**

The following example transforms vector values using an alpha parameter.

```python
def hybrid_score_norm(dense, sparse, alpha: float):
    """Hybrid score using a convex combination

    alpha * dense + (1 - alpha) * sparse

    Args:
        dense: Array of floats representing
        sparse: a dict of `indices` and `values`
        alpha: scale between 0 and 1
    """
    if alpha < 0 or alpha > 1:
        raise ValueError("Alpha must be between 0 and 1")
    hs = {
        'indices': sparse['indices'],
        'values':  [v * (1 - alpha) for v in sparse['values']]
    }
    return [v * alpha for v in dense], hs
```

The following example transforms a vector using the above function, then queries a Pinecone index. 

```python
sparse_vector = {
   'indices': [10, 45, 16],
   'values':  [0.5, 0.5, 0.2]
}
dense_vector = [0.1, 0.2, 0.3]

hdense, hsparse = hybrid_score_norm(dense_vector, sparse_vector, alpha=0.75)

query_response = index.query(
    namespace="example-namespace",
    top_k=10,
    vector=hdense,
    sparse_vector=hsparse
)
```



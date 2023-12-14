---
title: Using public Pinecone datasets
category: 6495c32609a24b00434e5b53
---

## Overview

This document explains how to use existing Pinecone datasets.

To learn about creating and listing datasets, see [Creating datasets](creating-datasets).

## Datasets contain vectors and metadata

Pinecone datasets contain rows of dense and sparse vector values and metadata. Pinecone's Python client supports upserting vectors from a dataset. You can also use datasets to iterate over vectors to automate queries.

## Listing public datasets

To list available public Pinecone datasets, use the `list_datasets()` method.

**Example**

The following example retrieves an object containing information about public Pinecone datasets.

```python
from pinecone_datasets import list_datasets

list_datasets()
```

The example above returns an object like the following:

```shell
['ANN_DEEP1B_d96_angular', 'ANN_Fashion-MNIST_d784_euclidean', 'ANN_GIST_d960_euclidean', 'ANN_GloVe_d100_angular', 'ANN_GloVe_d200_angular', 'ANN_GloVe_d25_angular', 'ANN_GloVe_d50_angular', 'ANN_LastFM_d64_angular', 'ANN_MNIST_d784_euclidean', 'ANN_NYTimes_d256_angular', 'ANN_SIFT1M_d128_euclidean', 'quora_all-MiniLM-L6-bm25', 'quora_all-MiniLM-L6-v2_Splade']
```

## Loading datasets

To load a dataset into memory, use the `load_dataset` method. You can use load a Pinecone public dataset or your own dataset.

**Example**

The following example loads the `quora_al-MiniLM-L6-bm25` Pinecone public dataset.

```python
from pinecone_datasets import list_datasets, load_dataset

list_datasets()
# ["quora_all-MiniLM-L6-bm25", ... ]

dataset = load_dataset("quora_all-MiniLM-L6-bm25")

dataset.head()
```

The example above prints the following output:

```shell
┌─────┬───────────────────────────┬─────────────────────────────────────┬───────────────────┬──────┐
│ id  ┆ values                    ┆ sparse_values                       ┆ metadata          ┆ blob │
│     ┆                           ┆                                     ┆                   ┆      │
│ str ┆ list[f32]                 ┆ struct[2]                           ┆ struct[3]         ┆      │
╞═════╪═══════════════════════════╪═════════════════════════════════════╪═══════════════════╪══════╡
│ 0   ┆ [0.118014, -0.069717, ... ┆ {[470065541, 52922727, ... 22364... ┆ {2017,12,"other"} ┆ .... │
│     ┆ 0.0060...                 ┆                                     ┆                   ┆      │
└─────┴───────────────────────────┴─────────────────────────────────────┴───────────────────┴──────┘
```

## Iterating over datasets

You can iterate over vector data in a dataset using the `iter_documents` method. You can use this method to upsert or update vectors, to automate benchmarking, or other tasks.

**Example**

The following example loads the `quora_all-MiniLM-L6-bm25` dataset, then iterates over the documents in the dataset in batches of 100 and upserts the vector data to a Pinecone index named `my-index`.

```python
import pinecone
from pinecone_datasets import list_datasets, load_dataset

dataset = load_dataset("quora_all-MiniLM-L6-bm25")

pinecone.init(api_key="API_KEY", environment="us-west1-gcp")

pinecone.create_index(name="my-index", dimension=384, pod_type='s1')

index = pinecone.Index("my-index")
```

## Iterate over documents in batches and upsert to an index.

```python
for batch in dataset.iter_documents(batch_size=100):
    index.upsert(vectors=batch)
```

The following example upserts the dataset as dataframe.

```python
import pinecone

from pinecone_datasets import list_datasets, load_dataset

dataset = load_dataset("quora_all-MiniLM-L6-bm25")

pinecone.init(api_key="API_KEY", environment="us-west1-gcp")

pinecone.create_index(name="my-index", dimension=384, pod_type='s1')

index = pinecone.Index("my-index")
```

## Upsert the dataset as a dataframe.

```python
index.upsert_from_dataframe(dataset.drop(columns=["blob"]))
```


## What's next 

* Learn more about [using datasets in the Pinecone Python client](https://pinecone-io.github.io/pinecone-datasets/pinecone_datasets.html)

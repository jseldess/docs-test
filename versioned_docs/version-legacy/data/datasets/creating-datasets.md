---
title: Creating and loading private datasets
category: 6495c32609a24b00434e5b53
---

## Overview

This document explains how to create, upload, and list your dataset for use by other Pinecone users. This guide shows how to create your own dataset using your own storage; you cannot upload your own dataset to the Pinecone dataset directory.

To learn about using existing Pinecone datasets, see [Using public Pinecone datasets](using-public-datasets).

## Creating a dataset

### Dependencies

The Pinecone datasets project uses `poetry` for dependency management and supports python versions 3.8+.

To install poetry, run the following command from the project root directory:

```shell
poetry install --with dev
```

### Dataset metadata

To create a public dataset, you may need to generate dataset metadata.

**Example**

The following example creates a metadata object `meta` containing metadata for a dataset `test_dataset`.


```python
from pinecone_datasets.catalog import DatasetMetadata

meta = DatasetMetadata(
    name="test_dataset",
    created_at="2023-02-17 14:17:01.481785",
    documents=2,
    queries=2,
    source="manual",
    bucket="LOCAL",
    task="unittests",
    dense_model={"name": "bert", "dimension": 3},
    sparse_model={"name": "bm25"},
)
```

If you intend to list your dataset, you can save the dataset metadata using the following command. Write permission to location is needed.

```python
dataset._save_metadata("non-listed-dataset", meta)
```

### Viewing dataset schema

To see the complete schema, run the following command:

```python
meta.schema()
```

### Running tests

To run tests locally, run the following command:

```shell
poetry run pytest --cov pinecone_datasets
```

## Uploading and listing a dataset

Pinecone datasets can load a dataset from any storage bucket where it has access using the default access controls for s3, gcs or local permissions.

Pinecone datasets expects data to be uploaded with the following directory structure:

**Figure 1: Expected directory structure for Pinecone datasets**

├── base_path                     # path to where all datasets
│   ├── dataset_id                # name of dataset
│   │   ├── metadata.json         # dataset metadata (optional, only for listed)
│   │   ├── documents             # datasets documents
│   │   │   ├── file1.parquet      
│   │   │   └── file2.parquet      
│   │   ├── queries               # dataset queries
│   │   │   ├── file1.parquet  
│   │   │   └── file2.parquet   
└── ...

Pinecone datasets scans storage and lists every dataset with metadata file. 

**Example**

The following shows the format of an example s3 bucket address for a datasets metadata file:

```s3://my-bucket/my-dataset/metadata.json```


## Using your own dataset

By default, the Pinecone client uses Pinecone's public datasets bucket on GCS. You can use your own bucket by setting the `PINECONE_DATASETS_ENDPOINT` environment variable.

**Example**

The following export command changes the default dataset storage endpoint to `gs://my-bucket`. Calling `list_datasets` or `load_dataset` now scans that bucket and list all datasets.

```python
export PINECONE_DATASETS_ENDPOINT="gs://my-bucket"
```

You can also use `s3://` as a prefix to your bucket to access an s3 bucket.

### Authenticating to your own storage bucket

Pinecone Datasets supports GCS and S3 storage buckets, using default authentication as provided by the fsspec implementation: gcsfs for GCS and s3fs for AWS.

To authenticate to an AWS s3 bucket using the key/secret method, follow these steps:

1. Set a new endpoint by setting the environment variable `PINECONE_DATASETS_ENDPOINT` to the s3 address for your bucket.

**Example**

```shell
export PINECONE_DATASETS_ENDPOINT="s3://my-bucket"
```

1. Use the key and secret parameters to pass your credentials to the `list_datasets` and `load_dataset` functions.

**Example**

```python
st = list_datasets(
        key=os.environ.get("S3_ACCESS_KEY"),
        secret=os.environ.get("S3_SECRET"),
    )

ds = load_dataset(
        "test_dataset",
        key=os.environ.get("S3_ACCESS_KEY"),
        secret=os.environ.get("S3_SECRET"),
)
```

### Accessing a non-listed dataset

To access a non-listed dataset, load it directly using the `Dataset` constructor.

**Example**

The following loads the dataset `non-listed-dataset`.

```python
from pinecone_datasets import Dataset

dataset = Dataset("non-listed-dataset")
```

## What's next

* Learn more about [using datasets in the Pinecone Python client](https://pinecone-io.github.io/pinecone-datasets/pinecone_datasets.html)

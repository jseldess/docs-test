---
title: Pinecone public datasets
category: 6495c32609a24b00434e5b53
---

## Overview

This document explains and describes Pinecone datasets.

To learn about using public Pinecone datasets, see [Using public datasets](using-public-datasets).

To learn about creating and listing datasets, see [Creating datasets](creating-datasets).

## Datasets contain vectors and metadata

Pinecone datasets contain rows of dense and sparse vector values and metadata. Pinecone's Python client supports upserting vectors from a dataset. You can also use datasets to iterate over vectors to automate queries.

## Available public datasets

The following table lists information about public Pinecone datasets that are currently available:

|name	               |documents      |source                                    |bucket                                               |task               |dense model	     |sparse model         |
| -------------------- | ------------- | ---------------------------------------- | --------------------------------------------------- | ----------------- | ---------------------- | ------------------- |
|ANN_DEEP1B_d96_angular|9,990,000      |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_DEEP1B_d96_angular    |ANN                |ANN benchmark           |None                 |
|ANN_Fashion-MNIST_d784_euclidean|60,000|https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_Fashion-MNIST_d784_euclidean|ANN	    |ANN benchmark           |None                 ||ANN_GIST_d960_euclidean|1,000,000       |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GIST_d960_euclidean   |ANN	        |ANN benchmark           |None                 ||ANN_GloVe_d100_angular|1,183,514        |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GloVe_d100_angular	|ANN	            |ANN benchmark           |None                 |
|ANN_GloVe_d200_angular|1,183,514        |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GloVe_d200_angular	|ANN	            |ANN benchmark           |None                 ||ANN_GloVe_d25_angular |1,183,514	   |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GloVe_d25_angular	    |ANN                |ANN benchmark           |None                 |
|ANN_GloVe_d50_angular |1,183,514        |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GloVe_d50_angular	|ANN	            |ANN benchmark           |None                 |
|ANN_GloVe_d64_angular |292,385	       |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_GloVe_d64_angular     |ANN                |ANN benchmark           |None                 |
|ANN_MNIST_d784_euclidean|60,000       |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_MNIST_d784_euclidean  |ANN                |ANN benchmark           |None                 |
|ANN_NYTimes_d256_angular|290,000      |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_NYTimes_d256_angular  |ANN                |ANN benchmark           |None                 |
|ANN_SIFT1M_d128_euclidean|1,000,000   |https://github.com/erikbern/ann-benchmarks|gs://pinecone-datasets-dev/ANN_SIFT1M_d128_euclidean |ANN                |ANN benchmark           |None                 |
|quora_all-MiniLM-L6-bm25|522,931      |https://quoradata.quora.com/First-Quora-Dataset-Release-Question-Pairs|gs://pinecone-datasets-dev/quora_all-MiniLM-L6-bm25|similar questions |sentence-transformers/msmarco-MiniLM-L6-cos-v5|naver/splade-cocondenser-ensembledistil|
|quora_all-MiniLM-L6-v2_Splade|522,931  |https://quoradata.quora.com/First-Quora-Dataset-Release-Question-Pairs|gs://pinecone-datasets-dev/quora_all-MiniLM-L6-v2_Splade|similar questions|sentence-transformers/msmarco-MiniLM-L6-cos-v5|naver/splade-cocondenser-ensembledistil|

## What's next 

* Learn more about [using datasets in the Pinecone Python client](https://pinecone-io.github.io/pinecone-datasets/pinecone_datasets.html)

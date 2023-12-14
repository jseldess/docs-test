---
title: Encoding sparse vectors
category: 6495c32609a24b00434e5b53
---

## Overview

Pinecone supports vectors with sparse and dense values, which allows you to perform [hybrid search](hybrid-search), or semantic and keyword search over your data in one query, for more relevant results. This topic describes how to use the [Pinecone Text Client](https://github.com/pinecone-io/pinecone-text/blob/main/README.md) to encode sparse vectors for use in Pinecone hybrid search.

To convert your own text corpus to sparse vectors, you can either use BM25 or SPLADE. This guide uses BM25, which is more common.

Learn more about [sparse and dense vectors](https://www.pinecone.io/learn/hybrid-search-intro/) in our Learning Center.

For an example of encoding sparse vectors at scale, see our [BM25 vector generation notebook](https://colab.research.google.com/github/pinecone-io/examples/blob/master/learn/search/semantic-search/sparse/bm25/bm25-vector-generation.ipynb).

## Install the Pinecone Text Client

The [Pinecone Text Client](https://github.com/pinecone-io/pinecone-text/blob/main/README.md) is a public Python package that provides text utilities designed for seamless integration with Pinecone's sparse-dense (hybrid) search. 

To install the Pinecone Text Client, use the following command:

```python
pip install pinecone-text
```

## Initialize the encoder and fit the corpus

Before encoding sparse vectors for use in hybrid search, you must initialize the BM25 encoder and fit it to your corpus of documents.

**Example**

The following example initializes a `BM25Encoder` object and calls the `fit()` function on the corpus, formatted as an array of strings.


```python
from pinecone_text.sparse import BM25Encoder

corpus = ["The quick brown fox jumps over the lazy dog",
          "The lazy dog is brown",
          "The fox is brown"]

# Initialize BM25 and fit the corpus.
bm25 = BM25Encoder()
bm25.fit(corpus)
```

If you want to use the default parameters for `BM25Encoder`, you can call the `default` method. The default parameters were fitted on the MS MARCO passage ranking dataset.

**Example**

```python
bm25 = BM25Encoder.default()
```

## Encode documents for Pinecone

After the encoder is initialized and fit, you can encode documents as sparse vectors. 

**Example**

The following example encodes a new document as a sparse vector for upsert to a Pinecone index.

```python
doc_sparse_vector = bm25.encode_documents("The brown fox is quick")
```

Now, the contents of `doc_sparse_vector` are like the following:

```json
{"indices": [102, 18, 12, ...], "values": [0.21, 0.38, 0.15, ...]}
```

You can encode a string as a sparse vector for use in a hybrid search query in the same way.

**Example**

The following example encodes a string as a sparse vector for use in a hybrid search query.

```python
query_sparse_vector = bm25.encode_queries("Which fox is brown?")
```

Now, the contents of `query_sparse_vector` are like the following:

```JSON
{"indices": [102, 16, 18, ...], "values": [0.21, 0.11, 0.15, ...]}
```

## Next steps

+ Learn how to [upsert sparse-dense vectors](upsert-sparse-dense-vectors).
+ Learn more about the [Pinecone Text Client](https://github.com/pinecone-io/pinecone-text).

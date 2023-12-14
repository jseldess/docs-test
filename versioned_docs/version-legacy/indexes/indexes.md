---
title: Understanding indexes
sidebar_position: 1
---

This document describes concepts related to Pinecone indexes. To learn how to create or modify an index, see [Manage indexes](manage-indexes#creating-an-index).

An index is the highest-level organizational unit of vector data in Pinecone. It accepts and stores vectors, serves queries over the vectors it contains, and does other vector operations over its contents. Each index runs on at least one **pod**. 

## Pods, pod types, and pod sizes

Pods are pre-configured units of hardware for running a Pinecone service. Each index runs on one or more pods. Generally, more pods mean more storage capacity, lower latency, and higher throughput. You can also create pods of different sizes.

Once an index is created using a particular pod type, you cannot change the pod type for that index. However, you can [create a new index from that collection](manage-indexes/#create-an-index-from-a-collection) with a different pod type.

Different pod types are priced differently. See [pricing](https://www.pinecone.io/pricing/) for more details.

### Starter plan

When using the starter plan, you can create one pod with enough resources to support approximately 100,000 vectors with 1536-dimensional embeddings and metadata; the capacity is proportional for other dimensions.

When using a starter plan, all [`create_index`](https://docs.pinecone.io/reference/create_index) calls ignore the `pod_type` parameter.

### s1 pods

These storage-optimized pods provide large storage capacity and lower overall costs with slightly higher query latencies than p1 pods. They are ideal for very large indexes with moderate or relaxed latency requirements.

Each s1 pod has enough capacity for around 5M vectors of 768 dimensions.

### p1 pods

These performance-optimized pods provide very low query latencies, but hold fewer vectors per pod than s1 pods. They are ideal for applications with low latency requirements (\< 100ms).

Each p1 pod has enough capacity for around 1M vectors of 768 dimensions.

### p2 pods

The p2 pod type provides greater query throughput with lower latency. For vectors with fewer than 128 dimension and queries where `topK` is less than 50, p2 pods support up to 200 QPS per replica and return queries in less than 10ms. This means that query throughput and latency are better than s1 and p1.

Each p2 pod has enough capacity for around 1M vectors of 768 dimensions. However, capacity may vary with dimensionality.

The data ingestion rate for p2 pods is significantly slower than for p1 pods; this rate decreases as the number of dimensions increases. For example, a p2 pod containing vectors with 128 dimensions can upsert up to 300 updates per second; a p2 pod containing vectors with 768 dimensions or more supports  upsert of 50 updates per second. Because query latency and throughput for p2 pods vary from p1 pods, test p2 pod performance with your dataset.

The p2 pod type does not support sparse vector values.

### Pod size and performance

Pod performance varies depending on a variety of factors. To observe how your workloads perform on a given pod type, experiment with your own data set.

Each pod type supports four pod sizes: `x1`, `x2`, `x4`, and `x8`. Your index storage and compute capacity doubles for each size step. The default pod size is `x1`. You can increase the size of a pod after index creation.

To learn about changing the pod size of an index, see [Manage indexes](manage-indexes/#changing-pod-sizes).

### Distance metrics

You can choose from different metrics when creating a vector index:

- `euclidean`
  - This is used to calculate the distance between two data points in a plane. It is one of the most commonly used distance metric. For an example, see our [image similarity search example](image-similarity-search/).
  - When you use `metric='euclidean'`, the most similar results are those with the **lowest score**.
- `cosine`
  - This is often used to find similarities between different documents. The advantage is that the scores are normalized to [-1,1] range.
- `dotproduct`
  - This is used to multiply two vectors. You can use it to tell us how similar the two vectors are. The more positive the answer is, the closer the two vectors are in terms of their directions.

For the full list of parameters available to customize an index, see the [create_index API reference](reference/create_index/).

Depending on your application, some metrics have better recall and precision performance than others. For more information, see: [What is Vector Similarity Search?](https://www.pinecone.io/learn/what-is-similarity-search/)

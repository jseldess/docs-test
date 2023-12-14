---
title: Scale indexes
sidebar_position: 4
---

In this topic, we explain how you can scale your indexes horizontally and vertically.

Projects in the `gcp-starter` environment do not support the features referred to here, including pods, replicas, and collections.

## Vertical vs. horizontal scaling

If you need to scale your environment to accommodate more vectors, you can modify your existing index to scale it vertically or create a new index and scale horizontally. This article will describe both methods and how to scale your index effectively. 

## Vertical scaling

Scaling vertically is fast and involves no downtime. This is a good choice when you can't pause upserts and must continue serving traffic. It also allows you to double your capacity instantly. However, there are some factors to consider.

By [changing the pod size](manage-indexes#changing-pod-sizes), you can scale to x2, x4, and x8 pod sizes, which means you are doubling your capacity at each step. Moving up to a new capacity will effectively double the number of pods used at each step. If you need to scale by smaller increments, then consider horizontal scaling. 

The number of base pods you specify when you initially create the index is static and cannot be changed. For example, if you start with 10 pods of `p1.x1` and vertically scale to `p1.x2`, this equates to 20 pods worth of usage. Neither can you change pod types with vertical scaling. If you want to change your pod type while scaling, then horizontal scaling is the better option. 

You can only scale index sizes up and cannot scale them back down.
 
See our learning center for more information on [vertical scaling](https://www.pinecone.io/learn/testing-p2-collections-scaling/#vertical-scaling-on-p1-and-s1).
 
## Horizontal scaling

There are two approaches to horizontal scaling in Pinecone: adding pods and adding replicas. Adding pods increases all resources but requires a pause in upserts; adding replicas only increases throughput and requires no pause in upserts.

### Adding pods

Adding pods to an index increases all resources, including available capacity. Adding pods to an existing index is possible using our [collections](collections) feature. A collection is an immutable snapshot of your index in time: a collection stores the data but not the original index definition.

When you [create an index from a collection](manage-indexes#create-an-index-from-a-collection), you define the new index configuration. This allows you to scale the base pod count horizontally without scaling vertically. The main advantage of this approach is that you can scale incrementally instead of doubling capacity as with vertical scaling. Also, you can redefine pod types if you are experimenting or if you need to use a different pod type, such asperformance-optimized pods or storage-optimized pods. Another advantage of this method is that you can change your [metadata configuration](manage-indexes#selective-metadata-indexing) to redefine metadata fields as indexed or stored-only. This is important when [tuning your index](performance-tuning) for the best throughput. 

Here are the general steps to make a copy of your index and create a new index while changing the pod type, pod count, metadata configuration, replicas, and all typical parameters when creating a new collection: 

1. Pause upserts.
1. Create a collection from the current index.
1. Create an index from the collection with new parameters.
1. Continue upserts to the newly created index. Note: the URL has likely changed.
1. Delete the old index if desired.

### Adding replicas

Each replica duplicates the resources and data in an index. This means that adding additional replicas increases the throughput of the index but not its capacity. However, adding replicas does not require downtime.

Throughput in terms of queries per second (QPS) scales linearly with the number of replicas per index.

To add replicas, use the `configure_index` operation to [increase the number of replicas for your index](manage-indexes#replicas).

## Next steps

* See our learning center for more information on [vertical scaling](https://www.pinecone.io/learn/testing-p2-collections-scaling/#vertical-scaling-on-p1-and-s1).
* Learn more about [collections](collections).
 


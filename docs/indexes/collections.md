---
title: Understanding collections
sidebar_position: 5
---

This document explains the concepts related to collections in Pinecone.

**A collection is a static copy of an index.** It is a non-queryable representation of a set of vectors and metadata. You can create a collection from an index, and you can create a new index from a collection. This new index can differ from the original source index: the new index can have a different number of pods, a different pod type, or a different similarity metric.

Indexes in the `gcp-starter` environment do not support collections.

## Use cases for collections

Creating a collection from your index is useful when performing tasks like the following:

+ Temporarily shutting down an index
+ Copying the data from one index into a different index;
+ Making a backup of your index
+ Experimenting with different index configurations

To learn about creating backups with collections, see [Back up indexes](back-up-indexes/#create-a-backup-using-a-collection).

To learn about creating indexes from collections, see [Manage indexes](manage-indexes/#create-an-index-from-a-collection).

## Performance 

Collections operations perform differently with different pod types.

+ Creating a collection from an index takes approximately 10 minutes. 
+ Creating a p1 or s1 index from a collection takes approximately 10 minutes.
+ Creating a p2 index from a collection can take several hours.

## Limitations

You cannot query or write to a collection after its creation. For this reason, a collection only incurs storage costs.

You can only perform operations on collections in the current Pinecone project.

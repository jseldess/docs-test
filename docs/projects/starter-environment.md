---
title: gcp-starter environment
sidebar_position: 3
---

## Overview

This document describes concepts related to the `gcp-starter` environment. To learn about indexes and other environments, see [Understanding](indexes).

## The `gcp-starter` region is a unique Starter Plan region

Users on the [Starter Plan](projects#starter-plan) can choose to deploy their project on one of multiple [environments](projects#project-environment). One option is the `gcp-starter` region.

Unlike other Starter Plan regions, the `gcp starter` region has unique features and limitations.

## Features

Like other Starter Plan environments, projects on the `gcp-starter` environment support one pod with enough resources to support approximately 100,000 vectors with 1536-dimensional embeddings and metadata; the capacity is proportional for other dimensions. Indexes on the `gcp-starter` environment do not specify pod types; [`create_index`](https://docs.pinecone.io/reference/create_index) calls ignore the `pod_type` parameter.

Unlike other Starter Plan environments, projects in the `gcp-starter` region have no retention limits; data is retained indefinitely. Indexes in these projects are not deleted after inactivity as in other environments.

After upgrading from the Starter Plan, you keep your free `gcp-starter` project: you are not charged for use on this project. To use your data on a Standard or Enterprise environment, [insert the data](insert-data) to a new project in a [supported environment](projects#project-environment). 

## Limitations

Like other Starter Plan environments, projects in the `gcp-starter` environment do not support replicas.

After upserting records to indexes in `gcp-starter`, the `query` and `describe_index_stats` operations may not return updated records for up to 10 seconds. 

The `gcp-starter` environment does not support the following features:

+ Collections
+ Delete by metadata
+ `configure_index()`. Because this environment only supports one index configuration, this operation is not supported.
+ `describe_index()` with metadata filtering
+ `metadata_config` parameter to `create_index()`.
+ Metadata strings containing the character `Δ`. This is a reserved character in the underlying storage format.

## Developing on `gcp-starter`

Because projects on the `gcp-starter` region do not support the above features, you may need to use different features when developing your project.

### Namespaces

Indexes in `gcp-starter` are limited to 100 [namespaces](namespaces). If you need more than 100 namespaces, you may wish to [use metadata filtering to support multitenancy](multitenancy#metadata-filtering) in your project. Another alternative is to upgrade to the [Standard or Enterprise plans](https://www.pinecone.io/pricing/) and use index types that support more namespaces.

### Collections

Projects in the `gcp-starter` environment do not support the [collections](collections) feature. However, collections may not be necessary or appropriate for projects in the `gcp-starter` environment. Collections serve two primary purposes: decreasing usage by archiving inactive indexes, and experimenting with different index configurations. However, projects on the `gcp-starter` environment neither incur usage costs nor specify pod types or sizes.

### Delete by metadata

Projects in the `gcp-starter` environment do not support [deleting records by metadata](https://docs.pinecone.io/docs/manage-data#delete-vectors-by-metadata). In some cases, you may be able to [delete records by ID](https://docs.pinecone.io/docs/manage-data#delete-vectors-by-id) instead. This may require you to first [query your index with metadata filters](https://docs.pinecone.io/docs/manage-data#delete-vectors-by-id), then extract the record IDs.



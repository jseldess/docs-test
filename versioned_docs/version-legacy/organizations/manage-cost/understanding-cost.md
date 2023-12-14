---
title: Understanding cost
category: 6495c30f774cf1001e067303
---

## Overview

This topic describes the calculation of total cost for Pinecone, including an example. All prices are examples; for the latest pricing details, please see our [pricing page](https://www.pinecone.io/pricing/). While our pricing page lists rates on an hourly basis for ease of comparison, this topic lists prices per minute, as this is how Pinecone calculates billing.

## How does Pinecone calculate costs?

For each index, billing is determined by the per-minute price per pod and the number of pods the index uses, regardless of index activity. The per-minute price varies by pod type, pod size, account plan, and cloud region.

Total cost depends on a combination of factors:

+ **Pod type.** Each [pod type](indexes#pods-pod-types-and-pod-sizes) has different per-minute pricing.
+ **Number of pods.** This includes replicas, which duplicate pods.
+ **Pod size.**  Larger pod sizes have proportionally higher costs per minute.
+ **Total pod-minutes.** This includes the total time each pod is running, starting at pod creation and rounded up to 15-minute increments.
+ **Cloud provider.** The cost per pod-type and pod-minute varies depending on the cloud provider you choose for your project. 
+ **Collection storage.** Collections incur costs per GB of data per minute in storage, rounded up to 15-minute increments.
+ **Plan.** The free plan incurs no costs; the Standard or Enterprise plans incur different costs per pod-type, pod-minute, cloud provider, and collection storage.

The following equation calculates the total costs accrued over time:
 
(Number of pods) \* (pod size) \* (number of replicas) \* (minutes pod exists) \* (pod price per minute) 
 + (collection storage in GB) \* (collection storage time in minutes) \* (collection storage price per GB per minute)

To see a calculation of your current usage and costs, see the [usage dashboard](monitoring-usage) in the Pinecone console.

## Example total cost calculation

An example application has the following requirements:

* 1,000,000 vectors with 1536 dimensions
* 150 queries per second with `top_k` = 10
* Deployment in an EU region
* Ability to store 1GB of inactive vectors

[Based on these requirements](https://docs.pinecone.io/docs/choosing-index-type-and-size), the organization chooses to configure the project to use the Standard billing plan to host one `p1.x2` pod with two replicas and a collection containing 1 GB of data. This project runs continuously for the month of January on the Standard plan. The components of the total cost for this example are given in Table 1 below:

**Table 1: Example billing components**

| Billing component            | Value      |
| ---------------------------- | ---------- |
| Number of pods               | 1          |
| Number of replicas           | 3          |
| Pod size                     | x2         |
| Total pod count              | 6          |
| Minutes in January           | 44,640     |
| Pod-minutes (pods * minutes) | 267,840    |
| Pod price per minute         | $0.0012    |
| Collection storage           | 1 GB       |
| Collection storage minutes   | 44,640     |
| Price per storage minute     | $0.00000056|

The invoice for this example is given in Table 2 below:

**Table 2: Example invoice**

| Product      | Quantity           | Price per unit | Charge |   
| ------------ | ------------------ | -------------- | ------ |
| Collections  | 44,640             | $0.00000056    | $0.025 |
| P2 Pods (AWS)| 0                  |                | $0.00  |
| P2 Pods (GCP)| 0                  |                | $0.00  |
| S1 Pods      | 0                  |                | $0.00  |
| P1 Pods      | 267,840            | $0.0012        | $514.29|

Amount due $514.54         

## Cost controls

Pinecone offers tools to help you understand and control your costs. 

+ **Monitoring usage.** Using the [usage dashboard](monitoring-usage) in the Pinecone console, you can monitor your Pinecone usage and costs as these accrue.

+ **Pod limits.** Pinecone project owners can [set limits for the total number of pods](change-project-pod-limit) across all indexes in the project. The default pod limit is 5.

## Next steps

+ Learn about [choosing index type and size](choosing-index-type-and-size)
+ Learn about [monitoring usage](monitoring-usage)

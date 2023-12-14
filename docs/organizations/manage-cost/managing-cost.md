---
title: Managing cost
category: 6495c30f774cf1001e067303
---

## Overview

This topic provides guidance on managing the cost of Pinecone. For the latest pricing details, see our [pricing page](https://www.pinecone.io/pricing/). For help estimating total cost, see [Understanding total cost](understanding-cost). To see a calculation of your current usage and costs, see the [usage dashboard](monitoring-usage) in the Pinecone console.

The [total cost of Pinecone usage](understanding-cost) derives from [pod type](indexes#pods-pod-types-and-pod-sizes), the number of pods in use, pod size, the total time each pod is running, and the billing plan. This topic describes several ways you can manage your overall Pinecone cost by adjusting these variables.

## Use the Starter Plan for small projects or prototypes

The [Starter Plan](https://www.pinecone.io/pricing/) incurs no costs, and supports roughly 100,000 vectors with 1536 dimensions. If this meets the needs of your project, you can use Pinecone for free; if you decide to [scale your index](scaling-indexes) or [move it to production](moving-to-production), you can upgrade your billing plan later.

## Choose the right pod size for your application

Different Pinecone pod sizes are designed for different applications, and some are more expensive than others. By [choosing the appropriate pod type and size](choosing-index-type-and-size), you can pay for the resources you need. For example, the `s1` pod type provides large storage capacity and lower overall costs with slightly higher query latencies than `p1` pods. By switching to a different pod type, you may be able to reduce costs while still getting the performance your application needs.

## Back up inactive indexes

When a specific index is not in use, [back it up using collections](back-up-indexes) and delete the inactive index. When you're ready to use these vectors again, you can [create a new index from the collection](manage-indexes#create-an-index-from-a-collection). This new index can also use a different index type or size. Because it's relatively cheap to store collections, you can reduce costs by only running an index when it's in use.

## Use namespaces for multitenancy

If your application requires you to separate users into groups, consider [using namespaces to isolate segments of vectors within a single index](multitenancy#namespaces). Depending on your application requirements, this may allow you to reduce the total number of active indexes. 

## Commit to annual spend

Users who commit to an annual contract may qualify for discounted rates. To learn more, [contact Pinecone sales](https://www.pinecone.io/contact/).

## Talk to support

Users on the Standard and Enterprise plans can [contact support](https://support.pinecone.io) for help in optimizing costs.

## Next steps

+ Learn about [choosing index type and size](choosing-index-type-and-size)
+ Learn about [monitoring usage](monitoring-usage)

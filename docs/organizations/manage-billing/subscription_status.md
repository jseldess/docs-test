---
title: Understanding subscription status
sidebar_position: 5
---

## Overview 

This document describes the different subscription statuses for your Pinecone organization.

## Subscription statuses for accounts with past due payments

Users on the [Standard and Enterprise Plans](https://www.pinecone.io/pricing/) pay regular payments [based on usage](understanding-cost). When a payment is past due, Pinecone may restrict your account.

Past due accounts have one of the following subscription statuses:

+ **Restricted**. This organization is now on the Starter Plan and can no longer create new resources. 
+ **Suspended**. The API keys for this organization are no longer valid; calls to the Pinecone API fail.
+ **Deactivated**. Pinecone archives this organization's indexes.

## Reinstating a deactivated organization

If your organization is deactivated, follow these steps to reinstate your subscription and reactivate your indexes:

1. Pay all past due invoices.
1. (For organizations with cloud marketplace billing) Reenable cloud marketplace billing for [AWS](setting-up-aws-marketplace-billing) or [GCP](setting-up-gcp-marketplace-billing).
1. In the Pinecone console, [change your billing plan](changing-your-billing-plan) back to the desired plan.
1. Click **API Keys**. This view displays your new API keys. 
1. Update all queries to use these new keys.
1. [Recreate your indexes from the collections](manage-indexes#create-an-index-from-a-collection) that contain the backup of your old indexes.

## What's next

+ Learn how to [change your billing plan](changing-your-billing-plan)


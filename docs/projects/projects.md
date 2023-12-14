---
title: Understanding projects
sidebar_position: 1
---

This document explains the concepts related to Pinecone projects.

## Projects contain indexes and users

Each Pinecone project contains a number of [indexes](/docs/indexes) and users. Only a user who belongs to the project can access the indexes in that project. Each project also has at least one project owner. All of the pods in a single project are located in a single environment. 


## Project settings

When you create a new project, you can choose the **name**, **deployment environment**, and **pod limit**.

### Project environment

When creating a project, you must choose a cloud environment for the indexes in that project. Your project environment can affect your [pricing](https://pinecone.io/pricing). The following table lists the available cloud regions, the corresponding values of the `environment` parameter for the [init() operation](quickstart#2-get-and-verify-your-pinecone-api-key), and which billing tier has access to each environment:

| Cloud | Region                       | Environment                 | Tier Availability     |
| ----- | ---------------------------- | --------------------------- | --------------------- |
| GCP   | us-central-1 (Iowa)          | gcp-starter                 | Starter               |
| GCP   | us-west-1 (N. California)    | us-west1-gcp-free           | Starter               |
| GCP   | asia-southeast-1 (Singapore) | asia-southeast1-gcp-free    | Starter               |
| GCP   | us-west-4 (Las Vegas)        | us-west4-gcp-free           | Starter               |
| GCP   | us-west-1 (N. California)    | us-west1-gcp                | Standard / Enterprise |
| GCP   | us-central-1 (Iowa)          | us-central1-gcp             | Standard / Enterprise |
| GCP   | us-west-4 (Las Vegas)        | us-west4-gcp                | Standard / Enterprise |
| GCP   | us-east-4 (Virginia)         | us-east4-gcp                | Standard / Enterprise |
| GCP   | northamerica-northeast-1     | northamerica-northeast1-gcp | Standard / Enterprise |
| GCP   | asia-northeast-1 (Japan)     | asia-northeast1-gcp         | Standard / Enterprise |
| GCP   | asia-southeast-1 (Singapore) | asia-southeast1-gcp         | Standard / Enterprise |
| GCP   | us-east-1 (South Carolina)   | us-east1-gcp                | Standard / Enterprise |
| GCP   | eu-west-1 (Belgium)          | eu-west1-gcp                | Standard / Enterprise |
| GCP   | eu-west-4 (Netherlands)      | eu-west4-gcp                | Standard / Enterprise |
| AWS   | us-east-1 (Virginia)         | us-east-1-aws               | Standard / Enterprise |
| Azure | eastus (Virginia)            | eastus-azure                | Standard / Enterprise |

\* This environment has unique features and limitations. See [`gcp-starter` environment](starter-environment) for more information.


 [Contact us](http://www.pinecone.io/contact/) if you need a dedicated deployment in other regions.

The environment cannot be changed after the project is created.

### Project pod limit

You can set the maximum number of pods that can be used in total across all indexes in a project. Use this to control costs.

The pod limit can be changed only by the project owner.

### Project roles

There are two project roles: **Project owner** and **project member.** Table 1 below summarizes the permissions for each role.

**Table 1: Project roles and permissions**

| Project role        | Permissions in organization    |
| ------------------- | ------------------------------ |
| Project owner       | Manage project members         |
|                     | Manage project API keys        |
|                     | Manage pod limits              |
| Project member      | Access API keys                |
|                     | Create indexes in project      |
|                     | Use indexes in project         |

## API keys

Each Pinecone [project](projects) has one or more API keys. In order to [make calls to the Pinecone API](quickstart), a user must provide a valid API key for the relevant Pinecone project.

To view the API key for your project, open the [Pinecone console](https://app.pinecone.io), select the project, and click **API Keys**.

## Project ID

Each Pinecone project has a project ID. This hexadecimal string appears as part of the URL for API calls. 

To find a project's ID, follow these steps:

1. Go to the [Pinecone console](https://app.pinecone.io).
1. In the upper-left corner, select your project.
1. Click **Indexes**.
1. Under the name of your indexes, find the index URL. For example:

    `example-index-1e3g52e.svc.us-east1-gcp.pinecone.io`

The portion of the index URL after the index name and before the dot is the project ID. 

For example, in the index URL `test-index-3e2f43f.svc.us-east1-gcp.pinecone.io`, the project ID is `3e2f43f`. 

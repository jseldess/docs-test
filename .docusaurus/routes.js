import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '65f'),
    routes: [
      {
        path: '/docs/.',
        component: ComponentCreator('/docs/.', '250'),
        routes: [
          {
            path: '/docs/.',
            component: ComponentCreator('/docs/.', '9fa'),
            routes: [
              {
                path: '/docs/./category/data',
                component: ComponentCreator('/docs/./category/data', '711'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/./category/data-1',
                component: ComponentCreator('/docs/./category/data-1', '79b'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/./category/data-2',
                component: ComponentCreator('/docs/./category/data-2', '081'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/./category/data-3',
                component: ComponentCreator('/docs/./category/data-3', '752'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./category/getting-started',
                component: ComponentCreator('/docs/./category/getting-started', '88a'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/./category/getting-started-1',
                component: ComponentCreator('/docs/./category/getting-started-1', '5c1'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/./category/getting-started-2',
                component: ComponentCreator('/docs/./category/getting-started-2', 'df7'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/./category/getting-started-3',
                component: ComponentCreator('/docs/./category/getting-started-3', '463'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./category/indexes',
                component: ComponentCreator('/docs/./category/indexes', '5a1'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/./category/indexes-1',
                component: ComponentCreator('/docs/./category/indexes-1', '64a'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/./category/indexes-2',
                component: ComponentCreator('/docs/./category/indexes-2', 'ad1'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/./category/indexes-3',
                component: ComponentCreator('/docs/./category/indexes-3', 'aea'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./category/organizations',
                component: ComponentCreator('/docs/./category/organizations', '56f'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/./category/organizations-1',
                component: ComponentCreator('/docs/./category/organizations-1', '540'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/./category/organizations-2',
                component: ComponentCreator('/docs/./category/organizations-2', '776'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/./category/organizations-3',
                component: ComponentCreator('/docs/./category/organizations-3', 'a28'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./category/projects',
                component: ComponentCreator('/docs/./category/projects', 'f46'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/./category/projects-1',
                component: ComponentCreator('/docs/./category/projects-1', 'c39'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/./category/projects-2',
                component: ComponentCreator('/docs/./category/projects-2', 'c27'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/./category/projects-3',
                component: ComponentCreator('/docs/./category/projects-3', '9b9'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/datasets',
                component: ComponentCreator('/docs/./data/datasets', '7c7'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/datasets/creating-datasets',
                component: ComponentCreator('/docs/./data/datasets/creating-datasets', '0d7'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/datasets/pinecone-public-datasets',
                component: ComponentCreator('/docs/./data/datasets/pinecone-public-datasets', '497'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/datasets/using-public-datasets',
                component: ComponentCreator('/docs/./data/datasets/using-public-datasets', 'd28'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors', 'aea'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors/encode-sparse-vectors',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors/encode-sparse-vectors', '579'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors/hybrid-search',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors/hybrid-search', '0eb'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors/query-sparse-dense-vectors',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors/query-sparse-dense-vectors', '553'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors/sparse-dense-vectors',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors/sparse-dense-vectors', '8fd'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/hybrid-search-and-sparse-vectors/upsert-sparse-dense-vectors',
                component: ComponentCreator('/docs/./data/hybrid-search-and-sparse-vectors/upsert-sparse-dense-vectors', 'd4f'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/insert-data',
                component: ComponentCreator('/docs/./data/insert-data', '60c'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/manage-data',
                component: ComponentCreator('/docs/./data/manage-data', 'ce8'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/metadata-filtering',
                component: ComponentCreator('/docs/./data/metadata-filtering', '33d'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./data/query-data',
                component: ComponentCreator('/docs/./data/query-data', 'd44'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./getting-started/authentication',
                component: ComponentCreator('/docs/./getting-started/authentication', 'f63'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./getting-started/choosing-index-type-and-size',
                component: ComponentCreator('/docs/./getting-started/choosing-index-type-and-size', 'b89'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./getting-started/examples',
                component: ComponentCreator('/docs/./getting-started/examples', 'aa5'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./getting-started/overview',
                component: ComponentCreator('/docs/./getting-started/overview', '6f0'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./getting-started/quickstart',
                component: ComponentCreator('/docs/./getting-started/quickstart', '2c5'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/',
                component: ComponentCreator('/docs/./indexes/', '2f7'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/back-up-indexes',
                component: ComponentCreator('/docs/./indexes/back-up-indexes', '045'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/collections',
                component: ComponentCreator('/docs/./indexes/collections', '6c6'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/manage-indexes',
                component: ComponentCreator('/docs/./indexes/manage-indexes', '8c1'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/namespaces',
                component: ComponentCreator('/docs/./indexes/namespaces', '32e'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./indexes/scaling-indexes',
                component: ComponentCreator('/docs/./indexes/scaling-indexes', '794'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/',
                component: ComponentCreator('/docs/./organizations/', '4f0'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/',
                component: ComponentCreator('/docs/./organizations/manage-billing/', '2fd'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/changing-your-billing-plan',
                component: ComponentCreator('/docs/./organizations/manage-billing/changing-your-billing-plan', 'ecb'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/setting-up-aws-marketplace-billing',
                component: ComponentCreator('/docs/./organizations/manage-billing/setting-up-aws-marketplace-billing', 'f31'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/setting-up-azure-marketplace-billing',
                component: ComponentCreator('/docs/./organizations/manage-billing/setting-up-azure-marketplace-billing', '75c'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/setting-up-gcp-marketplace-billing',
                component: ComponentCreator('/docs/./organizations/manage-billing/setting-up-gcp-marketplace-billing', 'b9f'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-billing/subscription_status',
                component: ComponentCreator('/docs/./organizations/manage-billing/subscription_status', '7cf'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-cost/',
                component: ComponentCreator('/docs/./organizations/manage-cost/', '318'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-cost/managing-cost',
                component: ComponentCreator('/docs/./organizations/manage-cost/managing-cost', 'f87'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-cost/monitoring-usage',
                component: ComponentCreator('/docs/./organizations/manage-cost/monitoring-usage', '234'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations/manage-cost/understanding-cost',
                component: ComponentCreator('/docs/./organizations/manage-cost/understanding-cost', '145'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/',
                component: ComponentCreator('/docs/./projects/', '559'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/manage-projects/',
                component: ComponentCreator('/docs/./projects/manage-projects/', '7ef'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/manage-projects/add-users-to-projects-and-organizations',
                component: ComponentCreator('/docs/./projects/manage-projects/add-users-to-projects-and-organizations', 'b8b'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/manage-projects/change-project-pod-limit',
                component: ComponentCreator('/docs/./projects/manage-projects/change-project-pod-limit', 'ede'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/manage-projects/create-project',
                component: ComponentCreator('/docs/./projects/manage-projects/create-project', '777'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/manage-projects/rename-project',
                component: ComponentCreator('/docs/./projects/manage-projects/rename-project', '6da'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects/starter-environment',
                component: ComponentCreator('/docs/./projects/starter-environment', 'fa4'),
                exact: true,
                sidebar: "examplesSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/legacy',
        component: ComponentCreator('/docs/legacy', '1f5'),
        routes: [
          {
            path: '/docs/legacy',
            component: ComponentCreator('/docs/legacy', 'ed7'),
            routes: [
              {
                path: '/docs/legacy/category/data',
                component: ComponentCreator('/docs/legacy/category/data', '6fc'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/legacy/category/data-1',
                component: ComponentCreator('/docs/legacy/category/data-1', '3c4'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/legacy/category/data-2',
                component: ComponentCreator('/docs/legacy/category/data-2', 'de3'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/legacy/category/data-3',
                component: ComponentCreator('/docs/legacy/category/data-3', 'ec3'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/category/getting-started',
                component: ComponentCreator('/docs/legacy/category/getting-started', 'a72'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/legacy/category/getting-started-1',
                component: ComponentCreator('/docs/legacy/category/getting-started-1', '784'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/legacy/category/getting-started-2',
                component: ComponentCreator('/docs/legacy/category/getting-started-2', '8d3'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/legacy/category/getting-started-3',
                component: ComponentCreator('/docs/legacy/category/getting-started-3', '7f8'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/category/indexes',
                component: ComponentCreator('/docs/legacy/category/indexes', 'fa6'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/legacy/category/indexes-1',
                component: ComponentCreator('/docs/legacy/category/indexes-1', '608'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/legacy/category/indexes-2',
                component: ComponentCreator('/docs/legacy/category/indexes-2', 'f89'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/legacy/category/indexes-3',
                component: ComponentCreator('/docs/legacy/category/indexes-3', '19a'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/category/organizations',
                component: ComponentCreator('/docs/legacy/category/organizations', '57e'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/legacy/category/organizations-1',
                component: ComponentCreator('/docs/legacy/category/organizations-1', '32c'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/legacy/category/organizations-2',
                component: ComponentCreator('/docs/legacy/category/organizations-2', 'b30'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/legacy/category/organizations-3',
                component: ComponentCreator('/docs/legacy/category/organizations-3', '7b2'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/category/projects',
                component: ComponentCreator('/docs/legacy/category/projects', 'e16'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/docs/legacy/category/projects-1',
                component: ComponentCreator('/docs/legacy/category/projects-1', 'b49'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/legacy/category/projects-2',
                component: ComponentCreator('/docs/legacy/category/projects-2', 'c17'),
                exact: true,
                sidebar: "conceptsSidebar"
              },
              {
                path: '/docs/legacy/category/projects-3',
                component: ComponentCreator('/docs/legacy/category/projects-3', '320'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/datasets',
                component: ComponentCreator('/docs/legacy/data/datasets', '239'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/datasets/creating-datasets',
                component: ComponentCreator('/docs/legacy/data/datasets/creating-datasets', '044'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/datasets/pinecone-public-datasets',
                component: ComponentCreator('/docs/legacy/data/datasets/pinecone-public-datasets', '30d'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/datasets/using-public-datasets',
                component: ComponentCreator('/docs/legacy/data/datasets/using-public-datasets', 'b15'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors', '555'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors/encode-sparse-vectors',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors/encode-sparse-vectors', '1ae'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors/hybrid-search',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors/hybrid-search', '524'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors/query-sparse-dense-vectors',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors/query-sparse-dense-vectors', '42e'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors/sparse-dense-vectors',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors/sparse-dense-vectors', '16c'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/hybrid-search-and-sparse-vectors/upsert-sparse-dense-vectors',
                component: ComponentCreator('/docs/legacy/data/hybrid-search-and-sparse-vectors/upsert-sparse-dense-vectors', '5ac'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/insert-data',
                component: ComponentCreator('/docs/legacy/data/insert-data', 'a70'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/manage-data',
                component: ComponentCreator('/docs/legacy/data/manage-data', '163'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/metadata-filtering',
                component: ComponentCreator('/docs/legacy/data/metadata-filtering', 'a94'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/data/query-data',
                component: ComponentCreator('/docs/legacy/data/query-data', 'eee'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/getting-started/authentication',
                component: ComponentCreator('/docs/legacy/getting-started/authentication', 'f52'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/getting-started/choosing-index-type-and-size',
                component: ComponentCreator('/docs/legacy/getting-started/choosing-index-type-and-size', '2a3'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/getting-started/examples',
                component: ComponentCreator('/docs/legacy/getting-started/examples', 'ed5'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/getting-started/overview',
                component: ComponentCreator('/docs/legacy/getting-started/overview', '5a0'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/getting-started/quickstart',
                component: ComponentCreator('/docs/legacy/getting-started/quickstart', 'e09'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/',
                component: ComponentCreator('/docs/legacy/indexes/', '962'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/back-up-indexes',
                component: ComponentCreator('/docs/legacy/indexes/back-up-indexes', '558'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/collections',
                component: ComponentCreator('/docs/legacy/indexes/collections', 'd64'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/manage-indexes',
                component: ComponentCreator('/docs/legacy/indexes/manage-indexes', '2da'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/namespaces',
                component: ComponentCreator('/docs/legacy/indexes/namespaces', 'c8b'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes/scaling-indexes',
                component: ComponentCreator('/docs/legacy/indexes/scaling-indexes', '4b9'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/',
                component: ComponentCreator('/docs/legacy/organizations/', '598'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/', 'c7d'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/changing-your-billing-plan',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/changing-your-billing-plan', '776'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/setting-up-aws-marketplace-billing',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/setting-up-aws-marketplace-billing', 'da8'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/setting-up-azure-marketplace-billing',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/setting-up-azure-marketplace-billing', '9b8'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/setting-up-gcp-marketplace-billing',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/setting-up-gcp-marketplace-billing', '9dd'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-billing/subscription_status',
                component: ComponentCreator('/docs/legacy/organizations/manage-billing/subscription_status', '05b'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-cost/',
                component: ComponentCreator('/docs/legacy/organizations/manage-cost/', '480'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-cost/managing-cost',
                component: ComponentCreator('/docs/legacy/organizations/manage-cost/managing-cost', '740'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-cost/monitoring-usage',
                component: ComponentCreator('/docs/legacy/organizations/manage-cost/monitoring-usage', '37a'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations/manage-cost/understanding-cost',
                component: ComponentCreator('/docs/legacy/organizations/manage-cost/understanding-cost', '47a'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/',
                component: ComponentCreator('/docs/legacy/projects/', '6c0'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/manage-projects/',
                component: ComponentCreator('/docs/legacy/projects/manage-projects/', '352'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/manage-projects/add-users-to-projects-and-organizations',
                component: ComponentCreator('/docs/legacy/projects/manage-projects/add-users-to-projects-and-organizations', 'a5e'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/manage-projects/change-project-pod-limit',
                component: ComponentCreator('/docs/legacy/projects/manage-projects/change-project-pod-limit', '0f9'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/manage-projects/create-project',
                component: ComponentCreator('/docs/legacy/projects/manage-projects/create-project', '12e'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/manage-projects/rename-project',
                component: ComponentCreator('/docs/legacy/projects/manage-projects/rename-project', 'a23'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects/starter-environment',
                component: ComponentCreator('/docs/legacy/projects/starter-environment', '0c6'),
                exact: true,
                sidebar: "examplesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '523'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

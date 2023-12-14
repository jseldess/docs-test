import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '687'),
    routes: [
      {
        path: '/docs/.',
        component: ComponentCreator('/docs/.', 'e83'),
        routes: [
          {
            path: '/docs/.',
            component: ComponentCreator('/docs/.', 'f3c'),
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
                path: '/docs/./data/manage-data',
                component: ComponentCreator('/docs/./data/manage-data', 'ce8'),
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
                path: '/docs/./indexes',
                component: ComponentCreator('/docs/./indexes', '81a'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./organizations',
                component: ComponentCreator('/docs/./organizations', 'e2a'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/./projects',
                component: ComponentCreator('/docs/./projects', 'aaa'),
                exact: true,
                sidebar: "examplesSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/legacy',
        component: ComponentCreator('/docs/legacy', 'e8a'),
        routes: [
          {
            path: '/docs/legacy',
            component: ComponentCreator('/docs/legacy', '855'),
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
                path: '/docs/legacy/data/manage-data',
                component: ComponentCreator('/docs/legacy/data/manage-data', '163'),
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
                component: ComponentCreator('/docs/legacy/getting-started/quickstart', 'ba7'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/indexes',
                component: ComponentCreator('/docs/legacy/indexes', '672'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/organizations',
                component: ComponentCreator('/docs/legacy/organizations', '56b'),
                exact: true,
                sidebar: "examplesSidebar"
              },
              {
                path: '/docs/legacy/projects',
                component: ComponentCreator('/docs/legacy/projects', 'a6b'),
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

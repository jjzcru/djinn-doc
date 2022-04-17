
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','266'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','51f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','e5c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','0b6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','b01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','241'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','ece'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','100'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','ba7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','fe3'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f8f'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','4bb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e41'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','12b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','68d'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','b4e'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8d7'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','1a0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','e17'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','cc0'),
    routes: [
      {
        path: '/docs/djinn-board/agent',
        component: ComponentCreator('/docs/djinn-board/agent','69b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/authentication-server',
        component: ComponentCreator('/docs/djinn-board/authentication-server','1f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/event-bus',
        component: ComponentCreator('/docs/djinn-board/event-bus','f79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/gateway',
        component: ComponentCreator('/docs/djinn-board/gateway','983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/overview',
        component: ComponentCreator('/docs/djinn-board/overview','ac4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/persistance-layer',
        component: ComponentCreator('/docs/djinn-board/persistance-layer','11a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/platform',
        component: ComponentCreator('/docs/djinn-board/platform','11d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/web-client',
        component: ComponentCreator('/docs/djinn-board/web-client','165'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-client/overview',
        component: ComponentCreator('/docs/djinn-client/overview','c27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-cloud/community-edition',
        component: ComponentCreator('/docs/djinn-cloud/community-edition','965'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-cloud/enterprise-edition',
        component: ComponentCreator('/docs/djinn-cloud/enterprise-edition','c29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-cloud/overview',
        component: ComponentCreator('/docs/djinn-cloud/overview','4dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','18b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

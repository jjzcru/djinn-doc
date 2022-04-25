
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
    component: ComponentCreator('/docs','eec'),
    routes: [
      {
        path: '/docs/architecture',
        component: ComponentCreator('/docs/architecture','228'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/agent',
        component: ComponentCreator('/docs/djinn-board/architecture/agent','d12'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/authentication-server',
        component: ComponentCreator('/docs/djinn-board/architecture/authentication-server','092'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/event-bus',
        component: ComponentCreator('/docs/djinn-board/architecture/event-bus','5c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/gateway',
        component: ComponentCreator('/docs/djinn-board/architecture/gateway','542'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/persistance-layer',
        component: ComponentCreator('/docs/djinn-board/architecture/persistance-layer','932'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/platform',
        component: ComponentCreator('/docs/djinn-board/architecture/platform','c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/architecture/web-client',
        component: ComponentCreator('/docs/djinn-board/architecture/web-client','89f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-board/installation',
        component: ComponentCreator('/docs/djinn-board/installation','451'),
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
        path: '/docs/djinn-board/security-model',
        component: ComponentCreator('/docs/djinn-board/security-model','f19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/djinn-client/gateway',
        component: ComponentCreator('/docs/djinn-client/gateway','fef'),
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
        path: '/docs/djinn-client/web',
        component: ComponentCreator('/docs/djinn-client/web','f7a'),
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
        path: '/docs/djinn-cloud/security-model',
        component: ComponentCreator('/docs/djinn-cloud/security-model','e1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-view',
        component: ComponentCreator('/docs/high-level-view','ba6'),
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
        path: '/docs/reference-frameworks',
        component: ComponentCreator('/docs/reference-frameworks','05c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/use-case',
        component: ComponentCreator('/docs/use-case','a4a'),
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

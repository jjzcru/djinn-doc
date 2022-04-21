
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
    component: ComponentCreator('/docs','80c'),
    routes: [
      {
        path: '/docs/architecture/djinn-board/architecture/agent',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/agent','a06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/authentication-server',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/authentication-server','145'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/event-bus',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/event-bus','d7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/gateway',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/gateway','d92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/persistance-layer',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/persistance-layer','a19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/platform',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/platform','193'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/architecture/web-client',
        component: ComponentCreator('/docs/architecture/djinn-board/architecture/web-client','45f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/installation',
        component: ComponentCreator('/docs/architecture/djinn-board/installation','134'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/overview',
        component: ComponentCreator('/docs/architecture/djinn-board/overview','c24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-board/security-model',
        component: ComponentCreator('/docs/architecture/djinn-board/security-model','bb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-client/gateway',
        component: ComponentCreator('/docs/architecture/djinn-client/gateway','140'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-client/overview',
        component: ComponentCreator('/docs/architecture/djinn-client/overview','277'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-client/web',
        component: ComponentCreator('/docs/architecture/djinn-client/web','d01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-cloud/community-edition',
        component: ComponentCreator('/docs/architecture/djinn-cloud/community-edition','f65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-cloud/enterprise-edition',
        component: ComponentCreator('/docs/architecture/djinn-cloud/enterprise-edition','e3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/djinn-cloud/overview',
        component: ComponentCreator('/docs/architecture/djinn-cloud/overview','355'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/overview',
        component: ComponentCreator('/docs/architecture/overview','20a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/c4',
        component: ComponentCreator('/docs/c4','fde'),
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

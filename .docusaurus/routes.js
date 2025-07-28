import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '72c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '27d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e9d'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'e35'),
                exact: true
              },
              {
                path: '/docs/en',
                component: ComponentCreator('/docs/en', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/en/Examples/diagram',
                component: ComponentCreator('/docs/en/Examples/diagram', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/en/knife-template-for-dummies',
                component: ComponentCreator('/docs/en/knife-template-for-dummies', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/sk',
                component: ComponentCreator('/docs/sk', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Examples/diagram',
                component: ComponentCreator('/docs/sk/Examples/diagram', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/assets',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/assets', '922'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/contributing',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/contributing', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/create-repo',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/create-repo', 'e51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/deploy',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/deploy', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/i18n',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/i18n', 'e9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/init-docusaurus',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/init-docusaurus', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/metadata',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/metadata', 'efd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/prerequisites',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/prerequisites', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/Instalacia-Docusaurus/structure',
                component: ComponentCreator('/docs/sk/Instalacia-Docusaurus/structure', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sk/knife-sablona-pre-zacinajucich',
                component: ComponentCreator('/docs/sk/knife-sablona-pre-zacinajucich', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/cloud-notes',
  title: 'Cloud Notes',
  lang: 'zh-CN',
  description: ' ',
  head: createHead(),
  themeConfig: {
    repo: 'mamba-in/cloud-notes',
    logo: '/player.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
    
    algolia: {
      appId: '3S4TN0KMNQ',
      apiKey: 'b6e85d20caa8f6a4dd436b66c6fa9f46',
      indexName: 'cloud-notes',
    },
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    [
      'meta',
      {
        name: 'keywords',
        content: 'vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/player.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'cloud notes' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: 'Docs',
      link: '/guide/',
      items: [
        {
          text: '开始',
          link: '/guide/introduction',
        },
        {
          text: '深入',
          link: '/dep/icon',
        },
        {
          text: '其他',
          link: '/other/faq',
        },
      ],
    },
    {
      text: '相关链接',
      items: [
        {
          text: 'Vue',
          link: 'https://vuejs.org/',
        },
        {
          text: 'Vite',
          link: 'https://cn.vitejs.dev/',
        },
        {
          text: 'Pinia',
          link: 'https://pinia.vuejs.org/',
        },
        {
          text: 'Typescript',
          link: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      text: '书签',
      link: '/bookmark/'
    },
    {
      text: '读书笔记',
      link: '/read/'
    }

  ];
}

function createSidebar() {
  return {
    '/': [
      {
        text: 'Mamba Forever',
        children: [
          {
            text: '介绍',
            link: '/guide/introduction',
          },
          {
            text: '开始',
            link: '/guide/',
          },
          {
            text: '路由',
            link: '/guide/router',
          },
          {
            text: '菜单',
            link: '/guide/menu',
          },
          {
            text: '组件注册',
            link: '/guide/component',
          },
          {
            text: '样式',
            link: '/guide/design',
          },
          {
            text: '外部模块',
            link: '/guide/lib',
          },
        ],
      },
      {
        text: '深入',
        children: [
          {
            text: '项目规范',
            link: '/dep/lint',
          },
          {
            text: '图标',
            link: '/dep/icon',
          },
        ],
      },
      {
        text: '其他',
        children: [
          {
            text: '常见问题',
            link: '/other/faq',
          },
        ],
      },
    ],
    '/read': [
      {
        text: '读书',
        children: [
          {
            text: '人类的群星闪耀时',
            link: '/read/books/人类的群星闪耀时'
          }
        ]
      },
      {
        text: '思考',
        children: [
          {
            text: '什么是强者',
            link: 'read/thoughts/什么是强者'
          },
          {
            text: '从张一鸣身上可以学到什么',
            link: '/read/thoughts/20220605'
          }
        ]
      },
    ]
  };
}


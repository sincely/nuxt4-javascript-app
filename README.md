# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

https://nuxt.new/

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# https://juejin.cn/post/7242623687122354237
# https://juejin.cn/post/7170746000112353293?searchId=20241210165852FBF6233B6EB6D8ECD20D#heading-24
# https://juejin.cn/post/7446390745144541194#heading-56
# https://juejin.cn/post/7451777768856092723#heading-10
# https://juejin.cn/user/3280598430407790/posts
# 文件目录结构
├── .nuxt
├── api 请求接口
├── assets 需要经过构建工具处理的静态资源
│   ├── fonts 字体
│   ├── images 图片
│   └── styles 公共样式
│       ├── index.scss 样式文件主入口
│       ├── mixins.scss 样式函数
│       ├── reset.scss 样式重置
│       ├── transition.scss 样式动画
│       └── variables.scss 样式变量
├── components 所有组件
│   └── FullLoading 首屏加载动画
│       └── index.vue
│   └── Layout layout布局
│       ├── Footer 公共底部
│       └── Header 公共头部
├── composables 组合式函数
│   ├── useDollarFetchRequest.ts $Fetch接口封装
│   └── useFetchRequest.ts useFetch接口封装
├── constants 公共常量
│   ├── common.ts 公共常量
│   └── service.ts 接口常量
├── layouts 可复用布局框架
│   ├── default 默认布局（带头部底部）
│   └── nolayout 不带头部底部布局
├── locales 语言包
│   ├── en.json 英语语言包
│   ├── index.config.ts 多语言配置文件
│   └── zh-tw.json 中文繁体语言包
├── middleware 路由中间件
│   └── index.global.ts 全局路由守卫
├── node_modules 项目依赖包
├── pages 文件路由 对应页面
├── plugins 注册的插件
│   ├── vue-lazyload.ts 自定义指令 图片懒加载
│   └── aos.client.ts aos.js屏幕滚动动画
├── public 不经过处理的静态资源
│   ├── favicon.ico 网页标签上的小图标
│   └── robots.txt 测试环境防止 Google 爬虫抓取（正式环境忽略该文件）
├── server 服务端处理程序
├── utils 通用函数
├── .env 运行环境常量配置文件
├── .env.prod 正式环境常量配置文件
├── .env.stage 测试环境常量配置文件
├── .gitignore Git版本控制下忽略文件目录
├── .nuxtignore 构建阶段忽略文件
├── app.config.ts 项目公开响应式配置
├── app.vue 主入口文件
├── error.vue 报错页面
├── nuxt.config.ts nuxt配置文件
├── package-lock.json 记录 `npm install` 时安装的各个 npm package 的来源和版本号
├── package.json 项目的描述、组件版本等
├── README.md 说明文件
└── tsconfig.json

# Nuxt 4 JavaScript App

> 基于 Nuxt 4 + Vue 3 + Vite 构建的企业级全栈 Web 应用，采用 JavaScript 开发，集成 Element Plus、UnoCSS、Pinia、VueUse 等主流生态。

## 技术栈

| 分类     | 技术                                | 版本          |
| -------- | ----------------------------------- | ------------- |
| 框架     | Nuxt                                | 4.4.6         |
| UI 库    | Vue                                 | 3.5.35        |
| 路由     | Vue Router                          | 5.1.0         |
| 状态管理 | Pinia + pinia-plugin-persistedstate | 3.0.4 / 4.7.1 |
| UI 组件  | Element Plus                        | 2.14.1        |
| CSS 引擎 | UnoCSS                              | 66.7.0        |
| 工具库   | VueUse                              | 14.3.0        |
| 动画     | Anime.js                            | 3.2.2         |
| 轮播     | Swiper                              | 11.1.14       |
| 图片优化 | @nuxt/image                         | 2.0.0         |
| 图标     | @nuxt/icon + Iconify                | 2.2.2         |
| 暗色模式 | @nuxtjs/color-mode                  | 4.0.0         |
| 事件总线 | Mitt                                | 3.0.1         |
| 构建工具 | Vite（Nuxt 内置）                   | —             |
| 代码规范 | ESLint + Prettier + Stylelint       | —             |
| Git 规范 | Husky + Commitlint + Lint-staged    | —             |
| 版本发布 | Release-it                          | 20.2.0        |
| 进程管理 | PM2（ecosystem.config.js）          | —             |
| 容器化   | Docker + Docker Compose             | —             |

## 环境要求

- Node.js >= 18.14.0
- pnpm >= 7.x（推荐）
- Docker >= 20.10（可选，用于容器化部署）
- Docker Compose >= 2.0（可选，用于编排部署）

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

> `.npmrc` 已配置 npmmirror 镜像源 + `shamefully-hoist=true`

### 2. 启动开发服务器

```bash
# 开发环境
pnpm run dev

# 测试环境
pnpm run test

# 生产环境（本地模拟）
pnpm run prod
```

### 3. 构建生产包

```bash
pnpm run build          # 默认构建
pnpm run build:dev      # 开发环境构建
pnpm run build:test     # 测试环境构建
pnpm run build:prod     # 生产环境构建
```

### 4. 生产部署

```bash
# 方式一：直接启动
pnpm run start

# 方式二：PM2 集群部署（推荐）
pm2 start ecosystem.config.js
```

## 项目结构

```
nuxt4-javascript-app/
├── app/                          # 源码目录（Nuxt 4 app/ 目录模式）
│   ├── assets/                   # 需构建处理的静态资源
│   │   ├── icons/                # SVG 图标
│   │   ├── images/               # 图片资源
│   │   └── scss/                 # SCSS 样式
│   │       └── main.scss         # 主样式入口
│   ├── components/               # 组件（自动导入，无需 import）
│   │   ├── Card/                 # 卡片组件
│   │   ├── ColorMode/            # 色彩模式切换
│   │   ├── ColorModeSvg/         # 色彩模式 SVG 图标
│   │   ├── DarkToggle/           # 暗色模式切换
│   │   ├── DataCard/             # 数据卡片
│   │   ├── Footer/               # 公共底部
│   │   ├── FullLoading/          # 首屏加载动画
│   │   ├── Header/               # 公共头部
│   │   ├── Home/                 # 首页模块组件
│   │   │   ├── About/            # 关于板块
│   │   │   ├── Business/         # 业务板块
│   │   │   ├── Data/             # 数据板块
│   │   │   ├── First/            # 首屏轮播（含水平/垂直轮播）
│   │   │   ├── Quality/          # 品质板块
│   │   │   └── Technology/       # 技术板块
│   │   ├── Marquee/              # 跑马灯组件
│   │   ├── Mask/                 # 遮罩组件
│   │   ├── SiteImage/            # 站点图片
│   │   ├── SocialIcon/           # 社交图标
│   │   └── UserAvatar/           # 用户头像
│   ├── composables/              # 组合式函数（自动导入）
│   │   ├── count.js              # 计数器 composable
│   │   ├── useAnime.js           # Anime.js 动画封装
│   │   ├── useAuth.js            # 认证逻辑（待实现）
│   │   ├── useCss.js             # CSS 变量管理
│   │   ├── useHeader.js          # 导航菜单管理
│   │   ├── useHttp.js            # HTTP 请求封装（待实现）
│   │   ├── useMitt.js            # 事件总线（基于 Mitt）
│   │   ├── usePage.js            # 页面逻辑（待实现）
│   │   ├── useToken.js           # Token Cookie 管理
│   │   ├── useUserInfo.js        # 用户信息 Cookie 管理
│   │   ├── useUuid.js            # UUID Cookie 管理
│   │   └── user.js               # Pinia 用户 Store
│   ├── constants/                # 常量定义
│   │   └── unocss.js             # UnoCSS 快捷方式 & 主题色
│   ├── enums/                    # 枚举定义
│   │   ├── appEnum.js            # 应用枚举（标题、公司名）
│   │   └── mittEnum.js           # 事件总线 Key 枚举
│   ├── layouts/                  # 布局模板
│   │   ├── components/           # 布局专用组件
│   │   │   └── global-header.vue # 全局头部组件
│   │   ├── default.vue           # 默认布局（含 Header）
│   │   ├── global-layout.vue     # 全局布局（Element Plus 容器 + Header + Footer）
│   │   └── home.vue              # 首页布局
│   ├── pages/                    # 页面路由（文件名即路由）
│   │   ├── index.vue             # 首页（Swiper 全屏滚动）
│   │   └── [...all].vue          # 404 捕获所有未匹配路由
│   ├── plugins/                  # 插件（自动加载）
│   │   └── element-plus.js       # Element Plus 插件
│   ├── styles/                   # 全局样式
│   │   ├── swiper/               # Swiper 自定义样式
│   │   │   ├── index.scss        # Swiper 样式主入口
│   │   │   ├── mixins.scss       # Swiper Mixin
│   │   │   └── variables.scss    # Swiper 变量
│   │   ├── anime.css             # 动画样式
│   │   └── index.scss            # 全局样式入口
│   ├── utils/                    # 工具函数（自动导入）
│   │   └── index.js              # 通用工具（formatDateTime 等）
│   ├── app.config.js             # 应用公开响应式配置
│   ├── app.vue                   # 应用主入口
│   └── router.options.js         # 路由自定义选项（滚动行为）
├── public/                       # 不经过构建的静态资源
│   ├── favicon.ico               # 站点图标
│   ├── logo.png / logo.svg       # Logo
│   ├── carousel1~3.jpg           # 轮播图
│   └── *.jpg / *.png             # 各板块背景图
├── server/                       # 服务端逻辑
│   └── api/
│       └── pageview.js           # 页面浏览量 API
├── .env.development              # 开发环境变量
├── .env.test                     # 测试环境变量
├── .env.production               # 生产环境变量
├── ecosystem.config.js           # PM2 部署配置
├── nuxt.config.js                # Nuxt 配置
├── unocss.config.js              # UnoCSS 配置
├── eslint.config.mjs             # ESLint 配置
├── stylelint.config.mjs          # Stylelint 配置
├── prettier.config.js            # Prettier 配置
├── commitlint.config.js          # Commitlint 配置
├── lint-staged.config.js         # Lint-staged 配置
├── .release-it.json              # Release-it 版本发布配置
├── .husky/                       # Git Hooks
│   ├── commit-msg                # 提交信息校验
│   └── pre-commit                # 提交前代码检查
└── package.json                  # 项目配置与脚本
```

## Nuxt 4 核心配置

### nuxt.config.js 要点

```js
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 }, // 启用 Nuxt 4 兼容模式
  ssr: false, // 纯客户端渲染（SPA 模式）
  devtools: { enabled: true }, // 开启 Nuxt DevTools
  runtimeConfig: {
    public: { baseUrl: process.env.NUXT_BASE_URL }
  },
  modules: [
    // 模块集成
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt'
  ],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    pageTransition: { name: 'blur', mode: 'out-in' }
  }
})
```

### 环境变量

| 变量名              | 说明                         | 示例值                                |
| ------------------- | ---------------------------- | ------------------------------------- |
| `NODE_ENV`          | 环境标识                     | `development` / `test` / `production` |
| `NUXT_APP_API_ROOT` | API 根路径                   | `https://xxxx.com/`                   |
| `NUXT_BASE_URL`     | runtimeConfig.public.baseUrl | —                                     |
| `NUXT_APP_BASE_URL` | 应用子路径部署               | `/`                                   |

## 功能模块说明

### 首页 — Swiper 全屏滚动

首页采用 **垂直全屏 Swiper** 实现单页滚动浏览，包含 6 个板块：

| 板块 | 组件              | 说明                          |
| ---- | ----------------- | ----------------------------- |
| 首页 | `Home/First`      | 首屏轮播（支持水平/垂直切换） |
| 业务 | `Home/Business`   | 业务介绍                      |
| 品质 | `Home/Quality`    | 品质展示                      |
| 数据 | `Home/Data`       | 数据可视化                    |
| 技术 | `Home/Technology` | 技术栈展示                    |
| 关于 | `Home/About`      | 关于我们                      |

导航菜单通过 `useHeader` composable 管理，使用 `mitt` 事件总线实现 Header 与 Swiper 之间的双向通信。

### 事件总线（Mitt）

基于 [Mitt](https://github.com/developit/mitt) 封装的全局事件系统，事件 Key 定义在 `enums/mittEnum.js`：

- `HEADER_SELECT_EVENT` — 导航选中事件（Header → Swiper 跳转）
- `CHANGE_TO_HOME/BUSINESS/QUALITY/DATA/TECHNOLOGY/ABOUT` — 板块切换事件（Swiper → Header 同步）

### Cookie 管理

通过 Nuxt 内置 `useCookie` 实现 SSR 友好的 Cookie 读写：

| Composable       | Cookie Key | 用途                    |
| ---------------- | ---------- | ----------------------- |
| `useToken.js`    | `hw_token` | 用户认证 Token          |
| `useUserInfo.js` | `UserInfo` | 用户信息（JSON 序列化） |
| `useUuid.js`     | `hw_uuid`  | 设备唯一标识            |

### 动画系统

基于 [Anime.js](https://animejs.com/) 封装的动画 composables（`useAnime.js`）：

- `useTranslateX()` — X 轴平移动画（含缩放 + 淡入）
- `useTranslateY()` — Y 轴平移动画（含缩放 + 淡入）
- `useAnime()` — 通用动画封装，支持所有 anime.js 配置

### 暗色模式

通过 `@nuxtjs/color-mode` + Element Plus `dark CSS vars` 实现主题切换：

- `DarkToggle` 组件控制切换
- `ColorMode` / `ColorModeSvg` 组件展示当前模式图标
- `html.dark` 类控制暗色样式

### UnoCSS 原子化 CSS

配置预设：`presetUno` + `presetRemToPx` + `presetAttributify` + `presetIcons` + `presetTypography`

自定义快捷方式（定义在 `constants/unocss.js`）：

| 快捷方式          | 等效样式                                                       |
| ----------------- | -------------------------------------------------------------- |
| `btn`             | 青绿色按钮样式                                                 |
| `icon-btn`        | 图标按钮（hover 高亮）                                         |
| `full`            | 全屏（`h-screen w-screen overflow-hidden bg-cover bg-center`） |
| `position-center` | 绝对定位居中                                                   |

主题色：`primary: #00dfb9`

## 布局系统

| 布局            | 文件                        | 说明                                                       |
| --------------- | --------------------------- | ---------------------------------------------------------- |
| `default`       | `layouts/default.vue`       | 默认布局，含自定义 Header                                  |
| `global-layout` | `layouts/global-layout.vue` | 全局布局，Element Plus 容器 + Header + Footer + 中文国际化 |
| `home`          | `layouts/home.vue`          | 首页专用布局（居中内边距）                                 |

页面中通过 `definePageMeta({ layout: 'global-layout' })` 指定布局。

## 服务端 API

| 路由            | 文件                     | 说明                         |
| --------------- | ------------------------ | ---------------------------- |
| `/api/pageview` | `server/api/pageview.js` | 返回页面浏览量计数和启动时间 |

## 状态管理（Pinia）

使用 Setup Store 风格定义 Store，支持 HMR：

```js
// composables/user.js
export const useUserStore = defineStore('user', () => {
  const savedName = ref('')
  const previousNames = ref(new Set())
  function setNewName(name) {
    /* ... */
  }
  return { setNewName, savedName }
})
```

## 工程化规范

| 工具        | 配置文件                | 作用                                       |
| ----------- | ----------------------- | ------------------------------------------ |
| ESLint      | `eslint.config.mjs`     | 代码质量检查（基于 `@nuxt/eslint-config`） |
| Prettier    | `prettier.config.js`    | 代码格式化                                 |
| Stylelint   | `stylelint.config.mjs`  | 样式检查（SCSS + Vue 文件）                |
| Husky       | `.husky/`               | Git Hooks（pre-commit + commit-msg）       |
| Commitlint  | `commitlint.config.js`  | 提交信息规范（Conventional Commits）       |
| Lint-staged | `lint-staged.config.js` | 暂存区文件增量检查                         |
| Release-it  | `.release-it.json`      | 自动化版本发布 + Changelog 生成            |

### 可用脚本

```bash
pnpm run lint              # ESLint 检查
pnpm run prettier:fix      # Prettier 格式化
pnpm run stylelint:fix     # Stylelint 样式修复
pnpm run release           # 发布新版本
pnpm run release:patch     # 发布补丁版本
pnpm run release:minor     # 发布次要版本
pnpm run release:major     # 发布主要版本
pnpm run release:alpha     # 发布 Alpha 预版本
pnpm run release:beta      # 发布 Beta 预版本
```

## 生产部署

### Docker 容器化部署（推荐）

项目已配置完整的 Docker 支持，采用**多阶段构建**优化镜像大小和构建效率。

#### Docker 文件说明

| 文件                 | 说明                          |
| -------------------- | ----------------------------- |
| `Dockerfile`         | 多阶段构建配置（构建 + 运行） |
| `docker-compose.yml` | Docker Compose 编排配置       |
| `.dockerignore`      | Docker 构建上下文忽略规则     |

#### 方式一：使用 Docker Compose（推荐）

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 查看容器状态
docker-compose ps

# 停止并移除容器
docker-compose down

# 重新构建并启动（代码更新后）
docker-compose up -d --build
```

#### 方式二：使用 Docker 命令

```bash
# 构建 Docker 镜像
docker build -t nuxt-app .

# 运行容器
docker run -d -p 3000:3000 --name nuxt-app nuxt-app

# 查看日志
docker logs -f nuxt-app

# 停止容器
docker stop nuxt-app

# 删除容器
docker rm nuxt-app

# 删除镜像
docker rmi nuxt-app
```

#### Docker 构建优化

- **多阶段构建**：构建阶段安装依赖和编译，运行阶段仅包含产物
- **优化 .dockerignore**：排除 `node_modules`、`.git`、文档等不必要的文件
- **层缓存优化**：先复制 `package*.json` 再复制源码，利用 Docker 层缓存
- **轻量基础镜像**：使用 `node:20-alpine` 减小镜像体积

#### 环境变量配置

在 `docker-compose.yml` 中配置环境变量：

```yaml
environment:
  - NODE_ENV=production
  - NUXT_PUBLIC_API_BASE=http://10.102.129.12:18088
```

或在运行 Docker 时传入：

```bash
docker run -d -p 3000:3000 \
  -e NODE_ENV=production \
  -e NUXT_PUBLIC_API_BASE=http://10.102.129.12:18088 \
  --name nuxt-app nuxt-app
```

### PM2 集群部署

`ecosystem.config.js` 配置：

- 应用名称：`nuxt-app`
- 端口：`8888`
- 模式：`cluster`（集群模式，实例数 = CPU 核心数）
- 入口：`.output/server/index.mjs`

```bash
# 构建 + 部署
pnpm run build:prod
pm2 start ecosystem.config.js

# 常用 PM2 命令
pm2 status               # 查看状态
pm2 logs nuxt-app        # 查看日志
pm2 restart nuxt-app     # 重启
pm2 stop nuxt-app        # 停止
```

## 参考资源

- [Nuxt 官方文档](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 官方文档](https://vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)
- [UnoCSS 文档](https://unocss.dev/)
- [VueUse 文档](https://vueuse.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Anime.js 文档](https://animejs.com/)

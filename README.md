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

### 代理配置详解

项目中配置了两种代理,分别用于不同的场景:

#### 1. Nitro devProxy vs Vite proxy 区别

```javascript
// Nitro 代理 (服务端代理)
nitro: {
  devProxy: {
    '/web': {
      target: 'http://10.102.129.12:18088/web',
      changeOrigin: true,
    }
  },
  // routeRules: {
  //   "/web/**": {
  //     proxy: 'http://10.102.129.12:18088/web/**'
  //   }
  // }
}

// Vite 代理 (开发服务器代理)
vite: {
  server: {
    proxy: {
      '/api': {
        target: 'http://10.102.129.12:18088',
        changeOrigin: true
      }
    }
  }
}
```

**核心区别对比:**

| 特性           | Nitro devProxy       | Vite proxy       |
| -------------- | -------------------- | ---------------- |
| **运行环境**   | 开发 + 生产          | 仅开发环境       |
| **代理层**     | Nitro 服务器         | Vite 开发服务器  |
| **SSR 支持**   | ✅ 支持              | ❌ 不支持        |
| **构建后有效** | ✅ 有效              | ❌ 无效          |
| **适用场景**   | API 路由、服务端请求 | 开发时浏览器请求 |
| **安全性**     | 更高(服务端)         | 较低(仅开发)     |

**工作方式:**

```
# Nitro 代理 (生产环境可用)
客户端 → Nuxt Server → Nitro Proxy → 后端服务器

# Vite 代理 (仅开发环境)
浏览器 → Vite Dev Server Proxy → 后端服务器
```

**使用建议:**

- **开发环境**: 两者都可以使用,Vite proxy 更常用
- **生产环境**: 必须使用 `nitro.routeRules` (代码中已注释)
- **API 请求**: 推荐使用 Nitro 代理,生产环境也有效
- **当前配置问题**:
  - `/web` 路径用 `devProxy`,生产环境会失效
  - `/api` 路径用 Vite proxy,生产环境也会失效

**生产环境正确配置:**

```javascript
nitro: {
  devProxy: {
    '/web': {
      target: 'http://10.102.129.12:18088/web',
      changeOrigin: true,
    }
  },
  // 生产环境代理 (取消注释)
  routeRules: {
    '/api/**': {
      proxy: 'http://10.102.129.12:18088/api/**'
    },
    '/web/**': {
      proxy: 'http://10.102.129.12:18088/web/**'
    }
  }
}
```

#### 2. app.baseURL vs runtimeConfig.public.baseUrl 区别

```javascript
// nuxt.config.js
app: {
  baseURL: process.env.NUXT_APP_BASE_URL || '/',  // 第 25 行
  pageTransition: { name: 'blur', mode: 'out-in' } // 第 26 行
}

runtimeConfig: {
  public: {
    baseUrl: process.env.NUXT_BASE_URL  // 运行时配置
  }
}
```

**核心区别对比:**

| 特性         | `app.baseURL`          | `runtimeConfig.public.baseUrl` |
| ------------ | ---------------------- | ------------------------------ |
| **用途**     | 应用部署基础路径       | 运行时可访问的配置值           |
| **影响范围** | 前端路由、静态资源路径 | 代码中可读取的配置             |
| **框架使用** | Nuxt Router 自动使用   | 开发者手动使用                 |
| **修改时机** | 构建时确定             | 运行时可动态修改               |
| **环境变量** | `NUXT_APP_BASE_URL`    | `NUXT_BASE_URL`                |
| **典型值**   | `/app`, `/admin`       | `/`, `/portal`                 |

**详细说明:**

**`app.baseURL` (第 25 行)**

- 📍 **应用基础路径** - 整个 Nuxt 应用的部署路径
- 📍 **自动影响** 所有前端路由和静态资源
- 📍 **构建时** 就确定,运行时会应用此值

```bash
# .env.production
NUXT_APP_BASE_URL=/portal
```

效果:

```
前端页面: https://example.com/portal/
页面路由: https://example.com/portal/about
静态资源: https://example.com/portal/_nuxt/xxx.js
```

**`runtimeConfig.public.baseUrl`**

- 🔧 **运行时配置** - 在代码中可以读取和使用
- 🔧 **手动使用** - 需要在代码中 `useRuntimeConfig()` 获取
- 🔧 **更灵活** - 可以根据环境动态修改

```vue
<script setup>
const config = useRuntimeConfig()
console.log(config.public.baseUrl) // 读取配置值

// 可用于自定义逻辑
const apiUrl = computed(() => {
  return config.public.baseUrl + '/api'
})
</script>
```

**实际场景示例:**

```javascript
// 场景 1: 子路径部署 + 自定义配置
NUXT_APP_BASE_URL=/app
NUXT_BASE_URL=/app

// 结果:
// - 页面路由: /app/*
// - 静态资源: /app/_nuxt/*
// - 代码读取: config.public.baseUrl = '/app'

// 场景 2: 根路径部署
NUXT_APP_BASE_URL=/
NUXT_BASE_URL=/

// 结果:
// - 页面路由: /*
// - 静态资源: /_nuxt/*
// - 代码读取: config.public.baseUrl = '/'
```

**最佳实践:**

1. **保持一致性**: 两个值通常设置为相同
2. **子路径部署**: 同时修改两个环境变量
3. **使用场景**:
   - `app.baseURL`: 自动处理路由和资源路径
   - `runtimeConfig.baseUrl`: 在代码中动态使用

### 页面过渡效果 (第 26 行)

```javascript
pageTransition: { name: 'blur', mode: 'out-in' }
```

**配置说明:**

- **`name: 'blur'`** - 过渡动画的 CSS 类名前缀
- **`mode: 'out-in'`** - 过渡模式

**过渡模式对比:**

| 模式            | 说明     | 动画流程                      |
| --------------- | -------- | ----------------------------- |
| `out-in` (推荐) | 先出后进 | 当前页面先淡出 → 新页面再淡入 |
| `in-out`        | 先进后出 | 新页面先淡入 → 当前页面再淡出 |
| 默认            | 同时进行 | 两个页面同时过渡              |

**对应的 CSS 动画:**

```css
/* blur 过渡动画 */
.blur-enter-active,
.blur-leave-active {
  transition:
    opacity 0.3s ease,
    filter 0.3s ease;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
```

**自定义过渡效果:**

```javascript
// 使用其他过渡效果
pageTransition: { name: 'fade', mode: 'out-in' }
pageTransition: { name: 'slide', mode: 'out-in' }
pageTransition: { name: 'zoom', mode: 'out-in' }
```

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

### PM2 + Nginx 生产部署（推荐）

在企业级生产环境中，推荐使用 **Nginx 作为反向代理** + **PM2 管理 Node.js 进程** 的架构。

#### 架构说明

```
客户端 → Nginx (80/443) → PM2 管理的 Node.js 进程 (8888)
                    ↓
              静态资源缓存
              SSL 终端
              负载均衡
```

#### 步骤一：配置 PM2

1. **修改 ecosystem.config.js**

```javascript
module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      port: 8888,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NUXT_PUBLIC_API_BASE: 'http://10.102.129.12:18088'
      },
      max_memory_restart: '1G',
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
}
```

2. **创建日志目录**

```bash
mkdir -p logs
```

3. **启动应用**

```bash
# 构建生产包
pnpm run build:prod

# 启动 PM2
pm2 start ecosystem.config.js

# 保存 PM2 进程列表（开机自启）
pm2 save
pm2 startup
```

#### 步骤二：安装和配置 Nginx

1. **安装 Nginx**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx

# macOS
brew install nginx
```

2. **创建 Nginx 配置文件**

```bash
sudo nano /etc/nginx/sites-available/nuxt-app
```

3. **配置反向代理（HTTP）**

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名或 IP

    # 日志配置
    access_log /var/log/nginx/nuxt-app-access.log;
    error_log /var/log/nginx/nuxt-app-error.log;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    # 代理到 PM2 管理的 Node.js 应用
    location / {
        proxy_pass http://127.0.0.1:8888;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
    }

    # API 代理（可选，如果后端 API 需要跨域处理）
    location /api/ {
        proxy_pass http://10.102.129.12:18088/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://127.0.0.1:8888;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
    }
}
```

4. **启用配置**

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/nuxt-app /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重新加载 Nginx
sudo systemctl reload nginx
```

#### 步骤三：配置 SSL/HTTPS（推荐）

1. **安装 Certbot**

```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx
```

2. **自动配置 SSL**

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

3. **自动续期**

```bash
# 测试自动续期
sudo certbot renew --dry-run

# Certbot 会自动添加 cron 任务
```

4. **HTTPS 配置示例**（Certbot 自动生成，供参考）

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/your-domain.com/chain.pem;

    # SSL 优化配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # ... 其他配置同上
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}
```

#### 步骤四：防火墙配置

```bash
# Ubuntu/Debian (UFW)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload

# CentOS/RHEL (Firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

#### 常用运维命令

```bash
# PM2 相关
pm2 status                  # 查看应用状态
pm2 logs nuxt-app           # 查看日志
pm2 restart nuxt-app        # 重启应用
pm2 reload nuxt-app         # 零停机重启
pm2 stop nuxt-app           # 停止应用
pm2 monit                   # 监控资源使用

# Nginx 相关
sudo nginx -t               # 测试配置
sudo systemctl status nginx # 查看状态
sudo systemctl reload nginx # 平滑重载
sudo systemctl restart nginx # 重启
sudo tail -f /var/log/nginx/nuxt-app-access.log  # 查看访问日志
sudo tail -f /var/log/nginx/nuxt-app-error.log   # 查看错误日志
```

#### 部署脚本（可选）

创建 `deploy.sh` 自动化部署脚本：

```bash
#!/bin/bash

echo "🚀 开始部署 Nuxt App..."

# 1. 拉取最新代码
echo "📦 拉取代码..."
git pull origin main

# 2. 安装依赖
echo "📥 安装依赖..."
pnpm install

# 3. 构建生产包
echo "🔨 构建应用..."
pnpm run build:prod

# 4. 重启 PM2
echo "🔄 重启应用..."
pm2 reload nuxt-app

# 5. 检查状态
echo "✅ 部署完成！"
pm2 status nuxt-app

# 6. 测试 Nginx 配置
echo "🔍 测试 Nginx 配置..."
sudo nginx -t
```

使用方式：

```bash
chmod +x deploy.sh
./deploy.sh
```

#### 性能优化建议

1. **Nginx 缓存配置**

```nginx
# 在 http 块中添加
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=nuxt_cache:10m max_size=1g inactive=60m;

# 在 server 块中使用
location / {
    proxy_cache nuxt_cache;
    proxy_cache_valid 200 10m;
    proxy_cache_valid 404 1m;
    add_header X-Cache-Status $upstream_cache_status;
}
```

2. **负载均衡（多实例）**

```nginx
upstream nuxt_app {
    server 127.0.0.1:8881;
    server 127.0.0.1:8882;
    server 127.0.0.1:8883;
    server 127.0.0.1:8884;
}

server {
    location / {
        proxy_pass http://nuxt_app;
    }
}
```

3. **PM2 进程优化**

```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      instances: 4, // 固定实例数，或 'max' 使用所有核心
      exec_mode: 'cluster',
      max_memory_restart: '2G', // 内存限制
      cron_restart: '0 0 * * *' // 每天凌晨重启
    }
  ]
}
```

## 参考资源

- [Nuxt 官方文档](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 官方文档](https://vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)
- [UnoCSS 文档](https://unocss.dev/)
- [VueUse 文档](https://vueuse.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Anime.js 文档](https://animejs.com/)

## ⚠️ 注意事项

### 环境配置

1. **Node.js 版本**
   - 必须使用 Node.js >= 18.14.0
   - 推荐使用 nvm 管理 Node 版本
   - 不同 Node 版本可能导致构建失败

2. **环境变量文件**
   - `.env.development` - 开发环境
   - `.env.test` - 测试环境
   - `.env.production` - 生产环境
   - ⚠️ **不要**将 `.env` 文件提交到 Git
   - 敏感信息使用环境变量,不要硬编码

3. **环境变量命名**
   - 客户端可访问的变量必须以 `NUXT_PUBLIC_` 开头
   - 服务端私有变量不要加此前缀

   ```bash
   # 客户端可访问
   NUXT_PUBLIC_API_BASE=https://api.example.com

   # 仅服务端可访问
   DATABASE_URL=postgresql://...
   ```

### 开发规范

4. **代码提交**
   - 遵循 Conventional Commits 规范
   - 使用 `feat:`, `fix:`, `docs:`, `style:`, `refactor:` 等前缀
   - 提交前会自动运行 ESLint 和 Prettier 检查
   - 不符合规范的提交会被 Husky 拦截

5. **组件命名**
   - 组件文件使用 PascalCase: `MyComponent.vue`
   - Nuxt 4 自动导入组件,无需手动 import
   - 避免组件名称冲突,合理使用文件夹命名

6. **自动导入注意**
   - `composables/` 和 `utils/` 下的文件会自动导入
   - 自动导入的函数在 SSR 环境下可能行为不同
   - 如果不需要自动导入,放在其他目录

7. **样式规范**
   - 优先使用 UnoCSS 原子化类名
   - 复杂样式使用 SCSS,放在 `assets/scss/`
   - 避免内联样式
   - 组件样式使用 `scoped` 避免污染

### 构建与部署

8. **构建产物**
   - 构建产物在 `.output/` 目录
   - ⚠️ **不要**手动修改 `.output/` 下的文件
   - 每次构建会清空该目录
   - `.output/` 已添加到 `.gitignore`

9. **端口占用**
   - 开发服务器默认端口: 3000
   - PM2 部署端口: 8888
   - Docker 映射端口: 3000
   - 启动前确保端口未被占用

10. **生产环境构建**
    - 使用 `pnpm run build:prod` 构建生产包
    - 构建时会自动使用 `.env.production`
    - 构建失败检查 Node 版本和依赖冲突

11. **SSR vs SPA**
    - 当前项目配置为 `ssr: false` (SPA 模式)
    - 如需 SSR,修改 `nuxt.config.js`:

    ```javascript
    export default defineNuxtConfig({
      ssr: true // 开启服务端渲染
    })
    ```

    - SSR 模式下注意服务端和客户端代码兼容性

### API 请求

12. **HTTP 请求**
    - 使用封装的 `useHttp.js`,不要直接使用 axios
    - 所有请求自动携带 Token
    - 401 错误会自动跳转登录页
    - API 地址在 `nuxt.config.js` 的 `runtimeConfig.public.apiBase` 配置

13. **跨域问题**
    - 开发环境: 使用 Nuxt devProxy 或 Vite proxy
    - 生产环境: 使用 Nginx 反向代理
    - ⚠️ 不要在代码中配置 CORS,应在服务器端配置

14. **请求超时**
    - 默认超时时间: 10 秒
    - 大文件或慢接口可单独配置超时
    ```javascript
    get('/api/slow-endpoint', {}, { timeout: 30000 })
    ```

### Docker 部署

15. **Docker 构建**
    - 首次构建较慢,会下载基础镜像
    - 使用 `--no-cache` 强制重新构建
    - 构建产物镜像约 200-300MB
    - 使用 `.dockerignore` 优化构建速度

16. **Docker 环境变量**
    - 在 `docker-compose.yml` 中配置环境变量
    - 或使用 `.env` 文件: `docker-compose --env-file .env up -d`
    - Docker 内使用 `NODE_ENV=production`

17. **数据持久化**
    - 容器重启数据不丢失
    - 日志建议使用 volume 挂载
    - 上传文件需要配置持久化存储

### PM2 + Nginx 部署

18. **PM2 注意事项**
    - 首次部署需执行 `pm2 startup` 配置开机自启
    - 修改代码后使用 `pm2 reload` 实现零停机重启
    - 定期检查日志: `pm2 logs nuxt-app`
    - 监控内存使用,避免内存泄漏

19. **Nginx 配置**
    - 修改配置后必须 `sudo nginx -t` 测试
    - 使用 `reload` 而非 `restart` 实现平滑重载
    - SSL 证书定期续期 (Certbot 自动处理)
    - 注意 Nginx 和 PM2 的端口配置一致性

20. **负载均衡**
    - 多实例部署注意 Session 共享
    - 使用 Redis 等外部存储 Session
    - WebSocket 需要配置 sticky session

### 性能优化

21. **图片优化**
    - 使用 `@nuxt/image` 自动优化图片
    - 使用 WebP 格式
    - 大图片使用懒加载
    - 图标使用 SVG 或 Iconify

22. **代码分割**
    - Nuxt 自动按页面分割代码
    - 大型组件使用异步加载:

    ```javascript
    const HeavyComponent = defineAsyncComponent(() => import('~/components/HeavyComponent.vue'))
    ```

23. **缓存策略**
    - 静态资源设置长期缓存
    - API 响应可适当缓存
    - 使用 Nginx 缓存减轻服务器压力

### 常见问题

24. **依赖安装失败**

    ```bash
    # 清除缓存重装
    pnpm store prune
    rm -rf node_modules
    pnpm install
    ```

25. **端口被占用**

    ```bash
    # 查找占用端口的进程
    lsof -i :3000
    # 或
    netstat -ano | grep 3000
    ```

26. **构建失败**
    - 检查 Node 版本是否符合要求
    - 检查依赖是否有冲突
    - 删除 `.nuxt/` 和 `.output/` 重新构建
    - 查看详细错误日志定位问题

27. **Docker 启动失败**

    ```bash
    # 查看容器日志
    docker logs nuxt-app

    # 进入容器调试
    docker exec -it nuxt-app sh

    # 检查容器状态
    docker-compose ps
    ```

28. **Cookie 读取问题**
    - SSR 环境下 Cookie 读取与 CSR 不同
    - 使用封装的 `useToken()`, `useUserInfo()` 等方法
    - 不要在 `setup()` 外读取 Cookie

### 安全建议

29. **敏感信息保护**
    - ⚠️ **永远不要**将密钥、Token 提交到 Git
    - 使用环境变量管理敏感信息
    - 生产环境使用 HTTPS
    - 定期更新依赖包,修复安全漏洞

30. **CSP 配置**
    - 生产环境建议配置 Content Security Policy
    - 限制外部资源加载
    - 防止 XSS 攻击

31. **速率限制**
    - API 接口配置请求频率限制
    - 登录接口防止暴力破解
    - Nginx 层可配置限流

### 版本升级

32. **依赖升级**
    - 定期运行 `pnpm outdated` 检查更新
    - 使用 `pnpm update` 更新依赖
    - 大版本升级前备份项目
    - 测试环境验证后再升级生产环境

33. **Nuxt 版本**
    - 关注 Nuxt 官方更新日志
    - 大版本升级注意 breaking changes
    - 参考 [Nuxt 迁移指南](https://nuxt.com/docs/getting-started/upgrade)

34. **Node.js 升级**
    - 使用 LTS (长期支持) 版本
    - 关注 Node.js 官方安全更新
    - 升级后重新安装依赖

### 开发工具

35. **IDE 推荐**
    - VS Code + Volar 扩展
    - WebStorm (内置 Vue 支持)
    - 安装 ESLint, Prettier 插件

36. **调试工具**
    - Nuxt DevTools (开发环境自动开启)
    - Vue DevTools 浏览器扩展
    - 浏览器开发者工具

37. **性能分析**
    - 使用 `npx nuxi analyze` 分析构建
    - Chrome DevTools Performance 面板
    - Lighthouse 性能审计

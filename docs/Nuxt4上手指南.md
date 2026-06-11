# Nuxt 4 上手指南

> 参考来源：[掘金 - 详解 Nuxt 4，快速上手使用](https://juejin.cn/post/7625060523634524223)

---

## 一、Nuxt 4 适用前提

Nuxt 4 适合的，不只是"想写 Vue 项目"的场景，而是**希望在 Vue 之上直接获得一整套成熟应用能力**的场景。它解决的核心问题不是单纯把页面跑起来，而是把路由、数据获取、服务端渲染、服务端接口、部署形态和工程组织一起收进同一个框架里。

**适合选择 Nuxt 4 的场景：**

- 你要做的是内容站、官网、博客、文档站、电商前台、中后台、SaaS 前端这类真正的网站或 Web 应用，而不是只做几个纯前端页面
- 你希望默认就具备 SSR、SEO、文件路由、布局系统、数据获取、服务端接口等能力，而不是自己从 Vue + Vite 一项项拼出来
- 你希望前后端边界更顺滑，例如前端页面和服务端 API 放在同一个仓库中协作
- 你需要根据不同页面选择 SSR、预渲染、缓存、重定向等渲染策略
- 你更看重"约定优于配置"的开发效率，希望团队新成员进入项目后能更快读懂结构

**建议先评估的场景：**

- 项目只是一个非常轻量的纯前端单页应用，没有 SEO、SSR、服务端逻辑需求，用 Vue + Vite 往往更直接
- 团队已经有成熟的纯前端架构和配套基础设施，Nuxt 带来的约定反而可能束缚既有体系
- 项目需要极度特殊的路由、渲染或服务端组织方式，而你不想遵循 Nuxt 的目录约定

> 一句话概括：Nuxt 4 不是"Vue 的脚手架"，而是 Vue 生态里的全栈应用框架。

---

## 二、Nuxt 4 简介

Nuxt 4 是构建在 Vue 3 之上的全栈框架。它把现代 Web 应用里常见但又重复的能力预先组织好了：

- 文件系统路由
- 布局系统
- 自动导入
- SSR 与 CSR
- 服务端 API
- 预渲染与混合渲染
- 模块化扩展

从官方文档当前 4.x 版本可以明确确认几件很重要的事：

- 新项目要求 **Node.js 20.x** 或更高版本
- Nuxt 4 默认将应用源码放在 **`app/`** 目录下
- 服务端能力由 **Nitro** 提供
- 数据获取、状态共享、自动导入、路由生成等能力是框架级设计，不是后期再补的插件

### 核心能力全景

```
Nuxt 4
├── Vue 应用层：页面路由、布局系统、组件自动导入、中间件
├── 全栈能力：SSR、Server API、数据获取、useState
├── 服务端引擎（Nitro）：routeRules、prerender、cache
└── 工程体验：零碎配置更少、目录约定清晰、模块生态、多种部署形态
```

---

## 三、Nuxt 4 与 Vue 的关系

| 方案       | 定位             | 优势                                        | 适合场景                                        |
| ---------- | ---------------- | ------------------------------------------- | ----------------------------------------------- |
| Vue + Vite | 前端应用基础组合 | 轻量、自由、上手快                          | 纯前端 SPA、小型项目、已有成熟工程体系          |
| Nuxt 4     | Vue 全栈应用框架 | 路由、SSR、服务端、数据获取、部署策略一体化 | 官网、内容站、SaaS、需要 SEO 或 SSR 的 Vue 应用 |

当项目出现下面这些需求时，Nuxt 的优势会非常明显：

- 需要 SEO
- 需要 SSR 或预渲染
- 需要文件路由
- 需要服务端 API
- 需要更细粒度的页面级渲染控制

---

## 四、Nuxt 4 快速上手

### 1. 前置准备

- **Node.js 20.x** 或更高版本，优先使用当前 LTS
- 一个具备 Vue 语言服务支持的编辑器
- 包管理器保持团队一致，以 pnpm 为例

```bash
# 查看 Node.js 版本
node -v

# 查看 pnpm 版本
pnpm -v
```

> **Windows 用户提示：** 可考虑使用 WSL 改善 HMR 和文件监听体验；浏览器访问本地开发服务时，使用 `127.0.0.1:3000` 往往会比 `localhost:3000` 更快。

### 2. 创建项目

```bash
pnpm create nuxt@latest my-nuxt-app
cd my-nuxt-app
```

Nuxt 4 默认使用 `app/` 目录作为应用源码目录。

### 3. 启动开发服务

```bash
pnpm dev -o
```

默认开发地址：`http://localhost:3000`

启动后会感受到 Nuxt 的几个默认体验：

- 页面路由会根据目录自动生成
- 组件、组合式函数、工具函数有不少可以自动导入
- 页面切换和数据获取已经考虑了 SSR/CSR 之间的衔接

### 4. 构建与预览

```bash
# 生产构建
pnpm build

# 本地预览构建结果
pnpm preview
```

根据渲染模式不同，构建结果可能包含：服务器运行所需产物、预渲染页面、客户端资源、payload 数据。`pnpm preview` 能帮助提前发现渲染模式、资源路径和运行时配置相关的问题。

---

## 五、项目结构与目录认知

### 1. 典型的 Nuxt 4 目录结构

```
my-nuxt-app/
├── app/
│   ├── assets/              # 会进入构建流程的资源
│   ├── components/          # 组件
│   ├── composables/         # 组合式函数
│   ├── layouts/             # 布局
│   ├── middleware/          # 路由中间件
│   ├── pages/               # 页面路由
│   ├── plugins/             # Nuxt 插件
│   ├── utils/               # 工具函数
│   ├── app.config.ts        # 应用级公开配置
│   └── app.vue              # 应用根组件
├── public/                  # 原样公开的静态资源
├── server/
│   ├── api/                 # /api/* 接口
│   ├── middleware/          # 服务端中间件
│   ├── plugins/             # Nitro 插件
│   └── routes/              # 非 /api 前缀服务端路由
├── nuxt.config.ts           # Nuxt 核心配置
├── .env                     # 环境变量
├── package.json
└── tsconfig.json
```

**`app/`、`public/`、`server/` 三者的边界：**

- `app/` — 放的是 Vue 应用层代码
- `public/` — 放的是原样对外提供的静态资源
- `server/` — 放的是 Nitro 服务端逻辑

### 2. `app/` 是 Nuxt 4 的前台应用层

Nuxt 4 默认的 `srcDir` 是 `app/`：

- `app/pages/` — 决定页面路由
- `app/layouts/` — 决定页面外壳
- `app/components/` — 决定可复用视图单元
- `app/composables/` — 决定通用逻辑复用
- `app/plugins/` — 决定应用级注入与初始化

### 3. `server/` 是 Nuxt 的服务端能力入口

由 Nitro 提供的正式能力：

- `server/api/hello.ts` → 生成 `/api/hello`
- `server/routes/health.ts` → 生成 `/health`
- `server/middleware/log.ts` → 在请求进入时执行

### 4. `public/` 与 `app/assets/` 的区别

- **`public/`** — 资源不会经过构建转换，适合 favicon、robots.txt、静态下载文件等稳定资源
- **`app/assets/`** — 资源会进入构建流程，更适合业务图片、样式资源、字体等

如果一个资源你希望它保持稳定 URL，优先考虑 `public/`；如果你希望它参与构建优化、哈希命名、依赖分析，优先考虑 `app/assets/`。

---

## 六、核心配置文件介绍

Nuxt 4 有几层配置分别面向不同用途：

```
nuxt.config.ts    → 框架级配置
app/app.config.ts → 应用公开配置
.env              → runtimeConfig 环境变量注入
tsconfig.json     → 类型系统与编辑器体验
app/app.vue       → 应用根结构
```

### 1. `.env`：环境变量

```env
NUXT_API_SECRET=super-secret
NUXT_PUBLIC_API_BASE=https://api.example.com
NUXT_PUBLIC_SITE_NAME=我的 Nuxt 网站
```

`.env` 只负责提供值，本身不负责告诉 Nuxt"这些值该怎么安全地在项目里使用"。这也是为什么后面还需要 `runtimeConfig`。

**值进入项目的链路：**

```
.env 文件 → Nuxt 启动时把变量放到 process.env
→ nuxt.config.ts (runtimeConfig) 分类
→ useRuntimeConfig() 业务代码读取
```

**`NUXT_PUBLIC_` 前缀的含义：**

- `NUXT_PUBLIC_` 开头的 → 准备给前端也能访问的值
- 不带 `NUXT_PUBLIC_` 的 → 更适合服务端私有使用

### 2. `nuxt.config.ts`：Nuxt 的总开关

```typescript
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.scss'],
  app: {
    head: {
      title: 'Nuxt 4 Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 4 快速上手示例项目' }
      ]
    }
  },
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/admin/**': { ssr: false },
    '/api/**': { cache: { maxAge: 60 * 5 } }
  },
  vite: {
    server: { port: 3000 }
  },
  nitro: {
    compressPublicAssets: true
  }
})
```

#### (1) `modules`：接入 Nuxt 模块生态

一键集成第三方扩展包，自动注入功能、简化配置、拓展核心能力：

- `@pinia/nuxt` — 自动注册 Pinia，无需手动 `createPinia()` + `app.use()`
- `@nuxtjs/tailwindcss` — 自动配置 Tailwind 依赖、PostCSS、样式注入

#### (2) `css`：注册全局样式

注册整个应用都会生效的全局样式文件。只是某个组件自己的样式，依然优先放回组件内部。

#### (3) `app`：全局基础配置

管的是整个网站通用、所有页面都生效的设置。`head` 对应网页源码里的 `<head>` 标签，全站统一配置网页头部。

#### (4) `runtimeConfig`：管理运行时配置与环境变量

`public` 里的给前后端共用，外面的只留给服务端。

```
.env → runtimeConfig → public（前端可读 + 服务端也可读）
                     → private（仅服务端可读，浏览器不可见）
```

**`.env` vs `runtimeConfig` 的关系：**

- `.env` 负责"提供原始变量值"
- `runtimeConfig` 负责"把变量按 Nuxt 的规则组织起来，供项目读取"

在代码里读取：

```typescript
const config = useRuntimeConfig()
console.log(config.public.apiBase)
```

服务端代码中还可以读取私有配置：

```typescript
export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    apiBase: config.public.apiBase,
    hasSecret: Boolean(config.apiSecret)
  }
})
```

#### (5) `routeRules`：控制页面级渲染与缓存策略

按路由粒度决定页面或接口的行为：

- `'/'` — 首页构建时预渲染
- `'/blog/**'` — 博客文章页也走预渲染
- `'/admin/**'` — 后台页面关闭 SSR，走客户端渲染
- `'/api/**'` — 接口增加短时缓存

#### (6) `vite`：向底层 Vite 传递配置

先找 Nuxt 自己有没有对应配置，只有 Nuxt 层没有、而底层 Vite 层确实需要改时，再用 `vite`。

#### (7) `nitro`：向服务端引擎传递配置

- `vite` 偏前端构建与开发链路
- `nitro` 偏服务端运行与输出链路

### 3. `app.config.ts`：公开且偏静态的应用配置

如果配置是公开的、不敏感的、更偏应用展示层、更适合在构建期确定的，适合放在 `app.config.ts`：

```typescript
export default defineAppConfig({
  siteName: 'Nuxt 4 Demo',
  theme: {
    primaryColor: '#0ea5e9'
  }
})

// 读取
const appConfig = useAppConfig()
```

> **判断原则：** 和密钥/环境变量/部署环境相关 → `runtimeConfig`；和站点标题/主题/公开开关相关 → `app.config`

---

## 七、核心能力实操

### 1. 文件系统路由

```
app/pages/
├── index.vue         →  /
├── about.vue         →  /about
└── posts/
    └── [id].vue      →  /posts/:id
```

页面结构和 URL 结构天然对齐，项目越大越能体会到这种可读性。

### 2. 布局系统

布局放在 `app/layouts/` 中，适合承载顶部导航、侧边栏、页脚、页面公共壳层。

在 `app.vue` 中配合 `<NuxtLayout>` 使用：

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

如果某个页面需要特殊布局，在页面中通过 `definePageMeta` 指定：

```vue
<script setup>
definePageMeta({ layout: 'custom' })
</script>
```

### 3. 自动导入

以下目录默认有自动导入能力：

- `app/components/`
- `app/composables/`
- `app/utils/`

```vue
<script setup>
const count = useState('count', () => 0)
const doubled = computed(() => count.value * 2)
</script>
```

如需显式导入，Nuxt 提供了 `#imports` 别名。

> **注意：** 自动导入提升开发效率，但也会让"这个函数到底来自哪里"变得没那么直观。团队协作中对公共逻辑命名保持克制。

### 4. 数据获取 ⭐

在 Nuxt 里，页面首屏数据获取要同时考虑：服务端渲染、payload 传递、hydration 复用、避免客户端再次请求同一份数据。

#### 四种方式对比

| 方式           | 定位                       | SSR 友好      | 适用场景                                     |
| -------------- | -------------------------- | ------------- | -------------------------------------------- |
| `$fetch`       | 基础同构请求工具           | ❌ 不自动复用 | 服务端路由、插件、事件处理函数；交互触发请求 |
| `useAsyncData` | 核心 SSR 友好数据获取      | ✅            | 首屏需要灵活异步逻辑                         |
| `useFetch`     | useAsyncData + $fetch 封装 | ✅            | 页面首屏从 API 拿数据（最常用）              |

#### `$fetch`

- 适合在服务端路由、插件、事件处理函数里直接使用
- 能在服务端和客户端两边工作
- **但不负责把 SSR 数据自动安全地传给客户端复用**

#### `useAsyncData`

- 包裹一个异步函数，在服务端执行它
- 把结果放进 Nuxt 的数据传递链路
- 在客户端 hydration 时复用这份结果，防止"二次获取"
- **需要唯一的 key 来去重**

#### `useFetch`（最常用）

- 写法短
- 自带 `pending`、`error`、`refresh`
- 会根据 URL 和选项自动生成 key

#### useFetch 示例

```vue
<script setup>
const { data: products, pending, error, refresh } = await useFetch('/api/products')
</script>

<template>
  <div v-if="pending">加载中...</div>
  <div v-else-if="error">错误: {{ error.message }}</div>
  <ul v-else>
    <li v-for="product in products" :key="product.id">{{ product.name }}</li>
  </ul>
  <button @click="refresh">刷新数据</button>
</template>
```

#### useAsyncData 与唯一 key

```vue
<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () => $fetch(`/api/posts/${route.params.slug}`))
</script>
```

#### SSR 数据传递流程

```
服务端执行 useFetch/useAsyncData 获取数据
→ 渲染 HTML + 写入 payload
→ 返回浏览器
→ 浏览器 hydration 复用 payload
```

#### ⚠️ 重要规则

- 页面首屏数据、希望 SSR 参与并防止二次获取 → 优先 `useFetch`
- 页面首屏需要执行更灵活的异步逻辑 → 优先 `useAsyncData`
- 点击按钮、提交表单、手动触发请求 → 直接用 `$fetch`
- **页面初始化阶段，不要直接裸用 `$fetch`**
- `useAsyncData` 的 key 一定要唯一

### 5. 状态共享

`useState` 本质上也是响应式状态，但比普通 `ref` 多了一层 Nuxt 的 SSR 友好能力：

- 像 `ref`，会在使用相同 key 的地方共享状态
- 参与 Nuxt 的服务端到客户端状态传递
- 在 hydration 时复用服务端已经生成好的状态，解决"水合不匹配"

#### 推荐：包装成组合式函数

```typescript
// app/composables/useCounter.ts
export const useCounter = () => useState<number>('counter', () => 0)
```

```vue
<!-- app/components/TheCounter.vue -->
<script setup>
const counter = useCounter()
</script>

<template>
  <div>
    <p>计数器: {{ counter }}</p>
    <button @click="counter++">+</button>
  </div>
</template>
```

#### ⚠️ 注意事项

- ❌ **不要在文件顶层直接用 `ref` 做全局状态** — 可能变成服务端进程里的单例状态，不同用户请求之间可能共享同一份状态，甚至导致数据泄露
- `useState` 里的值要**可序列化**（字符串、数字、布尔值、数组、普通对象），不推荐放函数、类实例、带复杂原型链的对象

#### useState vs Pinia

- `useState` — 轻量、直接、SSR 友好，适合大多数简单共享状态
- `Pinia` — 更完整的状态管理方案，适合复杂全局状态（actions、getters、DevTools 时间旅行等）

### 6. 服务端 API

在 `server/` 目录中写接口，通过文件命名约定处理不同的 HTTP 方法：

```typescript
// server/api/hello.get.ts → GET /api/hello
export default defineEventHandler(() => {
  return { message: 'hello from server' }
})

// server/api/users.post.ts → POST /api/users
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('新用户:', body)
  setResponseStatus(event, 201)
  return { success: true, user: body }
})
```

#### Nitro 同构 fetch 优势

SSR 渲染阶段调用内部 API 路由（如 `useFetch('/api/hello')`）时，Nuxt **不会发起真实的 HTTP 网络请求**，而是直接在当前进程内调用对应的事件处理函数。彻底消除网络开销与延迟，这是传统前后端分离部署难以实现的。

### 7. 服务端中间件

```typescript
// server/middleware/logger.ts
export default defineEventHandler((event) => {
  console.log(`[${event.method}] 新请求: ${getRequestURL(event).pathname}`)
})
```

> ⚠️ 服务器中间件不应返回值或结束响应，其职责是修改 event 上下文或执行副作用操作。若返回值会导致请求短路。

### 8. 客户端路由中间件

**服务端中间件 vs 路由中间件的区别：**

- 服务端中间件运行在 Nitro 层面，处理原始 HTTP 请求，对所有请求生效（包括 API 与静态资源）
- 路由中间件基于 vue-router，在页面导航时执行，不作用于直接的 API 调用

```typescript
// app/middleware/auth.ts
export default defineNuxtRouteMiddleware(() => {
  const user = useState('user')
  if (!user.value) {
    return navigateTo('/login')
  }
})
```

```vue
<script setup>
definePageMeta({ middleware: 'auth' })
</script>
```

### 9. Head 管理

分两层：

- **全局层** — `nuxt.config.ts` 里的 `app.head`，放全站通用的标题模板、基础 meta、favicon
- **页面层** — 在页面或组件里使用 `useHead` / `useSeoMeta`，根据当前页面数据动态设置

### 10. SEO 与元数据管理

#### `useHead`：通用 Head 管理

```vue
<script setup>
useHead({
  title: '商品详情页',
  meta: [{ name: 'description', content: '这是商品详情页' }]
})
</script>
```

能力最全，适合需要精细控制 head 结构时使用。

#### `useSeoMeta`：更推荐的 SEO 写法

更贴近 SEO 场景，类型更清晰，能减少常见拼写错误：

```vue
<script setup>
const { data: product } = await useFetch('/api/products/some-product')

useSeoMeta({
  title: () => `${product.value?.name} - 我的商店`,
  description: () => product.value?.description,
  ogTitle: () => `${product.value?.name} - 我的商店`,
  ogDescription: () => product.value?.description,
  ogImage: () => product.value?.imageUrl,
  twitterCard: 'summary_large_image'
})
</script>
```

**选择指南：**

| 工具          | 适用场景                   |
| ------------- | -------------------------- |
| `useHead`     | 通用 head 管理，精细控制   |
| `useSeoMeta`  | SEO 专用，更语义化（推荐） |
| `useHeadSafe` | 处理用户生成内容，防 XSS   |

**实战建议：**

- 全站默认头部放 `app.head`
- 页面级动态 SEO 优先用 `useSeoMeta`
- 需要更细粒度 head 控制时再用 `useHead`
- 页面 SEO 最好绑定真实页面数据，而不是写死模板文本
- 用户生成内容进入 head 时，优先考虑 `useHeadSafe`

---

## 八、渲染模式与部署思路

### 1. Nuxt 支持多种渲染策略

- SSR（服务端渲染）
- CSR（客户端渲染）
- 预渲染
- 混合渲染
- Edge 部署

### 2. `routeRules` 是理解渲染能力的关键

```typescript
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/api/**': { cache: { maxAge: 60 * 60 } },
    '/old-page': {
      redirect: { to: '/new-page', statusCode: 302 }
    }
  }
})
```

同一个 Nuxt 项目里可以让首页预渲染、博客页按规则预渲染、某些接口带缓存、某些旧地址自动重定向。这就是"混合渲染"思路。

### 3. 预渲染不只是"导出静态 HTML"

Nuxt 在预渲染时还会生成 `_payload.json`，其中包含 `useAsyncData` 和 `useFetch` 产生的序列化数据。客户端导航时可以直接读取这些 payload，而不是重复请求。

> 数据获取方式和渲染模式是连在一起的，不能把 Nuxt 中的数据获取简单当作普通前端里的异步请求。

---

## 九、核心架构与工作流程

### 1. Nuxt 的四层架构

Nuxt 不是简单把 Vue 套上 SSR，而是把 Vue 应用层、服务端引擎、构建生成层和部署产物层组织成统一工作流的全栈框架：

| 层             | 目录       | 职责                                           |
| -------------- | ---------- | ---------------------------------------------- |
| Vue 应用层     | `app/`     | 页面、布局、组件、composables、插件            |
| Nitro 服务端层 | `server/`  | API、server middleware、server plugins、routes |
| 生成层         | `.nuxt/`   | 把约定式源码整理成可运行的应用骨架             |
| 部署层         | `.output/` | 生产环境真正运行的产物                         |

```
源码（app/ + server/ + nuxt.config.ts）
→ Vue 应用层 + Nitro 服务端层 + 全局配置层
→ Nuxt 生成层（.nuxt）
→ 开发运行 / 生产构建
→ 部署产物（.output）
```

### 2. Nuxt 到底扫描了什么

Nuxt 扫描的不是整个项目里所有文件，而是被框架约定为有特殊语义的目录和文件：

| 扫描目录                          | 扫描结果                 |
| --------------------------------- | ------------------------ |
| `app/pages/`                      | 生成页面路由             |
| `app/layouts/`                    | 生成布局映射             |
| `app/middleware/`                 | 生成客户端路由中间件映射 |
| `app/plugins/`                    | 自动注册 Nuxt 插件       |
| `app/components/`                 | 生成组件自动导入能力     |
| `app/composables/` + `app/utils/` | 生成自动导入声明         |
| `server/api/`                     | 生成 `/api/*` 服务端路由 |
| `server/routes/`                  | 生成普通服务端路由       |
| `server/middleware/`              | 挂载到 Nitro 请求链路    |
| `server/plugins/`                 | 在 Nitro 启动时执行      |

> 不同目录的扫描规则并不完全一样。例如 `app/plugins/` 默认自动注册的是顶层插件文件，子目录下的 index 文件也会被扫描但不推荐长期依赖。

```
app/ + server/ + nuxt.config.ts → Nuxt 扫描器
→ 路由记录 / 布局与中间件映射 / 插件注册表 / 自动导入声明 / Nitro 路由与处理器
→ 写入 .nuxt
```

### 3. 应用真正的入口

#### 视图根入口：`app.vue`

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

- `app.vue` — 应用根组件
- `<NuxtLayout>` — 当前页面外面套哪层布局
- `<NuxtPage />` — 当前路由对应的页面组件渲染到哪里

> `app/pages/` 只是被扫描并生成路由记录，真正把当前页面显示出来的，是 `app.vue` 里的 `<NuxtPage />`。

#### 框架运行入口：`.nuxt` 里的生成入口

- Nuxt 先生成自己的运行入口
- 这个入口会把 `app.vue` 接成根组件
- 然后再由 Nuxt / Vue 创建应用实例

### 4. 执行 `pnpm dev` 后的内部流程

```
启动阶段：
执行 pnpm dev → 读取 nuxt.config.ts → 扫描 app/ 和 server/
→ 生成 .nuxt 与类型 → 启动 Nuxt Dev Server

请求阶段：
浏览器请求页面 → Nitro 接收请求 → 创建 Nuxt/Vue 实例
→ 执行 app plugins 及服务端逻辑 → 执行页面校验 + app middleware
→ 渲染页面组件 → 执行 useFetch/useAsyncData
→ 生成 HTML + payload → 返回浏览器 → 浏览器 hydration
```

### 5. 页面请求的完整执行顺序

**服务启动时执行：**

1. Nitro 启动
2. 执行 `server/plugins/`
3. 注册服务端钩子和运行时扩展

> `server/plugins/` 更接近服务端启动初始化，不是每个页面请求都重新执行。

**每个请求都会走：**

1. 请求进入 Nitro
2. 执行 `server/middleware/`
3. 创建 Nuxt 与 Vue 应用实例
4. 执行 `app/plugins/`
5. 执行页面 validate
6. 执行 `app/middleware/`
7. 匹配布局、页面与组件树
8. 执行 `useFetch` / `useAsyncData`
9. 生成 HTML
10. 把 HTML、payload、资源信息返回浏览器

### 6. `.nuxt` 与 `.output` 的区别

| 目录       | 性质       | 说明                                                                            |
| ---------- | ---------- | ------------------------------------------------------------------------------- |
| `.nuxt/`   | 中间生成层 | 开发期/生成期的中间结果（路由定义、自动导入声明、类型文件、插件注册、运行入口） |
| `.output/` | 部署产物层 | 生产构建后真正部署和运行的最终结果                                              |

```
源码与配置 → nuxt build → 生成客户端资源 + 生成 Nitro 服务端产物 + 应用 routeRules/prerender
→ .output
```

生产环境运行：

```bash
node .output/server/index.mjs
```

> `.nuxt` 更像"运行前整理好的应用骨架"，`.output` 更像"真正拿去上线部署的产物"。

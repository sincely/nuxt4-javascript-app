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

### Nuxt 4 vs Nuxt 3 核心差异

| 能力维度         | Nuxt 3               | Nuxt 4                      |
| ---------------- | -------------------- | --------------------------- |
| 目录结构         | 根目录约定           | `app/` 目录隔离             |
| 渲染模式         | SSR/SSG/SPA/ISR/Edge | 全部保留 + 更细粒度控制     |
| 状态管理         | Pinia                | Pinia 2 + useState          |
| TypeScript       | 原生支持             | 深度类型推导 + 更严格的推断 |
| 服务端引擎       | Nitro                | Nitro 2(更多部署目标)       |
| 缓存策略         | 基础                 | runtimeCache 细粒度控制     |
| View Transitions | 实验性               | 稳定支持                    |
| 模块兼容性       | 部分需适配           | 需检查兼容性                |
| CSS 处理         | PostCSS              | LightningCSS(更快)          |

### Nuxt 4 迁移指南(Nuxt 3 → 4)

如果您从 Nuxt 3 迁移到 Nuxt 4,需要注意以下破坏性更新:

#### 1. 目录结构迁移

Nuxt 4 最重要的 Breaking Change — 所有前端相关代码必须迁移到 `app/` 目录:

```bash
# Nuxt 3 目录结构
nuxt-3-project/
├── pages/           # ❌ 需要迁移
├── components/      # ❌ 需要迁移
├── composables/     # ❌ 需要迁移
├── layouts/         # ❌ 需要迁移
├── middleware/      # ❌ 需要迁移
├── plugins/         # ❌ 需要迁移
├── assets/          # ❌ 需要迁移
├── public/          # ❌ 需要迁移
├── app.vue          # ❌ 需要迁移
└── server/          # ✅ 保持不变

# Nuxt 4 目录结构
nuxt-4-project/
├── app/             # ✅ 新增 app/ 目录
│   ├── pages/       # ✅ 迁移到这里
│   ├── components/  # ✅ 迁移到这里
│   ├── composables/ # ✅ 迁移到这里
│   ├── layouts/     # ✅ 迁移到这里
│   ├── middleware/  # ✅ 迁移到这里
│   ├── plugins/     # ✅ 迁移到这里
│   ├── assets/      # ✅ 迁移到这里
│   ├── public/      # ✅ 迁移到这里
│   └── app.vue      # ✅ 迁移到这里
└── server/          # ✅ 保持不变
```

**迁移脚本:**

```bash
# 自动迁移命令
mkdir -p app
mv pages components composables layouts middleware plugins assets app.vue app/

# 如果 public 已存在,需要手动处理冲突
# mv app/public/* public/
# rm -rf app/public
```

#### 2. 配置文件变化

```javascript
// nuxt.config.ts (Nuxt 4)
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01', // ⭐ 新增:启用 Nuxt 4 行为
  future: { compatibilityVersion: 4 } // ⭐ 新增:启用 Nuxt 4 兼容模式

  // ...其他配置保持不变
})
```

**关键配置项:**

- `compatibilityDate` - 必须设置,确定使用哪个版本的行为
- `future.compatibilityVersion: 4` - 明确启用 Nuxt 4 特性

#### 3. 模块迁移检查

Nuxt 4 对模块兼容性有更高要求,需要检查所有使用的模块:

```bash
# 检查模块兼容性
npm outdated
# 或
pnpm outdated

# 更新模块到 Nuxt 4 兼容版本
npm update @nuxt/*
# 或
pnpm update @nuxt/*
```

**常见模块迁移:**

| 模块             | Nuxt 3 版本 | Nuxt 4 版本 | 变化     |
| ---------------- | ----------- | ----------- | -------- |
| `@nuxt/devtools` | `^1.0.0`    | `^1.5.0+`   | 需要更新 |
| `@pinia/nuxt`    | `0.5.x`     | `0.8.x+`    | API 变化 |
| `@nuxtjs/i18n`   | `8.x`       | `9.x+`      | 配置变化 |
| `@nuxt/image`    | `1.0.0`     | `1.4.0+`    | 兼容     |

#### 4. TypeScript 严格模式

Nuxt 4 默认启用更严格的类型推导:

```typescript
// Nuxt 3 (宽松)
const { data } = await useFetch('/api/posts')
// data.value 可能是 any 类型

// Nuxt 4 (严格)
const { data } = await useFetch<Post[]>('/api/posts')
// data.value 正确推导为 Post[] | null
```

**迁移建议:**

- 为所有 API 请求添加类型注解
- 检查隐式 `any` 类型错误
- 使用 `interface` 或 `type` 明确定义数据结构

#### 5. CSS 处理变化

Nuxt 4 使用 LightningCSS 替代 PostCSS,速度更快:

```javascript
// nuxt.config.js
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
    // 不再需要 postcss.config.js
  ]
})
```

**迁移注意:**

- 移除 `postcss.config.js` 文件
- 检查自定义 PostCSS 插件是否兼容 LightningCSS
- 大多数项目无需修改即可工作

#### 6. 自动导入变化

Nuxt 4 增强了自动导入,但需要注意:

```javascript
// ✅ 仍然自动导入
- app/composables/ 下的函数
- app/components/ 下的组件
- Vue API (ref, computed, watch 等)

// ⚠️ 需要手动导入
- node_modules 中的包(如 axios, dayjs)
- server/utils/ 中的工具函数(仅服务端)
```

#### 7. 破坏性更新清单

**必须修改:**

- [ ] 移动所有前端代码到 `app/` 目录
- [ ] 添加 `compatibilityDate` 配置
- [ ] 添加 `future.compatibilityVersion: 4`
- [ ] 更新所有 Nuxt 模块到最新版本
- [ ] 检查 TypeScript 类型错误

**建议修改:**

- [ ] 移除 `postcss.config.js`(如果使用 LightningCSS)
- [ ] 检查自定义插件兼容性
- [ ] 更新 CI/CD 构建脚本
- [ ] 测试生产环境部署
- [ ] 检查第三方库兼容性

**可能影响:**

- [ ] 自动导入范围变化
- [ ] CSS 处理性能变化(通常更快)
- [ ] 构建输出格式变化
- [ ] 模块配置项变化

#### 8. 迁移步骤

**Step 1: 备份项目**

```bash
git checkout -b nuxt4-migration
git commit -m "backup: before Nuxt 4 migration"
```

**Step 2: 升级依赖**

```bash
# 更新 Nuxt 到 4.x
npm install nuxt@latest
# 或
pnpm add nuxt@latest

# 更新相关模块
npm update @nuxt/* @pinia/nuxt @vueuse/nuxt
```

**Step 3: 迁移目录**

```bash
# 创建 app/ 目录
mkdir -p app

# 迁移文件
mv pages components composables layouts middleware plugins assets app.vue app/

# 处理 public/ 目录(如果与已有 public 冲突)
# mv app/public/* public/ 2>/dev/null || true
# rm -rf app/public
```

**Step 4: 更新配置**

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: { compatibilityVersion: 4 }
  // ...保持其他配置
})
```

**Step 5: 修复类型错误**

```bash
# 运行类型检查
npx nuxi typecheck

# 或
tsc --noEmit
```

**Step 6: 测试**

```bash
# 开发环境测试
npm run dev

# 构建测试
npm run build

# 生产预览
npm run preview
```

**Step 7: 部署验证**

```bash
# 测试生产构建
npm run build:prod

# 部署到测试环境
# 验证所有功能正常
```

#### 9. 常见问题

**Q1: 迁移后找不到页面?**

```bash
# 检查文件是否在 app/pages/ 目录下
ls app/pages/

# 确保路由文件命名正确
# index.vue → /
# about.vue → /about
# [id].vue → /:id
```

**Q2: 组件未自动导入?**

```javascript
// 确保组件在 app/components/ 目录下
// 检查组件文件名是否 PascalCase
// MyComponent.vue ✅
// my-component.vue ✅
// myComponent.vue ❌
```

**Q3: 构建失败?**

```bash
# 清除缓存
rm -rf .nuxt .output node_modules
npm install
npm run build

# 检查模块兼容性
npm ls @nuxt/*
```

**Q4: TypeScript 报错?**

```typescript
// 为 useFetch 添加类型
interface Post {
  id: number
  title: string
  content: string
}

const { data } = await useFetch<Post[]>('/api/posts')
```

#### 10. 迁移工具

**官方迁移工具:**

```bash
# Nuxt 提供迁移辅助工具
npx nuxi@latest upgrade --force

# 检查兼容性问题
npx nuxi@latest info
```

**手动检查清单:**

```bash
#!/bin/bash
# migration-check.sh

echo "=== Nuxt 4 迁移检查 ==="

# 检查 app/ 目录
if [ -d "app" ]; then
  echo "✅ app/ 目录存在"
else
  echo "❌ 需要创建 app/ 目录"
fi

# 检查配置文件
if grep -q "compatibilityDate" nuxt.config.*; then
  echo "✅ compatibilityDate 已配置"
else
  echo "❌ 需要添加 compatibilityDate"
fi

# 检查旧目录
if [ -d "pages" ] || [ -d "components" ]; then
  echo "⚠️ 发现旧目录,需要迁移到 app/"
else
  echo "✅ 旧目录已清理"
fi

echo "=== 检查完成 ==="
```

#### 11. 迁移后优化

迁移完成后,可以利用 Nuxt 4 的新特性:

```javascript
// 启用 View Transitions
export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  }
})

// 使用混合渲染
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/blog': { swr: 3600 },
    '/dashboard': { ssr: false }
  }
})

// 使用 LightningCSS(默认启用)
// 无需额外配置,自动生效
```

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

### 数据获取：Nuxt 4 的 SSR 友好方案

Nuxt 4 提供了强大的数据获取能力,完美支持 SSR:

#### 1. useAsyncData — 核心数据获取

```vue
<script setup>
const { data, pending, error, refresh, clear } = await useAsyncData(
  'post-list', // 缓存键(唯一)
  () => $fetch('/api/posts'), // 异步获取函数
  {
    server: true, // 服务端执行(默认 true)
    lazy: false, // true = 客户端挂起显示骨架屏
    default: () => [], // 骨架屏 / 初始值
    transform: (data) => data.posts, // 数据转换
    pick: ['id', 'title', 'slug'] // 只取需要的字段
  }
)
</script>
```

#### 2. useFetch — 语法糖

```vue
<script setup>
// GET 请求
const { data } = await useFetch('/api/posts', {
  query: { page: 1, limit: 20 }, // 自动拼接到 URL
  headers: useRequestHeaders(['cookie']) // 传递 cookie
})

// POST 请求
const { data } = await useFetch('/api/posts', {
  method: 'POST',
  body: { title: 'Nuxt 4', content: '...' }
})
</script>
```

#### 3. 客户端刷新

```vue
<script setup>
const { data, refresh } = await useAsyncData('posts', () => $fetch('/api/posts'))

// 手动刷新
await refresh()

// 带选项刷新(绕过缓存)
await refresh({ dedupe: true })
</script>
```

#### 4. useNuxtData — 更灵活的缓存控制

```vue
<script setup>
// 在页面加载前检查缓存
const { data: cachedPost } = useNuxtData('post-detail')

if (cachedPost.value) {
  // 有缓存,直接使用,不发起请求
  console.log('命中客户端缓存:', cachedPost.value)
}

// 即使有缓存也强制刷新
const { data } = await useFetch('/api/posts/1', {
  getCachedData: () => null // 强制跳过缓存
})
</script>
```

### 混合渲染(Hybrid Rendering)

Nuxt 最强大的特性之一,通过 `routeRules` 精细控制每条路由的渲染策略:

#### 路由规则配置

```javascript
// nuxt.config.js
export default defineNuxtConfig({
  routeRules: {
    // 首页:构建时静态生成
    '/': { prerender: true },

    // 博客列表:增量静态再生(SWR),1 小时新鲜度
    '/blog': { swr: 3600 },

    // 博客详情:SWR + 自动爬取链接预渲染
    '/blog/**': {
      swr: 86400,
      prerender: ['/blog/getting-started-with-nuxt4'],
      crawlLinks: true
    },

    // 文档:静态生成
    '/docs/**': { prerender: true },

    // 仪表盘:纯客户端渲染(需要登录的页面)
    '/dashboard/**': { ssr: false },

    // 管理后台:服务端渲染 + 中间件
    '/admin': {
      ssr: true,
      middleware: ['auth']
    },

    // API 路由:跨域开放
    '/api/**': { cors: true },

    // 用户个人页:SSR + 缓存
    '/u/**': { ssr: true, cache: { maxAge: 300, staleMaxAge: 600 } },

    // 默认:CDN 缓存 60 秒
    '/**': { cache: { maxAge: 60 } }
  }
})
```

#### 渲染模式详解

| 渲染模式    | 说明与适用场景                              |
| ----------- | ------------------------------------------- |
| `prerender` | 构建时生成 HTML,适合内容固定不变的页面      |
| `swr`       | Stale-While-Revalidate,首推 ISR 方案        |
| `ssr`       | 服务端渲染,首屏 SEO 友好,适合内容动态的页面 |
| `spa`       | 纯客户端渲染,适合高度交互的后台管理界面     |
| `isr`       | 增量静态再生,通过 swr 实现                  |
| `edge`      | CDN 边缘节点直出,全球 < 50ms 延迟           |

### 状态管理

#### 方案一:useState(轻量级)

```javascript
// app/composables/useAuth.js
export const useAuth = () => {
  const token = useState('token', () => null)
  const user = useState('user', () => null)
  const isAuthenticated = computed(() => !!token.value)

  const login = async (credentials) => {
    const { data } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    token.value = data.value?.token
    user.value = data.value?.user
  }

  const logout = () => {
    token.value = null
    user.value = null
    navigateTo('/login')
  }

  return {
    token: readonly(token),
    user: readonly(user),
    isAuthenticated,
    login,
    logout
  }
}
```

#### 方案二:Pinia(复杂场景)

```javascript
// composables/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'cart',
  () => {
    const items = ref([])
    const isLoading = ref(false)

    const itemCount = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))

    const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0))

    const addItem = async (product) => {
      const existing = items.value.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        items.value.push({ ...product, quantity: 1 })
      }
    }

    const removeItem = (id) => {
      items.value = items.value.filter((i) => i.id !== id)
    }

    return { items, isLoading, itemCount, totalPrice, addItem, removeItem }
  },
  {
    persist: true // 开启持久化
  }
)
```

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

### 路由中间件

路由中间件可以在页面渲染前执行,常用于权限验证:

#### 1. 命名中间件

```javascript
// app/middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated.value) {
    return navigateTo(`/login?redirect=${to.fullPath}`)
  }
})

// 在页面中使用
// app/pages/dashboard/index.vue
<script setup>
definePageMeta({ middleware: ['auth'] })
</script>
```

#### 2. 带参数的中间件

```javascript
// app/middleware/role.js
export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuth()
  const requiredRole = to.meta.role

  if (requiredRole && user.value?.role !== requiredRole) {
    throw createError({ statusCode: 403, message: '权限不足' })
  }
})

// 在页面中使用
// app/pages/admin/users.vue
<script setup>
definePageMeta({
  middleware: [{ name: 'role', params: { role: 'admin' } }]
})
</script>
```

#### 3. 全局中间件

```javascript
// app/middleware/global.js
// 文件名以 .global.js 结尾，将对所有路由生效
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全局中间件执行', to.fullPath)
})
```

## 服务端 API

### Nitro Server 引擎

Nuxt 4 使用 Nitro 2 作为服务端引擎,支持更多部署目标:

#### 1. API 路由

```javascript
// server/api/posts/index.get.ts — GET /api/posts
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 20

  return {
    posts: [
      { id: 1, title: 'Nuxt 4 新特性', slug: 'nuxt4-features' },
      { id: 2, title: 'Nitro 2 引擎解析', slug: 'nitro-2' },
    ],
    pagination: { page, limit, total: 42 }
  }
})

// server/api/posts/index.post.ts — POST /api/posts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 验证
  if (!body.title) {
    throw createError({
      statusCode: 400,
      message: '标题不能为空',
    })
  }

  // 业务逻辑
  const post = await createPost(body)

  setResponseStatus(event, 201)
  return { post }
})

// server/api/posts/[id].get.ts — GET /api/posts/:id
export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const post = await getPostById(id)

  if (!post) {
    throw createError({ statusCode: 404, message: '文章不存在' })
  }

  return post
})
```

#### 2. 服务端中间件

```javascript
// server/middleware/auth.ts
export default defineEventHandler(async (event) => {
  const publicPaths = ['/api/auth/login', '/api/posts']
  const path = getRequestURL(event).pathname

  if (publicPaths.some((p) => path.startsWith(p))) return

  const token = getHeader(event, 'Authorization')?.replace('Bearer ', '')

  if (!token) {
    throw createError({ statusCode: 401, message: '未授权' })
  }

  try {
    const user = await verifyJWT(token)
    event.context.user = user
  } catch {
    throw createError({ statusCode: 401, message: 'Token 无效' })
  }
})
```

#### 3. WebSocket 支持

```javascript
// server/routes/_ws.ts
export default defineWebSocketHandler({
  open(peer) {
    console.log('[ws] Client connected:', peer.id)
    peer.send(JSON.stringify({ type: 'connected' }))
  },
  message(peer, message) {
    try {
      const data = JSON.parse(message.text())
      switch (data.type) {
        case 'ping':
          peer.send(JSON.stringify({ type: 'pong', ts: Date.now() }))
          break
        case 'subscribe':
          peer.subscribedChannels.add(data.channel)
          break
        default:
          peer.send(JSON.stringify({ type: 'error', message: 'Unknown type' }))
      }
    } catch {
      peer.send(JSON.stringify({ type: 'error', message: 'Invalid JSON' }))
    }
  },
  close(peer) {
    console.log('[ws] Client disconnected:', peer.id)
  },
  error(peer, error) {
    console.error('[ws] Error:', error)
  }
})
```

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

## 自动导入（Auto-imports）

Nuxt 4 的自动导入能力在 Nuxt 3 基础上进一步增强:

### 自动导入范围

| 类别       | 扫描目录           | 示例                             |
| ---------- | ------------------ | -------------------------------- |
| 组合式函数 | `app/composables/` | `useCounter()`                   |
| Vue API    | 内置               | `ref`, `computed`, `watch`       |
| 组件       | `app/components/`  | `<Button />`                     |
| 工具函数   | `server/utils/`    | 服务端工具可被客户端安全函数调用 |
| 样式       | `assets/`          | Vite 自动处理                    |

### 使用示例

```javascript
// app/composables/useCounter.js
export const useCounter = () => {
  const count = useState('count', () => 0)
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => (count.value = 0)

  return { count: readonly(count), increment, decrement, reset }
}

// app/pages/index.vue — 无需任何 import
<script setup>
const { count, increment } = useCounter()
</script>
```

## View Transitions（视图过渡）

Nuxt 4 稳定支持 View Transitions API:

### 配置

```javascript
// nuxt.config.js
export default defineNuxtConfig({
  experimental: {
    viewTransition: true // 启用 View Transitions
  }
})
```

### 使用

```vue
<!-- app/pages/index.vue -->
<template>
  <NuxtLink to="/blog" class="card">
    <img src="/cover.jpg" />
    <h2>文章标题</h2>
    <NuxtPage :transition="{ name: 'slide' }" />
  </NuxtLink>
</template>

<style>
/* 视图过渡动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
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

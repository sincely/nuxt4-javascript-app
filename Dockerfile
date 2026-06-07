# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json(如果存在)
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制项目文件
COPY . .

# 构建应用
RUN npm run build:prod

# 运行阶段
FROM node:20-alpine AS runner

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production
ENV NUXT_PUBLIC_API_BASE=http://10.102.129.12:18088

# 复制构建产物
COPY --from=builder /app/.output ./.output

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", ".output/server/index.mjs"]

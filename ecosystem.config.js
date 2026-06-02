module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      port: '8888',
      // eslint-disable-next-line camelcase
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      // eslint-disable-next-line camelcase
      merge_logs: true, // 设置追加日志而不是新建日志
      // eslint-disable-next-line camelcase
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 指定日志文件的时间格式
      // eslint-disable-next-line camelcase
      ignore_watch: ['node_modules', 'public', 'logs'] // 不用监听的文件
    }
  ]
}

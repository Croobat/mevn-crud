const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
        }
      }
    }
  }
}

// module.exports = {
//   devServer: {
//     proxy: {
//       '^/api': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         logLevel: 'debug',
//         pathRewrite: { '^/api': '' },
//       },
//     },
//   },
// }

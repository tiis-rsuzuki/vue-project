const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    port: 8081,
    // localhostでvueからexpressにAPIリクエストを送信する為の設定
    proxy: 'http://localhost:3000'
},
})

module.exports = {
  transpileDependencies: [],
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap': require.resolve('bootstrap')
      }
    }
  }
}

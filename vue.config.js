module.exports = {
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production' ? '/babyccino/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap': require.resolve('bootstrap')
      }
    }
  }
}

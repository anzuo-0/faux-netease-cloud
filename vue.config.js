module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'api': '@/api',
        'sass': '@/sass',
      }
    }
  }
}
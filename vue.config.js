module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/github-search-vue/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
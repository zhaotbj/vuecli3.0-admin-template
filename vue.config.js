module.exports = {
  publicPath: '/', 
  outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
  devServer: {
    host: 'localhost',
    port: 8080, // 端口号
    https: false,
    open: true, //配置自动启动浏览器
    hotOnly: true // 热更新
  }
}
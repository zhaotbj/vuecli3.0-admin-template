var path = require('path')

var proEnv = require('./config/prod.env');  // 生产环境
var uatEnv = require('./config/test.env');  // 测试环境
var devEnv = require('./config/dev.env');  // 本地环境
const env = process.env.NODE_ENV
let target = ''
// 默认是本地环境
if (env === 'production') {  // 生产环境
  target = proEnv.hosturl;
} else if (env === 'test') { // 测试环境
  target = uatEnv.hosturl;
} else {  // 本地环境
  target = devEnv.hosturl;
}
console.log('target============', target)
module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    // host: 'localhost',
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false,
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: {
      target: {
        target: target
      }
    }
    /* proxy: { //配置自动启动浏览器
      "/rest/*": {
        target: "http://172.16.1.12:7071",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false
      },
      "/pbsevice/*": {
        target: "http://172.16.1.12:2018",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false
      },
    } */
  }
}
import axios from 'axios'
import locStor from '@/utils/localStorage'
// 创建axios实例

const service = axios.create({
    // baseURL: process.env.BASE_API,
    baseURL: window.host.url,
    // baseURL: 'http://192.168.100.126:8040/saasAdmin/',
    timeout: 100000 // 请求超时时间
  })

export default service
import { createProxyMiddleware } from 'http-proxy-middleware'

export default createProxyMiddleware({
  target: 'https://naturaonecoat-cc85b1fdbbef.herokuapp.com',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('Origin', 'https://naturaonecoat.vercel.app')
  },
  onProxyRes(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] =
      'https://naturaonecoat.vercel.app'
  },
})

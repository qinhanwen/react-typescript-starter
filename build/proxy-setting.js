module.exports = {
  '/api': {
    target: 'http://localhost:3001',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
}

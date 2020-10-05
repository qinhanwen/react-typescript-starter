const { resolve } = require('./utils')

module.exports = {
  // devserver
  PORT: 3000,
  HOST: 'localhost',
  PROCESS: false,
  INLINE: true,
  HOT: false,
  AUTO_OPEN_BROWER: true,
  CONTENT_BASE: resolve('dist'),
}

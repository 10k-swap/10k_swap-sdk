
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./l0k_swap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./l0k_swap-sdk.cjs.development.js')
}

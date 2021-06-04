const fs = require('fs')
const path = require('path')
const { override, babelInclude } = require('customize-cra')

const EXCLUDE = ['.DS_Store', path.basename(__dirname)]

module.exports = override(
  babelInclude([
    path.resolve('src'),
    path.resolve('../echo')
  ])
)

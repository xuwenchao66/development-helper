const path = require('path')
const { alias } = require('react-app-rewire-alias')
const rewireStyledComponents = require('react-app-rewire-styled-components')

const aliasMap = {
  '@': path.join(__dirname, 'src')
}

module.exports = function override(config, env) {
  config = alias(aliasMap)(config)
  config = rewireStyledComponents(config, env)
  return config
}

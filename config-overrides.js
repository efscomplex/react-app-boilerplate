const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(...addBabelPlugins(
   [
      'module:styled-jsx/babel',
      { "plugins": ["styled-jsx-plugin-sass"] }
   ]
))
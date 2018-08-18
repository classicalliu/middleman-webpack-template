const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

prodConfig = {
  mode: "production",
  output: {
    path: path.join(__dirname, '.tmp/webpack_build')
  }
};

module.exports = merge(baseConfig, prodConfig);

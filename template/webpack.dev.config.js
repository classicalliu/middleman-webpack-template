const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: "development",
  output: {
    path: path.join(__dirname, '.tmp/webpack_output')
  }
};

module.exports = merge(baseConfig, devConfig);

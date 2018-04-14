var devConfig = require('./webpack.config');
var WebpackStrip = require('strip-loader');
var  stripLoader = {
  test: [/\.js$/, /\.es6$/],
  loader: WebpackStrip.loader('console.log', 'debugger')
};

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;
const devConfig = require('./webpack.config');
const WebpackStrip = require('strip-loader'); // eslint-disable-line import/no-extraneous-dependencies


const stripLoader = {
  test: [/\.js$/, /\.es6$/],
  loader: WebpackStrip.loader('console.log', 'debugger')
};

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;

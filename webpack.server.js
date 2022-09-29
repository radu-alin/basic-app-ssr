const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're building a bundle for nodeJS (not for the browser)
  target: 'node',

  // tell webpack the root file of our server application
  entry: './src/index.js',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  
  // webpackNodeExternals, tell webpack to not bundle any librarie to the output bundle on the server if that library exists inside node_modules
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);

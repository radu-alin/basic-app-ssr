const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // tell webpack the root file
  entry: './src/client',

  // tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);

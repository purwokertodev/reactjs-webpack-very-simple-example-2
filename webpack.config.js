'use strict';

let path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'lib');

let config = {
   entry: SRC_DIR + '/main.js',

   output: {
      path:DIST_DIR + '/js',
      filename: 'bundle.js'
   },

   devServer: {
      inline: true,
      port: 8080,
      headers: {
      "Access-Control-Allow-Origin": "*"
    }
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;

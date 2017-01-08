'use strict';

let path = require('path');

let config = {
   entry: './lib/main.js',

   output: {
      path:path.join('public/javascripts/'),
      filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8080
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

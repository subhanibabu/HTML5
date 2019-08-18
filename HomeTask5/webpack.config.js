var path = require('path');
 var webpack = require('webpack');
 
 module.exports = {
     entry: path.resolve(__dirname, 'src') + '/App.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
     },
     module: {
        rules: [
           {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
        
              query: {
                presets: ['@babel/preset-env']
              }
           },
           {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        ]
     },
     devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline:true,
        port: 8080,
        open: true,
      },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
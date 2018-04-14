// const webpack = require('webpack'); // for CommonsChunkPlugin
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


  module.exports = {
    target: 'web', //default value
    mode: 'development',
    
    // entry & plugin & module.rules.loader option is resolved relative to this directory
    context: path.resolve('app'), 

    
    // entry: './app.js', // one entry point
    entry: ['./js/app', './js/global'], // multi entry point
    // entry: { // for filename: [name] & HtmlWebpackPlugin for separate html files
        // app: './js/app',
        // global: './js/global', 
      // },
      
      devtool: 'inline-source-map',
      
      output: {
        // without 'path' property the bundle will be in the root directory
        path: path.resolve(__dirname, 'dist'),
        // path: __dirname, // will put it in dist folder
        
        // publicPath: '/public/assets/', // index.html will look here for the bundle
        
        filename: 'bundle.js', // when entry is string | array
        // filename: '[name].bundle.js', // when entry is written as an object, [name] will be the property name. good for multiple output files.  
      },
      
      devServer: { // this is where dev-server will look for index.html
        contentBase: 'dist'
      },
      
      // watch: true,
      
      plugins: [
        // new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(['dist']),
        
        //location of the html file if exists, possible to leave empty and a new html will be created
        // new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        
        // new HtmlWebpackPlugin({ 
        //   title: 'Global-Title',
        //   filename: 'global.html',
        //   // template: 'views/global.html',
        //   chunks: ['global']
        // }),

        // new HtmlWebpackPlugin({
        //   title: 'App-Title',
        //   filename: 'app.html',
        //   // template: 'views/app.html',
        //   chunks: ['app']
        // }), 
        
        
        new BrowserSyncPlugin(
          // BrowserSync options
          {
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/'
          },
          // plugin options
          {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
          }
        )

        // when we create multiple output files and some of them share the same modules (e.g jquery),
        // it will put the module on a separate file instead of loading it to each of our js files.
        // new webpack.optimize.CommonsChunkPlugin('shared'),
      ],
      
  module: {
    rules: [
      {
        test: /\.css$/, //css files
        exclude: /node_modules/,
        use: [
          // 'style-loader', 'css-loader', 'postcss-loader'
          { loader: 'style-loader', options: {sourceMap: true} },
          { loader: 'css-loader', options: {sourceMap: true} },
          { loader: 'postcss-loader', options: {sourceMap: true} },
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      // {
      //   test: /\.scss$/, // sass
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' },
      //   ]
      // },
      // {
      //   test: /\.less$/, // less
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     { loader: 'less-loader' },
      //   ]
      // },
      // {
      //   test: /\.es6$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     // options: { 
      //     //   presets: [ 'es2015', 'react', 'stage-2', ]
      //     // }
      //   }
      // }
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.es6'],
    modules: [
      "node_modules",
      path.resolve(__dirname, "app") // import {} from 'absoluteImport';
    ],
  }
};

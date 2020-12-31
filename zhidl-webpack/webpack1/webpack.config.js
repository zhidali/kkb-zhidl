/*
 * @author: zhidl
 * @Date: 2020-12-21 21:09:16
 * @description: 
 * @LastEditTime: 2020-12-30 00:13:40
 * @LastEditors: zhidl
 */
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const zhidlwebpackplugin = require('./zhidl-webpack-plugin');

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const htmlWebpackPlugin = require()
module.exports = {
  // 但页面入口
  // entry: './src/index.js',
  // 多入口 对应 多出口
  // ertry 支持 字符串 对象 数组
  entry: {
    index: './src/index.js'
  },
  // 数组 单页面应用， 使用的少
  // entry: ['./src/index.js', './src/a.js'],
  // 出口
  output: {
    // 输出文件存放的目录 必须是绝对路径
    path: path.resolve(__dirname, './dist'),
    // 输出的文件名称
    // [name] 占位符， 对应上方entry
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './myLoaders']
  },

  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          // 'zhidl-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
          // 'zhidl-less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          // url-loader包含了file-loader
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            // [ext] 后缀名占位符
            name: '[name].[ext]',
            // 文件公众前缀
            publicPath: '../images',
            // 改变图片存储位置  打包输出
            outputPath: 'images',
            limit: 1024 * 10
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {}
      //   }
      // }
      
      // {
      //   test: /\.js$/,
      //   use: [

      //     {
      //       loader: 'my-loader.js',
      //       options: {
      //         info: 'ppppp'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new zhidlwebpackplugin(),
    new CleanWebpackPlugin()
  ],
  // node development production
  mode: 'development',
  devtool: 'sourcemap',
  devServer: {
    contentBase: './dist',
    port: 8081,
    open: true
  }
}
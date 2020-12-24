/*
 * @author: zhidl
 * @Date: 2020-12-21 21:09:16
 * @description: 
 * @LastEditTime: 2020-12-24 23:31:56
 * @LastEditors: zhidl
 */
const path = require('path');
// const miniCssExtractPlugin = require('mini-css-extract-plugin');
// const htmlWebpackPlugin = require()
module.exports = {
  // 但页面入口
  // entry: './src/index.js',
  // 多入口 对应 多出口
  // ertry 支持 字符串 对象 数组
  entry: {
    a: './src/a.js'
  },
  // 数组 单页面应用， 使用的少
  // entry: ['./src/index.js', './src/a.js'],
  // 出口
  output: {
    // 输出文件存放的目录 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    // 输出的文件名称
    // [name] 占位符， 对应上方entry
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', './myLoaders']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // miniCssExtractPlugin.loader,
          'zhidl-style-loader',
          'zhidl-css-loader',
          // 'postcss-loader',
          'zhidl-less-loader'
        ]
      }
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
    // new miniCssExtractPlugin({
    //   filename: '[name].css'
    // })
  ],
  // node development production
  mode: 'development'
}
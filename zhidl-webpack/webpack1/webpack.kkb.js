/*
 * @author: zhidl
 * @Date: 2020-12-21 21:09:16
 * @description: 
 * @LastEditTime: 2020-12-22 22:11:58
 * @LastEditors: zhidl
 */
const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 输出文件存放的目录 必须是绝对路径
    path: path.resolve(__dirname, './kkb'),
    // 输出的文件名称
    filename: 'kkb.js'
  },
  mode: 'development'
}
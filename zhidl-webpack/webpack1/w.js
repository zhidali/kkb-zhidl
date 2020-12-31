/*
 * @author: zhidl
 * @Date: 2020-12-29 23:46:40
 * @description: 编写plugin
 * @LastEditTime: 2020-12-29 23:58:32
 * @LastEditors: zhidl
 */


 const webpack = require('webpack');

 const options = require('./webpack.config.js');

 const compiler = webpack(options); // compiler.hooks



 compiler.run();





 

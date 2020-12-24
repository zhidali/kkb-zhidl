/*
 * @author: zhidl
 * @Date: 2020-12-24 23:22:49
 * @description: 
 * @LastEditTime: 2020-12-24 23:32:32
 * @LastEditors: zhidl
 */

const less = require('less');

module.exports = function(source) {
  console.log(source, 'source');
  less.render(source, (err, output) => {
    this.callback(err, output.css);
  })
}
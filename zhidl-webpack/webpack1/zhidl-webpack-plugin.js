/*
 * @author: zhidl
 * @Date: 2020-12-29 23:55:03
 * @description: 
 * @LastEditTime: 2020-12-30 00:26:20
 * @LastEditors: zhidl
 */

 module.exports = class zhidlwebpackplugin {

   apply(compiler) {

    // 做人嘛，最重要的是开心  zhidl
    // 异步触发
    compiler.hooks.emit.tapAsync('zhidlwebpackplugin', (compilation, cb) => {
      let fileSize = Object.keys(compilation.assets).length;
      let fileText = Object.keys(compilation.assets).join('\n');
      
      compilation.assets['kkb.txt'] = {
        source() {
          return `fileList${fileSize}:\n${fileText}`
        },
        size() {
          return 1024
        }
      }

      cb();

    });

    // 同步触发
    // compiler.hooks.emit.tap
    compiler.hooks.compile.tap('zhidlwebpackplugin', (compilation) => {

    })
   }
 }
// console.log(process.env.foo)
// const port = 8787;
const path = require('path');

const port = 7070;
module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port
  },
  //  对象形式配置webpack 
  // configureWebpack: {
  //  resovle: {
  //    // 别名
  //    alias: {
  //     '@pages': path.join(__dirname, './src/pages')
  //    }
  //  } 
  // }

  // 函数形式配置webpack
  configureWebpack(config) {
    // 别名
    config.resolve.alias['@pages'] = path.join(__dirname, './src/pages');

    if(process.env.NODE_ENV === 'development'){
      config.name = 'vue项目'
    }
  },
  // 更加高级webpack  可以进行链式操作
  chainWebpack(config) {
    // icon-svg
  }

}
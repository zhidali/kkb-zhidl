/*
 * @author: zhidl
 * @Date: 2020-11-24 23:04:38
 * @description: 
 * @LastEditTime: 2020-11-24 23:14:25
 * @LastEditors: zhidl
 */

const fs = require('fs');
const handlebars = require('handlebars');
const chalk = require('chalk');


module.exports = async () => {
  // 获取列表
  const list = fs.readFileSync('./src/views').filter(v => v !== 'Home.vue').map(v => ({
    name: v.replace('.vue', '').toLowerCase(),
    file: v
  }));

  
  compile({
    list
  }, './src/router.js', './template/router.js.hbs')


  compile({
    list
  }, './src/App.vue', './template/App.vue.hbs')

  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
    }
    console.log(chalk.green(`🚀${filePath} 创建成功`))
  }

}
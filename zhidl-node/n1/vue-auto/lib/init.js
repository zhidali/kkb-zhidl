/*
 * @author: zhidl
 * @Date: 2020-11-24 22:30:10
 * @description: 
 * @LastEditTime: 2020-11-24 23:16:58
 * @LastEditors: zhidl
 */
const {promisify} = require('util');


const figlet = promisify(require('figlet'));


const clear = require('clear');
const chalk = require('chalk');

const log = content => console.log(chalk.green(content));

const {clone} = require('./download');

const spaw = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise((resolve, reject) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve();
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear();
  const data = await figlet('Welcome to my project');
  log(data);

  // 下载
  log('🚀创建项目' + name);
  // await clone('github:su37josephxia/vue-template', name);

  // 安装依赖
  log('安装依赖...');
  // await spaw('npm', ['install'], {cwd: `./${name}`});

  log(chalk.green('安装完成'))
}
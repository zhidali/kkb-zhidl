/*
 * @author: zhidl
 * @Date: 2020-11-24 22:36:08
 * @description: 
 * @LastEditTime: 2020-11-24 22:38:58
 * @LastEditors: zhidl
 */

 const {promisify} = require('util');

 module.exports.clone = async function(repo, desc) {
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载中.....${repo}`)

  process.start()

  await download(repo, desc)

  process.succeed();
 }
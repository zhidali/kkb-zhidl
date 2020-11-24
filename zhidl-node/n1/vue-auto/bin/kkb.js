#!/usr/bin/env node
 // 制定解释器

// console.log('zhidl');

const program = require('commander');


program.version(require('../package').version);

program
  .command('init <name>')
  .description('init project')
  .action(require('../lib/init'))


program.parse(process.argv)
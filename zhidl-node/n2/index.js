/*
 * @author: zhidl
 * @Date: 2020-11-26 21:16:10
 * @description: 
 * @LastEditTime: 2020-11-26 21:24:47
 * @LastEditors: zhidl
 */

 const Koa = require('koa');

 const app = new Koa();

 app.use(async (ctx, next) => {
  console.log(ctx);
  ctx.body = JSON.stringify(ctx)
 })

 app.listen(3000, () => {
   console.log('====================================');
   console.log('11');
   console.log('====================================');
 })
/*
 * @author: zhidl
 * @Date: 2020-11-24 21:32:20
 * @description: 
 * @LastEditTime: 2020-11-24 21:39:38
 * @LastEditors: zhidl
 */

 
 const http = require('http');

 const server = http.createServer((req, res) => {
  console.log('request', req);
 })

 server.listen(3000)


 function getPrototypeChain(obj) {
   const protoChain = []
   while(obj = Object.getPrototypeChain(obj)) {
    protoChain.push(obj);
   }
   return protoChain;
 }

 
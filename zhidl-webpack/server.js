/*
 * @author: zhidl
 * @Date: 2020-12-29 22:03:23
 * @description: 
 * @LastEditTime: 2020-12-29 22:06:11
 * @LastEditors: zhidl
 */
const express = require('express');

const app = express();

app.get('./api/info', (req, res) => {
  res.json({
    name: 'webpack'
  })
})

app.listen('9092');
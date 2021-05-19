
/*
 * @author: zhidl
 * @Date: 2021-05-18 16:14:21
 * @description: 
 * @LastEditTime: 2021-05-18 16:58:04
 * @LastEditors: zhidl
 */

import { watch, observe } from './index';

let o = {
  a: {
    b: 1,
    d: [{a:1}]
  }
}

let k = {
  a:1
};

observe(o);
observe(k);

watch(o.a, 'd', (n) => {
  console.log(n, '111');
});

watch(o.a.d[0], 'a', (n) => {
  console.log(n, '222');
});

watch(k, 'a', (n) => {
  console.log(n, '333');
});

o.a.b++;


o.a.d.push({a:333});
o.a.d[0].a = 444;
k.a = 10;


let res = [];
let maxRequestNum = 4;
let i = 0;
async function sleep(fn, ...args) {
  await new Promise(resolve => res.push({resolve, args}))
  return fn(...args);
}

async function request(path, params = {}) {
  i++;
  if(i < maxRequestNum + 1) {
    return await ajax(path, params);
  } else {
    return await sleep(ajax, path, params)
  }

}

function refreshRequestList() {
  while (res.length > 0) {
    res[0].resolve();
    res.shift()
	}
}

// 实际发送请求
async function ajax(path, params) {
  console.log(path, 'path');
  return new Promise(resolve => {
    setTimeout(() => {
      refreshRequestList();
      i--;
      return resolve({path, params})
    }, 3000)
  })
}


request('1')
request('2')
request('3')
request('4')
request('5').then(r => console.log(r))

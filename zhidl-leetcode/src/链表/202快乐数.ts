/*
 * @author: zhidl
 * @Date: 2021-06-22 18:03:25
 * @description: 
 * @LastEditTime: 2021-06-22 20:26:44
 * @LastEditors: zhidl
 */



interface IHappy {
  val: number;
  next: IHappy | null;
}

function isHappy(n:number):boolean {
  let pre = n, cur = getNext(n);
  while(cur !== pre && cur !== 1) {
    pre = getNext(pre);
    cur = getNext(getNext(cur));
    console.log(pre, cur);
  }
  return cur === 1;
}


function getNext(n:number):number {
  let t = 0;
  while(n) {
    t += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return t;
}

console.log(isHappy(2));

/*
 * @author: zhidl
 * @Date: 2021-06-23 12:27:20
 * @description: 
 * @LastEditTime: 2021-06-23 16:01:37
 * @LastEditors: zhidl
 */

const log = console.log;

const shuffle = (arr:number[] = []) => {
  let len = arr.length;
  while (len > 1){
    const index = Math.floor(Math.random() * len--);
    [
      arr[len],
      arr[index],
    ] = [
      arr[index],
      arr[len],
    ];
  }
  return arr;
}



      
const autoRandomRedPackage = (money, num, limit = 0.01) => {
  if((money / num) < limit) {
    log(`💩 请重新输入红包数量! 减少红包数量，或增加红包金额!`);
    log(`❌ 你输入的红包数量太多了，每个人至少要能分到 0.01 元!`);
    console.log(money / num, money, num);
    return false;
  } else {
    const originMoney = money;
    const originLimit = limit;
    // 精度损失解决方案, 扩大后，再还原 ✅🚀
    let multi = 100 * (100 / money);
    money *= multi;
    limit *= multi;
    // log(`multi =`, multi);
    const result = [...new Uint8Array(num)].fill(limit, 0, num);
    // 1. 将剩余的红包，均分✅，如果有余数，随机的添加到数组的一个元素上
    const restLimit = (
      money - limit * num) / limit;
    const reminderLimit = (restLimit % num);
    const reminderMoney = reminderLimit * limit;
    const averageLimit = (restLimit - reminderLimit) / num;
    for (let i = 0; i < num; i++) {
      const index = parseInt(String(Math.random() * averageLimit));
      const randomMoney = index * limit;
      const leftMoney = (averageLimit - index) * limit;
      // 2. 在平均后的范围内，计算出一个随机数，将分配好的红包，依次加入到生成的数组中;✅
      result[i] += randomMoney;
      // 3. 分配后剩余的红包，随机加入到生成的数组中;✅
      const j = parseInt(String(Math.random() * num));
      result[j] += leftMoney;
    }
    // 4. 将平均后的余数红包，随机加入到生成的数组中;✅
    if(reminderMoney > 0) {
      const index = parseInt(String(Math.random() * num));
      result[index] += reminderMoney;
    }
    const temp = shuffle(result).map(i => i / multi);
    // log(`temp =`, temp);
    const total = temp.reduce((acc, i) => acc += i*multi, 0) / multi;
    // log(`total !== originMoney`, total !== originMoney, total, originMoney);
    if(total !== originMoney) {
      return autoRandomRedPackage(originMoney, num, originLimit);
    }
    const [min,] = [...temp].sort((a, b) => a - b > 0 ? 1 : -1);
    const [max,] = [...temp].sort((a, b) => a - b > 0 ? -1 : 1);
    // const [min, ...rest1] = [...temp].sort((a, b) => a - b > 0 ? 1 : -1);
    // const [max, ...rest2] = [...temp].sort((a, b) => a - b > 0 ? -1 : 1);
    // sort change origin array order bug ❌
    // const [min, ...rest1] = temp.sort((a, b) => a - b > 0 ? 1 : -1);
    // const [max, ...rest2] = temp.sort((a, b) => a - b > 0 ? -1 : 1);
    return {
      total: total,
      result: temp,
      desc: `
        🕵️‍♂️ 你输入的红包总额是 ${originMoney} 元, 红包数量是 ${num} 个!
        👍 最大的红包是 ${max} 元!
        👎 最小的红包是 ${min} 元!
      `,
      // desc: `
      //   🕵️‍♂️ 你输入的红包总额是 ${originMoney} 元, 红包数量是 ${num} 个!\n
      //   👍 最大的红包是 ${max} 元!\n
      //   👎 最小的红包是 ${min} 元!\n
      // `,
    };
    // return temp;
  }
}



      



const total = arr => arr.result.reduce((acc, i) => acc += i*100, 0) / 100;

      
// 测试
// const test = autoRandomRedPackage(0.1, 11); // ❌ 异常处理
// const test0 = autoRandomRedPackage(0.1, 5);
// const test1 = autoRandomRedPackage(0.1, 10); // ✅ ok
// const test2 = autoRandomRedPackage(1, 10);
// const test3 = autoRandomRedPackage(10, 10);
// const test4 = autoRandomRedPackage(100, 10);
// const test5 = autoRandomRedPackage(100, 11);
const test6 = autoRandomRedPackage(10, 4);

// log(`\ntest =`, test);
// log(`total =`, test && total(test));


log(`\ntest =`, test6);
log(`total =`, test6 && total(test6));
      
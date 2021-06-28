/*
 * @author: zhidl
 * @Date: 2021-06-21 10:46:01
 * @description:
 * @LastEditTime: 2021-06-24 17:15:42
 * @LastEditors: zhidl
 */
let isClear = false;

interface IOptions {
  /** 多少fps为卡顿点 默认40fps */
  below?: number;
  /** 多少个断定为卡 默认连续出现3次 */
  last?: number;
  /** 多少毫秒断定一次fps 默认 1000ms */
  millisecond?: number;
  /** 默认不开启 */
  isConsole?: boolean;
}
/**
 * @description: 设置fps入参数
 * @param {IOptions} options
 * @returns {Function} 返回fpsLoop
 */
function setFps(options: IOptions = {}) {
  let bfpsList: number[] = [];
  console.log(bfpsList, options);
  // 获取 performance
  let xn = performance && performance;

  function noop() {};
  noop.$clearFpsLoop = () => null;
  
  if(!xn) {
    return noop;
  }
  const log = !!options.isConsole ? console.log : () => {}

  // requestAnimationFrame 函数兼容处理
  const fpsCompatibility = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  const fpsConfig = {
    // @ts-ignore
    lastTime: xn.now() as number, // performance 是一个浏览器提供的API
    // @ts-ignore
    lastFameTime: xn.now() as number,
    frame: 0
  };

  const below = options.below || 40;
  const last = options.last || 3;
  const millisecond = options.millisecond || 1000;

  // 校验fps 卡顿
  function checkFPS() {
    let count = 0;
    for (let i = 0; i < bfpsList.length; i++) {
      if (bfpsList[i] && bfpsList[i] < below) {
        count++;
      } else {
        count = 0;
      }
      if (count >= last) {
        return true;
      }
    }
    return false;
  }

  function isLag(fps:number) {
    if(fps < below) {
      bfpsList.push(fps);
    }
    if (checkFPS()) {
      console.log('ka:', bfpsList);
      log('卡:', bfpsList);
      bfpsList = [];
    }
  }
  function bfpsLoop() {
    if (isClear) {
      return;
    }
    
    // @ts-ignore
    const first = xn.now();
    // 如果传入毫秒 打印毫秒内执行次数相差

    if (!!options.millisecond) {
      fpsConfig.frame = fpsConfig.frame + 1;
      if (first > millisecond + fpsConfig.lastTime) {
        const fps = Math.round((fpsConfig.frame * millisecond) / (first - fpsConfig.lastTime) / (options.millisecond / 1000) );
        log(`time: ${new Date()} fps is：`, fps);
        isLag(fps);
        fpsConfig.frame = 0;
        fpsConfig.lastTime = first;
      }
    } else {
      const diff = (first - fpsConfig.lastFameTime);
      fpsConfig.lastFameTime = first;
      const fps = Math.round(1000 / diff);
      isLag(fps);
    }

    fpsCompatibility(bfpsLoop);
  }

  bfpsLoop.$clearFpsLoop = function () {
    isClear = true;
  };

  return bfpsLoop;
}

const fps = setFps({millisecond: 300, isConsole: true});
fps();

export default setFps;

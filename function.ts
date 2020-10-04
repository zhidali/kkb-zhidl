// 函数的定义
function add1(x:number, y:number){
  return x + y
}

let add2: (x:number, y:number) => number;

type add3 = (x:number, y:number) => number;

interface add4{
  (x:number, y:number): number
}

// 可选参数， 可选参数必须在必选参数之后
function add5(x: number, y?:number): number{
  return y ? x+y : x 
}

function add6(x:number, y = 0, z:number, q = 1){
  return x + y + z + q;
}



// 接口

interface List {
  readonly id: number, // 只读属性
  name: string,
  sex? : string, // 可选属性
  [x: string]: any // key签名
}

interface Result {
  data: List[]
}

function render(result: Result){
  result.data.forEach((v, i) => {
    console.log(v.id, v.name);
    if(v.sex){
      console.log(v.sex);
    }
  })
}


let result = {
  data: [
    {id: 1, name: '小明', sex: '男'},
    {id: 2, name: '小红'}
  ]
};

render(result);




// array 接口

interface StringArray {
  [index: number]: string
}

interface Names {
  [y:string]: number,
  [x:number]: number
}



// function add(x:number, y:number):number{

// };

// interface Add {
//   (x:number, y:number): number
// }

type Add = (x:number, y:number) => number

let add:Add = (x:number, y:number) => x + y;



export {};
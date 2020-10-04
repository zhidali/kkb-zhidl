// Boolean
// Number
// Array
// Object
// Function
// String
// Symbol
// Undefined
//  Null
// Void
// Any
// Never
// 元组
// 枚举
// 高级类型

let bool: boolean = false;
let num: number = 1123;
let str: string = '7678';

let numArr: number[] = [ 1, 2, 3 ];
let arr: Array<number | string> = [ 1, 2, 'ddd', 3 ];

// 函数
let add = (x: number, y: number) => x + y;

// 对象
let obj: object = { a: 1, b: 2 };

// symbol
// let s1: symbol = Symbol();


let undefind: undefined = undefined;
let nul:null = null;


// 枚举
// enum 
enum Color {
  Red,
  Blue,
  Green,
  Yellow
}

enum Animal {
  Tiger = '老虎',
  Lion = '狮子',
  Kitty = '猫咪',
  Dog = '小狗'
}

enum Num {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4
}

let a = Color.Red;

console.log(typeof a)
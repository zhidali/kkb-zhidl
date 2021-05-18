/*
 * @author: zhidl
 * @Date: 2021-05-13 10:34:35
 * @description: 
 * @LastEditTime: 2021-05-18 10:23:25
 * @LastEditors: zhidl
 */

const bailRE = /[^\w.$]/
export function parsePath (path: string): any {
  if (bailRE.test(path)) {
    return
  }
  // console.log(path, 'path');
  const segments = path.split('.')
  return function (obj) {
    // console.log(obj, 'obj');
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

const person = {
  name: 'big joe',
  couple: {
      name: {
        a: 1,
        __ob__: 3
      },
      __ob__: 2
  },
  __ob__: 1
}

function func() {
  return this.couple
}

console.log(func.call(person,person));
console.log(parsePath('couple.name').call(person, person));


function isObject (obj: any): boolean {
  return obj !== null && typeof obj === 'object'
}

const seenObjects = new Set();


function traverse (val: any) {
  _traverse(val, seenObjects);
  console.log(seenObjects, 'seenObjects');
  seenObjects.clear()
}

function _traverse (val: any, seen: any) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  console.log(val, 'val');
  if (val.__ob__) {
    const depId = val.__ob__
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}


// console.log('traverse :', traverse(person), );
// traverse(person);

// person

// console.log(parsePath('person.couple.name')(person));
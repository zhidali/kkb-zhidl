/*
 * @author: zhidl
 * @Date: 2021-07-03 20:40:54
 * @description: 
 * @LastEditTime: 2021-07-03 21:10:32
 * @LastEditors: zhidl
 */




const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  let self = this;
  this.status = PENDING;
  this.value = null;
  this.resolveCallbacks = [];
  this.rejectCallbacks = [];

  try {
    fn(onResolve, onReject);
  } catch (e) {
    onReject(e)
  }
  
  function onResolve(val) {
    setTimeout(function(){
      if(self.status === PENDING) {
        self.value = val;
        self.status = RESOLVED;
        self.resolveCallbacks.forEach(fn => fn(val));
      }
    }, 0)
  }

  function onReject(err) {
    setTimeout(function () {
      if(self.status === PENDING) {
        self.value = err;
        self.status = REJECTED;
        self.rejectCallbacks.forEach(fn => fn(err));
      }
    }, 0)
  }

}

MyPromise.prototype.then = function(onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : function (val) { return val };
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) { return err };
  if(this.status === PENDING) {
    this.resolveCallbacks.push(onResolved);
    this.rejectCallbacks.push(onRejected);
  }
  if(this.status === REJECTED) {
    onRejected(this.value);
  }
  if(this.status === RESOLVED) {
    onResolved(this.value);
  }
  return this;
}

MyPromise.prototype.catch = function(onRejected) {
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) { return err };

  if(this.status === PENDING) {
    this.rejectCallbacks.push(onRejected);
  }
  if(this.status === REJECTED) {
    onRejected(this.value);
  }
}

new MyPromise(function(resolve, reject) {
  resolve(1111)
}).then(r => {
  console.log(r);
}).catch(err => {
  console.log(err);
})

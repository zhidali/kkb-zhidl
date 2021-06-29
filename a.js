

var s = 'yapple';
var c = 'apple';


function getI(str, k) {
  if(str.length < k.length) {
    return false
  }
  var index = 0;

  for(var i = 0; i < str.length; i++) {
    if(str[i] === k[index]) {
      index++;
    } else {
      index = 0;
    }
    if(index === k.length) {
      return true
    }
    if(index === 0 && str.length - i < k.length) {
      return false
    }
  }
}
 
let alog = getI(s, c);
console.log(alog);
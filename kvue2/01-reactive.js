function defineReactive(obj, key, val) {

  observe(val);

  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        observe(newVal)
        val = newVal
      }
    }
  })
}


function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  Object.keys(obj).forEach((k) => {
    defineReactive(obj, k, obj[k])
  })
}



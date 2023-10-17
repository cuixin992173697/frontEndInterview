function myNew(func, ...args) {
  const obj = {}
  obj._proto_ = func.prototype
  func.apply(obj, args)
  return obj
}

// 测试
function Person(name, age) {
  this.name = name
  this.age = age
}

let p = myNew(Person, 'cuixin', 18)
console.log(p)
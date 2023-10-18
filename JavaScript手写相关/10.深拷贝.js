function deepClone(originValue, map = new WeakMap()) {

  // 0.如果是Symbol类型
  if(typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 1.如果是原始类型，直接返回
  if(!isObject(originValue)) {
    return originValue
  }

  // 2.如果是set类型
  if(originValue instanceof Set) {
    const newSet = new Set()
    for (const setItem of originValue) {
      newSet.add(deepClone(setItem))
    }
    return newSet
  }

  // 3.如果是函数对象不需要进行深拷贝
  if(typeof originValue === 'function') {
    return originValue
  }

  // 4.如果是对象类型，才需要创建对象
  // 4.如果是对象类型, 才需要创建对象
  if (map.get(originValue)) {
    return map.get(originValue)
  }
  const newObj = Array.isArray(originValue) ? []: {}
  map.set(originValue, newObj)
  // 遍历普通的key
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key], map);
  }
  // 单独遍历symbol
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const symbolKey of symbolKeys) {
    newObj[Symbol(symbolKey.description)] = deepClone(originValue[symbolKey], map)
  }

  return newObj

}

function isObject(value) {
  const valueType = typeof value
  return (value !== null) && ( valueType === "object" || valueType === "function" )
}

// 测试
const info = {
  name: "cuixin",
  age: 18,
  friend: {
    name: "kobe",
    address: {
      name: "洛杉矶",
      detail: "斯坦普斯中心"
    }
  },
  // self: info
}
info.self = info

let newObj = deepClone(info)
console.log(newObj)
console.log(newObj.self === newObj)
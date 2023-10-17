const info = {
  name: 'cuxin',
  age: 18,
  friend: {
    name: '鱿鱼西',
    age: 30
  },
  studying: function() {
    console.log('cuixin is learning')
  },
  [Symbol()]: '666啊'
}

// 方式1
// const info1 = {...info}
// info1.friend.name = '高斯林'
// console.log(info)
// console.log(info1)
// info1.studying()

// 方式2
// const info2 = Object.assign({}, info)
// info2.friend.name = '王小波'
// console.log(info)
// console.log(info2)
// info2.studying()


// 方式三
const info3 = {}
for(let k in info) {
  info3[k] = info[k]
}
info3.friend.name = 'mose'
console.log(info)
console.log(info3)
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
let arr = [1, [3, [6, 9]]];
console.log(flatten(arr))
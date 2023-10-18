// https://github.com/rxaviers/async-pool/

async function asyncPool(poolLimit, array, iteratorFn) {
  // 存储所有的异步任务
  const ret = []
  // 存储正在执行的异步任务
  const executing = []
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array))
    ret.push(p)

    // 当poolLimit值小于等于总任务的个数时候进行并发控制
    if (poolLimit <= array.length) {
      // 当前任务完成后，从正在执行的数组中移除已完成1的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // 保存正在执行的异步任务
      executing.push(e)
      if (executing.length >= poolLimit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(ret)
}

// 测试
asyncPool(
  3,   //参数一,同时并发的格式
  [1000, 3000, 2000, 5000, 6000],  //参数二,每个请求传入的参数组成的数组
  (param) => 	//参数三,返回值被Promise包裹的异步执行函数
    new Promise((reslove) => {
      setTimeout(() => {
        console.log(param);
        reslove(param);
      }, param);
    })
).then((res) => {
  console.log(res);
});
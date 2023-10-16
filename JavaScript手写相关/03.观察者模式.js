class Notifier {
  constructor(name) {
    // 定义接受者数组
    this.objServerList = []
  }
  add(obj) {
    this.objServerList.push(obj)
  }
  remove(obj) {
    let deleteIndex  = this.objServerList.findIndex(o => {
      return o === obj
    })
    this.objServerList.splice(deleteIndex, 1)
  }
  notify() {
    // 通知每个接受者
    this.objServerList.forEach(obser => {
      obser.updata()
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }

  updata() {
    // 收到通知，执行逻辑
    console.log(this.name + "收到，马上进攻敌方防御塔");
  }
}
// 创建通知者
let notifyer = new Notifier()
// 创建观察者
let cuixin = new Observer('cuixin')
let mose = new Observer('mose')
// 将观察者加入到观察者列表
notifyer.add(cuixin)
notifyer.add(mose)
// 移除某个观察者
notifyer.remove(mose)

// 统一通知
notifyer.notify()

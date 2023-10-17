function Person( name, age){
	this.name=name
	this.age=age
}

function myNew(Fn,...items){
  let instance={}
  instance.__proto__=Fn.prototype 
  Fn.apply(instance,items)
  return instance
  // 严谨逻辑
  // return result instanceof Object ? result : instance
}
 let p=myNew(Person,'cuixin',18)
 console.log(p);

//  new关键字的主要工作
// 1在内存中创建一个新对象
// 2.将构造函数的prototype属性赋值给新创建对象的_proto_
// 3.将构造函数的this指向这个新创建出来的对象
// 4.执行函数的内部代码
// 5.如果构造函数没有返回非空对象，则返回创建出来的新对象
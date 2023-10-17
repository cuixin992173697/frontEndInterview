/*
1.type of
值 undefined、null、boolean、number、string、bigint、symbol、object、function
弊端：数组、正则、Data有自己的类型，返回object

2.instance of
判断A是否为B的实例，返回布尔值
只能用来判断两个对象是否属于实例关系，而不能判断一个对象实例具体属于哪种类型



3.Object.prototype.toString.call()
推荐，可以区分不同类型

4.obj1.prototype.isPrototypeOf(obj2)
判断obj1是否在哦报价2的原型链上
*/
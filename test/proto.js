function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
        console.log("My name is "+this.name,+this.age+" years old");
    };

var person = new Person("dsf",18);

/*
Person 是一个构造函数，而每个函数都有一个prototype 属性，我们称之为原型属性，它指向了一个对象，
这个对象就是实例对象person的原型；


每个JS对象都有一个属性__proto__，这个属性会指向该对象的原型，即 person.__proto__ === Person.prototype。
也可以通过 Object.getPrototypeOf(person) 获取对象的原型， person.__proto__ === Object.getPrototypeOf(person)

每个原型都有一个constructor属性指向关联的构造函数，即Person.prototype.constructor === Person。

其实原型对象就是通过 Object构造函数生成的，即 Person.prototype.__proto__.constructor === Object。
那么 Object.prototype的原型呢？  Object.prototype.__proto__ 为 null，即Object.prototype没有原型，
所以 Object.prototype 是原型链的最源头，也是属性查找的最源头。


检测实例属性和原型属性，静态属性:
Object.prototype.hasOwnProperty(prop)，可检测 prop属性是否是实例属性，对象不存在prop或为原型属性时返回false；
使用 in 关键词来检测对象以及原型链中是否具有指定属性。
if(attr in obj){
    if (obj.hasOwnProperty(attr)){
        实例属性
    }else{
        原型属性
    }

}else{
    attr不存在或为静态属性
}



*/


/*


__proto__
constructor
prototype
__defineGetter__
__defineSetter__
hasOwmProperty
isPrototypeOf

获取属性描述符
Object.getOwnPropertyDescriptor(obj,prop) 返回指定对象上一个自有属性的属性描述符
设置属性描述符
Object.defineProperty(obj,prop,descriptor) 此方法直接在一个对象上定义一个新的或修改原有属性，并返回此对象。
Object.defineProperties(obj,props) 此方法直接在一个对象上定义多个新的或修改多个原有属性，并返回此对象。

与枚举相关的方法：
Object.getOwnPropertyNames() 获取对象自身所有的属性键名，包括可枚举和不可枚举的属性。
Object.keys()获取对象自身的可枚举属性键名，返回键名数组。
obj.propertyIsEnumerable()判断对象实例obj自身的属性是否为可枚举。
for...in 遍历对象自身的和原型链上的可枚举的属性。可配合hasOwnProperty()只获取自身可枚举属性
Object.values()获取对象自身的可枚举属性的值，返回值数组。
Object.entries()获取对象自身的可枚举属性的键值对，每个键值对以数组的形式存储，返回键值对数组集。

以上几个方法除了for...in外其他的方法都无法遍历到原型链的属性。

Reflect.ownKeys()获取对象自身所有的属性键名，包括Symbol类型属性；
Object.getOwnPropertySymbols()获取对象自身Symbol类型属性；
Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。



*/

/*
属性描述符：
    对象里目前存在的属性描述符有两种主要形式：数据描述符、存储描述符

两种描述符共享以下键值对：
configurable: 默认false，只有为true时该属性描述符才能够被改变、删除。
enumerable：默认false，只有为true时，属性才能够出现在对象枚举属性中，被for..in枚举

数据描述符是一个具有属性的值，还具有以下可选键值：
value:该属性对象的值，默认undefined
writable: 默认false,只有为true时value才能被赋值运算符改变

存取描述符是由 getter和setter函数对所描述的属性，还具有以下可选键值：
get：给属性提供getter方法，无参，方法的返回值会被用作属性的值。
set：给属性提高setter方法，接受唯一参数；


获取属性描述符
Object.getOwnPropertyDescriptor(obj,prop) 返回指定对象上一个自有属性的属性描述符
设置属性描述符
Object.defineProperty(obj,prop,descriptor) 此方法直接在一个对象上定义一个新的或修改原有属性，并返回此对象。
Object.defineProperties(obj,props) 此方法直接在一个对象上定义多个新的或修改多个原有属性，并返回此对象。

eg：
var obj = new Object;
Object.defineProperties(obj, {
  'name': {
    value: '白月初',
    enumerable: true // 可枚举
  },
  'age': {
    value: 18,
    // 不可枚举
    enumerable: false
  }
 })
 此时obj多了name、age属性，其中name是可枚举不可写不可配置的，age是不可枚举不可写不可配置的；

 属性描述符存储器：
 var obj = {}
// 辅助变量，用于赋值和获取操作
var value = '小蠢货'

(obj, 'name', {
  get: function () {
    // 通过辅助变量获取属性值
    return value
  },
  set: function (newValue) {
    // 通过修改辅助变量，完成赋值操作
    value = newValue
  }
})

属性描述符存储器上面写法与下面等价：  可用于 hook 某对象某属性的取值和赋值。
person.__defineGetter__("mom", function() {
    console.log("get mom:");
    return "mom"
});
person.__defineSetter__("mom", function(attr) {
    console.log("set mom:" + attr)
});


Navigator.prototype.__defineGetter__(_prototype,func)与
Object.defineProperty 在处理已有属性时，只会更新对应特性。
但是在处理新属性时，__defineGetter__ 默认将其他特性置为True。与直接赋值类似。

*/



Symbol:
Symbol.toPrimitive 是内置的Symvbol的值。作为对象的函数值属性存在，当一个对象转换为初始值时调用。
Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});
































function Lavigator() {}

// =============== Lavigator.prototype.appCodeName  模拟开始 ==================

function appCodeName() {
    return "xxx"
}

Object.defineProperty(appCodeName, "name", {
    configurable: true,
    enumerable: true,
    value: "get " + appCodeName.name
})

Object.defineProperty(Lavigator.prototype, "appCodeName", {
    configurable: true,
    enumerable: true,
    get: appCodeName
});

// =============== Lavigator.prototype.appCodeName  模拟结束 ==================
















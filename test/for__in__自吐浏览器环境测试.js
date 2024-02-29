/*
想要将 浏览器环境对象，自动转成node补环境代码。


*/


// 1、获取 navigator 对象的所有可迭代属性方法名
var ls = []
  , des_ls = [];
var NNN = new Object();
for (key in navigator) {
    ls.push(key)
}
ls.sort();
var s = y = 0;
// 2、遍历获取到的所有属性方法名，对实例属性和原型属性分别进行处理
ls.forEach((attr)=>{
    if (navigator.hasOwnProperty(attr)) {
        console.log(attr + "是实例属性");
        s += 1;
    } else {
        // console.log(attr + "是原型属性");
        // 先判断属性描述符 是 数据描述符还是存储描述符(get\set)
        var descriptor = Object.getOwnPropertyDescriptor(navigator.__proto__, attr);
        var new_descriptor = JSON.parse(JSON.stringify(descriptor))
        var has_get,has_set,get_func_name,set_func_name;

        if("get" in descriptor){
            has_get = true;
            get_func_name = descriptor.get.name;
            new_descriptor.get_func_name = get_func_name;
        }
        if("set" in descriptor){
            has_set = true;
            set_func_name = descriptor.set.name;
            new_descriptor.get_func_name = set_func_name;
        }

        des_ls.push(new_descriptor);
        Object.defineProperty(NNN, attr, des);
        y += 1;
    }
}
)

console.log("原型：", y, "实例：", s);

Object.defineProperty(navigator, "dsf", {
    "enumerable": true,
    "configurable": true,
    get: function appName() {
        console.log('get name');
        return 123;
    }
});

// Object.getOwnPropertyDescriptor(Navigator.prototype,"appCodeName")

var attr_name = "appCodeName";
//多行字符串
var template_string = `

function Lavigator() {}

// =============== Lavigator.prototype.${attr_name}  模拟开始 ==================

function ${attr_name}() {
    return "xxx"
}

Object.defineProperty(${attr_name}, "name", {
    configurable: true,
    enumerable: true,
    value: "get " + ${attr_name}.name
})

Object.defineProperty(Lavigator.prototype, "${attr_name}", {
    configurable: true,
    enumerable: true,
    get: ${attr_name}
});

// =============== Lavigator.prototype.${attr_name}  模拟结束 ==================


`

/*
对于Object而言，我们代理它并没有什么实质性作用，这样只能知道 源js调用了Object的哪个方法，而不知道其参数是什么，
导致我们不知道源js做了什么操作，因此我们需要知道更多参数信息，因此采取hook的方式
*/


catvm.memory.hooks.Object$defineProperty = Object.defineProperty;
Object.defineProperty = function(obj,attr_name,descriptor){
    var result = catvm.memory.hooks.Object$defineProperty(obj,attr_name,descriptor);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.defineProperty","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};

catvm.memory.hooks.Object$defineProperties = Object.defineProperties;
Object.defineProperties = function(obj,props){
    var result = catvm.memory.hooks.Object$defineProperties(obj,props);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.defineProperties","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};

// 返回一个给定对象自身可枚举属性的键值对数组
catvm.memory.hooks.Object$entries = Object.entries;
Object.entries = function(obj){
    var result = catvm.memory.hooks.Object$entries(obj);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.entries","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    debugger;
    return result;
};

// 返回指定对象上一个自有属性对应的属性描述符
catvm.memory.hooks.Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor = function(obj,attr_name){
    var result = catvm.memory.hooks.Object$getOwnPropertyDescriptor(obj,attr_name);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.getOwnPropertyDescriptor","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};

// 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组
catvm.memory.hooks.Object$getOwnPropertyNames = Object.getOwnPropertyNames;
Object.getOwnPropertyNames = function(obj){
    var result = catvm.memory.hooks.Object$getOwnPropertyNames(obj);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.getOwnPropertyNames","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};

// 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
catvm.memory.hooks.Object$keys = Object.keys;
Object.keys = function(obj){
    var result = catvm.memory.hooks.Object$keys(obj);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.keys","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};


// 返回一个给定对象自身的所有可枚举属性值的数组
catvm.memory.hooks.Object$values = Object.values;
Object.values = function(obj){
    var result = catvm.memory.hooks.Object$values(obj);
    if (catvm.memory.config.print){
        let log_info = {"当前调用":"Object.values","arguments":arguments,"返回值":result};
        catvm.print.log([log_info]);
    }
    return result;
};


var dsf_tmp_context = catvm.memory.variable.Storage = {};
var Storage = function Storage() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Storage);//14


//======	symbol code start	======
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
		value: "Storage",
	    configurable: true
	}
});//85
//======	symbol code end	======


//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
Storage.prototype["clear"] = function clear(){
    const temp = Object.keys(this);
    for (let i=6; i<temp.length; i++){
        delete this[temp[i]];
    }
}; catvm.safefunction(Storage.prototype["clear"]);//194
Storage.prototype["getItem"] = function getItem(key){
    if(key in this){
        return this[key] + "";
    }
    return null;
}; catvm.safefunction(Storage.prototype["getItem"]);//194

Storage.prototype["key"] = function key(index){
    return Object.keys(this)[index+6];
}; catvm.safefunction(Storage.prototype["key"]);//194

Storage.prototype["removeItem"] = function removeItem(key){
    delete this[key];
}; catvm.safefunction(Storage.prototype["removeItem"]);//194

Storage.prototype["setItem"] = function setItem(key,value){
    this[key] = value;
}; catvm.safefunction(Storage.prototype["setItem"]);//194
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.length_getter = function length() {
    return Object.keys(this).length-6;
}; catvm.safefunction(dsf_tmp_context.length_getter);//273
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//279

Object.defineProperty(Storage.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//310

//======	access descriptor code end	======


var localStorage = {};
localStorage.__proto__ = Storage.prototype;
var sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;
//======	invocation error prop code start	======
localStorage.__defineGetter__("length",Object.getOwnPropertyDescriptor(Storage.prototype,"length").get);
sessionStorage.__defineGetter__("length",Object.getOwnPropertyDescriptor(Storage.prototype,"length").get);
dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
Storage.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//372

//======	invocation error prop code end	======
//======	invocation error func code start	======
// 方法就不能跟属性一种写法了，因为属性是直接 .属性 就执行了对应getter，而方法需要 .方法()，因此需要包裹一层函数，从而需要一个临时变量存储prototype中的方法。
catvm.memory.variable.Storage.__function_clear = Object.getOwnPropertyDescriptor(Storage.prototype,"clear").value; catvm.safefunction(catvm.memory.variable.Storage.__function_clear);
localStorage.__defineGetter__("clear",function clear(){return catvm.memory.variable.Storage.__function_clear;});
sessionStorage.__defineGetter__("clear",function clear(){return catvm.memory.variable.Storage.__function_clear;});
Storage.prototype["clear"] = function clear(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Storage.prototype["clear"]);//385

catvm.memory.variable.Storage.__function_getItem = Object.getOwnPropertyDescriptor(Storage.prototype,"getItem").value; catvm.safefunction(catvm.memory.variable.Storage.__function_getItem);
localStorage.__defineGetter__("getItem",function getItem(){return catvm.memory.variable.Storage.__function_getItem;});
sessionStorage.__defineGetter__("getItem",function getItem(){return catvm.memory.variable.Storage.__function_getItem;});
Storage.prototype["getItem"] = function getItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Storage.prototype["getItem"]);//385

catvm.memory.variable.Storage.__function_key = Object.getOwnPropertyDescriptor(Storage.prototype,"key").value; catvm.safefunction(catvm.memory.variable.Storage.__function_key);
localStorage.__defineGetter__("key",function key(){return catvm.memory.variable.Storage.__function_key;});
sessionStorage.__defineGetter__("key",function key(){return catvm.memory.variable.Storage.__function_key;});
Storage.prototype["key"] = function key(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Storage.prototype["key"]);//385

catvm.memory.variable.Storage.__function_removeItem = Object.getOwnPropertyDescriptor(Storage.prototype,"removeItem").value; catvm.safefunction(catvm.memory.variable.Storage.__function_removeItem);
localStorage.__defineGetter__("removeItem",function removeItem(){return catvm.memory.variable.Storage.__function_removeItem;});
sessionStorage.__defineGetter__("removeItem",function removeItem(){return catvm.memory.variable.Storage.__function_removeItem;});
Storage.prototype["removeItem"] = function removeItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Storage.prototype["removeItem"]);//385

catvm.memory.variable.Storage.__function_setItem = Object.getOwnPropertyDescriptor(Storage.prototype,"setItem").value; catvm.safefunction(catvm.memory.variable.Storage.__function_setItem);
localStorage.__defineGetter__("setItem",function setItem(){return catvm.memory.variable.Storage.__function_setItem;});
sessionStorage.__defineGetter__("setItem",function setItem(){return catvm.memory.variable.Storage.__function_setItem;});
Storage.prototype["setItem"] = function setItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Storage.prototype["setItem"]);//385

//======	invocation error func code end	======

Storage = catvm.proxy(Storage);
localStorage = catvm.proxy(localStorage);
sessionStorage = catvm.proxy(sessionStorage);

if(catvm.memory.config.framework_debugger){debugger;}

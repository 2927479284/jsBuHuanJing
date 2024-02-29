var dsf_tmp_context = catvm.memory.variable.HTMLCollection = {};
var HTMLCollection = function HTMLCollection() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLCollection);//14


//======	symbol code start	======
Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLCollection",
	    configurable: true
	},
    [Symbol.iterator]: {
    // todo：该函数没有被保护，容易被检测；其实是一个迭代器的实现；
		value: function values(){debugger;},
	    configurable: true
	}
});//105
//======	symbol code end	======

//======	data descriptor func code start	======
HTMLCollection.prototype["item"] = function item(){debugger;}; catvm.safefunction(HTMLCollection.prototype["item"]);//215
HTMLCollection.prototype["namedItem"] = function namedItem(){debugger;}; catvm.safefunction(HTMLCollection.prototype["namedItem"]);//215
//======	data descriptor func code end	======

//======	access descriptor code start	======

dsf_tmp_context.length_getter = function length() {debugger;}; catvm.safefunction(dsf_tmp_context.length_getter);//295
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//301

Object.defineProperty(HTMLCollection.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======
catvm.memory.variable.HTMLCollection.htmlCollection_obj = {};
catvm.memory.variable.HTMLCollection.htmlCollection_obj.__proto__ = HTMLCollection.prototype;
//======	invocation error prop code start	======
catvm.memory.variable.HTMLCollection.htmlCollection_obj.__defineGetter__("length",Object.getOwnPropertyDescriptor(HTMLCollection.prototype,"length").get);
dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
HTMLCollection.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.HTMLCollection.__function_item = Object.getOwnPropertyDescriptor(HTMLCollection.prototype,"item").value; catvm.safefunction(catvm.memory.variable.HTMLCollection.__function_item);
catvm.memory.variable.HTMLCollection.htmlCollection_obj.__defineGetter__("item",function item(){return catvm.memory.variable.HTMLCollection.__function_item;});
HTMLCollection.prototype["item"] = function item(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCollection.prototype["item"]);//407

catvm.memory.variable.HTMLCollection.__function_namedItem = Object.getOwnPropertyDescriptor(HTMLCollection.prototype,"namedItem").value; catvm.safefunction(catvm.memory.variable.HTMLCollection.__function_namedItem);
catvm.memory.variable.HTMLCollection.htmlCollection_obj.__defineGetter__("namedItem",function namedItem(){return catvm.memory.variable.HTMLCollection.__function_namedItem;});
HTMLCollection.prototype["namedItem"] = function namedItem(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCollection.prototype["namedItem"]);//407


HTMLCollection = catvm.proxy(HTMLCollection);

if(catvm.memory.config.framework_debugger){debugger;}
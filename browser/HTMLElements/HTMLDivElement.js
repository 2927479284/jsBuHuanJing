var dsf_tmp_context = catvm.memory.variable.HTMLDivElement = {};
var HTMLDivElement = function HTMLDivElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLDivElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLDivElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLDivElement.__proto__ = HTMLElement;
HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLDivElement.htmlDivElement_obj = {};
catvm.memory.variable.HTMLDivElement.htmlDivElement_obj.__proto__ = HTMLDivElement.prototype;

//======	access descriptor code start	======

dsf_tmp_context.align_getter = function align() {debugger;}; catvm.safefunction(dsf_tmp_context.align_getter);//285
Object.defineProperty(dsf_tmp_context.align_getter, "name", {
    value: "get align",
    configurable: true
});//291
dsf_tmp_context.align_setter = function align() {debugger;}; catvm.safefunction(dsf_tmp_context.align_setter);//296
Object.defineProperty(dsf_tmp_context.align_setter, "name", {
    value: "set align",
    configurable: true
});//301

Object.defineProperty(HTMLDivElement.prototype, "align", {
	get: dsf_tmp_context.align_getter,
	set: dsf_tmp_context.align_setter,
	enumerable:true,
	configurable:true,
});//322

//======	access descriptor code end	======

//======	invocation error prop code start	======
catvm.memory.variable.HTMLDivElement.htmlDivElement_obj.__defineGetter__("align",Object.getOwnPropertyDescriptor(HTMLDivElement.prototype,"align").get);
dsf_tmp_context.align_getter = function align(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.align_getter);
HTMLDivElement.prototype.__defineGetter__("align",dsf_tmp_context.align_getter);//393





// 当用户创建div时，调用此函数返回一个div对象；
catvm.memory.htmlelements["div"] = function () {
    var div = catvm.memory.variable.HTMLDivElement.htmlDivElement_obj;
    div.align = "";
    return div;
}


HTMLDivElement = catvm.proxy(HTMLDivElement);

if(catvm.memory.config.framework_debugger){debugger;}





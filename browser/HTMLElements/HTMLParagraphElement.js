var dsf_tmp_context = catvm.memory.variable.HTMLParagraphElement = {};
var HTMLParagraphElement = function HTMLParagraphElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLParagraphElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLParagraphElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLParagraphElement",
	    configurable: true
	}
});//85
//======	symbol code end	======
HTMLParagraphElement.__proto__ = HTMLElement;
HTMLParagraphElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLParagraphElement.htmlParagraphElement_obj = {};
catvm.memory.variable.HTMLParagraphElement.htmlParagraphElement_obj.__proto__ = HTMLParagraphElement.prototype;





//======	access descriptor code start	======

dsf_tmp_context.align_getter = function align() {debugger;}; catvm.safefunction(dsf_tmp_context.align_getter);//294
Object.defineProperty(dsf_tmp_context.align_getter, "name", {
    value: "get align",
    configurable: true
});//300
dsf_tmp_context.align_setter = function align() {debugger;}; catvm.safefunction(dsf_tmp_context.align_setter);//305
Object.defineProperty(dsf_tmp_context.align_setter, "name", {
    value: "set align",
    configurable: true
});//310

Object.defineProperty(HTMLParagraphElement.prototype, "align", {
	get: dsf_tmp_context.align_getter,
	set: dsf_tmp_context.align_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.HTMLParagraphElement.htmlParagraphElement_obj.__defineGetter__("align",Object.getOwnPropertyDescriptor(HTMLParagraphElement.prototype,"align").get);
dsf_tmp_context.align_getter = function align(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.align_getter);
HTMLParagraphElement.prototype.__defineGetter__("align",dsf_tmp_context.align_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
//======	invocation error func code end	======
catvm.memory.htmlelements["p"] = function () {
    debugger;
    var p = catvm.memory.variable.HTMLParagraphElement.htmlParagraphElement_obj;
    return p;
}



HTMLParagraphElement = catvm.proxy(HTMLParagraphElement);

if(catvm.memory.config.framework_debugger){debugger;}



var dsf_tmp_context = catvm.memory.variable.HTMLTitleElement = {};
var HTMLTitleElement = function HTMLTitleElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLTitleElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLTitleElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLTitleElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLTitleElement.__proto__ = HTMLElement;
HTMLTitleElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLTitleElement.htmlTitleElement_obj = {};
catvm.memory.variable.HTMLTitleElement.htmlTitleElement_obj.__proto__ = HTMLTitleElement.prototype;




//======	access descriptor code start	======

dsf_tmp_context.text_getter = function text() {debugger;}; catvm.safefunction(dsf_tmp_context.text_getter);//294
Object.defineProperty(dsf_tmp_context.text_getter, "name", {
    value: "get text",
    configurable: true
});//300
dsf_tmp_context.text_setter = function text() {debugger;}; catvm.safefunction(dsf_tmp_context.text_setter);//305
Object.defineProperty(dsf_tmp_context.text_setter, "name", {
    value: "set text",
    configurable: true
});//310

Object.defineProperty(HTMLTitleElement.prototype, "text", {
	get: dsf_tmp_context.text_getter,
	set: dsf_tmp_context.text_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======

//======	invocation error prop code start	======
catvm.memory.variable.HTMLTitleElement.htmlTitleElement_obj.__defineGetter__("text",Object.getOwnPropertyDescriptor(HTMLTitleElement.prototype,"text").get);
dsf_tmp_context.text_getter = function text(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.text_getter);
HTMLTitleElement.prototype.__defineGetter__("text",dsf_tmp_context.text_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
//======	invocation error func code end	======
catvm.memory.htmlelements["title"] = function () {
    debugger;
    var title = catvm.memory.variable.HTMLTitleElement.htmlTitleElement_obj;
    return title;
}



HTMLTitleElement = catvm.proxy(HTMLTitleElement);

if(catvm.memory.config.framework_debugger){debugger;}


var dsf_tmp_context = catvm.memory.variable.HTMLMetaElement = {};
var HTMLMetaElement = function HTMLMetaElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLMetaElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLMetaElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLMetaElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLMetaElement.__proto__ = HTMLElement;
HTMLMetaElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj = {};
catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__proto__ = HTMLMetaElement.prototype;


//======	access descriptor code start	======

dsf_tmp_context.name_getter = function name() {debugger;}; catvm.safefunction(dsf_tmp_context.name_getter);//294
Object.defineProperty(dsf_tmp_context.name_getter, "name", {
    value: "get name",
    configurable: true
});//300
dsf_tmp_context.name_setter = function name() {debugger;}; catvm.safefunction(dsf_tmp_context.name_setter);//305
Object.defineProperty(dsf_tmp_context.name_setter, "name", {
    value: "set name",
    configurable: true
});//310

Object.defineProperty(HTMLMetaElement.prototype, "name", {
	get: dsf_tmp_context.name_getter,
	set: dsf_tmp_context.name_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.httpEquiv_getter = function httpEquiv() {debugger;}; catvm.safefunction(dsf_tmp_context.httpEquiv_getter);//294
Object.defineProperty(dsf_tmp_context.httpEquiv_getter, "name", {
    value: "get httpEquiv",
    configurable: true
});//300
dsf_tmp_context.httpEquiv_setter = function httpEquiv() {debugger;}; catvm.safefunction(dsf_tmp_context.httpEquiv_setter);//305
Object.defineProperty(dsf_tmp_context.httpEquiv_setter, "name", {
    value: "set httpEquiv",
    configurable: true
});//310

Object.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
	get: dsf_tmp_context.httpEquiv_getter,
	set: dsf_tmp_context.httpEquiv_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.content_getter = function content() {debugger;}; catvm.safefunction(dsf_tmp_context.content_getter);//294
Object.defineProperty(dsf_tmp_context.content_getter, "name", {
    value: "get content",
    configurable: true
});//300
dsf_tmp_context.content_setter = function content() {debugger;}; catvm.safefunction(dsf_tmp_context.content_setter);//305
Object.defineProperty(dsf_tmp_context.content_setter, "name", {
    value: "set content",
    configurable: true
});//310

Object.defineProperty(HTMLMetaElement.prototype, "content", {
	get: dsf_tmp_context.content_getter,
	set: dsf_tmp_context.content_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.media_getter = function media() {debugger;}; catvm.safefunction(dsf_tmp_context.media_getter);//294
Object.defineProperty(dsf_tmp_context.media_getter, "name", {
    value: "get media",
    configurable: true
});//300
dsf_tmp_context.media_setter = function media() {debugger;}; catvm.safefunction(dsf_tmp_context.media_setter);//305
Object.defineProperty(dsf_tmp_context.media_setter, "name", {
    value: "set media",
    configurable: true
});//310

Object.defineProperty(HTMLMetaElement.prototype, "media", {
	get: dsf_tmp_context.media_getter,
	set: dsf_tmp_context.media_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.scheme_getter = function scheme() {debugger;}; catvm.safefunction(dsf_tmp_context.scheme_getter);//294
Object.defineProperty(dsf_tmp_context.scheme_getter, "name", {
    value: "get scheme",
    configurable: true
});//300
dsf_tmp_context.scheme_setter = function scheme() {debugger;}; catvm.safefunction(dsf_tmp_context.scheme_setter);//305
Object.defineProperty(dsf_tmp_context.scheme_setter, "name", {
    value: "set scheme",
    configurable: true
});//310

Object.defineProperty(HTMLMetaElement.prototype, "scheme", {
	get: dsf_tmp_context.scheme_getter,
	set: dsf_tmp_context.scheme_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__defineGetter__("name",Object.getOwnPropertyDescriptor(HTMLMetaElement.prototype,"name").get);
dsf_tmp_context.name_getter = function name(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.name_getter);
HTMLMetaElement.prototype.__defineGetter__("name",dsf_tmp_context.name_getter);//393

catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__defineGetter__("httpEquiv",Object.getOwnPropertyDescriptor(HTMLMetaElement.prototype,"httpEquiv").get);
dsf_tmp_context.httpEquiv_getter = function httpEquiv(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.httpEquiv_getter);
HTMLMetaElement.prototype.__defineGetter__("httpEquiv",dsf_tmp_context.httpEquiv_getter);//393

catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__defineGetter__("content",Object.getOwnPropertyDescriptor(HTMLMetaElement.prototype,"content").get);
dsf_tmp_context.content_getter = function content(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.content_getter);
HTMLMetaElement.prototype.__defineGetter__("content",dsf_tmp_context.content_getter);//393

catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__defineGetter__("media",Object.getOwnPropertyDescriptor(HTMLMetaElement.prototype,"media").get);
dsf_tmp_context.media_getter = function media(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.media_getter);
HTMLMetaElement.prototype.__defineGetter__("media",dsf_tmp_context.media_getter);//393

catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj.__defineGetter__("scheme",Object.getOwnPropertyDescriptor(HTMLMetaElement.prototype,"scheme").get);
dsf_tmp_context.scheme_getter = function scheme(){throw get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scheme_getter);
HTMLMetaElement.prototype.__defineGetter__("scheme",dsf_tmp_context.scheme_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
//======	invocation error func code end	======
catvm.memory.htmlelements["meta"] = function () {
    debugger;
    var meta = catvm.memory.variable.HTMLMetaElement.htmlMetaElement_obj;
    return meta;
}



HTMLMetaElement = catvm.proxy(HTMLMetaElement);

if(catvm.memory.config.framework_debugger){debugger;}


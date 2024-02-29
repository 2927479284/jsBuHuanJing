var dsf_tmp_context = catvm.memory.variable.HTMLDocument = {};
var HTMLDocument = function HTMLDocument() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLDocument);//14


//======	symbol code start	======
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLDocument",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLDocument.__proto__ = Document;
HTMLDocument.prototype.__proto__ = Document.prototype

var document = catvm.memory.variable.Document.document_obj;
document.__proto__ = HTMLDocument.prototype;


dsf_tmp_context.location_getter = function location() {debugger;}; catvm.safefunction(dsf_tmp_context.location_getter);//295
Object.defineProperty(dsf_tmp_context.location_getter, "name", {
    value: "get location",
    configurable: true
});//301
dsf_tmp_context.location_setter = function location() {debugger;}; catvm.safefunction(dsf_tmp_context.location_setter);//306
Object.defineProperty(dsf_tmp_context.location_setter, "name", {
    value: "set location",
    configurable: true
});//311

Object.defineProperty(document, "location", {
	get: dsf_tmp_context.location_getter,
	set: dsf_tmp_context.location_setter,
	enumerable:true,
});//332

document = catvm.proxy(document);
HTMLDocument = catvm.proxy(HTMLDocument);




if(catvm.memory.config.framework_debugger){debugger;}

var dsf_tmp_context = catvm.memory.variable.MimeType = {};
var MimeType = function MimeType() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(MimeType);//14


//======	symbol code start	======
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
		value: "MimeType",
	    configurable: true
	}
});//85
//======	symbol code end	======


//======	access descriptor code start	======

dsf_tmp_context.type_getter = function type() {debugger;}; catvm.safefunction(dsf_tmp_context.type_getter);//295
Object.defineProperty(dsf_tmp_context.type_getter, "name", {
    value: "get type",
    configurable: true
});//301

Object.defineProperty(MimeType.prototype, "type", {
	get: dsf_tmp_context.type_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.suffixes_getter = function suffixes() {debugger;}; catvm.safefunction(dsf_tmp_context.suffixes_getter);//295
Object.defineProperty(dsf_tmp_context.suffixes_getter, "name", {
    value: "get suffixes",
    configurable: true
});//301

Object.defineProperty(MimeType.prototype, "suffixes", {
	get: dsf_tmp_context.suffixes_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.description_getter = function description() {debugger;}; catvm.safefunction(dsf_tmp_context.description_getter);//295
Object.defineProperty(dsf_tmp_context.description_getter, "name", {
    value: "get description",
    configurable: true
});//301

Object.defineProperty(MimeType.prototype, "description", {
	get: dsf_tmp_context.description_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.enabledPlugin_getter = function enabledPlugin() {debugger;}; catvm.safefunction(dsf_tmp_context.enabledPlugin_getter);//295
Object.defineProperty(dsf_tmp_context.enabledPlugin_getter, "name", {
    value: "get enabledPlugin",
    configurable: true
});//301

Object.defineProperty(MimeType.prototype, "enabledPlugin", {
	get: dsf_tmp_context.enabledPlugin_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======



//======	invocation error prop code start	======
dsf_tmp_context.type_getter = function type(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.type_getter);
MimeType.prototype.__defineGetter__("type",dsf_tmp_context.type_getter);//394

dsf_tmp_context.suffixes_getter = function suffixes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.suffixes_getter);
MimeType.prototype.__defineGetter__("suffixes",dsf_tmp_context.suffixes_getter);//394

dsf_tmp_context.description_getter = function description(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.description_getter);
MimeType.prototype.__defineGetter__("description",dsf_tmp_context.description_getter);//394

dsf_tmp_context.enabledPlugin_getter = function enabledPlugin(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.enabledPlugin_getter);
MimeType.prototype.__defineGetter__("enabledPlugin",dsf_tmp_context.enabledPlugin_getter);//394

//======	invocation error prop code end	======


// todo：当需要创建多个实例时，可以用这种写法，以前的那种写法只能有一个实例，如navigator
dsf_tmp_context.data = { description: 'Portable Document Format',suffixes:"pdf",type:"application/pdf"};

catvm.memory.variable.MimeType.new = function (data,initPlugin) {
    var mimeType = {};
    if (data != undefined) {
        mimeType.description = data.description;
		mimeType.enabledPlugin = initPlugin; // plugin实例
        mimeType.suffixes = data.suffixes;
        mimeType.type = data.type;
	}
    mimeType.__proto__ = MimeType.prototype;
    return catvm.proxy(mimeType);
}


MimeType = catvm.proxy(MimeType);

if(catvm.memory.config.framework_debugger){debugger;}
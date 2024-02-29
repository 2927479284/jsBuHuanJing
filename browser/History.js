var dsf_tmp_context = catvm.memory.variable.History = {};
var History = function History() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(History);//14


//======	symbol code start	======
Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
		value: "History",
	    configurable: true
	}
});//85
//======	symbol code end	======

var history = {};
history.__proto__ = History.prototype;

//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
History.prototype["back"] = function back(){debugger;}; catvm.safefunction(History.prototype["back"]);//194
History.prototype["forward"] = function forward(){debugger;}; catvm.safefunction(History.prototype["forward"]);//194
History.prototype["go"] = function go(){debugger;}; catvm.safefunction(History.prototype["go"]);//194
History.prototype["pushState"] = function pushState(){debugger;}; catvm.safefunction(History.prototype["pushState"]);//194
History.prototype["replaceState"] = function replaceState(){debugger;}; catvm.safefunction(History.prototype["replaceState"]);//194
//======	data descriptor func code end	======

//======	access descriptor code start	======

dsf_tmp_context.length_getter = function length() {
    return 2;
}; catvm.safefunction(dsf_tmp_context.length_getter);//273
Object.defineProperty(dsf_tmp_context.length_getter, "name", {
    value: "get length",
    configurable: true
});//279

Object.defineProperty(History.prototype, "length", {
	get: dsf_tmp_context.length_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.scrollRestoration_getter = function scrollRestoration() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollRestoration_getter);//273
Object.defineProperty(dsf_tmp_context.scrollRestoration_getter, "name", {
    value: "get scrollRestoration",
    configurable: true
});//279
dsf_tmp_context.scrollRestoration_setter = function scrollRestoration() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollRestoration_setter);//284
Object.defineProperty(dsf_tmp_context.scrollRestoration_setter, "name", {
value: "set scrollRestoration",
configurable: true
});//289

Object.defineProperty(History.prototype, "scrollRestoration", {
	get: dsf_tmp_context.scrollRestoration_getter,
	set: dsf_tmp_context.scrollRestoration_setter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.state_getter = function state() {debugger;}; catvm.safefunction(dsf_tmp_context.state_getter);//273
Object.defineProperty(dsf_tmp_context.state_getter, "name", {
    value: "get state",
    configurable: true
});//279

Object.defineProperty(History.prototype, "state", {
	get: dsf_tmp_context.state_getter,
	enumerable:true,
	configurable:true,
});//310

//======	access descriptor code end	======


//======	invocation error prop code start	======
history.__defineGetter__("length",Object.getOwnPropertyDescriptor(History.prototype,"length").get);
dsf_tmp_context.length_getter = function length(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.length_getter);
History.prototype.__defineGetter__("length",dsf_tmp_context.length_getter);//372

history.__defineGetter__("scrollRestoration",Object.getOwnPropertyDescriptor(History.prototype,"scrollRestoration").get);
dsf_tmp_context.scrollRestoration_getter = function scrollRestoration(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollRestoration_getter);
History.prototype.__defineGetter__("scrollRestoration",dsf_tmp_context.scrollRestoration_getter);//372

history.__defineGetter__("state",Object.getOwnPropertyDescriptor(History.prototype,"state").get);
dsf_tmp_context.state_getter = function state(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.state_getter);
History.prototype.__defineGetter__("state",dsf_tmp_context.state_getter);//372

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.History.__function_back = Object.getOwnPropertyDescriptor(History.prototype,"back").value; catvm.safefunction(catvm.memory.variable.History.__function_back);
history.__defineGetter__("back",function back(){return catvm.memory.variable.History.__function_back;});
History.prototype["back"] = function back(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(History.prototype["back"]);//408

catvm.memory.variable.History.__function_forward = Object.getOwnPropertyDescriptor(History.prototype,"forward").value; catvm.safefunction(catvm.memory.variable.History.__function_forward);
history.__defineGetter__("forward",function forward(){return catvm.memory.variable.History.__function_forward;});
History.prototype["forward"] = function forward(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(History.prototype["forward"]);//408

catvm.memory.variable.History.__function_go = Object.getOwnPropertyDescriptor(History.prototype,"go").value; catvm.safefunction(catvm.memory.variable.History.__function_go);
history.__defineGetter__("go",function go(){return catvm.memory.variable.History.__function_go;});
History.prototype["go"] = function go(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(History.prototype["go"]);//408

catvm.memory.variable.History.__function_pushState = Object.getOwnPropertyDescriptor(History.prototype,"pushState").value; catvm.safefunction(catvm.memory.variable.History.__function_pushState);
history.__defineGetter__("pushState",function pushState(){return catvm.memory.variable.History.__function_pushState;});
History.prototype["pushState"] = function pushState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(History.prototype["pushState"]);//408

catvm.memory.variable.History.__function_replaceState = Object.getOwnPropertyDescriptor(History.prototype,"replaceState").value; catvm.safefunction(catvm.memory.variable.History.__function_replaceState);
history.__defineGetter__("replaceState",function replaceState(){return catvm.memory.variable.History.__function_replaceState;});
History.prototype["replaceState"] = function replaceState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(History.prototype["replaceState"]);//408

//======	invocation error func code end	======


History = catvm.proxy(History);
history = catvm.proxy(history);

if(catvm.memory.config.framework_debugger){debugger;}
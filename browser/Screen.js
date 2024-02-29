var dsf_tmp_context = catvm.memory.variable.Screen = {};
var Screen = function Screen() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Screen);//14


//======	symbol code start	======
Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
		value: "Screen",
	    configurable: true
	}
});//85
//======	symbol code end	======
var screen = {};
screen.__proto__ = Screen.prototype;
Screen.__proto__ == EventTarget;
Screen.prototype.__proto__ == EventTarget.prototype

//======	access descriptor code start	======

dsf_tmp_context.availWidth_getter = function availWidth() {
    return 1920;
}; catvm.safefunction(dsf_tmp_context.availWidth_getter);//273
Object.defineProperty(dsf_tmp_context.availWidth_getter, "name", {
    value: "get availWidth",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "availWidth", {
	get: dsf_tmp_context.availWidth_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.availHeight_getter = function availHeight() {
    return 1040;
}; catvm.safefunction(dsf_tmp_context.availHeight_getter);//273
Object.defineProperty(dsf_tmp_context.availHeight_getter, "name", {
    value: "get availHeight",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "availHeight", {
	get: dsf_tmp_context.availHeight_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.width_getter = function width() {
    return 1920;
}; catvm.safefunction(dsf_tmp_context.width_getter);//273
Object.defineProperty(dsf_tmp_context.width_getter, "name", {
    value: "get width",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "width", {
	get: dsf_tmp_context.width_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.height_getter = function height() {
    return 1080;
}; catvm.safefunction(dsf_tmp_context.height_getter);//273
Object.defineProperty(dsf_tmp_context.height_getter, "name", {
    value: "get height",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "height", {
	get: dsf_tmp_context.height_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.colorDepth_getter = function colorDepth() {
    return 24;
}; catvm.safefunction(dsf_tmp_context.colorDepth_getter);//273
Object.defineProperty(dsf_tmp_context.colorDepth_getter, "name", {
    value: "get colorDepth",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "colorDepth", {
	get: dsf_tmp_context.colorDepth_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.pixelDepth_getter = function pixelDepth() {
    return 24;
}; catvm.safefunction(dsf_tmp_context.pixelDepth_getter);//273
Object.defineProperty(dsf_tmp_context.pixelDepth_getter, "name", {
    value: "get pixelDepth",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "pixelDepth", {
	get: dsf_tmp_context.pixelDepth_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.availLeft_getter = function availLeft() {
    return -1920;
}; catvm.safefunction(dsf_tmp_context.availLeft_getter);//273
Object.defineProperty(dsf_tmp_context.availLeft_getter, "name", {
    value: "get availLeft",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "availLeft", {
	get: dsf_tmp_context.availLeft_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.availTop_getter = function availTop() {
    return 0;
}; catvm.safefunction(dsf_tmp_context.availTop_getter);//273
Object.defineProperty(dsf_tmp_context.availTop_getter, "name", {
    value: "get availTop",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "availTop", {
	get: dsf_tmp_context.availTop_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.orientation_getter = function orientation() {
    new (class ScreenOrientation{});
}; catvm.safefunction(dsf_tmp_context.orientation_getter);//273
Object.defineProperty(dsf_tmp_context.orientation_getter, "name", {
    value: "get orientation",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "orientation", {
	get: dsf_tmp_context.orientation_getter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.onchange_getter = function onchange() {
    return null;
}; catvm.safefunction(dsf_tmp_context.onchange_getter);//273
Object.defineProperty(dsf_tmp_context.onchange_getter, "name", {
    value: "get onchange",
    configurable: true
});//279
dsf_tmp_context.onchange_setter = function onchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onchange_setter);//284
Object.defineProperty(dsf_tmp_context.onchange_setter, "name", {
value: "set onchange",
configurable: true
});//289

Object.defineProperty(Screen.prototype, "onchange", {
	get: dsf_tmp_context.onchange_getter,
	set: dsf_tmp_context.onchange_setter,
	enumerable:true,
	configurable:true,
});//310

dsf_tmp_context.isExtended_getter = function isExtended() {
    return true;
}; catvm.safefunction(dsf_tmp_context.isExtended_getter);//273
Object.defineProperty(dsf_tmp_context.isExtended_getter, "name", {
    value: "get isExtended",
    configurable: true
});//279

Object.defineProperty(Screen.prototype, "isExtended", {
	get: dsf_tmp_context.isExtended_getter,
	enumerable:true,
	configurable:true,
});//310

//======	access descriptor code end	======


//======	invocation error prop code start	======
screen.__defineGetter__("availWidth",Object.getOwnPropertyDescriptor(Screen.prototype,"availWidth").get);
dsf_tmp_context.availWidth_getter = function availWidth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.availWidth_getter);
Screen.prototype.__defineGetter__("availWidth",dsf_tmp_context.availWidth_getter);//372

screen.__defineGetter__("availHeight",Object.getOwnPropertyDescriptor(Screen.prototype,"availHeight").get);
dsf_tmp_context.availHeight_getter = function availHeight(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.availHeight_getter);
Screen.prototype.__defineGetter__("availHeight",dsf_tmp_context.availHeight_getter);//372

screen.__defineGetter__("width",Object.getOwnPropertyDescriptor(Screen.prototype,"width").get);
dsf_tmp_context.width_getter = function width(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.width_getter);
Screen.prototype.__defineGetter__("width",dsf_tmp_context.width_getter);//372

screen.__defineGetter__("height",Object.getOwnPropertyDescriptor(Screen.prototype,"height").get);
dsf_tmp_context.height_getter = function height(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.height_getter);
Screen.prototype.__defineGetter__("height",dsf_tmp_context.height_getter);//372

screen.__defineGetter__("colorDepth",Object.getOwnPropertyDescriptor(Screen.prototype,"colorDepth").get);
dsf_tmp_context.colorDepth_getter = function colorDepth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.colorDepth_getter);
Screen.prototype.__defineGetter__("colorDepth",dsf_tmp_context.colorDepth_getter);//372

screen.__defineGetter__("pixelDepth",Object.getOwnPropertyDescriptor(Screen.prototype,"pixelDepth").get);
dsf_tmp_context.pixelDepth_getter = function pixelDepth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.pixelDepth_getter);
Screen.prototype.__defineGetter__("pixelDepth",dsf_tmp_context.pixelDepth_getter);//372

screen.__defineGetter__("availLeft",Object.getOwnPropertyDescriptor(Screen.prototype,"availLeft").get);
dsf_tmp_context.availLeft_getter = function availLeft(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.availLeft_getter);
Screen.prototype.__defineGetter__("availLeft",dsf_tmp_context.availLeft_getter);//372

screen.__defineGetter__("availTop",Object.getOwnPropertyDescriptor(Screen.prototype,"availTop").get);
dsf_tmp_context.availTop_getter = function availTop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.availTop_getter);
Screen.prototype.__defineGetter__("availTop",dsf_tmp_context.availTop_getter);//372

screen.__defineGetter__("orientation",Object.getOwnPropertyDescriptor(Screen.prototype,"orientation").get);
dsf_tmp_context.orientation_getter = function orientation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.orientation_getter);
Screen.prototype.__defineGetter__("orientation",dsf_tmp_context.orientation_getter);//372

screen.__defineGetter__("onchange",Object.getOwnPropertyDescriptor(Screen.prototype,"onchange").get);
dsf_tmp_context.onchange_getter = function onchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onchange_getter);
Screen.prototype.__defineGetter__("onchange",dsf_tmp_context.onchange_getter);//372

screen.__defineGetter__("isExtended",Object.getOwnPropertyDescriptor(Screen.prototype,"isExtended").get);
dsf_tmp_context.isExtended_getter = function isExtended(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.isExtended_getter);
Screen.prototype.__defineGetter__("isExtended",dsf_tmp_context.isExtended_getter);//372

//======	invocation error prop code end	======
//======	invocation error func code start	======
//======	invocation error func code end	======

screen = catvm.proxy(screen);
Screen = catvm.proxy(Screen);




if(catvm.memory.config.framework_debugger){debugger;}

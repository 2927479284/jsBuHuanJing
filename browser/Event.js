var dsf_tmp_context = catvm.memory.variable.Event = {};
var Event = function Event() { // 构造函数
    if (arguments.length <1){
        throw new  TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
    };
}; catvm.safefunction(Event);//14


//======	symbol code start	======
Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]: {
		value: "Event",
	    configurable: true
	}
});//85
//======	symbol code end	======
catvm.memory.variable.Event.event_obj = {};
catvm.memory.variable.Event.event_obj.__proto__ = Event.prototype;

//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
Event.prototype["composedPath"] = function composedPath(){debugger;}; catvm.safefunction(Event.prototype["composedPath"]);//215
Event.prototype["initEvent"] = function initEvent(){debugger;}; catvm.safefunction(Event.prototype["initEvent"]);//215
Event.prototype["preventDefault"] = function preventDefault(){debugger;}; catvm.safefunction(Event.prototype["preventDefault"]);//215
Event.prototype["stopImmediatePropagation"] = function stopImmediatePropagation(){debugger;}; catvm.safefunction(Event.prototype["stopImmediatePropagation"]);//215
Event.prototype["stopPropagation"] = function stopPropagation(){debugger;}; catvm.safefunction(Event.prototype["stopPropagation"]);//215
//======	data descriptor func code end	======


//======	diy data descriptor property code start	======
Object.defineProperty(Event.prototype, "NONE", {
    enumerable:true,
	value: 0
});//277
Object.defineProperty(Event.prototype, "CAPTURING_PHASE", {
    enumerable:true,
	value: 1
});//277
Object.defineProperty(Event.prototype, "AT_TARGET", {
    enumerable:true,
	value: 2
});//277
Object.defineProperty(Event.prototype, "BUBBLING_PHASE", {
    enumerable:true,
	value: 3
});//277
//======	diy data descriptor property code end	======


//======	diy data descriptor func code start	======
//======	diy data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.type_getter = function type() {debugger;}; catvm.safefunction(dsf_tmp_context.type_getter);//294
Object.defineProperty(dsf_tmp_context.type_getter, "name", {
    value: "get type",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "type", {
	get: dsf_tmp_context.type_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.target_getter = function target() {debugger;}; catvm.safefunction(dsf_tmp_context.target_getter);//294
Object.defineProperty(dsf_tmp_context.target_getter, "name", {
    value: "get target",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "target", {
	get: dsf_tmp_context.target_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.currentTarget_getter = function currentTarget() {debugger;}; catvm.safefunction(dsf_tmp_context.currentTarget_getter);//294
Object.defineProperty(dsf_tmp_context.currentTarget_getter, "name", {
    value: "get currentTarget",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "currentTarget", {
	get: dsf_tmp_context.currentTarget_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.eventPhase_getter = function eventPhase() {debugger;}; catvm.safefunction(dsf_tmp_context.eventPhase_getter);//294
Object.defineProperty(dsf_tmp_context.eventPhase_getter, "name", {
    value: "get eventPhase",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "eventPhase", {
	get: dsf_tmp_context.eventPhase_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.bubbles_getter = function bubbles() {debugger;}; catvm.safefunction(dsf_tmp_context.bubbles_getter);//294
Object.defineProperty(dsf_tmp_context.bubbles_getter, "name", {
    value: "get bubbles",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "bubbles", {
	get: dsf_tmp_context.bubbles_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.cancelable_getter = function cancelable() {debugger;}; catvm.safefunction(dsf_tmp_context.cancelable_getter);//294
Object.defineProperty(dsf_tmp_context.cancelable_getter, "name", {
    value: "get cancelable",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "cancelable", {
	get: dsf_tmp_context.cancelable_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.defaultPrevented_getter = function defaultPrevented() {debugger;}; catvm.safefunction(dsf_tmp_context.defaultPrevented_getter);//294
Object.defineProperty(dsf_tmp_context.defaultPrevented_getter, "name", {
    value: "get defaultPrevented",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "defaultPrevented", {
	get: dsf_tmp_context.defaultPrevented_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.composed_getter = function composed() {debugger;}; catvm.safefunction(dsf_tmp_context.composed_getter);//294
Object.defineProperty(dsf_tmp_context.composed_getter, "name", {
    value: "get composed",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "composed", {
	get: dsf_tmp_context.composed_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.timeStamp_getter = function timeStamp() {debugger;}; catvm.safefunction(dsf_tmp_context.timeStamp_getter);//294
Object.defineProperty(dsf_tmp_context.timeStamp_getter, "name", {
    value: "get timeStamp",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "timeStamp", {
	get: dsf_tmp_context.timeStamp_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.srcElement_getter = function srcElement() {debugger;}; catvm.safefunction(dsf_tmp_context.srcElement_getter);//294
Object.defineProperty(dsf_tmp_context.srcElement_getter, "name", {
    value: "get srcElement",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "srcElement", {
	get: dsf_tmp_context.srcElement_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.returnValue_getter = function returnValue() {debugger;}; catvm.safefunction(dsf_tmp_context.returnValue_getter);//294
Object.defineProperty(dsf_tmp_context.returnValue_getter, "name", {
    value: "get returnValue",
    configurable: true
});//300
dsf_tmp_context.returnValue_setter = function returnValue() {debugger;}; catvm.safefunction(dsf_tmp_context.returnValue_setter);//305
Object.defineProperty(dsf_tmp_context.returnValue_setter, "name", {
    value: "set returnValue",
    configurable: true
});//310

Object.defineProperty(Event.prototype, "returnValue", {
	get: dsf_tmp_context.returnValue_getter,
	set: dsf_tmp_context.returnValue_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.cancelBubble_getter = function cancelBubble() {debugger;}; catvm.safefunction(dsf_tmp_context.cancelBubble_getter);//294
Object.defineProperty(dsf_tmp_context.cancelBubble_getter, "name", {
    value: "get cancelBubble",
    configurable: true
});//300
dsf_tmp_context.cancelBubble_setter = function cancelBubble() {debugger;}; catvm.safefunction(dsf_tmp_context.cancelBubble_setter);//305
Object.defineProperty(dsf_tmp_context.cancelBubble_setter, "name", {
    value: "set cancelBubble",
    configurable: true
});//310

Object.defineProperty(Event.prototype, "cancelBubble", {
	get: dsf_tmp_context.cancelBubble_getter,
	set: dsf_tmp_context.cancelBubble_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.path_getter = function path() {debugger;}; catvm.safefunction(dsf_tmp_context.path_getter);//294
Object.defineProperty(dsf_tmp_context.path_getter, "name", {
    value: "get path",
    configurable: true
});//300

Object.defineProperty(Event.prototype, "path", {
	get: dsf_tmp_context.path_getter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======



//======	invocation error prop code start	======
catvm.memory.variable.Event.event_obj.__defineGetter__("type",Object.getOwnPropertyDescriptor(Event.prototype,"type").get);
dsf_tmp_context.type_getter = function type(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.type_getter);
Event.prototype.__defineGetter__("type",dsf_tmp_context.type_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("target",Object.getOwnPropertyDescriptor(Event.prototype,"target").get);
dsf_tmp_context.target_getter = function target(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.target_getter);
Event.prototype.__defineGetter__("target",dsf_tmp_context.target_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("currentTarget",Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget").get);
dsf_tmp_context.currentTarget_getter = function currentTarget(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.currentTarget_getter);
Event.prototype.__defineGetter__("currentTarget",dsf_tmp_context.currentTarget_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("eventPhase",Object.getOwnPropertyDescriptor(Event.prototype,"eventPhase").get);
dsf_tmp_context.eventPhase_getter = function eventPhase(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.eventPhase_getter);
Event.prototype.__defineGetter__("eventPhase",dsf_tmp_context.eventPhase_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("bubbles",Object.getOwnPropertyDescriptor(Event.prototype,"bubbles").get);
dsf_tmp_context.bubbles_getter = function bubbles(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.bubbles_getter);
Event.prototype.__defineGetter__("bubbles",dsf_tmp_context.bubbles_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("cancelable",Object.getOwnPropertyDescriptor(Event.prototype,"cancelable").get);
dsf_tmp_context.cancelable_getter = function cancelable(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.cancelable_getter);
Event.prototype.__defineGetter__("cancelable",dsf_tmp_context.cancelable_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("defaultPrevented",Object.getOwnPropertyDescriptor(Event.prototype,"defaultPrevented").get);
dsf_tmp_context.defaultPrevented_getter = function defaultPrevented(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.defaultPrevented_getter);
Event.prototype.__defineGetter__("defaultPrevented",dsf_tmp_context.defaultPrevented_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("composed",Object.getOwnPropertyDescriptor(Event.prototype,"composed").get);
dsf_tmp_context.composed_getter = function composed(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.composed_getter);
Event.prototype.__defineGetter__("composed",dsf_tmp_context.composed_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("timeStamp",Object.getOwnPropertyDescriptor(Event.prototype,"timeStamp").get);
dsf_tmp_context.timeStamp_getter = function timeStamp(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.timeStamp_getter);
Event.prototype.__defineGetter__("timeStamp",dsf_tmp_context.timeStamp_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("srcElement",Object.getOwnPropertyDescriptor(Event.prototype,"srcElement").get);
dsf_tmp_context.srcElement_getter = function srcElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.srcElement_getter);
Event.prototype.__defineGetter__("srcElement",dsf_tmp_context.srcElement_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("returnValue",Object.getOwnPropertyDescriptor(Event.prototype,"returnValue").get);
dsf_tmp_context.returnValue_getter = function returnValue(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.returnValue_getter);
Event.prototype.__defineGetter__("returnValue",dsf_tmp_context.returnValue_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("cancelBubble",Object.getOwnPropertyDescriptor(Event.prototype,"cancelBubble").get);
dsf_tmp_context.cancelBubble_getter = function cancelBubble(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.cancelBubble_getter);
Event.prototype.__defineGetter__("cancelBubble",dsf_tmp_context.cancelBubble_getter);//393

catvm.memory.variable.Event.event_obj.__defineGetter__("path",Object.getOwnPropertyDescriptor(Event.prototype,"path").get);
dsf_tmp_context.path_getter = function path(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.path_getter);
Event.prototype.__defineGetter__("path",dsf_tmp_context.path_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.Event.__function_composedPath = Object.getOwnPropertyDescriptor(Event.prototype,"composedPath").value; catvm.safefunction(catvm.memory.variable.Event.__function_composedPath);
catvm.memory.variable.Event.event_obj.__defineGetter__("composedPath",function composedPath(){return catvm.memory.variable.Event.__function_composedPath;});
Event.prototype["composedPath"] = function composedPath(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Event.prototype["composedPath"]);//407

catvm.memory.variable.Event.__function_initEvent = Object.getOwnPropertyDescriptor(Event.prototype,"initEvent").value; catvm.safefunction(catvm.memory.variable.Event.__function_initEvent);
catvm.memory.variable.Event.event_obj.__defineGetter__("initEvent",function initEvent(){return catvm.memory.variable.Event.__function_initEvent;});
Event.prototype["initEvent"] = function initEvent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Event.prototype["initEvent"]);//407

catvm.memory.variable.Event.__function_preventDefault = Object.getOwnPropertyDescriptor(Event.prototype,"preventDefault").value; catvm.safefunction(catvm.memory.variable.Event.__function_preventDefault);
catvm.memory.variable.Event.event_obj.__defineGetter__("preventDefault",function preventDefault(){return catvm.memory.variable.Event.__function_preventDefault;});
Event.prototype["preventDefault"] = function preventDefault(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Event.prototype["preventDefault"]);//407

catvm.memory.variable.Event.__function_stopImmediatePropagation = Object.getOwnPropertyDescriptor(Event.prototype,"stopImmediatePropagation").value; catvm.safefunction(catvm.memory.variable.Event.__function_stopImmediatePropagation);
catvm.memory.variable.Event.event_obj.__defineGetter__("stopImmediatePropagation",function stopImmediatePropagation(){return catvm.memory.variable.Event.__function_stopImmediatePropagation;});
Event.prototype["stopImmediatePropagation"] = function stopImmediatePropagation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Event.prototype["stopImmediatePropagation"]);//407

catvm.memory.variable.Event.__function_stopPropagation = Object.getOwnPropertyDescriptor(Event.prototype,"stopPropagation").value; catvm.safefunction(catvm.memory.variable.Event.__function_stopPropagation);
catvm.memory.variable.Event.event_obj.__defineGetter__("stopPropagation",function stopPropagation(){return catvm.memory.variable.Event.__function_stopPropagation;});
Event.prototype["stopPropagation"] = function stopPropagation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Event.prototype["stopPropagation"]);//407

//======	invocation error func code end	======
Event = catvm.proxy(Event);

if(catvm.memory.config.framework_debugger){debugger;}
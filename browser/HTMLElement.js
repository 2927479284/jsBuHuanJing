var dsf_tmp_context = catvm.memory.variable.HTMLElement = {};
var HTMLElement = function HTMLElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLElement.__proto__ = Element;
HTMLElement.prototype.__proto__ = Element.prototype;

catvm.memory.variable.HTMLElement.htmlElement_obj = {};
catvm.memory.variable.HTMLElement.htmlElement_obj.__proto__ = HTMLElement.prototype;
//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
HTMLElement.prototype["attachInternals"] = function attachInternals(){debugger;}; catvm.safefunction(HTMLElement.prototype["attachInternals"]);//205
HTMLElement.prototype["blur"] = function blur(){debugger;}; catvm.safefunction(HTMLElement.prototype["blur"]);//205
HTMLElement.prototype["click"] = function click(){debugger;}; catvm.safefunction(HTMLElement.prototype["click"]);//205
HTMLElement.prototype["focus"] = function focus(){debugger;}; catvm.safefunction(HTMLElement.prototype["focus"]);//205
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.title_getter = function title() {debugger;}; catvm.safefunction(dsf_tmp_context.title_getter);//285
Object.defineProperty(dsf_tmp_context.title_getter, "name", {
    value: "get title",
    configurable: true
});//291
dsf_tmp_context.title_setter = function title() {debugger;}; catvm.safefunction(dsf_tmp_context.title_setter);//296
Object.defineProperty(dsf_tmp_context.title_setter, "name", {
value: "set title",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "title", {
	get: dsf_tmp_context.title_getter,
	set: dsf_tmp_context.title_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.lang_getter = function lang() {debugger;}; catvm.safefunction(dsf_tmp_context.lang_getter);//285
Object.defineProperty(dsf_tmp_context.lang_getter, "name", {
    value: "get lang",
    configurable: true
});//291
dsf_tmp_context.lang_setter = function lang() {debugger;}; catvm.safefunction(dsf_tmp_context.lang_setter);//296
Object.defineProperty(dsf_tmp_context.lang_setter, "name", {
value: "set lang",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "lang", {
	get: dsf_tmp_context.lang_getter,
	set: dsf_tmp_context.lang_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.translate_getter = function translate() {debugger;}; catvm.safefunction(dsf_tmp_context.translate_getter);//285
Object.defineProperty(dsf_tmp_context.translate_getter, "name", {
    value: "get translate",
    configurable: true
});//291
dsf_tmp_context.translate_setter = function translate() {debugger;}; catvm.safefunction(dsf_tmp_context.translate_setter);//296
Object.defineProperty(dsf_tmp_context.translate_setter, "name", {
value: "set translate",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "translate", {
	get: dsf_tmp_context.translate_getter,
	set: dsf_tmp_context.translate_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.dir_getter = function dir() {debugger;}; catvm.safefunction(dsf_tmp_context.dir_getter);//285
Object.defineProperty(dsf_tmp_context.dir_getter, "name", {
    value: "get dir",
    configurable: true
});//291
dsf_tmp_context.dir_setter = function dir() {debugger;}; catvm.safefunction(dsf_tmp_context.dir_setter);//296
Object.defineProperty(dsf_tmp_context.dir_setter, "name", {
value: "set dir",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "dir", {
	get: dsf_tmp_context.dir_getter,
	set: dsf_tmp_context.dir_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.hidden_getter = function hidden() {debugger;}; catvm.safefunction(dsf_tmp_context.hidden_getter);//285
Object.defineProperty(dsf_tmp_context.hidden_getter, "name", {
    value: "get hidden",
    configurable: true
});//291
dsf_tmp_context.hidden_setter = function hidden() {debugger;}; catvm.safefunction(dsf_tmp_context.hidden_setter);//296
Object.defineProperty(dsf_tmp_context.hidden_setter, "name", {
value: "set hidden",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "hidden", {
	get: dsf_tmp_context.hidden_getter,
	set: dsf_tmp_context.hidden_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.accessKey_getter = function accessKey() {debugger;}; catvm.safefunction(dsf_tmp_context.accessKey_getter);//285
Object.defineProperty(dsf_tmp_context.accessKey_getter, "name", {
    value: "get accessKey",
    configurable: true
});//291
dsf_tmp_context.accessKey_setter = function accessKey() {debugger;}; catvm.safefunction(dsf_tmp_context.accessKey_setter);//296
Object.defineProperty(dsf_tmp_context.accessKey_setter, "name", {
value: "set accessKey",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "accessKey", {
	get: dsf_tmp_context.accessKey_getter,
	set: dsf_tmp_context.accessKey_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.draggable_getter = function draggable() {debugger;}; catvm.safefunction(dsf_tmp_context.draggable_getter);//285
Object.defineProperty(dsf_tmp_context.draggable_getter, "name", {
    value: "get draggable",
    configurable: true
});//291
dsf_tmp_context.draggable_setter = function draggable() {debugger;}; catvm.safefunction(dsf_tmp_context.draggable_setter);//296
Object.defineProperty(dsf_tmp_context.draggable_setter, "name", {
value: "set draggable",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "draggable", {
	get: dsf_tmp_context.draggable_getter,
	set: dsf_tmp_context.draggable_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.spellcheck_getter = function spellcheck() {debugger;}; catvm.safefunction(dsf_tmp_context.spellcheck_getter);//285
Object.defineProperty(dsf_tmp_context.spellcheck_getter, "name", {
    value: "get spellcheck",
    configurable: true
});//291
dsf_tmp_context.spellcheck_setter = function spellcheck() {debugger;}; catvm.safefunction(dsf_tmp_context.spellcheck_setter);//296
Object.defineProperty(dsf_tmp_context.spellcheck_setter, "name", {
value: "set spellcheck",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "spellcheck", {
	get: dsf_tmp_context.spellcheck_getter,
	set: dsf_tmp_context.spellcheck_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.autocapitalize_getter = function autocapitalize() {debugger;}; catvm.safefunction(dsf_tmp_context.autocapitalize_getter);//285
Object.defineProperty(dsf_tmp_context.autocapitalize_getter, "name", {
    value: "get autocapitalize",
    configurable: true
});//291
dsf_tmp_context.autocapitalize_setter = function autocapitalize() {debugger;}; catvm.safefunction(dsf_tmp_context.autocapitalize_setter);//296
Object.defineProperty(dsf_tmp_context.autocapitalize_setter, "name", {
value: "set autocapitalize",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "autocapitalize", {
	get: dsf_tmp_context.autocapitalize_getter,
	set: dsf_tmp_context.autocapitalize_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.contentEditable_getter = function contentEditable() {debugger;}; catvm.safefunction(dsf_tmp_context.contentEditable_getter);//285
Object.defineProperty(dsf_tmp_context.contentEditable_getter, "name", {
    value: "get contentEditable",
    configurable: true
});//291
dsf_tmp_context.contentEditable_setter = function contentEditable() {debugger;}; catvm.safefunction(dsf_tmp_context.contentEditable_setter);//296
Object.defineProperty(dsf_tmp_context.contentEditable_setter, "name", {
value: "set contentEditable",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "contentEditable", {
	get: dsf_tmp_context.contentEditable_getter,
	set: dsf_tmp_context.contentEditable_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.enterKeyHint_getter = function enterKeyHint() {debugger;}; catvm.safefunction(dsf_tmp_context.enterKeyHint_getter);//285
Object.defineProperty(dsf_tmp_context.enterKeyHint_getter, "name", {
    value: "get enterKeyHint",
    configurable: true
});//291
dsf_tmp_context.enterKeyHint_setter = function enterKeyHint() {debugger;}; catvm.safefunction(dsf_tmp_context.enterKeyHint_setter);//296
Object.defineProperty(dsf_tmp_context.enterKeyHint_setter, "name", {
value: "set enterKeyHint",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "enterKeyHint", {
	get: dsf_tmp_context.enterKeyHint_getter,
	set: dsf_tmp_context.enterKeyHint_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.isContentEditable_getter = function isContentEditable() {debugger;}; catvm.safefunction(dsf_tmp_context.isContentEditable_getter);//285
Object.defineProperty(dsf_tmp_context.isContentEditable_getter, "name", {
    value: "get isContentEditable",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "isContentEditable", {
	get: dsf_tmp_context.isContentEditable_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.inputMode_getter = function inputMode() {debugger;}; catvm.safefunction(dsf_tmp_context.inputMode_getter);//285
Object.defineProperty(dsf_tmp_context.inputMode_getter, "name", {
    value: "get inputMode",
    configurable: true
});//291
dsf_tmp_context.inputMode_setter = function inputMode() {debugger;}; catvm.safefunction(dsf_tmp_context.inputMode_setter);//296
Object.defineProperty(dsf_tmp_context.inputMode_setter, "name", {
value: "set inputMode",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "inputMode", {
	get: dsf_tmp_context.inputMode_getter,
	set: dsf_tmp_context.inputMode_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.virtualKeyboardPolicy_getter = function virtualKeyboardPolicy() {debugger;}; catvm.safefunction(dsf_tmp_context.virtualKeyboardPolicy_getter);//285
Object.defineProperty(dsf_tmp_context.virtualKeyboardPolicy_getter, "name", {
    value: "get virtualKeyboardPolicy",
    configurable: true
});//291
dsf_tmp_context.virtualKeyboardPolicy_setter = function virtualKeyboardPolicy() {debugger;}; catvm.safefunction(dsf_tmp_context.virtualKeyboardPolicy_setter);//296
Object.defineProperty(dsf_tmp_context.virtualKeyboardPolicy_setter, "name", {
value: "set virtualKeyboardPolicy",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
	get: dsf_tmp_context.virtualKeyboardPolicy_getter,
	set: dsf_tmp_context.virtualKeyboardPolicy_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.offsetParent_getter = function offsetParent() {debugger;}; catvm.safefunction(dsf_tmp_context.offsetParent_getter);//285
Object.defineProperty(dsf_tmp_context.offsetParent_getter, "name", {
    value: "get offsetParent",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "offsetParent", {
	get: dsf_tmp_context.offsetParent_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.offsetTop_getter = function offsetTop() {debugger;}; catvm.safefunction(dsf_tmp_context.offsetTop_getter);//285
Object.defineProperty(dsf_tmp_context.offsetTop_getter, "name", {
    value: "get offsetTop",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "offsetTop", {
	get: dsf_tmp_context.offsetTop_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.offsetLeft_getter = function offsetLeft() {debugger;}; catvm.safefunction(dsf_tmp_context.offsetLeft_getter);//285
Object.defineProperty(dsf_tmp_context.offsetLeft_getter, "name", {
    value: "get offsetLeft",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
	get: dsf_tmp_context.offsetLeft_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.offsetWidth_getter = function offsetWidth() {debugger;}; catvm.safefunction(dsf_tmp_context.offsetWidth_getter);//285
Object.defineProperty(dsf_tmp_context.offsetWidth_getter, "name", {
    value: "get offsetWidth",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
	get: dsf_tmp_context.offsetWidth_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.offsetHeight_getter = function offsetHeight() {debugger;}; catvm.safefunction(dsf_tmp_context.offsetHeight_getter);//285
Object.defineProperty(dsf_tmp_context.offsetHeight_getter, "name", {
    value: "get offsetHeight",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
	get: dsf_tmp_context.offsetHeight_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.innerText_getter = function innerText() {debugger;}; catvm.safefunction(dsf_tmp_context.innerText_getter);//285
Object.defineProperty(dsf_tmp_context.innerText_getter, "name", {
    value: "get innerText",
    configurable: true
});//291
dsf_tmp_context.innerText_setter = function innerText() {debugger;}; catvm.safefunction(dsf_tmp_context.innerText_setter);//296
Object.defineProperty(dsf_tmp_context.innerText_setter, "name", {
value: "set innerText",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "innerText", {
	get: dsf_tmp_context.innerText_getter,
	set: dsf_tmp_context.innerText_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.outerText_getter = function outerText() {debugger;}; catvm.safefunction(dsf_tmp_context.outerText_getter);//285
Object.defineProperty(dsf_tmp_context.outerText_getter, "name", {
    value: "get outerText",
    configurable: true
});//291
dsf_tmp_context.outerText_setter = function outerText() {debugger;}; catvm.safefunction(dsf_tmp_context.outerText_setter);//296
Object.defineProperty(dsf_tmp_context.outerText_setter, "name", {
value: "set outerText",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "outerText", {
	get: dsf_tmp_context.outerText_getter,
	set: dsf_tmp_context.outerText_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforexrselect_getter = function onbeforexrselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforexrselect_getter, "name", {
    value: "get onbeforexrselect",
    configurable: true
});//291
dsf_tmp_context.onbeforexrselect_setter = function onbeforexrselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforexrselect_setter, "name", {
value: "set onbeforexrselect",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
	get: dsf_tmp_context.onbeforexrselect_getter,
	set: dsf_tmp_context.onbeforexrselect_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onabort_getter = function onabort() {debugger;}; catvm.safefunction(dsf_tmp_context.onabort_getter);//285
Object.defineProperty(dsf_tmp_context.onabort_getter, "name", {
    value: "get onabort",
    configurable: true
});//291
dsf_tmp_context.onabort_setter = function onabort() {debugger;}; catvm.safefunction(dsf_tmp_context.onabort_setter);//296
Object.defineProperty(dsf_tmp_context.onabort_setter, "name", {
value: "set onabort",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onabort", {
	get: dsf_tmp_context.onabort_getter,
	set: dsf_tmp_context.onabort_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforeinput_getter = function onbeforeinput() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforeinput_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforeinput_getter, "name", {
    value: "get onbeforeinput",
    configurable: true
});//291
dsf_tmp_context.onbeforeinput_setter = function onbeforeinput() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforeinput_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforeinput_setter, "name", {
value: "set onbeforeinput",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onbeforeinput", {
	get: dsf_tmp_context.onbeforeinput_getter,
	set: dsf_tmp_context.onbeforeinput_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onblur_getter = function onblur() {debugger;}; catvm.safefunction(dsf_tmp_context.onblur_getter);//285
Object.defineProperty(dsf_tmp_context.onblur_getter, "name", {
    value: "get onblur",
    configurable: true
});//291
dsf_tmp_context.onblur_setter = function onblur() {debugger;}; catvm.safefunction(dsf_tmp_context.onblur_setter);//296
Object.defineProperty(dsf_tmp_context.onblur_setter, "name", {
value: "set onblur",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onblur", {
	get: dsf_tmp_context.onblur_getter,
	set: dsf_tmp_context.onblur_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncancel_getter = function oncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.oncancel_getter);//285
Object.defineProperty(dsf_tmp_context.oncancel_getter, "name", {
    value: "get oncancel",
    configurable: true
});//291
dsf_tmp_context.oncancel_setter = function oncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.oncancel_setter);//296
Object.defineProperty(dsf_tmp_context.oncancel_setter, "name", {
value: "set oncancel",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncancel", {
	get: dsf_tmp_context.oncancel_getter,
	set: dsf_tmp_context.oncancel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncanplay_getter = function oncanplay() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplay_getter);//285
Object.defineProperty(dsf_tmp_context.oncanplay_getter, "name", {
    value: "get oncanplay",
    configurable: true
});//291
dsf_tmp_context.oncanplay_setter = function oncanplay() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplay_setter);//296
Object.defineProperty(dsf_tmp_context.oncanplay_setter, "name", {
value: "set oncanplay",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncanplay", {
	get: dsf_tmp_context.oncanplay_getter,
	set: dsf_tmp_context.oncanplay_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncanplaythrough_getter = function oncanplaythrough() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_getter);//285
Object.defineProperty(dsf_tmp_context.oncanplaythrough_getter, "name", {
    value: "get oncanplaythrough",
    configurable: true
});//291
dsf_tmp_context.oncanplaythrough_setter = function oncanplaythrough() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_setter);//296
Object.defineProperty(dsf_tmp_context.oncanplaythrough_setter, "name", {
value: "set oncanplaythrough",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
	get: dsf_tmp_context.oncanplaythrough_getter,
	set: dsf_tmp_context.oncanplaythrough_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onchange_getter = function onchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onchange_getter);//285
Object.defineProperty(dsf_tmp_context.onchange_getter, "name", {
    value: "get onchange",
    configurable: true
});//291
dsf_tmp_context.onchange_setter = function onchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onchange_setter);//296
Object.defineProperty(dsf_tmp_context.onchange_setter, "name", {
value: "set onchange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onchange", {
	get: dsf_tmp_context.onchange_getter,
	set: dsf_tmp_context.onchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onclick_getter = function onclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onclick_getter);//285
Object.defineProperty(dsf_tmp_context.onclick_getter, "name", {
    value: "get onclick",
    configurable: true
});//291
dsf_tmp_context.onclick_setter = function onclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onclick_setter);//296
Object.defineProperty(dsf_tmp_context.onclick_setter, "name", {
value: "set onclick",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onclick", {
	get: dsf_tmp_context.onclick_getter,
	set: dsf_tmp_context.onclick_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onclose_getter = function onclose() {debugger;}; catvm.safefunction(dsf_tmp_context.onclose_getter);//285
Object.defineProperty(dsf_tmp_context.onclose_getter, "name", {
    value: "get onclose",
    configurable: true
});//291
dsf_tmp_context.onclose_setter = function onclose() {debugger;}; catvm.safefunction(dsf_tmp_context.onclose_setter);//296
Object.defineProperty(dsf_tmp_context.onclose_setter, "name", {
value: "set onclose",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onclose", {
	get: dsf_tmp_context.onclose_getter,
	set: dsf_tmp_context.onclose_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncontextlost_getter = function oncontextlost() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextlost_getter);//285
Object.defineProperty(dsf_tmp_context.oncontextlost_getter, "name", {
    value: "get oncontextlost",
    configurable: true
});//291
dsf_tmp_context.oncontextlost_setter = function oncontextlost() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextlost_setter);//296
Object.defineProperty(dsf_tmp_context.oncontextlost_setter, "name", {
value: "set oncontextlost",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncontextlost", {
	get: dsf_tmp_context.oncontextlost_getter,
	set: dsf_tmp_context.oncontextlost_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncontextmenu_getter = function oncontextmenu() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextmenu_getter);//285
Object.defineProperty(dsf_tmp_context.oncontextmenu_getter, "name", {
    value: "get oncontextmenu",
    configurable: true
});//291
dsf_tmp_context.oncontextmenu_setter = function oncontextmenu() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextmenu_setter);//296
Object.defineProperty(dsf_tmp_context.oncontextmenu_setter, "name", {
value: "set oncontextmenu",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncontextmenu", {
	get: dsf_tmp_context.oncontextmenu_getter,
	set: dsf_tmp_context.oncontextmenu_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncontextrestored_getter = function oncontextrestored() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextrestored_getter);//285
Object.defineProperty(dsf_tmp_context.oncontextrestored_getter, "name", {
    value: "get oncontextrestored",
    configurable: true
});//291
dsf_tmp_context.oncontextrestored_setter = function oncontextrestored() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextrestored_setter);//296
Object.defineProperty(dsf_tmp_context.oncontextrestored_setter, "name", {
value: "set oncontextrestored",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncontextrestored", {
	get: dsf_tmp_context.oncontextrestored_getter,
	set: dsf_tmp_context.oncontextrestored_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncuechange_getter = function oncuechange() {debugger;}; catvm.safefunction(dsf_tmp_context.oncuechange_getter);//285
Object.defineProperty(dsf_tmp_context.oncuechange_getter, "name", {
    value: "get oncuechange",
    configurable: true
});//291
dsf_tmp_context.oncuechange_setter = function oncuechange() {debugger;}; catvm.safefunction(dsf_tmp_context.oncuechange_setter);//296
Object.defineProperty(dsf_tmp_context.oncuechange_setter, "name", {
value: "set oncuechange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncuechange", {
	get: dsf_tmp_context.oncuechange_getter,
	set: dsf_tmp_context.oncuechange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondblclick_getter = function ondblclick() {debugger;}; catvm.safefunction(dsf_tmp_context.ondblclick_getter);//285
Object.defineProperty(dsf_tmp_context.ondblclick_getter, "name", {
    value: "get ondblclick",
    configurable: true
});//291
dsf_tmp_context.ondblclick_setter = function ondblclick() {debugger;}; catvm.safefunction(dsf_tmp_context.ondblclick_setter);//296
Object.defineProperty(dsf_tmp_context.ondblclick_setter, "name", {
value: "set ondblclick",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondblclick", {
	get: dsf_tmp_context.ondblclick_getter,
	set: dsf_tmp_context.ondblclick_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondrag_getter = function ondrag() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrag_getter);//285
Object.defineProperty(dsf_tmp_context.ondrag_getter, "name", {
    value: "get ondrag",
    configurable: true
});//291
dsf_tmp_context.ondrag_setter = function ondrag() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrag_setter);//296
Object.defineProperty(dsf_tmp_context.ondrag_setter, "name", {
value: "set ondrag",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondrag", {
	get: dsf_tmp_context.ondrag_getter,
	set: dsf_tmp_context.ondrag_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondragend_getter = function ondragend() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragend_getter);//285
Object.defineProperty(dsf_tmp_context.ondragend_getter, "name", {
    value: "get ondragend",
    configurable: true
});//291
dsf_tmp_context.ondragend_setter = function ondragend() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragend_setter);//296
Object.defineProperty(dsf_tmp_context.ondragend_setter, "name", {
value: "set ondragend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondragend", {
	get: dsf_tmp_context.ondragend_getter,
	set: dsf_tmp_context.ondragend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondragenter_getter = function ondragenter() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragenter_getter);//285
Object.defineProperty(dsf_tmp_context.ondragenter_getter, "name", {
    value: "get ondragenter",
    configurable: true
});//291
dsf_tmp_context.ondragenter_setter = function ondragenter() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragenter_setter);//296
Object.defineProperty(dsf_tmp_context.ondragenter_setter, "name", {
value: "set ondragenter",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondragenter", {
	get: dsf_tmp_context.ondragenter_getter,
	set: dsf_tmp_context.ondragenter_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondragleave_getter = function ondragleave() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragleave_getter);//285
Object.defineProperty(dsf_tmp_context.ondragleave_getter, "name", {
    value: "get ondragleave",
    configurable: true
});//291
dsf_tmp_context.ondragleave_setter = function ondragleave() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragleave_setter);//296
Object.defineProperty(dsf_tmp_context.ondragleave_setter, "name", {
value: "set ondragleave",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondragleave", {
	get: dsf_tmp_context.ondragleave_getter,
	set: dsf_tmp_context.ondragleave_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondragover_getter = function ondragover() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragover_getter);//285
Object.defineProperty(dsf_tmp_context.ondragover_getter, "name", {
    value: "get ondragover",
    configurable: true
});//291
dsf_tmp_context.ondragover_setter = function ondragover() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragover_setter);//296
Object.defineProperty(dsf_tmp_context.ondragover_setter, "name", {
value: "set ondragover",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondragover", {
	get: dsf_tmp_context.ondragover_getter,
	set: dsf_tmp_context.ondragover_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondragstart_getter = function ondragstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragstart_getter);//285
Object.defineProperty(dsf_tmp_context.ondragstart_getter, "name", {
    value: "get ondragstart",
    configurable: true
});//291
dsf_tmp_context.ondragstart_setter = function ondragstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragstart_setter);//296
Object.defineProperty(dsf_tmp_context.ondragstart_setter, "name", {
value: "set ondragstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondragstart", {
	get: dsf_tmp_context.ondragstart_getter,
	set: dsf_tmp_context.ondragstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondrop_getter = function ondrop() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrop_getter);//285
Object.defineProperty(dsf_tmp_context.ondrop_getter, "name", {
    value: "get ondrop",
    configurable: true
});//291
dsf_tmp_context.ondrop_setter = function ondrop() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrop_setter);//296
Object.defineProperty(dsf_tmp_context.ondrop_setter, "name", {
value: "set ondrop",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondrop", {
	get: dsf_tmp_context.ondrop_getter,
	set: dsf_tmp_context.ondrop_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ondurationchange_getter = function ondurationchange() {debugger;}; catvm.safefunction(dsf_tmp_context.ondurationchange_getter);//285
Object.defineProperty(dsf_tmp_context.ondurationchange_getter, "name", {
    value: "get ondurationchange",
    configurable: true
});//291
dsf_tmp_context.ondurationchange_setter = function ondurationchange() {debugger;}; catvm.safefunction(dsf_tmp_context.ondurationchange_setter);//296
Object.defineProperty(dsf_tmp_context.ondurationchange_setter, "name", {
value: "set ondurationchange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ondurationchange", {
	get: dsf_tmp_context.ondurationchange_getter,
	set: dsf_tmp_context.ondurationchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onemptied_getter = function onemptied() {debugger;}; catvm.safefunction(dsf_tmp_context.onemptied_getter);//285
Object.defineProperty(dsf_tmp_context.onemptied_getter, "name", {
    value: "get onemptied",
    configurable: true
});//291
dsf_tmp_context.onemptied_setter = function onemptied() {debugger;}; catvm.safefunction(dsf_tmp_context.onemptied_setter);//296
Object.defineProperty(dsf_tmp_context.onemptied_setter, "name", {
value: "set onemptied",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onemptied", {
	get: dsf_tmp_context.onemptied_getter,
	set: dsf_tmp_context.onemptied_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onended_getter = function onended() {debugger;}; catvm.safefunction(dsf_tmp_context.onended_getter);//285
Object.defineProperty(dsf_tmp_context.onended_getter, "name", {
    value: "get onended",
    configurable: true
});//291
dsf_tmp_context.onended_setter = function onended() {debugger;}; catvm.safefunction(dsf_tmp_context.onended_setter);//296
Object.defineProperty(dsf_tmp_context.onended_setter, "name", {
value: "set onended",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onended", {
	get: dsf_tmp_context.onended_getter,
	set: dsf_tmp_context.onended_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onerror_getter = function onerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onerror_getter);//285
Object.defineProperty(dsf_tmp_context.onerror_getter, "name", {
    value: "get onerror",
    configurable: true
});//291
dsf_tmp_context.onerror_setter = function onerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onerror_setter);//296
Object.defineProperty(dsf_tmp_context.onerror_setter, "name", {
value: "set onerror",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onerror", {
	get: dsf_tmp_context.onerror_getter,
	set: dsf_tmp_context.onerror_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onfocus_getter = function onfocus() {debugger;}; catvm.safefunction(dsf_tmp_context.onfocus_getter);//285
Object.defineProperty(dsf_tmp_context.onfocus_getter, "name", {
    value: "get onfocus",
    configurable: true
});//291
dsf_tmp_context.onfocus_setter = function onfocus() {debugger;}; catvm.safefunction(dsf_tmp_context.onfocus_setter);//296
Object.defineProperty(dsf_tmp_context.onfocus_setter, "name", {
value: "set onfocus",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onfocus", {
	get: dsf_tmp_context.onfocus_getter,
	set: dsf_tmp_context.onfocus_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onformdata_getter = function onformdata() {debugger;}; catvm.safefunction(dsf_tmp_context.onformdata_getter);//285
Object.defineProperty(dsf_tmp_context.onformdata_getter, "name", {
    value: "get onformdata",
    configurable: true
});//291
dsf_tmp_context.onformdata_setter = function onformdata() {debugger;}; catvm.safefunction(dsf_tmp_context.onformdata_setter);//296
Object.defineProperty(dsf_tmp_context.onformdata_setter, "name", {
value: "set onformdata",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onformdata", {
	get: dsf_tmp_context.onformdata_getter,
	set: dsf_tmp_context.onformdata_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oninput_getter = function oninput() {debugger;}; catvm.safefunction(dsf_tmp_context.oninput_getter);//285
Object.defineProperty(dsf_tmp_context.oninput_getter, "name", {
    value: "get oninput",
    configurable: true
});//291
dsf_tmp_context.oninput_setter = function oninput() {debugger;}; catvm.safefunction(dsf_tmp_context.oninput_setter);//296
Object.defineProperty(dsf_tmp_context.oninput_setter, "name", {
value: "set oninput",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oninput", {
	get: dsf_tmp_context.oninput_getter,
	set: dsf_tmp_context.oninput_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oninvalid_getter = function oninvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.oninvalid_getter);//285
Object.defineProperty(dsf_tmp_context.oninvalid_getter, "name", {
    value: "get oninvalid",
    configurable: true
});//291
dsf_tmp_context.oninvalid_setter = function oninvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.oninvalid_setter);//296
Object.defineProperty(dsf_tmp_context.oninvalid_setter, "name", {
value: "set oninvalid",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oninvalid", {
	get: dsf_tmp_context.oninvalid_getter,
	set: dsf_tmp_context.oninvalid_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onkeydown_getter = function onkeydown() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeydown_getter);//285
Object.defineProperty(dsf_tmp_context.onkeydown_getter, "name", {
    value: "get onkeydown",
    configurable: true
});//291
dsf_tmp_context.onkeydown_setter = function onkeydown() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeydown_setter);//296
Object.defineProperty(dsf_tmp_context.onkeydown_setter, "name", {
value: "set onkeydown",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onkeydown", {
	get: dsf_tmp_context.onkeydown_getter,
	set: dsf_tmp_context.onkeydown_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onkeypress_getter = function onkeypress() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeypress_getter);//285
Object.defineProperty(dsf_tmp_context.onkeypress_getter, "name", {
    value: "get onkeypress",
    configurable: true
});//291
dsf_tmp_context.onkeypress_setter = function onkeypress() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeypress_setter);//296
Object.defineProperty(dsf_tmp_context.onkeypress_setter, "name", {
value: "set onkeypress",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onkeypress", {
	get: dsf_tmp_context.onkeypress_getter,
	set: dsf_tmp_context.onkeypress_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onkeyup_getter = function onkeyup() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeyup_getter);//285
Object.defineProperty(dsf_tmp_context.onkeyup_getter, "name", {
    value: "get onkeyup",
    configurable: true
});//291
dsf_tmp_context.onkeyup_setter = function onkeyup() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeyup_setter);//296
Object.defineProperty(dsf_tmp_context.onkeyup_setter, "name", {
value: "set onkeyup",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onkeyup", {
	get: dsf_tmp_context.onkeyup_getter,
	set: dsf_tmp_context.onkeyup_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onload_getter = function onload() {debugger;}; catvm.safefunction(dsf_tmp_context.onload_getter);//285
Object.defineProperty(dsf_tmp_context.onload_getter, "name", {
    value: "get onload",
    configurable: true
});//291
dsf_tmp_context.onload_setter = function onload() {debugger;}; catvm.safefunction(dsf_tmp_context.onload_setter);//296
Object.defineProperty(dsf_tmp_context.onload_setter, "name", {
value: "set onload",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onload", {
	get: dsf_tmp_context.onload_getter,
	set: dsf_tmp_context.onload_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onloadeddata_getter = function onloadeddata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadeddata_getter);//285
Object.defineProperty(dsf_tmp_context.onloadeddata_getter, "name", {
    value: "get onloadeddata",
    configurable: true
});//291
dsf_tmp_context.onloadeddata_setter = function onloadeddata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadeddata_setter);//296
Object.defineProperty(dsf_tmp_context.onloadeddata_setter, "name", {
value: "set onloadeddata",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onloadeddata", {
	get: dsf_tmp_context.onloadeddata_getter,
	set: dsf_tmp_context.onloadeddata_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onloadedmetadata_getter = function onloadedmetadata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_getter);//285
Object.defineProperty(dsf_tmp_context.onloadedmetadata_getter, "name", {
    value: "get onloadedmetadata",
    configurable: true
});//291
dsf_tmp_context.onloadedmetadata_setter = function onloadedmetadata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_setter);//296
Object.defineProperty(dsf_tmp_context.onloadedmetadata_setter, "name", {
value: "set onloadedmetadata",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
	get: dsf_tmp_context.onloadedmetadata_getter,
	set: dsf_tmp_context.onloadedmetadata_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onloadstart_getter = function onloadstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadstart_getter);//285
Object.defineProperty(dsf_tmp_context.onloadstart_getter, "name", {
    value: "get onloadstart",
    configurable: true
});//291
dsf_tmp_context.onloadstart_setter = function onloadstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadstart_setter);//296
Object.defineProperty(dsf_tmp_context.onloadstart_setter, "name", {
value: "set onloadstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onloadstart", {
	get: dsf_tmp_context.onloadstart_getter,
	set: dsf_tmp_context.onloadstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmousedown_getter = function onmousedown() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousedown_getter);//285
Object.defineProperty(dsf_tmp_context.onmousedown_getter, "name", {
    value: "get onmousedown",
    configurable: true
});//291
dsf_tmp_context.onmousedown_setter = function onmousedown() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousedown_setter);//296
Object.defineProperty(dsf_tmp_context.onmousedown_setter, "name", {
value: "set onmousedown",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmousedown", {
	get: dsf_tmp_context.onmousedown_getter,
	set: dsf_tmp_context.onmousedown_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmouseenter_getter = function onmouseenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseenter_getter);//285
Object.defineProperty(dsf_tmp_context.onmouseenter_getter, "name", {
    value: "get onmouseenter",
    configurable: true
});//291
dsf_tmp_context.onmouseenter_setter = function onmouseenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseenter_setter);//296
Object.defineProperty(dsf_tmp_context.onmouseenter_setter, "name", {
value: "set onmouseenter",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmouseenter", {
	get: dsf_tmp_context.onmouseenter_getter,
	set: dsf_tmp_context.onmouseenter_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmouseleave_getter = function onmouseleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseleave_getter);//285
Object.defineProperty(dsf_tmp_context.onmouseleave_getter, "name", {
    value: "get onmouseleave",
    configurable: true
});//291
dsf_tmp_context.onmouseleave_setter = function onmouseleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseleave_setter);//296
Object.defineProperty(dsf_tmp_context.onmouseleave_setter, "name", {
value: "set onmouseleave",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmouseleave", {
	get: dsf_tmp_context.onmouseleave_getter,
	set: dsf_tmp_context.onmouseleave_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmousemove_getter = function onmousemove() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousemove_getter);//285
Object.defineProperty(dsf_tmp_context.onmousemove_getter, "name", {
    value: "get onmousemove",
    configurable: true
});//291
dsf_tmp_context.onmousemove_setter = function onmousemove() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousemove_setter);//296
Object.defineProperty(dsf_tmp_context.onmousemove_setter, "name", {
value: "set onmousemove",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmousemove", {
	get: dsf_tmp_context.onmousemove_getter,
	set: dsf_tmp_context.onmousemove_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmouseout_getter = function onmouseout() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseout_getter);//285
Object.defineProperty(dsf_tmp_context.onmouseout_getter, "name", {
    value: "get onmouseout",
    configurable: true
});//291
dsf_tmp_context.onmouseout_setter = function onmouseout() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseout_setter);//296
Object.defineProperty(dsf_tmp_context.onmouseout_setter, "name", {
value: "set onmouseout",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmouseout", {
	get: dsf_tmp_context.onmouseout_getter,
	set: dsf_tmp_context.onmouseout_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmouseover_getter = function onmouseover() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseover_getter);//285
Object.defineProperty(dsf_tmp_context.onmouseover_getter, "name", {
    value: "get onmouseover",
    configurable: true
});//291
dsf_tmp_context.onmouseover_setter = function onmouseover() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseover_setter);//296
Object.defineProperty(dsf_tmp_context.onmouseover_setter, "name", {
value: "set onmouseover",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmouseover", {
	get: dsf_tmp_context.onmouseover_getter,
	set: dsf_tmp_context.onmouseover_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmouseup_getter = function onmouseup() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseup_getter);//285
Object.defineProperty(dsf_tmp_context.onmouseup_getter, "name", {
    value: "get onmouseup",
    configurable: true
});//291
dsf_tmp_context.onmouseup_setter = function onmouseup() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseup_setter);//296
Object.defineProperty(dsf_tmp_context.onmouseup_setter, "name", {
value: "set onmouseup",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmouseup", {
	get: dsf_tmp_context.onmouseup_getter,
	set: dsf_tmp_context.onmouseup_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onmousewheel_getter = function onmousewheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousewheel_getter);//285
Object.defineProperty(dsf_tmp_context.onmousewheel_getter, "name", {
    value: "get onmousewheel",
    configurable: true
});//291
dsf_tmp_context.onmousewheel_setter = function onmousewheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousewheel_setter);//296
Object.defineProperty(dsf_tmp_context.onmousewheel_setter, "name", {
value: "set onmousewheel",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onmousewheel", {
	get: dsf_tmp_context.onmousewheel_getter,
	set: dsf_tmp_context.onmousewheel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpause_getter = function onpause() {debugger;}; catvm.safefunction(dsf_tmp_context.onpause_getter);//285
Object.defineProperty(dsf_tmp_context.onpause_getter, "name", {
    value: "get onpause",
    configurable: true
});//291
dsf_tmp_context.onpause_setter = function onpause() {debugger;}; catvm.safefunction(dsf_tmp_context.onpause_setter);//296
Object.defineProperty(dsf_tmp_context.onpause_setter, "name", {
value: "set onpause",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpause", {
	get: dsf_tmp_context.onpause_getter,
	set: dsf_tmp_context.onpause_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onplay_getter = function onplay() {debugger;}; catvm.safefunction(dsf_tmp_context.onplay_getter);//285
Object.defineProperty(dsf_tmp_context.onplay_getter, "name", {
    value: "get onplay",
    configurable: true
});//291
dsf_tmp_context.onplay_setter = function onplay() {debugger;}; catvm.safefunction(dsf_tmp_context.onplay_setter);//296
Object.defineProperty(dsf_tmp_context.onplay_setter, "name", {
value: "set onplay",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onplay", {
	get: dsf_tmp_context.onplay_getter,
	set: dsf_tmp_context.onplay_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onplaying_getter = function onplaying() {debugger;}; catvm.safefunction(dsf_tmp_context.onplaying_getter);//285
Object.defineProperty(dsf_tmp_context.onplaying_getter, "name", {
    value: "get onplaying",
    configurable: true
});//291
dsf_tmp_context.onplaying_setter = function onplaying() {debugger;}; catvm.safefunction(dsf_tmp_context.onplaying_setter);//296
Object.defineProperty(dsf_tmp_context.onplaying_setter, "name", {
value: "set onplaying",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onplaying", {
	get: dsf_tmp_context.onplaying_getter,
	set: dsf_tmp_context.onplaying_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onprogress_getter = function onprogress() {debugger;}; catvm.safefunction(dsf_tmp_context.onprogress_getter);//285
Object.defineProperty(dsf_tmp_context.onprogress_getter, "name", {
    value: "get onprogress",
    configurable: true
});//291
dsf_tmp_context.onprogress_setter = function onprogress() {debugger;}; catvm.safefunction(dsf_tmp_context.onprogress_setter);//296
Object.defineProperty(dsf_tmp_context.onprogress_setter, "name", {
value: "set onprogress",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onprogress", {
	get: dsf_tmp_context.onprogress_getter,
	set: dsf_tmp_context.onprogress_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onratechange_getter = function onratechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onratechange_getter);//285
Object.defineProperty(dsf_tmp_context.onratechange_getter, "name", {
    value: "get onratechange",
    configurable: true
});//291
dsf_tmp_context.onratechange_setter = function onratechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onratechange_setter);//296
Object.defineProperty(dsf_tmp_context.onratechange_setter, "name", {
value: "set onratechange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onratechange", {
	get: dsf_tmp_context.onratechange_getter,
	set: dsf_tmp_context.onratechange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onreset_getter = function onreset() {debugger;}; catvm.safefunction(dsf_tmp_context.onreset_getter);//285
Object.defineProperty(dsf_tmp_context.onreset_getter, "name", {
    value: "get onreset",
    configurable: true
});//291
dsf_tmp_context.onreset_setter = function onreset() {debugger;}; catvm.safefunction(dsf_tmp_context.onreset_setter);//296
Object.defineProperty(dsf_tmp_context.onreset_setter, "name", {
value: "set onreset",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onreset", {
	get: dsf_tmp_context.onreset_getter,
	set: dsf_tmp_context.onreset_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onresize_getter = function onresize() {debugger;}; catvm.safefunction(dsf_tmp_context.onresize_getter);//285
Object.defineProperty(dsf_tmp_context.onresize_getter, "name", {
    value: "get onresize",
    configurable: true
});//291
dsf_tmp_context.onresize_setter = function onresize() {debugger;}; catvm.safefunction(dsf_tmp_context.onresize_setter);//296
Object.defineProperty(dsf_tmp_context.onresize_setter, "name", {
value: "set onresize",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onresize", {
	get: dsf_tmp_context.onresize_getter,
	set: dsf_tmp_context.onresize_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onscroll_getter = function onscroll() {debugger;}; catvm.safefunction(dsf_tmp_context.onscroll_getter);//285
Object.defineProperty(dsf_tmp_context.onscroll_getter, "name", {
    value: "get onscroll",
    configurable: true
});//291
dsf_tmp_context.onscroll_setter = function onscroll() {debugger;}; catvm.safefunction(dsf_tmp_context.onscroll_setter);//296
Object.defineProperty(dsf_tmp_context.onscroll_setter, "name", {
value: "set onscroll",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onscroll", {
	get: dsf_tmp_context.onscroll_getter,
	set: dsf_tmp_context.onscroll_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onsecuritypolicyviolation_getter = function onsecuritypolicyviolation() {debugger;}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_getter);//285
Object.defineProperty(dsf_tmp_context.onsecuritypolicyviolation_getter, "name", {
    value: "get onsecuritypolicyviolation",
    configurable: true
});//291
dsf_tmp_context.onsecuritypolicyviolation_setter = function onsecuritypolicyviolation() {debugger;}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_setter);//296
Object.defineProperty(dsf_tmp_context.onsecuritypolicyviolation_setter, "name", {
value: "set onsecuritypolicyviolation",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
	get: dsf_tmp_context.onsecuritypolicyviolation_getter,
	set: dsf_tmp_context.onsecuritypolicyviolation_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onseeked_getter = function onseeked() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeked_getter);//285
Object.defineProperty(dsf_tmp_context.onseeked_getter, "name", {
    value: "get onseeked",
    configurable: true
});//291
dsf_tmp_context.onseeked_setter = function onseeked() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeked_setter);//296
Object.defineProperty(dsf_tmp_context.onseeked_setter, "name", {
value: "set onseeked",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onseeked", {
	get: dsf_tmp_context.onseeked_getter,
	set: dsf_tmp_context.onseeked_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onseeking_getter = function onseeking() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeking_getter);//285
Object.defineProperty(dsf_tmp_context.onseeking_getter, "name", {
    value: "get onseeking",
    configurable: true
});//291
dsf_tmp_context.onseeking_setter = function onseeking() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeking_setter);//296
Object.defineProperty(dsf_tmp_context.onseeking_setter, "name", {
value: "set onseeking",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onseeking", {
	get: dsf_tmp_context.onseeking_getter,
	set: dsf_tmp_context.onseeking_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onselect_getter = function onselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onselect_getter);//285
Object.defineProperty(dsf_tmp_context.onselect_getter, "name", {
    value: "get onselect",
    configurable: true
});//291
dsf_tmp_context.onselect_setter = function onselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onselect_setter);//296
Object.defineProperty(dsf_tmp_context.onselect_setter, "name", {
value: "set onselect",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onselect", {
	get: dsf_tmp_context.onselect_getter,
	set: dsf_tmp_context.onselect_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onslotchange_getter = function onslotchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onslotchange_getter);//285
Object.defineProperty(dsf_tmp_context.onslotchange_getter, "name", {
    value: "get onslotchange",
    configurable: true
});//291
dsf_tmp_context.onslotchange_setter = function onslotchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onslotchange_setter);//296
Object.defineProperty(dsf_tmp_context.onslotchange_setter, "name", {
value: "set onslotchange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onslotchange", {
	get: dsf_tmp_context.onslotchange_getter,
	set: dsf_tmp_context.onslotchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onstalled_getter = function onstalled() {debugger;}; catvm.safefunction(dsf_tmp_context.onstalled_getter);//285
Object.defineProperty(dsf_tmp_context.onstalled_getter, "name", {
    value: "get onstalled",
    configurable: true
});//291
dsf_tmp_context.onstalled_setter = function onstalled() {debugger;}; catvm.safefunction(dsf_tmp_context.onstalled_setter);//296
Object.defineProperty(dsf_tmp_context.onstalled_setter, "name", {
value: "set onstalled",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onstalled", {
	get: dsf_tmp_context.onstalled_getter,
	set: dsf_tmp_context.onstalled_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onsubmit_getter = function onsubmit() {debugger;}; catvm.safefunction(dsf_tmp_context.onsubmit_getter);//285
Object.defineProperty(dsf_tmp_context.onsubmit_getter, "name", {
    value: "get onsubmit",
    configurable: true
});//291
dsf_tmp_context.onsubmit_setter = function onsubmit() {debugger;}; catvm.safefunction(dsf_tmp_context.onsubmit_setter);//296
Object.defineProperty(dsf_tmp_context.onsubmit_setter, "name", {
value: "set onsubmit",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onsubmit", {
	get: dsf_tmp_context.onsubmit_getter,
	set: dsf_tmp_context.onsubmit_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onsuspend_getter = function onsuspend() {debugger;}; catvm.safefunction(dsf_tmp_context.onsuspend_getter);//285
Object.defineProperty(dsf_tmp_context.onsuspend_getter, "name", {
    value: "get onsuspend",
    configurable: true
});//291
dsf_tmp_context.onsuspend_setter = function onsuspend() {debugger;}; catvm.safefunction(dsf_tmp_context.onsuspend_setter);//296
Object.defineProperty(dsf_tmp_context.onsuspend_setter, "name", {
value: "set onsuspend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onsuspend", {
	get: dsf_tmp_context.onsuspend_getter,
	set: dsf_tmp_context.onsuspend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontimeupdate_getter = function ontimeupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.ontimeupdate_getter);//285
Object.defineProperty(dsf_tmp_context.ontimeupdate_getter, "name", {
    value: "get ontimeupdate",
    configurable: true
});//291
dsf_tmp_context.ontimeupdate_setter = function ontimeupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.ontimeupdate_setter);//296
Object.defineProperty(dsf_tmp_context.ontimeupdate_setter, "name", {
value: "set ontimeupdate",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontimeupdate", {
	get: dsf_tmp_context.ontimeupdate_getter,
	set: dsf_tmp_context.ontimeupdate_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontoggle_getter = function ontoggle() {debugger;}; catvm.safefunction(dsf_tmp_context.ontoggle_getter);//285
Object.defineProperty(dsf_tmp_context.ontoggle_getter, "name", {
    value: "get ontoggle",
    configurable: true
});//291
dsf_tmp_context.ontoggle_setter = function ontoggle() {debugger;}; catvm.safefunction(dsf_tmp_context.ontoggle_setter);//296
Object.defineProperty(dsf_tmp_context.ontoggle_setter, "name", {
value: "set ontoggle",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontoggle", {
	get: dsf_tmp_context.ontoggle_getter,
	set: dsf_tmp_context.ontoggle_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onvolumechange_getter = function onvolumechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvolumechange_getter);//285
Object.defineProperty(dsf_tmp_context.onvolumechange_getter, "name", {
    value: "get onvolumechange",
    configurable: true
});//291
dsf_tmp_context.onvolumechange_setter = function onvolumechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvolumechange_setter);//296
Object.defineProperty(dsf_tmp_context.onvolumechange_setter, "name", {
value: "set onvolumechange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onvolumechange", {
	get: dsf_tmp_context.onvolumechange_getter,
	set: dsf_tmp_context.onvolumechange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwaiting_getter = function onwaiting() {debugger;}; catvm.safefunction(dsf_tmp_context.onwaiting_getter);//285
Object.defineProperty(dsf_tmp_context.onwaiting_getter, "name", {
    value: "get onwaiting",
    configurable: true
});//291
dsf_tmp_context.onwaiting_setter = function onwaiting() {debugger;}; catvm.safefunction(dsf_tmp_context.onwaiting_setter);//296
Object.defineProperty(dsf_tmp_context.onwaiting_setter, "name", {
value: "set onwaiting",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwaiting", {
	get: dsf_tmp_context.onwaiting_getter,
	set: dsf_tmp_context.onwaiting_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkitanimationend_getter = function onwebkitanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkitanimationend_getter, "name", {
    value: "get onwebkitanimationend",
    configurable: true
});//291
dsf_tmp_context.onwebkitanimationend_setter = function onwebkitanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkitanimationend_setter, "name", {
value: "set onwebkitanimationend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
	get: dsf_tmp_context.onwebkitanimationend_getter,
	set: dsf_tmp_context.onwebkitanimationend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkitanimationiteration_getter = function onwebkitanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkitanimationiteration_getter, "name", {
    value: "get onwebkitanimationiteration",
    configurable: true
});//291
dsf_tmp_context.onwebkitanimationiteration_setter = function onwebkitanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkitanimationiteration_setter, "name", {
value: "set onwebkitanimationiteration",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
	get: dsf_tmp_context.onwebkitanimationiteration_getter,
	set: dsf_tmp_context.onwebkitanimationiteration_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkitanimationstart_getter = function onwebkitanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkitanimationstart_getter, "name", {
    value: "get onwebkitanimationstart",
    configurable: true
});//291
dsf_tmp_context.onwebkitanimationstart_setter = function onwebkitanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkitanimationstart_setter, "name", {
value: "set onwebkitanimationstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
	get: dsf_tmp_context.onwebkitanimationstart_getter,
	set: dsf_tmp_context.onwebkitanimationstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkittransitionend_getter = function onwebkittransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkittransitionend_getter, "name", {
    value: "get onwebkittransitionend",
    configurable: true
});//291
dsf_tmp_context.onwebkittransitionend_setter = function onwebkittransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkittransitionend_setter, "name", {
value: "set onwebkittransitionend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
	get: dsf_tmp_context.onwebkittransitionend_getter,
	set: dsf_tmp_context.onwebkittransitionend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwheel_getter = function onwheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onwheel_getter);//285
Object.defineProperty(dsf_tmp_context.onwheel_getter, "name", {
    value: "get onwheel",
    configurable: true
});//291
dsf_tmp_context.onwheel_setter = function onwheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onwheel_setter);//296
Object.defineProperty(dsf_tmp_context.onwheel_setter, "name", {
value: "set onwheel",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onwheel", {
	get: dsf_tmp_context.onwheel_getter,
	set: dsf_tmp_context.onwheel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onauxclick_getter = function onauxclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onauxclick_getter);//285
Object.defineProperty(dsf_tmp_context.onauxclick_getter, "name", {
    value: "get onauxclick",
    configurable: true
});//291
dsf_tmp_context.onauxclick_setter = function onauxclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onauxclick_setter);//296
Object.defineProperty(dsf_tmp_context.onauxclick_setter, "name", {
value: "set onauxclick",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onauxclick", {
	get: dsf_tmp_context.onauxclick_getter,
	set: dsf_tmp_context.onauxclick_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ongotpointercapture_getter = function ongotpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_getter);//285
Object.defineProperty(dsf_tmp_context.ongotpointercapture_getter, "name", {
    value: "get ongotpointercapture",
    configurable: true
});//291
dsf_tmp_context.ongotpointercapture_setter = function ongotpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_setter);//296
Object.defineProperty(dsf_tmp_context.ongotpointercapture_setter, "name", {
value: "set ongotpointercapture",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
	get: dsf_tmp_context.ongotpointercapture_getter,
	set: dsf_tmp_context.ongotpointercapture_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onlostpointercapture_getter = function onlostpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_getter);//285
Object.defineProperty(dsf_tmp_context.onlostpointercapture_getter, "name", {
    value: "get onlostpointercapture",
    configurable: true
});//291
dsf_tmp_context.onlostpointercapture_setter = function onlostpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_setter);//296
Object.defineProperty(dsf_tmp_context.onlostpointercapture_setter, "name", {
value: "set onlostpointercapture",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
	get: dsf_tmp_context.onlostpointercapture_getter,
	set: dsf_tmp_context.onlostpointercapture_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerdown_getter = function onpointerdown() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerdown_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerdown_getter, "name", {
    value: "get onpointerdown",
    configurable: true
});//291
dsf_tmp_context.onpointerdown_setter = function onpointerdown() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerdown_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerdown_setter, "name", {
value: "set onpointerdown",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerdown", {
	get: dsf_tmp_context.onpointerdown_getter,
	set: dsf_tmp_context.onpointerdown_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointermove_getter = function onpointermove() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointermove_getter);//285
Object.defineProperty(dsf_tmp_context.onpointermove_getter, "name", {
    value: "get onpointermove",
    configurable: true
});//291
dsf_tmp_context.onpointermove_setter = function onpointermove() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointermove_setter);//296
Object.defineProperty(dsf_tmp_context.onpointermove_setter, "name", {
value: "set onpointermove",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointermove", {
	get: dsf_tmp_context.onpointermove_getter,
	set: dsf_tmp_context.onpointermove_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerrawupdate_getter = function onpointerrawupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerrawupdate_getter, "name", {
    value: "get onpointerrawupdate",
    configurable: true
});//291
dsf_tmp_context.onpointerrawupdate_setter = function onpointerrawupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerrawupdate_setter, "name", {
value: "set onpointerrawupdate",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
	get: dsf_tmp_context.onpointerrawupdate_getter,
	set: dsf_tmp_context.onpointerrawupdate_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerup_getter = function onpointerup() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerup_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerup_getter, "name", {
    value: "get onpointerup",
    configurable: true
});//291
dsf_tmp_context.onpointerup_setter = function onpointerup() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerup_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerup_setter, "name", {
value: "set onpointerup",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerup", {
	get: dsf_tmp_context.onpointerup_getter,
	set: dsf_tmp_context.onpointerup_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointercancel_getter = function onpointercancel() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointercancel_getter);//285
Object.defineProperty(dsf_tmp_context.onpointercancel_getter, "name", {
    value: "get onpointercancel",
    configurable: true
});//291
dsf_tmp_context.onpointercancel_setter = function onpointercancel() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointercancel_setter);//296
Object.defineProperty(dsf_tmp_context.onpointercancel_setter, "name", {
value: "set onpointercancel",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointercancel", {
	get: dsf_tmp_context.onpointercancel_getter,
	set: dsf_tmp_context.onpointercancel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerover_getter = function onpointerover() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerover_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerover_getter, "name", {
    value: "get onpointerover",
    configurable: true
});//291
dsf_tmp_context.onpointerover_setter = function onpointerover() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerover_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerover_setter, "name", {
value: "set onpointerover",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerover", {
	get: dsf_tmp_context.onpointerover_getter,
	set: dsf_tmp_context.onpointerover_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerout_getter = function onpointerout() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerout_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerout_getter, "name", {
    value: "get onpointerout",
    configurable: true
});//291
dsf_tmp_context.onpointerout_setter = function onpointerout() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerout_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerout_setter, "name", {
value: "set onpointerout",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerout", {
	get: dsf_tmp_context.onpointerout_getter,
	set: dsf_tmp_context.onpointerout_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerenter_getter = function onpointerenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerenter_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerenter_getter, "name", {
    value: "get onpointerenter",
    configurable: true
});//291
dsf_tmp_context.onpointerenter_setter = function onpointerenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerenter_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerenter_setter, "name", {
value: "set onpointerenter",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerenter", {
	get: dsf_tmp_context.onpointerenter_getter,
	set: dsf_tmp_context.onpointerenter_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpointerleave_getter = function onpointerleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerleave_getter);//285
Object.defineProperty(dsf_tmp_context.onpointerleave_getter, "name", {
    value: "get onpointerleave",
    configurable: true
});//291
dsf_tmp_context.onpointerleave_setter = function onpointerleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerleave_setter);//296
Object.defineProperty(dsf_tmp_context.onpointerleave_setter, "name", {
value: "set onpointerleave",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpointerleave", {
	get: dsf_tmp_context.onpointerleave_getter,
	set: dsf_tmp_context.onpointerleave_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onselectstart_getter = function onselectstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectstart_getter);//285
Object.defineProperty(dsf_tmp_context.onselectstart_getter, "name", {
    value: "get onselectstart",
    configurable: true
});//291
dsf_tmp_context.onselectstart_setter = function onselectstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectstart_setter);//296
Object.defineProperty(dsf_tmp_context.onselectstart_setter, "name", {
value: "set onselectstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onselectstart", {
	get: dsf_tmp_context.onselectstart_getter,
	set: dsf_tmp_context.onselectstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onselectionchange_getter = function onselectionchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectionchange_getter);//285
Object.defineProperty(dsf_tmp_context.onselectionchange_getter, "name", {
    value: "get onselectionchange",
    configurable: true
});//291
dsf_tmp_context.onselectionchange_setter = function onselectionchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectionchange_setter);//296
Object.defineProperty(dsf_tmp_context.onselectionchange_setter, "name", {
value: "set onselectionchange",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onselectionchange", {
	get: dsf_tmp_context.onselectionchange_getter,
	set: dsf_tmp_context.onselectionchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onanimationend_getter = function onanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationend_getter);//285
Object.defineProperty(dsf_tmp_context.onanimationend_getter, "name", {
    value: "get onanimationend",
    configurable: true
});//291
dsf_tmp_context.onanimationend_setter = function onanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationend_setter);//296
Object.defineProperty(dsf_tmp_context.onanimationend_setter, "name", {
value: "set onanimationend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onanimationend", {
	get: dsf_tmp_context.onanimationend_getter,
	set: dsf_tmp_context.onanimationend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onanimationiteration_getter = function onanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationiteration_getter);//285
Object.defineProperty(dsf_tmp_context.onanimationiteration_getter, "name", {
    value: "get onanimationiteration",
    configurable: true
});//291
dsf_tmp_context.onanimationiteration_setter = function onanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationiteration_setter);//296
Object.defineProperty(dsf_tmp_context.onanimationiteration_setter, "name", {
value: "set onanimationiteration",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onanimationiteration", {
	get: dsf_tmp_context.onanimationiteration_getter,
	set: dsf_tmp_context.onanimationiteration_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onanimationstart_getter = function onanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationstart_getter);//285
Object.defineProperty(dsf_tmp_context.onanimationstart_getter, "name", {
    value: "get onanimationstart",
    configurable: true
});//291
dsf_tmp_context.onanimationstart_setter = function onanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationstart_setter);//296
Object.defineProperty(dsf_tmp_context.onanimationstart_setter, "name", {
value: "set onanimationstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onanimationstart", {
	get: dsf_tmp_context.onanimationstart_getter,
	set: dsf_tmp_context.onanimationstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontransitionrun_getter = function ontransitionrun() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionrun_getter);//285
Object.defineProperty(dsf_tmp_context.ontransitionrun_getter, "name", {
    value: "get ontransitionrun",
    configurable: true
});//291
dsf_tmp_context.ontransitionrun_setter = function ontransitionrun() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionrun_setter);//296
Object.defineProperty(dsf_tmp_context.ontransitionrun_setter, "name", {
value: "set ontransitionrun",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontransitionrun", {
	get: dsf_tmp_context.ontransitionrun_getter,
	set: dsf_tmp_context.ontransitionrun_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontransitionstart_getter = function ontransitionstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionstart_getter);//285
Object.defineProperty(dsf_tmp_context.ontransitionstart_getter, "name", {
    value: "get ontransitionstart",
    configurable: true
});//291
dsf_tmp_context.ontransitionstart_setter = function ontransitionstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionstart_setter);//296
Object.defineProperty(dsf_tmp_context.ontransitionstart_setter, "name", {
value: "set ontransitionstart",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontransitionstart", {
	get: dsf_tmp_context.ontransitionstart_getter,
	set: dsf_tmp_context.ontransitionstart_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontransitionend_getter = function ontransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionend_getter);//285
Object.defineProperty(dsf_tmp_context.ontransitionend_getter, "name", {
    value: "get ontransitionend",
    configurable: true
});//291
dsf_tmp_context.ontransitionend_setter = function ontransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionend_setter);//296
Object.defineProperty(dsf_tmp_context.ontransitionend_setter, "name", {
value: "set ontransitionend",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontransitionend", {
	get: dsf_tmp_context.ontransitionend_getter,
	set: dsf_tmp_context.ontransitionend_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ontransitioncancel_getter = function ontransitioncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_getter);//285
Object.defineProperty(dsf_tmp_context.ontransitioncancel_getter, "name", {
    value: "get ontransitioncancel",
    configurable: true
});//291
dsf_tmp_context.ontransitioncancel_setter = function ontransitioncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_setter);//296
Object.defineProperty(dsf_tmp_context.ontransitioncancel_setter, "name", {
value: "set ontransitioncancel",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
	get: dsf_tmp_context.ontransitioncancel_getter,
	set: dsf_tmp_context.ontransitioncancel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncopy_getter = function oncopy() {debugger;}; catvm.safefunction(dsf_tmp_context.oncopy_getter);//285
Object.defineProperty(dsf_tmp_context.oncopy_getter, "name", {
    value: "get oncopy",
    configurable: true
});//291
dsf_tmp_context.oncopy_setter = function oncopy() {debugger;}; catvm.safefunction(dsf_tmp_context.oncopy_setter);//296
Object.defineProperty(dsf_tmp_context.oncopy_setter, "name", {
value: "set oncopy",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncopy", {
	get: dsf_tmp_context.oncopy_getter,
	set: dsf_tmp_context.oncopy_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.oncut_getter = function oncut() {debugger;}; catvm.safefunction(dsf_tmp_context.oncut_getter);//285
Object.defineProperty(dsf_tmp_context.oncut_getter, "name", {
    value: "get oncut",
    configurable: true
});//291
dsf_tmp_context.oncut_setter = function oncut() {debugger;}; catvm.safefunction(dsf_tmp_context.oncut_setter);//296
Object.defineProperty(dsf_tmp_context.oncut_setter, "name", {
value: "set oncut",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "oncut", {
	get: dsf_tmp_context.oncut_getter,
	set: dsf_tmp_context.oncut_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onpaste_getter = function onpaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onpaste_getter);//285
Object.defineProperty(dsf_tmp_context.onpaste_getter, "name", {
    value: "get onpaste",
    configurable: true
});//291
dsf_tmp_context.onpaste_setter = function onpaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onpaste_setter);//296
Object.defineProperty(dsf_tmp_context.onpaste_setter, "name", {
value: "set onpaste",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onpaste", {
	get: dsf_tmp_context.onpaste_getter,
	set: dsf_tmp_context.onpaste_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.dataset_getter = function dataset() {debugger;}; catvm.safefunction(dsf_tmp_context.dataset_getter);//285
Object.defineProperty(dsf_tmp_context.dataset_getter, "name", {
    value: "get dataset",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "dataset", {
	get: dsf_tmp_context.dataset_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.nonce_getter = function nonce() {debugger;}; catvm.safefunction(dsf_tmp_context.nonce_getter);//285
Object.defineProperty(dsf_tmp_context.nonce_getter, "name", {
    value: "get nonce",
    configurable: true
});//291
dsf_tmp_context.nonce_setter = function nonce() {debugger;}; catvm.safefunction(dsf_tmp_context.nonce_setter);//296
Object.defineProperty(dsf_tmp_context.nonce_setter, "name", {
value: "set nonce",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "nonce", {
	get: dsf_tmp_context.nonce_getter,
	set: dsf_tmp_context.nonce_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.autofocus_getter = function autofocus() {debugger;}; catvm.safefunction(dsf_tmp_context.autofocus_getter);//285
Object.defineProperty(dsf_tmp_context.autofocus_getter, "name", {
    value: "get autofocus",
    configurable: true
});//291
dsf_tmp_context.autofocus_setter = function autofocus() {debugger;}; catvm.safefunction(dsf_tmp_context.autofocus_setter);//296
Object.defineProperty(dsf_tmp_context.autofocus_setter, "name", {
value: "set autofocus",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "autofocus", {
	get: dsf_tmp_context.autofocus_getter,
	set: dsf_tmp_context.autofocus_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.tabIndex_getter = function tabIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.tabIndex_getter);//285
Object.defineProperty(dsf_tmp_context.tabIndex_getter, "name", {
    value: "get tabIndex",
    configurable: true
});//291
dsf_tmp_context.tabIndex_setter = function tabIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.tabIndex_setter);//296
Object.defineProperty(dsf_tmp_context.tabIndex_setter, "name", {
value: "set tabIndex",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "tabIndex", {
	get: dsf_tmp_context.tabIndex_getter,
	set: dsf_tmp_context.tabIndex_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.style_getter = function style() {debugger;}; catvm.safefunction(dsf_tmp_context.style_getter);//285
Object.defineProperty(dsf_tmp_context.style_getter, "name", {
    value: "get style",
    configurable: true
});//291
dsf_tmp_context.style_setter = function style() {debugger;}; catvm.safefunction(dsf_tmp_context.style_setter);//296
Object.defineProperty(dsf_tmp_context.style_setter, "name", {
value: "set style",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "style", {
	get: dsf_tmp_context.style_getter,
	set: dsf_tmp_context.style_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.attributeStyleMap_getter = function attributeStyleMap() {debugger;}; catvm.safefunction(dsf_tmp_context.attributeStyleMap_getter);//285
Object.defineProperty(dsf_tmp_context.attributeStyleMap_getter, "name", {
    value: "get attributeStyleMap",
    configurable: true
});//291

Object.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
	get: dsf_tmp_context.attributeStyleMap_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.inert_getter = function inert() {debugger;}; catvm.safefunction(dsf_tmp_context.inert_getter);//285
Object.defineProperty(dsf_tmp_context.inert_getter, "name", {
    value: "get inert",
    configurable: true
});//291
dsf_tmp_context.inert_setter = function inert() {debugger;}; catvm.safefunction(dsf_tmp_context.inert_setter);//296
Object.defineProperty(dsf_tmp_context.inert_setter, "name", {
value: "set inert",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "inert", {
	get: dsf_tmp_context.inert_getter,
	set: dsf_tmp_context.inert_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforematch_getter = function onbeforematch() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforematch_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforematch_getter, "name", {
    value: "get onbeforematch",
    configurable: true
});//291
dsf_tmp_context.onbeforematch_setter = function onbeforematch() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforematch_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforematch_setter, "name", {
value: "set onbeforematch",
configurable: true
});//301

Object.defineProperty(HTMLElement.prototype, "onbeforematch", {
	get: dsf_tmp_context.onbeforematch_getter,
	set: dsf_tmp_context.onbeforematch_setter,
	enumerable:true,
	configurable:true,
});//322

//======	access descriptor code end	======

//======	invocation error prop code start	======
catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("title",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"title").get);
dsf_tmp_context.title_getter = function title(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.title_getter);
HTMLElement.prototype.__defineGetter__("title",dsf_tmp_context.title_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("lang",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"lang").get);
dsf_tmp_context.lang_getter = function lang(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lang_getter);
HTMLElement.prototype.__defineGetter__("lang",dsf_tmp_context.lang_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("translate",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"translate").get);
dsf_tmp_context.translate_getter = function translate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.translate_getter);
HTMLElement.prototype.__defineGetter__("translate",dsf_tmp_context.translate_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("dir",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"dir").get);
dsf_tmp_context.dir_getter = function dir(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.dir_getter);
HTMLElement.prototype.__defineGetter__("dir",dsf_tmp_context.dir_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("hidden",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"hidden").get);
dsf_tmp_context.hidden_getter = function hidden(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.hidden_getter);
HTMLElement.prototype.__defineGetter__("hidden",dsf_tmp_context.hidden_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("accessKey",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"accessKey").get);
dsf_tmp_context.accessKey_getter = function accessKey(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.accessKey_getter);
HTMLElement.prototype.__defineGetter__("accessKey",dsf_tmp_context.accessKey_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("draggable",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"draggable").get);
dsf_tmp_context.draggable_getter = function draggable(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.draggable_getter);
HTMLElement.prototype.__defineGetter__("draggable",dsf_tmp_context.draggable_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("spellcheck",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"spellcheck").get);
dsf_tmp_context.spellcheck_getter = function spellcheck(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.spellcheck_getter);
HTMLElement.prototype.__defineGetter__("spellcheck",dsf_tmp_context.spellcheck_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("autocapitalize",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"autocapitalize").get);
dsf_tmp_context.autocapitalize_getter = function autocapitalize(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.autocapitalize_getter);
HTMLElement.prototype.__defineGetter__("autocapitalize",dsf_tmp_context.autocapitalize_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("contentEditable",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contentEditable").get);
dsf_tmp_context.contentEditable_getter = function contentEditable(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.contentEditable_getter);
HTMLElement.prototype.__defineGetter__("contentEditable",dsf_tmp_context.contentEditable_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("enterKeyHint",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"enterKeyHint").get);
dsf_tmp_context.enterKeyHint_getter = function enterKeyHint(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.enterKeyHint_getter);
HTMLElement.prototype.__defineGetter__("enterKeyHint",dsf_tmp_context.enterKeyHint_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("isContentEditable",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"isContentEditable").get);
dsf_tmp_context.isContentEditable_getter = function isContentEditable(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.isContentEditable_getter);
HTMLElement.prototype.__defineGetter__("isContentEditable",dsf_tmp_context.isContentEditable_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("inputMode",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"inputMode").get);
dsf_tmp_context.inputMode_getter = function inputMode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.inputMode_getter);
HTMLElement.prototype.__defineGetter__("inputMode",dsf_tmp_context.inputMode_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("virtualKeyboardPolicy",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"virtualKeyboardPolicy").get);
dsf_tmp_context.virtualKeyboardPolicy_getter = function virtualKeyboardPolicy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.virtualKeyboardPolicy_getter);
HTMLElement.prototype.__defineGetter__("virtualKeyboardPolicy",dsf_tmp_context.virtualKeyboardPolicy_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("offsetParent",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetParent").get);
dsf_tmp_context.offsetParent_getter = function offsetParent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.offsetParent_getter);
HTMLElement.prototype.__defineGetter__("offsetParent",dsf_tmp_context.offsetParent_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("offsetTop",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetTop").get);
dsf_tmp_context.offsetTop_getter = function offsetTop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.offsetTop_getter);
HTMLElement.prototype.__defineGetter__("offsetTop",dsf_tmp_context.offsetTop_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("offsetLeft",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetLeft").get);
dsf_tmp_context.offsetLeft_getter = function offsetLeft(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.offsetLeft_getter);
HTMLElement.prototype.__defineGetter__("offsetLeft",dsf_tmp_context.offsetLeft_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("offsetWidth",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetWidth").get);
dsf_tmp_context.offsetWidth_getter = function offsetWidth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.offsetWidth_getter);
HTMLElement.prototype.__defineGetter__("offsetWidth",dsf_tmp_context.offsetWidth_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("offsetHeight",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"offsetHeight").get);
dsf_tmp_context.offsetHeight_getter = function offsetHeight(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.offsetHeight_getter);
HTMLElement.prototype.__defineGetter__("offsetHeight",dsf_tmp_context.offsetHeight_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("innerText",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerText").get);
dsf_tmp_context.innerText_getter = function innerText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.innerText_getter);
HTMLElement.prototype.__defineGetter__("innerText",dsf_tmp_context.innerText_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("outerText",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"outerText").get);
dsf_tmp_context.outerText_getter = function outerText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.outerText_getter);
HTMLElement.prototype.__defineGetter__("outerText",dsf_tmp_context.outerText_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onbeforexrselect",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onbeforexrselect").get);
dsf_tmp_context.onbeforexrselect_getter = function onbeforexrselect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_getter);
HTMLElement.prototype.__defineGetter__("onbeforexrselect",dsf_tmp_context.onbeforexrselect_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onabort",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onabort").get);
dsf_tmp_context.onabort_getter = function onabort(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onabort_getter);
HTMLElement.prototype.__defineGetter__("onabort",dsf_tmp_context.onabort_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onbeforeinput",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onbeforeinput").get);
dsf_tmp_context.onbeforeinput_getter = function onbeforeinput(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforeinput_getter);
HTMLElement.prototype.__defineGetter__("onbeforeinput",dsf_tmp_context.onbeforeinput_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onblur",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onblur").get);
dsf_tmp_context.onblur_getter = function onblur(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onblur_getter);
HTMLElement.prototype.__defineGetter__("onblur",dsf_tmp_context.onblur_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncancel",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncancel").get);
dsf_tmp_context.oncancel_getter = function oncancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncancel_getter);
HTMLElement.prototype.__defineGetter__("oncancel",dsf_tmp_context.oncancel_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncanplay",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncanplay").get);
dsf_tmp_context.oncanplay_getter = function oncanplay(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncanplay_getter);
HTMLElement.prototype.__defineGetter__("oncanplay",dsf_tmp_context.oncanplay_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncanplaythrough",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncanplaythrough").get);
dsf_tmp_context.oncanplaythrough_getter = function oncanplaythrough(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_getter);
HTMLElement.prototype.__defineGetter__("oncanplaythrough",dsf_tmp_context.oncanplaythrough_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onchange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onchange").get);
dsf_tmp_context.onchange_getter = function onchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onchange_getter);
HTMLElement.prototype.__defineGetter__("onchange",dsf_tmp_context.onchange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onclick",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick").get);
dsf_tmp_context.onclick_getter = function onclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onclick_getter);
HTMLElement.prototype.__defineGetter__("onclick",dsf_tmp_context.onclick_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onclose",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclose").get);
dsf_tmp_context.onclose_getter = function onclose(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onclose_getter);
HTMLElement.prototype.__defineGetter__("onclose",dsf_tmp_context.onclose_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncontextlost",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncontextlost").get);
dsf_tmp_context.oncontextlost_getter = function oncontextlost(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextlost_getter);
HTMLElement.prototype.__defineGetter__("oncontextlost",dsf_tmp_context.oncontextlost_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncontextmenu",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncontextmenu").get);
dsf_tmp_context.oncontextmenu_getter = function oncontextmenu(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextmenu_getter);
HTMLElement.prototype.__defineGetter__("oncontextmenu",dsf_tmp_context.oncontextmenu_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncontextrestored",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncontextrestored").get);
dsf_tmp_context.oncontextrestored_getter = function oncontextrestored(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextrestored_getter);
HTMLElement.prototype.__defineGetter__("oncontextrestored",dsf_tmp_context.oncontextrestored_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncuechange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncuechange").get);
dsf_tmp_context.oncuechange_getter = function oncuechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncuechange_getter);
HTMLElement.prototype.__defineGetter__("oncuechange",dsf_tmp_context.oncuechange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondblclick",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondblclick").get);
dsf_tmp_context.ondblclick_getter = function ondblclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondblclick_getter);
HTMLElement.prototype.__defineGetter__("ondblclick",dsf_tmp_context.ondblclick_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondrag",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondrag").get);
dsf_tmp_context.ondrag_getter = function ondrag(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondrag_getter);
HTMLElement.prototype.__defineGetter__("ondrag",dsf_tmp_context.ondrag_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondragend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondragend").get);
dsf_tmp_context.ondragend_getter = function ondragend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragend_getter);
HTMLElement.prototype.__defineGetter__("ondragend",dsf_tmp_context.ondragend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondragenter",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondragenter").get);
dsf_tmp_context.ondragenter_getter = function ondragenter(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragenter_getter);
HTMLElement.prototype.__defineGetter__("ondragenter",dsf_tmp_context.ondragenter_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondragleave",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondragleave").get);
dsf_tmp_context.ondragleave_getter = function ondragleave(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragleave_getter);
HTMLElement.prototype.__defineGetter__("ondragleave",dsf_tmp_context.ondragleave_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondragover",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondragover").get);
dsf_tmp_context.ondragover_getter = function ondragover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragover_getter);
HTMLElement.prototype.__defineGetter__("ondragover",dsf_tmp_context.ondragover_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondragstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondragstart").get);
dsf_tmp_context.ondragstart_getter = function ondragstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragstart_getter);
HTMLElement.prototype.__defineGetter__("ondragstart",dsf_tmp_context.ondragstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondrop",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondrop").get);
dsf_tmp_context.ondrop_getter = function ondrop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondrop_getter);
HTMLElement.prototype.__defineGetter__("ondrop",dsf_tmp_context.ondrop_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ondurationchange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ondurationchange").get);
dsf_tmp_context.ondurationchange_getter = function ondurationchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondurationchange_getter);
HTMLElement.prototype.__defineGetter__("ondurationchange",dsf_tmp_context.ondurationchange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onemptied",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onemptied").get);
dsf_tmp_context.onemptied_getter = function onemptied(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onemptied_getter);
HTMLElement.prototype.__defineGetter__("onemptied",dsf_tmp_context.onemptied_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onended",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onended").get);
dsf_tmp_context.onended_getter = function onended(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onended_getter);
HTMLElement.prototype.__defineGetter__("onended",dsf_tmp_context.onended_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onerror",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onerror").get);
dsf_tmp_context.onerror_getter = function onerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onerror_getter);
HTMLElement.prototype.__defineGetter__("onerror",dsf_tmp_context.onerror_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onfocus",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onfocus").get);
dsf_tmp_context.onfocus_getter = function onfocus(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfocus_getter);
HTMLElement.prototype.__defineGetter__("onfocus",dsf_tmp_context.onfocus_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onformdata",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onformdata").get);
dsf_tmp_context.onformdata_getter = function onformdata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onformdata_getter);
HTMLElement.prototype.__defineGetter__("onformdata",dsf_tmp_context.onformdata_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oninput",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oninput").get);
dsf_tmp_context.oninput_getter = function oninput(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oninput_getter);
HTMLElement.prototype.__defineGetter__("oninput",dsf_tmp_context.oninput_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oninvalid",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oninvalid").get);
dsf_tmp_context.oninvalid_getter = function oninvalid(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oninvalid_getter);
HTMLElement.prototype.__defineGetter__("oninvalid",dsf_tmp_context.oninvalid_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onkeydown",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onkeydown").get);
dsf_tmp_context.onkeydown_getter = function onkeydown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeydown_getter);
HTMLElement.prototype.__defineGetter__("onkeydown",dsf_tmp_context.onkeydown_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onkeypress",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onkeypress").get);
dsf_tmp_context.onkeypress_getter = function onkeypress(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeypress_getter);
HTMLElement.prototype.__defineGetter__("onkeypress",dsf_tmp_context.onkeypress_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onkeyup",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onkeyup").get);
dsf_tmp_context.onkeyup_getter = function onkeyup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeyup_getter);
HTMLElement.prototype.__defineGetter__("onkeyup",dsf_tmp_context.onkeyup_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onload",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onload").get);
dsf_tmp_context.onload_getter = function onload(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onload_getter);
HTMLElement.prototype.__defineGetter__("onload",dsf_tmp_context.onload_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onloadeddata",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onloadeddata").get);
dsf_tmp_context.onloadeddata_getter = function onloadeddata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadeddata_getter);
HTMLElement.prototype.__defineGetter__("onloadeddata",dsf_tmp_context.onloadeddata_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onloadedmetadata",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onloadedmetadata").get);
dsf_tmp_context.onloadedmetadata_getter = function onloadedmetadata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_getter);
HTMLElement.prototype.__defineGetter__("onloadedmetadata",dsf_tmp_context.onloadedmetadata_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onloadstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onloadstart").get);
dsf_tmp_context.onloadstart_getter = function onloadstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadstart_getter);
HTMLElement.prototype.__defineGetter__("onloadstart",dsf_tmp_context.onloadstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmousedown",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmousedown").get);
dsf_tmp_context.onmousedown_getter = function onmousedown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousedown_getter);
HTMLElement.prototype.__defineGetter__("onmousedown",dsf_tmp_context.onmousedown_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmousemove",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmousemove").get);
dsf_tmp_context.onmousemove_getter = function onmousemove(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousemove_getter);
HTMLElement.prototype.__defineGetter__("onmousemove",dsf_tmp_context.onmousemove_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmouseout",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmouseout").get);
dsf_tmp_context.onmouseout_getter = function onmouseout(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseout_getter);
HTMLElement.prototype.__defineGetter__("onmouseout",dsf_tmp_context.onmouseout_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmouseover",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmouseover").get);
dsf_tmp_context.onmouseover_getter = function onmouseover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseover_getter);
HTMLElement.prototype.__defineGetter__("onmouseover",dsf_tmp_context.onmouseover_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmouseup",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmouseup").get);
dsf_tmp_context.onmouseup_getter = function onmouseup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseup_getter);
HTMLElement.prototype.__defineGetter__("onmouseup",dsf_tmp_context.onmouseup_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onmousewheel",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onmousewheel").get);
dsf_tmp_context.onmousewheel_getter = function onmousewheel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousewheel_getter);
HTMLElement.prototype.__defineGetter__("onmousewheel",dsf_tmp_context.onmousewheel_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpause",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpause").get);
dsf_tmp_context.onpause_getter = function onpause(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpause_getter);
HTMLElement.prototype.__defineGetter__("onpause",dsf_tmp_context.onpause_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onplay",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onplay").get);
dsf_tmp_context.onplay_getter = function onplay(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onplay_getter);
HTMLElement.prototype.__defineGetter__("onplay",dsf_tmp_context.onplay_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onplaying",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onplaying").get);
dsf_tmp_context.onplaying_getter = function onplaying(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onplaying_getter);
HTMLElement.prototype.__defineGetter__("onplaying",dsf_tmp_context.onplaying_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onprogress",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onprogress").get);
dsf_tmp_context.onprogress_getter = function onprogress(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onprogress_getter);
HTMLElement.prototype.__defineGetter__("onprogress",dsf_tmp_context.onprogress_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onratechange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onratechange").get);
dsf_tmp_context.onratechange_getter = function onratechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onratechange_getter);
HTMLElement.prototype.__defineGetter__("onratechange",dsf_tmp_context.onratechange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onreset",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onreset").get);
dsf_tmp_context.onreset_getter = function onreset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onreset_getter);
HTMLElement.prototype.__defineGetter__("onreset",dsf_tmp_context.onreset_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onresize",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onresize").get);
dsf_tmp_context.onresize_getter = function onresize(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onresize_getter);
HTMLElement.prototype.__defineGetter__("onresize",dsf_tmp_context.onresize_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onscroll",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onscroll").get);
dsf_tmp_context.onscroll_getter = function onscroll(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onscroll_getter);
HTMLElement.prototype.__defineGetter__("onscroll",dsf_tmp_context.onscroll_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onsecuritypolicyviolation",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onsecuritypolicyviolation").get);
dsf_tmp_context.onsecuritypolicyviolation_getter = function onsecuritypolicyviolation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_getter);
HTMLElement.prototype.__defineGetter__("onsecuritypolicyviolation",dsf_tmp_context.onsecuritypolicyviolation_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onseeked",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onseeked").get);
dsf_tmp_context.onseeked_getter = function onseeked(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onseeked_getter);
HTMLElement.prototype.__defineGetter__("onseeked",dsf_tmp_context.onseeked_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onseeking",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onseeking").get);
dsf_tmp_context.onseeking_getter = function onseeking(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onseeking_getter);
HTMLElement.prototype.__defineGetter__("onseeking",dsf_tmp_context.onseeking_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onselect",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onselect").get);
dsf_tmp_context.onselect_getter = function onselect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselect_getter);
HTMLElement.prototype.__defineGetter__("onselect",dsf_tmp_context.onselect_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onslotchange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onslotchange").get);
dsf_tmp_context.onslotchange_getter = function onslotchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onslotchange_getter);
HTMLElement.prototype.__defineGetter__("onslotchange",dsf_tmp_context.onslotchange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onstalled",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onstalled").get);
dsf_tmp_context.onstalled_getter = function onstalled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onstalled_getter);
HTMLElement.prototype.__defineGetter__("onstalled",dsf_tmp_context.onstalled_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onsubmit",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onsubmit").get);
dsf_tmp_context.onsubmit_getter = function onsubmit(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsubmit_getter);
HTMLElement.prototype.__defineGetter__("onsubmit",dsf_tmp_context.onsubmit_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onsuspend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onsuspend").get);
dsf_tmp_context.onsuspend_getter = function onsuspend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsuspend_getter);
HTMLElement.prototype.__defineGetter__("onsuspend",dsf_tmp_context.onsuspend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontimeupdate",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontimeupdate").get);
dsf_tmp_context.ontimeupdate_getter = function ontimeupdate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontimeupdate_getter);
HTMLElement.prototype.__defineGetter__("ontimeupdate",dsf_tmp_context.ontimeupdate_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontoggle",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontoggle").get);
dsf_tmp_context.ontoggle_getter = function ontoggle(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontoggle_getter);
HTMLElement.prototype.__defineGetter__("ontoggle",dsf_tmp_context.ontoggle_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onvolumechange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onvolumechange").get);
dsf_tmp_context.onvolumechange_getter = function onvolumechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onvolumechange_getter);
HTMLElement.prototype.__defineGetter__("onvolumechange",dsf_tmp_context.onvolumechange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwaiting",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwaiting").get);
dsf_tmp_context.onwaiting_getter = function onwaiting(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwaiting_getter);
HTMLElement.prototype.__defineGetter__("onwaiting",dsf_tmp_context.onwaiting_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwebkitanimationend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwebkitanimationend").get);
dsf_tmp_context.onwebkitanimationend_getter = function onwebkitanimationend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_getter);
HTMLElement.prototype.__defineGetter__("onwebkitanimationend",dsf_tmp_context.onwebkitanimationend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwebkitanimationiteration",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwebkitanimationiteration").get);
dsf_tmp_context.onwebkitanimationiteration_getter = function onwebkitanimationiteration(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_getter);
HTMLElement.prototype.__defineGetter__("onwebkitanimationiteration",dsf_tmp_context.onwebkitanimationiteration_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwebkitanimationstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwebkitanimationstart").get);
dsf_tmp_context.onwebkitanimationstart_getter = function onwebkitanimationstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_getter);
HTMLElement.prototype.__defineGetter__("onwebkitanimationstart",dsf_tmp_context.onwebkitanimationstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwebkittransitionend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwebkittransitionend").get);
dsf_tmp_context.onwebkittransitionend_getter = function onwebkittransitionend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_getter);
HTMLElement.prototype.__defineGetter__("onwebkittransitionend",dsf_tmp_context.onwebkittransitionend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onwheel",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onwheel").get);
dsf_tmp_context.onwheel_getter = function onwheel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwheel_getter);
HTMLElement.prototype.__defineGetter__("onwheel",dsf_tmp_context.onwheel_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onauxclick",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onauxclick").get);
dsf_tmp_context.onauxclick_getter = function onauxclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onauxclick_getter);
HTMLElement.prototype.__defineGetter__("onauxclick",dsf_tmp_context.onauxclick_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ongotpointercapture",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ongotpointercapture").get);
dsf_tmp_context.ongotpointercapture_getter = function ongotpointercapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_getter);
HTMLElement.prototype.__defineGetter__("ongotpointercapture",dsf_tmp_context.ongotpointercapture_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onlostpointercapture",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onlostpointercapture").get);
dsf_tmp_context.onlostpointercapture_getter = function onlostpointercapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_getter);
HTMLElement.prototype.__defineGetter__("onlostpointercapture",dsf_tmp_context.onlostpointercapture_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerdown",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerdown").get);
dsf_tmp_context.onpointerdown_getter = function onpointerdown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerdown_getter);
HTMLElement.prototype.__defineGetter__("onpointerdown",dsf_tmp_context.onpointerdown_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointermove",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointermove").get);
dsf_tmp_context.onpointermove_getter = function onpointermove(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointermove_getter);
HTMLElement.prototype.__defineGetter__("onpointermove",dsf_tmp_context.onpointermove_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerrawupdate",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerrawupdate").get);
dsf_tmp_context.onpointerrawupdate_getter = function onpointerrawupdate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_getter);
HTMLElement.prototype.__defineGetter__("onpointerrawupdate",dsf_tmp_context.onpointerrawupdate_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerup",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerup").get);
dsf_tmp_context.onpointerup_getter = function onpointerup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerup_getter);
HTMLElement.prototype.__defineGetter__("onpointerup",dsf_tmp_context.onpointerup_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointercancel",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointercancel").get);
dsf_tmp_context.onpointercancel_getter = function onpointercancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointercancel_getter);
HTMLElement.prototype.__defineGetter__("onpointercancel",dsf_tmp_context.onpointercancel_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerover",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerover").get);
dsf_tmp_context.onpointerover_getter = function onpointerover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerover_getter);
HTMLElement.prototype.__defineGetter__("onpointerover",dsf_tmp_context.onpointerover_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerout",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerout").get);
dsf_tmp_context.onpointerout_getter = function onpointerout(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerout_getter);
HTMLElement.prototype.__defineGetter__("onpointerout",dsf_tmp_context.onpointerout_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerenter",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerenter").get);
dsf_tmp_context.onpointerenter_getter = function onpointerenter(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerenter_getter);
HTMLElement.prototype.__defineGetter__("onpointerenter",dsf_tmp_context.onpointerenter_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpointerleave",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpointerleave").get);
dsf_tmp_context.onpointerleave_getter = function onpointerleave(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerleave_getter);
HTMLElement.prototype.__defineGetter__("onpointerleave",dsf_tmp_context.onpointerleave_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onselectstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onselectstart").get);
dsf_tmp_context.onselectstart_getter = function onselectstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselectstart_getter);
HTMLElement.prototype.__defineGetter__("onselectstart",dsf_tmp_context.onselectstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onselectionchange",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onselectionchange").get);
dsf_tmp_context.onselectionchange_getter = function onselectionchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselectionchange_getter);
HTMLElement.prototype.__defineGetter__("onselectionchange",dsf_tmp_context.onselectionchange_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onanimationend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onanimationend").get);
dsf_tmp_context.onanimationend_getter = function onanimationend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationend_getter);
HTMLElement.prototype.__defineGetter__("onanimationend",dsf_tmp_context.onanimationend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onanimationiteration",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onanimationiteration").get);
dsf_tmp_context.onanimationiteration_getter = function onanimationiteration(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationiteration_getter);
HTMLElement.prototype.__defineGetter__("onanimationiteration",dsf_tmp_context.onanimationiteration_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onanimationstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onanimationstart").get);
dsf_tmp_context.onanimationstart_getter = function onanimationstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationstart_getter);
HTMLElement.prototype.__defineGetter__("onanimationstart",dsf_tmp_context.onanimationstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontransitionrun",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontransitionrun").get);
dsf_tmp_context.ontransitionrun_getter = function ontransitionrun(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionrun_getter);
HTMLElement.prototype.__defineGetter__("ontransitionrun",dsf_tmp_context.ontransitionrun_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontransitionstart",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontransitionstart").get);
dsf_tmp_context.ontransitionstart_getter = function ontransitionstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionstart_getter);
HTMLElement.prototype.__defineGetter__("ontransitionstart",dsf_tmp_context.ontransitionstart_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontransitionend",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontransitionend").get);
dsf_tmp_context.ontransitionend_getter = function ontransitionend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionend_getter);
HTMLElement.prototype.__defineGetter__("ontransitionend",dsf_tmp_context.ontransitionend_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("ontransitioncancel",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"ontransitioncancel").get);
dsf_tmp_context.ontransitioncancel_getter = function ontransitioncancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_getter);
HTMLElement.prototype.__defineGetter__("ontransitioncancel",dsf_tmp_context.ontransitioncancel_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncopy",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncopy").get);
dsf_tmp_context.oncopy_getter = function oncopy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncopy_getter);
HTMLElement.prototype.__defineGetter__("oncopy",dsf_tmp_context.oncopy_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("oncut",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"oncut").get);
dsf_tmp_context.oncut_getter = function oncut(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncut_getter);
HTMLElement.prototype.__defineGetter__("oncut",dsf_tmp_context.oncut_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onpaste",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onpaste").get);
dsf_tmp_context.onpaste_getter = function onpaste(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpaste_getter);
HTMLElement.prototype.__defineGetter__("onpaste",dsf_tmp_context.onpaste_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("dataset",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"dataset").get);
dsf_tmp_context.dataset_getter = function dataset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.dataset_getter);
HTMLElement.prototype.__defineGetter__("dataset",dsf_tmp_context.dataset_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("nonce",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"nonce").get);
dsf_tmp_context.nonce_getter = function nonce(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nonce_getter);
HTMLElement.prototype.__defineGetter__("nonce",dsf_tmp_context.nonce_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("autofocus",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"autofocus").get);
dsf_tmp_context.autofocus_getter = function autofocus(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.autofocus_getter);
HTMLElement.prototype.__defineGetter__("autofocus",dsf_tmp_context.autofocus_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("tabIndex",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"tabIndex").get);
dsf_tmp_context.tabIndex_getter = function tabIndex(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.tabIndex_getter);
HTMLElement.prototype.__defineGetter__("tabIndex",dsf_tmp_context.tabIndex_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("style",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"style").get);
dsf_tmp_context.style_getter = function style(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.style_getter);
HTMLElement.prototype.__defineGetter__("style",dsf_tmp_context.style_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("attributeStyleMap",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"attributeStyleMap").get);
dsf_tmp_context.attributeStyleMap_getter = function attributeStyleMap(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.attributeStyleMap_getter);
HTMLElement.prototype.__defineGetter__("attributeStyleMap",dsf_tmp_context.attributeStyleMap_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("inert",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"inert").get);
dsf_tmp_context.inert_getter = function inert(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.inert_getter);
HTMLElement.prototype.__defineGetter__("inert",dsf_tmp_context.inert_getter);//393

catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("onbeforematch",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onbeforematch").get);
dsf_tmp_context.onbeforematch_getter = function onbeforematch(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforematch_getter);
HTMLElement.prototype.__defineGetter__("onbeforematch",dsf_tmp_context.onbeforematch_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.HTMLElement.__function_attachInternals = Object.getOwnPropertyDescriptor(HTMLElement.prototype,"attachInternals").value; catvm.safefunction(catvm.memory.variable.HTMLElement.__function_attachInternals);
catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("attachInternals",function attachInternals(){return catvm.memory.variable.HTMLElement.__function_attachInternals;});
HTMLElement.prototype["attachInternals"] = function attachInternals(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLElement.prototype["attachInternals"]);//407

catvm.memory.variable.HTMLElement.__function_blur = Object.getOwnPropertyDescriptor(HTMLElement.prototype,"blur").value; catvm.safefunction(catvm.memory.variable.HTMLElement.__function_blur);
catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("blur",function blur(){return catvm.memory.variable.HTMLElement.__function_blur;});
HTMLElement.prototype["blur"] = function blur(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLElement.prototype["blur"]);//407

catvm.memory.variable.HTMLElement.__function_click = Object.getOwnPropertyDescriptor(HTMLElement.prototype,"click").value; catvm.safefunction(catvm.memory.variable.HTMLElement.__function_click);
catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("click",function click(){return catvm.memory.variable.HTMLElement.__function_click;});
HTMLElement.prototype["click"] = function click(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLElement.prototype["click"]);//407

catvm.memory.variable.HTMLElement.__function_focus = Object.getOwnPropertyDescriptor(HTMLElement.prototype,"focus").value; catvm.safefunction(catvm.memory.variable.HTMLElement.__function_focus);
catvm.memory.variable.HTMLElement.htmlElement_obj.__defineGetter__("focus",function focus(){return catvm.memory.variable.HTMLElement.__function_focus;});
HTMLElement.prototype["focus"] = function focus(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLElement.prototype["focus"]);//407

//======	invocation error func code end	======

catvm.memory.htmlelements["i"] = function () {
    var i = catvm.memory.variable.HTMLElement.htmlElement_obj;
    //////////////////////////////////////////
//    a.href = 'https://support.google.com/chrome/?p=incognito';
    /////////////////////////
    return i;
}




HTMLElement = catvm.proxy(HTMLElement);

if(catvm.memory.config.framework_debugger){debugger;}

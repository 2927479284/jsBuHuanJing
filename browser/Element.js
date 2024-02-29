var dsf_tmp_context = catvm.memory.variable.Element = {};
var Element = function Element() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Element);//14


//======	symbol code start	======
Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
		value: "Element",
	    configurable: true
	},
    [Symbol.unscopables]: {
		value: {"slot":true,"popUp":true,"prepend":true,"append":true,"replaceChildren":true,"before":true,"after":true,"replaceWith":true,"remove":true},
	    configurable: true
	}
});//95
//======	symbol code end	======
Element.__proto__ = Node;
Element.prototype.__proto__ = Node.prototype;

catvm.memory.variable.Element.element_obj = {};
catvm.memory.variable.Element.element_obj.__proto__ = Element.prototype;

//======	data descriptor func code start	======
Element.prototype["after"] = function after(){debugger;}; catvm.safefunction(Element.prototype["after"]);//205
Element.prototype["animate"] = function animate(){debugger;}; catvm.safefunction(Element.prototype["animate"]);//205
Element.prototype["append"] = function append(){debugger;}; catvm.safefunction(Element.prototype["append"]);//205
Element.prototype["attachShadow"] = function attachShadow(){debugger;}; catvm.safefunction(Element.prototype["attachShadow"]);//205
Element.prototype["before"] = function before(){debugger;}; catvm.safefunction(Element.prototype["before"]);//205
Element.prototype["closest"] = function closest(){debugger;}; catvm.safefunction(Element.prototype["closest"]);//205
Element.prototype["computedStyleMap"] = function computedStyleMap(){debugger;}; catvm.safefunction(Element.prototype["computedStyleMap"]);//205
Element.prototype["getAttribute"] = function getAttribute(){debugger;}; catvm.safefunction(Element.prototype["getAttribute"]);//205
Element.prototype["getAttributeNS"] = function getAttributeNS(){debugger;}; catvm.safefunction(Element.prototype["getAttributeNS"]);//205
Element.prototype["getAttributeNames"] = function getAttributeNames(){debugger;}; catvm.safefunction(Element.prototype["getAttributeNames"]);//205
Element.prototype["getAttributeNode"] = function getAttributeNode(){debugger;}; catvm.safefunction(Element.prototype["getAttributeNode"]);//205
Element.prototype["getAttributeNodeNS"] = function getAttributeNodeNS(){debugger;}; catvm.safefunction(Element.prototype["getAttributeNodeNS"]);//205
Element.prototype["getBoundingClientRect"] = function getBoundingClientRect(){debugger;}; catvm.safefunction(Element.prototype["getBoundingClientRect"]);//205
Element.prototype["getClientRects"] = function getClientRects(){debugger;}; catvm.safefunction(Element.prototype["getClientRects"]);//205
Element.prototype["getElementsByClassName"] = function getElementsByClassName(){debugger;}; catvm.safefunction(Element.prototype["getElementsByClassName"]);//205
Element.prototype["getElementsByTagName"] = function getElementsByTagName(){debugger;return window.document.getElementsByTagName(arguments[0]);}; catvm.safefunction(Element.prototype["getElementsByTagName"]);//205
Element.prototype["getElementsByTagNameNS"] = function getElementsByTagNameNS(){debugger;}; catvm.safefunction(Element.prototype["getElementsByTagNameNS"]);//205
Element.prototype["getInnerHTML"] = function getInnerHTML(){debugger;}; catvm.safefunction(Element.prototype["getInnerHTML"]);//205
Element.prototype["hasAttribute"] = function hasAttribute(){debugger;}; catvm.safefunction(Element.prototype["hasAttribute"]);//205
Element.prototype["hasAttributeNS"] = function hasAttributeNS(){debugger;}; catvm.safefunction(Element.prototype["hasAttributeNS"]);//205
Element.prototype["hasAttributes"] = function hasAttributes(){debugger;}; catvm.safefunction(Element.prototype["hasAttributes"]);//205
Element.prototype["hasPointerCapture"] = function hasPointerCapture(){debugger;}; catvm.safefunction(Element.prototype["hasPointerCapture"]);//205
Element.prototype["insertAdjacentElement"] = function insertAdjacentElement(){debugger;}; catvm.safefunction(Element.prototype["insertAdjacentElement"]);//205
Element.prototype["insertAdjacentHTML"] = function insertAdjacentHTML(){debugger;}; catvm.safefunction(Element.prototype["insertAdjacentHTML"]);//205
Element.prototype["insertAdjacentText"] = function insertAdjacentText(){debugger;}; catvm.safefunction(Element.prototype["insertAdjacentText"]);//205
Element.prototype["matches"] = function matches(){debugger;}; catvm.safefunction(Element.prototype["matches"]);//205
Element.prototype["prepend"] = function prepend(){debugger;}; catvm.safefunction(Element.prototype["prepend"]);//205
Element.prototype["querySelector"] = function querySelector(){debugger;}; catvm.safefunction(Element.prototype["querySelector"]);//205
Element.prototype["querySelectorAll"] = function querySelectorAll(){debugger;}; catvm.safefunction(Element.prototype["querySelectorAll"]);//205
Element.prototype["releasePointerCapture"] = function releasePointerCapture(){debugger;}; catvm.safefunction(Element.prototype["releasePointerCapture"]);//205
Element.prototype["remove"] = function remove(){debugger;}; catvm.safefunction(Element.prototype["remove"]);//205
Element.prototype["removeAttribute"] = function removeAttribute(){debugger;}; catvm.safefunction(Element.prototype["removeAttribute"]);//205
Element.prototype["removeAttributeNS"] = function removeAttributeNS(){debugger;}; catvm.safefunction(Element.prototype["removeAttributeNS"]);//205
Element.prototype["removeAttributeNode"] = function removeAttributeNode(){debugger;}; catvm.safefunction(Element.prototype["removeAttributeNode"]);//205
Element.prototype["replaceChildren"] = function replaceChildren(){debugger;}; catvm.safefunction(Element.prototype["replaceChildren"]);//205
Element.prototype["replaceWith"] = function replaceWith(){debugger;}; catvm.safefunction(Element.prototype["replaceWith"]);//205
Element.prototype["requestFullscreen"] = function requestFullscreen(){debugger;}; catvm.safefunction(Element.prototype["requestFullscreen"]);//205
Element.prototype["requestPointerLock"] = function requestPointerLock(){debugger;}; catvm.safefunction(Element.prototype["requestPointerLock"]);//205
Element.prototype["scroll"] = function scroll(){debugger;}; catvm.safefunction(Element.prototype["scroll"]);//205
Element.prototype["scrollBy"] = function scrollBy(){debugger;}; catvm.safefunction(Element.prototype["scrollBy"]);//205
Element.prototype["scrollIntoView"] = function scrollIntoView(){debugger;}; catvm.safefunction(Element.prototype["scrollIntoView"]);//205
Element.prototype["scrollIntoViewIfNeeded"] = function scrollIntoViewIfNeeded(){debugger;}; catvm.safefunction(Element.prototype["scrollIntoViewIfNeeded"]);//205
Element.prototype["scrollTo"] = function scrollTo(){debugger;}; catvm.safefunction(Element.prototype["scrollTo"]);//205
Element.prototype["setAttribute"] = function setAttribute(){debugger;}; catvm.safefunction(Element.prototype["setAttribute"]);//205
Element.prototype["setAttributeNS"] = function setAttributeNS(){debugger;}; catvm.safefunction(Element.prototype["setAttributeNS"]);//205
Element.prototype["setAttributeNode"] = function setAttributeNode(){debugger;}; catvm.safefunction(Element.prototype["setAttributeNode"]);//205
Element.prototype["setAttributeNodeNS"] = function setAttributeNodeNS(){debugger;}; catvm.safefunction(Element.prototype["setAttributeNodeNS"]);//205
Element.prototype["setPointerCapture"] = function setPointerCapture(){debugger;}; catvm.safefunction(Element.prototype["setPointerCapture"]);//205
Element.prototype["toggleAttribute"] = function toggleAttribute(){debugger;}; catvm.safefunction(Element.prototype["toggleAttribute"]);//205
Element.prototype["webkitMatchesSelector"] = function webkitMatchesSelector(){debugger;}; catvm.safefunction(Element.prototype["webkitMatchesSelector"]);//205
Element.prototype["webkitRequestFullScreen"] = function webkitRequestFullScreen(){debugger;}; catvm.safefunction(Element.prototype["webkitRequestFullScreen"]);//205
Element.prototype["webkitRequestFullscreen"] = function webkitRequestFullscreen(){debugger;}; catvm.safefunction(Element.prototype["webkitRequestFullscreen"]);//205
Element.prototype["checkVisibility"] = function checkVisibility(){debugger;}; catvm.safefunction(Element.prototype["checkVisibility"]);//205
Element.prototype["getAnimations"] = function getAnimations(){debugger;}; catvm.safefunction(Element.prototype["getAnimations"]);//205
Element.prototype["setHTML"] = function setHTML(){debugger;}; catvm.safefunction(Element.prototype["setHTML"]);//205
//======	data descriptor func code end	======




//======	access descriptor code start	======

dsf_tmp_context.namespaceURI_getter = function namespaceURI() {debugger;}; catvm.safefunction(dsf_tmp_context.namespaceURI_getter);//285
Object.defineProperty(dsf_tmp_context.namespaceURI_getter, "name", {
    value: "get namespaceURI",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "namespaceURI", {
	get: dsf_tmp_context.namespaceURI_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.prefix_getter = function prefix() {debugger;}; catvm.safefunction(dsf_tmp_context.prefix_getter);//285
Object.defineProperty(dsf_tmp_context.prefix_getter, "name", {
    value: "get prefix",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "prefix", {
	get: dsf_tmp_context.prefix_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.localName_getter = function localName() {debugger;}; catvm.safefunction(dsf_tmp_context.localName_getter);//285
Object.defineProperty(dsf_tmp_context.localName_getter, "name", {
    value: "get localName",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "localName", {
	get: dsf_tmp_context.localName_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.tagName_getter = function tagName() {debugger;}; catvm.safefunction(dsf_tmp_context.tagName_getter);//285
Object.defineProperty(dsf_tmp_context.tagName_getter, "name", {
    value: "get tagName",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "tagName", {
	get: dsf_tmp_context.tagName_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.id_getter = function id() {debugger;}; catvm.safefunction(dsf_tmp_context.id_getter);//285
Object.defineProperty(dsf_tmp_context.id_getter, "name", {
    value: "get id",
    configurable: true
});//291
dsf_tmp_context.id_setter = function id() {debugger;}; catvm.safefunction(dsf_tmp_context.id_setter);//296
Object.defineProperty(dsf_tmp_context.id_setter, "name", {
value: "set id",
configurable: true
});//301

Object.defineProperty(Element.prototype, "id", {
	get: dsf_tmp_context.id_getter,
	set: dsf_tmp_context.id_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.className_getter = function className() {debugger;}; catvm.safefunction(dsf_tmp_context.className_getter);//285
Object.defineProperty(dsf_tmp_context.className_getter, "name", {
    value: "get className",
    configurable: true
});//291
dsf_tmp_context.className_setter = function className() {debugger;}; catvm.safefunction(dsf_tmp_context.className_setter);//296
Object.defineProperty(dsf_tmp_context.className_setter, "name", {
value: "set className",
configurable: true
});//301

Object.defineProperty(Element.prototype, "className", {
	get: dsf_tmp_context.className_getter,
	set: dsf_tmp_context.className_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.classList_getter = function classList() {debugger;}; catvm.safefunction(dsf_tmp_context.classList_getter);//285
Object.defineProperty(dsf_tmp_context.classList_getter, "name", {
    value: "get classList",
    configurable: true
});//291
dsf_tmp_context.classList_setter = function classList() {debugger;}; catvm.safefunction(dsf_tmp_context.classList_setter);//296
Object.defineProperty(dsf_tmp_context.classList_setter, "name", {
value: "set classList",
configurable: true
});//301

Object.defineProperty(Element.prototype, "classList", {
	get: dsf_tmp_context.classList_getter,
	set: dsf_tmp_context.classList_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.slot_getter = function slot() {debugger;}; catvm.safefunction(dsf_tmp_context.slot_getter);//285
Object.defineProperty(dsf_tmp_context.slot_getter, "name", {
    value: "get slot",
    configurable: true
});//291
dsf_tmp_context.slot_setter = function slot() {debugger;}; catvm.safefunction(dsf_tmp_context.slot_setter);//296
Object.defineProperty(dsf_tmp_context.slot_setter, "name", {
value: "set slot",
configurable: true
});//301

Object.defineProperty(Element.prototype, "slot", {
	get: dsf_tmp_context.slot_getter,
	set: dsf_tmp_context.slot_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.attributes_getter = function attributes() {debugger;}; catvm.safefunction(dsf_tmp_context.attributes_getter);//285
Object.defineProperty(dsf_tmp_context.attributes_getter, "name", {
    value: "get attributes",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "attributes", {
	get: dsf_tmp_context.attributes_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.shadowRoot_getter = function shadowRoot() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowRoot_getter);//285
Object.defineProperty(dsf_tmp_context.shadowRoot_getter, "name", {
    value: "get shadowRoot",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "shadowRoot", {
	get: dsf_tmp_context.shadowRoot_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.part_getter = function part() {debugger;}; catvm.safefunction(dsf_tmp_context.part_getter);//285
Object.defineProperty(dsf_tmp_context.part_getter, "name", {
    value: "get part",
    configurable: true
});//291
dsf_tmp_context.part_setter = function part() {debugger;}; catvm.safefunction(dsf_tmp_context.part_setter);//296
Object.defineProperty(dsf_tmp_context.part_setter, "name", {
value: "set part",
configurable: true
});//301

Object.defineProperty(Element.prototype, "part", {
	get: dsf_tmp_context.part_getter,
	set: dsf_tmp_context.part_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.assignedSlot_getter = function assignedSlot() {debugger;}; catvm.safefunction(dsf_tmp_context.assignedSlot_getter);//285
Object.defineProperty(dsf_tmp_context.assignedSlot_getter, "name", {
    value: "get assignedSlot",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "assignedSlot", {
	get: dsf_tmp_context.assignedSlot_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.innerHTML_getter = function innerHTML() {debugger;}; catvm.safefunction(dsf_tmp_context.innerHTML_getter);//285
Object.defineProperty(dsf_tmp_context.innerHTML_getter, "name", {
    value: "get innerHTML",
    configurable: true
});//291
dsf_tmp_context.innerHTML_setter = function innerHTML() {debugger;}; catvm.safefunction(dsf_tmp_context.innerHTML_setter);//296
Object.defineProperty(dsf_tmp_context.innerHTML_setter, "name", {
value: "set innerHTML",
configurable: true
});//301

Object.defineProperty(Element.prototype, "innerHTML", {
	get: dsf_tmp_context.innerHTML_getter,
	set: dsf_tmp_context.innerHTML_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.outerHTML_getter = function outerHTML() {debugger;}; catvm.safefunction(dsf_tmp_context.outerHTML_getter);//285
Object.defineProperty(dsf_tmp_context.outerHTML_getter, "name", {
    value: "get outerHTML",
    configurable: true
});//291
dsf_tmp_context.outerHTML_setter = function outerHTML() {debugger;}; catvm.safefunction(dsf_tmp_context.outerHTML_setter);//296
Object.defineProperty(dsf_tmp_context.outerHTML_setter, "name", {
value: "set outerHTML",
configurable: true
});//301

Object.defineProperty(Element.prototype, "outerHTML", {
	get: dsf_tmp_context.outerHTML_getter,
	set: dsf_tmp_context.outerHTML_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.scrollTop_getter = function scrollTop() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollTop_getter);//285
Object.defineProperty(dsf_tmp_context.scrollTop_getter, "name", {
    value: "get scrollTop",
    configurable: true
});//291
dsf_tmp_context.scrollTop_setter = function scrollTop() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollTop_setter);//296
Object.defineProperty(dsf_tmp_context.scrollTop_setter, "name", {
value: "set scrollTop",
configurable: true
});//301

Object.defineProperty(Element.prototype, "scrollTop", {
	get: dsf_tmp_context.scrollTop_getter,
	set: dsf_tmp_context.scrollTop_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.scrollLeft_getter = function scrollLeft() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollLeft_getter);//285
Object.defineProperty(dsf_tmp_context.scrollLeft_getter, "name", {
    value: "get scrollLeft",
    configurable: true
});//291
dsf_tmp_context.scrollLeft_setter = function scrollLeft() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollLeft_setter);//296
Object.defineProperty(dsf_tmp_context.scrollLeft_setter, "name", {
value: "set scrollLeft",
configurable: true
});//301

Object.defineProperty(Element.prototype, "scrollLeft", {
	get: dsf_tmp_context.scrollLeft_getter,
	set: dsf_tmp_context.scrollLeft_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.scrollWidth_getter = function scrollWidth() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollWidth_getter);//285
Object.defineProperty(dsf_tmp_context.scrollWidth_getter, "name", {
    value: "get scrollWidth",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "scrollWidth", {
	get: dsf_tmp_context.scrollWidth_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.scrollHeight_getter = function scrollHeight() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollHeight_getter);//285
Object.defineProperty(dsf_tmp_context.scrollHeight_getter, "name", {
    value: "get scrollHeight",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "scrollHeight", {
	get: dsf_tmp_context.scrollHeight_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.clientTop_getter = function clientTop() {debugger;}; catvm.safefunction(dsf_tmp_context.clientTop_getter);//285
Object.defineProperty(dsf_tmp_context.clientTop_getter, "name", {
    value: "get clientTop",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "clientTop", {
	get: dsf_tmp_context.clientTop_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.clientLeft_getter = function clientLeft() {debugger;}; catvm.safefunction(dsf_tmp_context.clientLeft_getter);//285
Object.defineProperty(dsf_tmp_context.clientLeft_getter, "name", {
    value: "get clientLeft",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "clientLeft", {
	get: dsf_tmp_context.clientLeft_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.clientWidth_getter = function clientWidth() {debugger;}; catvm.safefunction(dsf_tmp_context.clientWidth_getter);//285
Object.defineProperty(dsf_tmp_context.clientWidth_getter, "name", {
    value: "get clientWidth",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "clientWidth", {
	get: dsf_tmp_context.clientWidth_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.clientHeight_getter = function clientHeight() {debugger;}; catvm.safefunction(dsf_tmp_context.clientHeight_getter);//285
Object.defineProperty(dsf_tmp_context.clientHeight_getter, "name", {
    value: "get clientHeight",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "clientHeight", {
	get: dsf_tmp_context.clientHeight_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforecopy_getter = function onbeforecopy() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecopy_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforecopy_getter, "name", {
    value: "get onbeforecopy",
    configurable: true
});//291
dsf_tmp_context.onbeforecopy_setter = function onbeforecopy() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecopy_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforecopy_setter, "name", {
value: "set onbeforecopy",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onbeforecopy", {
	get: dsf_tmp_context.onbeforecopy_getter,
	set: dsf_tmp_context.onbeforecopy_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforecut_getter = function onbeforecut() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecut_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforecut_getter, "name", {
    value: "get onbeforecut",
    configurable: true
});//291
dsf_tmp_context.onbeforecut_setter = function onbeforecut() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecut_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforecut_setter, "name", {
value: "set onbeforecut",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onbeforecut", {
	get: dsf_tmp_context.onbeforecut_getter,
	set: dsf_tmp_context.onbeforecut_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onbeforepaste_getter = function onbeforepaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforepaste_getter);//285
Object.defineProperty(dsf_tmp_context.onbeforepaste_getter, "name", {
    value: "get onbeforepaste",
    configurable: true
});//291
dsf_tmp_context.onbeforepaste_setter = function onbeforepaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforepaste_setter);//296
Object.defineProperty(dsf_tmp_context.onbeforepaste_setter, "name", {
value: "set onbeforepaste",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onbeforepaste", {
	get: dsf_tmp_context.onbeforepaste_getter,
	set: dsf_tmp_context.onbeforepaste_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onsearch_getter = function onsearch() {debugger;}; catvm.safefunction(dsf_tmp_context.onsearch_getter);//285
Object.defineProperty(dsf_tmp_context.onsearch_getter, "name", {
    value: "get onsearch",
    configurable: true
});//291
dsf_tmp_context.onsearch_setter = function onsearch() {debugger;}; catvm.safefunction(dsf_tmp_context.onsearch_setter);//296
Object.defineProperty(dsf_tmp_context.onsearch_setter, "name", {
value: "set onsearch",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onsearch", {
	get: dsf_tmp_context.onsearch_getter,
	set: dsf_tmp_context.onsearch_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.elementTiming_getter = function elementTiming() {debugger;}; catvm.safefunction(dsf_tmp_context.elementTiming_getter);//285
Object.defineProperty(dsf_tmp_context.elementTiming_getter, "name", {
    value: "get elementTiming",
    configurable: true
});//291
dsf_tmp_context.elementTiming_setter = function elementTiming() {debugger;}; catvm.safefunction(dsf_tmp_context.elementTiming_setter);//296
Object.defineProperty(dsf_tmp_context.elementTiming_setter, "name", {
value: "set elementTiming",
configurable: true
});//301

Object.defineProperty(Element.prototype, "elementTiming", {
	get: dsf_tmp_context.elementTiming_getter,
	set: dsf_tmp_context.elementTiming_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onfullscreenchange_getter = function onfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_getter);//285
Object.defineProperty(dsf_tmp_context.onfullscreenchange_getter, "name", {
    value: "get onfullscreenchange",
    configurable: true
});//291
dsf_tmp_context.onfullscreenchange_setter = function onfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_setter);//296
Object.defineProperty(dsf_tmp_context.onfullscreenchange_setter, "name", {
value: "set onfullscreenchange",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onfullscreenchange", {
	get: dsf_tmp_context.onfullscreenchange_getter,
	set: dsf_tmp_context.onfullscreenchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onfullscreenerror_getter = function onfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_getter);//285
Object.defineProperty(dsf_tmp_context.onfullscreenerror_getter, "name", {
    value: "get onfullscreenerror",
    configurable: true
});//291
dsf_tmp_context.onfullscreenerror_setter = function onfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_setter);//296
Object.defineProperty(dsf_tmp_context.onfullscreenerror_setter, "name", {
value: "set onfullscreenerror",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onfullscreenerror", {
	get: dsf_tmp_context.onfullscreenerror_getter,
	set: dsf_tmp_context.onfullscreenerror_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkitfullscreenchange_getter = function onwebkitfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenchange_getter, "name", {
    value: "get onwebkitfullscreenchange",
    configurable: true
});//291
dsf_tmp_context.onwebkitfullscreenchange_setter = function onwebkitfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenchange_setter, "name", {
value: "set onwebkitfullscreenchange",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
	get: dsf_tmp_context.onwebkitfullscreenchange_getter,
	set: dsf_tmp_context.onwebkitfullscreenchange_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.onwebkitfullscreenerror_getter = function onwebkitfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_getter);//285
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenerror_getter, "name", {
    value: "get onwebkitfullscreenerror",
    configurable: true
});//291
dsf_tmp_context.onwebkitfullscreenerror_setter = function onwebkitfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_setter);//296
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenerror_setter, "name", {
value: "set onwebkitfullscreenerror",
configurable: true
});//301

Object.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
	get: dsf_tmp_context.onwebkitfullscreenerror_getter,
	set: dsf_tmp_context.onwebkitfullscreenerror_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.role_getter = function role() {debugger;}; catvm.safefunction(dsf_tmp_context.role_getter);//285
Object.defineProperty(dsf_tmp_context.role_getter, "name", {
    value: "get role",
    configurable: true
});//291
dsf_tmp_context.role_setter = function role() {debugger;}; catvm.safefunction(dsf_tmp_context.role_setter);//296
Object.defineProperty(dsf_tmp_context.role_setter, "name", {
value: "set role",
configurable: true
});//301

Object.defineProperty(Element.prototype, "role", {
	get: dsf_tmp_context.role_getter,
	set: dsf_tmp_context.role_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaAtomic_getter = function ariaAtomic() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaAtomic_getter);//285
Object.defineProperty(dsf_tmp_context.ariaAtomic_getter, "name", {
    value: "get ariaAtomic",
    configurable: true
});//291
dsf_tmp_context.ariaAtomic_setter = function ariaAtomic() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaAtomic_setter);//296
Object.defineProperty(dsf_tmp_context.ariaAtomic_setter, "name", {
value: "set ariaAtomic",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaAtomic", {
	get: dsf_tmp_context.ariaAtomic_getter,
	set: dsf_tmp_context.ariaAtomic_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaAutoComplete_getter = function ariaAutoComplete() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaAutoComplete_getter);//285
Object.defineProperty(dsf_tmp_context.ariaAutoComplete_getter, "name", {
    value: "get ariaAutoComplete",
    configurable: true
});//291
dsf_tmp_context.ariaAutoComplete_setter = function ariaAutoComplete() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaAutoComplete_setter);//296
Object.defineProperty(dsf_tmp_context.ariaAutoComplete_setter, "name", {
value: "set ariaAutoComplete",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaAutoComplete", {
	get: dsf_tmp_context.ariaAutoComplete_getter,
	set: dsf_tmp_context.ariaAutoComplete_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaBusy_getter = function ariaBusy() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaBusy_getter);//285
Object.defineProperty(dsf_tmp_context.ariaBusy_getter, "name", {
    value: "get ariaBusy",
    configurable: true
});//291
dsf_tmp_context.ariaBusy_setter = function ariaBusy() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaBusy_setter);//296
Object.defineProperty(dsf_tmp_context.ariaBusy_setter, "name", {
value: "set ariaBusy",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaBusy", {
	get: dsf_tmp_context.ariaBusy_getter,
	set: dsf_tmp_context.ariaBusy_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaChecked_getter = function ariaChecked() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaChecked_getter);//285
Object.defineProperty(dsf_tmp_context.ariaChecked_getter, "name", {
    value: "get ariaChecked",
    configurable: true
});//291
dsf_tmp_context.ariaChecked_setter = function ariaChecked() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaChecked_setter);//296
Object.defineProperty(dsf_tmp_context.ariaChecked_setter, "name", {
value: "set ariaChecked",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaChecked", {
	get: dsf_tmp_context.ariaChecked_getter,
	set: dsf_tmp_context.ariaChecked_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaColCount_getter = function ariaColCount() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColCount_getter);//285
Object.defineProperty(dsf_tmp_context.ariaColCount_getter, "name", {
    value: "get ariaColCount",
    configurable: true
});//291
dsf_tmp_context.ariaColCount_setter = function ariaColCount() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColCount_setter);//296
Object.defineProperty(dsf_tmp_context.ariaColCount_setter, "name", {
value: "set ariaColCount",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaColCount", {
	get: dsf_tmp_context.ariaColCount_getter,
	set: dsf_tmp_context.ariaColCount_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaColIndex_getter = function ariaColIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColIndex_getter);//285
Object.defineProperty(dsf_tmp_context.ariaColIndex_getter, "name", {
    value: "get ariaColIndex",
    configurable: true
});//291
dsf_tmp_context.ariaColIndex_setter = function ariaColIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColIndex_setter);//296
Object.defineProperty(dsf_tmp_context.ariaColIndex_setter, "name", {
value: "set ariaColIndex",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaColIndex", {
	get: dsf_tmp_context.ariaColIndex_getter,
	set: dsf_tmp_context.ariaColIndex_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaColSpan_getter = function ariaColSpan() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColSpan_getter);//285
Object.defineProperty(dsf_tmp_context.ariaColSpan_getter, "name", {
    value: "get ariaColSpan",
    configurable: true
});//291
dsf_tmp_context.ariaColSpan_setter = function ariaColSpan() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaColSpan_setter);//296
Object.defineProperty(dsf_tmp_context.ariaColSpan_setter, "name", {
value: "set ariaColSpan",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaColSpan", {
	get: dsf_tmp_context.ariaColSpan_getter,
	set: dsf_tmp_context.ariaColSpan_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaCurrent_getter = function ariaCurrent() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaCurrent_getter);//285
Object.defineProperty(dsf_tmp_context.ariaCurrent_getter, "name", {
    value: "get ariaCurrent",
    configurable: true
});//291
dsf_tmp_context.ariaCurrent_setter = function ariaCurrent() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaCurrent_setter);//296
Object.defineProperty(dsf_tmp_context.ariaCurrent_setter, "name", {
value: "set ariaCurrent",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaCurrent", {
	get: dsf_tmp_context.ariaCurrent_getter,
	set: dsf_tmp_context.ariaCurrent_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaDescription_getter = function ariaDescription() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaDescription_getter);//285
Object.defineProperty(dsf_tmp_context.ariaDescription_getter, "name", {
    value: "get ariaDescription",
    configurable: true
});//291
dsf_tmp_context.ariaDescription_setter = function ariaDescription() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaDescription_setter);//296
Object.defineProperty(dsf_tmp_context.ariaDescription_setter, "name", {
value: "set ariaDescription",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaDescription", {
	get: dsf_tmp_context.ariaDescription_getter,
	set: dsf_tmp_context.ariaDescription_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaDisabled_getter = function ariaDisabled() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaDisabled_getter);//285
Object.defineProperty(dsf_tmp_context.ariaDisabled_getter, "name", {
    value: "get ariaDisabled",
    configurable: true
});//291
dsf_tmp_context.ariaDisabled_setter = function ariaDisabled() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaDisabled_setter);//296
Object.defineProperty(dsf_tmp_context.ariaDisabled_setter, "name", {
value: "set ariaDisabled",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaDisabled", {
	get: dsf_tmp_context.ariaDisabled_getter,
	set: dsf_tmp_context.ariaDisabled_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaExpanded_getter = function ariaExpanded() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaExpanded_getter);//285
Object.defineProperty(dsf_tmp_context.ariaExpanded_getter, "name", {
    value: "get ariaExpanded",
    configurable: true
});//291
dsf_tmp_context.ariaExpanded_setter = function ariaExpanded() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaExpanded_setter);//296
Object.defineProperty(dsf_tmp_context.ariaExpanded_setter, "name", {
value: "set ariaExpanded",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaExpanded", {
	get: dsf_tmp_context.ariaExpanded_getter,
	set: dsf_tmp_context.ariaExpanded_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaHasPopup_getter = function ariaHasPopup() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaHasPopup_getter);//285
Object.defineProperty(dsf_tmp_context.ariaHasPopup_getter, "name", {
    value: "get ariaHasPopup",
    configurable: true
});//291
dsf_tmp_context.ariaHasPopup_setter = function ariaHasPopup() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaHasPopup_setter);//296
Object.defineProperty(dsf_tmp_context.ariaHasPopup_setter, "name", {
value: "set ariaHasPopup",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaHasPopup", {
	get: dsf_tmp_context.ariaHasPopup_getter,
	set: dsf_tmp_context.ariaHasPopup_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaHidden_getter = function ariaHidden() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaHidden_getter);//285
Object.defineProperty(dsf_tmp_context.ariaHidden_getter, "name", {
    value: "get ariaHidden",
    configurable: true
});//291
dsf_tmp_context.ariaHidden_setter = function ariaHidden() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaHidden_setter);//296
Object.defineProperty(dsf_tmp_context.ariaHidden_setter, "name", {
value: "set ariaHidden",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaHidden", {
	get: dsf_tmp_context.ariaHidden_getter,
	set: dsf_tmp_context.ariaHidden_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaInvalid_getter = function ariaInvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaInvalid_getter);//285
Object.defineProperty(dsf_tmp_context.ariaInvalid_getter, "name", {
    value: "get ariaInvalid",
    configurable: true
});//291
dsf_tmp_context.ariaInvalid_setter = function ariaInvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaInvalid_setter);//296
Object.defineProperty(dsf_tmp_context.ariaInvalid_setter, "name", {
value: "set ariaInvalid",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaInvalid", {
	get: dsf_tmp_context.ariaInvalid_getter,
	set: dsf_tmp_context.ariaInvalid_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaKeyShortcuts_getter = function ariaKeyShortcuts() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaKeyShortcuts_getter);//285
Object.defineProperty(dsf_tmp_context.ariaKeyShortcuts_getter, "name", {
    value: "get ariaKeyShortcuts",
    configurable: true
});//291
dsf_tmp_context.ariaKeyShortcuts_setter = function ariaKeyShortcuts() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaKeyShortcuts_setter);//296
Object.defineProperty(dsf_tmp_context.ariaKeyShortcuts_setter, "name", {
value: "set ariaKeyShortcuts",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaKeyShortcuts", {
	get: dsf_tmp_context.ariaKeyShortcuts_getter,
	set: dsf_tmp_context.ariaKeyShortcuts_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaLabel_getter = function ariaLabel() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLabel_getter);//285
Object.defineProperty(dsf_tmp_context.ariaLabel_getter, "name", {
    value: "get ariaLabel",
    configurable: true
});//291
dsf_tmp_context.ariaLabel_setter = function ariaLabel() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLabel_setter);//296
Object.defineProperty(dsf_tmp_context.ariaLabel_setter, "name", {
value: "set ariaLabel",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaLabel", {
	get: dsf_tmp_context.ariaLabel_getter,
	set: dsf_tmp_context.ariaLabel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaLevel_getter = function ariaLevel() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLevel_getter);//285
Object.defineProperty(dsf_tmp_context.ariaLevel_getter, "name", {
    value: "get ariaLevel",
    configurable: true
});//291
dsf_tmp_context.ariaLevel_setter = function ariaLevel() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLevel_setter);//296
Object.defineProperty(dsf_tmp_context.ariaLevel_setter, "name", {
value: "set ariaLevel",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaLevel", {
	get: dsf_tmp_context.ariaLevel_getter,
	set: dsf_tmp_context.ariaLevel_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaLive_getter = function ariaLive() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLive_getter);//285
Object.defineProperty(dsf_tmp_context.ariaLive_getter, "name", {
    value: "get ariaLive",
    configurable: true
});//291
dsf_tmp_context.ariaLive_setter = function ariaLive() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaLive_setter);//296
Object.defineProperty(dsf_tmp_context.ariaLive_setter, "name", {
value: "set ariaLive",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaLive", {
	get: dsf_tmp_context.ariaLive_getter,
	set: dsf_tmp_context.ariaLive_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaModal_getter = function ariaModal() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaModal_getter);//285
Object.defineProperty(dsf_tmp_context.ariaModal_getter, "name", {
    value: "get ariaModal",
    configurable: true
});//291
dsf_tmp_context.ariaModal_setter = function ariaModal() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaModal_setter);//296
Object.defineProperty(dsf_tmp_context.ariaModal_setter, "name", {
value: "set ariaModal",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaModal", {
	get: dsf_tmp_context.ariaModal_getter,
	set: dsf_tmp_context.ariaModal_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaMultiLine_getter = function ariaMultiLine() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaMultiLine_getter);//285
Object.defineProperty(dsf_tmp_context.ariaMultiLine_getter, "name", {
    value: "get ariaMultiLine",
    configurable: true
});//291
dsf_tmp_context.ariaMultiLine_setter = function ariaMultiLine() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaMultiLine_setter);//296
Object.defineProperty(dsf_tmp_context.ariaMultiLine_setter, "name", {
value: "set ariaMultiLine",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaMultiLine", {
	get: dsf_tmp_context.ariaMultiLine_getter,
	set: dsf_tmp_context.ariaMultiLine_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaMultiSelectable_getter = function ariaMultiSelectable() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaMultiSelectable_getter);//285
Object.defineProperty(dsf_tmp_context.ariaMultiSelectable_getter, "name", {
    value: "get ariaMultiSelectable",
    configurable: true
});//291
dsf_tmp_context.ariaMultiSelectable_setter = function ariaMultiSelectable() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaMultiSelectable_setter);//296
Object.defineProperty(dsf_tmp_context.ariaMultiSelectable_setter, "name", {
value: "set ariaMultiSelectable",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaMultiSelectable", {
	get: dsf_tmp_context.ariaMultiSelectable_getter,
	set: dsf_tmp_context.ariaMultiSelectable_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaOrientation_getter = function ariaOrientation() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaOrientation_getter);//285
Object.defineProperty(dsf_tmp_context.ariaOrientation_getter, "name", {
    value: "get ariaOrientation",
    configurable: true
});//291
dsf_tmp_context.ariaOrientation_setter = function ariaOrientation() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaOrientation_setter);//296
Object.defineProperty(dsf_tmp_context.ariaOrientation_setter, "name", {
value: "set ariaOrientation",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaOrientation", {
	get: dsf_tmp_context.ariaOrientation_getter,
	set: dsf_tmp_context.ariaOrientation_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaPlaceholder_getter = function ariaPlaceholder() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPlaceholder_getter);//285
Object.defineProperty(dsf_tmp_context.ariaPlaceholder_getter, "name", {
    value: "get ariaPlaceholder",
    configurable: true
});//291
dsf_tmp_context.ariaPlaceholder_setter = function ariaPlaceholder() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPlaceholder_setter);//296
Object.defineProperty(dsf_tmp_context.ariaPlaceholder_setter, "name", {
value: "set ariaPlaceholder",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaPlaceholder", {
	get: dsf_tmp_context.ariaPlaceholder_getter,
	set: dsf_tmp_context.ariaPlaceholder_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaPosInSet_getter = function ariaPosInSet() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPosInSet_getter);//285
Object.defineProperty(dsf_tmp_context.ariaPosInSet_getter, "name", {
    value: "get ariaPosInSet",
    configurable: true
});//291
dsf_tmp_context.ariaPosInSet_setter = function ariaPosInSet() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPosInSet_setter);//296
Object.defineProperty(dsf_tmp_context.ariaPosInSet_setter, "name", {
value: "set ariaPosInSet",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaPosInSet", {
	get: dsf_tmp_context.ariaPosInSet_getter,
	set: dsf_tmp_context.ariaPosInSet_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaPressed_getter = function ariaPressed() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPressed_getter);//285
Object.defineProperty(dsf_tmp_context.ariaPressed_getter, "name", {
    value: "get ariaPressed",
    configurable: true
});//291
dsf_tmp_context.ariaPressed_setter = function ariaPressed() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaPressed_setter);//296
Object.defineProperty(dsf_tmp_context.ariaPressed_setter, "name", {
value: "set ariaPressed",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaPressed", {
	get: dsf_tmp_context.ariaPressed_getter,
	set: dsf_tmp_context.ariaPressed_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaReadOnly_getter = function ariaReadOnly() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaReadOnly_getter);//285
Object.defineProperty(dsf_tmp_context.ariaReadOnly_getter, "name", {
    value: "get ariaReadOnly",
    configurable: true
});//291
dsf_tmp_context.ariaReadOnly_setter = function ariaReadOnly() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaReadOnly_setter);//296
Object.defineProperty(dsf_tmp_context.ariaReadOnly_setter, "name", {
value: "set ariaReadOnly",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaReadOnly", {
	get: dsf_tmp_context.ariaReadOnly_getter,
	set: dsf_tmp_context.ariaReadOnly_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRelevant_getter = function ariaRelevant() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRelevant_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRelevant_getter, "name", {
    value: "get ariaRelevant",
    configurable: true
});//291
dsf_tmp_context.ariaRelevant_setter = function ariaRelevant() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRelevant_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRelevant_setter, "name", {
value: "set ariaRelevant",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRelevant", {
	get: dsf_tmp_context.ariaRelevant_getter,
	set: dsf_tmp_context.ariaRelevant_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRequired_getter = function ariaRequired() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRequired_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRequired_getter, "name", {
    value: "get ariaRequired",
    configurable: true
});//291
dsf_tmp_context.ariaRequired_setter = function ariaRequired() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRequired_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRequired_setter, "name", {
value: "set ariaRequired",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRequired", {
	get: dsf_tmp_context.ariaRequired_getter,
	set: dsf_tmp_context.ariaRequired_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRoleDescription_getter = function ariaRoleDescription() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRoleDescription_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRoleDescription_getter, "name", {
    value: "get ariaRoleDescription",
    configurable: true
});//291
dsf_tmp_context.ariaRoleDescription_setter = function ariaRoleDescription() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRoleDescription_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRoleDescription_setter, "name", {
value: "set ariaRoleDescription",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRoleDescription", {
	get: dsf_tmp_context.ariaRoleDescription_getter,
	set: dsf_tmp_context.ariaRoleDescription_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRowCount_getter = function ariaRowCount() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowCount_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRowCount_getter, "name", {
    value: "get ariaRowCount",
    configurable: true
});//291
dsf_tmp_context.ariaRowCount_setter = function ariaRowCount() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowCount_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRowCount_setter, "name", {
value: "set ariaRowCount",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRowCount", {
	get: dsf_tmp_context.ariaRowCount_getter,
	set: dsf_tmp_context.ariaRowCount_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRowIndex_getter = function ariaRowIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowIndex_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRowIndex_getter, "name", {
    value: "get ariaRowIndex",
    configurable: true
});//291
dsf_tmp_context.ariaRowIndex_setter = function ariaRowIndex() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowIndex_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRowIndex_setter, "name", {
value: "set ariaRowIndex",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRowIndex", {
	get: dsf_tmp_context.ariaRowIndex_getter,
	set: dsf_tmp_context.ariaRowIndex_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaRowSpan_getter = function ariaRowSpan() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowSpan_getter);//285
Object.defineProperty(dsf_tmp_context.ariaRowSpan_getter, "name", {
    value: "get ariaRowSpan",
    configurable: true
});//291
dsf_tmp_context.ariaRowSpan_setter = function ariaRowSpan() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaRowSpan_setter);//296
Object.defineProperty(dsf_tmp_context.ariaRowSpan_setter, "name", {
value: "set ariaRowSpan",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaRowSpan", {
	get: dsf_tmp_context.ariaRowSpan_getter,
	set: dsf_tmp_context.ariaRowSpan_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaSelected_getter = function ariaSelected() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSelected_getter);//285
Object.defineProperty(dsf_tmp_context.ariaSelected_getter, "name", {
    value: "get ariaSelected",
    configurable: true
});//291
dsf_tmp_context.ariaSelected_setter = function ariaSelected() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSelected_setter);//296
Object.defineProperty(dsf_tmp_context.ariaSelected_setter, "name", {
value: "set ariaSelected",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaSelected", {
	get: dsf_tmp_context.ariaSelected_getter,
	set: dsf_tmp_context.ariaSelected_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaSetSize_getter = function ariaSetSize() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSetSize_getter);//285
Object.defineProperty(dsf_tmp_context.ariaSetSize_getter, "name", {
    value: "get ariaSetSize",
    configurable: true
});//291
dsf_tmp_context.ariaSetSize_setter = function ariaSetSize() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSetSize_setter);//296
Object.defineProperty(dsf_tmp_context.ariaSetSize_setter, "name", {
value: "set ariaSetSize",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaSetSize", {
	get: dsf_tmp_context.ariaSetSize_getter,
	set: dsf_tmp_context.ariaSetSize_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaSort_getter = function ariaSort() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSort_getter);//285
Object.defineProperty(dsf_tmp_context.ariaSort_getter, "name", {
    value: "get ariaSort",
    configurable: true
});//291
dsf_tmp_context.ariaSort_setter = function ariaSort() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaSort_setter);//296
Object.defineProperty(dsf_tmp_context.ariaSort_setter, "name", {
value: "set ariaSort",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaSort", {
	get: dsf_tmp_context.ariaSort_getter,
	set: dsf_tmp_context.ariaSort_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaValueMax_getter = function ariaValueMax() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueMax_getter);//285
Object.defineProperty(dsf_tmp_context.ariaValueMax_getter, "name", {
    value: "get ariaValueMax",
    configurable: true
});//291
dsf_tmp_context.ariaValueMax_setter = function ariaValueMax() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueMax_setter);//296
Object.defineProperty(dsf_tmp_context.ariaValueMax_setter, "name", {
value: "set ariaValueMax",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaValueMax", {
	get: dsf_tmp_context.ariaValueMax_getter,
	set: dsf_tmp_context.ariaValueMax_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaValueMin_getter = function ariaValueMin() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueMin_getter);//285
Object.defineProperty(dsf_tmp_context.ariaValueMin_getter, "name", {
    value: "get ariaValueMin",
    configurable: true
});//291
dsf_tmp_context.ariaValueMin_setter = function ariaValueMin() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueMin_setter);//296
Object.defineProperty(dsf_tmp_context.ariaValueMin_setter, "name", {
value: "set ariaValueMin",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaValueMin", {
	get: dsf_tmp_context.ariaValueMin_getter,
	set: dsf_tmp_context.ariaValueMin_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaValueNow_getter = function ariaValueNow() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueNow_getter);//285
Object.defineProperty(dsf_tmp_context.ariaValueNow_getter, "name", {
    value: "get ariaValueNow",
    configurable: true
});//291
dsf_tmp_context.ariaValueNow_setter = function ariaValueNow() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueNow_setter);//296
Object.defineProperty(dsf_tmp_context.ariaValueNow_setter, "name", {
value: "set ariaValueNow",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaValueNow", {
	get: dsf_tmp_context.ariaValueNow_getter,
	set: dsf_tmp_context.ariaValueNow_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.ariaValueText_getter = function ariaValueText() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueText_getter);//285
Object.defineProperty(dsf_tmp_context.ariaValueText_getter, "name", {
    value: "get ariaValueText",
    configurable: true
});//291
dsf_tmp_context.ariaValueText_setter = function ariaValueText() {debugger;}; catvm.safefunction(dsf_tmp_context.ariaValueText_setter);//296
Object.defineProperty(dsf_tmp_context.ariaValueText_setter, "name", {
value: "set ariaValueText",
configurable: true
});//301

Object.defineProperty(Element.prototype, "ariaValueText", {
	get: dsf_tmp_context.ariaValueText_getter,
	set: dsf_tmp_context.ariaValueText_setter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.children_getter = function children() {debugger;}; catvm.safefunction(dsf_tmp_context.children_getter);//285
Object.defineProperty(dsf_tmp_context.children_getter, "name", {
    value: "get children",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "children", {
	get: dsf_tmp_context.children_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.firstElementChild_getter = function firstElementChild() {debugger;}; catvm.safefunction(dsf_tmp_context.firstElementChild_getter);//285
Object.defineProperty(dsf_tmp_context.firstElementChild_getter, "name", {
    value: "get firstElementChild",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "firstElementChild", {
	get: dsf_tmp_context.firstElementChild_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.lastElementChild_getter = function lastElementChild() {debugger;}; catvm.safefunction(dsf_tmp_context.lastElementChild_getter);//285
Object.defineProperty(dsf_tmp_context.lastElementChild_getter, "name", {
    value: "get lastElementChild",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "lastElementChild", {
	get: dsf_tmp_context.lastElementChild_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.childElementCount_getter = function childElementCount() {debugger;}; catvm.safefunction(dsf_tmp_context.childElementCount_getter);//285
Object.defineProperty(dsf_tmp_context.childElementCount_getter, "name", {
    value: "get childElementCount",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "childElementCount", {
	get: dsf_tmp_context.childElementCount_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.previousElementSibling_getter = function previousElementSibling() {debugger;}; catvm.safefunction(dsf_tmp_context.previousElementSibling_getter);//285
Object.defineProperty(dsf_tmp_context.previousElementSibling_getter, "name", {
    value: "get previousElementSibling",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "previousElementSibling", {
	get: dsf_tmp_context.previousElementSibling_getter,
	enumerable:true,
	configurable:true,
});//322

dsf_tmp_context.nextElementSibling_getter = function nextElementSibling() {debugger;}; catvm.safefunction(dsf_tmp_context.nextElementSibling_getter);//285
Object.defineProperty(dsf_tmp_context.nextElementSibling_getter, "name", {
    value: "get nextElementSibling",
    configurable: true
});//291

Object.defineProperty(Element.prototype, "nextElementSibling", {
	get: dsf_tmp_context.nextElementSibling_getter,
	enumerable:true,
	configurable:true,
});//322

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.Element.element_obj.__defineGetter__("namespaceURI",Object.getOwnPropertyDescriptor(Element.prototype,"namespaceURI").get);
dsf_tmp_context.namespaceURI_getter = function namespaceURI(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.namespaceURI_getter);
Element.prototype.__defineGetter__("namespaceURI",dsf_tmp_context.namespaceURI_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("prefix",Object.getOwnPropertyDescriptor(Element.prototype,"prefix").get);
dsf_tmp_context.prefix_getter = function prefix(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.prefix_getter);
Element.prototype.__defineGetter__("prefix",dsf_tmp_context.prefix_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("localName",Object.getOwnPropertyDescriptor(Element.prototype,"localName").get);
dsf_tmp_context.localName_getter = function localName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.localName_getter);
Element.prototype.__defineGetter__("localName",dsf_tmp_context.localName_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("tagName",Object.getOwnPropertyDescriptor(Element.prototype,"tagName").get);
dsf_tmp_context.tagName_getter = function tagName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.tagName_getter);
Element.prototype.__defineGetter__("tagName",dsf_tmp_context.tagName_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("id",Object.getOwnPropertyDescriptor(Element.prototype,"id").get);
dsf_tmp_context.id_getter = function id(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.id_getter);
Element.prototype.__defineGetter__("id",dsf_tmp_context.id_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("className",Object.getOwnPropertyDescriptor(Element.prototype,"className").get);
dsf_tmp_context.className_getter = function className(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.className_getter);
Element.prototype.__defineGetter__("className",dsf_tmp_context.className_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("classList",Object.getOwnPropertyDescriptor(Element.prototype,"classList").get);
dsf_tmp_context.classList_getter = function classList(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.classList_getter);
Element.prototype.__defineGetter__("classList",dsf_tmp_context.classList_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("slot",Object.getOwnPropertyDescriptor(Element.prototype,"slot").get);
dsf_tmp_context.slot_getter = function slot(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.slot_getter);
Element.prototype.__defineGetter__("slot",dsf_tmp_context.slot_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("attributes",Object.getOwnPropertyDescriptor(Element.prototype,"attributes").get);
dsf_tmp_context.attributes_getter = function attributes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.attributes_getter);
Element.prototype.__defineGetter__("attributes",dsf_tmp_context.attributes_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("shadowRoot",Object.getOwnPropertyDescriptor(Element.prototype,"shadowRoot").get);
dsf_tmp_context.shadowRoot_getter = function shadowRoot(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.shadowRoot_getter);
Element.prototype.__defineGetter__("shadowRoot",dsf_tmp_context.shadowRoot_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("part",Object.getOwnPropertyDescriptor(Element.prototype,"part").get);
dsf_tmp_context.part_getter = function part(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.part_getter);
Element.prototype.__defineGetter__("part",dsf_tmp_context.part_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("assignedSlot",Object.getOwnPropertyDescriptor(Element.prototype,"assignedSlot").get);
dsf_tmp_context.assignedSlot_getter = function assignedSlot(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.assignedSlot_getter);
Element.prototype.__defineGetter__("assignedSlot",dsf_tmp_context.assignedSlot_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("innerHTML",Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML").get);
dsf_tmp_context.innerHTML_getter = function innerHTML(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.innerHTML_getter);
Element.prototype.__defineGetter__("innerHTML",dsf_tmp_context.innerHTML_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("outerHTML",Object.getOwnPropertyDescriptor(Element.prototype,"outerHTML").get);
dsf_tmp_context.outerHTML_getter = function outerHTML(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.outerHTML_getter);
Element.prototype.__defineGetter__("outerHTML",dsf_tmp_context.outerHTML_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("scrollTop",Object.getOwnPropertyDescriptor(Element.prototype,"scrollTop").get);
dsf_tmp_context.scrollTop_getter = function scrollTop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollTop_getter);
Element.prototype.__defineGetter__("scrollTop",dsf_tmp_context.scrollTop_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("scrollLeft",Object.getOwnPropertyDescriptor(Element.prototype,"scrollLeft").get);
dsf_tmp_context.scrollLeft_getter = function scrollLeft(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollLeft_getter);
Element.prototype.__defineGetter__("scrollLeft",dsf_tmp_context.scrollLeft_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("scrollWidth",Object.getOwnPropertyDescriptor(Element.prototype,"scrollWidth").get);
dsf_tmp_context.scrollWidth_getter = function scrollWidth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollWidth_getter);
Element.prototype.__defineGetter__("scrollWidth",dsf_tmp_context.scrollWidth_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("scrollHeight",Object.getOwnPropertyDescriptor(Element.prototype,"scrollHeight").get);
dsf_tmp_context.scrollHeight_getter = function scrollHeight(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollHeight_getter);
Element.prototype.__defineGetter__("scrollHeight",dsf_tmp_context.scrollHeight_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("clientTop",Object.getOwnPropertyDescriptor(Element.prototype,"clientTop").get);
dsf_tmp_context.clientTop_getter = function clientTop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.clientTop_getter);
Element.prototype.__defineGetter__("clientTop",dsf_tmp_context.clientTop_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("clientLeft",Object.getOwnPropertyDescriptor(Element.prototype,"clientLeft").get);
dsf_tmp_context.clientLeft_getter = function clientLeft(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.clientLeft_getter);
Element.prototype.__defineGetter__("clientLeft",dsf_tmp_context.clientLeft_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("clientWidth",Object.getOwnPropertyDescriptor(Element.prototype,"clientWidth").get);
dsf_tmp_context.clientWidth_getter = function clientWidth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.clientWidth_getter);
Element.prototype.__defineGetter__("clientWidth",dsf_tmp_context.clientWidth_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("clientHeight",Object.getOwnPropertyDescriptor(Element.prototype,"clientHeight").get);
dsf_tmp_context.clientHeight_getter = function clientHeight(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.clientHeight_getter);
Element.prototype.__defineGetter__("clientHeight",dsf_tmp_context.clientHeight_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onbeforecopy",Object.getOwnPropertyDescriptor(Element.prototype,"onbeforecopy").get);
dsf_tmp_context.onbeforecopy_getter = function onbeforecopy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforecopy_getter);
Element.prototype.__defineGetter__("onbeforecopy",dsf_tmp_context.onbeforecopy_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onbeforecut",Object.getOwnPropertyDescriptor(Element.prototype,"onbeforecut").get);
dsf_tmp_context.onbeforecut_getter = function onbeforecut(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforecut_getter);
Element.prototype.__defineGetter__("onbeforecut",dsf_tmp_context.onbeforecut_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onbeforepaste",Object.getOwnPropertyDescriptor(Element.prototype,"onbeforepaste").get);
dsf_tmp_context.onbeforepaste_getter = function onbeforepaste(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforepaste_getter);
Element.prototype.__defineGetter__("onbeforepaste",dsf_tmp_context.onbeforepaste_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onsearch",Object.getOwnPropertyDescriptor(Element.prototype,"onsearch").get);
dsf_tmp_context.onsearch_getter = function onsearch(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsearch_getter);
Element.prototype.__defineGetter__("onsearch",dsf_tmp_context.onsearch_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("elementTiming",Object.getOwnPropertyDescriptor(Element.prototype,"elementTiming").get);
dsf_tmp_context.elementTiming_getter = function elementTiming(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.elementTiming_getter);
Element.prototype.__defineGetter__("elementTiming",dsf_tmp_context.elementTiming_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onfullscreenchange",Object.getOwnPropertyDescriptor(Element.prototype,"onfullscreenchange").get);
dsf_tmp_context.onfullscreenchange_getter = function onfullscreenchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_getter);
Element.prototype.__defineGetter__("onfullscreenchange",dsf_tmp_context.onfullscreenchange_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onfullscreenerror",Object.getOwnPropertyDescriptor(Element.prototype,"onfullscreenerror").get);
dsf_tmp_context.onfullscreenerror_getter = function onfullscreenerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_getter);
Element.prototype.__defineGetter__("onfullscreenerror",dsf_tmp_context.onfullscreenerror_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onwebkitfullscreenchange",Object.getOwnPropertyDescriptor(Element.prototype,"onwebkitfullscreenchange").get);
dsf_tmp_context.onwebkitfullscreenchange_getter = function onwebkitfullscreenchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_getter);
Element.prototype.__defineGetter__("onwebkitfullscreenchange",dsf_tmp_context.onwebkitfullscreenchange_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("onwebkitfullscreenerror",Object.getOwnPropertyDescriptor(Element.prototype,"onwebkitfullscreenerror").get);
dsf_tmp_context.onwebkitfullscreenerror_getter = function onwebkitfullscreenerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_getter);
Element.prototype.__defineGetter__("onwebkitfullscreenerror",dsf_tmp_context.onwebkitfullscreenerror_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("role",Object.getOwnPropertyDescriptor(Element.prototype,"role").get);
dsf_tmp_context.role_getter = function role(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.role_getter);
Element.prototype.__defineGetter__("role",dsf_tmp_context.role_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaAtomic",Object.getOwnPropertyDescriptor(Element.prototype,"ariaAtomic").get);
dsf_tmp_context.ariaAtomic_getter = function ariaAtomic(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaAtomic_getter);
Element.prototype.__defineGetter__("ariaAtomic",dsf_tmp_context.ariaAtomic_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaAutoComplete",Object.getOwnPropertyDescriptor(Element.prototype,"ariaAutoComplete").get);
dsf_tmp_context.ariaAutoComplete_getter = function ariaAutoComplete(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaAutoComplete_getter);
Element.prototype.__defineGetter__("ariaAutoComplete",dsf_tmp_context.ariaAutoComplete_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaBusy",Object.getOwnPropertyDescriptor(Element.prototype,"ariaBusy").get);
dsf_tmp_context.ariaBusy_getter = function ariaBusy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaBusy_getter);
Element.prototype.__defineGetter__("ariaBusy",dsf_tmp_context.ariaBusy_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaChecked",Object.getOwnPropertyDescriptor(Element.prototype,"ariaChecked").get);
dsf_tmp_context.ariaChecked_getter = function ariaChecked(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaChecked_getter);
Element.prototype.__defineGetter__("ariaChecked",dsf_tmp_context.ariaChecked_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaColCount",Object.getOwnPropertyDescriptor(Element.prototype,"ariaColCount").get);
dsf_tmp_context.ariaColCount_getter = function ariaColCount(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaColCount_getter);
Element.prototype.__defineGetter__("ariaColCount",dsf_tmp_context.ariaColCount_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaColIndex",Object.getOwnPropertyDescriptor(Element.prototype,"ariaColIndex").get);
dsf_tmp_context.ariaColIndex_getter = function ariaColIndex(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaColIndex_getter);
Element.prototype.__defineGetter__("ariaColIndex",dsf_tmp_context.ariaColIndex_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaColSpan",Object.getOwnPropertyDescriptor(Element.prototype,"ariaColSpan").get);
dsf_tmp_context.ariaColSpan_getter = function ariaColSpan(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaColSpan_getter);
Element.prototype.__defineGetter__("ariaColSpan",dsf_tmp_context.ariaColSpan_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaCurrent",Object.getOwnPropertyDescriptor(Element.prototype,"ariaCurrent").get);
dsf_tmp_context.ariaCurrent_getter = function ariaCurrent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaCurrent_getter);
Element.prototype.__defineGetter__("ariaCurrent",dsf_tmp_context.ariaCurrent_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaDescription",Object.getOwnPropertyDescriptor(Element.prototype,"ariaDescription").get);
dsf_tmp_context.ariaDescription_getter = function ariaDescription(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaDescription_getter);
Element.prototype.__defineGetter__("ariaDescription",dsf_tmp_context.ariaDescription_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaDisabled",Object.getOwnPropertyDescriptor(Element.prototype,"ariaDisabled").get);
dsf_tmp_context.ariaDisabled_getter = function ariaDisabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaDisabled_getter);
Element.prototype.__defineGetter__("ariaDisabled",dsf_tmp_context.ariaDisabled_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaExpanded",Object.getOwnPropertyDescriptor(Element.prototype,"ariaExpanded").get);
dsf_tmp_context.ariaExpanded_getter = function ariaExpanded(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaExpanded_getter);
Element.prototype.__defineGetter__("ariaExpanded",dsf_tmp_context.ariaExpanded_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaHasPopup",Object.getOwnPropertyDescriptor(Element.prototype,"ariaHasPopup").get);
dsf_tmp_context.ariaHasPopup_getter = function ariaHasPopup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaHasPopup_getter);
Element.prototype.__defineGetter__("ariaHasPopup",dsf_tmp_context.ariaHasPopup_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaHidden",Object.getOwnPropertyDescriptor(Element.prototype,"ariaHidden").get);
dsf_tmp_context.ariaHidden_getter = function ariaHidden(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaHidden_getter);
Element.prototype.__defineGetter__("ariaHidden",dsf_tmp_context.ariaHidden_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaInvalid",Object.getOwnPropertyDescriptor(Element.prototype,"ariaInvalid").get);
dsf_tmp_context.ariaInvalid_getter = function ariaInvalid(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaInvalid_getter);
Element.prototype.__defineGetter__("ariaInvalid",dsf_tmp_context.ariaInvalid_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaKeyShortcuts",Object.getOwnPropertyDescriptor(Element.prototype,"ariaKeyShortcuts").get);
dsf_tmp_context.ariaKeyShortcuts_getter = function ariaKeyShortcuts(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaKeyShortcuts_getter);
Element.prototype.__defineGetter__("ariaKeyShortcuts",dsf_tmp_context.ariaKeyShortcuts_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaLabel",Object.getOwnPropertyDescriptor(Element.prototype,"ariaLabel").get);
dsf_tmp_context.ariaLabel_getter = function ariaLabel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaLabel_getter);
Element.prototype.__defineGetter__("ariaLabel",dsf_tmp_context.ariaLabel_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaLevel",Object.getOwnPropertyDescriptor(Element.prototype,"ariaLevel").get);
dsf_tmp_context.ariaLevel_getter = function ariaLevel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaLevel_getter);
Element.prototype.__defineGetter__("ariaLevel",dsf_tmp_context.ariaLevel_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaLive",Object.getOwnPropertyDescriptor(Element.prototype,"ariaLive").get);
dsf_tmp_context.ariaLive_getter = function ariaLive(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaLive_getter);
Element.prototype.__defineGetter__("ariaLive",dsf_tmp_context.ariaLive_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaModal",Object.getOwnPropertyDescriptor(Element.prototype,"ariaModal").get);
dsf_tmp_context.ariaModal_getter = function ariaModal(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaModal_getter);
Element.prototype.__defineGetter__("ariaModal",dsf_tmp_context.ariaModal_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaMultiLine",Object.getOwnPropertyDescriptor(Element.prototype,"ariaMultiLine").get);
dsf_tmp_context.ariaMultiLine_getter = function ariaMultiLine(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaMultiLine_getter);
Element.prototype.__defineGetter__("ariaMultiLine",dsf_tmp_context.ariaMultiLine_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaMultiSelectable",Object.getOwnPropertyDescriptor(Element.prototype,"ariaMultiSelectable").get);
dsf_tmp_context.ariaMultiSelectable_getter = function ariaMultiSelectable(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaMultiSelectable_getter);
Element.prototype.__defineGetter__("ariaMultiSelectable",dsf_tmp_context.ariaMultiSelectable_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaOrientation",Object.getOwnPropertyDescriptor(Element.prototype,"ariaOrientation").get);
dsf_tmp_context.ariaOrientation_getter = function ariaOrientation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaOrientation_getter);
Element.prototype.__defineGetter__("ariaOrientation",dsf_tmp_context.ariaOrientation_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaPlaceholder",Object.getOwnPropertyDescriptor(Element.prototype,"ariaPlaceholder").get);
dsf_tmp_context.ariaPlaceholder_getter = function ariaPlaceholder(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaPlaceholder_getter);
Element.prototype.__defineGetter__("ariaPlaceholder",dsf_tmp_context.ariaPlaceholder_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaPosInSet",Object.getOwnPropertyDescriptor(Element.prototype,"ariaPosInSet").get);
dsf_tmp_context.ariaPosInSet_getter = function ariaPosInSet(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaPosInSet_getter);
Element.prototype.__defineGetter__("ariaPosInSet",dsf_tmp_context.ariaPosInSet_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaPressed",Object.getOwnPropertyDescriptor(Element.prototype,"ariaPressed").get);
dsf_tmp_context.ariaPressed_getter = function ariaPressed(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaPressed_getter);
Element.prototype.__defineGetter__("ariaPressed",dsf_tmp_context.ariaPressed_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaReadOnly",Object.getOwnPropertyDescriptor(Element.prototype,"ariaReadOnly").get);
dsf_tmp_context.ariaReadOnly_getter = function ariaReadOnly(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaReadOnly_getter);
Element.prototype.__defineGetter__("ariaReadOnly",dsf_tmp_context.ariaReadOnly_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRelevant",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRelevant").get);
dsf_tmp_context.ariaRelevant_getter = function ariaRelevant(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRelevant_getter);
Element.prototype.__defineGetter__("ariaRelevant",dsf_tmp_context.ariaRelevant_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRequired",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRequired").get);
dsf_tmp_context.ariaRequired_getter = function ariaRequired(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRequired_getter);
Element.prototype.__defineGetter__("ariaRequired",dsf_tmp_context.ariaRequired_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRoleDescription",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRoleDescription").get);
dsf_tmp_context.ariaRoleDescription_getter = function ariaRoleDescription(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRoleDescription_getter);
Element.prototype.__defineGetter__("ariaRoleDescription",dsf_tmp_context.ariaRoleDescription_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRowCount",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRowCount").get);
dsf_tmp_context.ariaRowCount_getter = function ariaRowCount(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRowCount_getter);
Element.prototype.__defineGetter__("ariaRowCount",dsf_tmp_context.ariaRowCount_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRowIndex",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRowIndex").get);
dsf_tmp_context.ariaRowIndex_getter = function ariaRowIndex(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRowIndex_getter);
Element.prototype.__defineGetter__("ariaRowIndex",dsf_tmp_context.ariaRowIndex_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaRowSpan",Object.getOwnPropertyDescriptor(Element.prototype,"ariaRowSpan").get);
dsf_tmp_context.ariaRowSpan_getter = function ariaRowSpan(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaRowSpan_getter);
Element.prototype.__defineGetter__("ariaRowSpan",dsf_tmp_context.ariaRowSpan_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaSelected",Object.getOwnPropertyDescriptor(Element.prototype,"ariaSelected").get);
dsf_tmp_context.ariaSelected_getter = function ariaSelected(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaSelected_getter);
Element.prototype.__defineGetter__("ariaSelected",dsf_tmp_context.ariaSelected_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaSetSize",Object.getOwnPropertyDescriptor(Element.prototype,"ariaSetSize").get);
dsf_tmp_context.ariaSetSize_getter = function ariaSetSize(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaSetSize_getter);
Element.prototype.__defineGetter__("ariaSetSize",dsf_tmp_context.ariaSetSize_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaSort",Object.getOwnPropertyDescriptor(Element.prototype,"ariaSort").get);
dsf_tmp_context.ariaSort_getter = function ariaSort(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaSort_getter);
Element.prototype.__defineGetter__("ariaSort",dsf_tmp_context.ariaSort_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaValueMax",Object.getOwnPropertyDescriptor(Element.prototype,"ariaValueMax").get);
dsf_tmp_context.ariaValueMax_getter = function ariaValueMax(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaValueMax_getter);
Element.prototype.__defineGetter__("ariaValueMax",dsf_tmp_context.ariaValueMax_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaValueMin",Object.getOwnPropertyDescriptor(Element.prototype,"ariaValueMin").get);
dsf_tmp_context.ariaValueMin_getter = function ariaValueMin(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaValueMin_getter);
Element.prototype.__defineGetter__("ariaValueMin",dsf_tmp_context.ariaValueMin_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaValueNow",Object.getOwnPropertyDescriptor(Element.prototype,"ariaValueNow").get);
dsf_tmp_context.ariaValueNow_getter = function ariaValueNow(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaValueNow_getter);
Element.prototype.__defineGetter__("ariaValueNow",dsf_tmp_context.ariaValueNow_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("ariaValueText",Object.getOwnPropertyDescriptor(Element.prototype,"ariaValueText").get);
dsf_tmp_context.ariaValueText_getter = function ariaValueText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ariaValueText_getter);
Element.prototype.__defineGetter__("ariaValueText",dsf_tmp_context.ariaValueText_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("children",Object.getOwnPropertyDescriptor(Element.prototype,"children").get);
dsf_tmp_context.children_getter = function children(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.children_getter);
Element.prototype.__defineGetter__("children",dsf_tmp_context.children_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("firstElementChild",Object.getOwnPropertyDescriptor(Element.prototype,"firstElementChild").get);
dsf_tmp_context.firstElementChild_getter = function firstElementChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.firstElementChild_getter);
Element.prototype.__defineGetter__("firstElementChild",dsf_tmp_context.firstElementChild_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("lastElementChild",Object.getOwnPropertyDescriptor(Element.prototype,"lastElementChild").get);
dsf_tmp_context.lastElementChild_getter = function lastElementChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lastElementChild_getter);
Element.prototype.__defineGetter__("lastElementChild",dsf_tmp_context.lastElementChild_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("childElementCount",Object.getOwnPropertyDescriptor(Element.prototype,"childElementCount").get);
dsf_tmp_context.childElementCount_getter = function childElementCount(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.childElementCount_getter);
Element.prototype.__defineGetter__("childElementCount",dsf_tmp_context.childElementCount_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("previousElementSibling",Object.getOwnPropertyDescriptor(Element.prototype,"previousElementSibling").get);
dsf_tmp_context.previousElementSibling_getter = function previousElementSibling(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.previousElementSibling_getter);
Element.prototype.__defineGetter__("previousElementSibling",dsf_tmp_context.previousElementSibling_getter);//393

catvm.memory.variable.Element.element_obj.__defineGetter__("nextElementSibling",Object.getOwnPropertyDescriptor(Element.prototype,"nextElementSibling").get);
dsf_tmp_context.nextElementSibling_getter = function nextElementSibling(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nextElementSibling_getter);
Element.prototype.__defineGetter__("nextElementSibling",dsf_tmp_context.nextElementSibling_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.Element.__function_after = Object.getOwnPropertyDescriptor(Element.prototype,"after").value; catvm.safefunction(catvm.memory.variable.Element.__function_after);
catvm.memory.variable.Element.element_obj.__defineGetter__("after",function after(){return catvm.memory.variable.Element.__function_after;});
Element.prototype["after"] = function after(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["after"]);//407

catvm.memory.variable.Element.__function_animate = Object.getOwnPropertyDescriptor(Element.prototype,"animate").value; catvm.safefunction(catvm.memory.variable.Element.__function_animate);
catvm.memory.variable.Element.element_obj.__defineGetter__("animate",function animate(){return catvm.memory.variable.Element.__function_animate;});
Element.prototype["animate"] = function animate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["animate"]);//407

catvm.memory.variable.Element.__function_append = Object.getOwnPropertyDescriptor(Element.prototype,"append").value; catvm.safefunction(catvm.memory.variable.Element.__function_append);
catvm.memory.variable.Element.element_obj.__defineGetter__("append",function append(){return catvm.memory.variable.Element.__function_append;});
Element.prototype["append"] = function append(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["append"]);//407

catvm.memory.variable.Element.__function_attachShadow = Object.getOwnPropertyDescriptor(Element.prototype,"attachShadow").value; catvm.safefunction(catvm.memory.variable.Element.__function_attachShadow);
catvm.memory.variable.Element.element_obj.__defineGetter__("attachShadow",function attachShadow(){return catvm.memory.variable.Element.__function_attachShadow;});
Element.prototype["attachShadow"] = function attachShadow(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["attachShadow"]);//407

catvm.memory.variable.Element.__function_before = Object.getOwnPropertyDescriptor(Element.prototype,"before").value; catvm.safefunction(catvm.memory.variable.Element.__function_before);
catvm.memory.variable.Element.element_obj.__defineGetter__("before",function before(){return catvm.memory.variable.Element.__function_before;});
Element.prototype["before"] = function before(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["before"]);//407

catvm.memory.variable.Element.__function_closest = Object.getOwnPropertyDescriptor(Element.prototype,"closest").value; catvm.safefunction(catvm.memory.variable.Element.__function_closest);
catvm.memory.variable.Element.element_obj.__defineGetter__("closest",function closest(){return catvm.memory.variable.Element.__function_closest;});
Element.prototype["closest"] = function closest(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["closest"]);//407

catvm.memory.variable.Element.__function_computedStyleMap = Object.getOwnPropertyDescriptor(Element.prototype,"computedStyleMap").value; catvm.safefunction(catvm.memory.variable.Element.__function_computedStyleMap);
catvm.memory.variable.Element.element_obj.__defineGetter__("computedStyleMap",function computedStyleMap(){return catvm.memory.variable.Element.__function_computedStyleMap;});
Element.prototype["computedStyleMap"] = function computedStyleMap(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["computedStyleMap"]);//407

catvm.memory.variable.Element.__function_getAttribute = Object.getOwnPropertyDescriptor(Element.prototype,"getAttribute").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAttribute);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAttribute",function getAttribute(){return catvm.memory.variable.Element.__function_getAttribute;});
Element.prototype["getAttribute"] = function getAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAttribute"]);//407

catvm.memory.variable.Element.__function_getAttributeNS = Object.getOwnPropertyDescriptor(Element.prototype,"getAttributeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAttributeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAttributeNS",function getAttributeNS(){return catvm.memory.variable.Element.__function_getAttributeNS;});
Element.prototype["getAttributeNS"] = function getAttributeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAttributeNS"]);//407

catvm.memory.variable.Element.__function_getAttributeNames = Object.getOwnPropertyDescriptor(Element.prototype,"getAttributeNames").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAttributeNames);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAttributeNames",function getAttributeNames(){return catvm.memory.variable.Element.__function_getAttributeNames;});
Element.prototype["getAttributeNames"] = function getAttributeNames(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAttributeNames"]);//407

catvm.memory.variable.Element.__function_getAttributeNode = Object.getOwnPropertyDescriptor(Element.prototype,"getAttributeNode").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAttributeNode);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAttributeNode",function getAttributeNode(){return catvm.memory.variable.Element.__function_getAttributeNode;});
Element.prototype["getAttributeNode"] = function getAttributeNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAttributeNode"]);//407

catvm.memory.variable.Element.__function_getAttributeNodeNS = Object.getOwnPropertyDescriptor(Element.prototype,"getAttributeNodeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAttributeNodeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAttributeNodeNS",function getAttributeNodeNS(){return catvm.memory.variable.Element.__function_getAttributeNodeNS;});
Element.prototype["getAttributeNodeNS"] = function getAttributeNodeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAttributeNodeNS"]);//407

catvm.memory.variable.Element.__function_getBoundingClientRect = Object.getOwnPropertyDescriptor(Element.prototype,"getBoundingClientRect").value; catvm.safefunction(catvm.memory.variable.Element.__function_getBoundingClientRect);
catvm.memory.variable.Element.element_obj.__defineGetter__("getBoundingClientRect",function getBoundingClientRect(){return catvm.memory.variable.Element.__function_getBoundingClientRect;});
Element.prototype["getBoundingClientRect"] = function getBoundingClientRect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getBoundingClientRect"]);//407

catvm.memory.variable.Element.__function_getClientRects = Object.getOwnPropertyDescriptor(Element.prototype,"getClientRects").value; catvm.safefunction(catvm.memory.variable.Element.__function_getClientRects);
catvm.memory.variable.Element.element_obj.__defineGetter__("getClientRects",function getClientRects(){return catvm.memory.variable.Element.__function_getClientRects;});
Element.prototype["getClientRects"] = function getClientRects(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getClientRects"]);//407

catvm.memory.variable.Element.__function_getElementsByClassName = Object.getOwnPropertyDescriptor(Element.prototype,"getElementsByClassName").value; catvm.safefunction(catvm.memory.variable.Element.__function_getElementsByClassName);
catvm.memory.variable.Element.element_obj.__defineGetter__("getElementsByClassName",function getElementsByClassName(){return catvm.memory.variable.Element.__function_getElementsByClassName;});
Element.prototype["getElementsByClassName"] = function getElementsByClassName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getElementsByClassName"]);//407

//catvm.memory.variable.Element.__function_getElementsByTagName = Object.getOwnPropertyDescriptor(Element.prototype,"getElementsByTagName").value; catvm.safefunction(catvm.memory.variable.Element.__function_getElementsByTagName);
//catvm.memory.variable.Element.element_obj.__defineGetter__("getElementsByTagName",function getElementsByTagName(){debugger;return catvm.memory.variable.Element.__function_getElementsByTagName;});
//Element.prototype["getElementsByTagName"] = function getElementsByTagName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getElementsByTagName"]);//407

catvm.memory.variable.Element.__function_getElementsByTagNameNS = Object.getOwnPropertyDescriptor(Element.prototype,"getElementsByTagNameNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_getElementsByTagNameNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("getElementsByTagNameNS",function getElementsByTagNameNS(){return catvm.memory.variable.Element.__function_getElementsByTagNameNS;});
Element.prototype["getElementsByTagNameNS"] = function getElementsByTagNameNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getElementsByTagNameNS"]);//407

catvm.memory.variable.Element.__function_getInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype,"getInnerHTML").value; catvm.safefunction(catvm.memory.variable.Element.__function_getInnerHTML);
catvm.memory.variable.Element.element_obj.__defineGetter__("getInnerHTML",function getInnerHTML(){return catvm.memory.variable.Element.__function_getInnerHTML;});
Element.prototype["getInnerHTML"] = function getInnerHTML(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getInnerHTML"]);//407

catvm.memory.variable.Element.__function_hasAttribute = Object.getOwnPropertyDescriptor(Element.prototype,"hasAttribute").value; catvm.safefunction(catvm.memory.variable.Element.__function_hasAttribute);
catvm.memory.variable.Element.element_obj.__defineGetter__("hasAttribute",function hasAttribute(){return catvm.memory.variable.Element.__function_hasAttribute;});
Element.prototype["hasAttribute"] = function hasAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["hasAttribute"]);//407

catvm.memory.variable.Element.__function_hasAttributeNS = Object.getOwnPropertyDescriptor(Element.prototype,"hasAttributeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_hasAttributeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("hasAttributeNS",function hasAttributeNS(){return catvm.memory.variable.Element.__function_hasAttributeNS;});
Element.prototype["hasAttributeNS"] = function hasAttributeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["hasAttributeNS"]);//407

catvm.memory.variable.Element.__function_hasAttributes = Object.getOwnPropertyDescriptor(Element.prototype,"hasAttributes").value; catvm.safefunction(catvm.memory.variable.Element.__function_hasAttributes);
catvm.memory.variable.Element.element_obj.__defineGetter__("hasAttributes",function hasAttributes(){return catvm.memory.variable.Element.__function_hasAttributes;});
Element.prototype["hasAttributes"] = function hasAttributes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["hasAttributes"]);//407

catvm.memory.variable.Element.__function_hasPointerCapture = Object.getOwnPropertyDescriptor(Element.prototype,"hasPointerCapture").value; catvm.safefunction(catvm.memory.variable.Element.__function_hasPointerCapture);
catvm.memory.variable.Element.element_obj.__defineGetter__("hasPointerCapture",function hasPointerCapture(){return catvm.memory.variable.Element.__function_hasPointerCapture;});
Element.prototype["hasPointerCapture"] = function hasPointerCapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["hasPointerCapture"]);//407

catvm.memory.variable.Element.__function_insertAdjacentElement = Object.getOwnPropertyDescriptor(Element.prototype,"insertAdjacentElement").value; catvm.safefunction(catvm.memory.variable.Element.__function_insertAdjacentElement);
catvm.memory.variable.Element.element_obj.__defineGetter__("insertAdjacentElement",function insertAdjacentElement(){return catvm.memory.variable.Element.__function_insertAdjacentElement;});
Element.prototype["insertAdjacentElement"] = function insertAdjacentElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["insertAdjacentElement"]);//407

catvm.memory.variable.Element.__function_insertAdjacentHTML = Object.getOwnPropertyDescriptor(Element.prototype,"insertAdjacentHTML").value; catvm.safefunction(catvm.memory.variable.Element.__function_insertAdjacentHTML);
catvm.memory.variable.Element.element_obj.__defineGetter__("insertAdjacentHTML",function insertAdjacentHTML(){return catvm.memory.variable.Element.__function_insertAdjacentHTML;});
Element.prototype["insertAdjacentHTML"] = function insertAdjacentHTML(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["insertAdjacentHTML"]);//407

catvm.memory.variable.Element.__function_insertAdjacentText = Object.getOwnPropertyDescriptor(Element.prototype,"insertAdjacentText").value; catvm.safefunction(catvm.memory.variable.Element.__function_insertAdjacentText);
catvm.memory.variable.Element.element_obj.__defineGetter__("insertAdjacentText",function insertAdjacentText(){return catvm.memory.variable.Element.__function_insertAdjacentText;});
Element.prototype["insertAdjacentText"] = function insertAdjacentText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["insertAdjacentText"]);//407

catvm.memory.variable.Element.__function_matches = Object.getOwnPropertyDescriptor(Element.prototype,"matches").value; catvm.safefunction(catvm.memory.variable.Element.__function_matches);
catvm.memory.variable.Element.element_obj.__defineGetter__("matches",function matches(){return catvm.memory.variable.Element.__function_matches;});
Element.prototype["matches"] = function matches(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["matches"]);//407

catvm.memory.variable.Element.__function_prepend = Object.getOwnPropertyDescriptor(Element.prototype,"prepend").value; catvm.safefunction(catvm.memory.variable.Element.__function_prepend);
catvm.memory.variable.Element.element_obj.__defineGetter__("prepend",function prepend(){return catvm.memory.variable.Element.__function_prepend;});
Element.prototype["prepend"] = function prepend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["prepend"]);//407

catvm.memory.variable.Element.__function_querySelector = Object.getOwnPropertyDescriptor(Element.prototype,"querySelector").value; catvm.safefunction(catvm.memory.variable.Element.__function_querySelector);
catvm.memory.variable.Element.element_obj.__defineGetter__("querySelector",function querySelector(){return catvm.memory.variable.Element.__function_querySelector;});
Element.prototype["querySelector"] = function querySelector(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["querySelector"]);//407

catvm.memory.variable.Element.__function_querySelectorAll = Object.getOwnPropertyDescriptor(Element.prototype,"querySelectorAll").value; catvm.safefunction(catvm.memory.variable.Element.__function_querySelectorAll);
catvm.memory.variable.Element.element_obj.__defineGetter__("querySelectorAll",function querySelectorAll(){return catvm.memory.variable.Element.__function_querySelectorAll;});
Element.prototype["querySelectorAll"] = function querySelectorAll(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["querySelectorAll"]);//407

catvm.memory.variable.Element.__function_releasePointerCapture = Object.getOwnPropertyDescriptor(Element.prototype,"releasePointerCapture").value; catvm.safefunction(catvm.memory.variable.Element.__function_releasePointerCapture);
catvm.memory.variable.Element.element_obj.__defineGetter__("releasePointerCapture",function releasePointerCapture(){return catvm.memory.variable.Element.__function_releasePointerCapture;});
Element.prototype["releasePointerCapture"] = function releasePointerCapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["releasePointerCapture"]);//407

catvm.memory.variable.Element.__function_remove = Object.getOwnPropertyDescriptor(Element.prototype,"remove").value; catvm.safefunction(catvm.memory.variable.Element.__function_remove);
catvm.memory.variable.Element.element_obj.__defineGetter__("remove",function remove(){return catvm.memory.variable.Element.__function_remove;});
Element.prototype["remove"] = function remove(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["remove"]);//407

catvm.memory.variable.Element.__function_removeAttribute = Object.getOwnPropertyDescriptor(Element.prototype,"removeAttribute").value; catvm.safefunction(catvm.memory.variable.Element.__function_removeAttribute);
catvm.memory.variable.Element.element_obj.__defineGetter__("removeAttribute",function removeAttribute(){return catvm.memory.variable.Element.__function_removeAttribute;});
Element.prototype["removeAttribute"] = function removeAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["removeAttribute"]);//407

catvm.memory.variable.Element.__function_removeAttributeNS = Object.getOwnPropertyDescriptor(Element.prototype,"removeAttributeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_removeAttributeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("removeAttributeNS",function removeAttributeNS(){return catvm.memory.variable.Element.__function_removeAttributeNS;});
Element.prototype["removeAttributeNS"] = function removeAttributeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["removeAttributeNS"]);//407

catvm.memory.variable.Element.__function_removeAttributeNode = Object.getOwnPropertyDescriptor(Element.prototype,"removeAttributeNode").value; catvm.safefunction(catvm.memory.variable.Element.__function_removeAttributeNode);
catvm.memory.variable.Element.element_obj.__defineGetter__("removeAttributeNode",function removeAttributeNode(){return catvm.memory.variable.Element.__function_removeAttributeNode;});
Element.prototype["removeAttributeNode"] = function removeAttributeNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["removeAttributeNode"]);//407

catvm.memory.variable.Element.__function_replaceChildren = Object.getOwnPropertyDescriptor(Element.prototype,"replaceChildren").value; catvm.safefunction(catvm.memory.variable.Element.__function_replaceChildren);
catvm.memory.variable.Element.element_obj.__defineGetter__("replaceChildren",function replaceChildren(){return catvm.memory.variable.Element.__function_replaceChildren;});
Element.prototype["replaceChildren"] = function replaceChildren(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["replaceChildren"]);//407

catvm.memory.variable.Element.__function_replaceWith = Object.getOwnPropertyDescriptor(Element.prototype,"replaceWith").value; catvm.safefunction(catvm.memory.variable.Element.__function_replaceWith);
catvm.memory.variable.Element.element_obj.__defineGetter__("replaceWith",function replaceWith(){return catvm.memory.variable.Element.__function_replaceWith;});
Element.prototype["replaceWith"] = function replaceWith(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["replaceWith"]);//407

catvm.memory.variable.Element.__function_requestPointerLock = Object.getOwnPropertyDescriptor(Element.prototype,"requestPointerLock").value; catvm.safefunction(catvm.memory.variable.Element.__function_requestPointerLock);
catvm.memory.variable.Element.element_obj.__defineGetter__("requestPointerLock",function requestPointerLock(){return catvm.memory.variable.Element.__function_requestPointerLock;});
Element.prototype["requestPointerLock"] = function requestPointerLock(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["requestPointerLock"]);//407

catvm.memory.variable.Element.__function_scroll = Object.getOwnPropertyDescriptor(Element.prototype,"scroll").value; catvm.safefunction(catvm.memory.variable.Element.__function_scroll);
catvm.memory.variable.Element.element_obj.__defineGetter__("scroll",function scroll(){return catvm.memory.variable.Element.__function_scroll;});
Element.prototype["scroll"] = function scroll(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["scroll"]);//407

catvm.memory.variable.Element.__function_scrollBy = Object.getOwnPropertyDescriptor(Element.prototype,"scrollBy").value; catvm.safefunction(catvm.memory.variable.Element.__function_scrollBy);
catvm.memory.variable.Element.element_obj.__defineGetter__("scrollBy",function scrollBy(){return catvm.memory.variable.Element.__function_scrollBy;});
Element.prototype["scrollBy"] = function scrollBy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["scrollBy"]);//407

catvm.memory.variable.Element.__function_scrollIntoView = Object.getOwnPropertyDescriptor(Element.prototype,"scrollIntoView").value; catvm.safefunction(catvm.memory.variable.Element.__function_scrollIntoView);
catvm.memory.variable.Element.element_obj.__defineGetter__("scrollIntoView",function scrollIntoView(){return catvm.memory.variable.Element.__function_scrollIntoView;});
Element.prototype["scrollIntoView"] = function scrollIntoView(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["scrollIntoView"]);//407

catvm.memory.variable.Element.__function_scrollIntoViewIfNeeded = Object.getOwnPropertyDescriptor(Element.prototype,"scrollIntoViewIfNeeded").value; catvm.safefunction(catvm.memory.variable.Element.__function_scrollIntoViewIfNeeded);
catvm.memory.variable.Element.element_obj.__defineGetter__("scrollIntoViewIfNeeded",function scrollIntoViewIfNeeded(){return catvm.memory.variable.Element.__function_scrollIntoViewIfNeeded;});
Element.prototype["scrollIntoViewIfNeeded"] = function scrollIntoViewIfNeeded(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["scrollIntoViewIfNeeded"]);//407

catvm.memory.variable.Element.__function_scrollTo = Object.getOwnPropertyDescriptor(Element.prototype,"scrollTo").value; catvm.safefunction(catvm.memory.variable.Element.__function_scrollTo);
catvm.memory.variable.Element.element_obj.__defineGetter__("scrollTo",function scrollTo(){return catvm.memory.variable.Element.__function_scrollTo;});
Element.prototype["scrollTo"] = function scrollTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["scrollTo"]);//407

catvm.memory.variable.Element.__function_setAttribute = Object.getOwnPropertyDescriptor(Element.prototype,"setAttribute").value; catvm.safefunction(catvm.memory.variable.Element.__function_setAttribute);
catvm.memory.variable.Element.element_obj.__defineGetter__("setAttribute",function setAttribute(){return catvm.memory.variable.Element.__function_setAttribute;});
Element.prototype["setAttribute"] = function setAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setAttribute"]);//407

catvm.memory.variable.Element.__function_setAttributeNS = Object.getOwnPropertyDescriptor(Element.prototype,"setAttributeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_setAttributeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("setAttributeNS",function setAttributeNS(){return catvm.memory.variable.Element.__function_setAttributeNS;});
Element.prototype["setAttributeNS"] = function setAttributeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setAttributeNS"]);//407

catvm.memory.variable.Element.__function_setAttributeNode = Object.getOwnPropertyDescriptor(Element.prototype,"setAttributeNode").value; catvm.safefunction(catvm.memory.variable.Element.__function_setAttributeNode);
catvm.memory.variable.Element.element_obj.__defineGetter__("setAttributeNode",function setAttributeNode(){return catvm.memory.variable.Element.__function_setAttributeNode;});
Element.prototype["setAttributeNode"] = function setAttributeNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setAttributeNode"]);//407

catvm.memory.variable.Element.__function_setAttributeNodeNS = Object.getOwnPropertyDescriptor(Element.prototype,"setAttributeNodeNS").value; catvm.safefunction(catvm.memory.variable.Element.__function_setAttributeNodeNS);
catvm.memory.variable.Element.element_obj.__defineGetter__("setAttributeNodeNS",function setAttributeNodeNS(){return catvm.memory.variable.Element.__function_setAttributeNodeNS;});
Element.prototype["setAttributeNodeNS"] = function setAttributeNodeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setAttributeNodeNS"]);//407

catvm.memory.variable.Element.__function_setPointerCapture = Object.getOwnPropertyDescriptor(Element.prototype,"setPointerCapture").value; catvm.safefunction(catvm.memory.variable.Element.__function_setPointerCapture);
catvm.memory.variable.Element.element_obj.__defineGetter__("setPointerCapture",function setPointerCapture(){return catvm.memory.variable.Element.__function_setPointerCapture;});
Element.prototype["setPointerCapture"] = function setPointerCapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setPointerCapture"]);//407

catvm.memory.variable.Element.__function_toggleAttribute = Object.getOwnPropertyDescriptor(Element.prototype,"toggleAttribute").value; catvm.safefunction(catvm.memory.variable.Element.__function_toggleAttribute);
catvm.memory.variable.Element.element_obj.__defineGetter__("toggleAttribute",function toggleAttribute(){return catvm.memory.variable.Element.__function_toggleAttribute;});
Element.prototype["toggleAttribute"] = function toggleAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["toggleAttribute"]);//407

catvm.memory.variable.Element.__function_webkitMatchesSelector = Object.getOwnPropertyDescriptor(Element.prototype,"webkitMatchesSelector").value; catvm.safefunction(catvm.memory.variable.Element.__function_webkitMatchesSelector);
catvm.memory.variable.Element.element_obj.__defineGetter__("webkitMatchesSelector",function webkitMatchesSelector(){return catvm.memory.variable.Element.__function_webkitMatchesSelector;});
Element.prototype["webkitMatchesSelector"] = function webkitMatchesSelector(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["webkitMatchesSelector"]);//407

catvm.memory.variable.Element.__function_webkitRequestFullScreen = Object.getOwnPropertyDescriptor(Element.prototype,"webkitRequestFullScreen").value; catvm.safefunction(catvm.memory.variable.Element.__function_webkitRequestFullScreen);
catvm.memory.variable.Element.element_obj.__defineGetter__("webkitRequestFullScreen",function webkitRequestFullScreen(){return catvm.memory.variable.Element.__function_webkitRequestFullScreen;});
Element.prototype["webkitRequestFullScreen"] = function webkitRequestFullScreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["webkitRequestFullScreen"]);//407

catvm.memory.variable.Element.__function_webkitRequestFullscreen = Object.getOwnPropertyDescriptor(Element.prototype,"webkitRequestFullscreen").value; catvm.safefunction(catvm.memory.variable.Element.__function_webkitRequestFullscreen);
catvm.memory.variable.Element.element_obj.__defineGetter__("webkitRequestFullscreen",function webkitRequestFullscreen(){return catvm.memory.variable.Element.__function_webkitRequestFullscreen;});
Element.prototype["webkitRequestFullscreen"] = function webkitRequestFullscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["webkitRequestFullscreen"]);//407

catvm.memory.variable.Element.__function_checkVisibility = Object.getOwnPropertyDescriptor(Element.prototype,"checkVisibility").value; catvm.safefunction(catvm.memory.variable.Element.__function_checkVisibility);
catvm.memory.variable.Element.element_obj.__defineGetter__("checkVisibility",function checkVisibility(){return catvm.memory.variable.Element.__function_checkVisibility;});
Element.prototype["checkVisibility"] = function checkVisibility(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["checkVisibility"]);//407

catvm.memory.variable.Element.__function_getAnimations = Object.getOwnPropertyDescriptor(Element.prototype,"getAnimations").value; catvm.safefunction(catvm.memory.variable.Element.__function_getAnimations);
catvm.memory.variable.Element.element_obj.__defineGetter__("getAnimations",function getAnimations(){return catvm.memory.variable.Element.__function_getAnimations;});
Element.prototype["getAnimations"] = function getAnimations(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["getAnimations"]);//407

catvm.memory.variable.Element.__function_setHTML = Object.getOwnPropertyDescriptor(Element.prototype,"setHTML").value; catvm.safefunction(catvm.memory.variable.Element.__function_setHTML);
catvm.memory.variable.Element.element_obj.__defineGetter__("setHTML",function setHTML(){return catvm.memory.variable.Element.__function_setHTML;});
Element.prototype["setHTML"] = function setHTML(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["setHTML"]);//407

catvm.memory.variable.Element.__function_requestFullscreen = Object.getOwnPropertyDescriptor(Element.prototype,"requestFullscreen").value; catvm.safefunction(catvm.memory.variable.Element.__function_requestFullscreen);
catvm.memory.variable.Element.element_obj.__defineGetter__("requestFullscreen",function requestFullscreen(){return catvm.memory.variable.Element.__function_requestFullscreen;});
Element.prototype["requestFullscreen"] = function requestFullscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Element.prototype["requestFullscreen"]);//407

//======	invocation error func code end	======

Element = catvm.proxy(Element);

if(catvm.memory.config.framework_debugger){debugger;}
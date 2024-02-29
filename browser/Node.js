var dsf_tmp_context = catvm.memory.variable.Node = {};
var Node = function Node() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Node);//14


//======	symbol code start	======
Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
		value: "Node",
	    configurable: true
	}
});//85
//======	symbol code end	======
Node.__proto__ = EventTarget;
Node.prototype.__proto__ = EventTarget.prototype;

catvm.memory.variable.Node.node_obj = {};
catvm.memory.variable.Node.node_obj.__proto__ = Node.prototype;
//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
Node.prototype["appendChild"] = function appendChild(){debugger;}; catvm.safefunction(Node.prototype["appendChild"]);//215
Node.prototype["cloneNode"] = function cloneNode(){debugger;}; catvm.safefunction(Node.prototype["cloneNode"]);//215
Node.prototype["compareDocumentPosition"] = function compareDocumentPosition(){debugger;}; catvm.safefunction(Node.prototype["compareDocumentPosition"]);//215
Node.prototype["contains"] = function contains(){debugger;}; catvm.safefunction(Node.prototype["contains"]);//215
Node.prototype["getRootNode"] = function getRootNode(){debugger;}; catvm.safefunction(Node.prototype["getRootNode"]);//215
Node.prototype["hasChildNodes"] = function hasChildNodes(){debugger;}; catvm.safefunction(Node.prototype["hasChildNodes"]);//215
Node.prototype["insertBefore"] = function insertBefore(){debugger;}; catvm.safefunction(Node.prototype["insertBefore"]);//215
Node.prototype["isDefaultNamespace"] = function isDefaultNamespace(){debugger;}; catvm.safefunction(Node.prototype["isDefaultNamespace"]);//215
Node.prototype["isEqualNode"] = function isEqualNode(){debugger;}; catvm.safefunction(Node.prototype["isEqualNode"]);//215
Node.prototype["isSameNode"] = function isSameNode(){debugger;}; catvm.safefunction(Node.prototype["isSameNode"]);//215
Node.prototype["lookupNamespaceURI"] = function lookupNamespaceURI(){debugger;}; catvm.safefunction(Node.prototype["lookupNamespaceURI"]);//215
Node.prototype["lookupPrefix"] = function lookupPrefix(){debugger;}; catvm.safefunction(Node.prototype["lookupPrefix"]);//215
Node.prototype["normalize"] = function normalize(){debugger;}; catvm.safefunction(Node.prototype["normalize"]);//215
Node.prototype["removeChild"] = function removeChild(){debugger;}; catvm.safefunction(Node.prototype["removeChild"]);//215
Node.prototype["replaceChild"] = function replaceChild(){debugger;}; catvm.safefunction(Node.prototype["replaceChild"]);//215
//======	data descriptor func code end	======


//======	diy data descriptor property code start	======
Object.defineProperty(Node.prototype, "ELEMENT_NODE", {
    enumerable:true,
	value: 1
});//277
Object.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
    enumerable:true,
	value: 2
});//277
Object.defineProperty(Node.prototype, "TEXT_NODE", {
    enumerable:true,
	value: 3
});//277
Object.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
    enumerable:true,
	value: 4
});//277
Object.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
    enumerable:true,
	value: 5
});//277
Object.defineProperty(Node.prototype, "ENTITY_NODE", {
    enumerable:true,
	value: 6
});//277
Object.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
    enumerable:true,
	value: 7
});//277
Object.defineProperty(Node.prototype, "COMMENT_NODE", {
    enumerable:true,
	value: 8
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_NODE", {
    enumerable:true,
	value: 9
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
    enumerable:true,
	value: 10
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
    enumerable:true,
	value: 11
});//277
Object.defineProperty(Node.prototype, "NOTATION_NODE", {
    enumerable:true,
	value: 12
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
    enumerable:true,
	value: 1
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
    enumerable:true,
	value: 2
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
    enumerable:true,
	value: 4
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
    enumerable:true,
	value: 8
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
    enumerable:true,
	value: 16
});//277
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    enumerable:true,
	value: 32
});//277
//======	diy data descriptor property code end	======


//======	diy data descriptor func code start	======
//======	diy data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.nodeType_getter = function nodeType() {debugger;}; catvm.safefunction(dsf_tmp_context.nodeType_getter);//294
Object.defineProperty(dsf_tmp_context.nodeType_getter, "name", {
    value: "get nodeType",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "nodeType", {
	get: dsf_tmp_context.nodeType_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.nodeName_getter = function nodeName() {debugger;}; catvm.safefunction(dsf_tmp_context.nodeName_getter);//294
Object.defineProperty(dsf_tmp_context.nodeName_getter, "name", {
    value: "get nodeName",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "nodeName", {
	get: dsf_tmp_context.nodeName_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.baseURI_getter = function baseURI() {debugger;}; catvm.safefunction(dsf_tmp_context.baseURI_getter);//294
Object.defineProperty(dsf_tmp_context.baseURI_getter, "name", {
    value: "get baseURI",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "baseURI", {
	get: dsf_tmp_context.baseURI_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.isConnected_getter = function isConnected() {debugger;}; catvm.safefunction(dsf_tmp_context.isConnected_getter);//294
Object.defineProperty(dsf_tmp_context.isConnected_getter, "name", {
    value: "get isConnected",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "isConnected", {
	get: dsf_tmp_context.isConnected_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.ownerDocument_getter = function ownerDocument() {debugger;}; catvm.safefunction(dsf_tmp_context.ownerDocument_getter);//294
Object.defineProperty(dsf_tmp_context.ownerDocument_getter, "name", {
    value: "get ownerDocument",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "ownerDocument", {
	get: dsf_tmp_context.ownerDocument_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.parentNode_getter = function parentNode() {debugger;}; catvm.safefunction(dsf_tmp_context.parentNode_getter);//294
Object.defineProperty(dsf_tmp_context.parentNode_getter, "name", {
    value: "get parentNode",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "parentNode", {
	get: dsf_tmp_context.parentNode_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.parentElement_getter = function parentElement() {debugger;}; catvm.safefunction(dsf_tmp_context.parentElement_getter);//294
Object.defineProperty(dsf_tmp_context.parentElement_getter, "name", {
    value: "get parentElement",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "parentElement", {
	get: dsf_tmp_context.parentElement_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.childNodes_getter = function childNodes() {debugger;}; catvm.safefunction(dsf_tmp_context.childNodes_getter);//294
Object.defineProperty(dsf_tmp_context.childNodes_getter, "name", {
    value: "get childNodes",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "childNodes", {
	get: dsf_tmp_context.childNodes_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.firstChild_getter = function firstChild() {debugger;}; catvm.safefunction(dsf_tmp_context.firstChild_getter);//294
Object.defineProperty(dsf_tmp_context.firstChild_getter, "name", {
    value: "get firstChild",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "firstChild", {
	get: dsf_tmp_context.firstChild_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.lastChild_getter = function lastChild() {debugger;}; catvm.safefunction(dsf_tmp_context.lastChild_getter);//294
Object.defineProperty(dsf_tmp_context.lastChild_getter, "name", {
    value: "get lastChild",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "lastChild", {
	get: dsf_tmp_context.lastChild_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.previousSibling_getter = function previousSibling() {debugger;}; catvm.safefunction(dsf_tmp_context.previousSibling_getter);//294
Object.defineProperty(dsf_tmp_context.previousSibling_getter, "name", {
    value: "get previousSibling",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "previousSibling", {
	get: dsf_tmp_context.previousSibling_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.nextSibling_getter = function nextSibling() {debugger;}; catvm.safefunction(dsf_tmp_context.nextSibling_getter);//294
Object.defineProperty(dsf_tmp_context.nextSibling_getter, "name", {
    value: "get nextSibling",
    configurable: true
});//300

Object.defineProperty(Node.prototype, "nextSibling", {
	get: dsf_tmp_context.nextSibling_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.nodeValue_getter = function nodeValue() {debugger;}; catvm.safefunction(dsf_tmp_context.nodeValue_getter);//294
Object.defineProperty(dsf_tmp_context.nodeValue_getter, "name", {
    value: "get nodeValue",
    configurable: true
});//300
dsf_tmp_context.nodeValue_setter = function nodeValue() {debugger;}; catvm.safefunction(dsf_tmp_context.nodeValue_setter);//305
Object.defineProperty(dsf_tmp_context.nodeValue_setter, "name", {
    value: "set nodeValue",
    configurable: true
});//310

Object.defineProperty(Node.prototype, "nodeValue", {
	get: dsf_tmp_context.nodeValue_getter,
	set: dsf_tmp_context.nodeValue_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.textContent_getter = function textContent() {debugger;}; catvm.safefunction(dsf_tmp_context.textContent_getter);//294
Object.defineProperty(dsf_tmp_context.textContent_getter, "name", {
    value: "get textContent",
    configurable: true
});//300
dsf_tmp_context.textContent_setter = function textContent() {debugger;}; catvm.safefunction(dsf_tmp_context.textContent_setter);//305
Object.defineProperty(dsf_tmp_context.textContent_setter, "name", {
    value: "set textContent",
    configurable: true
});//310

Object.defineProperty(Node.prototype, "textContent", {
	get: dsf_tmp_context.textContent_getter,
	set: dsf_tmp_context.textContent_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.Node.node_obj.__defineGetter__("nodeType",Object.getOwnPropertyDescriptor(Node.prototype,"nodeType").get);
dsf_tmp_context.nodeType_getter = function nodeType(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nodeType_getter);
Node.prototype.__defineGetter__("nodeType",dsf_tmp_context.nodeType_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("nodeName",Object.getOwnPropertyDescriptor(Node.prototype,"nodeName").get);
dsf_tmp_context.nodeName_getter = function nodeName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nodeName_getter);
Node.prototype.__defineGetter__("nodeName",dsf_tmp_context.nodeName_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("baseURI",Object.getOwnPropertyDescriptor(Node.prototype,"baseURI").get);
dsf_tmp_context.baseURI_getter = function baseURI(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.baseURI_getter);
Node.prototype.__defineGetter__("baseURI",dsf_tmp_context.baseURI_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("isConnected",Object.getOwnPropertyDescriptor(Node.prototype,"isConnected").get);
dsf_tmp_context.isConnected_getter = function isConnected(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.isConnected_getter);
Node.prototype.__defineGetter__("isConnected",dsf_tmp_context.isConnected_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("ownerDocument",Object.getOwnPropertyDescriptor(Node.prototype,"ownerDocument").get);
dsf_tmp_context.ownerDocument_getter = function ownerDocument(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ownerDocument_getter);
Node.prototype.__defineGetter__("ownerDocument",dsf_tmp_context.ownerDocument_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("parentNode",Object.getOwnPropertyDescriptor(Node.prototype,"parentNode").get);
dsf_tmp_context.parentNode_getter = function parentNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.parentNode_getter);
Node.prototype.__defineGetter__("parentNode",dsf_tmp_context.parentNode_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("parentElement",Object.getOwnPropertyDescriptor(Node.prototype,"parentElement").get);
dsf_tmp_context.parentElement_getter = function parentElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.parentElement_getter);
Node.prototype.__defineGetter__("parentElement",dsf_tmp_context.parentElement_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("childNodes",Object.getOwnPropertyDescriptor(Node.prototype,"childNodes").get);
dsf_tmp_context.childNodes_getter = function childNodes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.childNodes_getter);
Node.prototype.__defineGetter__("childNodes",dsf_tmp_context.childNodes_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("firstChild",Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get);
dsf_tmp_context.firstChild_getter = function firstChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.firstChild_getter);
Node.prototype.__defineGetter__("firstChild",dsf_tmp_context.firstChild_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("lastChild",Object.getOwnPropertyDescriptor(Node.prototype,"lastChild").get);
dsf_tmp_context.lastChild_getter = function lastChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lastChild_getter);
Node.prototype.__defineGetter__("lastChild",dsf_tmp_context.lastChild_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("previousSibling",Object.getOwnPropertyDescriptor(Node.prototype,"previousSibling").get);
dsf_tmp_context.previousSibling_getter = function previousSibling(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.previousSibling_getter);
Node.prototype.__defineGetter__("previousSibling",dsf_tmp_context.previousSibling_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("nextSibling",Object.getOwnPropertyDescriptor(Node.prototype,"nextSibling").get);
dsf_tmp_context.nextSibling_getter = function nextSibling(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nextSibling_getter);
Node.prototype.__defineGetter__("nextSibling",dsf_tmp_context.nextSibling_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("nodeValue",Object.getOwnPropertyDescriptor(Node.prototype,"nodeValue").get);
dsf_tmp_context.nodeValue_getter = function nodeValue(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.nodeValue_getter);
Node.prototype.__defineGetter__("nodeValue",dsf_tmp_context.nodeValue_getter);//393

catvm.memory.variable.Node.node_obj.__defineGetter__("textContent",Object.getOwnPropertyDescriptor(Node.prototype,"textContent").get);
dsf_tmp_context.textContent_getter = function textContent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.textContent_getter);
Node.prototype.__defineGetter__("textContent",dsf_tmp_context.textContent_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.Node.__function_appendChild = Object.getOwnPropertyDescriptor(Node.prototype,"appendChild").value; catvm.safefunction(catvm.memory.variable.Node.__function_appendChild);
catvm.memory.variable.Node.node_obj.__defineGetter__("appendChild",function appendChild(){return catvm.memory.variable.Node.__function_appendChild;});
Node.prototype["appendChild"] = function appendChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["appendChild"]);//407

catvm.memory.variable.Node.__function_cloneNode = Object.getOwnPropertyDescriptor(Node.prototype,"cloneNode").value; catvm.safefunction(catvm.memory.variable.Node.__function_cloneNode);
catvm.memory.variable.Node.node_obj.__defineGetter__("cloneNode",function cloneNode(){return catvm.memory.variable.Node.__function_cloneNode;});
Node.prototype["cloneNode"] = function cloneNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["cloneNode"]);//407

catvm.memory.variable.Node.__function_compareDocumentPosition = Object.getOwnPropertyDescriptor(Node.prototype,"compareDocumentPosition").value; catvm.safefunction(catvm.memory.variable.Node.__function_compareDocumentPosition);
catvm.memory.variable.Node.node_obj.__defineGetter__("compareDocumentPosition",function compareDocumentPosition(){return catvm.memory.variable.Node.__function_compareDocumentPosition;});
Node.prototype["compareDocumentPosition"] = function compareDocumentPosition(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["compareDocumentPosition"]);//407

catvm.memory.variable.Node.__function_contains = Object.getOwnPropertyDescriptor(Node.prototype,"contains").value; catvm.safefunction(catvm.memory.variable.Node.__function_contains);
catvm.memory.variable.Node.node_obj.__defineGetter__("contains",function contains(){return catvm.memory.variable.Node.__function_contains;});
Node.prototype["contains"] = function contains(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["contains"]);//407

catvm.memory.variable.Node.__function_getRootNode = Object.getOwnPropertyDescriptor(Node.prototype,"getRootNode").value; catvm.safefunction(catvm.memory.variable.Node.__function_getRootNode);
catvm.memory.variable.Node.node_obj.__defineGetter__("getRootNode",function getRootNode(){return catvm.memory.variable.Node.__function_getRootNode;});
Node.prototype["getRootNode"] = function getRootNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["getRootNode"]);//407

catvm.memory.variable.Node.__function_hasChildNodes = Object.getOwnPropertyDescriptor(Node.prototype,"hasChildNodes").value; catvm.safefunction(catvm.memory.variable.Node.__function_hasChildNodes);
catvm.memory.variable.Node.node_obj.__defineGetter__("hasChildNodes",function hasChildNodes(){return catvm.memory.variable.Node.__function_hasChildNodes;});
Node.prototype["hasChildNodes"] = function hasChildNodes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["hasChildNodes"]);//407

catvm.memory.variable.Node.__function_insertBefore = Object.getOwnPropertyDescriptor(Node.prototype,"insertBefore").value; catvm.safefunction(catvm.memory.variable.Node.__function_insertBefore);
catvm.memory.variable.Node.node_obj.__defineGetter__("insertBefore",function insertBefore(){return catvm.memory.variable.Node.__function_insertBefore;});
Node.prototype["insertBefore"] = function insertBefore(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["insertBefore"]);//407

catvm.memory.variable.Node.__function_isDefaultNamespace = Object.getOwnPropertyDescriptor(Node.prototype,"isDefaultNamespace").value; catvm.safefunction(catvm.memory.variable.Node.__function_isDefaultNamespace);
catvm.memory.variable.Node.node_obj.__defineGetter__("isDefaultNamespace",function isDefaultNamespace(){return catvm.memory.variable.Node.__function_isDefaultNamespace;});
Node.prototype["isDefaultNamespace"] = function isDefaultNamespace(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["isDefaultNamespace"]);//407

catvm.memory.variable.Node.__function_isEqualNode = Object.getOwnPropertyDescriptor(Node.prototype,"isEqualNode").value; catvm.safefunction(catvm.memory.variable.Node.__function_isEqualNode);
catvm.memory.variable.Node.node_obj.__defineGetter__("isEqualNode",function isEqualNode(){return catvm.memory.variable.Node.__function_isEqualNode;});
Node.prototype["isEqualNode"] = function isEqualNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["isEqualNode"]);//407

catvm.memory.variable.Node.__function_isSameNode = Object.getOwnPropertyDescriptor(Node.prototype,"isSameNode").value; catvm.safefunction(catvm.memory.variable.Node.__function_isSameNode);
catvm.memory.variable.Node.node_obj.__defineGetter__("isSameNode",function isSameNode(){return catvm.memory.variable.Node.__function_isSameNode;});
Node.prototype["isSameNode"] = function isSameNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["isSameNode"]);//407

catvm.memory.variable.Node.__function_lookupNamespaceURI = Object.getOwnPropertyDescriptor(Node.prototype,"lookupNamespaceURI").value; catvm.safefunction(catvm.memory.variable.Node.__function_lookupNamespaceURI);
catvm.memory.variable.Node.node_obj.__defineGetter__("lookupNamespaceURI",function lookupNamespaceURI(){return catvm.memory.variable.Node.__function_lookupNamespaceURI;});
Node.prototype["lookupNamespaceURI"] = function lookupNamespaceURI(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["lookupNamespaceURI"]);//407

catvm.memory.variable.Node.__function_lookupPrefix = Object.getOwnPropertyDescriptor(Node.prototype,"lookupPrefix").value; catvm.safefunction(catvm.memory.variable.Node.__function_lookupPrefix);
catvm.memory.variable.Node.node_obj.__defineGetter__("lookupPrefix",function lookupPrefix(){return catvm.memory.variable.Node.__function_lookupPrefix;});
Node.prototype["lookupPrefix"] = function lookupPrefix(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["lookupPrefix"]);//407

catvm.memory.variable.Node.__function_normalize = Object.getOwnPropertyDescriptor(Node.prototype,"normalize").value; catvm.safefunction(catvm.memory.variable.Node.__function_normalize);
catvm.memory.variable.Node.node_obj.__defineGetter__("normalize",function normalize(){return catvm.memory.variable.Node.__function_normalize;});
Node.prototype["normalize"] = function normalize(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["normalize"]);//407

catvm.memory.variable.Node.__function_removeChild = Object.getOwnPropertyDescriptor(Node.prototype,"removeChild").value; catvm.safefunction(catvm.memory.variable.Node.__function_removeChild);
catvm.memory.variable.Node.node_obj.__defineGetter__("removeChild",function removeChild(){return catvm.memory.variable.Node.__function_removeChild;});
Node.prototype["removeChild"] = function removeChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["removeChild"]);//407

catvm.memory.variable.Node.__function_replaceChild = Object.getOwnPropertyDescriptor(Node.prototype,"replaceChild").value; catvm.safefunction(catvm.memory.variable.Node.__function_replaceChild);
catvm.memory.variable.Node.node_obj.__defineGetter__("replaceChild",function replaceChild(){return catvm.memory.variable.Node.__function_replaceChild;});
Node.prototype["replaceChild"] = function replaceChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Node.prototype["replaceChild"]);//407

//======	invocation error func code end	======
Node = catvm.proxy(Node);

if(catvm.memory.config.framework_debugger){debugger;}

var dsf_tmp_context = catvm.memory.variable.Document = {};
var Document = function Document() { // 构造函数
}; catvm.safefunction(Document);//14


//======	symbol code start	======
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
		value: "Document",
	    configurable: true
	},
    [Symbol.unscopables]: {
		value: {"fullscreen":true,"prepend":true,"append":true,"replaceChildren":true},
	    configurable: true
	}
});//95
//======	symbol code end	======
Document.__proto__ = Node;
Document.prototype.__proto__ = Node.prototype;

catvm.memory.variable.Document.document_obj = {};
catvm.memory.variable.Document.document_obj.__proto__ = Document.prototype;
//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
Document.prototype["adoptNode"] = function adoptNode(){debugger;}; catvm.safefunction(Document.prototype["adoptNode"]);//215
Document.prototype["append"] = function append(){debugger;}; catvm.safefunction(Document.prototype["append"]);//215
Document.prototype["captureEvents"] = function captureEvents(){debugger;}; catvm.safefunction(Document.prototype["captureEvents"]);//215
Document.prototype["caretRangeFromPoint"] = function caretRangeFromPoint(){debugger;}; catvm.safefunction(Document.prototype["caretRangeFromPoint"]);//215
Document.prototype["clear"] = function clear(){debugger;}; catvm.safefunction(Document.prototype["clear"]);//215
Document.prototype["close"] = function close(){debugger;}; catvm.safefunction(Document.prototype["close"]);//215
Document.prototype["createAttribute"] = function createAttribute(){debugger;}; catvm.safefunction(Document.prototype["createAttribute"]);//215
Document.prototype["createAttributeNS"] = function createAttributeNS(){debugger;}; catvm.safefunction(Document.prototype["createAttributeNS"]);//215
Document.prototype["createCDATASection"] = function createCDATASection(){debugger;}; catvm.safefunction(Document.prototype["createCDATASection"]);//215
Document.prototype["createComment"] = function createComment(){debugger;}; catvm.safefunction(Document.prototype["createComment"]);//215
Document.prototype["createDocumentFragment"] = function createDocumentFragment(){debugger;}; catvm.safefunction(Document.prototype["createDocumentFragment"]);//215
Document.prototype["createElement"] = function createElement(tagName){
    tagName = tagName.toLowerCase();
    if (catvm.memory.htmlelements[tagName] == undefined) {
        // 该标签未不全，待完善
        debugger;
    } else {
        // 框架内存有 该div对象时，返回内存的div对象，并套上代理。
        var tagElement = catvm.memory.htmlelements[tagName]();
        return catvm.proxy(tagElement);
    }
}; catvm.safefunction(Document.prototype["createElement"]);//215
Document.prototype["createElementNS"] = function createElementNS(){debugger;}; catvm.safefunction(Document.prototype["createElementNS"]);//215
Document.prototype["createEvent"] = function createEvent(type){
    const event = new (class Event{});
    event.__proto__ = Event.prototype;
    event.__proto__.timeStamp = Date.now();
    debugger;
    return event;
}; catvm.safefunction(Document.prototype["createEvent"]);//215
Document.prototype["createExpression"] = function createExpression(){debugger;}; catvm.safefunction(Document.prototype["createExpression"]);//215
Document.prototype["createNSResolver"] = function createNSResolver(){debugger;}; catvm.safefunction(Document.prototype["createNSResolver"]);//215
Document.prototype["createNodeIterator"] = function createNodeIterator(){debugger;}; catvm.safefunction(Document.prototype["createNodeIterator"]);//215
Document.prototype["createProcessingInstruction"] = function createProcessingInstruction(){debugger;}; catvm.safefunction(Document.prototype["createProcessingInstruction"]);//215
Document.prototype["createRange"] = function createRange(){debugger;}; catvm.safefunction(Document.prototype["createRange"]);//215
Document.prototype["createTextNode"] = function createTextNode(){debugger;}; catvm.safefunction(Document.prototype["createTextNode"]);//215
Document.prototype["createTreeWalker"] = function createTreeWalker(){debugger;}; catvm.safefunction(Document.prototype["createTreeWalker"]);//215
Document.prototype["elementFromPoint"] = function elementFromPoint(){debugger;}; catvm.safefunction(Document.prototype["elementFromPoint"]);//215
Document.prototype["elementsFromPoint"] = function elementsFromPoint(){debugger;}; catvm.safefunction(Document.prototype["elementsFromPoint"]);//215
Document.prototype["evaluate"] = function evaluate(){debugger;}; catvm.safefunction(Document.prototype["evaluate"]);//215
Document.prototype["execCommand"] = function execCommand(){debugger;}; catvm.safefunction(Document.prototype["execCommand"]);//215
Document.prototype["exitFullscreen"] = function exitFullscreen(){debugger;}; catvm.safefunction(Document.prototype["exitFullscreen"]);//215
Document.prototype["exitPointerLock"] = function exitPointerLock(){debugger;}; catvm.safefunction(Document.prototype["exitPointerLock"]);//215
Document.prototype["getElementById"] = function getElementById(id){
    debugger;
    // 用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
}; catvm.safefunction(Document.prototype["getElementById"]);//215
Document.prototype["getElementsByClassName"] = function getElementsByClassName(){debugger;}; catvm.safefunction(Document.prototype["getElementsByClassName"]);//215
Document.prototype["getElementsByName"] = function getElementsByName(){debugger;}; catvm.safefunction(Document.prototype["getElementsByName"]);//215
Document.prototype["getElementsByTagName"] = function getElementsByTagName(tagName){
	debugger;
    tagName = tagName.toLowerCase();
    if (catvm.memory.htmlelements[tagName] == undefined) {
        debugger;
    }else{
        var tagElement = catvm.memory.htmlelements[tagName]();
        return catvm.proxy(tagElement);
    }
}; catvm.safefunction(Document.prototype["getElementsByTagName"]);//215
Document.prototype["getElementsByTagNameNS"] = function getElementsByTagNameNS(){debugger;}; catvm.safefunction(Document.prototype["getElementsByTagNameNS"]);//215
Document.prototype["getSelection"] = function getSelection(){debugger;}; catvm.safefunction(Document.prototype["getSelection"]);//215
Document.prototype["hasFocus"] = function hasFocus(){
    // 方法返回一个 Boolean，表明当前文档或者当前文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点。
    return true;
}; catvm.safefunction(Document.prototype["hasFocus"]);//215
Document.prototype["importNode"] = function importNode(){debugger;}; catvm.safefunction(Document.prototype["importNode"]);//215
Document.prototype["open"] = function open(){debugger;}; catvm.safefunction(Document.prototype["open"]);//215
Document.prototype["prepend"] = function prepend(){debugger;}; catvm.safefunction(Document.prototype["prepend"]);//215
Document.prototype["queryCommandEnabled"] = function queryCommandEnabled(){debugger;}; catvm.safefunction(Document.prototype["queryCommandEnabled"]);//215
Document.prototype["queryCommandIndeterm"] = function queryCommandIndeterm(){debugger;}; catvm.safefunction(Document.prototype["queryCommandIndeterm"]);//215
Document.prototype["queryCommandState"] = function queryCommandState(){debugger;}; catvm.safefunction(Document.prototype["queryCommandState"]);//215
Document.prototype["queryCommandSupported"] = function queryCommandSupported(){debugger;}; catvm.safefunction(Document.prototype["queryCommandSupported"]);//215
Document.prototype["queryCommandValue"] = function queryCommandValue(){debugger;}; catvm.safefunction(Document.prototype["queryCommandValue"]);//215
Document.prototype["querySelector"] = function querySelector(){debugger;}; catvm.safefunction(Document.prototype["querySelector"]);//215
Document.prototype["querySelectorAll"] = function querySelectorAll(){debugger;}; catvm.safefunction(Document.prototype["querySelectorAll"]);//215
Document.prototype["releaseEvents"] = function releaseEvents(){debugger;}; catvm.safefunction(Document.prototype["releaseEvents"]);//215
Document.prototype["replaceChildren"] = function replaceChildren(){debugger;}; catvm.safefunction(Document.prototype["replaceChildren"]);//215
Document.prototype["webkitCancelFullScreen"] = function webkitCancelFullScreen(){debugger;}; catvm.safefunction(Document.prototype["webkitCancelFullScreen"]);//215
Document.prototype["webkitExitFullscreen"] = function webkitExitFullscreen(){debugger;}; catvm.safefunction(Document.prototype["webkitExitFullscreen"]);//215
Document.prototype["write"] = function write(){debugger;}; catvm.safefunction(Document.prototype["write"]);//215
Document.prototype["writeln"] = function writeln(){debugger;}; catvm.safefunction(Document.prototype["writeln"]);//215
Document.prototype["exitPictureInPicture"] = function exitPictureInPicture(){debugger;}; catvm.safefunction(Document.prototype["exitPictureInPicture"]);//215
Document.prototype["getAnimations"] = function getAnimations(){debugger;}; catvm.safefunction(Document.prototype["getAnimations"]);//215
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.implementation_getter = function implementation() {debugger;}; catvm.safefunction(dsf_tmp_context.implementation_getter);//295
Object.defineProperty(dsf_tmp_context.implementation_getter, "name", {
    value: "get implementation",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "implementation", {
	get: dsf_tmp_context.implementation_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.URL_getter = function URL() {debugger;}; catvm.safefunction(dsf_tmp_context.URL_getter);//295
Object.defineProperty(dsf_tmp_context.URL_getter, "name", {
    value: "get URL",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "URL", {
	get: dsf_tmp_context.URL_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.documentURI_getter = function documentURI() {debugger;}; catvm.safefunction(dsf_tmp_context.documentURI_getter);//295
Object.defineProperty(dsf_tmp_context.documentURI_getter, "name", {
    value: "get documentURI",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "documentURI", {
	get: dsf_tmp_context.documentURI_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.compatMode_getter = function compatMode() {debugger;}; catvm.safefunction(dsf_tmp_context.compatMode_getter);//295
Object.defineProperty(dsf_tmp_context.compatMode_getter, "name", {
    value: "get compatMode",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "compatMode", {
	get: dsf_tmp_context.compatMode_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.characterSet_getter = function characterSet() {
    return catvm.memory.common_change_with_website["document$characterSet"];
}; catvm.safefunction(dsf_tmp_context.characterSet_getter);//295
Object.defineProperty(dsf_tmp_context.characterSet_getter, "name", {
    value: "get characterSet",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "characterSet", {
	get: dsf_tmp_context.characterSet_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.charset_getter = function charset() {debugger;}; catvm.safefunction(dsf_tmp_context.charset_getter);//295
Object.defineProperty(dsf_tmp_context.charset_getter, "name", {
    value: "get charset",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "charset", {
	get: dsf_tmp_context.charset_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.inputEncoding_getter = function inputEncoding() {debugger;}; catvm.safefunction(dsf_tmp_context.inputEncoding_getter);//295
Object.defineProperty(dsf_tmp_context.inputEncoding_getter, "name", {
    value: "get inputEncoding",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "inputEncoding", {
	get: dsf_tmp_context.inputEncoding_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.contentType_getter = function contentType() {debugger;}; catvm.safefunction(dsf_tmp_context.contentType_getter);//295
Object.defineProperty(dsf_tmp_context.contentType_getter, "name", {
    value: "get contentType",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "contentType", {
	get: dsf_tmp_context.contentType_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.doctype_getter = function doctype() {debugger;}; catvm.safefunction(dsf_tmp_context.doctype_getter);//295
Object.defineProperty(dsf_tmp_context.doctype_getter, "name", {
    value: "get doctype",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "doctype", {
	get: dsf_tmp_context.doctype_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.documentElement_getter = function documentElement() {
    // 是一个会返回文档对象（document）的根元素的只读属性（如 HTML 文档的 <html> 元素）。

}; catvm.safefunction(dsf_tmp_context.documentElement_getter);//295
Object.defineProperty(dsf_tmp_context.documentElement_getter, "name", {
    value: "get documentElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "documentElement", {
	get: dsf_tmp_context.documentElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.xmlEncoding_getter = function xmlEncoding() {debugger;}; catvm.safefunction(dsf_tmp_context.xmlEncoding_getter);//295
Object.defineProperty(dsf_tmp_context.xmlEncoding_getter, "name", {
    value: "get xmlEncoding",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "xmlEncoding", {
	get: dsf_tmp_context.xmlEncoding_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.xmlVersion_getter = function xmlVersion() {debugger;}; catvm.safefunction(dsf_tmp_context.xmlVersion_getter);//295
Object.defineProperty(dsf_tmp_context.xmlVersion_getter, "name", {
    value: "get xmlVersion",
    configurable: true
});//301
dsf_tmp_context.xmlVersion_setter = function xmlVersion() {debugger;}; catvm.safefunction(dsf_tmp_context.xmlVersion_setter);//306
Object.defineProperty(dsf_tmp_context.xmlVersion_setter, "name", {
    value: "set xmlVersion",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "xmlVersion", {
	get: dsf_tmp_context.xmlVersion_getter,
	set: dsf_tmp_context.xmlVersion_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.xmlStandalone_getter = function xmlStandalone() {debugger;}; catvm.safefunction(dsf_tmp_context.xmlStandalone_getter);//295
Object.defineProperty(dsf_tmp_context.xmlStandalone_getter, "name", {
    value: "get xmlStandalone",
    configurable: true
});//301
dsf_tmp_context.xmlStandalone_setter = function xmlStandalone() {debugger;}; catvm.safefunction(dsf_tmp_context.xmlStandalone_setter);//306
Object.defineProperty(dsf_tmp_context.xmlStandalone_setter, "name", {
    value: "set xmlStandalone",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "xmlStandalone", {
	get: dsf_tmp_context.xmlStandalone_getter,
	set: dsf_tmp_context.xmlStandalone_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.domain_getter = function domain() {debugger;}; catvm.safefunction(dsf_tmp_context.domain_getter);//295
Object.defineProperty(dsf_tmp_context.domain_getter, "name", {
    value: "get domain",
    configurable: true
});//301
dsf_tmp_context.domain_setter = function domain() {debugger;}; catvm.safefunction(dsf_tmp_context.domain_setter);//306
Object.defineProperty(dsf_tmp_context.domain_setter, "name", {
    value: "set domain",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "domain", {
	get: dsf_tmp_context.domain_getter,
	set: dsf_tmp_context.domain_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.referrer_getter = function referrer() {
    return location.href || "";
}; catvm.safefunction(dsf_tmp_context.referrer_getter);//295
Object.defineProperty(dsf_tmp_context.referrer_getter, "name", {
    value: "get referrer",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "referrer", {
	get: dsf_tmp_context.referrer_getter,
	enumerable:true,
	configurable:true,
});//332

catvm.memory.variable.Document.cookie_jar = {}; // 管理cookie

dsf_tmp_context.cookie_getter = function cookie() {
    return catvm.memory.tool_funcs.json_to_string(catvm.memory.variable.Document.cookie_jar);
}; catvm.safefunction(dsf_tmp_context.cookie_getter);//295
Object.defineProperty(dsf_tmp_context.cookie_getter, "name", {
    value: "get cookie",
    configurable: true
});//301
dsf_tmp_context.cookie_setter = function cookie(cookie_str) {
    var array = cookie_str.split('; ')[0].split('='); // name=ds=f;  =>  ['name', 'ds', 'f']
    if(array){
        var key = array[0];
        var value = array.slice(1).join('=');
        catvm.memory.variable.Document.cookie_jar[key] = value;
    }
    return cookie_str;
}; catvm.safefunction(dsf_tmp_context.cookie_setter);//306
Object.defineProperty(dsf_tmp_context.cookie_setter, "name", {
    value: "set cookie",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "cookie", {
	get: dsf_tmp_context.cookie_getter,
	set: dsf_tmp_context.cookie_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.lastModified_getter = function lastModified() {debugger;}; catvm.safefunction(dsf_tmp_context.lastModified_getter);//295
Object.defineProperty(dsf_tmp_context.lastModified_getter, "name", {
    value: "get lastModified",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "lastModified", {
	get: dsf_tmp_context.lastModified_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.readyState_getter = function readyState() {debugger;}; catvm.safefunction(dsf_tmp_context.readyState_getter);//295
Object.defineProperty(dsf_tmp_context.readyState_getter, "name", {
    value: "get readyState",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "readyState", {
	get: dsf_tmp_context.readyState_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.title_getter = function title() {debugger;}; catvm.safefunction(dsf_tmp_context.title_getter);//295
Object.defineProperty(dsf_tmp_context.title_getter, "name", {
    value: "get title",
    configurable: true
});//301
dsf_tmp_context.title_setter = function title() {debugger;}; catvm.safefunction(dsf_tmp_context.title_setter);//306
Object.defineProperty(dsf_tmp_context.title_setter, "name", {
    value: "set title",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "title", {
	get: dsf_tmp_context.title_getter,
	set: dsf_tmp_context.title_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.dir_getter = function dir() {debugger;}; catvm.safefunction(dsf_tmp_context.dir_getter);//295
Object.defineProperty(dsf_tmp_context.dir_getter, "name", {
    value: "get dir",
    configurable: true
});//301
dsf_tmp_context.dir_setter = function dir() {debugger;}; catvm.safefunction(dsf_tmp_context.dir_setter);//306
Object.defineProperty(dsf_tmp_context.dir_setter, "name", {
    value: "set dir",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "dir", {
	get: dsf_tmp_context.dir_getter,
	set: dsf_tmp_context.dir_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.body_getter = function body() {
    debugger;
    return catvm.memory.variable.HTMLBodyElement.htmlBodyElement_obj;
}; catvm.safefunction(dsf_tmp_context.body_getter);//295
Object.defineProperty(dsf_tmp_context.body_getter, "name", {
    value: "get body",
    configurable: true
});//301
dsf_tmp_context.body_setter = function body() {debugger;}; catvm.safefunction(dsf_tmp_context.body_setter);//306
Object.defineProperty(dsf_tmp_context.body_setter, "name", {
    value: "set body",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "body", {
	get: dsf_tmp_context.body_getter,
	set: dsf_tmp_context.body_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.head_getter = function head() {
    debugger;
    return catvm.memory.variable.HTMLHeadElement.htmlHeadElement_obj;
}; catvm.safefunction(dsf_tmp_context.head_getter);//295
Object.defineProperty(dsf_tmp_context.head_getter, "name", {
    value: "get head",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "head", {
	get: dsf_tmp_context.head_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.images_getter = function images() {debugger;}; catvm.safefunction(dsf_tmp_context.images_getter);//295
Object.defineProperty(dsf_tmp_context.images_getter, "name", {
    value: "get images",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "images", {
	get: dsf_tmp_context.images_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.embeds_getter = function embeds() {debugger;}; catvm.safefunction(dsf_tmp_context.embeds_getter);//295
Object.defineProperty(dsf_tmp_context.embeds_getter, "name", {
    value: "get embeds",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "embeds", {
	get: dsf_tmp_context.embeds_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.plugins_getter = function plugins() {debugger;}; catvm.safefunction(dsf_tmp_context.plugins_getter);//295
Object.defineProperty(dsf_tmp_context.plugins_getter, "name", {
    value: "get plugins",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "plugins", {
	get: dsf_tmp_context.plugins_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.links_getter = function links() {debugger;}; catvm.safefunction(dsf_tmp_context.links_getter);//295
Object.defineProperty(dsf_tmp_context.links_getter, "name", {
    value: "get links",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "links", {
	get: dsf_tmp_context.links_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.forms_getter = function forms() {debugger;}; catvm.safefunction(dsf_tmp_context.forms_getter);//295
Object.defineProperty(dsf_tmp_context.forms_getter, "name", {
    value: "get forms",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "forms", {
	get: dsf_tmp_context.forms_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.scripts_getter = function scripts() {debugger;}; catvm.safefunction(dsf_tmp_context.scripts_getter);//295
Object.defineProperty(dsf_tmp_context.scripts_getter, "name", {
    value: "get scripts",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "scripts", {
	get: dsf_tmp_context.scripts_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.currentScript_getter = function currentScript() {debugger;return 19;}; catvm.safefunction(dsf_tmp_context.currentScript_getter);//295
Object.defineProperty(dsf_tmp_context.currentScript_getter, "name", {
    value: "get currentScript",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "currentScript", {
	get: dsf_tmp_context.currentScript_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.defaultView_getter = function defaultView() {debugger;}; catvm.safefunction(dsf_tmp_context.defaultView_getter);//295
Object.defineProperty(dsf_tmp_context.defaultView_getter, "name", {
    value: "get defaultView",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "defaultView", {
	get: dsf_tmp_context.defaultView_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.designMode_getter = function designMode() {debugger;}; catvm.safefunction(dsf_tmp_context.designMode_getter);//295
Object.defineProperty(dsf_tmp_context.designMode_getter, "name", {
    value: "get designMode",
    configurable: true
});//301
dsf_tmp_context.designMode_setter = function designMode() {debugger;}; catvm.safefunction(dsf_tmp_context.designMode_setter);//306
Object.defineProperty(dsf_tmp_context.designMode_setter, "name", {
    value: "set designMode",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "designMode", {
	get: dsf_tmp_context.designMode_getter,
	set: dsf_tmp_context.designMode_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onreadystatechange_getter = function onreadystatechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onreadystatechange_getter);//295
Object.defineProperty(dsf_tmp_context.onreadystatechange_getter, "name", {
    value: "get onreadystatechange",
    configurable: true
});//301
dsf_tmp_context.onreadystatechange_setter = function onreadystatechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onreadystatechange_setter);//306
Object.defineProperty(dsf_tmp_context.onreadystatechange_setter, "name", {
    value: "set onreadystatechange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onreadystatechange", {
	get: dsf_tmp_context.onreadystatechange_getter,
	set: dsf_tmp_context.onreadystatechange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.anchors_getter = function anchors() {debugger;}; catvm.safefunction(dsf_tmp_context.anchors_getter);//295
Object.defineProperty(dsf_tmp_context.anchors_getter, "name", {
    value: "get anchors",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "anchors", {
	get: dsf_tmp_context.anchors_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.applets_getter = function applets() {debugger;}; catvm.safefunction(dsf_tmp_context.applets_getter);//295
Object.defineProperty(dsf_tmp_context.applets_getter, "name", {
    value: "get applets",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "applets", {
	get: dsf_tmp_context.applets_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fgColor_getter = function fgColor() {debugger;}; catvm.safefunction(dsf_tmp_context.fgColor_getter);//295
Object.defineProperty(dsf_tmp_context.fgColor_getter, "name", {
    value: "get fgColor",
    configurable: true
});//301
dsf_tmp_context.fgColor_setter = function fgColor() {debugger;}; catvm.safefunction(dsf_tmp_context.fgColor_setter);//306
Object.defineProperty(dsf_tmp_context.fgColor_setter, "name", {
    value: "set fgColor",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "fgColor", {
	get: dsf_tmp_context.fgColor_getter,
	set: dsf_tmp_context.fgColor_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.linkColor_getter = function linkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.linkColor_getter);//295
Object.defineProperty(dsf_tmp_context.linkColor_getter, "name", {
    value: "get linkColor",
    configurable: true
});//301
dsf_tmp_context.linkColor_setter = function linkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.linkColor_setter);//306
Object.defineProperty(dsf_tmp_context.linkColor_setter, "name", {
    value: "set linkColor",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "linkColor", {
	get: dsf_tmp_context.linkColor_getter,
	set: dsf_tmp_context.linkColor_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.vlinkColor_getter = function vlinkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.vlinkColor_getter);//295
Object.defineProperty(dsf_tmp_context.vlinkColor_getter, "name", {
    value: "get vlinkColor",
    configurable: true
});//301
dsf_tmp_context.vlinkColor_setter = function vlinkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.vlinkColor_setter);//306
Object.defineProperty(dsf_tmp_context.vlinkColor_setter, "name", {
    value: "set vlinkColor",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "vlinkColor", {
	get: dsf_tmp_context.vlinkColor_getter,
	set: dsf_tmp_context.vlinkColor_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.alinkColor_getter = function alinkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.alinkColor_getter);//295
Object.defineProperty(dsf_tmp_context.alinkColor_getter, "name", {
    value: "get alinkColor",
    configurable: true
});//301
dsf_tmp_context.alinkColor_setter = function alinkColor() {debugger;}; catvm.safefunction(dsf_tmp_context.alinkColor_setter);//306
Object.defineProperty(dsf_tmp_context.alinkColor_setter, "name", {
    value: "set alinkColor",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "alinkColor", {
	get: dsf_tmp_context.alinkColor_getter,
	set: dsf_tmp_context.alinkColor_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.bgColor_getter = function bgColor() {debugger;}; catvm.safefunction(dsf_tmp_context.bgColor_getter);//295
Object.defineProperty(dsf_tmp_context.bgColor_getter, "name", {
    value: "get bgColor",
    configurable: true
});//301
dsf_tmp_context.bgColor_setter = function bgColor() {debugger;}; catvm.safefunction(dsf_tmp_context.bgColor_setter);//306
Object.defineProperty(dsf_tmp_context.bgColor_setter, "name", {
    value: "set bgColor",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "bgColor", {
	get: dsf_tmp_context.bgColor_getter,
	set: dsf_tmp_context.bgColor_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.all_getter = function all() {debugger;}; catvm.safefunction(dsf_tmp_context.all_getter);//295
Object.defineProperty(dsf_tmp_context.all_getter, "name", {
    value: "get all",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "all", {
	get: dsf_tmp_context.all_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.scrollingElement_getter = function scrollingElement() {debugger;}; catvm.safefunction(dsf_tmp_context.scrollingElement_getter);//295
Object.defineProperty(dsf_tmp_context.scrollingElement_getter, "name", {
    value: "get scrollingElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "scrollingElement", {
	get: dsf_tmp_context.scrollingElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerlockchange_getter = function onpointerlockchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerlockchange_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerlockchange_getter, "name", {
    value: "get onpointerlockchange",
    configurable: true
});//301
dsf_tmp_context.onpointerlockchange_setter = function onpointerlockchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerlockchange_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerlockchange_setter, "name", {
    value: "set onpointerlockchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerlockchange", {
	get: dsf_tmp_context.onpointerlockchange_getter,
	set: dsf_tmp_context.onpointerlockchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerlockerror_getter = function onpointerlockerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerlockerror_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerlockerror_getter, "name", {
    value: "get onpointerlockerror",
    configurable: true
});//301
dsf_tmp_context.onpointerlockerror_setter = function onpointerlockerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerlockerror_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerlockerror_setter, "name", {
    value: "set onpointerlockerror",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerlockerror", {
	get: dsf_tmp_context.onpointerlockerror_getter,
	set: dsf_tmp_context.onpointerlockerror_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.hidden_getter = function hidden() {
    // （只读属性）返回布尔值，表示当前页面是（true）否（false）隐藏。
    return false;
}; catvm.safefunction(dsf_tmp_context.hidden_getter);//295
Object.defineProperty(dsf_tmp_context.hidden_getter, "name", {
    value: "get hidden",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "hidden", {
	get: dsf_tmp_context.hidden_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.visibilityState_getter = function visibilityState() {
    // （只读属性）, 返回document的可见性，即当前可见元素的上下文环境。由此可以知道当前文档 (即为页面) 是在背后，或是不可见的隐藏的标签页
    return "visible";
}; catvm.safefunction(dsf_tmp_context.visibilityState_getter);//295
Object.defineProperty(dsf_tmp_context.visibilityState_getter, "name", {
    value: "get visibilityState",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "visibilityState", {
	get: dsf_tmp_context.visibilityState_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.wasDiscarded_getter = function wasDiscarded() {debugger;}; catvm.safefunction(dsf_tmp_context.wasDiscarded_getter);//295
Object.defineProperty(dsf_tmp_context.wasDiscarded_getter, "name", {
    value: "get wasDiscarded",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "wasDiscarded", {
	get: dsf_tmp_context.wasDiscarded_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.featurePolicy_getter = function featurePolicy() {debugger;}; catvm.safefunction(dsf_tmp_context.featurePolicy_getter);//295
Object.defineProperty(dsf_tmp_context.featurePolicy_getter, "name", {
    value: "get featurePolicy",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "featurePolicy", {
	get: dsf_tmp_context.featurePolicy_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitVisibilityState_getter = function webkitVisibilityState() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitVisibilityState_getter);//295
Object.defineProperty(dsf_tmp_context.webkitVisibilityState_getter, "name", {
    value: "get webkitVisibilityState",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitVisibilityState", {
	get: dsf_tmp_context.webkitVisibilityState_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitHidden_getter = function webkitHidden() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitHidden_getter);//295
Object.defineProperty(dsf_tmp_context.webkitHidden_getter, "name", {
    value: "get webkitHidden",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitHidden", {
	get: dsf_tmp_context.webkitHidden_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforecopy_getter = function onbeforecopy() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecopy_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforecopy_getter, "name", {
    value: "get onbeforecopy",
    configurable: true
});//301
dsf_tmp_context.onbeforecopy_setter = function onbeforecopy() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecopy_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforecopy_setter, "name", {
    value: "set onbeforecopy",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforecopy", {
	get: dsf_tmp_context.onbeforecopy_getter,
	set: dsf_tmp_context.onbeforecopy_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforecut_getter = function onbeforecut() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecut_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforecut_getter, "name", {
    value: "get onbeforecut",
    configurable: true
});//301
dsf_tmp_context.onbeforecut_setter = function onbeforecut() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforecut_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforecut_setter, "name", {
    value: "set onbeforecut",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforecut", {
	get: dsf_tmp_context.onbeforecut_getter,
	set: dsf_tmp_context.onbeforecut_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforepaste_getter = function onbeforepaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforepaste_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforepaste_getter, "name", {
    value: "get onbeforepaste",
    configurable: true
});//301
dsf_tmp_context.onbeforepaste_setter = function onbeforepaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforepaste_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforepaste_setter, "name", {
    value: "set onbeforepaste",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforepaste", {
	get: dsf_tmp_context.onbeforepaste_getter,
	set: dsf_tmp_context.onbeforepaste_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onfreeze_getter = function onfreeze() {debugger;}; catvm.safefunction(dsf_tmp_context.onfreeze_getter);//295
Object.defineProperty(dsf_tmp_context.onfreeze_getter, "name", {
    value: "get onfreeze",
    configurable: true
});//301
dsf_tmp_context.onfreeze_setter = function onfreeze() {debugger;}; catvm.safefunction(dsf_tmp_context.onfreeze_setter);//306
Object.defineProperty(dsf_tmp_context.onfreeze_setter, "name", {
    value: "set onfreeze",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onfreeze", {
	get: dsf_tmp_context.onfreeze_getter,
	set: dsf_tmp_context.onfreeze_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onresume_getter = function onresume() {debugger;}; catvm.safefunction(dsf_tmp_context.onresume_getter);//295
Object.defineProperty(dsf_tmp_context.onresume_getter, "name", {
    value: "get onresume",
    configurable: true
});//301
dsf_tmp_context.onresume_setter = function onresume() {debugger;}; catvm.safefunction(dsf_tmp_context.onresume_setter);//306
Object.defineProperty(dsf_tmp_context.onresume_setter, "name", {
    value: "set onresume",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onresume", {
	get: dsf_tmp_context.onresume_getter,
	set: dsf_tmp_context.onresume_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onsearch_getter = function onsearch() {debugger;}; catvm.safefunction(dsf_tmp_context.onsearch_getter);//295
Object.defineProperty(dsf_tmp_context.onsearch_getter, "name", {
    value: "get onsearch",
    configurable: true
});//301
dsf_tmp_context.onsearch_setter = function onsearch() {debugger;}; catvm.safefunction(dsf_tmp_context.onsearch_setter);//306
Object.defineProperty(dsf_tmp_context.onsearch_setter, "name", {
    value: "set onsearch",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onsearch", {
	get: dsf_tmp_context.onsearch_getter,
	set: dsf_tmp_context.onsearch_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onvisibilitychange_getter = function onvisibilitychange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvisibilitychange_getter);//295
Object.defineProperty(dsf_tmp_context.onvisibilitychange_getter, "name", {
    value: "get onvisibilitychange",
    configurable: true
});//301
dsf_tmp_context.onvisibilitychange_setter = function onvisibilitychange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvisibilitychange_setter);//306
Object.defineProperty(dsf_tmp_context.onvisibilitychange_setter, "name", {
    value: "set onvisibilitychange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onvisibilitychange", {
	get: dsf_tmp_context.onvisibilitychange_getter,
	set: dsf_tmp_context.onvisibilitychange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fullscreenEnabled_getter = function fullscreenEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreenEnabled_getter);//295
Object.defineProperty(dsf_tmp_context.fullscreenEnabled_getter, "name", {
    value: "get fullscreenEnabled",
    configurable: true
});//301
dsf_tmp_context.fullscreenEnabled_setter = function fullscreenEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreenEnabled_setter);//306
Object.defineProperty(dsf_tmp_context.fullscreenEnabled_setter, "name", {
    value: "set fullscreenEnabled",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "fullscreenEnabled", {
	get: dsf_tmp_context.fullscreenEnabled_getter,
	set: dsf_tmp_context.fullscreenEnabled_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fullscreen_getter = function fullscreen() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreen_getter);//295
Object.defineProperty(dsf_tmp_context.fullscreen_getter, "name", {
    value: "get fullscreen",
    configurable: true
});//301
dsf_tmp_context.fullscreen_setter = function fullscreen() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreen_setter);//306
Object.defineProperty(dsf_tmp_context.fullscreen_setter, "name", {
    value: "set fullscreen",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "fullscreen", {
	get: dsf_tmp_context.fullscreen_getter,
	set: dsf_tmp_context.fullscreen_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onfullscreenchange_getter = function onfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_getter);//295
Object.defineProperty(dsf_tmp_context.onfullscreenchange_getter, "name", {
    value: "get onfullscreenchange",
    configurable: true
});//301
dsf_tmp_context.onfullscreenchange_setter = function onfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_setter);//306
Object.defineProperty(dsf_tmp_context.onfullscreenchange_setter, "name", {
    value: "set onfullscreenchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onfullscreenchange", {
	get: dsf_tmp_context.onfullscreenchange_getter,
	set: dsf_tmp_context.onfullscreenchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onfullscreenerror_getter = function onfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_getter);//295
Object.defineProperty(dsf_tmp_context.onfullscreenerror_getter, "name", {
    value: "get onfullscreenerror",
    configurable: true
});//301
dsf_tmp_context.onfullscreenerror_setter = function onfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_setter);//306
Object.defineProperty(dsf_tmp_context.onfullscreenerror_setter, "name", {
    value: "set onfullscreenerror",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onfullscreenerror", {
	get: dsf_tmp_context.onfullscreenerror_getter,
	set: dsf_tmp_context.onfullscreenerror_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitIsFullScreen_getter = function webkitIsFullScreen() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitIsFullScreen_getter);//295
Object.defineProperty(dsf_tmp_context.webkitIsFullScreen_getter, "name", {
    value: "get webkitIsFullScreen",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitIsFullScreen", {
	get: dsf_tmp_context.webkitIsFullScreen_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitCurrentFullScreenElement_getter = function webkitCurrentFullScreenElement() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitCurrentFullScreenElement_getter);//295
Object.defineProperty(dsf_tmp_context.webkitCurrentFullScreenElement_getter, "name", {
    value: "get webkitCurrentFullScreenElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
	get: dsf_tmp_context.webkitCurrentFullScreenElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitFullscreenEnabled_getter = function webkitFullscreenEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitFullscreenEnabled_getter);//295
Object.defineProperty(dsf_tmp_context.webkitFullscreenEnabled_getter, "name", {
    value: "get webkitFullscreenEnabled",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
	get: dsf_tmp_context.webkitFullscreenEnabled_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.webkitFullscreenElement_getter = function webkitFullscreenElement() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitFullscreenElement_getter);//295
Object.defineProperty(dsf_tmp_context.webkitFullscreenElement_getter, "name", {
    value: "get webkitFullscreenElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "webkitFullscreenElement", {
	get: dsf_tmp_context.webkitFullscreenElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkitfullscreenchange_getter = function onwebkitfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenchange_getter, "name", {
    value: "get onwebkitfullscreenchange",
    configurable: true
});//301
dsf_tmp_context.onwebkitfullscreenchange_setter = function onwebkitfullscreenchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenchange_setter, "name", {
    value: "set onwebkitfullscreenchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
	get: dsf_tmp_context.onwebkitfullscreenchange_getter,
	set: dsf_tmp_context.onwebkitfullscreenchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkitfullscreenerror_getter = function onwebkitfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenerror_getter, "name", {
    value: "get onwebkitfullscreenerror",
    configurable: true
});//301
dsf_tmp_context.onwebkitfullscreenerror_setter = function onwebkitfullscreenerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkitfullscreenerror_setter, "name", {
    value: "set onwebkitfullscreenerror",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
	get: dsf_tmp_context.onwebkitfullscreenerror_getter,
	set: dsf_tmp_context.onwebkitfullscreenerror_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.rootElement_getter = function rootElement() {debugger;}; catvm.safefunction(dsf_tmp_context.rootElement_getter);//295
Object.defineProperty(dsf_tmp_context.rootElement_getter, "name", {
    value: "get rootElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "rootElement", {
	get: dsf_tmp_context.rootElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforexrselect_getter = function onbeforexrselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforexrselect_getter, "name", {
    value: "get onbeforexrselect",
    configurable: true
});//301
dsf_tmp_context.onbeforexrselect_setter = function onbeforexrselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforexrselect_setter, "name", {
    value: "set onbeforexrselect",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforexrselect", {
	get: dsf_tmp_context.onbeforexrselect_getter,
	set: dsf_tmp_context.onbeforexrselect_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onabort_getter = function onabort() {debugger;}; catvm.safefunction(dsf_tmp_context.onabort_getter);//295
Object.defineProperty(dsf_tmp_context.onabort_getter, "name", {
    value: "get onabort",
    configurable: true
});//301
dsf_tmp_context.onabort_setter = function onabort() {debugger;}; catvm.safefunction(dsf_tmp_context.onabort_setter);//306
Object.defineProperty(dsf_tmp_context.onabort_setter, "name", {
    value: "set onabort",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onabort", {
	get: dsf_tmp_context.onabort_getter,
	set: dsf_tmp_context.onabort_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforeinput_getter = function onbeforeinput() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforeinput_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforeinput_getter, "name", {
    value: "get onbeforeinput",
    configurable: true
});//301
dsf_tmp_context.onbeforeinput_setter = function onbeforeinput() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforeinput_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforeinput_setter, "name", {
    value: "set onbeforeinput",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforeinput", {
	get: dsf_tmp_context.onbeforeinput_getter,
	set: dsf_tmp_context.onbeforeinput_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onblur_getter = function onblur() {debugger;}; catvm.safefunction(dsf_tmp_context.onblur_getter);//295
Object.defineProperty(dsf_tmp_context.onblur_getter, "name", {
    value: "get onblur",
    configurable: true
});//301
dsf_tmp_context.onblur_setter = function onblur() {debugger;}; catvm.safefunction(dsf_tmp_context.onblur_setter);//306
Object.defineProperty(dsf_tmp_context.onblur_setter, "name", {
    value: "set onblur",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onblur", {
	get: dsf_tmp_context.onblur_getter,
	set: dsf_tmp_context.onblur_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncancel_getter = function oncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.oncancel_getter);//295
Object.defineProperty(dsf_tmp_context.oncancel_getter, "name", {
    value: "get oncancel",
    configurable: true
});//301
dsf_tmp_context.oncancel_setter = function oncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.oncancel_setter);//306
Object.defineProperty(dsf_tmp_context.oncancel_setter, "name", {
    value: "set oncancel",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncancel", {
	get: dsf_tmp_context.oncancel_getter,
	set: dsf_tmp_context.oncancel_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncanplay_getter = function oncanplay() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplay_getter);//295
Object.defineProperty(dsf_tmp_context.oncanplay_getter, "name", {
    value: "get oncanplay",
    configurable: true
});//301
dsf_tmp_context.oncanplay_setter = function oncanplay() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplay_setter);//306
Object.defineProperty(dsf_tmp_context.oncanplay_setter, "name", {
    value: "set oncanplay",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncanplay", {
	get: dsf_tmp_context.oncanplay_getter,
	set: dsf_tmp_context.oncanplay_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncanplaythrough_getter = function oncanplaythrough() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_getter);//295
Object.defineProperty(dsf_tmp_context.oncanplaythrough_getter, "name", {
    value: "get oncanplaythrough",
    configurable: true
});//301
dsf_tmp_context.oncanplaythrough_setter = function oncanplaythrough() {debugger;}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_setter);//306
Object.defineProperty(dsf_tmp_context.oncanplaythrough_setter, "name", {
    value: "set oncanplaythrough",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncanplaythrough", {
	get: dsf_tmp_context.oncanplaythrough_getter,
	set: dsf_tmp_context.oncanplaythrough_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onchange_getter = function onchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onchange_getter);//295
Object.defineProperty(dsf_tmp_context.onchange_getter, "name", {
    value: "get onchange",
    configurable: true
});//301
dsf_tmp_context.onchange_setter = function onchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onchange_setter);//306
Object.defineProperty(dsf_tmp_context.onchange_setter, "name", {
    value: "set onchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onchange", {
	get: dsf_tmp_context.onchange_getter,
	set: dsf_tmp_context.onchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onclick_getter = function onclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onclick_getter);//295
Object.defineProperty(dsf_tmp_context.onclick_getter, "name", {
    value: "get onclick",
    configurable: true
});//301
dsf_tmp_context.onclick_setter = function onclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onclick_setter);//306
Object.defineProperty(dsf_tmp_context.onclick_setter, "name", {
    value: "set onclick",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onclick", {
	get: dsf_tmp_context.onclick_getter,
	set: dsf_tmp_context.onclick_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onclose_getter = function onclose() {debugger;}; catvm.safefunction(dsf_tmp_context.onclose_getter);//295
Object.defineProperty(dsf_tmp_context.onclose_getter, "name", {
    value: "get onclose",
    configurable: true
});//301
dsf_tmp_context.onclose_setter = function onclose() {debugger;}; catvm.safefunction(dsf_tmp_context.onclose_setter);//306
Object.defineProperty(dsf_tmp_context.onclose_setter, "name", {
    value: "set onclose",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onclose", {
	get: dsf_tmp_context.onclose_getter,
	set: dsf_tmp_context.onclose_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncontextlost_getter = function oncontextlost() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextlost_getter);//295
Object.defineProperty(dsf_tmp_context.oncontextlost_getter, "name", {
    value: "get oncontextlost",
    configurable: true
});//301
dsf_tmp_context.oncontextlost_setter = function oncontextlost() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextlost_setter);//306
Object.defineProperty(dsf_tmp_context.oncontextlost_setter, "name", {
    value: "set oncontextlost",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncontextlost", {
	get: dsf_tmp_context.oncontextlost_getter,
	set: dsf_tmp_context.oncontextlost_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncontextmenu_getter = function oncontextmenu() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextmenu_getter);//295
Object.defineProperty(dsf_tmp_context.oncontextmenu_getter, "name", {
    value: "get oncontextmenu",
    configurable: true
});//301
dsf_tmp_context.oncontextmenu_setter = function oncontextmenu() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextmenu_setter);//306
Object.defineProperty(dsf_tmp_context.oncontextmenu_setter, "name", {
    value: "set oncontextmenu",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncontextmenu", {
	get: dsf_tmp_context.oncontextmenu_getter,
	set: dsf_tmp_context.oncontextmenu_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncontextrestored_getter = function oncontextrestored() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextrestored_getter);//295
Object.defineProperty(dsf_tmp_context.oncontextrestored_getter, "name", {
    value: "get oncontextrestored",
    configurable: true
});//301
dsf_tmp_context.oncontextrestored_setter = function oncontextrestored() {debugger;}; catvm.safefunction(dsf_tmp_context.oncontextrestored_setter);//306
Object.defineProperty(dsf_tmp_context.oncontextrestored_setter, "name", {
    value: "set oncontextrestored",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncontextrestored", {
	get: dsf_tmp_context.oncontextrestored_getter,
	set: dsf_tmp_context.oncontextrestored_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncuechange_getter = function oncuechange() {debugger;}; catvm.safefunction(dsf_tmp_context.oncuechange_getter);//295
Object.defineProperty(dsf_tmp_context.oncuechange_getter, "name", {
    value: "get oncuechange",
    configurable: true
});//301
dsf_tmp_context.oncuechange_setter = function oncuechange() {debugger;}; catvm.safefunction(dsf_tmp_context.oncuechange_setter);//306
Object.defineProperty(dsf_tmp_context.oncuechange_setter, "name", {
    value: "set oncuechange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncuechange", {
	get: dsf_tmp_context.oncuechange_getter,
	set: dsf_tmp_context.oncuechange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondblclick_getter = function ondblclick() {debugger;}; catvm.safefunction(dsf_tmp_context.ondblclick_getter);//295
Object.defineProperty(dsf_tmp_context.ondblclick_getter, "name", {
    value: "get ondblclick",
    configurable: true
});//301
dsf_tmp_context.ondblclick_setter = function ondblclick() {debugger;}; catvm.safefunction(dsf_tmp_context.ondblclick_setter);//306
Object.defineProperty(dsf_tmp_context.ondblclick_setter, "name", {
    value: "set ondblclick",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondblclick", {
	get: dsf_tmp_context.ondblclick_getter,
	set: dsf_tmp_context.ondblclick_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondrag_getter = function ondrag() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrag_getter);//295
Object.defineProperty(dsf_tmp_context.ondrag_getter, "name", {
    value: "get ondrag",
    configurable: true
});//301
dsf_tmp_context.ondrag_setter = function ondrag() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrag_setter);//306
Object.defineProperty(dsf_tmp_context.ondrag_setter, "name", {
    value: "set ondrag",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondrag", {
	get: dsf_tmp_context.ondrag_getter,
	set: dsf_tmp_context.ondrag_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondragend_getter = function ondragend() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragend_getter);//295
Object.defineProperty(dsf_tmp_context.ondragend_getter, "name", {
    value: "get ondragend",
    configurable: true
});//301
dsf_tmp_context.ondragend_setter = function ondragend() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragend_setter);//306
Object.defineProperty(dsf_tmp_context.ondragend_setter, "name", {
    value: "set ondragend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondragend", {
	get: dsf_tmp_context.ondragend_getter,
	set: dsf_tmp_context.ondragend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondragenter_getter = function ondragenter() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragenter_getter);//295
Object.defineProperty(dsf_tmp_context.ondragenter_getter, "name", {
    value: "get ondragenter",
    configurable: true
});//301
dsf_tmp_context.ondragenter_setter = function ondragenter() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragenter_setter);//306
Object.defineProperty(dsf_tmp_context.ondragenter_setter, "name", {
    value: "set ondragenter",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondragenter", {
	get: dsf_tmp_context.ondragenter_getter,
	set: dsf_tmp_context.ondragenter_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondragleave_getter = function ondragleave() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragleave_getter);//295
Object.defineProperty(dsf_tmp_context.ondragleave_getter, "name", {
    value: "get ondragleave",
    configurable: true
});//301
dsf_tmp_context.ondragleave_setter = function ondragleave() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragleave_setter);//306
Object.defineProperty(dsf_tmp_context.ondragleave_setter, "name", {
    value: "set ondragleave",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondragleave", {
	get: dsf_tmp_context.ondragleave_getter,
	set: dsf_tmp_context.ondragleave_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondragover_getter = function ondragover() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragover_getter);//295
Object.defineProperty(dsf_tmp_context.ondragover_getter, "name", {
    value: "get ondragover",
    configurable: true
});//301
dsf_tmp_context.ondragover_setter = function ondragover() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragover_setter);//306
Object.defineProperty(dsf_tmp_context.ondragover_setter, "name", {
    value: "set ondragover",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondragover", {
	get: dsf_tmp_context.ondragover_getter,
	set: dsf_tmp_context.ondragover_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondragstart_getter = function ondragstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragstart_getter);//295
Object.defineProperty(dsf_tmp_context.ondragstart_getter, "name", {
    value: "get ondragstart",
    configurable: true
});//301
dsf_tmp_context.ondragstart_setter = function ondragstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ondragstart_setter);//306
Object.defineProperty(dsf_tmp_context.ondragstart_setter, "name", {
    value: "set ondragstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondragstart", {
	get: dsf_tmp_context.ondragstart_getter,
	set: dsf_tmp_context.ondragstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondrop_getter = function ondrop() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrop_getter);//295
Object.defineProperty(dsf_tmp_context.ondrop_getter, "name", {
    value: "get ondrop",
    configurable: true
});//301
dsf_tmp_context.ondrop_setter = function ondrop() {debugger;}; catvm.safefunction(dsf_tmp_context.ondrop_setter);//306
Object.defineProperty(dsf_tmp_context.ondrop_setter, "name", {
    value: "set ondrop",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondrop", {
	get: dsf_tmp_context.ondrop_getter,
	set: dsf_tmp_context.ondrop_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ondurationchange_getter = function ondurationchange() {debugger;}; catvm.safefunction(dsf_tmp_context.ondurationchange_getter);//295
Object.defineProperty(dsf_tmp_context.ondurationchange_getter, "name", {
    value: "get ondurationchange",
    configurable: true
});//301
dsf_tmp_context.ondurationchange_setter = function ondurationchange() {debugger;}; catvm.safefunction(dsf_tmp_context.ondurationchange_setter);//306
Object.defineProperty(dsf_tmp_context.ondurationchange_setter, "name", {
    value: "set ondurationchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ondurationchange", {
	get: dsf_tmp_context.ondurationchange_getter,
	set: dsf_tmp_context.ondurationchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onemptied_getter = function onemptied() {debugger;}; catvm.safefunction(dsf_tmp_context.onemptied_getter);//295
Object.defineProperty(dsf_tmp_context.onemptied_getter, "name", {
    value: "get onemptied",
    configurable: true
});//301
dsf_tmp_context.onemptied_setter = function onemptied() {debugger;}; catvm.safefunction(dsf_tmp_context.onemptied_setter);//306
Object.defineProperty(dsf_tmp_context.onemptied_setter, "name", {
    value: "set onemptied",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onemptied", {
	get: dsf_tmp_context.onemptied_getter,
	set: dsf_tmp_context.onemptied_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onended_getter = function onended() {debugger;}; catvm.safefunction(dsf_tmp_context.onended_getter);//295
Object.defineProperty(dsf_tmp_context.onended_getter, "name", {
    value: "get onended",
    configurable: true
});//301
dsf_tmp_context.onended_setter = function onended() {debugger;}; catvm.safefunction(dsf_tmp_context.onended_setter);//306
Object.defineProperty(dsf_tmp_context.onended_setter, "name", {
    value: "set onended",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onended", {
	get: dsf_tmp_context.onended_getter,
	set: dsf_tmp_context.onended_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onerror_getter = function onerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onerror_getter);//295
Object.defineProperty(dsf_tmp_context.onerror_getter, "name", {
    value: "get onerror",
    configurable: true
});//301
dsf_tmp_context.onerror_setter = function onerror() {debugger;}; catvm.safefunction(dsf_tmp_context.onerror_setter);//306
Object.defineProperty(dsf_tmp_context.onerror_setter, "name", {
    value: "set onerror",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onerror", {
	get: dsf_tmp_context.onerror_getter,
	set: dsf_tmp_context.onerror_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onfocus_getter = function onfocus() {debugger;}; catvm.safefunction(dsf_tmp_context.onfocus_getter);//295
Object.defineProperty(dsf_tmp_context.onfocus_getter, "name", {
    value: "get onfocus",
    configurable: true
});//301
dsf_tmp_context.onfocus_setter = function onfocus() {debugger;}; catvm.safefunction(dsf_tmp_context.onfocus_setter);//306
Object.defineProperty(dsf_tmp_context.onfocus_setter, "name", {
    value: "set onfocus",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onfocus", {
	get: dsf_tmp_context.onfocus_getter,
	set: dsf_tmp_context.onfocus_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onformdata_getter = function onformdata() {debugger;}; catvm.safefunction(dsf_tmp_context.onformdata_getter);//295
Object.defineProperty(dsf_tmp_context.onformdata_getter, "name", {
    value: "get onformdata",
    configurable: true
});//301
dsf_tmp_context.onformdata_setter = function onformdata() {debugger;}; catvm.safefunction(dsf_tmp_context.onformdata_setter);//306
Object.defineProperty(dsf_tmp_context.onformdata_setter, "name", {
    value: "set onformdata",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onformdata", {
	get: dsf_tmp_context.onformdata_getter,
	set: dsf_tmp_context.onformdata_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oninput_getter = function oninput() {debugger;}; catvm.safefunction(dsf_tmp_context.oninput_getter);//295
Object.defineProperty(dsf_tmp_context.oninput_getter, "name", {
    value: "get oninput",
    configurable: true
});//301
dsf_tmp_context.oninput_setter = function oninput() {debugger;}; catvm.safefunction(dsf_tmp_context.oninput_setter);//306
Object.defineProperty(dsf_tmp_context.oninput_setter, "name", {
    value: "set oninput",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oninput", {
	get: dsf_tmp_context.oninput_getter,
	set: dsf_tmp_context.oninput_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oninvalid_getter = function oninvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.oninvalid_getter);//295
Object.defineProperty(dsf_tmp_context.oninvalid_getter, "name", {
    value: "get oninvalid",
    configurable: true
});//301
dsf_tmp_context.oninvalid_setter = function oninvalid() {debugger;}; catvm.safefunction(dsf_tmp_context.oninvalid_setter);//306
Object.defineProperty(dsf_tmp_context.oninvalid_setter, "name", {
    value: "set oninvalid",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oninvalid", {
	get: dsf_tmp_context.oninvalid_getter,
	set: dsf_tmp_context.oninvalid_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onkeydown_getter = function onkeydown() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeydown_getter);//295
Object.defineProperty(dsf_tmp_context.onkeydown_getter, "name", {
    value: "get onkeydown",
    configurable: true
});//301
dsf_tmp_context.onkeydown_setter = function onkeydown() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeydown_setter);//306
Object.defineProperty(dsf_tmp_context.onkeydown_setter, "name", {
    value: "set onkeydown",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onkeydown", {
	get: dsf_tmp_context.onkeydown_getter,
	set: dsf_tmp_context.onkeydown_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onkeypress_getter = function onkeypress() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeypress_getter);//295
Object.defineProperty(dsf_tmp_context.onkeypress_getter, "name", {
    value: "get onkeypress",
    configurable: true
});//301
dsf_tmp_context.onkeypress_setter = function onkeypress() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeypress_setter);//306
Object.defineProperty(dsf_tmp_context.onkeypress_setter, "name", {
    value: "set onkeypress",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onkeypress", {
	get: dsf_tmp_context.onkeypress_getter,
	set: dsf_tmp_context.onkeypress_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onkeyup_getter = function onkeyup() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeyup_getter);//295
Object.defineProperty(dsf_tmp_context.onkeyup_getter, "name", {
    value: "get onkeyup",
    configurable: true
});//301
dsf_tmp_context.onkeyup_setter = function onkeyup() {debugger;}; catvm.safefunction(dsf_tmp_context.onkeyup_setter);//306
Object.defineProperty(dsf_tmp_context.onkeyup_setter, "name", {
    value: "set onkeyup",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onkeyup", {
	get: dsf_tmp_context.onkeyup_getter,
	set: dsf_tmp_context.onkeyup_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onload_getter = function onload() {debugger;}; catvm.safefunction(dsf_tmp_context.onload_getter);//295
Object.defineProperty(dsf_tmp_context.onload_getter, "name", {
    value: "get onload",
    configurable: true
});//301
dsf_tmp_context.onload_setter = function onload() {debugger;}; catvm.safefunction(dsf_tmp_context.onload_setter);//306
Object.defineProperty(dsf_tmp_context.onload_setter, "name", {
    value: "set onload",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onload", {
	get: dsf_tmp_context.onload_getter,
	set: dsf_tmp_context.onload_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onloadeddata_getter = function onloadeddata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadeddata_getter);//295
Object.defineProperty(dsf_tmp_context.onloadeddata_getter, "name", {
    value: "get onloadeddata",
    configurable: true
});//301
dsf_tmp_context.onloadeddata_setter = function onloadeddata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadeddata_setter);//306
Object.defineProperty(dsf_tmp_context.onloadeddata_setter, "name", {
    value: "set onloadeddata",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onloadeddata", {
	get: dsf_tmp_context.onloadeddata_getter,
	set: dsf_tmp_context.onloadeddata_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onloadedmetadata_getter = function onloadedmetadata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_getter);//295
Object.defineProperty(dsf_tmp_context.onloadedmetadata_getter, "name", {
    value: "get onloadedmetadata",
    configurable: true
});//301
dsf_tmp_context.onloadedmetadata_setter = function onloadedmetadata() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_setter);//306
Object.defineProperty(dsf_tmp_context.onloadedmetadata_setter, "name", {
    value: "set onloadedmetadata",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onloadedmetadata", {
	get: dsf_tmp_context.onloadedmetadata_getter,
	set: dsf_tmp_context.onloadedmetadata_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onloadstart_getter = function onloadstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadstart_getter);//295
Object.defineProperty(dsf_tmp_context.onloadstart_getter, "name", {
    value: "get onloadstart",
    configurable: true
});//301
dsf_tmp_context.onloadstart_setter = function onloadstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onloadstart_setter);//306
Object.defineProperty(dsf_tmp_context.onloadstart_setter, "name", {
    value: "set onloadstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onloadstart", {
	get: dsf_tmp_context.onloadstart_getter,
	set: dsf_tmp_context.onloadstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmousedown_getter = function onmousedown() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousedown_getter);//295
Object.defineProperty(dsf_tmp_context.onmousedown_getter, "name", {
    value: "get onmousedown",
    configurable: true
});//301
dsf_tmp_context.onmousedown_setter = function onmousedown() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousedown_setter);//306
Object.defineProperty(dsf_tmp_context.onmousedown_setter, "name", {
    value: "set onmousedown",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmousedown", {
	get: dsf_tmp_context.onmousedown_getter,
	set: dsf_tmp_context.onmousedown_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmouseenter_getter = function onmouseenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseenter_getter);//295
Object.defineProperty(dsf_tmp_context.onmouseenter_getter, "name", {
    value: "get onmouseenter",
    configurable: true
});//301
dsf_tmp_context.onmouseenter_setter = function onmouseenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseenter_setter);//306
Object.defineProperty(dsf_tmp_context.onmouseenter_setter, "name", {
    value: "set onmouseenter",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmouseenter", {
	get: dsf_tmp_context.onmouseenter_getter,
	set: dsf_tmp_context.onmouseenter_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmouseleave_getter = function onmouseleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseleave_getter);//295
Object.defineProperty(dsf_tmp_context.onmouseleave_getter, "name", {
    value: "get onmouseleave",
    configurable: true
});//301
dsf_tmp_context.onmouseleave_setter = function onmouseleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseleave_setter);//306
Object.defineProperty(dsf_tmp_context.onmouseleave_setter, "name", {
    value: "set onmouseleave",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmouseleave", {
	get: dsf_tmp_context.onmouseleave_getter,
	set: dsf_tmp_context.onmouseleave_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmousemove_getter = function onmousemove() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousemove_getter);//295
Object.defineProperty(dsf_tmp_context.onmousemove_getter, "name", {
    value: "get onmousemove",
    configurable: true
});//301
dsf_tmp_context.onmousemove_setter = function onmousemove() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousemove_setter);//306
Object.defineProperty(dsf_tmp_context.onmousemove_setter, "name", {
    value: "set onmousemove",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmousemove", {
	get: dsf_tmp_context.onmousemove_getter,
	set: dsf_tmp_context.onmousemove_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmouseout_getter = function onmouseout() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseout_getter);//295
Object.defineProperty(dsf_tmp_context.onmouseout_getter, "name", {
    value: "get onmouseout",
    configurable: true
});//301
dsf_tmp_context.onmouseout_setter = function onmouseout() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseout_setter);//306
Object.defineProperty(dsf_tmp_context.onmouseout_setter, "name", {
    value: "set onmouseout",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmouseout", {
	get: dsf_tmp_context.onmouseout_getter,
	set: dsf_tmp_context.onmouseout_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmouseover_getter = function onmouseover() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseover_getter);//295
Object.defineProperty(dsf_tmp_context.onmouseover_getter, "name", {
    value: "get onmouseover",
    configurable: true
});//301
dsf_tmp_context.onmouseover_setter = function onmouseover() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseover_setter);//306
Object.defineProperty(dsf_tmp_context.onmouseover_setter, "name", {
    value: "set onmouseover",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmouseover", {
	get: dsf_tmp_context.onmouseover_getter,
	set: dsf_tmp_context.onmouseover_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmouseup_getter = function onmouseup() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseup_getter);//295
Object.defineProperty(dsf_tmp_context.onmouseup_getter, "name", {
    value: "get onmouseup",
    configurable: true
});//301
dsf_tmp_context.onmouseup_setter = function onmouseup() {debugger;}; catvm.safefunction(dsf_tmp_context.onmouseup_setter);//306
Object.defineProperty(dsf_tmp_context.onmouseup_setter, "name", {
    value: "set onmouseup",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmouseup", {
	get: dsf_tmp_context.onmouseup_getter,
	set: dsf_tmp_context.onmouseup_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onmousewheel_getter = function onmousewheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousewheel_getter);//295
Object.defineProperty(dsf_tmp_context.onmousewheel_getter, "name", {
    value: "get onmousewheel",
    configurable: true
});//301
dsf_tmp_context.onmousewheel_setter = function onmousewheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onmousewheel_setter);//306
Object.defineProperty(dsf_tmp_context.onmousewheel_setter, "name", {
    value: "set onmousewheel",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onmousewheel", {
	get: dsf_tmp_context.onmousewheel_getter,
	set: dsf_tmp_context.onmousewheel_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpause_getter = function onpause() {debugger;}; catvm.safefunction(dsf_tmp_context.onpause_getter);//295
Object.defineProperty(dsf_tmp_context.onpause_getter, "name", {
    value: "get onpause",
    configurable: true
});//301
dsf_tmp_context.onpause_setter = function onpause() {debugger;}; catvm.safefunction(dsf_tmp_context.onpause_setter);//306
Object.defineProperty(dsf_tmp_context.onpause_setter, "name", {
    value: "set onpause",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpause", {
	get: dsf_tmp_context.onpause_getter,
	set: dsf_tmp_context.onpause_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onplay_getter = function onplay() {debugger;}; catvm.safefunction(dsf_tmp_context.onplay_getter);//295
Object.defineProperty(dsf_tmp_context.onplay_getter, "name", {
    value: "get onplay",
    configurable: true
});//301
dsf_tmp_context.onplay_setter = function onplay() {debugger;}; catvm.safefunction(dsf_tmp_context.onplay_setter);//306
Object.defineProperty(dsf_tmp_context.onplay_setter, "name", {
    value: "set onplay",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onplay", {
	get: dsf_tmp_context.onplay_getter,
	set: dsf_tmp_context.onplay_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onplaying_getter = function onplaying() {debugger;}; catvm.safefunction(dsf_tmp_context.onplaying_getter);//295
Object.defineProperty(dsf_tmp_context.onplaying_getter, "name", {
    value: "get onplaying",
    configurable: true
});//301
dsf_tmp_context.onplaying_setter = function onplaying() {debugger;}; catvm.safefunction(dsf_tmp_context.onplaying_setter);//306
Object.defineProperty(dsf_tmp_context.onplaying_setter, "name", {
    value: "set onplaying",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onplaying", {
	get: dsf_tmp_context.onplaying_getter,
	set: dsf_tmp_context.onplaying_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onprogress_getter = function onprogress() {debugger;}; catvm.safefunction(dsf_tmp_context.onprogress_getter);//295
Object.defineProperty(dsf_tmp_context.onprogress_getter, "name", {
    value: "get onprogress",
    configurable: true
});//301
dsf_tmp_context.onprogress_setter = function onprogress() {debugger;}; catvm.safefunction(dsf_tmp_context.onprogress_setter);//306
Object.defineProperty(dsf_tmp_context.onprogress_setter, "name", {
    value: "set onprogress",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onprogress", {
	get: dsf_tmp_context.onprogress_getter,
	set: dsf_tmp_context.onprogress_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onratechange_getter = function onratechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onratechange_getter);//295
Object.defineProperty(dsf_tmp_context.onratechange_getter, "name", {
    value: "get onratechange",
    configurable: true
});//301
dsf_tmp_context.onratechange_setter = function onratechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onratechange_setter);//306
Object.defineProperty(dsf_tmp_context.onratechange_setter, "name", {
    value: "set onratechange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onratechange", {
	get: dsf_tmp_context.onratechange_getter,
	set: dsf_tmp_context.onratechange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onreset_getter = function onreset() {debugger;}; catvm.safefunction(dsf_tmp_context.onreset_getter);//295
Object.defineProperty(dsf_tmp_context.onreset_getter, "name", {
    value: "get onreset",
    configurable: true
});//301
dsf_tmp_context.onreset_setter = function onreset() {debugger;}; catvm.safefunction(dsf_tmp_context.onreset_setter);//306
Object.defineProperty(dsf_tmp_context.onreset_setter, "name", {
    value: "set onreset",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onreset", {
	get: dsf_tmp_context.onreset_getter,
	set: dsf_tmp_context.onreset_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onresize_getter = function onresize() {debugger;}; catvm.safefunction(dsf_tmp_context.onresize_getter);//295
Object.defineProperty(dsf_tmp_context.onresize_getter, "name", {
    value: "get onresize",
    configurable: true
});//301
dsf_tmp_context.onresize_setter = function onresize() {debugger;}; catvm.safefunction(dsf_tmp_context.onresize_setter);//306
Object.defineProperty(dsf_tmp_context.onresize_setter, "name", {
    value: "set onresize",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onresize", {
	get: dsf_tmp_context.onresize_getter,
	set: dsf_tmp_context.onresize_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onscroll_getter = function onscroll() {debugger;}; catvm.safefunction(dsf_tmp_context.onscroll_getter);//295
Object.defineProperty(dsf_tmp_context.onscroll_getter, "name", {
    value: "get onscroll",
    configurable: true
});//301
dsf_tmp_context.onscroll_setter = function onscroll() {debugger;}; catvm.safefunction(dsf_tmp_context.onscroll_setter);//306
Object.defineProperty(dsf_tmp_context.onscroll_setter, "name", {
    value: "set onscroll",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onscroll", {
	get: dsf_tmp_context.onscroll_getter,
	set: dsf_tmp_context.onscroll_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onsecuritypolicyviolation_getter = function onsecuritypolicyviolation() {debugger;}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_getter);//295
Object.defineProperty(dsf_tmp_context.onsecuritypolicyviolation_getter, "name", {
    value: "get onsecuritypolicyviolation",
    configurable: true
});//301
dsf_tmp_context.onsecuritypolicyviolation_setter = function onsecuritypolicyviolation() {debugger;}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_setter);//306
Object.defineProperty(dsf_tmp_context.onsecuritypolicyviolation_setter, "name", {
    value: "set onsecuritypolicyviolation",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
	get: dsf_tmp_context.onsecuritypolicyviolation_getter,
	set: dsf_tmp_context.onsecuritypolicyviolation_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onseeked_getter = function onseeked() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeked_getter);//295
Object.defineProperty(dsf_tmp_context.onseeked_getter, "name", {
    value: "get onseeked",
    configurable: true
});//301
dsf_tmp_context.onseeked_setter = function onseeked() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeked_setter);//306
Object.defineProperty(dsf_tmp_context.onseeked_setter, "name", {
    value: "set onseeked",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onseeked", {
	get: dsf_tmp_context.onseeked_getter,
	set: dsf_tmp_context.onseeked_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onseeking_getter = function onseeking() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeking_getter);//295
Object.defineProperty(dsf_tmp_context.onseeking_getter, "name", {
    value: "get onseeking",
    configurable: true
});//301
dsf_tmp_context.onseeking_setter = function onseeking() {debugger;}; catvm.safefunction(dsf_tmp_context.onseeking_setter);//306
Object.defineProperty(dsf_tmp_context.onseeking_setter, "name", {
    value: "set onseeking",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onseeking", {
	get: dsf_tmp_context.onseeking_getter,
	set: dsf_tmp_context.onseeking_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onselect_getter = function onselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onselect_getter);//295
Object.defineProperty(dsf_tmp_context.onselect_getter, "name", {
    value: "get onselect",
    configurable: true
});//301
dsf_tmp_context.onselect_setter = function onselect() {debugger;}; catvm.safefunction(dsf_tmp_context.onselect_setter);//306
Object.defineProperty(dsf_tmp_context.onselect_setter, "name", {
    value: "set onselect",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onselect", {
	get: dsf_tmp_context.onselect_getter,
	set: dsf_tmp_context.onselect_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onslotchange_getter = function onslotchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onslotchange_getter);//295
Object.defineProperty(dsf_tmp_context.onslotchange_getter, "name", {
    value: "get onslotchange",
    configurable: true
});//301
dsf_tmp_context.onslotchange_setter = function onslotchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onslotchange_setter);//306
Object.defineProperty(dsf_tmp_context.onslotchange_setter, "name", {
    value: "set onslotchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onslotchange", {
	get: dsf_tmp_context.onslotchange_getter,
	set: dsf_tmp_context.onslotchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onstalled_getter = function onstalled() {debugger;}; catvm.safefunction(dsf_tmp_context.onstalled_getter);//295
Object.defineProperty(dsf_tmp_context.onstalled_getter, "name", {
    value: "get onstalled",
    configurable: true
});//301
dsf_tmp_context.onstalled_setter = function onstalled() {debugger;}; catvm.safefunction(dsf_tmp_context.onstalled_setter);//306
Object.defineProperty(dsf_tmp_context.onstalled_setter, "name", {
    value: "set onstalled",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onstalled", {
	get: dsf_tmp_context.onstalled_getter,
	set: dsf_tmp_context.onstalled_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onsubmit_getter = function onsubmit() {debugger;}; catvm.safefunction(dsf_tmp_context.onsubmit_getter);//295
Object.defineProperty(dsf_tmp_context.onsubmit_getter, "name", {
    value: "get onsubmit",
    configurable: true
});//301
dsf_tmp_context.onsubmit_setter = function onsubmit() {debugger;}; catvm.safefunction(dsf_tmp_context.onsubmit_setter);//306
Object.defineProperty(dsf_tmp_context.onsubmit_setter, "name", {
    value: "set onsubmit",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onsubmit", {
	get: dsf_tmp_context.onsubmit_getter,
	set: dsf_tmp_context.onsubmit_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onsuspend_getter = function onsuspend() {debugger;}; catvm.safefunction(dsf_tmp_context.onsuspend_getter);//295
Object.defineProperty(dsf_tmp_context.onsuspend_getter, "name", {
    value: "get onsuspend",
    configurable: true
});//301
dsf_tmp_context.onsuspend_setter = function onsuspend() {debugger;}; catvm.safefunction(dsf_tmp_context.onsuspend_setter);//306
Object.defineProperty(dsf_tmp_context.onsuspend_setter, "name", {
    value: "set onsuspend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onsuspend", {
	get: dsf_tmp_context.onsuspend_getter,
	set: dsf_tmp_context.onsuspend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontimeupdate_getter = function ontimeupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.ontimeupdate_getter);//295
Object.defineProperty(dsf_tmp_context.ontimeupdate_getter, "name", {
    value: "get ontimeupdate",
    configurable: true
});//301
dsf_tmp_context.ontimeupdate_setter = function ontimeupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.ontimeupdate_setter);//306
Object.defineProperty(dsf_tmp_context.ontimeupdate_setter, "name", {
    value: "set ontimeupdate",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontimeupdate", {
	get: dsf_tmp_context.ontimeupdate_getter,
	set: dsf_tmp_context.ontimeupdate_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontoggle_getter = function ontoggle() {debugger;}; catvm.safefunction(dsf_tmp_context.ontoggle_getter);//295
Object.defineProperty(dsf_tmp_context.ontoggle_getter, "name", {
    value: "get ontoggle",
    configurable: true
});//301
dsf_tmp_context.ontoggle_setter = function ontoggle() {debugger;}; catvm.safefunction(dsf_tmp_context.ontoggle_setter);//306
Object.defineProperty(dsf_tmp_context.ontoggle_setter, "name", {
    value: "set ontoggle",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontoggle", {
	get: dsf_tmp_context.ontoggle_getter,
	set: dsf_tmp_context.ontoggle_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onvolumechange_getter = function onvolumechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvolumechange_getter);//295
Object.defineProperty(dsf_tmp_context.onvolumechange_getter, "name", {
    value: "get onvolumechange",
    configurable: true
});//301
dsf_tmp_context.onvolumechange_setter = function onvolumechange() {debugger;}; catvm.safefunction(dsf_tmp_context.onvolumechange_setter);//306
Object.defineProperty(dsf_tmp_context.onvolumechange_setter, "name", {
    value: "set onvolumechange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onvolumechange", {
	get: dsf_tmp_context.onvolumechange_getter,
	set: dsf_tmp_context.onvolumechange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwaiting_getter = function onwaiting() {debugger;}; catvm.safefunction(dsf_tmp_context.onwaiting_getter);//295
Object.defineProperty(dsf_tmp_context.onwaiting_getter, "name", {
    value: "get onwaiting",
    configurable: true
});//301
dsf_tmp_context.onwaiting_setter = function onwaiting() {debugger;}; catvm.safefunction(dsf_tmp_context.onwaiting_setter);//306
Object.defineProperty(dsf_tmp_context.onwaiting_setter, "name", {
    value: "set onwaiting",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwaiting", {
	get: dsf_tmp_context.onwaiting_getter,
	set: dsf_tmp_context.onwaiting_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkitanimationend_getter = function onwebkitanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkitanimationend_getter, "name", {
    value: "get onwebkitanimationend",
    configurable: true
});//301
dsf_tmp_context.onwebkitanimationend_setter = function onwebkitanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkitanimationend_setter, "name", {
    value: "set onwebkitanimationend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkitanimationend", {
	get: dsf_tmp_context.onwebkitanimationend_getter,
	set: dsf_tmp_context.onwebkitanimationend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkitanimationiteration_getter = function onwebkitanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkitanimationiteration_getter, "name", {
    value: "get onwebkitanimationiteration",
    configurable: true
});//301
dsf_tmp_context.onwebkitanimationiteration_setter = function onwebkitanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkitanimationiteration_setter, "name", {
    value: "set onwebkitanimationiteration",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkitanimationiteration", {
	get: dsf_tmp_context.onwebkitanimationiteration_getter,
	set: dsf_tmp_context.onwebkitanimationiteration_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkitanimationstart_getter = function onwebkitanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkitanimationstart_getter, "name", {
    value: "get onwebkitanimationstart",
    configurable: true
});//301
dsf_tmp_context.onwebkitanimationstart_setter = function onwebkitanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkitanimationstart_setter, "name", {
    value: "set onwebkitanimationstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkitanimationstart", {
	get: dsf_tmp_context.onwebkitanimationstart_getter,
	set: dsf_tmp_context.onwebkitanimationstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwebkittransitionend_getter = function onwebkittransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_getter);//295
Object.defineProperty(dsf_tmp_context.onwebkittransitionend_getter, "name", {
    value: "get onwebkittransitionend",
    configurable: true
});//301
dsf_tmp_context.onwebkittransitionend_setter = function onwebkittransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_setter);//306
Object.defineProperty(dsf_tmp_context.onwebkittransitionend_setter, "name", {
    value: "set onwebkittransitionend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwebkittransitionend", {
	get: dsf_tmp_context.onwebkittransitionend_getter,
	set: dsf_tmp_context.onwebkittransitionend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onwheel_getter = function onwheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onwheel_getter);//295
Object.defineProperty(dsf_tmp_context.onwheel_getter, "name", {
    value: "get onwheel",
    configurable: true
});//301
dsf_tmp_context.onwheel_setter = function onwheel() {debugger;}; catvm.safefunction(dsf_tmp_context.onwheel_setter);//306
Object.defineProperty(dsf_tmp_context.onwheel_setter, "name", {
    value: "set onwheel",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onwheel", {
	get: dsf_tmp_context.onwheel_getter,
	set: dsf_tmp_context.onwheel_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onauxclick_getter = function onauxclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onauxclick_getter);//295
Object.defineProperty(dsf_tmp_context.onauxclick_getter, "name", {
    value: "get onauxclick",
    configurable: true
});//301
dsf_tmp_context.onauxclick_setter = function onauxclick() {debugger;}; catvm.safefunction(dsf_tmp_context.onauxclick_setter);//306
Object.defineProperty(dsf_tmp_context.onauxclick_setter, "name", {
    value: "set onauxclick",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onauxclick", {
	get: dsf_tmp_context.onauxclick_getter,
	set: dsf_tmp_context.onauxclick_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ongotpointercapture_getter = function ongotpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_getter);//295
Object.defineProperty(dsf_tmp_context.ongotpointercapture_getter, "name", {
    value: "get ongotpointercapture",
    configurable: true
});//301
dsf_tmp_context.ongotpointercapture_setter = function ongotpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_setter);//306
Object.defineProperty(dsf_tmp_context.ongotpointercapture_setter, "name", {
    value: "set ongotpointercapture",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ongotpointercapture", {
	get: dsf_tmp_context.ongotpointercapture_getter,
	set: dsf_tmp_context.ongotpointercapture_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onlostpointercapture_getter = function onlostpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_getter);//295
Object.defineProperty(dsf_tmp_context.onlostpointercapture_getter, "name", {
    value: "get onlostpointercapture",
    configurable: true
});//301
dsf_tmp_context.onlostpointercapture_setter = function onlostpointercapture() {debugger;}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_setter);//306
Object.defineProperty(dsf_tmp_context.onlostpointercapture_setter, "name", {
    value: "set onlostpointercapture",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onlostpointercapture", {
	get: dsf_tmp_context.onlostpointercapture_getter,
	set: dsf_tmp_context.onlostpointercapture_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerdown_getter = function onpointerdown() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerdown_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerdown_getter, "name", {
    value: "get onpointerdown",
    configurable: true
});//301
dsf_tmp_context.onpointerdown_setter = function onpointerdown() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerdown_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerdown_setter, "name", {
    value: "set onpointerdown",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerdown", {
	get: dsf_tmp_context.onpointerdown_getter,
	set: dsf_tmp_context.onpointerdown_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointermove_getter = function onpointermove() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointermove_getter);//295
Object.defineProperty(dsf_tmp_context.onpointermove_getter, "name", {
    value: "get onpointermove",
    configurable: true
});//301
dsf_tmp_context.onpointermove_setter = function onpointermove() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointermove_setter);//306
Object.defineProperty(dsf_tmp_context.onpointermove_setter, "name", {
    value: "set onpointermove",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointermove", {
	get: dsf_tmp_context.onpointermove_getter,
	set: dsf_tmp_context.onpointermove_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerrawupdate_getter = function onpointerrawupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerrawupdate_getter, "name", {
    value: "get onpointerrawupdate",
    configurable: true
});//301
dsf_tmp_context.onpointerrawupdate_setter = function onpointerrawupdate() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerrawupdate_setter, "name", {
    value: "set onpointerrawupdate",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerrawupdate", {
	get: dsf_tmp_context.onpointerrawupdate_getter,
	set: dsf_tmp_context.onpointerrawupdate_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerup_getter = function onpointerup() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerup_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerup_getter, "name", {
    value: "get onpointerup",
    configurable: true
});//301
dsf_tmp_context.onpointerup_setter = function onpointerup() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerup_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerup_setter, "name", {
    value: "set onpointerup",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerup", {
	get: dsf_tmp_context.onpointerup_getter,
	set: dsf_tmp_context.onpointerup_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointercancel_getter = function onpointercancel() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointercancel_getter);//295
Object.defineProperty(dsf_tmp_context.onpointercancel_getter, "name", {
    value: "get onpointercancel",
    configurable: true
});//301
dsf_tmp_context.onpointercancel_setter = function onpointercancel() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointercancel_setter);//306
Object.defineProperty(dsf_tmp_context.onpointercancel_setter, "name", {
    value: "set onpointercancel",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointercancel", {
	get: dsf_tmp_context.onpointercancel_getter,
	set: dsf_tmp_context.onpointercancel_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerover_getter = function onpointerover() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerover_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerover_getter, "name", {
    value: "get onpointerover",
    configurable: true
});//301
dsf_tmp_context.onpointerover_setter = function onpointerover() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerover_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerover_setter, "name", {
    value: "set onpointerover",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerover", {
	get: dsf_tmp_context.onpointerover_getter,
	set: dsf_tmp_context.onpointerover_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerout_getter = function onpointerout() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerout_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerout_getter, "name", {
    value: "get onpointerout",
    configurable: true
});//301
dsf_tmp_context.onpointerout_setter = function onpointerout() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerout_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerout_setter, "name", {
    value: "set onpointerout",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerout", {
	get: dsf_tmp_context.onpointerout_getter,
	set: dsf_tmp_context.onpointerout_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerenter_getter = function onpointerenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerenter_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerenter_getter, "name", {
    value: "get onpointerenter",
    configurable: true
});//301
dsf_tmp_context.onpointerenter_setter = function onpointerenter() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerenter_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerenter_setter, "name", {
    value: "set onpointerenter",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerenter", {
	get: dsf_tmp_context.onpointerenter_getter,
	set: dsf_tmp_context.onpointerenter_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpointerleave_getter = function onpointerleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerleave_getter);//295
Object.defineProperty(dsf_tmp_context.onpointerleave_getter, "name", {
    value: "get onpointerleave",
    configurable: true
});//301
dsf_tmp_context.onpointerleave_setter = function onpointerleave() {debugger;}; catvm.safefunction(dsf_tmp_context.onpointerleave_setter);//306
Object.defineProperty(dsf_tmp_context.onpointerleave_setter, "name", {
    value: "set onpointerleave",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpointerleave", {
	get: dsf_tmp_context.onpointerleave_getter,
	set: dsf_tmp_context.onpointerleave_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onselectstart_getter = function onselectstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectstart_getter);//295
Object.defineProperty(dsf_tmp_context.onselectstart_getter, "name", {
    value: "get onselectstart",
    configurable: true
});//301
dsf_tmp_context.onselectstart_setter = function onselectstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectstart_setter);//306
Object.defineProperty(dsf_tmp_context.onselectstart_setter, "name", {
    value: "set onselectstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onselectstart", {
	get: dsf_tmp_context.onselectstart_getter,
	set: dsf_tmp_context.onselectstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onselectionchange_getter = function onselectionchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectionchange_getter);//295
Object.defineProperty(dsf_tmp_context.onselectionchange_getter, "name", {
    value: "get onselectionchange",
    configurable: true
});//301
dsf_tmp_context.onselectionchange_setter = function onselectionchange() {debugger;}; catvm.safefunction(dsf_tmp_context.onselectionchange_setter);//306
Object.defineProperty(dsf_tmp_context.onselectionchange_setter, "name", {
    value: "set onselectionchange",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onselectionchange", {
	get: dsf_tmp_context.onselectionchange_getter,
	set: dsf_tmp_context.onselectionchange_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onanimationend_getter = function onanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationend_getter);//295
Object.defineProperty(dsf_tmp_context.onanimationend_getter, "name", {
    value: "get onanimationend",
    configurable: true
});//301
dsf_tmp_context.onanimationend_setter = function onanimationend() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationend_setter);//306
Object.defineProperty(dsf_tmp_context.onanimationend_setter, "name", {
    value: "set onanimationend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onanimationend", {
	get: dsf_tmp_context.onanimationend_getter,
	set: dsf_tmp_context.onanimationend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onanimationiteration_getter = function onanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationiteration_getter);//295
Object.defineProperty(dsf_tmp_context.onanimationiteration_getter, "name", {
    value: "get onanimationiteration",
    configurable: true
});//301
dsf_tmp_context.onanimationiteration_setter = function onanimationiteration() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationiteration_setter);//306
Object.defineProperty(dsf_tmp_context.onanimationiteration_setter, "name", {
    value: "set onanimationiteration",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onanimationiteration", {
	get: dsf_tmp_context.onanimationiteration_getter,
	set: dsf_tmp_context.onanimationiteration_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onanimationstart_getter = function onanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationstart_getter);//295
Object.defineProperty(dsf_tmp_context.onanimationstart_getter, "name", {
    value: "get onanimationstart",
    configurable: true
});//301
dsf_tmp_context.onanimationstart_setter = function onanimationstart() {debugger;}; catvm.safefunction(dsf_tmp_context.onanimationstart_setter);//306
Object.defineProperty(dsf_tmp_context.onanimationstart_setter, "name", {
    value: "set onanimationstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onanimationstart", {
	get: dsf_tmp_context.onanimationstart_getter,
	set: dsf_tmp_context.onanimationstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontransitionrun_getter = function ontransitionrun() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionrun_getter);//295
Object.defineProperty(dsf_tmp_context.ontransitionrun_getter, "name", {
    value: "get ontransitionrun",
    configurable: true
});//301
dsf_tmp_context.ontransitionrun_setter = function ontransitionrun() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionrun_setter);//306
Object.defineProperty(dsf_tmp_context.ontransitionrun_setter, "name", {
    value: "set ontransitionrun",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontransitionrun", {
	get: dsf_tmp_context.ontransitionrun_getter,
	set: dsf_tmp_context.ontransitionrun_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontransitionstart_getter = function ontransitionstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionstart_getter);//295
Object.defineProperty(dsf_tmp_context.ontransitionstart_getter, "name", {
    value: "get ontransitionstart",
    configurable: true
});//301
dsf_tmp_context.ontransitionstart_setter = function ontransitionstart() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionstart_setter);//306
Object.defineProperty(dsf_tmp_context.ontransitionstart_setter, "name", {
    value: "set ontransitionstart",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontransitionstart", {
	get: dsf_tmp_context.ontransitionstart_getter,
	set: dsf_tmp_context.ontransitionstart_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontransitionend_getter = function ontransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionend_getter);//295
Object.defineProperty(dsf_tmp_context.ontransitionend_getter, "name", {
    value: "get ontransitionend",
    configurable: true
});//301
dsf_tmp_context.ontransitionend_setter = function ontransitionend() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitionend_setter);//306
Object.defineProperty(dsf_tmp_context.ontransitionend_setter, "name", {
    value: "set ontransitionend",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontransitionend", {
	get: dsf_tmp_context.ontransitionend_getter,
	set: dsf_tmp_context.ontransitionend_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.ontransitioncancel_getter = function ontransitioncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_getter);//295
Object.defineProperty(dsf_tmp_context.ontransitioncancel_getter, "name", {
    value: "get ontransitioncancel",
    configurable: true
});//301
dsf_tmp_context.ontransitioncancel_setter = function ontransitioncancel() {debugger;}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_setter);//306
Object.defineProperty(dsf_tmp_context.ontransitioncancel_setter, "name", {
    value: "set ontransitioncancel",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "ontransitioncancel", {
	get: dsf_tmp_context.ontransitioncancel_getter,
	set: dsf_tmp_context.ontransitioncancel_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncopy_getter = function oncopy() {debugger;}; catvm.safefunction(dsf_tmp_context.oncopy_getter);//295
Object.defineProperty(dsf_tmp_context.oncopy_getter, "name", {
    value: "get oncopy",
    configurable: true
});//301
dsf_tmp_context.oncopy_setter = function oncopy() {debugger;}; catvm.safefunction(dsf_tmp_context.oncopy_setter);//306
Object.defineProperty(dsf_tmp_context.oncopy_setter, "name", {
    value: "set oncopy",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncopy", {
	get: dsf_tmp_context.oncopy_getter,
	set: dsf_tmp_context.oncopy_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.oncut_getter = function oncut() {debugger;}; catvm.safefunction(dsf_tmp_context.oncut_getter);//295
Object.defineProperty(dsf_tmp_context.oncut_getter, "name", {
    value: "get oncut",
    configurable: true
});//301
dsf_tmp_context.oncut_setter = function oncut() {debugger;}; catvm.safefunction(dsf_tmp_context.oncut_setter);//306
Object.defineProperty(dsf_tmp_context.oncut_setter, "name", {
    value: "set oncut",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "oncut", {
	get: dsf_tmp_context.oncut_getter,
	set: dsf_tmp_context.oncut_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onpaste_getter = function onpaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onpaste_getter);//295
Object.defineProperty(dsf_tmp_context.onpaste_getter, "name", {
    value: "get onpaste",
    configurable: true
});//301
dsf_tmp_context.onpaste_setter = function onpaste() {debugger;}; catvm.safefunction(dsf_tmp_context.onpaste_setter);//306
Object.defineProperty(dsf_tmp_context.onpaste_setter, "name", {
    value: "set onpaste",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onpaste", {
	get: dsf_tmp_context.onpaste_getter,
	set: dsf_tmp_context.onpaste_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.children_getter = function children() {debugger;}; catvm.safefunction(dsf_tmp_context.children_getter);//295
Object.defineProperty(dsf_tmp_context.children_getter, "name", {
    value: "get children",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "children", {
	get: dsf_tmp_context.children_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.firstElementChild_getter = function firstElementChild() {debugger;}; catvm.safefunction(dsf_tmp_context.firstElementChild_getter);//295
Object.defineProperty(dsf_tmp_context.firstElementChild_getter, "name", {
    value: "get firstElementChild",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "firstElementChild", {
	get: dsf_tmp_context.firstElementChild_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.lastElementChild_getter = function lastElementChild() {debugger;}; catvm.safefunction(dsf_tmp_context.lastElementChild_getter);//295
Object.defineProperty(dsf_tmp_context.lastElementChild_getter, "name", {
    value: "get lastElementChild",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "lastElementChild", {
	get: dsf_tmp_context.lastElementChild_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.childElementCount_getter = function childElementCount() {debugger;}; catvm.safefunction(dsf_tmp_context.childElementCount_getter);//295
Object.defineProperty(dsf_tmp_context.childElementCount_getter, "name", {
    value: "get childElementCount",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "childElementCount", {
	get: dsf_tmp_context.childElementCount_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.activeElement_getter = function activeElement() {debugger;}; catvm.safefunction(dsf_tmp_context.activeElement_getter);//295
Object.defineProperty(dsf_tmp_context.activeElement_getter, "name", {
    value: "get activeElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "activeElement", {
	get: dsf_tmp_context.activeElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.styleSheets_getter = function styleSheets() {debugger;}; catvm.safefunction(dsf_tmp_context.styleSheets_getter);//295
Object.defineProperty(dsf_tmp_context.styleSheets_getter, "name", {
    value: "get styleSheets",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "styleSheets", {
	get: dsf_tmp_context.styleSheets_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.pointerLockElement_getter = function pointerLockElement() {debugger;}; catvm.safefunction(dsf_tmp_context.pointerLockElement_getter);//295
Object.defineProperty(dsf_tmp_context.pointerLockElement_getter, "name", {
    value: "get pointerLockElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "pointerLockElement", {
	get: dsf_tmp_context.pointerLockElement_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fullscreenElement_getter = function fullscreenElement() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreenElement_getter);//295
Object.defineProperty(dsf_tmp_context.fullscreenElement_getter, "name", {
    value: "get fullscreenElement",
    configurable: true
});//301
dsf_tmp_context.fullscreenElement_setter = function fullscreenElement() {debugger;}; catvm.safefunction(dsf_tmp_context.fullscreenElement_setter);//306
Object.defineProperty(dsf_tmp_context.fullscreenElement_setter, "name", {
    value: "set fullscreenElement",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "fullscreenElement", {
	get: dsf_tmp_context.fullscreenElement_getter,
	set: dsf_tmp_context.fullscreenElement_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.adoptedStyleSheets_getter = function adoptedStyleSheets() {debugger;}; catvm.safefunction(dsf_tmp_context.adoptedStyleSheets_getter);//295
Object.defineProperty(dsf_tmp_context.adoptedStyleSheets_getter, "name", {
    value: "get adoptedStyleSheets",
    configurable: true
});//301
dsf_tmp_context.adoptedStyleSheets_setter = function adoptedStyleSheets() {debugger;}; catvm.safefunction(dsf_tmp_context.adoptedStyleSheets_setter);//306
Object.defineProperty(dsf_tmp_context.adoptedStyleSheets_setter, "name", {
    value: "set adoptedStyleSheets",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "adoptedStyleSheets", {
	get: dsf_tmp_context.adoptedStyleSheets_getter,
	set: dsf_tmp_context.adoptedStyleSheets_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fonts_getter = function fonts() {debugger;}; catvm.safefunction(dsf_tmp_context.fonts_getter);//295
Object.defineProperty(dsf_tmp_context.fonts_getter, "name", {
    value: "get fonts",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "fonts", {
	get: dsf_tmp_context.fonts_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.fragmentDirective_getter = function fragmentDirective() {debugger;}; catvm.safefunction(dsf_tmp_context.fragmentDirective_getter);//295
Object.defineProperty(dsf_tmp_context.fragmentDirective_getter, "name", {
    value: "get fragmentDirective",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "fragmentDirective", {
	get: dsf_tmp_context.fragmentDirective_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.onbeforematch_getter = function onbeforematch() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforematch_getter);//295
Object.defineProperty(dsf_tmp_context.onbeforematch_getter, "name", {
    value: "get onbeforematch",
    configurable: true
});//301
dsf_tmp_context.onbeforematch_setter = function onbeforematch() {debugger;}; catvm.safefunction(dsf_tmp_context.onbeforematch_setter);//306
Object.defineProperty(dsf_tmp_context.onbeforematch_setter, "name", {
    value: "set onbeforematch",
    configurable: true
});//311

Object.defineProperty(Document.prototype, "onbeforematch", {
	get: dsf_tmp_context.onbeforematch_getter,
	set: dsf_tmp_context.onbeforematch_setter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.timeline_getter = function timeline() {debugger;}; catvm.safefunction(dsf_tmp_context.timeline_getter);//295
Object.defineProperty(dsf_tmp_context.timeline_getter, "name", {
    value: "get timeline",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "timeline", {
	get: dsf_tmp_context.timeline_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.pictureInPictureEnabled_getter = function pictureInPictureEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.pictureInPictureEnabled_getter);//295
Object.defineProperty(dsf_tmp_context.pictureInPictureEnabled_getter, "name", {
    value: "get pictureInPictureEnabled",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "pictureInPictureEnabled", {
	get: dsf_tmp_context.pictureInPictureEnabled_getter,
	enumerable:true,
	configurable:true,
});//332

dsf_tmp_context.pictureInPictureElement_getter = function pictureInPictureElement() {debugger;}; catvm.safefunction(dsf_tmp_context.pictureInPictureElement_getter);//295
Object.defineProperty(dsf_tmp_context.pictureInPictureElement_getter, "name", {
    value: "get pictureInPictureElement",
    configurable: true
});//301

Object.defineProperty(Document.prototype, "pictureInPictureElement", {
	get: dsf_tmp_context.pictureInPictureElement_getter,
	enumerable:true,
	configurable:true,
});//332

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.Document.document_obj.__defineGetter__("implementation",Object.getOwnPropertyDescriptor(Document.prototype,"implementation").get);
dsf_tmp_context.implementation_getter = function implementation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.implementation_getter);
Document.prototype.__defineGetter__("implementation",dsf_tmp_context.implementation_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("URL",Object.getOwnPropertyDescriptor(Document.prototype,"URL").get);
dsf_tmp_context.URL_getter = function URL(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.URL_getter);
Document.prototype.__defineGetter__("URL",dsf_tmp_context.URL_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("documentURI",Object.getOwnPropertyDescriptor(Document.prototype,"documentURI").get);
dsf_tmp_context.documentURI_getter = function documentURI(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.documentURI_getter);
Document.prototype.__defineGetter__("documentURI",dsf_tmp_context.documentURI_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("compatMode",Object.getOwnPropertyDescriptor(Document.prototype,"compatMode").get);
dsf_tmp_context.compatMode_getter = function compatMode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.compatMode_getter);
Document.prototype.__defineGetter__("compatMode",dsf_tmp_context.compatMode_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("characterSet",Object.getOwnPropertyDescriptor(Document.prototype,"characterSet").get);
dsf_tmp_context.characterSet_getter = function characterSet(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.characterSet_getter);
Document.prototype.__defineGetter__("characterSet",dsf_tmp_context.characterSet_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("charset",Object.getOwnPropertyDescriptor(Document.prototype,"charset").get);
dsf_tmp_context.charset_getter = function charset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.charset_getter);
Document.prototype.__defineGetter__("charset",dsf_tmp_context.charset_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("inputEncoding",Object.getOwnPropertyDescriptor(Document.prototype,"inputEncoding").get);
dsf_tmp_context.inputEncoding_getter = function inputEncoding(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.inputEncoding_getter);
Document.prototype.__defineGetter__("inputEncoding",dsf_tmp_context.inputEncoding_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("contentType",Object.getOwnPropertyDescriptor(Document.prototype,"contentType").get);
dsf_tmp_context.contentType_getter = function contentType(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.contentType_getter);
Document.prototype.__defineGetter__("contentType",dsf_tmp_context.contentType_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("doctype",Object.getOwnPropertyDescriptor(Document.prototype,"doctype").get);
dsf_tmp_context.doctype_getter = function doctype(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.doctype_getter);
Document.prototype.__defineGetter__("doctype",dsf_tmp_context.doctype_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("documentElement",Object.getOwnPropertyDescriptor(Document.prototype,"documentElement").get);
dsf_tmp_context.documentElement_getter = function documentElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.documentElement_getter);
Document.prototype.__defineGetter__("documentElement",dsf_tmp_context.documentElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("xmlEncoding",Object.getOwnPropertyDescriptor(Document.prototype,"xmlEncoding").get);
dsf_tmp_context.xmlEncoding_getter = function xmlEncoding(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.xmlEncoding_getter);
Document.prototype.__defineGetter__("xmlEncoding",dsf_tmp_context.xmlEncoding_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("xmlVersion",Object.getOwnPropertyDescriptor(Document.prototype,"xmlVersion").get);
dsf_tmp_context.xmlVersion_getter = function xmlVersion(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.xmlVersion_getter);
Document.prototype.__defineGetter__("xmlVersion",dsf_tmp_context.xmlVersion_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("xmlStandalone",Object.getOwnPropertyDescriptor(Document.prototype,"xmlStandalone").get);
dsf_tmp_context.xmlStandalone_getter = function xmlStandalone(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.xmlStandalone_getter);
Document.prototype.__defineGetter__("xmlStandalone",dsf_tmp_context.xmlStandalone_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("domain",Object.getOwnPropertyDescriptor(Document.prototype,"domain").get);
dsf_tmp_context.domain_getter = function domain(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.domain_getter);
Document.prototype.__defineGetter__("domain",dsf_tmp_context.domain_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("referrer",Object.getOwnPropertyDescriptor(Document.prototype,"referrer").get);
dsf_tmp_context.referrer_getter = function referrer(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.referrer_getter);
Document.prototype.__defineGetter__("referrer",dsf_tmp_context.referrer_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("cookie",Object.getOwnPropertyDescriptor(Document.prototype,"cookie").get);
dsf_tmp_context.cookie_getter = function cookie(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.cookie_getter);
Document.prototype.__defineGetter__("cookie",dsf_tmp_context.cookie_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("lastModified",Object.getOwnPropertyDescriptor(Document.prototype,"lastModified").get);
dsf_tmp_context.lastModified_getter = function lastModified(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lastModified_getter);
Document.prototype.__defineGetter__("lastModified",dsf_tmp_context.lastModified_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("readyState",Object.getOwnPropertyDescriptor(Document.prototype,"readyState").get);
dsf_tmp_context.readyState_getter = function readyState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.readyState_getter);
Document.prototype.__defineGetter__("readyState",dsf_tmp_context.readyState_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("title",Object.getOwnPropertyDescriptor(Document.prototype,"title").get);
dsf_tmp_context.title_getter = function title(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.title_getter);
Document.prototype.__defineGetter__("title",dsf_tmp_context.title_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("dir",Object.getOwnPropertyDescriptor(Document.prototype,"dir").get);
dsf_tmp_context.dir_getter = function dir(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.dir_getter);
Document.prototype.__defineGetter__("dir",dsf_tmp_context.dir_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("body",Object.getOwnPropertyDescriptor(Document.prototype,"body").get);
dsf_tmp_context.body_getter = function body(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.body_getter);
Document.prototype.__defineGetter__("body",dsf_tmp_context.body_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("head",Object.getOwnPropertyDescriptor(Document.prototype,"head").get);
dsf_tmp_context.head_getter = function head(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.head_getter);
Document.prototype.__defineGetter__("head",dsf_tmp_context.head_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("images",Object.getOwnPropertyDescriptor(Document.prototype,"images").get);
dsf_tmp_context.images_getter = function images(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.images_getter);
Document.prototype.__defineGetter__("images",dsf_tmp_context.images_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("embeds",Object.getOwnPropertyDescriptor(Document.prototype,"embeds").get);
dsf_tmp_context.embeds_getter = function embeds(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.embeds_getter);
Document.prototype.__defineGetter__("embeds",dsf_tmp_context.embeds_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("plugins",Object.getOwnPropertyDescriptor(Document.prototype,"plugins").get);
dsf_tmp_context.plugins_getter = function plugins(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.plugins_getter);
Document.prototype.__defineGetter__("plugins",dsf_tmp_context.plugins_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("links",Object.getOwnPropertyDescriptor(Document.prototype,"links").get);
dsf_tmp_context.links_getter = function links(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.links_getter);
Document.prototype.__defineGetter__("links",dsf_tmp_context.links_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("forms",Object.getOwnPropertyDescriptor(Document.prototype,"forms").get);
dsf_tmp_context.forms_getter = function forms(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.forms_getter);
Document.prototype.__defineGetter__("forms",dsf_tmp_context.forms_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("scripts",Object.getOwnPropertyDescriptor(Document.prototype,"scripts").get);
dsf_tmp_context.scripts_getter = function scripts(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scripts_getter);
Document.prototype.__defineGetter__("scripts",dsf_tmp_context.scripts_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("currentScript",Object.getOwnPropertyDescriptor(Document.prototype,"currentScript").get);
dsf_tmp_context.currentScript_getter = function currentScript(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.currentScript_getter);
Document.prototype.__defineGetter__("currentScript",dsf_tmp_context.currentScript_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("defaultView",Object.getOwnPropertyDescriptor(Document.prototype,"defaultView").get);
dsf_tmp_context.defaultView_getter = function defaultView(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.defaultView_getter);
Document.prototype.__defineGetter__("defaultView",dsf_tmp_context.defaultView_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("designMode",Object.getOwnPropertyDescriptor(Document.prototype,"designMode").get);
dsf_tmp_context.designMode_getter = function designMode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.designMode_getter);
Document.prototype.__defineGetter__("designMode",dsf_tmp_context.designMode_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("anchors",Object.getOwnPropertyDescriptor(Document.prototype,"anchors").get);
dsf_tmp_context.anchors_getter = function anchors(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.anchors_getter);
Document.prototype.__defineGetter__("anchors",dsf_tmp_context.anchors_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("applets",Object.getOwnPropertyDescriptor(Document.prototype,"applets").get);
dsf_tmp_context.applets_getter = function applets(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.applets_getter);
Document.prototype.__defineGetter__("applets",dsf_tmp_context.applets_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fgColor",Object.getOwnPropertyDescriptor(Document.prototype,"fgColor").get);
dsf_tmp_context.fgColor_getter = function fgColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fgColor_getter);
Document.prototype.__defineGetter__("fgColor",dsf_tmp_context.fgColor_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("linkColor",Object.getOwnPropertyDescriptor(Document.prototype,"linkColor").get);
dsf_tmp_context.linkColor_getter = function linkColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.linkColor_getter);
Document.prototype.__defineGetter__("linkColor",dsf_tmp_context.linkColor_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("vlinkColor",Object.getOwnPropertyDescriptor(Document.prototype,"vlinkColor").get);
dsf_tmp_context.vlinkColor_getter = function vlinkColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.vlinkColor_getter);
Document.prototype.__defineGetter__("vlinkColor",dsf_tmp_context.vlinkColor_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("alinkColor",Object.getOwnPropertyDescriptor(Document.prototype,"alinkColor").get);
dsf_tmp_context.alinkColor_getter = function alinkColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.alinkColor_getter);
Document.prototype.__defineGetter__("alinkColor",dsf_tmp_context.alinkColor_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("bgColor",Object.getOwnPropertyDescriptor(Document.prototype,"bgColor").get);
dsf_tmp_context.bgColor_getter = function bgColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.bgColor_getter);
Document.prototype.__defineGetter__("bgColor",dsf_tmp_context.bgColor_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("all",Object.getOwnPropertyDescriptor(Document.prototype,"all").get);
dsf_tmp_context.all_getter = function all(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.all_getter);
Document.prototype.__defineGetter__("all",dsf_tmp_context.all_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("scrollingElement",Object.getOwnPropertyDescriptor(Document.prototype,"scrollingElement").get);
dsf_tmp_context.scrollingElement_getter = function scrollingElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scrollingElement_getter);
Document.prototype.__defineGetter__("scrollingElement",dsf_tmp_context.scrollingElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerlockchange",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerlockchange").get);
dsf_tmp_context.onpointerlockchange_getter = function onpointerlockchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerlockchange_getter);
Document.prototype.__defineGetter__("onpointerlockchange",dsf_tmp_context.onpointerlockchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerlockerror",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerlockerror").get);
dsf_tmp_context.onpointerlockerror_getter = function onpointerlockerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerlockerror_getter);
Document.prototype.__defineGetter__("onpointerlockerror",dsf_tmp_context.onpointerlockerror_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("hidden",Object.getOwnPropertyDescriptor(Document.prototype,"hidden").get);
dsf_tmp_context.hidden_getter = function hidden(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.hidden_getter);
Document.prototype.__defineGetter__("hidden",dsf_tmp_context.hidden_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("visibilityState",Object.getOwnPropertyDescriptor(Document.prototype,"visibilityState").get);
dsf_tmp_context.visibilityState_getter = function visibilityState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.visibilityState_getter);
Document.prototype.__defineGetter__("visibilityState",dsf_tmp_context.visibilityState_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("wasDiscarded",Object.getOwnPropertyDescriptor(Document.prototype,"wasDiscarded").get);
dsf_tmp_context.wasDiscarded_getter = function wasDiscarded(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.wasDiscarded_getter);
Document.prototype.__defineGetter__("wasDiscarded",dsf_tmp_context.wasDiscarded_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("featurePolicy",Object.getOwnPropertyDescriptor(Document.prototype,"featurePolicy").get);
dsf_tmp_context.featurePolicy_getter = function featurePolicy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.featurePolicy_getter);
Document.prototype.__defineGetter__("featurePolicy",dsf_tmp_context.featurePolicy_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitVisibilityState",Object.getOwnPropertyDescriptor(Document.prototype,"webkitVisibilityState").get);
dsf_tmp_context.webkitVisibilityState_getter = function webkitVisibilityState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitVisibilityState_getter);
Document.prototype.__defineGetter__("webkitVisibilityState",dsf_tmp_context.webkitVisibilityState_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitHidden",Object.getOwnPropertyDescriptor(Document.prototype,"webkitHidden").get);
dsf_tmp_context.webkitHidden_getter = function webkitHidden(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitHidden_getter);
Document.prototype.__defineGetter__("webkitHidden",dsf_tmp_context.webkitHidden_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforecopy",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforecopy").get);
dsf_tmp_context.onbeforecopy_getter = function onbeforecopy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforecopy_getter);
Document.prototype.__defineGetter__("onbeforecopy",dsf_tmp_context.onbeforecopy_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforecut",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforecut").get);
dsf_tmp_context.onbeforecut_getter = function onbeforecut(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforecut_getter);
Document.prototype.__defineGetter__("onbeforecut",dsf_tmp_context.onbeforecut_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforepaste",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforepaste").get);
dsf_tmp_context.onbeforepaste_getter = function onbeforepaste(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforepaste_getter);
Document.prototype.__defineGetter__("onbeforepaste",dsf_tmp_context.onbeforepaste_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onfreeze",Object.getOwnPropertyDescriptor(Document.prototype,"onfreeze").get);
dsf_tmp_context.onfreeze_getter = function onfreeze(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfreeze_getter);
Document.prototype.__defineGetter__("onfreeze",dsf_tmp_context.onfreeze_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onresume",Object.getOwnPropertyDescriptor(Document.prototype,"onresume").get);
dsf_tmp_context.onresume_getter = function onresume(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onresume_getter);
Document.prototype.__defineGetter__("onresume",dsf_tmp_context.onresume_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onsearch",Object.getOwnPropertyDescriptor(Document.prototype,"onsearch").get);
dsf_tmp_context.onsearch_getter = function onsearch(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsearch_getter);
Document.prototype.__defineGetter__("onsearch",dsf_tmp_context.onsearch_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onvisibilitychange",Object.getOwnPropertyDescriptor(Document.prototype,"onvisibilitychange").get);
dsf_tmp_context.onvisibilitychange_getter = function onvisibilitychange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onvisibilitychange_getter);
Document.prototype.__defineGetter__("onvisibilitychange",dsf_tmp_context.onvisibilitychange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fullscreenEnabled",Object.getOwnPropertyDescriptor(Document.prototype,"fullscreenEnabled").get);
dsf_tmp_context.fullscreenEnabled_getter = function fullscreenEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fullscreenEnabled_getter);
Document.prototype.__defineGetter__("fullscreenEnabled",dsf_tmp_context.fullscreenEnabled_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fullscreen",Object.getOwnPropertyDescriptor(Document.prototype,"fullscreen").get);
dsf_tmp_context.fullscreen_getter = function fullscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fullscreen_getter);
Document.prototype.__defineGetter__("fullscreen",dsf_tmp_context.fullscreen_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onfullscreenchange",Object.getOwnPropertyDescriptor(Document.prototype,"onfullscreenchange").get);
dsf_tmp_context.onfullscreenchange_getter = function onfullscreenchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfullscreenchange_getter);
Document.prototype.__defineGetter__("onfullscreenchange",dsf_tmp_context.onfullscreenchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onfullscreenerror",Object.getOwnPropertyDescriptor(Document.prototype,"onfullscreenerror").get);
dsf_tmp_context.onfullscreenerror_getter = function onfullscreenerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfullscreenerror_getter);
Document.prototype.__defineGetter__("onfullscreenerror",dsf_tmp_context.onfullscreenerror_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitIsFullScreen",Object.getOwnPropertyDescriptor(Document.prototype,"webkitIsFullScreen").get);
dsf_tmp_context.webkitIsFullScreen_getter = function webkitIsFullScreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitIsFullScreen_getter);
Document.prototype.__defineGetter__("webkitIsFullScreen",dsf_tmp_context.webkitIsFullScreen_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitCurrentFullScreenElement",Object.getOwnPropertyDescriptor(Document.prototype,"webkitCurrentFullScreenElement").get);
dsf_tmp_context.webkitCurrentFullScreenElement_getter = function webkitCurrentFullScreenElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitCurrentFullScreenElement_getter);
Document.prototype.__defineGetter__("webkitCurrentFullScreenElement",dsf_tmp_context.webkitCurrentFullScreenElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitFullscreenEnabled",Object.getOwnPropertyDescriptor(Document.prototype,"webkitFullscreenEnabled").get);
dsf_tmp_context.webkitFullscreenEnabled_getter = function webkitFullscreenEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitFullscreenEnabled_getter);
Document.prototype.__defineGetter__("webkitFullscreenEnabled",dsf_tmp_context.webkitFullscreenEnabled_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("webkitFullscreenElement",Object.getOwnPropertyDescriptor(Document.prototype,"webkitFullscreenElement").get);
dsf_tmp_context.webkitFullscreenElement_getter = function webkitFullscreenElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitFullscreenElement_getter);
Document.prototype.__defineGetter__("webkitFullscreenElement",dsf_tmp_context.webkitFullscreenElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkitfullscreenchange",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkitfullscreenchange").get);
dsf_tmp_context.onwebkitfullscreenchange_getter = function onwebkitfullscreenchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenchange_getter);
Document.prototype.__defineGetter__("onwebkitfullscreenchange",dsf_tmp_context.onwebkitfullscreenchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkitfullscreenerror",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkitfullscreenerror").get);
dsf_tmp_context.onwebkitfullscreenerror_getter = function onwebkitfullscreenerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitfullscreenerror_getter);
Document.prototype.__defineGetter__("onwebkitfullscreenerror",dsf_tmp_context.onwebkitfullscreenerror_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("rootElement",Object.getOwnPropertyDescriptor(Document.prototype,"rootElement").get);
dsf_tmp_context.rootElement_getter = function rootElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.rootElement_getter);
Document.prototype.__defineGetter__("rootElement",dsf_tmp_context.rootElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforexrselect",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforexrselect").get);
dsf_tmp_context.onbeforexrselect_getter = function onbeforexrselect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforexrselect_getter);
Document.prototype.__defineGetter__("onbeforexrselect",dsf_tmp_context.onbeforexrselect_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onabort",Object.getOwnPropertyDescriptor(Document.prototype,"onabort").get);
dsf_tmp_context.onabort_getter = function onabort(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onabort_getter);
Document.prototype.__defineGetter__("onabort",dsf_tmp_context.onabort_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforeinput",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforeinput").get);
dsf_tmp_context.onbeforeinput_getter = function onbeforeinput(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforeinput_getter);
Document.prototype.__defineGetter__("onbeforeinput",dsf_tmp_context.onbeforeinput_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onblur",Object.getOwnPropertyDescriptor(Document.prototype,"onblur").get);
dsf_tmp_context.onblur_getter = function onblur(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onblur_getter);
Document.prototype.__defineGetter__("onblur",dsf_tmp_context.onblur_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncancel",Object.getOwnPropertyDescriptor(Document.prototype,"oncancel").get);
dsf_tmp_context.oncancel_getter = function oncancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncancel_getter);
Document.prototype.__defineGetter__("oncancel",dsf_tmp_context.oncancel_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncanplay",Object.getOwnPropertyDescriptor(Document.prototype,"oncanplay").get);
dsf_tmp_context.oncanplay_getter = function oncanplay(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncanplay_getter);
Document.prototype.__defineGetter__("oncanplay",dsf_tmp_context.oncanplay_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncanplaythrough",Object.getOwnPropertyDescriptor(Document.prototype,"oncanplaythrough").get);
dsf_tmp_context.oncanplaythrough_getter = function oncanplaythrough(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncanplaythrough_getter);
Document.prototype.__defineGetter__("oncanplaythrough",dsf_tmp_context.oncanplaythrough_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onchange",Object.getOwnPropertyDescriptor(Document.prototype,"onchange").get);
dsf_tmp_context.onchange_getter = function onchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onchange_getter);
Document.prototype.__defineGetter__("onchange",dsf_tmp_context.onchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onclick",Object.getOwnPropertyDescriptor(Document.prototype,"onclick").get);
dsf_tmp_context.onclick_getter = function onclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onclick_getter);
Document.prototype.__defineGetter__("onclick",dsf_tmp_context.onclick_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onclose",Object.getOwnPropertyDescriptor(Document.prototype,"onclose").get);
dsf_tmp_context.onclose_getter = function onclose(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onclose_getter);
Document.prototype.__defineGetter__("onclose",dsf_tmp_context.onclose_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncontextlost",Object.getOwnPropertyDescriptor(Document.prototype,"oncontextlost").get);
dsf_tmp_context.oncontextlost_getter = function oncontextlost(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextlost_getter);
Document.prototype.__defineGetter__("oncontextlost",dsf_tmp_context.oncontextlost_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncontextmenu",Object.getOwnPropertyDescriptor(Document.prototype,"oncontextmenu").get);
dsf_tmp_context.oncontextmenu_getter = function oncontextmenu(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextmenu_getter);
Document.prototype.__defineGetter__("oncontextmenu",dsf_tmp_context.oncontextmenu_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncontextrestored",Object.getOwnPropertyDescriptor(Document.prototype,"oncontextrestored").get);
dsf_tmp_context.oncontextrestored_getter = function oncontextrestored(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncontextrestored_getter);
Document.prototype.__defineGetter__("oncontextrestored",dsf_tmp_context.oncontextrestored_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncuechange",Object.getOwnPropertyDescriptor(Document.prototype,"oncuechange").get);
dsf_tmp_context.oncuechange_getter = function oncuechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncuechange_getter);
Document.prototype.__defineGetter__("oncuechange",dsf_tmp_context.oncuechange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondblclick",Object.getOwnPropertyDescriptor(Document.prototype,"ondblclick").get);
dsf_tmp_context.ondblclick_getter = function ondblclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondblclick_getter);
Document.prototype.__defineGetter__("ondblclick",dsf_tmp_context.ondblclick_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondrag",Object.getOwnPropertyDescriptor(Document.prototype,"ondrag").get);
dsf_tmp_context.ondrag_getter = function ondrag(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondrag_getter);
Document.prototype.__defineGetter__("ondrag",dsf_tmp_context.ondrag_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondragend",Object.getOwnPropertyDescriptor(Document.prototype,"ondragend").get);
dsf_tmp_context.ondragend_getter = function ondragend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragend_getter);
Document.prototype.__defineGetter__("ondragend",dsf_tmp_context.ondragend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondragenter",Object.getOwnPropertyDescriptor(Document.prototype,"ondragenter").get);
dsf_tmp_context.ondragenter_getter = function ondragenter(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragenter_getter);
Document.prototype.__defineGetter__("ondragenter",dsf_tmp_context.ondragenter_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondragleave",Object.getOwnPropertyDescriptor(Document.prototype,"ondragleave").get);
dsf_tmp_context.ondragleave_getter = function ondragleave(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragleave_getter);
Document.prototype.__defineGetter__("ondragleave",dsf_tmp_context.ondragleave_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondragover",Object.getOwnPropertyDescriptor(Document.prototype,"ondragover").get);
dsf_tmp_context.ondragover_getter = function ondragover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragover_getter);
Document.prototype.__defineGetter__("ondragover",dsf_tmp_context.ondragover_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondragstart",Object.getOwnPropertyDescriptor(Document.prototype,"ondragstart").get);
dsf_tmp_context.ondragstart_getter = function ondragstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondragstart_getter);
Document.prototype.__defineGetter__("ondragstart",dsf_tmp_context.ondragstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondrop",Object.getOwnPropertyDescriptor(Document.prototype,"ondrop").get);
dsf_tmp_context.ondrop_getter = function ondrop(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondrop_getter);
Document.prototype.__defineGetter__("ondrop",dsf_tmp_context.ondrop_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ondurationchange",Object.getOwnPropertyDescriptor(Document.prototype,"ondurationchange").get);
dsf_tmp_context.ondurationchange_getter = function ondurationchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ondurationchange_getter);
Document.prototype.__defineGetter__("ondurationchange",dsf_tmp_context.ondurationchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onemptied",Object.getOwnPropertyDescriptor(Document.prototype,"onemptied").get);
dsf_tmp_context.onemptied_getter = function onemptied(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onemptied_getter);
Document.prototype.__defineGetter__("onemptied",dsf_tmp_context.onemptied_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onended",Object.getOwnPropertyDescriptor(Document.prototype,"onended").get);
dsf_tmp_context.onended_getter = function onended(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onended_getter);
Document.prototype.__defineGetter__("onended",dsf_tmp_context.onended_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onerror",Object.getOwnPropertyDescriptor(Document.prototype,"onerror").get);
dsf_tmp_context.onerror_getter = function onerror(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onerror_getter);
Document.prototype.__defineGetter__("onerror",dsf_tmp_context.onerror_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onfocus",Object.getOwnPropertyDescriptor(Document.prototype,"onfocus").get);
dsf_tmp_context.onfocus_getter = function onfocus(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onfocus_getter);
Document.prototype.__defineGetter__("onfocus",dsf_tmp_context.onfocus_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onformdata",Object.getOwnPropertyDescriptor(Document.prototype,"onformdata").get);
dsf_tmp_context.onformdata_getter = function onformdata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onformdata_getter);
Document.prototype.__defineGetter__("onformdata",dsf_tmp_context.onformdata_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oninput",Object.getOwnPropertyDescriptor(Document.prototype,"oninput").get);
dsf_tmp_context.oninput_getter = function oninput(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oninput_getter);
Document.prototype.__defineGetter__("oninput",dsf_tmp_context.oninput_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oninvalid",Object.getOwnPropertyDescriptor(Document.prototype,"oninvalid").get);
dsf_tmp_context.oninvalid_getter = function oninvalid(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oninvalid_getter);
Document.prototype.__defineGetter__("oninvalid",dsf_tmp_context.oninvalid_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onkeydown",Object.getOwnPropertyDescriptor(Document.prototype,"onkeydown").get);
dsf_tmp_context.onkeydown_getter = function onkeydown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeydown_getter);
Document.prototype.__defineGetter__("onkeydown",dsf_tmp_context.onkeydown_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onkeypress",Object.getOwnPropertyDescriptor(Document.prototype,"onkeypress").get);
dsf_tmp_context.onkeypress_getter = function onkeypress(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeypress_getter);
Document.prototype.__defineGetter__("onkeypress",dsf_tmp_context.onkeypress_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onkeyup",Object.getOwnPropertyDescriptor(Document.prototype,"onkeyup").get);
dsf_tmp_context.onkeyup_getter = function onkeyup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onkeyup_getter);
Document.prototype.__defineGetter__("onkeyup",dsf_tmp_context.onkeyup_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onload",Object.getOwnPropertyDescriptor(Document.prototype,"onload").get);
dsf_tmp_context.onload_getter = function onload(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onload_getter);
Document.prototype.__defineGetter__("onload",dsf_tmp_context.onload_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onloadeddata",Object.getOwnPropertyDescriptor(Document.prototype,"onloadeddata").get);
dsf_tmp_context.onloadeddata_getter = function onloadeddata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadeddata_getter);
Document.prototype.__defineGetter__("onloadeddata",dsf_tmp_context.onloadeddata_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onloadedmetadata",Object.getOwnPropertyDescriptor(Document.prototype,"onloadedmetadata").get);
dsf_tmp_context.onloadedmetadata_getter = function onloadedmetadata(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadedmetadata_getter);
Document.prototype.__defineGetter__("onloadedmetadata",dsf_tmp_context.onloadedmetadata_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onloadstart",Object.getOwnPropertyDescriptor(Document.prototype,"onloadstart").get);
dsf_tmp_context.onloadstart_getter = function onloadstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onloadstart_getter);
Document.prototype.__defineGetter__("onloadstart",dsf_tmp_context.onloadstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmousedown",Object.getOwnPropertyDescriptor(Document.prototype,"onmousedown").get);
dsf_tmp_context.onmousedown_getter = function onmousedown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousedown_getter);
Document.prototype.__defineGetter__("onmousedown",dsf_tmp_context.onmousedown_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmousemove",Object.getOwnPropertyDescriptor(Document.prototype,"onmousemove").get);
dsf_tmp_context.onmousemove_getter = function onmousemove(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousemove_getter);
Document.prototype.__defineGetter__("onmousemove",dsf_tmp_context.onmousemove_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmouseout",Object.getOwnPropertyDescriptor(Document.prototype,"onmouseout").get);
dsf_tmp_context.onmouseout_getter = function onmouseout(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseout_getter);
Document.prototype.__defineGetter__("onmouseout",dsf_tmp_context.onmouseout_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmouseover",Object.getOwnPropertyDescriptor(Document.prototype,"onmouseover").get);
dsf_tmp_context.onmouseover_getter = function onmouseover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseover_getter);
Document.prototype.__defineGetter__("onmouseover",dsf_tmp_context.onmouseover_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmouseup",Object.getOwnPropertyDescriptor(Document.prototype,"onmouseup").get);
dsf_tmp_context.onmouseup_getter = function onmouseup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmouseup_getter);
Document.prototype.__defineGetter__("onmouseup",dsf_tmp_context.onmouseup_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onmousewheel",Object.getOwnPropertyDescriptor(Document.prototype,"onmousewheel").get);
dsf_tmp_context.onmousewheel_getter = function onmousewheel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onmousewheel_getter);
Document.prototype.__defineGetter__("onmousewheel",dsf_tmp_context.onmousewheel_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpause",Object.getOwnPropertyDescriptor(Document.prototype,"onpause").get);
dsf_tmp_context.onpause_getter = function onpause(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpause_getter);
Document.prototype.__defineGetter__("onpause",dsf_tmp_context.onpause_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onplay",Object.getOwnPropertyDescriptor(Document.prototype,"onplay").get);
dsf_tmp_context.onplay_getter = function onplay(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onplay_getter);
Document.prototype.__defineGetter__("onplay",dsf_tmp_context.onplay_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onplaying",Object.getOwnPropertyDescriptor(Document.prototype,"onplaying").get);
dsf_tmp_context.onplaying_getter = function onplaying(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onplaying_getter);
Document.prototype.__defineGetter__("onplaying",dsf_tmp_context.onplaying_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onprogress",Object.getOwnPropertyDescriptor(Document.prototype,"onprogress").get);
dsf_tmp_context.onprogress_getter = function onprogress(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onprogress_getter);
Document.prototype.__defineGetter__("onprogress",dsf_tmp_context.onprogress_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onratechange",Object.getOwnPropertyDescriptor(Document.prototype,"onratechange").get);
dsf_tmp_context.onratechange_getter = function onratechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onratechange_getter);
Document.prototype.__defineGetter__("onratechange",dsf_tmp_context.onratechange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onreset",Object.getOwnPropertyDescriptor(Document.prototype,"onreset").get);
dsf_tmp_context.onreset_getter = function onreset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onreset_getter);
Document.prototype.__defineGetter__("onreset",dsf_tmp_context.onreset_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onresize",Object.getOwnPropertyDescriptor(Document.prototype,"onresize").get);
dsf_tmp_context.onresize_getter = function onresize(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onresize_getter);
Document.prototype.__defineGetter__("onresize",dsf_tmp_context.onresize_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onscroll",Object.getOwnPropertyDescriptor(Document.prototype,"onscroll").get);
dsf_tmp_context.onscroll_getter = function onscroll(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onscroll_getter);
Document.prototype.__defineGetter__("onscroll",dsf_tmp_context.onscroll_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onsecuritypolicyviolation",Object.getOwnPropertyDescriptor(Document.prototype,"onsecuritypolicyviolation").get);
dsf_tmp_context.onsecuritypolicyviolation_getter = function onsecuritypolicyviolation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsecuritypolicyviolation_getter);
Document.prototype.__defineGetter__("onsecuritypolicyviolation",dsf_tmp_context.onsecuritypolicyviolation_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onseeked",Object.getOwnPropertyDescriptor(Document.prototype,"onseeked").get);
dsf_tmp_context.onseeked_getter = function onseeked(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onseeked_getter);
Document.prototype.__defineGetter__("onseeked",dsf_tmp_context.onseeked_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onseeking",Object.getOwnPropertyDescriptor(Document.prototype,"onseeking").get);
dsf_tmp_context.onseeking_getter = function onseeking(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onseeking_getter);
Document.prototype.__defineGetter__("onseeking",dsf_tmp_context.onseeking_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onselect",Object.getOwnPropertyDescriptor(Document.prototype,"onselect").get);
dsf_tmp_context.onselect_getter = function onselect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselect_getter);
Document.prototype.__defineGetter__("onselect",dsf_tmp_context.onselect_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onslotchange",Object.getOwnPropertyDescriptor(Document.prototype,"onslotchange").get);
dsf_tmp_context.onslotchange_getter = function onslotchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onslotchange_getter);
Document.prototype.__defineGetter__("onslotchange",dsf_tmp_context.onslotchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onstalled",Object.getOwnPropertyDescriptor(Document.prototype,"onstalled").get);
dsf_tmp_context.onstalled_getter = function onstalled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onstalled_getter);
Document.prototype.__defineGetter__("onstalled",dsf_tmp_context.onstalled_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onsubmit",Object.getOwnPropertyDescriptor(Document.prototype,"onsubmit").get);
dsf_tmp_context.onsubmit_getter = function onsubmit(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsubmit_getter);
Document.prototype.__defineGetter__("onsubmit",dsf_tmp_context.onsubmit_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onsuspend",Object.getOwnPropertyDescriptor(Document.prototype,"onsuspend").get);
dsf_tmp_context.onsuspend_getter = function onsuspend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onsuspend_getter);
Document.prototype.__defineGetter__("onsuspend",dsf_tmp_context.onsuspend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontimeupdate",Object.getOwnPropertyDescriptor(Document.prototype,"ontimeupdate").get);
dsf_tmp_context.ontimeupdate_getter = function ontimeupdate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontimeupdate_getter);
Document.prototype.__defineGetter__("ontimeupdate",dsf_tmp_context.ontimeupdate_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontoggle",Object.getOwnPropertyDescriptor(Document.prototype,"ontoggle").get);
dsf_tmp_context.ontoggle_getter = function ontoggle(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontoggle_getter);
Document.prototype.__defineGetter__("ontoggle",dsf_tmp_context.ontoggle_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onvolumechange",Object.getOwnPropertyDescriptor(Document.prototype,"onvolumechange").get);
dsf_tmp_context.onvolumechange_getter = function onvolumechange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onvolumechange_getter);
Document.prototype.__defineGetter__("onvolumechange",dsf_tmp_context.onvolumechange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwaiting",Object.getOwnPropertyDescriptor(Document.prototype,"onwaiting").get);
dsf_tmp_context.onwaiting_getter = function onwaiting(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwaiting_getter);
Document.prototype.__defineGetter__("onwaiting",dsf_tmp_context.onwaiting_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkitanimationend",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkitanimationend").get);
dsf_tmp_context.onwebkitanimationend_getter = function onwebkitanimationend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationend_getter);
Document.prototype.__defineGetter__("onwebkitanimationend",dsf_tmp_context.onwebkitanimationend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkitanimationiteration",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkitanimationiteration").get);
dsf_tmp_context.onwebkitanimationiteration_getter = function onwebkitanimationiteration(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationiteration_getter);
Document.prototype.__defineGetter__("onwebkitanimationiteration",dsf_tmp_context.onwebkitanimationiteration_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkitanimationstart",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkitanimationstart").get);
dsf_tmp_context.onwebkitanimationstart_getter = function onwebkitanimationstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkitanimationstart_getter);
Document.prototype.__defineGetter__("onwebkitanimationstart",dsf_tmp_context.onwebkitanimationstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwebkittransitionend",Object.getOwnPropertyDescriptor(Document.prototype,"onwebkittransitionend").get);
dsf_tmp_context.onwebkittransitionend_getter = function onwebkittransitionend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwebkittransitionend_getter);
Document.prototype.__defineGetter__("onwebkittransitionend",dsf_tmp_context.onwebkittransitionend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onwheel",Object.getOwnPropertyDescriptor(Document.prototype,"onwheel").get);
dsf_tmp_context.onwheel_getter = function onwheel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onwheel_getter);
Document.prototype.__defineGetter__("onwheel",dsf_tmp_context.onwheel_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onauxclick",Object.getOwnPropertyDescriptor(Document.prototype,"onauxclick").get);
dsf_tmp_context.onauxclick_getter = function onauxclick(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onauxclick_getter);
Document.prototype.__defineGetter__("onauxclick",dsf_tmp_context.onauxclick_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ongotpointercapture",Object.getOwnPropertyDescriptor(Document.prototype,"ongotpointercapture").get);
dsf_tmp_context.ongotpointercapture_getter = function ongotpointercapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ongotpointercapture_getter);
Document.prototype.__defineGetter__("ongotpointercapture",dsf_tmp_context.ongotpointercapture_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onlostpointercapture",Object.getOwnPropertyDescriptor(Document.prototype,"onlostpointercapture").get);
dsf_tmp_context.onlostpointercapture_getter = function onlostpointercapture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onlostpointercapture_getter);
Document.prototype.__defineGetter__("onlostpointercapture",dsf_tmp_context.onlostpointercapture_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerdown",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerdown").get);
dsf_tmp_context.onpointerdown_getter = function onpointerdown(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerdown_getter);
Document.prototype.__defineGetter__("onpointerdown",dsf_tmp_context.onpointerdown_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointermove",Object.getOwnPropertyDescriptor(Document.prototype,"onpointermove").get);
dsf_tmp_context.onpointermove_getter = function onpointermove(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointermove_getter);
Document.prototype.__defineGetter__("onpointermove",dsf_tmp_context.onpointermove_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerrawupdate",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerrawupdate").get);
dsf_tmp_context.onpointerrawupdate_getter = function onpointerrawupdate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerrawupdate_getter);
Document.prototype.__defineGetter__("onpointerrawupdate",dsf_tmp_context.onpointerrawupdate_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerup",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerup").get);
dsf_tmp_context.onpointerup_getter = function onpointerup(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerup_getter);
Document.prototype.__defineGetter__("onpointerup",dsf_tmp_context.onpointerup_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointercancel",Object.getOwnPropertyDescriptor(Document.prototype,"onpointercancel").get);
dsf_tmp_context.onpointercancel_getter = function onpointercancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointercancel_getter);
Document.prototype.__defineGetter__("onpointercancel",dsf_tmp_context.onpointercancel_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerover",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerover").get);
dsf_tmp_context.onpointerover_getter = function onpointerover(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerover_getter);
Document.prototype.__defineGetter__("onpointerover",dsf_tmp_context.onpointerover_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerout",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerout").get);
dsf_tmp_context.onpointerout_getter = function onpointerout(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerout_getter);
Document.prototype.__defineGetter__("onpointerout",dsf_tmp_context.onpointerout_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerenter",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerenter").get);
dsf_tmp_context.onpointerenter_getter = function onpointerenter(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerenter_getter);
Document.prototype.__defineGetter__("onpointerenter",dsf_tmp_context.onpointerenter_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpointerleave",Object.getOwnPropertyDescriptor(Document.prototype,"onpointerleave").get);
dsf_tmp_context.onpointerleave_getter = function onpointerleave(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpointerleave_getter);
Document.prototype.__defineGetter__("onpointerleave",dsf_tmp_context.onpointerleave_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onselectstart",Object.getOwnPropertyDescriptor(Document.prototype,"onselectstart").get);
dsf_tmp_context.onselectstart_getter = function onselectstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselectstart_getter);
Document.prototype.__defineGetter__("onselectstart",dsf_tmp_context.onselectstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onselectionchange",Object.getOwnPropertyDescriptor(Document.prototype,"onselectionchange").get);
dsf_tmp_context.onselectionchange_getter = function onselectionchange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onselectionchange_getter);
Document.prototype.__defineGetter__("onselectionchange",dsf_tmp_context.onselectionchange_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onanimationend",Object.getOwnPropertyDescriptor(Document.prototype,"onanimationend").get);
dsf_tmp_context.onanimationend_getter = function onanimationend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationend_getter);
Document.prototype.__defineGetter__("onanimationend",dsf_tmp_context.onanimationend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onanimationiteration",Object.getOwnPropertyDescriptor(Document.prototype,"onanimationiteration").get);
dsf_tmp_context.onanimationiteration_getter = function onanimationiteration(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationiteration_getter);
Document.prototype.__defineGetter__("onanimationiteration",dsf_tmp_context.onanimationiteration_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onanimationstart",Object.getOwnPropertyDescriptor(Document.prototype,"onanimationstart").get);
dsf_tmp_context.onanimationstart_getter = function onanimationstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onanimationstart_getter);
Document.prototype.__defineGetter__("onanimationstart",dsf_tmp_context.onanimationstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontransitionrun",Object.getOwnPropertyDescriptor(Document.prototype,"ontransitionrun").get);
dsf_tmp_context.ontransitionrun_getter = function ontransitionrun(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionrun_getter);
Document.prototype.__defineGetter__("ontransitionrun",dsf_tmp_context.ontransitionrun_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontransitionstart",Object.getOwnPropertyDescriptor(Document.prototype,"ontransitionstart").get);
dsf_tmp_context.ontransitionstart_getter = function ontransitionstart(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionstart_getter);
Document.prototype.__defineGetter__("ontransitionstart",dsf_tmp_context.ontransitionstart_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontransitionend",Object.getOwnPropertyDescriptor(Document.prototype,"ontransitionend").get);
dsf_tmp_context.ontransitionend_getter = function ontransitionend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitionend_getter);
Document.prototype.__defineGetter__("ontransitionend",dsf_tmp_context.ontransitionend_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("ontransitioncancel",Object.getOwnPropertyDescriptor(Document.prototype,"ontransitioncancel").get);
dsf_tmp_context.ontransitioncancel_getter = function ontransitioncancel(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ontransitioncancel_getter);
Document.prototype.__defineGetter__("ontransitioncancel",dsf_tmp_context.ontransitioncancel_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncopy",Object.getOwnPropertyDescriptor(Document.prototype,"oncopy").get);
dsf_tmp_context.oncopy_getter = function oncopy(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncopy_getter);
Document.prototype.__defineGetter__("oncopy",dsf_tmp_context.oncopy_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("oncut",Object.getOwnPropertyDescriptor(Document.prototype,"oncut").get);
dsf_tmp_context.oncut_getter = function oncut(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.oncut_getter);
Document.prototype.__defineGetter__("oncut",dsf_tmp_context.oncut_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onpaste",Object.getOwnPropertyDescriptor(Document.prototype,"onpaste").get);
dsf_tmp_context.onpaste_getter = function onpaste(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onpaste_getter);
Document.prototype.__defineGetter__("onpaste",dsf_tmp_context.onpaste_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("children",Object.getOwnPropertyDescriptor(Document.prototype,"children").get);
dsf_tmp_context.children_getter = function children(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.children_getter);
Document.prototype.__defineGetter__("children",dsf_tmp_context.children_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("firstElementChild",Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild").get);
dsf_tmp_context.firstElementChild_getter = function firstElementChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.firstElementChild_getter);
Document.prototype.__defineGetter__("firstElementChild",dsf_tmp_context.firstElementChild_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("lastElementChild",Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild").get);
dsf_tmp_context.lastElementChild_getter = function lastElementChild(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lastElementChild_getter);
Document.prototype.__defineGetter__("lastElementChild",dsf_tmp_context.lastElementChild_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("childElementCount",Object.getOwnPropertyDescriptor(Document.prototype,"childElementCount").get);
dsf_tmp_context.childElementCount_getter = function childElementCount(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.childElementCount_getter);
Document.prototype.__defineGetter__("childElementCount",dsf_tmp_context.childElementCount_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("activeElement",Object.getOwnPropertyDescriptor(Document.prototype,"activeElement").get);
dsf_tmp_context.activeElement_getter = function activeElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.activeElement_getter);
Document.prototype.__defineGetter__("activeElement",dsf_tmp_context.activeElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("styleSheets",Object.getOwnPropertyDescriptor(Document.prototype,"styleSheets").get);
dsf_tmp_context.styleSheets_getter = function styleSheets(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.styleSheets_getter);
Document.prototype.__defineGetter__("styleSheets",dsf_tmp_context.styleSheets_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("pointerLockElement",Object.getOwnPropertyDescriptor(Document.prototype,"pointerLockElement").get);
dsf_tmp_context.pointerLockElement_getter = function pointerLockElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.pointerLockElement_getter);
Document.prototype.__defineGetter__("pointerLockElement",dsf_tmp_context.pointerLockElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fullscreenElement",Object.getOwnPropertyDescriptor(Document.prototype,"fullscreenElement").get);
dsf_tmp_context.fullscreenElement_getter = function fullscreenElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fullscreenElement_getter);
Document.prototype.__defineGetter__("fullscreenElement",dsf_tmp_context.fullscreenElement_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("adoptedStyleSheets",Object.getOwnPropertyDescriptor(Document.prototype,"adoptedStyleSheets").get);
dsf_tmp_context.adoptedStyleSheets_getter = function adoptedStyleSheets(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.adoptedStyleSheets_getter);
Document.prototype.__defineGetter__("adoptedStyleSheets",dsf_tmp_context.adoptedStyleSheets_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fonts",Object.getOwnPropertyDescriptor(Document.prototype,"fonts").get);
dsf_tmp_context.fonts_getter = function fonts(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fonts_getter);
Document.prototype.__defineGetter__("fonts",dsf_tmp_context.fonts_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("fragmentDirective",Object.getOwnPropertyDescriptor(Document.prototype,"fragmentDirective").get);
dsf_tmp_context.fragmentDirective_getter = function fragmentDirective(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fragmentDirective_getter);
Document.prototype.__defineGetter__("fragmentDirective",dsf_tmp_context.fragmentDirective_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("onbeforematch",Object.getOwnPropertyDescriptor(Document.prototype,"onbeforematch").get);
dsf_tmp_context.onbeforematch_getter = function onbeforematch(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onbeforematch_getter);
Document.prototype.__defineGetter__("onbeforematch",dsf_tmp_context.onbeforematch_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("timeline",Object.getOwnPropertyDescriptor(Document.prototype,"timeline").get);
dsf_tmp_context.timeline_getter = function timeline(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.timeline_getter);
Document.prototype.__defineGetter__("timeline",dsf_tmp_context.timeline_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("pictureInPictureEnabled",Object.getOwnPropertyDescriptor(Document.prototype,"pictureInPictureEnabled").get);
dsf_tmp_context.pictureInPictureEnabled_getter = function pictureInPictureEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.pictureInPictureEnabled_getter);
Document.prototype.__defineGetter__("pictureInPictureEnabled",dsf_tmp_context.pictureInPictureEnabled_getter);//393

catvm.memory.variable.Document.document_obj.__defineGetter__("pictureInPictureElement",Object.getOwnPropertyDescriptor(Document.prototype,"pictureInPictureElement").get);
dsf_tmp_context.pictureInPictureElement_getter = function pictureInPictureElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.pictureInPictureElement_getter);
Document.prototype.__defineGetter__("pictureInPictureElement",dsf_tmp_context.pictureInPictureElement_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.Document.__function_adoptNode = Object.getOwnPropertyDescriptor(Document.prototype,"adoptNode").value; catvm.safefunction(catvm.memory.variable.Document.__function_adoptNode);
catvm.memory.variable.Document.document_obj.__defineGetter__("adoptNode",function adoptNode(){return catvm.memory.variable.Document.__function_adoptNode;});
Document.prototype["adoptNode"] = function adoptNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["adoptNode"]);//407

catvm.memory.variable.Document.__function_append = Object.getOwnPropertyDescriptor(Document.prototype,"append").value; catvm.safefunction(catvm.memory.variable.Document.__function_append);
catvm.memory.variable.Document.document_obj.__defineGetter__("append",function append(){return catvm.memory.variable.Document.__function_append;});
Document.prototype["append"] = function append(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["append"]);//407

catvm.memory.variable.Document.__function_captureEvents = Object.getOwnPropertyDescriptor(Document.prototype,"captureEvents").value; catvm.safefunction(catvm.memory.variable.Document.__function_captureEvents);
catvm.memory.variable.Document.document_obj.__defineGetter__("captureEvents",function captureEvents(){return catvm.memory.variable.Document.__function_captureEvents;});
Document.prototype["captureEvents"] = function captureEvents(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["captureEvents"]);//407

catvm.memory.variable.Document.__function_caretRangeFromPoint = Object.getOwnPropertyDescriptor(Document.prototype,"caretRangeFromPoint").value; catvm.safefunction(catvm.memory.variable.Document.__function_caretRangeFromPoint);
catvm.memory.variable.Document.document_obj.__defineGetter__("caretRangeFromPoint",function caretRangeFromPoint(){return catvm.memory.variable.Document.__function_caretRangeFromPoint;});
Document.prototype["caretRangeFromPoint"] = function caretRangeFromPoint(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["caretRangeFromPoint"]);//407

catvm.memory.variable.Document.__function_clear = Object.getOwnPropertyDescriptor(Document.prototype,"clear").value; catvm.safefunction(catvm.memory.variable.Document.__function_clear);
catvm.memory.variable.Document.document_obj.__defineGetter__("clear",function clear(){return catvm.memory.variable.Document.__function_clear;});
Document.prototype["clear"] = function clear(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["clear"]);//407

catvm.memory.variable.Document.__function_close = Object.getOwnPropertyDescriptor(Document.prototype,"close").value; catvm.safefunction(catvm.memory.variable.Document.__function_close);
catvm.memory.variable.Document.document_obj.__defineGetter__("close",function close(){return catvm.memory.variable.Document.__function_close;});
Document.prototype["close"] = function close(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["close"]);//407

catvm.memory.variable.Document.__function_createAttribute = Object.getOwnPropertyDescriptor(Document.prototype,"createAttribute").value; catvm.safefunction(catvm.memory.variable.Document.__function_createAttribute);
catvm.memory.variable.Document.document_obj.__defineGetter__("createAttribute",function createAttribute(){return catvm.memory.variable.Document.__function_createAttribute;});
Document.prototype["createAttribute"] = function createAttribute(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createAttribute"]);//407

catvm.memory.variable.Document.__function_createAttributeNS = Object.getOwnPropertyDescriptor(Document.prototype,"createAttributeNS").value; catvm.safefunction(catvm.memory.variable.Document.__function_createAttributeNS);
catvm.memory.variable.Document.document_obj.__defineGetter__("createAttributeNS",function createAttributeNS(){return catvm.memory.variable.Document.__function_createAttributeNS;});
Document.prototype["createAttributeNS"] = function createAttributeNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createAttributeNS"]);//407

catvm.memory.variable.Document.__function_createCDATASection = Object.getOwnPropertyDescriptor(Document.prototype,"createCDATASection").value; catvm.safefunction(catvm.memory.variable.Document.__function_createCDATASection);
catvm.memory.variable.Document.document_obj.__defineGetter__("createCDATASection",function createCDATASection(){return catvm.memory.variable.Document.__function_createCDATASection;});
Document.prototype["createCDATASection"] = function createCDATASection(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createCDATASection"]);//407

catvm.memory.variable.Document.__function_createComment = Object.getOwnPropertyDescriptor(Document.prototype,"createComment").value; catvm.safefunction(catvm.memory.variable.Document.__function_createComment);
catvm.memory.variable.Document.document_obj.__defineGetter__("createComment",function createComment(){return catvm.memory.variable.Document.__function_createComment;});
Document.prototype["createComment"] = function createComment(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createComment"]);//407

catvm.memory.variable.Document.__function_createDocumentFragment = Object.getOwnPropertyDescriptor(Document.prototype,"createDocumentFragment").value; catvm.safefunction(catvm.memory.variable.Document.__function_createDocumentFragment);
catvm.memory.variable.Document.document_obj.__defineGetter__("createDocumentFragment",function createDocumentFragment(){return catvm.memory.variable.Document.__function_createDocumentFragment;});
Document.prototype["createDocumentFragment"] = function createDocumentFragment(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createDocumentFragment"]);//407

catvm.memory.variable.Document.__function_createElement = Object.getOwnPropertyDescriptor(Document.prototype,"createElement").value; catvm.safefunction(catvm.memory.variable.Document.__function_createElement);
catvm.memory.variable.Document.document_obj.__defineGetter__("createElement",function createElement(){return catvm.memory.variable.Document.__function_createElement;});
Document.prototype["createElement"] = function createElement(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createElement"]);//407

catvm.memory.variable.Document.__function_createElementNS = Object.getOwnPropertyDescriptor(Document.prototype,"createElementNS").value; catvm.safefunction(catvm.memory.variable.Document.__function_createElementNS);
catvm.memory.variable.Document.document_obj.__defineGetter__("createElementNS",function createElementNS(){return catvm.memory.variable.Document.__function_createElementNS;});
Document.prototype["createElementNS"] = function createElementNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createElementNS"]);//407

catvm.memory.variable.Document.__function_createEvent = Object.getOwnPropertyDescriptor(Document.prototype,"createEvent").value; catvm.safefunction(catvm.memory.variable.Document.__function_createEvent);
catvm.memory.variable.Document.document_obj.__defineGetter__("createEvent",function createEvent(){return catvm.memory.variable.Document.__function_createEvent;});
Document.prototype["createEvent"] = function createEvent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createEvent"]);//407

catvm.memory.variable.Document.__function_createExpression = Object.getOwnPropertyDescriptor(Document.prototype,"createExpression").value; catvm.safefunction(catvm.memory.variable.Document.__function_createExpression);
catvm.memory.variable.Document.document_obj.__defineGetter__("createExpression",function createExpression(){return catvm.memory.variable.Document.__function_createExpression;});
Document.prototype["createExpression"] = function createExpression(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createExpression"]);//407

catvm.memory.variable.Document.__function_createNSResolver = Object.getOwnPropertyDescriptor(Document.prototype,"createNSResolver").value; catvm.safefunction(catvm.memory.variable.Document.__function_createNSResolver);
catvm.memory.variable.Document.document_obj.__defineGetter__("createNSResolver",function createNSResolver(){return catvm.memory.variable.Document.__function_createNSResolver;});
Document.prototype["createNSResolver"] = function createNSResolver(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createNSResolver"]);//407

catvm.memory.variable.Document.__function_createNodeIterator = Object.getOwnPropertyDescriptor(Document.prototype,"createNodeIterator").value; catvm.safefunction(catvm.memory.variable.Document.__function_createNodeIterator);
catvm.memory.variable.Document.document_obj.__defineGetter__("createNodeIterator",function createNodeIterator(){return catvm.memory.variable.Document.__function_createNodeIterator;});
Document.prototype["createNodeIterator"] = function createNodeIterator(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createNodeIterator"]);//407

catvm.memory.variable.Document.__function_createProcessingInstruction = Object.getOwnPropertyDescriptor(Document.prototype,"createProcessingInstruction").value; catvm.safefunction(catvm.memory.variable.Document.__function_createProcessingInstruction);
catvm.memory.variable.Document.document_obj.__defineGetter__("createProcessingInstruction",function createProcessingInstruction(){return catvm.memory.variable.Document.__function_createProcessingInstruction;});
Document.prototype["createProcessingInstruction"] = function createProcessingInstruction(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createProcessingInstruction"]);//407

catvm.memory.variable.Document.__function_createRange = Object.getOwnPropertyDescriptor(Document.prototype,"createRange").value; catvm.safefunction(catvm.memory.variable.Document.__function_createRange);
catvm.memory.variable.Document.document_obj.__defineGetter__("createRange",function createRange(){return catvm.memory.variable.Document.__function_createRange;});
Document.prototype["createRange"] = function createRange(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createRange"]);//407

catvm.memory.variable.Document.__function_createTextNode = Object.getOwnPropertyDescriptor(Document.prototype,"createTextNode").value; catvm.safefunction(catvm.memory.variable.Document.__function_createTextNode);
catvm.memory.variable.Document.document_obj.__defineGetter__("createTextNode",function createTextNode(){return catvm.memory.variable.Document.__function_createTextNode;});
Document.prototype["createTextNode"] = function createTextNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createTextNode"]);//407

catvm.memory.variable.Document.__function_createTreeWalker = Object.getOwnPropertyDescriptor(Document.prototype,"createTreeWalker").value; catvm.safefunction(catvm.memory.variable.Document.__function_createTreeWalker);
catvm.memory.variable.Document.document_obj.__defineGetter__("createTreeWalker",function createTreeWalker(){return catvm.memory.variable.Document.__function_createTreeWalker;});
Document.prototype["createTreeWalker"] = function createTreeWalker(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["createTreeWalker"]);//407

catvm.memory.variable.Document.__function_elementFromPoint = Object.getOwnPropertyDescriptor(Document.prototype,"elementFromPoint").value; catvm.safefunction(catvm.memory.variable.Document.__function_elementFromPoint);
catvm.memory.variable.Document.document_obj.__defineGetter__("elementFromPoint",function elementFromPoint(){return catvm.memory.variable.Document.__function_elementFromPoint;});
Document.prototype["elementFromPoint"] = function elementFromPoint(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["elementFromPoint"]);//407

catvm.memory.variable.Document.__function_elementsFromPoint = Object.getOwnPropertyDescriptor(Document.prototype,"elementsFromPoint").value; catvm.safefunction(catvm.memory.variable.Document.__function_elementsFromPoint);
catvm.memory.variable.Document.document_obj.__defineGetter__("elementsFromPoint",function elementsFromPoint(){return catvm.memory.variable.Document.__function_elementsFromPoint;});
Document.prototype["elementsFromPoint"] = function elementsFromPoint(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["elementsFromPoint"]);//407

catvm.memory.variable.Document.__function_evaluate = Object.getOwnPropertyDescriptor(Document.prototype,"evaluate").value; catvm.safefunction(catvm.memory.variable.Document.__function_evaluate);
catvm.memory.variable.Document.document_obj.__defineGetter__("evaluate",function evaluate(){return catvm.memory.variable.Document.__function_evaluate;});
Document.prototype["evaluate"] = function evaluate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["evaluate"]);//407

catvm.memory.variable.Document.__function_execCommand = Object.getOwnPropertyDescriptor(Document.prototype,"execCommand").value; catvm.safefunction(catvm.memory.variable.Document.__function_execCommand);
catvm.memory.variable.Document.document_obj.__defineGetter__("execCommand",function execCommand(){return catvm.memory.variable.Document.__function_execCommand;});
Document.prototype["execCommand"] = function execCommand(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["execCommand"]);//407

catvm.memory.variable.Document.__function_exitPointerLock = Object.getOwnPropertyDescriptor(Document.prototype,"exitPointerLock").value; catvm.safefunction(catvm.memory.variable.Document.__function_exitPointerLock);
catvm.memory.variable.Document.document_obj.__defineGetter__("exitPointerLock",function exitPointerLock(){return catvm.memory.variable.Document.__function_exitPointerLock;});
Document.prototype["exitPointerLock"] = function exitPointerLock(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["exitPointerLock"]);//407

catvm.memory.variable.Document.__function_getElementById = Object.getOwnPropertyDescriptor(Document.prototype,"getElementById").value; catvm.safefunction(catvm.memory.variable.Document.__function_getElementById);
catvm.memory.variable.Document.document_obj.__defineGetter__("getElementById",function getElementById(){return catvm.memory.variable.Document.__function_getElementById;});
Document.prototype["getElementById"] = function getElementById(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getElementById"]);//407

catvm.memory.variable.Document.__function_getElementsByClassName = Object.getOwnPropertyDescriptor(Document.prototype,"getElementsByClassName").value; catvm.safefunction(catvm.memory.variable.Document.__function_getElementsByClassName);
catvm.memory.variable.Document.document_obj.__defineGetter__("getElementsByClassName",function getElementsByClassName(){return catvm.memory.variable.Document.__function_getElementsByClassName;});
Document.prototype["getElementsByClassName"] = function getElementsByClassName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getElementsByClassName"]);//407

catvm.memory.variable.Document.__function_getElementsByName = Object.getOwnPropertyDescriptor(Document.prototype,"getElementsByName").value; catvm.safefunction(catvm.memory.variable.Document.__function_getElementsByName);
catvm.memory.variable.Document.document_obj.__defineGetter__("getElementsByName",function getElementsByName(){return catvm.memory.variable.Document.__function_getElementsByName;});
Document.prototype["getElementsByName"] = function getElementsByName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getElementsByName"]);//407

catvm.memory.variable.Document.__function_getElementsByTagName = Object.getOwnPropertyDescriptor(Document.prototype,"getElementsByTagName").value; catvm.safefunction(catvm.memory.variable.Document.__function_getElementsByTagName);
catvm.memory.variable.Document.document_obj.__defineGetter__("getElementsByTagName",function getElementsByTagName(){return catvm.memory.variable.Document.__function_getElementsByTagName;});
Document.prototype["getElementsByTagName"] = function getElementsByTagName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getElementsByTagName"]);//407

catvm.memory.variable.Document.__function_getElementsByTagNameNS = Object.getOwnPropertyDescriptor(Document.prototype,"getElementsByTagNameNS").value; catvm.safefunction(catvm.memory.variable.Document.__function_getElementsByTagNameNS);
catvm.memory.variable.Document.document_obj.__defineGetter__("getElementsByTagNameNS",function getElementsByTagNameNS(){return catvm.memory.variable.Document.__function_getElementsByTagNameNS;});
Document.prototype["getElementsByTagNameNS"] = function getElementsByTagNameNS(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getElementsByTagNameNS"]);//407

catvm.memory.variable.Document.__function_getSelection = Object.getOwnPropertyDescriptor(Document.prototype,"getSelection").value; catvm.safefunction(catvm.memory.variable.Document.__function_getSelection);
catvm.memory.variable.Document.document_obj.__defineGetter__("getSelection",function getSelection(){return catvm.memory.variable.Document.__function_getSelection;});
Document.prototype["getSelection"] = function getSelection(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getSelection"]);//407

catvm.memory.variable.Document.__function_hasFocus = Object.getOwnPropertyDescriptor(Document.prototype,"hasFocus").value; catvm.safefunction(catvm.memory.variable.Document.__function_hasFocus);
catvm.memory.variable.Document.document_obj.__defineGetter__("hasFocus",function hasFocus(){return catvm.memory.variable.Document.__function_hasFocus;});
Document.prototype["hasFocus"] = function hasFocus(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["hasFocus"]);//407

catvm.memory.variable.Document.__function_importNode = Object.getOwnPropertyDescriptor(Document.prototype,"importNode").value; catvm.safefunction(catvm.memory.variable.Document.__function_importNode);
catvm.memory.variable.Document.document_obj.__defineGetter__("importNode",function importNode(){return catvm.memory.variable.Document.__function_importNode;});
Document.prototype["importNode"] = function importNode(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["importNode"]);//407

catvm.memory.variable.Document.__function_open = Object.getOwnPropertyDescriptor(Document.prototype,"open").value; catvm.safefunction(catvm.memory.variable.Document.__function_open);
catvm.memory.variable.Document.document_obj.__defineGetter__("open",function open(){return catvm.memory.variable.Document.__function_open;});
Document.prototype["open"] = function open(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["open"]);//407

catvm.memory.variable.Document.__function_prepend = Object.getOwnPropertyDescriptor(Document.prototype,"prepend").value; catvm.safefunction(catvm.memory.variable.Document.__function_prepend);
catvm.memory.variable.Document.document_obj.__defineGetter__("prepend",function prepend(){return catvm.memory.variable.Document.__function_prepend;});
Document.prototype["prepend"] = function prepend(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["prepend"]);//407

catvm.memory.variable.Document.__function_queryCommandEnabled = Object.getOwnPropertyDescriptor(Document.prototype,"queryCommandEnabled").value; catvm.safefunction(catvm.memory.variable.Document.__function_queryCommandEnabled);
catvm.memory.variable.Document.document_obj.__defineGetter__("queryCommandEnabled",function queryCommandEnabled(){return catvm.memory.variable.Document.__function_queryCommandEnabled;});
Document.prototype["queryCommandEnabled"] = function queryCommandEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["queryCommandEnabled"]);//407

catvm.memory.variable.Document.__function_queryCommandIndeterm = Object.getOwnPropertyDescriptor(Document.prototype,"queryCommandIndeterm").value; catvm.safefunction(catvm.memory.variable.Document.__function_queryCommandIndeterm);
catvm.memory.variable.Document.document_obj.__defineGetter__("queryCommandIndeterm",function queryCommandIndeterm(){return catvm.memory.variable.Document.__function_queryCommandIndeterm;});
Document.prototype["queryCommandIndeterm"] = function queryCommandIndeterm(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["queryCommandIndeterm"]);//407

catvm.memory.variable.Document.__function_queryCommandState = Object.getOwnPropertyDescriptor(Document.prototype,"queryCommandState").value; catvm.safefunction(catvm.memory.variable.Document.__function_queryCommandState);
catvm.memory.variable.Document.document_obj.__defineGetter__("queryCommandState",function queryCommandState(){return catvm.memory.variable.Document.__function_queryCommandState;});
Document.prototype["queryCommandState"] = function queryCommandState(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["queryCommandState"]);//407

catvm.memory.variable.Document.__function_queryCommandSupported = Object.getOwnPropertyDescriptor(Document.prototype,"queryCommandSupported").value; catvm.safefunction(catvm.memory.variable.Document.__function_queryCommandSupported);
catvm.memory.variable.Document.document_obj.__defineGetter__("queryCommandSupported",function queryCommandSupported(){return catvm.memory.variable.Document.__function_queryCommandSupported;});
Document.prototype["queryCommandSupported"] = function queryCommandSupported(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["queryCommandSupported"]);//407

catvm.memory.variable.Document.__function_queryCommandValue = Object.getOwnPropertyDescriptor(Document.prototype,"queryCommandValue").value; catvm.safefunction(catvm.memory.variable.Document.__function_queryCommandValue);
catvm.memory.variable.Document.document_obj.__defineGetter__("queryCommandValue",function queryCommandValue(){return catvm.memory.variable.Document.__function_queryCommandValue;});
Document.prototype["queryCommandValue"] = function queryCommandValue(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["queryCommandValue"]);//407

catvm.memory.variable.Document.__function_querySelector = Object.getOwnPropertyDescriptor(Document.prototype,"querySelector").value; catvm.safefunction(catvm.memory.variable.Document.__function_querySelector);
catvm.memory.variable.Document.document_obj.__defineGetter__("querySelector",function querySelector(){return catvm.memory.variable.Document.__function_querySelector;});
Document.prototype["querySelector"] = function querySelector(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["querySelector"]);//407

catvm.memory.variable.Document.__function_querySelectorAll = Object.getOwnPropertyDescriptor(Document.prototype,"querySelectorAll").value; catvm.safefunction(catvm.memory.variable.Document.__function_querySelectorAll);
catvm.memory.variable.Document.document_obj.__defineGetter__("querySelectorAll",function querySelectorAll(){return catvm.memory.variable.Document.__function_querySelectorAll;});
Document.prototype["querySelectorAll"] = function querySelectorAll(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["querySelectorAll"]);//407

catvm.memory.variable.Document.__function_releaseEvents = Object.getOwnPropertyDescriptor(Document.prototype,"releaseEvents").value; catvm.safefunction(catvm.memory.variable.Document.__function_releaseEvents);
catvm.memory.variable.Document.document_obj.__defineGetter__("releaseEvents",function releaseEvents(){return catvm.memory.variable.Document.__function_releaseEvents;});
Document.prototype["releaseEvents"] = function releaseEvents(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["releaseEvents"]);//407

catvm.memory.variable.Document.__function_replaceChildren = Object.getOwnPropertyDescriptor(Document.prototype,"replaceChildren").value; catvm.safefunction(catvm.memory.variable.Document.__function_replaceChildren);
catvm.memory.variable.Document.document_obj.__defineGetter__("replaceChildren",function replaceChildren(){return catvm.memory.variable.Document.__function_replaceChildren;});
Document.prototype["replaceChildren"] = function replaceChildren(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["replaceChildren"]);//407

catvm.memory.variable.Document.__function_webkitCancelFullScreen = Object.getOwnPropertyDescriptor(Document.prototype,"webkitCancelFullScreen").value; catvm.safefunction(catvm.memory.variable.Document.__function_webkitCancelFullScreen);
catvm.memory.variable.Document.document_obj.__defineGetter__("webkitCancelFullScreen",function webkitCancelFullScreen(){return catvm.memory.variable.Document.__function_webkitCancelFullScreen;});
Document.prototype["webkitCancelFullScreen"] = function webkitCancelFullScreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["webkitCancelFullScreen"]);//407

catvm.memory.variable.Document.__function_webkitExitFullscreen = Object.getOwnPropertyDescriptor(Document.prototype,"webkitExitFullscreen").value; catvm.safefunction(catvm.memory.variable.Document.__function_webkitExitFullscreen);
catvm.memory.variable.Document.document_obj.__defineGetter__("webkitExitFullscreen",function webkitExitFullscreen(){return catvm.memory.variable.Document.__function_webkitExitFullscreen;});
Document.prototype["webkitExitFullscreen"] = function webkitExitFullscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["webkitExitFullscreen"]);//407

catvm.memory.variable.Document.__function_write = Object.getOwnPropertyDescriptor(Document.prototype,"write").value; catvm.safefunction(catvm.memory.variable.Document.__function_write);
catvm.memory.variable.Document.document_obj.__defineGetter__("write",function write(){return catvm.memory.variable.Document.__function_write;});
Document.prototype["write"] = function write(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["write"]);//407

catvm.memory.variable.Document.__function_writeln = Object.getOwnPropertyDescriptor(Document.prototype,"writeln").value; catvm.safefunction(catvm.memory.variable.Document.__function_writeln);
catvm.memory.variable.Document.document_obj.__defineGetter__("writeln",function writeln(){return catvm.memory.variable.Document.__function_writeln;});
Document.prototype["writeln"] = function writeln(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["writeln"]);//407

catvm.memory.variable.Document.__function_getAnimations = Object.getOwnPropertyDescriptor(Document.prototype,"getAnimations").value; catvm.safefunction(catvm.memory.variable.Document.__function_getAnimations);
catvm.memory.variable.Document.document_obj.__defineGetter__("getAnimations",function getAnimations(){return catvm.memory.variable.Document.__function_getAnimations;});
Document.prototype["getAnimations"] = function getAnimations(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["getAnimations"]);//407

catvm.memory.variable.Document.__function_exitFullscreen = Object.getOwnPropertyDescriptor(Document.prototype,"exitFullscreen").value; catvm.safefunction(catvm.memory.variable.Document.__function_exitFullscreen);
catvm.memory.variable.Document.document_obj.__defineGetter__("exitFullscreen",function exitFullscreen(){return catvm.memory.variable.Document.__function_exitFullscreen;});
Document.prototype["exitFullscreen"] = function exitFullscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["exitFullscreen"]);//407

catvm.memory.variable.Document.__function_exitPictureInPicture = Object.getOwnPropertyDescriptor(Document.prototype,"exitPictureInPicture").value; catvm.safefunction(catvm.memory.variable.Document.__function_exitPictureInPicture);
catvm.memory.variable.Document.document_obj.__defineGetter__("exitPictureInPicture",function exitPictureInPicture(){return catvm.memory.variable.Document.__function_exitPictureInPicture;});
Document.prototype["exitPictureInPicture"] = function exitPictureInPicture(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Document.prototype["exitPictureInPicture"]);//407

//======	invocation error func code end	======

Document = catvm.proxy(Document);

if(catvm.memory.config.framework_debugger){debugger;}
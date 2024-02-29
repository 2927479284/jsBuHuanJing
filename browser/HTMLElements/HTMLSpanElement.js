var dsf_tmp_context = catvm.memory.variable.HTMLSpanElement = {};
var HTMLSpanElement = function HTMLSpanElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLSpanElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLSpanElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLSpanElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLSpanElement.__proto__ = HTMLElement;
HTMLSpanElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLSpanElement.htmlSpanElement_obj = {};
catvm.memory.variable.HTMLSpanElement.htmlSpanElement_obj.__proto__ = HTMLSpanElement.prototype;




// 当用户创建 span 时，调用此函数返回一个 HTMLSpanElement 对象；
catvm.memory.htmlelements["span"] = function () {
    var span = catvm.memory.variable.HTMLSpanElement.htmlSpanElement_obj;
    span.offsetHeight = 72;
    span.offsetWidth = 468;
    span.style.fontSize = "72px";
    span.style.fontFamily = "OPTIMA,monospace";
    return span;
}



HTMLSpanElement = catvm.proxy(HTMLSpanElement);
if(catvm.memory.config.framework_debugger){debugger;}
var dsf_tmp_context = catvm.memory.variable.HTMLHeadElement = {};
var HTMLHeadElement = function HTMLHeadElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLHeadElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLHeadElement",
	    configurable: true
	}
});//85
//======	symbol code end	======

HTMLHeadElement.__proto__ = HTMLElement;
HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLHeadElement.htmlHeadElement_obj = {};
catvm.memory.variable.HTMLHeadElement.htmlHeadElement_obj.__proto__ = HTMLHeadElement.prototype;



// 当用户创建 head 时，调用此函数返回一个 HTMLHeadElement 对象；
catvm.memory.htmlelements["head"] = function () {
    var head = catvm.memory.variable.HTMLHeadElement.htmlHeadElement_obj;
    return head;
}



HTMLHeadElement = catvm.proxy(HTMLHeadElement);
if(catvm.memory.config.framework_debugger){debugger;}
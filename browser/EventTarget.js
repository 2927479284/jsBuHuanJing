var dsf_tmp_context = catvm.memory.variable.EventTarget = {};
var EventTarget = function EventTarget() { // 构造函数
}; catvm.safefunction(EventTarget);//14


//======	symbol code start	======
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
		value: "EventTarget",
	    configurable: true
	}
});//85
//======	symbol code end	======


//======	data descriptor func code start	======
EventTarget.prototype["addEventListener"] = function addEventListener(type,listener){
    // 添加监听事件，需要添加到框架内存对象中，调用的时候就调用框架内存中的事件。后期扩展时可以用到。
    // 比如极验点选轨迹的移动事件
    debugger; //debugger的意义在于检测到是否检测了该方法
    if(!(type in catvm.memory.listeners)){
        catvm.memory.listeners[type] = [];
    }
    catvm.memory.listeners[type].push(listener);
}; catvm.safefunction(EventTarget.prototype["addEventListener"]);//194

EventTarget.prototype["dispatchEvent"] = function dispatchEvent(event){
    debugger;
    if(!(event.type in catvm.memory.listeners)) {
        return;
      }
    var stack = catvm.memory.listeners[event.type];
    event.target = this;
    for(var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
    }
}; catvm.safefunction(EventTarget.prototype["dispatchEvent"]);//194

EventTarget.prototype["removeEventListener"] = function removeEventListener(type,listener){
    debugger;
    if(!(type in catvm.memory.listeners)) {
        return;
    }
    var stack = catvm.memory.listeners[type];
    for(var i = 0, l = stack.length; i < l; i++) {
        if(stack[i] === listener){
            stack.splice(i, 1);
            return this.removeEventListener(type, listener);
        }
    }
}; catvm.safefunction(EventTarget.prototype["removeEventListener"]);//194
//======	data descriptor func code end	======


EventTarget = catvm.proxy(EventTarget);

/*
框架5 讲了document创建标签。创建事件等较难的环境。

创建事件对象，我们在浏览器点击的时候会自动创建这个对象。而我们模拟的话可以用以下代码进行创建。
var evObj = document.createEvent("MouseEvents");


*/
if(catvm.memory.config.framework_debugger){debugger;}
/*
创建对象的几种方式： {} 、 Object.create({})、class xxx{} 、function xxx(){};+new xxx;
代理这些常见的浏览器对象，以便进行环境调试。
*/

window = this;
var dsf_tmp_context = catvm.memory.variable.Window = {};
var Window = function Window() { // 构造函数
    // 此处容易被检测到的 ，因为js可以查看堆栈，后续我们再对异常堆栈进行处理。
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
})



Window.__proto__ = EventTarget
Window.prototype.__proto__ = WindowProperties.prototype;
window.__proto__ = Window.prototype;

//======	diy data descriptor property code start	======
Object.defineProperty(Window.prototype, "TEMPORARY", {
    enumerable:true,
	value: 0
});//278
Object.defineProperty(Window.prototype, "PERSISTENT", {
    enumerable:true,
	value: 1
});//278
//======	diy data descriptor property code end	======


// v8没有setTimeout，浏览器有，但是浏览器把这个方法放到this下面，伪造v8有这个东西，因此我们需要伪造一下
window.setTimeout = function (x, y) {
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
};
catvm.safefunction(window.setTimeout);

window.clearTimeout = function (x, y) {
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
};
catvm.safefunction(window.clearTimeout);

window.setInterval = function (x, y) {
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
};
catvm.safefunction(window.setInterval);

window.clearInterval = function (x, y) {
    // x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    // 正确应该 生成UUID，并且保存到内存
    return 123;
};
catvm.safefunction(window.clearInterval);

debugger;
QxVm = {
    node_func: {
        setTimeout: setTimeout,
        setInterval: setInterval,
        clearTimeout: clearTimeout,
        clearInterval: clearInterval
    },
    timer_map: { 0: null }
};


let timer = {  // 这样写没有 prototype
    setTimeout(callback, ...arg) {
        const timer_obj = QxVm.node_func.setTimeout(callback, ...arg);
        const timer_id = parseInt(Object.keys(QxVm.timer_map).sort((a, b) => {
            return a - b;
        }).pop()) + 1;
        QxVm.timer_map[timer_id] = timer_obj
        return timer_id;
    },
    setInterval() {
        const timer_obj = QxVm.node_func.setInterval(callback, ...arg);
        const timer_id = parseInt(Object.keys(QxVm.timer_map).sort((a, b) => {
            return a - b;
        }).pop()) + 1;
        QxVm.timer_map[timer_id] = timer_obj
        return timer_id;
    },
    clearTimeout(timer_id) {
        const timer_obj = QxVm.timer_map[timer_id];
        return QxVm.node_func.clearTimeout(timer_obj)
    },
    clearInterval(timer_id) {
        const timer_obj = QxVm.timer_map[timer_id];
        return QxVm.node_func.clearInterval(timer_obj)
    }
};
for (const key in timer) {
    if (Object.hasOwnProperty.call(timer, key)) {
        const element = timer[key];
        catvm.safefunction(element);
        window[element.name] = element;
    }
}





window.DOMParser = function () {
    return 123;
};
catvm.safefunction(window.DOMParser);

// 原型下面可以取这个属性\方法，就直接放原型即可
// 只要是方法就需要catvm.safefunction 进行toSting保护
window.open = function open() {
    debugger;
}; catvm.safefunction(window.open);
// 赋值空对象最好使用这种class chrome{} 形式，而不是 {},因为这样我们可以看名字，并且最好挂上代理
window.chrome = catvm.proxy(class chrome {
});
// 打个debugger，因为我们还不知道js有没有调用该方法，也许只是获取了一下，看有没有该方法呢
// 等它真正调用的时候，我们再补全其参数及返回
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    debugger;
};
catvm.safefunction(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() {
    debugger;
};
catvm.safefunction(window.DeviceMotionEvent);

window.top = window;
window.name = "";

// todo ：待补对象
Image = function Image() {
    debugger ;
    return document.createElement("image");
}; catvm.safefunction(Image);

DOMException = function DOMException() {debugger ;}; catvm.safefunction(DOMException);
WebSocket = function WebSocket() {debugger ; return {};}; catvm.safefunction(WebSocket);
Request = function Request() {debugger ;}; catvm.safefunction(Request);
Headers = function Headers() {debugger ;};catvm.safefunction(Headers);
indexedDB = new (class IDBFactory{});

// debugger;
window = catvm.proxy(window);
Window = catvm.proxy(Window);

if(catvm.memory.config.framework_debugger){debugger;}
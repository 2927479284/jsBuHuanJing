var dsf_tmp_context = catvm.memory.variable.HTMLCanvasElement = {};
var HTMLCanvasElement = function HTMLCanvasElement() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(HTMLCanvasElement);//14


//======	symbol code start	======
Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
		value: "HTMLCanvasElement",
	    configurable: true
	}
});//85
//======	symbol code end	======
HTMLCanvasElement.__proto__ = HTMLElement;
HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;

catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj = {};
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__proto__ = HTMLCanvasElement.prototype;

//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
HTMLCanvasElement.prototype["captureStream"] = function captureStream(frameRate){
    debugger;
    return catvm.proxy(new(class MediaStream{}));
}; catvm.safefunction(HTMLCanvasElement.prototype["captureStream"]);//215
HTMLCanvasElement.prototype["getContext"] = function getContext(contextType){
    if (contextType==='2d'){
        const canvas_2d = catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj;
        canvas_2d.canvas = this;
        return catvm.proxy(canvas_2d);
    }
    else if (contextType==='webgl'){
        const canvas_webgl = catvm.memory.variable.WebGLRenderingContext.webGLRenderingContext_obj;
        canvas_webgl.canvas = this;
        return catvm.proxy(canvas_webgl)
    }
    else if (contextType==='webgl2'){
        return catvm.proxy(new (class WebGL2RenderingContext{}))
    }
    else if (contextType==='bitmaprenderer'){
        return catvm.proxy(new (class ImageBitmapRenderingContext{}))
    }
    else{
        debugger
    }
}; catvm.safefunction(HTMLCanvasElement.prototype["getContext"]);//215
HTMLCanvasElement.prototype["toBlob"] = function toBlob(){debugger;}; catvm.safefunction(HTMLCanvasElement.prototype["toBlob"]);//215
HTMLCanvasElement.prototype["toDataURL"] = function toDataURL(){
    const data_url = catvm.memory.common_change_with_website["canvas_data_url"];
    if (data_url==""){
        debugger;
    }
    return data_url;
}; catvm.safefunction(HTMLCanvasElement.prototype["toDataURL"]);//215
HTMLCanvasElement.prototype["transferControlToOffscreen"] = function transferControlToOffscreen(){debugger;}; catvm.safefunction(HTMLCanvasElement.prototype["transferControlToOffscreen"]);//215
//======	data descriptor func code end	======


//======	diy data descriptor property code start	======
//======	diy data descriptor property code end	======


//======	diy data descriptor func code start	======
//======	diy data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.width_getter = function width() {debugger;}; catvm.safefunction(dsf_tmp_context.width_getter);//294
Object.defineProperty(dsf_tmp_context.width_getter, "name", {
    value: "get width",
    configurable: true
});//300
dsf_tmp_context.width_setter = function width() {debugger;}; catvm.safefunction(dsf_tmp_context.width_setter);//305
Object.defineProperty(dsf_tmp_context.width_setter, "name", {
    value: "set width",
    configurable: true
});//310

Object.defineProperty(HTMLCanvasElement.prototype, "width", {
	get: dsf_tmp_context.width_getter,
	set: dsf_tmp_context.width_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.height_getter = function height() {debugger;}; catvm.safefunction(dsf_tmp_context.height_getter);//294
Object.defineProperty(dsf_tmp_context.height_getter, "name", {
    value: "get height",
    configurable: true
});//300
dsf_tmp_context.height_setter = function height() {debugger;}; catvm.safefunction(dsf_tmp_context.height_setter);//305
Object.defineProperty(dsf_tmp_context.height_setter, "name", {
    value: "set height",
    configurable: true
});//310

Object.defineProperty(HTMLCanvasElement.prototype, "height", {
	get: dsf_tmp_context.height_getter,
	set: dsf_tmp_context.height_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("width",Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"width").get);
dsf_tmp_context.width_getter = function width(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.width_getter);
HTMLCanvasElement.prototype.__defineGetter__("width",dsf_tmp_context.width_getter);//393

catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("height",Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"height").get);
dsf_tmp_context.height_getter = function height(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.height_getter);
HTMLCanvasElement.prototype.__defineGetter__("height",dsf_tmp_context.height_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.HTMLCanvasElement.__function_captureStream = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"captureStream").value; catvm.safefunction(catvm.memory.variable.HTMLCanvasElement.__function_captureStream);
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("captureStream",function captureStream(){return catvm.memory.variable.HTMLCanvasElement.__function_captureStream;});
HTMLCanvasElement.prototype["captureStream"] = function captureStream(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCanvasElement.prototype["captureStream"]);//407

catvm.memory.variable.HTMLCanvasElement.__function_getContext = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"getContext").value; catvm.safefunction(catvm.memory.variable.HTMLCanvasElement.__function_getContext);
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("getContext",function getContext(){return catvm.memory.variable.HTMLCanvasElement.__function_getContext;});
HTMLCanvasElement.prototype["getContext"] = function getContext(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCanvasElement.prototype["getContext"]);//407

catvm.memory.variable.HTMLCanvasElement.__function_toBlob = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"toBlob").value; catvm.safefunction(catvm.memory.variable.HTMLCanvasElement.__function_toBlob);
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("toBlob",function toBlob(){return catvm.memory.variable.HTMLCanvasElement.__function_toBlob;});
HTMLCanvasElement.prototype["toBlob"] = function toBlob(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCanvasElement.prototype["toBlob"]);//407

catvm.memory.variable.HTMLCanvasElement.__function_toDataURL = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"toDataURL").value; catvm.safefunction(catvm.memory.variable.HTMLCanvasElement.__function_toDataURL);
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("toDataURL",function toDataURL(){return catvm.memory.variable.HTMLCanvasElement.__function_toDataURL;});
HTMLCanvasElement.prototype["toDataURL"] = function toDataURL(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCanvasElement.prototype["toDataURL"]);//407

catvm.memory.variable.HTMLCanvasElement.__function_transferControlToOffscreen = Object.getOwnPropertyDescriptor(HTMLCanvasElement.prototype,"transferControlToOffscreen").value; catvm.safefunction(catvm.memory.variable.HTMLCanvasElement.__function_transferControlToOffscreen);
catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj.__defineGetter__("transferControlToOffscreen",function transferControlToOffscreen(){return catvm.memory.variable.HTMLCanvasElement.__function_transferControlToOffscreen;});
HTMLCanvasElement.prototype["transferControlToOffscreen"] = function transferControlToOffscreen(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(HTMLCanvasElement.prototype["transferControlToOffscreen"]);//407

//======	invocation error func code end	======

// 当用户创建canvas时，调用此函数返回一个canvas对象；
catvm.memory.htmlelements["canvas"] = function () {
    debugger;
    var canvas = catvm.memory.variable.HTMLCanvasElement.htmlCanvasElement_obj;
    return canvas;
}



HTMLCanvasElement = catvm.proxy(HTMLCanvasElement);

if(catvm.memory.config.framework_debugger){debugger;}
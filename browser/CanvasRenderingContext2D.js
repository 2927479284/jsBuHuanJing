var dsf_tmp_context = catvm.memory.variable.CanvasRenderingContext2D = {};
var CanvasRenderingContext2D = function CanvasRenderingContext2D() { // 构造函数
    throw new TypeError("Illegal constructor");
}; catvm.safefunction(CanvasRenderingContext2D);//14


//======	symbol code start	======
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {
		value: "CanvasRenderingContext2D",
	    configurable: true
	}
});//85
//======	symbol code end	======
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj = {};
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__proto__ = CanvasRenderingContext2D.prototype;

//======	data descriptor property code start	======
//======	data descriptor property code end	======


//======	data descriptor func code start	======
CanvasRenderingContext2D.prototype["clip"] = function clip(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["clip"]);//215
CanvasRenderingContext2D.prototype["createConicGradient"] = function createConicGradient(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["createConicGradient"]);//215
CanvasRenderingContext2D.prototype["createImageData"] = function createImageData(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["createImageData"]);//215
CanvasRenderingContext2D.prototype["createLinearGradient"] = function createLinearGradient(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["createLinearGradient"]);//215
CanvasRenderingContext2D.prototype["createPattern"] = function createPattern(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["createPattern"]);//215
CanvasRenderingContext2D.prototype["createRadialGradient"] = function createRadialGradient(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["createRadialGradient"]);//215
CanvasRenderingContext2D.prototype["drawFocusIfNeeded"] = function drawFocusIfNeeded(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["drawFocusIfNeeded"]);//215
CanvasRenderingContext2D.prototype["drawImage"] = function drawImage(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["drawImage"]);//215
CanvasRenderingContext2D.prototype["fill"] = function fill(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["fill"]);//215
CanvasRenderingContext2D.prototype["fillText"] = function fillText(text, x, y){
    //void 是 Canvas 2D API 在 (x, y) 位置填充文本的方法。如果选项的第四个参数提供了最大宽度，文本会进行缩放以适应最大宽度
    debugger;
}; catvm.safefunction(CanvasRenderingContext2D.prototype["fillText"]);//215
CanvasRenderingContext2D.prototype["getContextAttributes"] = function getContextAttributes(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["getContextAttributes"]);//215
CanvasRenderingContext2D.prototype["getImageData"] = function getImageData(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["getImageData"]);//215
CanvasRenderingContext2D.prototype["getLineDash"] = function getLineDash(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["getLineDash"]);//215
CanvasRenderingContext2D.prototype["getTransform"] = function getTransform(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["getTransform"]);//215
CanvasRenderingContext2D.prototype["isContextLost"] = function isContextLost(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["isContextLost"]);//215
CanvasRenderingContext2D.prototype["isPointInPath"] = function isPointInPath(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["isPointInPath"]);//215
CanvasRenderingContext2D.prototype["isPointInStroke"] = function isPointInStroke(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["isPointInStroke"]);//215
CanvasRenderingContext2D.prototype["measureText"] = function measureText(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["measureText"]);//215
CanvasRenderingContext2D.prototype["putImageData"] = function putImageData(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["putImageData"]);//215
CanvasRenderingContext2D.prototype["reset"] = function reset(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["reset"]);//215
CanvasRenderingContext2D.prototype["roundRect"] = function roundRect(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["roundRect"]);//215
CanvasRenderingContext2D.prototype["save"] = function save(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["save"]);//215
CanvasRenderingContext2D.prototype["scale"] = function scale(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["scale"]);//215
CanvasRenderingContext2D.prototype["setLineDash"] = function setLineDash(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["setLineDash"]);//215
CanvasRenderingContext2D.prototype["setTransform"] = function setTransform(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["setTransform"]);//215
CanvasRenderingContext2D.prototype["stroke"] = function stroke(path){
    //void 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。
    debugger;
}; catvm.safefunction(CanvasRenderingContext2D.prototype["stroke"]);//215
CanvasRenderingContext2D.prototype["strokeText"] = function strokeText(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["strokeText"]);//215
CanvasRenderingContext2D.prototype["transform"] = function transform(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["transform"]);//215
CanvasRenderingContext2D.prototype["translate"] = function translate(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["translate"]);//215
CanvasRenderingContext2D.prototype["arc"] = function arc(x, y, radius, startAngle, endAngle, anticlockwise){
    //void 是 Canvas 2D API 绘制圆弧路径的方法。圆弧路径的圆心在 (x, y) 位置，半径为 r，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
    debugger;
}; catvm.safefunction(CanvasRenderingContext2D.prototype["arc"]);//215
CanvasRenderingContext2D.prototype["arcTo"] = function arcTo(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["arcTo"]);//215
CanvasRenderingContext2D.prototype["beginPath"] = function beginPath(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["beginPath"]);//215
CanvasRenderingContext2D.prototype["bezierCurveTo"] = function bezierCurveTo(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["bezierCurveTo"]);//215
CanvasRenderingContext2D.prototype["clearRect"] = function clearRect(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["clearRect"]);//215
CanvasRenderingContext2D.prototype["closePath"] = function closePath(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["closePath"]);//215
CanvasRenderingContext2D.prototype["ellipse"] = function ellipse(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["ellipse"]);//215
CanvasRenderingContext2D.prototype["fillRect"] = function fillRect(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["fillRect"]);//215
CanvasRenderingContext2D.prototype["lineTo"] = function lineTo(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["lineTo"]);//215
CanvasRenderingContext2D.prototype["moveTo"] = function moveTo(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["moveTo"]);//215
CanvasRenderingContext2D.prototype["quadraticCurveTo"] = function quadraticCurveTo(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["quadraticCurveTo"]);//215
CanvasRenderingContext2D.prototype["rect"] = function rect(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["rect"]);//215
CanvasRenderingContext2D.prototype["resetTransform"] = function resetTransform(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["resetTransform"]);//215
CanvasRenderingContext2D.prototype["restore"] = function restore(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["restore"]);//215
CanvasRenderingContext2D.prototype["rotate"] = function rotate(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["rotate"]);//215
CanvasRenderingContext2D.prototype["strokeRect"] = function strokeRect(){debugger;}; catvm.safefunction(CanvasRenderingContext2D.prototype["strokeRect"]);//215
//======	data descriptor func code end	======


//======	diy data descriptor property code start	======
//======	diy data descriptor property code end	======


//======	diy data descriptor func code start	======
//======	diy data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.canvas_getter = function canvas() {debugger;}; catvm.safefunction(dsf_tmp_context.canvas_getter);//294
Object.defineProperty(dsf_tmp_context.canvas_getter, "name", {
    value: "get canvas",
    configurable: true
});//300

Object.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
	get: dsf_tmp_context.canvas_getter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.globalAlpha_getter = function globalAlpha() {debugger;}; catvm.safefunction(dsf_tmp_context.globalAlpha_getter);//294
Object.defineProperty(dsf_tmp_context.globalAlpha_getter, "name", {
    value: "get globalAlpha",
    configurable: true
});//300
dsf_tmp_context.globalAlpha_setter = function globalAlpha() {debugger;}; catvm.safefunction(dsf_tmp_context.globalAlpha_setter);//305
Object.defineProperty(dsf_tmp_context.globalAlpha_setter, "name", {
    value: "set globalAlpha",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
	get: dsf_tmp_context.globalAlpha_getter,
	set: dsf_tmp_context.globalAlpha_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.globalCompositeOperation_getter = function globalCompositeOperation() {debugger;}; catvm.safefunction(dsf_tmp_context.globalCompositeOperation_getter);//294
Object.defineProperty(dsf_tmp_context.globalCompositeOperation_getter, "name", {
    value: "get globalCompositeOperation",
    configurable: true
});//300
dsf_tmp_context.globalCompositeOperation_setter = function globalCompositeOperation() {debugger;}; catvm.safefunction(dsf_tmp_context.globalCompositeOperation_setter);//305
Object.defineProperty(dsf_tmp_context.globalCompositeOperation_setter, "name", {
    value: "set globalCompositeOperation",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {
	get: dsf_tmp_context.globalCompositeOperation_getter,
	set: dsf_tmp_context.globalCompositeOperation_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.filter_getter = function filter() {debugger;}; catvm.safefunction(dsf_tmp_context.filter_getter);//294
Object.defineProperty(dsf_tmp_context.filter_getter, "name", {
    value: "get filter",
    configurable: true
});//300
dsf_tmp_context.filter_setter = function filter() {debugger;}; catvm.safefunction(dsf_tmp_context.filter_setter);//305
Object.defineProperty(dsf_tmp_context.filter_setter, "name", {
    value: "set filter",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
	get: dsf_tmp_context.filter_getter,
	set: dsf_tmp_context.filter_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.imageSmoothingEnabled_getter = function imageSmoothingEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.imageSmoothingEnabled_getter);//294
Object.defineProperty(dsf_tmp_context.imageSmoothingEnabled_getter, "name", {
    value: "get imageSmoothingEnabled",
    configurable: true
});//300
dsf_tmp_context.imageSmoothingEnabled_setter = function imageSmoothingEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.imageSmoothingEnabled_setter);//305
Object.defineProperty(dsf_tmp_context.imageSmoothingEnabled_setter, "name", {
    value: "set imageSmoothingEnabled",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
	get: dsf_tmp_context.imageSmoothingEnabled_getter,
	set: dsf_tmp_context.imageSmoothingEnabled_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.imageSmoothingQuality_getter = function imageSmoothingQuality() {debugger;}; catvm.safefunction(dsf_tmp_context.imageSmoothingQuality_getter);//294
Object.defineProperty(dsf_tmp_context.imageSmoothingQuality_getter, "name", {
    value: "get imageSmoothingQuality",
    configurable: true
});//300
dsf_tmp_context.imageSmoothingQuality_setter = function imageSmoothingQuality() {debugger;}; catvm.safefunction(dsf_tmp_context.imageSmoothingQuality_setter);//305
Object.defineProperty(dsf_tmp_context.imageSmoothingQuality_setter, "name", {
    value: "set imageSmoothingQuality",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
	get: dsf_tmp_context.imageSmoothingQuality_getter,
	set: dsf_tmp_context.imageSmoothingQuality_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.strokeStyle_getter = function strokeStyle() {debugger;}; catvm.safefunction(dsf_tmp_context.strokeStyle_getter);//294
Object.defineProperty(dsf_tmp_context.strokeStyle_getter, "name", {
    value: "get strokeStyle",
    configurable: true
});//300
dsf_tmp_context.strokeStyle_setter = function strokeStyle() {debugger;}; catvm.safefunction(dsf_tmp_context.strokeStyle_setter);//305
Object.defineProperty(dsf_tmp_context.strokeStyle_setter, "name", {
    value: "set strokeStyle",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
	get: dsf_tmp_context.strokeStyle_getter,
	set: dsf_tmp_context.strokeStyle_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.fillStyle_getter = function fillStyle() {
    return "#000000";
}; catvm.safefunction(dsf_tmp_context.fillStyle_getter);//294
Object.defineProperty(dsf_tmp_context.fillStyle_getter, "name", {
    value: "get fillStyle",
    configurable: true
});//300
dsf_tmp_context.fillStyle_setter = function fillStyle() {debugger;}; catvm.safefunction(dsf_tmp_context.fillStyle_setter);//305
Object.defineProperty(dsf_tmp_context.fillStyle_setter, "name", {
    value: "set fillStyle",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
	get: dsf_tmp_context.fillStyle_getter,
	set: dsf_tmp_context.fillStyle_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.shadowOffsetX_getter = function shadowOffsetX() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowOffsetX_getter);//294
Object.defineProperty(dsf_tmp_context.shadowOffsetX_getter, "name", {
    value: "get shadowOffsetX",
    configurable: true
});//300
dsf_tmp_context.shadowOffsetX_setter = function shadowOffsetX() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowOffsetX_setter);//305
Object.defineProperty(dsf_tmp_context.shadowOffsetX_setter, "name", {
    value: "set shadowOffsetX",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
	get: dsf_tmp_context.shadowOffsetX_getter,
	set: dsf_tmp_context.shadowOffsetX_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.shadowOffsetY_getter = function shadowOffsetY() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowOffsetY_getter);//294
Object.defineProperty(dsf_tmp_context.shadowOffsetY_getter, "name", {
    value: "get shadowOffsetY",
    configurable: true
});//300
dsf_tmp_context.shadowOffsetY_setter = function shadowOffsetY() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowOffsetY_setter);//305
Object.defineProperty(dsf_tmp_context.shadowOffsetY_setter, "name", {
    value: "set shadowOffsetY",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
	get: dsf_tmp_context.shadowOffsetY_getter,
	set: dsf_tmp_context.shadowOffsetY_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.shadowBlur_getter = function shadowBlur() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowBlur_getter);//294
Object.defineProperty(dsf_tmp_context.shadowBlur_getter, "name", {
    value: "get shadowBlur",
    configurable: true
});//300
dsf_tmp_context.shadowBlur_setter = function shadowBlur() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowBlur_setter);//305
Object.defineProperty(dsf_tmp_context.shadowBlur_setter, "name", {
    value: "set shadowBlur",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
	get: dsf_tmp_context.shadowBlur_getter,
	set: dsf_tmp_context.shadowBlur_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.shadowColor_getter = function shadowColor() {
    return "rgba(0, 0, 0, 0)";
}; catvm.safefunction(dsf_tmp_context.shadowColor_getter);//294
Object.defineProperty(dsf_tmp_context.shadowColor_getter, "name", {
    value: "get shadowColor",
    configurable: true
});//300
dsf_tmp_context.shadowColor_setter = function shadowColor() {debugger;}; catvm.safefunction(dsf_tmp_context.shadowColor_setter);//305
Object.defineProperty(dsf_tmp_context.shadowColor_setter, "name", {
    value: "set shadowColor",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
	get: dsf_tmp_context.shadowColor_getter,
	set: dsf_tmp_context.shadowColor_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.lineWidth_getter = function lineWidth() {debugger;}; catvm.safefunction(dsf_tmp_context.lineWidth_getter);//294
Object.defineProperty(dsf_tmp_context.lineWidth_getter, "name", {
    value: "get lineWidth",
    configurable: true
});//300
dsf_tmp_context.lineWidth_setter = function lineWidth() {debugger;}; catvm.safefunction(dsf_tmp_context.lineWidth_setter);//305
Object.defineProperty(dsf_tmp_context.lineWidth_setter, "name", {
    value: "set lineWidth",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
	get: dsf_tmp_context.lineWidth_getter,
	set: dsf_tmp_context.lineWidth_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.lineCap_getter = function lineCap() {debugger;}; catvm.safefunction(dsf_tmp_context.lineCap_getter);//294
Object.defineProperty(dsf_tmp_context.lineCap_getter, "name", {
    value: "get lineCap",
    configurable: true
});//300
dsf_tmp_context.lineCap_setter = function lineCap() {debugger;}; catvm.safefunction(dsf_tmp_context.lineCap_setter);//305
Object.defineProperty(dsf_tmp_context.lineCap_setter, "name", {
    value: "set lineCap",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
	get: dsf_tmp_context.lineCap_getter,
	set: dsf_tmp_context.lineCap_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.lineJoin_getter = function lineJoin() {debugger;}; catvm.safefunction(dsf_tmp_context.lineJoin_getter);//294
Object.defineProperty(dsf_tmp_context.lineJoin_getter, "name", {
    value: "get lineJoin",
    configurable: true
});//300
dsf_tmp_context.lineJoin_setter = function lineJoin() {debugger;}; catvm.safefunction(dsf_tmp_context.lineJoin_setter);//305
Object.defineProperty(dsf_tmp_context.lineJoin_setter, "name", {
    value: "set lineJoin",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
	get: dsf_tmp_context.lineJoin_getter,
	set: dsf_tmp_context.lineJoin_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.miterLimit_getter = function miterLimit() {debugger;}; catvm.safefunction(dsf_tmp_context.miterLimit_getter);//294
Object.defineProperty(dsf_tmp_context.miterLimit_getter, "name", {
    value: "get miterLimit",
    configurable: true
});//300
dsf_tmp_context.miterLimit_setter = function miterLimit() {debugger;}; catvm.safefunction(dsf_tmp_context.miterLimit_setter);//305
Object.defineProperty(dsf_tmp_context.miterLimit_setter, "name", {
    value: "set miterLimit",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
	get: dsf_tmp_context.miterLimit_getter,
	set: dsf_tmp_context.miterLimit_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.lineDashOffset_getter = function lineDashOffset() {debugger;}; catvm.safefunction(dsf_tmp_context.lineDashOffset_getter);//294
Object.defineProperty(dsf_tmp_context.lineDashOffset_getter, "name", {
    value: "get lineDashOffset",
    configurable: true
});//300
dsf_tmp_context.lineDashOffset_setter = function lineDashOffset() {debugger;}; catvm.safefunction(dsf_tmp_context.lineDashOffset_setter);//305
Object.defineProperty(dsf_tmp_context.lineDashOffset_setter, "name", {
    value: "set lineDashOffset",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
	get: dsf_tmp_context.lineDashOffset_getter,
	set: dsf_tmp_context.lineDashOffset_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.font_getter = function font() {debugger;}; catvm.safefunction(dsf_tmp_context.font_getter);//294
Object.defineProperty(dsf_tmp_context.font_getter, "name", {
    value: "get font",
    configurable: true
});//300
dsf_tmp_context.font_setter = function font() {debugger;}; catvm.safefunction(dsf_tmp_context.font_setter);//305
Object.defineProperty(dsf_tmp_context.font_setter, "name", {
    value: "set font",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "font", {
	get: dsf_tmp_context.font_getter,
	set: dsf_tmp_context.font_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.textAlign_getter = function textAlign() {debugger;}; catvm.safefunction(dsf_tmp_context.textAlign_getter);//294
Object.defineProperty(dsf_tmp_context.textAlign_getter, "name", {
    value: "get textAlign",
    configurable: true
});//300
dsf_tmp_context.textAlign_setter = function textAlign() {debugger;}; catvm.safefunction(dsf_tmp_context.textAlign_setter);//305
Object.defineProperty(dsf_tmp_context.textAlign_setter, "name", {
    value: "set textAlign",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
	get: dsf_tmp_context.textAlign_getter,
	set: dsf_tmp_context.textAlign_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.textBaseline_getter = function textBaseline() {debugger;}; catvm.safefunction(dsf_tmp_context.textBaseline_getter);//294
Object.defineProperty(dsf_tmp_context.textBaseline_getter, "name", {
    value: "get textBaseline",
    configurable: true
});//300
dsf_tmp_context.textBaseline_setter = function textBaseline() {debugger;}; catvm.safefunction(dsf_tmp_context.textBaseline_setter);//305
Object.defineProperty(dsf_tmp_context.textBaseline_setter, "name", {
    value: "set textBaseline",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
	get: dsf_tmp_context.textBaseline_getter,
	set: dsf_tmp_context.textBaseline_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.direction_getter = function direction() {debugger;}; catvm.safefunction(dsf_tmp_context.direction_getter);//294
Object.defineProperty(dsf_tmp_context.direction_getter, "name", {
    value: "get direction",
    configurable: true
});//300
dsf_tmp_context.direction_setter = function direction() {debugger;}; catvm.safefunction(dsf_tmp_context.direction_setter);//305
Object.defineProperty(dsf_tmp_context.direction_setter, "name", {
    value: "set direction",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
	get: dsf_tmp_context.direction_getter,
	set: dsf_tmp_context.direction_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.fontKerning_getter = function fontKerning() {debugger;}; catvm.safefunction(dsf_tmp_context.fontKerning_getter);//294
Object.defineProperty(dsf_tmp_context.fontKerning_getter, "name", {
    value: "get fontKerning",
    configurable: true
});//300
dsf_tmp_context.fontKerning_setter = function fontKerning() {debugger;}; catvm.safefunction(dsf_tmp_context.fontKerning_setter);//305
Object.defineProperty(dsf_tmp_context.fontKerning_setter, "name", {
    value: "set fontKerning",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
	get: dsf_tmp_context.fontKerning_getter,
	set: dsf_tmp_context.fontKerning_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.fontStretch_getter = function fontStretch() {debugger;}; catvm.safefunction(dsf_tmp_context.fontStretch_getter);//294
Object.defineProperty(dsf_tmp_context.fontStretch_getter, "name", {
    value: "get fontStretch",
    configurable: true
});//300
dsf_tmp_context.fontStretch_setter = function fontStretch() {debugger;}; catvm.safefunction(dsf_tmp_context.fontStretch_setter);//305
Object.defineProperty(dsf_tmp_context.fontStretch_setter, "name", {
    value: "set fontStretch",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
	get: dsf_tmp_context.fontStretch_getter,
	set: dsf_tmp_context.fontStretch_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.fontVariantCaps_getter = function fontVariantCaps() {debugger;}; catvm.safefunction(dsf_tmp_context.fontVariantCaps_getter);//294
Object.defineProperty(dsf_tmp_context.fontVariantCaps_getter, "name", {
    value: "get fontVariantCaps",
    configurable: true
});//300
dsf_tmp_context.fontVariantCaps_setter = function fontVariantCaps() {debugger;}; catvm.safefunction(dsf_tmp_context.fontVariantCaps_setter);//305
Object.defineProperty(dsf_tmp_context.fontVariantCaps_setter, "name", {
    value: "set fontVariantCaps",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
	get: dsf_tmp_context.fontVariantCaps_getter,
	set: dsf_tmp_context.fontVariantCaps_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.letterSpacing_getter = function letterSpacing() {debugger;}; catvm.safefunction(dsf_tmp_context.letterSpacing_getter);//294
Object.defineProperty(dsf_tmp_context.letterSpacing_getter, "name", {
    value: "get letterSpacing",
    configurable: true
});//300
dsf_tmp_context.letterSpacing_setter = function letterSpacing() {debugger;}; catvm.safefunction(dsf_tmp_context.letterSpacing_setter);//305
Object.defineProperty(dsf_tmp_context.letterSpacing_setter, "name", {
    value: "set letterSpacing",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
	get: dsf_tmp_context.letterSpacing_getter,
	set: dsf_tmp_context.letterSpacing_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.textRendering_getter = function textRendering() {debugger;}; catvm.safefunction(dsf_tmp_context.textRendering_getter);//294
Object.defineProperty(dsf_tmp_context.textRendering_getter, "name", {
    value: "get textRendering",
    configurable: true
});//300
dsf_tmp_context.textRendering_setter = function textRendering() {debugger;}; catvm.safefunction(dsf_tmp_context.textRendering_setter);//305
Object.defineProperty(dsf_tmp_context.textRendering_setter, "name", {
    value: "set textRendering",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
	get: dsf_tmp_context.textRendering_getter,
	set: dsf_tmp_context.textRendering_setter,
	enumerable:true,
	configurable:true,
});//331

dsf_tmp_context.wordSpacing_getter = function wordSpacing() {debugger;}; catvm.safefunction(dsf_tmp_context.wordSpacing_getter);//294
Object.defineProperty(dsf_tmp_context.wordSpacing_getter, "name", {
    value: "get wordSpacing",
    configurable: true
});//300
dsf_tmp_context.wordSpacing_setter = function wordSpacing() {debugger;}; catvm.safefunction(dsf_tmp_context.wordSpacing_setter);//305
Object.defineProperty(dsf_tmp_context.wordSpacing_setter, "name", {
    value: "set wordSpacing",
    configurable: true
});//310

Object.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
	get: dsf_tmp_context.wordSpacing_getter,
	set: dsf_tmp_context.wordSpacing_setter,
	enumerable:true,
	configurable:true,
});//331

//======	access descriptor code end	======


//======	invocation error prop code start	======
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("canvas",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"canvas").get);
dsf_tmp_context.canvas_getter = function canvas(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.canvas_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("canvas",dsf_tmp_context.canvas_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("globalAlpha",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"globalAlpha").get);
dsf_tmp_context.globalAlpha_getter = function globalAlpha(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.globalAlpha_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("globalAlpha",dsf_tmp_context.globalAlpha_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("globalCompositeOperation",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"globalCompositeOperation").get);
dsf_tmp_context.globalCompositeOperation_getter = function globalCompositeOperation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.globalCompositeOperation_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("globalCompositeOperation",dsf_tmp_context.globalCompositeOperation_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("filter",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"filter").get);
dsf_tmp_context.filter_getter = function filter(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.filter_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("filter",dsf_tmp_context.filter_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("imageSmoothingEnabled",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"imageSmoothingEnabled").get);
dsf_tmp_context.imageSmoothingEnabled_getter = function imageSmoothingEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.imageSmoothingEnabled_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("imageSmoothingEnabled",dsf_tmp_context.imageSmoothingEnabled_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("imageSmoothingQuality",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"imageSmoothingQuality").get);
dsf_tmp_context.imageSmoothingQuality_getter = function imageSmoothingQuality(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.imageSmoothingQuality_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("imageSmoothingQuality",dsf_tmp_context.imageSmoothingQuality_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("strokeStyle",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"strokeStyle").get);
dsf_tmp_context.strokeStyle_getter = function strokeStyle(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.strokeStyle_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("strokeStyle",dsf_tmp_context.strokeStyle_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fillStyle",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fillStyle").get);
dsf_tmp_context.fillStyle_getter = function fillStyle(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fillStyle_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("fillStyle",dsf_tmp_context.fillStyle_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("shadowOffsetX",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"shadowOffsetX").get);
dsf_tmp_context.shadowOffsetX_getter = function shadowOffsetX(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.shadowOffsetX_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("shadowOffsetX",dsf_tmp_context.shadowOffsetX_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("shadowOffsetY",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"shadowOffsetY").get);
dsf_tmp_context.shadowOffsetY_getter = function shadowOffsetY(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.shadowOffsetY_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("shadowOffsetY",dsf_tmp_context.shadowOffsetY_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("shadowBlur",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"shadowBlur").get);
dsf_tmp_context.shadowBlur_getter = function shadowBlur(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.shadowBlur_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("shadowBlur",dsf_tmp_context.shadowBlur_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("shadowColor",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"shadowColor").get);
dsf_tmp_context.shadowColor_getter = function shadowColor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.shadowColor_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("shadowColor",dsf_tmp_context.shadowColor_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("lineWidth",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"lineWidth").get);
dsf_tmp_context.lineWidth_getter = function lineWidth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lineWidth_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("lineWidth",dsf_tmp_context.lineWidth_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("lineCap",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"lineCap").get);
dsf_tmp_context.lineCap_getter = function lineCap(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lineCap_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("lineCap",dsf_tmp_context.lineCap_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("lineJoin",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"lineJoin").get);
dsf_tmp_context.lineJoin_getter = function lineJoin(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lineJoin_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("lineJoin",dsf_tmp_context.lineJoin_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("miterLimit",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"miterLimit").get);
dsf_tmp_context.miterLimit_getter = function miterLimit(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.miterLimit_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("miterLimit",dsf_tmp_context.miterLimit_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("lineDashOffset",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"lineDashOffset").get);
dsf_tmp_context.lineDashOffset_getter = function lineDashOffset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.lineDashOffset_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("lineDashOffset",dsf_tmp_context.lineDashOffset_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("font",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"font").get);
dsf_tmp_context.font_getter = function font(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.font_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("font",dsf_tmp_context.font_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("textAlign",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"textAlign").get);
dsf_tmp_context.textAlign_getter = function textAlign(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.textAlign_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("textAlign",dsf_tmp_context.textAlign_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("textBaseline",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"textBaseline").get);
dsf_tmp_context.textBaseline_getter = function textBaseline(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.textBaseline_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("textBaseline",dsf_tmp_context.textBaseline_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("direction",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"direction").get);
dsf_tmp_context.direction_getter = function direction(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.direction_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("direction",dsf_tmp_context.direction_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fontKerning",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fontKerning").get);
dsf_tmp_context.fontKerning_getter = function fontKerning(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fontKerning_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("fontKerning",dsf_tmp_context.fontKerning_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fontStretch",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fontStretch").get);
dsf_tmp_context.fontStretch_getter = function fontStretch(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fontStretch_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("fontStretch",dsf_tmp_context.fontStretch_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fontVariantCaps",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fontVariantCaps").get);
dsf_tmp_context.fontVariantCaps_getter = function fontVariantCaps(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.fontVariantCaps_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("fontVariantCaps",dsf_tmp_context.fontVariantCaps_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("letterSpacing",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"letterSpacing").get);
dsf_tmp_context.letterSpacing_getter = function letterSpacing(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.letterSpacing_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("letterSpacing",dsf_tmp_context.letterSpacing_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("textRendering",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"textRendering").get);
dsf_tmp_context.textRendering_getter = function textRendering(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.textRendering_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("textRendering",dsf_tmp_context.textRendering_getter);//393

catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("wordSpacing",Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"wordSpacing").get);
dsf_tmp_context.wordSpacing_getter = function wordSpacing(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.wordSpacing_getter);
CanvasRenderingContext2D.prototype.__defineGetter__("wordSpacing",dsf_tmp_context.wordSpacing_getter);//393

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.CanvasRenderingContext2D.__function_clip = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"clip").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_clip);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("clip",function clip(){return catvm.memory.variable.CanvasRenderingContext2D.__function_clip;});
CanvasRenderingContext2D.prototype["clip"] = function clip(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["clip"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_createConicGradient = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"createConicGradient").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_createConicGradient);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("createConicGradient",function createConicGradient(){return catvm.memory.variable.CanvasRenderingContext2D.__function_createConicGradient;});
CanvasRenderingContext2D.prototype["createConicGradient"] = function createConicGradient(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["createConicGradient"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_createImageData = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"createImageData").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_createImageData);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("createImageData",function createImageData(){return catvm.memory.variable.CanvasRenderingContext2D.__function_createImageData;});
CanvasRenderingContext2D.prototype["createImageData"] = function createImageData(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["createImageData"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_createLinearGradient = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"createLinearGradient").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_createLinearGradient);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("createLinearGradient",function createLinearGradient(){return catvm.memory.variable.CanvasRenderingContext2D.__function_createLinearGradient;});
CanvasRenderingContext2D.prototype["createLinearGradient"] = function createLinearGradient(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["createLinearGradient"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_createPattern = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"createPattern").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_createPattern);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("createPattern",function createPattern(){return catvm.memory.variable.CanvasRenderingContext2D.__function_createPattern;});
CanvasRenderingContext2D.prototype["createPattern"] = function createPattern(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["createPattern"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_createRadialGradient = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"createRadialGradient").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_createRadialGradient);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("createRadialGradient",function createRadialGradient(){return catvm.memory.variable.CanvasRenderingContext2D.__function_createRadialGradient;});
CanvasRenderingContext2D.prototype["createRadialGradient"] = function createRadialGradient(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["createRadialGradient"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_drawFocusIfNeeded = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"drawFocusIfNeeded").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_drawFocusIfNeeded);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("drawFocusIfNeeded",function drawFocusIfNeeded(){return catvm.memory.variable.CanvasRenderingContext2D.__function_drawFocusIfNeeded;});
CanvasRenderingContext2D.prototype["drawFocusIfNeeded"] = function drawFocusIfNeeded(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["drawFocusIfNeeded"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_drawImage = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"drawImage").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_drawImage);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("drawImage",function drawImage(){return catvm.memory.variable.CanvasRenderingContext2D.__function_drawImage;});
CanvasRenderingContext2D.prototype["drawImage"] = function drawImage(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["drawImage"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_fill = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fill").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_fill);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fill",function fill(){return catvm.memory.variable.CanvasRenderingContext2D.__function_fill;});
CanvasRenderingContext2D.prototype["fill"] = function fill(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["fill"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_fillText = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fillText").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_fillText);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fillText",function fillText(){return catvm.memory.variable.CanvasRenderingContext2D.__function_fillText;});
CanvasRenderingContext2D.prototype["fillText"] = function fillText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["fillText"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_getContextAttributes = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"getContextAttributes").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_getContextAttributes);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("getContextAttributes",function getContextAttributes(){return catvm.memory.variable.CanvasRenderingContext2D.__function_getContextAttributes;});
CanvasRenderingContext2D.prototype["getContextAttributes"] = function getContextAttributes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["getContextAttributes"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_getImageData = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"getImageData").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_getImageData);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("getImageData",function getImageData(){return catvm.memory.variable.CanvasRenderingContext2D.__function_getImageData;});
CanvasRenderingContext2D.prototype["getImageData"] = function getImageData(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["getImageData"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_getLineDash = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"getLineDash").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_getLineDash);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("getLineDash",function getLineDash(){return catvm.memory.variable.CanvasRenderingContext2D.__function_getLineDash;});
CanvasRenderingContext2D.prototype["getLineDash"] = function getLineDash(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["getLineDash"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_getTransform = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"getTransform").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_getTransform);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("getTransform",function getTransform(){return catvm.memory.variable.CanvasRenderingContext2D.__function_getTransform;});
CanvasRenderingContext2D.prototype["getTransform"] = function getTransform(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["getTransform"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_isContextLost = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"isContextLost").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_isContextLost);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("isContextLost",function isContextLost(){return catvm.memory.variable.CanvasRenderingContext2D.__function_isContextLost;});
CanvasRenderingContext2D.prototype["isContextLost"] = function isContextLost(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["isContextLost"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInPath = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"isPointInPath").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInPath);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("isPointInPath",function isPointInPath(){return catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInPath;});
CanvasRenderingContext2D.prototype["isPointInPath"] = function isPointInPath(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["isPointInPath"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInStroke = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"isPointInStroke").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInStroke);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("isPointInStroke",function isPointInStroke(){return catvm.memory.variable.CanvasRenderingContext2D.__function_isPointInStroke;});
CanvasRenderingContext2D.prototype["isPointInStroke"] = function isPointInStroke(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["isPointInStroke"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_measureText = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"measureText").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_measureText);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("measureText",function measureText(){return catvm.memory.variable.CanvasRenderingContext2D.__function_measureText;});
CanvasRenderingContext2D.prototype["measureText"] = function measureText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["measureText"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_putImageData = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"putImageData").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_putImageData);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("putImageData",function putImageData(){return catvm.memory.variable.CanvasRenderingContext2D.__function_putImageData;});
CanvasRenderingContext2D.prototype["putImageData"] = function putImageData(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["putImageData"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_reset = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"reset").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_reset);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("reset",function reset(){return catvm.memory.variable.CanvasRenderingContext2D.__function_reset;});
CanvasRenderingContext2D.prototype["reset"] = function reset(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["reset"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_roundRect = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"roundRect").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_roundRect);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("roundRect",function roundRect(){return catvm.memory.variable.CanvasRenderingContext2D.__function_roundRect;});
CanvasRenderingContext2D.prototype["roundRect"] = function roundRect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["roundRect"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_save = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"save").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_save);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("save",function save(){return catvm.memory.variable.CanvasRenderingContext2D.__function_save;});
CanvasRenderingContext2D.prototype["save"] = function save(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["save"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_scale = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"scale").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_scale);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("scale",function scale(){return catvm.memory.variable.CanvasRenderingContext2D.__function_scale;});
CanvasRenderingContext2D.prototype["scale"] = function scale(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["scale"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_setLineDash = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"setLineDash").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_setLineDash);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("setLineDash",function setLineDash(){return catvm.memory.variable.CanvasRenderingContext2D.__function_setLineDash;});
CanvasRenderingContext2D.prototype["setLineDash"] = function setLineDash(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["setLineDash"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_setTransform = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"setTransform").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_setTransform);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("setTransform",function setTransform(){return catvm.memory.variable.CanvasRenderingContext2D.__function_setTransform;});
CanvasRenderingContext2D.prototype["setTransform"] = function setTransform(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["setTransform"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_stroke = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"stroke").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_stroke);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("stroke",function stroke(){return catvm.memory.variable.CanvasRenderingContext2D.__function_stroke;});
CanvasRenderingContext2D.prototype["stroke"] = function stroke(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["stroke"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_strokeText = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"strokeText").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_strokeText);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("strokeText",function strokeText(){return catvm.memory.variable.CanvasRenderingContext2D.__function_strokeText;});
CanvasRenderingContext2D.prototype["strokeText"] = function strokeText(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["strokeText"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_transform = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"transform").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_transform);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("transform",function transform(){return catvm.memory.variable.CanvasRenderingContext2D.__function_transform;});
CanvasRenderingContext2D.prototype["transform"] = function transform(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["transform"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_translate = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"translate").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_translate);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("translate",function translate(){return catvm.memory.variable.CanvasRenderingContext2D.__function_translate;});
CanvasRenderingContext2D.prototype["translate"] = function translate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["translate"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_arc = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"arc").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_arc);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("arc",function arc(){return catvm.memory.variable.CanvasRenderingContext2D.__function_arc;});
CanvasRenderingContext2D.prototype["arc"] = function arc(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["arc"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_arcTo = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"arcTo").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_arcTo);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("arcTo",function arcTo(){return catvm.memory.variable.CanvasRenderingContext2D.__function_arcTo;});
CanvasRenderingContext2D.prototype["arcTo"] = function arcTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["arcTo"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_beginPath = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"beginPath").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_beginPath);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("beginPath",function beginPath(){return catvm.memory.variable.CanvasRenderingContext2D.__function_beginPath;});
CanvasRenderingContext2D.prototype["beginPath"] = function beginPath(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["beginPath"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_bezierCurveTo = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"bezierCurveTo").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_bezierCurveTo);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("bezierCurveTo",function bezierCurveTo(){return catvm.memory.variable.CanvasRenderingContext2D.__function_bezierCurveTo;});
CanvasRenderingContext2D.prototype["bezierCurveTo"] = function bezierCurveTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["bezierCurveTo"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_clearRect = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"clearRect").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_clearRect);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("clearRect",function clearRect(){return catvm.memory.variable.CanvasRenderingContext2D.__function_clearRect;});
CanvasRenderingContext2D.prototype["clearRect"] = function clearRect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["clearRect"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_closePath = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"closePath").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_closePath);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("closePath",function closePath(){return catvm.memory.variable.CanvasRenderingContext2D.__function_closePath;});
CanvasRenderingContext2D.prototype["closePath"] = function closePath(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["closePath"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_ellipse = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"ellipse").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_ellipse);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("ellipse",function ellipse(){return catvm.memory.variable.CanvasRenderingContext2D.__function_ellipse;});
CanvasRenderingContext2D.prototype["ellipse"] = function ellipse(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["ellipse"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_fillRect = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"fillRect").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_fillRect);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("fillRect",function fillRect(){return catvm.memory.variable.CanvasRenderingContext2D.__function_fillRect;});
CanvasRenderingContext2D.prototype["fillRect"] = function fillRect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["fillRect"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_lineTo = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"lineTo").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_lineTo);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("lineTo",function lineTo(){return catvm.memory.variable.CanvasRenderingContext2D.__function_lineTo;});
CanvasRenderingContext2D.prototype["lineTo"] = function lineTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["lineTo"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_moveTo = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"moveTo").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_moveTo);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("moveTo",function moveTo(){return catvm.memory.variable.CanvasRenderingContext2D.__function_moveTo;});
CanvasRenderingContext2D.prototype["moveTo"] = function moveTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["moveTo"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_quadraticCurveTo = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"quadraticCurveTo").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_quadraticCurveTo);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("quadraticCurveTo",function quadraticCurveTo(){return catvm.memory.variable.CanvasRenderingContext2D.__function_quadraticCurveTo;});
CanvasRenderingContext2D.prototype["quadraticCurveTo"] = function quadraticCurveTo(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["quadraticCurveTo"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_rect = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"rect").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_rect);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("rect",function rect(){return catvm.memory.variable.CanvasRenderingContext2D.__function_rect;});
CanvasRenderingContext2D.prototype["rect"] = function rect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["rect"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_resetTransform = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"resetTransform").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_resetTransform);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("resetTransform",function resetTransform(){return catvm.memory.variable.CanvasRenderingContext2D.__function_resetTransform;});
CanvasRenderingContext2D.prototype["resetTransform"] = function resetTransform(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["resetTransform"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_restore = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"restore").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_restore);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("restore",function restore(){return catvm.memory.variable.CanvasRenderingContext2D.__function_restore;});
CanvasRenderingContext2D.prototype["restore"] = function restore(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["restore"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_rotate = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"rotate").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_rotate);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("rotate",function rotate(){return catvm.memory.variable.CanvasRenderingContext2D.__function_rotate;});
CanvasRenderingContext2D.prototype["rotate"] = function rotate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["rotate"]);//407

catvm.memory.variable.CanvasRenderingContext2D.__function_strokeRect = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"strokeRect").value; catvm.safefunction(catvm.memory.variable.CanvasRenderingContext2D.__function_strokeRect);
catvm.memory.variable.CanvasRenderingContext2D.canvasRenderingContext2D_obj.__defineGetter__("strokeRect",function strokeRect(){return catvm.memory.variable.CanvasRenderingContext2D.__function_strokeRect;});
CanvasRenderingContext2D.prototype["strokeRect"] = function strokeRect(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(CanvasRenderingContext2D.prototype["strokeRect"]);//407

//======	invocation error func code end	======
CanvasRenderingContext2D = catvm.proxy(CanvasRenderingContext2D);

if(catvm.memory.config.framework_debugger){debugger;}
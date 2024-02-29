var dsf_tmp_context = catvm.memory.variable.Navigator = {};
var Navigator = function Navigator() { // 构造函数
	throw new TypeError("Illegal constructor");
}; catvm.safefunction(Navigator);//13


//======	symbol code start	======
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
		value: "Navigator",
	    configurable: true
	}
});//84
//======	symbol code end	======
var navigator = {};
navigator.__proto__ = Navigator.prototype;



//======	data descriptor func code start	======
Navigator.prototype["getGamepads"] = function getGamepads(){debugger;}; catvm.safefunction(Navigator.prototype["getGamepads"]);//189
Navigator.prototype["javaEnabled"] = function javaEnabled(){debugger;}; catvm.safefunction(Navigator.prototype["javaEnabled"]);//189
Navigator.prototype["sendBeacon"] = function sendBeacon(){debugger;}; catvm.safefunction(Navigator.prototype["sendBeacon"]);//189
Navigator.prototype["vibrate"] = function vibrate(){debugger;}; catvm.safefunction(Navigator.prototype["vibrate"]);//189
Navigator.prototype["canShare"] = function canShare(){debugger;}; catvm.safefunction(Navigator.prototype["canShare"]);//189
Navigator.prototype["share"] = function share(){debugger;}; catvm.safefunction(Navigator.prototype["share"]);//189
Navigator.prototype["clearAppBadge"] = function clearAppBadge(){debugger;}; catvm.safefunction(Navigator.prototype["clearAppBadge"]);//189
Navigator.prototype["getUserMedia"] = function getUserMedia(){debugger;}; catvm.safefunction(Navigator.prototype["getUserMedia"]);//189
Navigator.prototype["requestMIDIAccess"] = function requestMIDIAccess(){debugger;}; catvm.safefunction(Navigator.prototype["requestMIDIAccess"]);//189
Navigator.prototype["requestMediaKeySystemAccess"] = function requestMediaKeySystemAccess(){debugger;}; catvm.safefunction(Navigator.prototype["requestMediaKeySystemAccess"]);//189
Navigator.prototype["setAppBadge"] = function setAppBadge(){debugger;}; catvm.safefunction(Navigator.prototype["setAppBadge"]);//189
Navigator.prototype["webkitGetUserMedia"] = function webkitGetUserMedia(){debugger;}; catvm.safefunction(Navigator.prototype["webkitGetUserMedia"]);//189
Navigator.prototype["getBattery"] = function getBattery(){debugger;}; catvm.safefunction(Navigator.prototype["getBattery"]);//189
Navigator.prototype["getInstalledRelatedApps"] = function getInstalledRelatedApps(){debugger;}; catvm.safefunction(Navigator.prototype["getInstalledRelatedApps"]);//189
Navigator.prototype["registerProtocolHandler"] = function registerProtocolHandler(){debugger;}; catvm.safefunction(Navigator.prototype["registerProtocolHandler"]);//189
Navigator.prototype["unregisterProtocolHandler"] = function unregisterProtocolHandler(){debugger;}; catvm.safefunction(Navigator.prototype["unregisterProtocolHandler"]);//189
//======	data descriptor func code end	======


//======	access descriptor code start	======

dsf_tmp_context.vendorSub_getter = function vendorSub() {
    return "";
}; catvm.safefunction(dsf_tmp_context.vendorSub_getter);//268
Object.defineProperty(dsf_tmp_context.vendorSub_getter, "name", {
    value: "get vendorSub",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "vendorSub", {
	get: dsf_tmp_context.vendorSub_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.productSub_getter = function productSub() {
    return '20030107';
}; catvm.safefunction(dsf_tmp_context.productSub_getter);//268
Object.defineProperty(dsf_tmp_context.productSub_getter, "name", {
    value: "get productSub",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "productSub", {
	get: dsf_tmp_context.productSub_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.vendor_getter = function vendor() {
    return 'Google Inc.';
}; catvm.safefunction(dsf_tmp_context.vendor_getter);//268
Object.defineProperty(dsf_tmp_context.vendor_getter, "name", {
    value: "get vendor",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "vendor", {
	get: dsf_tmp_context.vendor_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.maxTouchPoints_getter = function maxTouchPoints() {
    return 0;
}; catvm.safefunction(dsf_tmp_context.maxTouchPoints_getter);//268
Object.defineProperty(dsf_tmp_context.maxTouchPoints_getter, "name", {
    value: "get maxTouchPoints",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "maxTouchPoints", {
	get: dsf_tmp_context.maxTouchPoints_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.scheduling_getter = function scheduling() {debugger;}; catvm.safefunction(dsf_tmp_context.scheduling_getter);//268
Object.defineProperty(dsf_tmp_context.scheduling_getter, "name", {
    value: "get scheduling",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "scheduling", {
	get: dsf_tmp_context.scheduling_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.userActivation_getter = function userActivation() {debugger;}; catvm.safefunction(dsf_tmp_context.userActivation_getter);//268
Object.defineProperty(dsf_tmp_context.userActivation_getter, "name", {
    value: "get userActivation",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "userActivation", {
	get: dsf_tmp_context.userActivation_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.doNotTrack_getter = function doNotTrack() {
    return null;
}; catvm.safefunction(dsf_tmp_context.doNotTrack_getter);//268
Object.defineProperty(dsf_tmp_context.doNotTrack_getter, "name", {
    value: "get doNotTrack",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "doNotTrack", {
	get: dsf_tmp_context.doNotTrack_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.geolocation_getter = function geolocation() {debugger;}; catvm.safefunction(dsf_tmp_context.geolocation_getter);//268
Object.defineProperty(dsf_tmp_context.geolocation_getter, "name", {
    value: "get geolocation",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "geolocation", {
	get: dsf_tmp_context.geolocation_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.connection_getter = function connection() {debugger;}; catvm.safefunction(dsf_tmp_context.connection_getter);//268
Object.defineProperty(dsf_tmp_context.connection_getter, "name", {
    value: "get connection",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "connection", {
	get: dsf_tmp_context.connection_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.plugins_getter = function plugins() {
    return catvm.memory.variable.PluginArray.pluginArray;
}; catvm.safefunction(dsf_tmp_context.plugins_getter);//268
Object.defineProperty(dsf_tmp_context.plugins_getter, "name", {
    value: "get plugins",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "plugins", {
	get: dsf_tmp_context.plugins_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.mimeTypes_getter = function mimeTypes() {
    return catvm.memory.variable.MimeTypeArray.mimeTypeArray;
}; catvm.safefunction(dsf_tmp_context.mimeTypes_getter);//268
Object.defineProperty(dsf_tmp_context.mimeTypes_getter, "name", {
    value: "get mimeTypes",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "mimeTypes", {
	get: dsf_tmp_context.mimeTypes_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.pdfViewerEnabled_getter = function pdfViewerEnabled() {debugger;}; catvm.safefunction(dsf_tmp_context.pdfViewerEnabled_getter);//268
Object.defineProperty(dsf_tmp_context.pdfViewerEnabled_getter, "name", {
    value: "get pdfViewerEnabled",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
	get: dsf_tmp_context.pdfViewerEnabled_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.webkitTemporaryStorage_getter = function webkitTemporaryStorage() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitTemporaryStorage_getter);//268
Object.defineProperty(dsf_tmp_context.webkitTemporaryStorage_getter, "name", {
    value: "get webkitTemporaryStorage",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
	get: dsf_tmp_context.webkitTemporaryStorage_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.webkitPersistentStorage_getter = function webkitPersistentStorage() {debugger;}; catvm.safefunction(dsf_tmp_context.webkitPersistentStorage_getter);//268
Object.defineProperty(dsf_tmp_context.webkitPersistentStorage_getter, "name", {
    value: "get webkitPersistentStorage",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
	get: dsf_tmp_context.webkitPersistentStorage_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.hardwareConcurrency_getter = function hardwareConcurrency() {
    return 8;
}; catvm.safefunction(dsf_tmp_context.hardwareConcurrency_getter);//268
Object.defineProperty(dsf_tmp_context.hardwareConcurrency_getter, "name", {
    value: "get hardwareConcurrency",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "hardwareConcurrency", {
	get: dsf_tmp_context.hardwareConcurrency_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.cookieEnabled_getter = function cookieEnabled() {
    return true;
}; catvm.safefunction(dsf_tmp_context.cookieEnabled_getter);//268
Object.defineProperty(dsf_tmp_context.cookieEnabled_getter, "name", {
    value: "get cookieEnabled",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "cookieEnabled", {
	get: dsf_tmp_context.cookieEnabled_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.appCodeName_getter = function appCodeName() {
    return "Mozilla";
}; catvm.safefunction(dsf_tmp_context.appCodeName_getter);//268
Object.defineProperty(dsf_tmp_context.appCodeName_getter, "name", {
    value: "get appCodeName",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "appCodeName", {
	get: dsf_tmp_context.appCodeName_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.appName_getter = function appName() {
    return 'Netscape';
}; catvm.safefunction(dsf_tmp_context.appName_getter);//268
Object.defineProperty(dsf_tmp_context.appName_getter, "name", {
    value: "get appName",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "appName", {
	get: dsf_tmp_context.appName_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.appVersion_getter = function appVersion() {
    return '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36';
}; catvm.safefunction(dsf_tmp_context.appVersion_getter);//268
Object.defineProperty(dsf_tmp_context.appVersion_getter, "name", {
    value: "get appVersion",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "appVersion", {
	get: dsf_tmp_context.appVersion_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.platform_getter = function platform() {
    return "Win32";
}; catvm.safefunction(dsf_tmp_context.platform_getter);//268
Object.defineProperty(dsf_tmp_context.platform_getter, "name", {
    value: "get platform",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "platform", {
	get: dsf_tmp_context.platform_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.product_getter = function product() {
    return 'Gecko';
}; catvm.safefunction(dsf_tmp_context.product_getter);//268
Object.defineProperty(dsf_tmp_context.product_getter, "name", {
    value: "get product",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "product", {
	get: dsf_tmp_context.product_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.userAgent_getter = function userAgent() {
    return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36";
}; catvm.safefunction(dsf_tmp_context.userAgent_getter);//268
Object.defineProperty(dsf_tmp_context.userAgent_getter, "name", {
    value: "get userAgent",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "userAgent", {
	get: dsf_tmp_context.userAgent_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.language_getter = function language() {
    return 'zh-CN';
}; catvm.safefunction(dsf_tmp_context.language_getter);//268
Object.defineProperty(dsf_tmp_context.language_getter, "name", {
    value: "get language",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "language", {
	get: dsf_tmp_context.language_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.languages_getter = function languages() {
    return languages;
}; catvm.safefunction(dsf_tmp_context.languages_getter);//268
Object.defineProperty(dsf_tmp_context.languages_getter, "name", {
    value: "get languages",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "languages", {
	get: dsf_tmp_context.languages_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.onLine_getter = function onLine() {
    return true;
}; catvm.safefunction(dsf_tmp_context.onLine_getter);//268
Object.defineProperty(dsf_tmp_context.onLine_getter, "name", {
    value: "get onLine",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "onLine", {
	get: dsf_tmp_context.onLine_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.webdriver_getter = function webdriver() {
    return false;
}; catvm.safefunction(dsf_tmp_context.webdriver_getter);//268
Object.defineProperty(dsf_tmp_context.webdriver_getter, "name", {
    value: "get webdriver",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "webdriver", {
	get: dsf_tmp_context.webdriver_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.bluetooth_getter = function bluetooth() {debugger;}; catvm.safefunction(dsf_tmp_context.bluetooth_getter);//268
Object.defineProperty(dsf_tmp_context.bluetooth_getter, "name", {
    value: "get bluetooth",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "bluetooth", {
	get: dsf_tmp_context.bluetooth_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.clipboard_getter = function clipboard() {debugger;}; catvm.safefunction(dsf_tmp_context.clipboard_getter);//268
Object.defineProperty(dsf_tmp_context.clipboard_getter, "name", {
    value: "get clipboard",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "clipboard", {
	get: dsf_tmp_context.clipboard_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.credentials_getter = function credentials() {debugger;}; catvm.safefunction(dsf_tmp_context.credentials_getter);//268
Object.defineProperty(dsf_tmp_context.credentials_getter, "name", {
    value: "get credentials",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "credentials", {
	get: dsf_tmp_context.credentials_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.keyboard_getter = function keyboard() {debugger;}; catvm.safefunction(dsf_tmp_context.keyboard_getter);//268
Object.defineProperty(dsf_tmp_context.keyboard_getter, "name", {
    value: "get keyboard",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "keyboard", {
	get: dsf_tmp_context.keyboard_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.managed_getter = function managed() {debugger;}; catvm.safefunction(dsf_tmp_context.managed_getter);//268
Object.defineProperty(dsf_tmp_context.managed_getter, "name", {
    value: "get managed",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "managed", {
	get: dsf_tmp_context.managed_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.mediaDevices_getter = function mediaDevices() {debugger;}; catvm.safefunction(dsf_tmp_context.mediaDevices_getter);//268
Object.defineProperty(dsf_tmp_context.mediaDevices_getter, "name", {
    value: "get mediaDevices",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "mediaDevices", {
	get: dsf_tmp_context.mediaDevices_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.storage_getter = function storage() {debugger;}; catvm.safefunction(dsf_tmp_context.storage_getter);//268
Object.defineProperty(dsf_tmp_context.storage_getter, "name", {
    value: "get storage",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "storage", {
	get: dsf_tmp_context.storage_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.serviceWorker_getter = function serviceWorker() {debugger;}; catvm.safefunction(dsf_tmp_context.serviceWorker_getter);//268
Object.defineProperty(dsf_tmp_context.serviceWorker_getter, "name", {
    value: "get serviceWorker",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "serviceWorker", {
	get: dsf_tmp_context.serviceWorker_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.virtualKeyboard_getter = function virtualKeyboard() {debugger;}; catvm.safefunction(dsf_tmp_context.virtualKeyboard_getter);//268
Object.defineProperty(dsf_tmp_context.virtualKeyboard_getter, "name", {
    value: "get virtualKeyboard",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "virtualKeyboard", {
	get: dsf_tmp_context.virtualKeyboard_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.wakeLock_getter = function wakeLock() {debugger;}; catvm.safefunction(dsf_tmp_context.wakeLock_getter);//268
Object.defineProperty(dsf_tmp_context.wakeLock_getter, "name", {
    value: "get wakeLock",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "wakeLock", {
	get: dsf_tmp_context.wakeLock_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.deviceMemory_getter = function deviceMemory() {debugger;}; catvm.safefunction(dsf_tmp_context.deviceMemory_getter);//268
Object.defineProperty(dsf_tmp_context.deviceMemory_getter, "name", {
    value: "get deviceMemory",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "deviceMemory", {
	get: dsf_tmp_context.deviceMemory_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.ink_getter = function ink() {debugger;}; catvm.safefunction(dsf_tmp_context.ink_getter);//268
Object.defineProperty(dsf_tmp_context.ink_getter, "name", {
    value: "get ink",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "ink", {
	get: dsf_tmp_context.ink_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.hid_getter = function hid() {debugger;}; catvm.safefunction(dsf_tmp_context.hid_getter);//268
Object.defineProperty(dsf_tmp_context.hid_getter, "name", {
    value: "get hid",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "hid", {
	get: dsf_tmp_context.hid_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.locks_getter = function locks() {debugger;}; catvm.safefunction(dsf_tmp_context.locks_getter);//268
Object.defineProperty(dsf_tmp_context.locks_getter, "name", {
    value: "get locks",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "locks", {
	get: dsf_tmp_context.locks_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.mediaCapabilities_getter = function mediaCapabilities() {debugger;}; catvm.safefunction(dsf_tmp_context.mediaCapabilities_getter);//268
Object.defineProperty(dsf_tmp_context.mediaCapabilities_getter, "name", {
    value: "get mediaCapabilities",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "mediaCapabilities", {
	get: dsf_tmp_context.mediaCapabilities_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.mediaSession_getter = function mediaSession() {debugger;}; catvm.safefunction(dsf_tmp_context.mediaSession_getter);//268
Object.defineProperty(dsf_tmp_context.mediaSession_getter, "name", {
    value: "get mediaSession",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "mediaSession", {
	get: dsf_tmp_context.mediaSession_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.permissions_getter = function permissions() {debugger;}; catvm.safefunction(dsf_tmp_context.permissions_getter);//268
Object.defineProperty(dsf_tmp_context.permissions_getter, "name", {
    value: "get permissions",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "permissions", {
	get: dsf_tmp_context.permissions_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.presentation_getter = function presentation() {debugger;}; catvm.safefunction(dsf_tmp_context.presentation_getter);//268
Object.defineProperty(dsf_tmp_context.presentation_getter, "name", {
    value: "get presentation",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "presentation", {
	get: dsf_tmp_context.presentation_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.serial_getter = function serial() {debugger;}; catvm.safefunction(dsf_tmp_context.serial_getter);//268
Object.defineProperty(dsf_tmp_context.serial_getter, "name", {
    value: "get serial",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "serial", {
	get: dsf_tmp_context.serial_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.usb_getter = function usb() {debugger;}; catvm.safefunction(dsf_tmp_context.usb_getter);//268
Object.defineProperty(dsf_tmp_context.usb_getter, "name", {
    value: "get usb",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "usb", {
	get: dsf_tmp_context.usb_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.windowControlsOverlay_getter = function windowControlsOverlay() {debugger;}; catvm.safefunction(dsf_tmp_context.windowControlsOverlay_getter);//268
Object.defineProperty(dsf_tmp_context.windowControlsOverlay_getter, "name", {
    value: "get windowControlsOverlay",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "windowControlsOverlay", {
	get: dsf_tmp_context.windowControlsOverlay_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.xr_getter = function xr() {debugger;}; catvm.safefunction(dsf_tmp_context.xr_getter);//268
Object.defineProperty(dsf_tmp_context.xr_getter, "name", {
    value: "get xr",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "xr", {
	get: dsf_tmp_context.xr_getter,
	enumerable:true,
	configurable:true,
});//305

dsf_tmp_context.userAgentData_getter = function userAgentData() {debugger;}; catvm.safefunction(dsf_tmp_context.userAgentData_getter);//268
Object.defineProperty(dsf_tmp_context.userAgentData_getter, "name", {
    value: "get userAgentData",
    configurable: true
});//274

Object.defineProperty(Navigator.prototype, "userAgentData", {
	get: dsf_tmp_context.userAgentData_getter,
	enumerable:true,
	configurable:true,
});//305

//======	access descriptor code end	======


//======	invocation error prop code start	======
navigator.__defineGetter__("vendorSub",Object.getOwnPropertyDescriptor(Navigator.prototype,"vendorSub").get);
dsf_tmp_context.vendorSub_getter = function vendorSub(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.vendorSub_getter);
Navigator.prototype.__defineGetter__("vendorSub",dsf_tmp_context.vendorSub_getter);//367

navigator.__defineGetter__("productSub",Object.getOwnPropertyDescriptor(Navigator.prototype,"productSub").get);
dsf_tmp_context.productSub_getter = function productSub(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.productSub_getter);
Navigator.prototype.__defineGetter__("productSub",dsf_tmp_context.productSub_getter);//367

navigator.__defineGetter__("vendor",Object.getOwnPropertyDescriptor(Navigator.prototype,"vendor").get);
dsf_tmp_context.vendor_getter = function vendor(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.vendor_getter);
Navigator.prototype.__defineGetter__("vendor",dsf_tmp_context.vendor_getter);//367

navigator.__defineGetter__("maxTouchPoints",Object.getOwnPropertyDescriptor(Navigator.prototype,"maxTouchPoints").get);
dsf_tmp_context.maxTouchPoints_getter = function maxTouchPoints(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.maxTouchPoints_getter);
Navigator.prototype.__defineGetter__("maxTouchPoints",dsf_tmp_context.maxTouchPoints_getter);//367

navigator.__defineGetter__("scheduling",Object.getOwnPropertyDescriptor(Navigator.prototype,"scheduling").get);
dsf_tmp_context.scheduling_getter = function scheduling(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.scheduling_getter);
Navigator.prototype.__defineGetter__("scheduling",dsf_tmp_context.scheduling_getter);//367

navigator.__defineGetter__("userActivation",Object.getOwnPropertyDescriptor(Navigator.prototype,"userActivation").get);
dsf_tmp_context.userActivation_getter = function userActivation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.userActivation_getter);
Navigator.prototype.__defineGetter__("userActivation",dsf_tmp_context.userActivation_getter);//367

navigator.__defineGetter__("doNotTrack",Object.getOwnPropertyDescriptor(Navigator.prototype,"doNotTrack").get);
dsf_tmp_context.doNotTrack_getter = function doNotTrack(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.doNotTrack_getter);
Navigator.prototype.__defineGetter__("doNotTrack",dsf_tmp_context.doNotTrack_getter);//367

navigator.__defineGetter__("geolocation",Object.getOwnPropertyDescriptor(Navigator.prototype,"geolocation").get);
dsf_tmp_context.geolocation_getter = function geolocation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.geolocation_getter);
Navigator.prototype.__defineGetter__("geolocation",dsf_tmp_context.geolocation_getter);//367

navigator.__defineGetter__("connection",Object.getOwnPropertyDescriptor(Navigator.prototype,"connection").get);
dsf_tmp_context.connection_getter = function connection(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.connection_getter);
Navigator.prototype.__defineGetter__("connection",dsf_tmp_context.connection_getter);//367

navigator.__defineGetter__("plugins",Object.getOwnPropertyDescriptor(Navigator.prototype,"plugins").get);
dsf_tmp_context.plugins_getter = function plugins(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.plugins_getter);
Navigator.prototype.__defineGetter__("plugins",dsf_tmp_context.plugins_getter);//367

navigator.__defineGetter__("mimeTypes",Object.getOwnPropertyDescriptor(Navigator.prototype,"mimeTypes").get);
dsf_tmp_context.mimeTypes_getter = function mimeTypes(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.mimeTypes_getter);
Navigator.prototype.__defineGetter__("mimeTypes",dsf_tmp_context.mimeTypes_getter);//367

navigator.__defineGetter__("pdfViewerEnabled",Object.getOwnPropertyDescriptor(Navigator.prototype,"pdfViewerEnabled").get);
dsf_tmp_context.pdfViewerEnabled_getter = function pdfViewerEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.pdfViewerEnabled_getter);
Navigator.prototype.__defineGetter__("pdfViewerEnabled",dsf_tmp_context.pdfViewerEnabled_getter);//367

navigator.__defineGetter__("webkitTemporaryStorage",Object.getOwnPropertyDescriptor(Navigator.prototype,"webkitTemporaryStorage").get);
dsf_tmp_context.webkitTemporaryStorage_getter = function webkitTemporaryStorage(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitTemporaryStorage_getter);
Navigator.prototype.__defineGetter__("webkitTemporaryStorage",dsf_tmp_context.webkitTemporaryStorage_getter);//367

navigator.__defineGetter__("webkitPersistentStorage",Object.getOwnPropertyDescriptor(Navigator.prototype,"webkitPersistentStorage").get);
dsf_tmp_context.webkitPersistentStorage_getter = function webkitPersistentStorage(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webkitPersistentStorage_getter);
Navigator.prototype.__defineGetter__("webkitPersistentStorage",dsf_tmp_context.webkitPersistentStorage_getter);//367

navigator.__defineGetter__("hardwareConcurrency",Object.getOwnPropertyDescriptor(Navigator.prototype,"hardwareConcurrency").get);
dsf_tmp_context.hardwareConcurrency_getter = function hardwareConcurrency(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.hardwareConcurrency_getter);
Navigator.prototype.__defineGetter__("hardwareConcurrency",dsf_tmp_context.hardwareConcurrency_getter);//367

navigator.__defineGetter__("cookieEnabled",Object.getOwnPropertyDescriptor(Navigator.prototype,"cookieEnabled").get);
dsf_tmp_context.cookieEnabled_getter = function cookieEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.cookieEnabled_getter);
Navigator.prototype.__defineGetter__("cookieEnabled",dsf_tmp_context.cookieEnabled_getter);//367

navigator.__defineGetter__("appCodeName",Object.getOwnPropertyDescriptor(Navigator.prototype,"appCodeName").get);
dsf_tmp_context.appCodeName_getter = function appCodeName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.appCodeName_getter);
Navigator.prototype.__defineGetter__("appCodeName",dsf_tmp_context.appCodeName_getter);//367

navigator.__defineGetter__("appName",Object.getOwnPropertyDescriptor(Navigator.prototype,"appName").get);
dsf_tmp_context.appName_getter = function appName(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.appName_getter);
Navigator.prototype.__defineGetter__("appName",dsf_tmp_context.appName_getter);//367

navigator.__defineGetter__("appVersion",Object.getOwnPropertyDescriptor(Navigator.prototype,"appVersion").get);
dsf_tmp_context.appVersion_getter = function appVersion(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.appVersion_getter);
Navigator.prototype.__defineGetter__("appVersion",dsf_tmp_context.appVersion_getter);//367

navigator.__defineGetter__("platform",Object.getOwnPropertyDescriptor(Navigator.prototype,"platform").get);
dsf_tmp_context.platform_getter = function platform(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.platform_getter);
Navigator.prototype.__defineGetter__("platform",dsf_tmp_context.platform_getter);//367

navigator.__defineGetter__("product",Object.getOwnPropertyDescriptor(Navigator.prototype,"product").get);
dsf_tmp_context.product_getter = function product(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.product_getter);
Navigator.prototype.__defineGetter__("product",dsf_tmp_context.product_getter);//367

navigator.__defineGetter__("userAgent",Object.getOwnPropertyDescriptor(Navigator.prototype,"userAgent").get);
dsf_tmp_context.userAgent_getter = function userAgent(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.userAgent_getter);
Navigator.prototype.__defineGetter__("userAgent",dsf_tmp_context.userAgent_getter);//367

navigator.__defineGetter__("language",Object.getOwnPropertyDescriptor(Navigator.prototype,"language").get);
dsf_tmp_context.language_getter = function language(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.language_getter);
Navigator.prototype.__defineGetter__("language",dsf_tmp_context.language_getter);//367

navigator.__defineGetter__("languages",Object.getOwnPropertyDescriptor(Navigator.prototype,"languages").get);
dsf_tmp_context.languages_getter = function languages(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.languages_getter);
Navigator.prototype.__defineGetter__("languages",dsf_tmp_context.languages_getter);//367

navigator.__defineGetter__("onLine",Object.getOwnPropertyDescriptor(Navigator.prototype,"onLine").get);
dsf_tmp_context.onLine_getter = function onLine(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.onLine_getter);
Navigator.prototype.__defineGetter__("onLine",dsf_tmp_context.onLine_getter);//367

navigator.__defineGetter__("webdriver",Object.getOwnPropertyDescriptor(Navigator.prototype,"webdriver").get);
dsf_tmp_context.webdriver_getter = function webdriver(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.webdriver_getter);
Navigator.prototype.__defineGetter__("webdriver",dsf_tmp_context.webdriver_getter);//367

navigator.__defineGetter__("bluetooth",Object.getOwnPropertyDescriptor(Navigator.prototype,"bluetooth").get);
dsf_tmp_context.bluetooth_getter = function bluetooth(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.bluetooth_getter);
Navigator.prototype.__defineGetter__("bluetooth",dsf_tmp_context.bluetooth_getter);//367

navigator.__defineGetter__("clipboard",Object.getOwnPropertyDescriptor(Navigator.prototype,"clipboard").get);
dsf_tmp_context.clipboard_getter = function clipboard(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.clipboard_getter);
Navigator.prototype.__defineGetter__("clipboard",dsf_tmp_context.clipboard_getter);//367

navigator.__defineGetter__("credentials",Object.getOwnPropertyDescriptor(Navigator.prototype,"credentials").get);
dsf_tmp_context.credentials_getter = function credentials(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.credentials_getter);
Navigator.prototype.__defineGetter__("credentials",dsf_tmp_context.credentials_getter);//367

navigator.__defineGetter__("keyboard",Object.getOwnPropertyDescriptor(Navigator.prototype,"keyboard").get);
dsf_tmp_context.keyboard_getter = function keyboard(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.keyboard_getter);
Navigator.prototype.__defineGetter__("keyboard",dsf_tmp_context.keyboard_getter);//367

navigator.__defineGetter__("managed",Object.getOwnPropertyDescriptor(Navigator.prototype,"managed").get);
dsf_tmp_context.managed_getter = function managed(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.managed_getter);
Navigator.prototype.__defineGetter__("managed",dsf_tmp_context.managed_getter);//367

navigator.__defineGetter__("mediaDevices",Object.getOwnPropertyDescriptor(Navigator.prototype,"mediaDevices").get);
dsf_tmp_context.mediaDevices_getter = function mediaDevices(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.mediaDevices_getter);
Navigator.prototype.__defineGetter__("mediaDevices",dsf_tmp_context.mediaDevices_getter);//367

navigator.__defineGetter__("storage",Object.getOwnPropertyDescriptor(Navigator.prototype,"storage").get);
dsf_tmp_context.storage_getter = function storage(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.storage_getter);
Navigator.prototype.__defineGetter__("storage",dsf_tmp_context.storage_getter);//367

navigator.__defineGetter__("serviceWorker",Object.getOwnPropertyDescriptor(Navigator.prototype,"serviceWorker").get);
dsf_tmp_context.serviceWorker_getter = function serviceWorker(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.serviceWorker_getter);
Navigator.prototype.__defineGetter__("serviceWorker",dsf_tmp_context.serviceWorker_getter);//367

navigator.__defineGetter__("virtualKeyboard",Object.getOwnPropertyDescriptor(Navigator.prototype,"virtualKeyboard").get);
dsf_tmp_context.virtualKeyboard_getter = function virtualKeyboard(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.virtualKeyboard_getter);
Navigator.prototype.__defineGetter__("virtualKeyboard",dsf_tmp_context.virtualKeyboard_getter);//367

navigator.__defineGetter__("wakeLock",Object.getOwnPropertyDescriptor(Navigator.prototype,"wakeLock").get);
dsf_tmp_context.wakeLock_getter = function wakeLock(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.wakeLock_getter);
Navigator.prototype.__defineGetter__("wakeLock",dsf_tmp_context.wakeLock_getter);//367

navigator.__defineGetter__("deviceMemory",Object.getOwnPropertyDescriptor(Navigator.prototype,"deviceMemory").get);
dsf_tmp_context.deviceMemory_getter = function deviceMemory(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.deviceMemory_getter);
Navigator.prototype.__defineGetter__("deviceMemory",dsf_tmp_context.deviceMemory_getter);//367

navigator.__defineGetter__("ink",Object.getOwnPropertyDescriptor(Navigator.prototype,"ink").get);
dsf_tmp_context.ink_getter = function ink(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.ink_getter);
Navigator.prototype.__defineGetter__("ink",dsf_tmp_context.ink_getter);//367

navigator.__defineGetter__("hid",Object.getOwnPropertyDescriptor(Navigator.prototype,"hid").get);
dsf_tmp_context.hid_getter = function hid(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.hid_getter);
Navigator.prototype.__defineGetter__("hid",dsf_tmp_context.hid_getter);//367

navigator.__defineGetter__("locks",Object.getOwnPropertyDescriptor(Navigator.prototype,"locks").get);
dsf_tmp_context.locks_getter = function locks(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.locks_getter);
Navigator.prototype.__defineGetter__("locks",dsf_tmp_context.locks_getter);//367

navigator.__defineGetter__("mediaCapabilities",Object.getOwnPropertyDescriptor(Navigator.prototype,"mediaCapabilities").get);
dsf_tmp_context.mediaCapabilities_getter = function mediaCapabilities(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.mediaCapabilities_getter);
Navigator.prototype.__defineGetter__("mediaCapabilities",dsf_tmp_context.mediaCapabilities_getter);//367

navigator.__defineGetter__("mediaSession",Object.getOwnPropertyDescriptor(Navigator.prototype,"mediaSession").get);
dsf_tmp_context.mediaSession_getter = function mediaSession(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.mediaSession_getter);
Navigator.prototype.__defineGetter__("mediaSession",dsf_tmp_context.mediaSession_getter);//367

navigator.__defineGetter__("permissions",Object.getOwnPropertyDescriptor(Navigator.prototype,"permissions").get);
dsf_tmp_context.permissions_getter = function permissions(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.permissions_getter);
Navigator.prototype.__defineGetter__("permissions",dsf_tmp_context.permissions_getter);//367

navigator.__defineGetter__("presentation",Object.getOwnPropertyDescriptor(Navigator.prototype,"presentation").get);
dsf_tmp_context.presentation_getter = function presentation(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.presentation_getter);
Navigator.prototype.__defineGetter__("presentation",dsf_tmp_context.presentation_getter);//367

navigator.__defineGetter__("serial",Object.getOwnPropertyDescriptor(Navigator.prototype,"serial").get);
dsf_tmp_context.serial_getter = function serial(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.serial_getter);
Navigator.prototype.__defineGetter__("serial",dsf_tmp_context.serial_getter);//367

navigator.__defineGetter__("usb",Object.getOwnPropertyDescriptor(Navigator.prototype,"usb").get);
dsf_tmp_context.usb_getter = function usb(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.usb_getter);
Navigator.prototype.__defineGetter__("usb",dsf_tmp_context.usb_getter);//367

navigator.__defineGetter__("windowControlsOverlay",Object.getOwnPropertyDescriptor(Navigator.prototype,"windowControlsOverlay").get);
dsf_tmp_context.windowControlsOverlay_getter = function windowControlsOverlay(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.windowControlsOverlay_getter);
Navigator.prototype.__defineGetter__("windowControlsOverlay",dsf_tmp_context.windowControlsOverlay_getter);//367

navigator.__defineGetter__("xr",Object.getOwnPropertyDescriptor(Navigator.prototype,"xr").get);
dsf_tmp_context.xr_getter = function xr(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.xr_getter);
Navigator.prototype.__defineGetter__("xr",dsf_tmp_context.xr_getter);//367

navigator.__defineGetter__("userAgentData",Object.getOwnPropertyDescriptor(Navigator.prototype,"userAgentData").get);
dsf_tmp_context.userAgentData_getter = function userAgentData(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(dsf_tmp_context.userAgentData_getter);
Navigator.prototype.__defineGetter__("userAgentData",dsf_tmp_context.userAgentData_getter);//367

//======	invocation error prop code end	======
//======	invocation error func code start	======
catvm.memory.variable.Navigator.__function_getGamepads = Object.getOwnPropertyDescriptor(Navigator.prototype,"getGamepads").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_getGamepads);
navigator.__defineGetter__("getGamepads",function getGamepads(){return catvm.memory.variable.Navigator.__function_getGamepads;});
Navigator.prototype["getGamepads"] = function getGamepads(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["getGamepads"]);//408

catvm.memory.variable.Navigator.__function_javaEnabled = Object.getOwnPropertyDescriptor(Navigator.prototype,"javaEnabled").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_javaEnabled);
navigator.__defineGetter__("javaEnabled",function javaEnabled(){return catvm.memory.variable.Navigator.__function_javaEnabled;});
Navigator.prototype["javaEnabled"] = function javaEnabled(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["javaEnabled"]);//408

catvm.memory.variable.Navigator.__function_sendBeacon = Object.getOwnPropertyDescriptor(Navigator.prototype,"sendBeacon").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_sendBeacon);
navigator.__defineGetter__("sendBeacon",function sendBeacon(){return catvm.memory.variable.Navigator.__function_sendBeacon;});
Navigator.prototype["sendBeacon"] = function sendBeacon(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["sendBeacon"]);//408

catvm.memory.variable.Navigator.__function_vibrate = Object.getOwnPropertyDescriptor(Navigator.prototype,"vibrate").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_vibrate);
navigator.__defineGetter__("vibrate",function vibrate(){return catvm.memory.variable.Navigator.__function_vibrate;});
Navigator.prototype["vibrate"] = function vibrate(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["vibrate"]);//408

catvm.memory.variable.Navigator.__function_canShare = Object.getOwnPropertyDescriptor(Navigator.prototype,"canShare").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_canShare);
navigator.__defineGetter__("canShare",function canShare(){return catvm.memory.variable.Navigator.__function_canShare;});
Navigator.prototype["canShare"] = function canShare(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["canShare"]);//408

catvm.memory.variable.Navigator.__function_getUserMedia = Object.getOwnPropertyDescriptor(Navigator.prototype,"getUserMedia").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_getUserMedia);
navigator.__defineGetter__("getUserMedia",function getUserMedia(){return catvm.memory.variable.Navigator.__function_getUserMedia;});
Navigator.prototype["getUserMedia"] = function getUserMedia(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["getUserMedia"]);//408

catvm.memory.variable.Navigator.__function_webkitGetUserMedia = Object.getOwnPropertyDescriptor(Navigator.prototype,"webkitGetUserMedia").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_webkitGetUserMedia);
navigator.__defineGetter__("webkitGetUserMedia",function webkitGetUserMedia(){return catvm.memory.variable.Navigator.__function_webkitGetUserMedia;});
Navigator.prototype["webkitGetUserMedia"] = function webkitGetUserMedia(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["webkitGetUserMedia"]);//408

catvm.memory.variable.Navigator.__function_registerProtocolHandler = Object.getOwnPropertyDescriptor(Navigator.prototype,"registerProtocolHandler").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_registerProtocolHandler);
navigator.__defineGetter__("registerProtocolHandler",function registerProtocolHandler(){return catvm.memory.variable.Navigator.__function_registerProtocolHandler;});
Navigator.prototype["registerProtocolHandler"] = function registerProtocolHandler(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["registerProtocolHandler"]);//408

catvm.memory.variable.Navigator.__function_unregisterProtocolHandler = Object.getOwnPropertyDescriptor(Navigator.prototype,"unregisterProtocolHandler").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_unregisterProtocolHandler);
navigator.__defineGetter__("unregisterProtocolHandler",function unregisterProtocolHandler(){return catvm.memory.variable.Navigator.__function_unregisterProtocolHandler;});
Navigator.prototype["unregisterProtocolHandler"] = function unregisterProtocolHandler(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["unregisterProtocolHandler"]);//408

catvm.memory.variable.Navigator.__function_share = Object.getOwnPropertyDescriptor(Navigator.prototype,"share").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_share);
navigator.__defineGetter__("share",function share(){return catvm.memory.variable.Navigator.__function_share;});
Navigator.prototype["share"] = function share(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["share"]);//408

catvm.memory.variable.Navigator.__function_clearAppBadge = Object.getOwnPropertyDescriptor(Navigator.prototype,"clearAppBadge").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_clearAppBadge);
navigator.__defineGetter__("clearAppBadge",function clearAppBadge(){return catvm.memory.variable.Navigator.__function_clearAppBadge;});
Navigator.prototype["clearAppBadge"] = function clearAppBadge(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["clearAppBadge"]);//408

catvm.memory.variable.Navigator.__function_requestMIDIAccess = Object.getOwnPropertyDescriptor(Navigator.prototype,"requestMIDIAccess").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_requestMIDIAccess);
navigator.__defineGetter__("requestMIDIAccess",function requestMIDIAccess(){return catvm.memory.variable.Navigator.__function_requestMIDIAccess;});
Navigator.prototype["requestMIDIAccess"] = function requestMIDIAccess(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["requestMIDIAccess"]);//408

catvm.memory.variable.Navigator.__function_requestMediaKeySystemAccess = Object.getOwnPropertyDescriptor(Navigator.prototype,"requestMediaKeySystemAccess").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_requestMediaKeySystemAccess);
navigator.__defineGetter__("requestMediaKeySystemAccess",function requestMediaKeySystemAccess(){return catvm.memory.variable.Navigator.__function_requestMediaKeySystemAccess;});
Navigator.prototype["requestMediaKeySystemAccess"] = function requestMediaKeySystemAccess(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["requestMediaKeySystemAccess"]);//408

catvm.memory.variable.Navigator.__function_setAppBadge = Object.getOwnPropertyDescriptor(Navigator.prototype,"setAppBadge").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_setAppBadge);
navigator.__defineGetter__("setAppBadge",function setAppBadge(){return catvm.memory.variable.Navigator.__function_setAppBadge;});
Navigator.prototype["setAppBadge"] = function setAppBadge(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["setAppBadge"]);//408

catvm.memory.variable.Navigator.__function_getBattery = Object.getOwnPropertyDescriptor(Navigator.prototype,"getBattery").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_getBattery);
navigator.__defineGetter__("getBattery",function getBattery(){return catvm.memory.variable.Navigator.__function_getBattery;});
Navigator.prototype["getBattery"] = function getBattery(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["getBattery"]);//408

catvm.memory.variable.Navigator.__function_getInstalledRelatedApps = Object.getOwnPropertyDescriptor(Navigator.prototype,"getInstalledRelatedApps").value; catvm.safefunction(catvm.memory.variable.Navigator.__function_getInstalledRelatedApps);
navigator.__defineGetter__("getInstalledRelatedApps",function getInstalledRelatedApps(){return catvm.memory.variable.Navigator.__function_getInstalledRelatedApps;});
Navigator.prototype["getInstalledRelatedApps"] = function getInstalledRelatedApps(){throw catvm.memory.tool_funcs.get_invocation_error();}; catvm.safefunction(Navigator.prototype["getInstalledRelatedApps"]);//408

//======	invocation error func code end	======

// 无法对此属性进行proxy
//navigator.plugins = catvm.proxy(navigator.plugins);
Navigator = catvm.proxy(Navigator);
navigator = catvm.proxy(navigator);

if(catvm.memory.config.framework_debugger){debugger;}
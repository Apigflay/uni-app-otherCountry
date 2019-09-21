const CryptoJS = require('../crypto-js/crypto-js.js');  //引用AES源码js
/**
 * 加密（）
 * @param word
 * @returns {*}
 */
export function encrypt(word){
	var key = CryptoJS.enc.Utf8.parse("hangzhoutiangekeji9158miaobolive");
	var srcs = CryptoJS.enc.Utf8.parse(word);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return encrypted.toString();
}
/**
 * 解密
 * @param word
 * @returns {*}
 */
export function decrypt(word){
	var key = CryptoJS.enc.Utf8.parse("hangzhoutiangekeji9158miaobolive");
	var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
/**
 * 判断系统类型
 * @param null
 * @returns android or ios
 */
export function system(){
	var ios = 'ios';
	var android = 'android';
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
	   //这个是安卓操作系统
	   return android;
	}
	if (isIOS) {
	　　//这个是ios操作系统
		return ios;
	}
}
/**
 * 判断设备号
 * @param word
 * @returns {*}
 */
export function systemId(){
	var canvas = document.createElement('canvas'),
	gl = canvas.getContext('experimental-webgl'),
	debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
	//console.log(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
	return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}
/**
 * 转二进制流
 * @param base64
 * @returns [*]
 */
export function base64ToArrayBuffer(base64) {
	var binaryString = window.atob(base64);
	var binaryLen = binaryString.length;
	var bytes = new Uint8Array(binaryLen);
	for (var i = 0; i < binaryLen; i++) {
		var ascii = binaryString.charCodeAt(i);
		bytes[i] = ascii;
	}
	return bytes;
}
 /**
  * 二进制流传输
  * @param base64
  * @returns [*]
  */
 export function sendData(type,url,array){
	var xhr = new XMLHttpRequest;
	xhr.open(type,url, false);
	xhr.send(array);
	return xhr.responseText;//or response
 }
  /**
  * socket通信转流
  * @param string
  * @returns [*]
  */
 export function fillstr2ab(str, buf, offset) {
 	var uint8array = new TextEncoder().encode(str);
 	var strLen = uint8array.length;
 	var bufView = new Uint8Array(buf, offset, strLen);
 	for (var i = 0; i < strLen; i++) {
 		bufView[i] = uint8array[i];
 	}
}
export function sendD(content) {
 	var len = content.length
 	//=========================
 	var bufferRes = new ArrayBuffer(12 + len);
 	var Head = new Int32Array(bufferRes, 0, 3);
 	Head[0] = 12 + len; //len
 	Head[1] = 10001;   //cmd
 	fillstr2ab(content, bufferRes,12);
 	return bufferRes;
}
  /**
  * 流转string
  * @param Blob
  * @returns [string]
  */

 
 
 
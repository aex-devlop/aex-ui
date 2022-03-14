'use strict';

exports.__esModule = true;
/**
 * @description 获取cdn 链接
 * @param {string} CDNUrl cdn 链接
 * @param {string} name 文件声明的全局变量名
 * @return {promise}
 */

var importCDN = exports.importCDN = function importCDN(CDNUrl, name) {
	return new Promise(function (resolve) {
		if (!!name) {
			if (!!document.getElementById(name)) {
				resolve(window[name]);
			} else {
				var dom = document.createElement('script');
				dom.src = CDNUrl;
				dom.id = name;
				dom.type = 'text/javascript';
				dom.onload = function () {
					resolve(window[name]);
				};
				document.head.appendChild(dom);
			}
		} else {
			var _dom = document.createElement('script');
			_dom.src = CDNUrl;
			_dom.type = 'text/javascript';
			_dom.onload = function () {
				resolve();
			};
			document.head.appendChild(_dom);
		}
	});
};
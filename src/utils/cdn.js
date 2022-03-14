/**
 * @description 获取cdn 链接
 * @param {string} CDNUrl cdn 链接
 * @param {string} name 文件声明的全局变量名
 * @return {promise}
 */

export const importCDN = (CDNUrl, name) => {
	return new Promise((resolve) => {
		if (!!name) {
			if (!!document.getElementById(name)) {
				resolve(window[name]);
			} else {
				const dom = document.createElement('script');
				dom.src = CDNUrl;
				dom.id = name;
				dom.type = 'text/javascript';
				dom.onload = () => {
					resolve(window[name]);
				};
				document.head.appendChild(dom);
			}
		} else {
			const dom = document.createElement('script');
			dom.src = CDNUrl;
			dom.type = 'text/javascript';
			dom.onload = () => {
				resolve();
			};
			document.head.appendChild(dom);
		}
	});
};

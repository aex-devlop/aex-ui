/**
 * @description 获取url里的参数
 * @param {string} key 参数名字
 * @return {string}
 * @example http://aex.uidoc.com?aex-lang=zh-CN --> zh-CN
 */

export const getUrlParam = (key) => {
	let reg = new RegExp(`${key}=([^&]*)`, 'i');
	let _match = location.href.match(reg);
	return _match ? _match[1] : null;
};

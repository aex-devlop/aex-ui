import { getCookie } from './util';
/**
 * @description 把有可能是科学技术法的数字转换为 数字字符串
 * @param {string | Number} num
 * @returns {string}
 * @example 9.2e-7 --> 0.00000092
 */
export const exponentToNumber = (num) => {
	if (isNaN(num)) {
		console.warn(`exponentialToNum 转换失败: ${num} 参数非数字格式！`);
		return 0;
	}
	var m = Number(num)
		.toExponential()
		.match(/\d(?:\.(\d*))?e([+-]\d+)/);
	return Number(num).toFixed(Math.max(0, (m[1] || '').length - m[2]));
};

/**
 * @description 去掉小数位多余的0
 * @param {String} number 要处理的数字字符串
 * @return {string}
 */
export const clearzero = (number) => {
	return `${number}`.replace(/(?:\.0*|(\.\d+?)0+)$/, '$1');
};

/**
 * @description 小数位处理 少则补0多则截取, 包含了科学计数的处理
 * @param {string} number 要处理的数字字符串
 * @param {string} digits 要保留的位数
 * @param {boolean} isFill 是否要自动补0 默认true
 * @return {string}
 */
export const zeroize = (number, digits, isFill = true) => {
	if (isNaN(number)) {
		console.warn(`zeroize 转换失败: ${number} 参数非数字格式！`);
		return digits > 0 ? `0.${'0'.repeat(digits)}` : 0;
	}
	let _number = exponentToNumber(number);
	if (`${_number}`.indexOf('.') == -1) {
		if (isFill && digits > 0) {
			return `${_number}.${'0'.repeat(digits)}`;
		}
		return _number;
	}
	return `${_number}`.replace(/(\d+)\.(\d+)/, (all, $1, $2) => {
		if (digits <= 0) return $1;
		const len = digits - $2.length;
		const point = len > 0 ? `${$2}${isFill ? '0'.repeat(len) : ''}` : $2.slice(0, digits);
		return `${$1}.${point}`;
	});
};

/**
 * @description 把数字转换为千分位分割
 * @param {string | Number } num 要转换的数字或数字字符串
 * @param {string } [lang] 要根据语言区分 分隔符, 例如 vi-VN 转换后  1.222.33,05，默认null 直接从Cookie 里获取 AEX_language
 * @returns {string}
 * @example 1234567.89 --> 1,234,567.89
 */
export const thousands = (num, lang) => {
	let separator = [',', '.'];
	let _lang = lang || getCookie('AEX_language');
	if (_lang && _lang == 'vi-VN') {
		separator.reverse();
	}
	var parts = num.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator[0]);
	return parts.join(separator[1]);
};

'use strict';

exports.__esModule = true;
exports.getDeviceInfo = exports.isMobile = exports.isPC = exports.isPhone = exports.isTablet = exports.isSymbian = exports.isWindowsPhone = exports.isChrome = exports.isFirefox = exports.isEdge = exports.isIE = exports.isAndroid = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoMap = {
	engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
	browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat',, 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
	os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
	device: ['Mobile', 'Tablet', 'iPad']
};
var root = typeof self !== 'undefined' ? self : undefined;
var _window = root || {};
var navigator = !_vue2.default.prototype.$isServer && typeof root.navigator != 'undefined' ? root.navigator : {};
var ua = !_vue2.default.prototype.$isServer && (navigator.userAgent || {});
var isAndroid = exports.isAndroid = ua && !!ua.match(/Android/i);

var isIE = exports.isIE = !_vue2.default.prototype.$isServer && !isNaN(Number(document.documentMode));

var isEdge = exports.isEdge = ua && ua.indexOf('Edge') > -1;

var isFirefox = exports.isFirefox = ua && !!ua.match(/Firefox/i);

var isChrome = exports.isChrome = ua && !!ua.match(/Chrome|CriOS/i);
var isWindowsPhone = exports.isWindowsPhone = ua && !!ua.match(/Windows Phone/i);
var isSymbian = exports.isSymbian = ua && (!!ua.match(/SymbianOS/i) || isWindowsPhone);
var isTablet = exports.isTablet = ua && (!!ua.match(/iPad|PlayBook/i) || isAndroid && !ua.match(/Mobile/i) || isFirefox && !!ua.match(/Tablet/i));
var isPhone = exports.isPhone = ua && !!ua.match(/iPhone/i) && !isTablet;

var isPC = exports.isPC = !isPhone && !isAndroid && !isSymbian;
var isMobile = exports.isMobile = ua && !!ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

// 获取匹配
var getMatchMap = function getMatchMap() {
	return {
		// 内核
		Trident: ua.indexOf('Trident') > -1 || ua.indexOf('NET CLR') > -1,
		Presto: ua.indexOf('Presto') > -1,
		WebKit: ua.indexOf('AppleWebKit') > -1,
		Gecko: ua.indexOf('Gecko/') > -1,
		// 浏览器
		Safari: ua.indexOf('Safari') > -1,
		Chrome: ua.indexOf('Chrome') > -1 || ua.indexOf('CriOS') > -1,
		IE: ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1,
		Edge: ua.indexOf('Edge') > -1,
		Firefox: ua.indexOf('Firefox') > -1 || ua.indexOf('FxiOS') > -1,
		'Firefox Focus': ua.indexOf('Focus') > -1,
		Chromium: ua.indexOf('Chromium') > -1,
		Opera: ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1,
		Vivaldi: ua.indexOf('Vivaldi') > -1,
		Yandex: ua.indexOf('YaBrowser') > -1,
		Arora: ua.indexOf('Arora') > -1,
		Lunascape: ua.indexOf('Lunascape') > -1,
		QupZilla: ua.indexOf('QupZilla') > -1,
		'Coc Coc': ua.indexOf('coc_coc_browser') > -1,
		Kindle: ua.indexOf('Kindle') > -1 || ua.indexOf('Silk/') > -1,
		Iceweasel: ua.indexOf('Iceweasel') > -1,
		Konqueror: ua.indexOf('Konqueror') > -1,
		Iceape: ua.indexOf('Iceape') > -1,
		SeaMonkey: ua.indexOf('SeaMonkey') > -1,
		Epiphany: ua.indexOf('Epiphany') > -1,
		360: ua.indexOf('QihooBrowser') > -1 || ua.indexOf('QHBrowser') > -1,
		'360EE': ua.indexOf('360EE') > -1,
		'360SE': ua.indexOf('360SE') > -1,
		UC: ua.indexOf('UC') > -1 || ua.indexOf(' UBrowser') > -1,
		QQBrowser: ua.indexOf('QQBrowser') > -1,
		QQ: ua.indexOf('QQ/') > -1,
		Baidu: ua.indexOf('Baidu') > -1 || ua.indexOf('BIDUBrowser') > -1,
		Maxthon: ua.indexOf('Maxthon') > -1,
		Sogou: ua.indexOf('MetaSr') > -1 || ua.indexOf('Sogou') > -1,
		LBBROWSER: ua.indexOf('LBBROWSER') > -1 || ua.indexOf('LieBaoFast') > -1,
		'2345Explorer': ua.indexOf('2345Explorer') > -1,
		TheWorld: ua.indexOf('TheWorld') > -1,
		XiaoMi: ua.indexOf('MiuiBrowser') > -1,
		Quark: ua.indexOf('Quark') > -1,
		Qiyu: ua.indexOf('Qiyu') > -1,
		Wechat: ua.indexOf('MicroMessenger') > -1,
		WechatWork: ua.indexOf('wxwork/') > -1,
		Taobao: ua.indexOf('AliApp(TB') > -1,
		Alipay: ua.indexOf('AliApp(AP') > -1,
		Weibo: ua.indexOf('Weibo') > -1,
		Douban: ua.indexOf('com.douban.frodo') > -1,
		Suning: ua.indexOf('SNEBUY-APP') > -1,
		iQiYi: ua.indexOf('IqiyiApp') > -1,
		// 系统或平台
		Windows: ua.indexOf('Windows') > -1,
		Linux: ua.indexOf('Linux') > -1 || ua.indexOf('X11') > -1,
		'Mac OS': ua.indexOf('Macintosh') > -1,
		Android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1,
		Ubuntu: ua.indexOf('Ubuntu') > -1,
		FreeBSD: ua.indexOf('FreeBSD') > -1,
		Debian: ua.indexOf('Debian') > -1,
		'Windows Phone': ua.indexOf('IEMobile') > -1 || ua.indexOf('Windows Phone') > -1,
		BlackBerry: ua.indexOf('BlackBerry') > -1 || ua.indexOf('RIM') > -1,
		MeeGo: ua.indexOf('MeeGo') > -1,
		Symbian: ua.indexOf('Symbian') > -1,
		iOS: ua.indexOf('like Mac OS X') > -1,
		'Chrome OS': ua.indexOf('CrOS') > -1,
		WebOS: ua.indexOf('hpwOS') > -1,
		// 设备
		Mobile: ua.indexOf('Mobi') > -1 || ua.indexOf('iPh') > -1 || ua.indexOf('480') > -1,
		Tablet: ua.indexOf('Tablet') > -1 || ua.indexOf('Nexus 7') > -1,
		iPad: ua.indexOf('iPad') > -1
	};
};

var matchInfoMap = function matchInfoMap() {
	var _match = getMatchMap();
	var obj = {};
	for (var s in infoMap) {
		for (var i = 0; i < infoMap[s].length; i++) {
			var value = infoMap[s][i];
			if (_match[value]) {
				obj[s] = value;
			}
		}
	}
	obj.device = obj.device || 'PC';
	return obj;
};

// 获取操作系统版本
var getOSVersion = function getOSVersion(os) {
	var _osVersion = '';
	// 系统版本信息
	var osVersion = {
		Windows: function Windows() {
			var v = ua.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
			var oldWindowsVersionMap = {
				6.4: '10',
				6.3: '8.1',
				6.2: '8',
				6.1: '7',
				'6.0': 'Vista',
				5.2: 'XP',
				5.1: 'XP',
				'5.0': '2000'
			};
			return oldWindowsVersionMap[v] || v;
		},
		Android: function Android() {
			return ua.replace(/^.*Android ([\d.]+);.*$/, '$1');
		},
		iOS: function iOS() {
			return ua.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
		},
		Debian: function Debian() {
			return ua.replace(/^.*Debian\/([\d.]+).*$/, '$1');
		},
		'Windows Phone': function WindowsPhone() {
			return ua.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
		},
		'Mac OS': function MacOS() {
			return ua.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
		},
		WebOS: function WebOS() {
			return ua.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
		}
	};
	if (osVersion[os]) {
		_osVersion = osVersion[os]();
		if (_osVersion == ua) {
			_osVersion = '';
		}
	}
	return _osVersion;
};

// 获取横竖屏状态
var getOrientationStatu = function getOrientationStatu() {
	var orientationStatus = '';
	var orientation = window.matchMedia('(orientation: portrait)');
	if (orientation.matches) {
		orientationStatus = '竖屏';
	} else {
		orientationStatus = '横屏';
	}
	return orientationStatus;
};

var getBrowserInfo = function getBrowserInfo(baseInfo) {
	var _mime = function _mime(option, value) {
		var mimeTypes = navigator.mimeTypes;
		for (var key in mimeTypes) {
			if (mimeTypes[key][option] == value) {
				return true;
			}
		}
		return false;
	};

	var match = getMatchMap();
	var is360 = false;
	if (_window.chrome) {
		var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
		if (chrome_version > 36 && _window.showModalDialog) {
			is360 = true;
		} else if (chrome_version > 45) {
			is360 = _mime('type', 'application/vnd.chromium.remoting-viewer');
		}
	}
	if (match['Baidu'] && match['Opera']) {
		match['Baidu'] = false;
	}
	if (match['Mobile']) {
		match['Mobile'] = !(ua.indexOf('iPad') > -1);
	}
	if (is360) {
		if (_mime('type', 'application/gameplugin')) {
			match['360SE'] = true;
		} else if (navigator && typeof navigator['connection']['saveData'] == 'undefined') {
			match['360SE'] = true;
		} else {
			match['360EE'] = true;
		}
	}
	if (match['IE'] || match['Edge']) {
		var navigator_top = window.screenTop - window.screenY;
		switch (navigator_top) {
			case 71:
				// 无收藏栏,贴边
				break;
			case 74:
				// 无收藏栏,非贴边
				break;
			case 99:
				// 有收藏栏,贴边
				break;
			case 102:
				// 有收藏栏,非贴边
				match['360EE'] = true;
				break;
			case 75:
				// 无收藏栏,贴边
				break;
			case 74:
				// 无收藏栏,非贴边
				break;
			case 105:
				// 有收藏栏,贴边
				break;
			case 104:
				// 有收藏栏,非贴边
				match['360SE'] = true;
				break;
			default:
				break;
		}
	}

	var browerVersionMap = {
		Safari: function Safari() {
			return ua.replace(/^.*Version\/([\d.]+).*$/, '$1');
		},
		Chrome: function Chrome() {
			return ua.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
		},
		IE: function IE() {
			return ua.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
		},
		Edge: function Edge() {
			return ua.replace(/^.*Edge\/([\d.]+).*$/, '$1');
		},
		Firefox: function Firefox() {
			return ua.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
		},
		'Firefox Focus': function FirefoxFocus() {
			return ua.replace(/^.*Focus\/([\d.]+).*$/, '$1');
		},
		Chromium: function Chromium() {
			return ua.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
		},
		Opera: function Opera() {
			return ua.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
		},
		Vivaldi: function Vivaldi() {
			return ua.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
		},
		Yandex: function Yandex() {
			return ua.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
		},
		Arora: function Arora() {
			return ua.replace(/^.*Arora\/([\d.]+).*$/, '$1');
		},
		Lunascape: function Lunascape() {
			return ua.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
		},
		QupZilla: function QupZilla() {
			return ua.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
		},
		'Coc Coc': function CocCoc() {
			return ua.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
		},
		Kindle: function Kindle() {
			return ua.replace(/^.*Version\/([\d.]+).*$/, '$1');
		},
		Iceweasel: function Iceweasel() {
			return ua.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
		},
		Konqueror: function Konqueror() {
			return ua.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
		},
		Iceape: function Iceape() {
			return ua.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
		},
		SeaMonkey: function SeaMonkey() {
			return ua.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
		},
		Epiphany: function Epiphany() {
			return ua.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
		},
		360: function _() {
			return ua.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
		},
		'360SE': function SE() {
			var hash = { 63: '10.0', 55: '9.1', 45: '8.1', 42: '8.0', 31: '7.0', 21: '6.3' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return hash[chrome_version] || '';
		},
		'360EE': function EE() {
			var hash = { 69: '11.0', 63: '9.5', 55: '9.0', 50: '8.7', 30: '7.5' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return hash[chrome_version] || '';
		},
		Maxthon: function Maxthon() {
			return ua.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
		},
		QQBrowser: function QQBrowser() {
			return ua.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
		},
		QQ: function QQ() {
			return ua.replace(/^.*QQ\/([\d.]+).*$/, '$1');
		},
		Baidu: function Baidu() {
			return ua.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
		},
		UC: function UC() {
			return ua.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
		},
		Sogou: function Sogou() {
			return ua.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
		},
		LBBROWSER: function LBBROWSER() {
			var version = '';
			if (ua.indexOf('LieBaoFast') > -1) {
				version = ua.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
			}
			var hash = { 57: '6.5', 49: '6.0', 46: '5.9', 42: '5.3', 39: '5.2', 34: '5.0', 29: '4.5', 21: '4.0' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return version || hash[chrome_version] || '';
		},
		'2345Explorer': function Explorer() {
			return ua.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
		},
		TheWorld: function TheWorld() {
			return ua.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
		},
		XiaoMi: function XiaoMi() {
			return ua.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
		},
		Quark: function Quark() {
			return ua.replace(/^.*Quark\/([\d.]+).*$/, '$1');
		},
		Qiyu: function Qiyu() {
			return ua.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
		},
		Wechat: function Wechat() {
			return ua.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
		},
		WechatWork: function WechatWork() {
			return ua.replace(/^.*wxwork\/([\d.]+).*$/, '$1');
		},
		Taobao: function Taobao() {
			return ua.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
		},
		Alipay: function Alipay() {
			return ua.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
		},
		Weibo: function Weibo() {
			return ua.replace(/^.*weibo__([\d.]+).*$/, '$1');
		},
		Douban: function Douban() {
			return ua.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
		},
		Suning: function Suning() {
			return ua.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
		},
		iQiYi: function iQiYi() {
			return ua.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
		}
	};
	var browserVersion = '';
	if (browerVersionMap[baseInfo.browser]) {
		browserVersion = browerVersionMap[baseInfo.browser]();
		if (browserVersion == ua) {
			browserVersion = '';
		}
	}
	if (baseInfo.browser == 'Chrome' && ua.match(/\S+Browser/)) {
		baseInfo.browser = ua.match(/\S+Browser/)[0];
		baseInfo.version = ua.replace(/^.*Browser\/([\d.]+).*$/, '$1');
	}
	if (baseInfo.browser == 'Edge') {
		if (baseInfo.version > '75') {
			baseInfo.engine = 'Blink';
		} else {
			baseInfo.engine = 'EdgeHTML';
		}
	}
	if (baseInfo.browser == 'Chrome' && parseInt(browserVersion) > 27) {
		baseInfo.engine = 'Blink';
	} else if (match['Chrome'] && baseInfo.engine == 'WebKit' && parseInt(browerVersionMap['Chrome']()) > 27) {
		baseInfo.engine = 'Blink';
	} else if (baseInfo.browser == 'Opera' && parseInt(baseInfo.version) > 12) {
		baseInfo.engine = 'Blink';
	} else if (baseInfo.browser == 'Yandex') {
		baseInfo.engine = 'Blink';
	}

	return browserVersion;
};
var getDeviceInfo = exports.getDeviceInfo = function getDeviceInfo() {
	if (!_vue2.default.prototype.$isServer) return {};
	var baseInfo = matchInfoMap();
	return {
		deviceType: baseInfo.device, // 设备类型
		OS: baseInfo.os, // 操作系统
		OSVersion: getOSVersion(baseInfo.os), // 操作系统版本
		Browser: baseInfo.browser,
		BrowserVersion: getBrowserInfo(baseInfo),
		netWork: navigator && navigator.connection && navigator.connection.effectiveType, // 联网类型
		orientation: getOrientationStatu() // 横竖屏
	};
};
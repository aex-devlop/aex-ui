import Vue from 'vue';
const infoMap = {
	engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
	browser: [
		'Safari',
		'Chrome',
		'Edge',
		'IE',
		'Firefox',
		'Firefox Focus',
		'Chromium',
		'Opera',
		'Vivaldi',
		'Yandex',
		'Arora',
		'Lunascape',
		'QupZilla',
		'Coc Coc',
		'Kindle',
		'Iceweasel',
		'Konqueror',
		'Iceape',
		'SeaMonkey',
		'Epiphany',
		'360',
		'360SE',
		'360EE',
		'UC',
		'QQBrowser',
		'QQ',
		'Baidu',
		'Maxthon',
		'Sogou',
		'LBBROWSER',
		'2345Explorer',
		'TheWorld',
		'XiaoMi',
		'Quark',
		'Qiyu',
		'Wechat',
		,
		'WechatWork',
		'Taobao',
		'Alipay',
		'Weibo',
		'Douban',
		'Suning',
		'iQiYi'
	],
	os: [
		'Windows',
		'Linux',
		'Mac OS',
		'Android',
		'Ubuntu',
		'FreeBSD',
		'Debian',
		'iOS',
		'Windows Phone',
		'BlackBerry',
		'MeeGo',
		'Symbian',
		'Chrome OS',
		'WebOS'
	],
	device: ['Mobile', 'Tablet', 'iPad']
};
const root = typeof self !== 'undefined' ? self : this;
let _window = root || {};
const navigator = !Vue.prototype.$isServer && typeof root.navigator != 'undefined' ? root.navigator : {};
const ua = !Vue.prototype.$isServer && (navigator.userAgent || {});
export const isAndroid = ua && !!ua.match(/Android/i);

export const isIE = !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));

export const isEdge = ua && ua.indexOf('Edge') > -1;

export const isFirefox = ua && !!ua.match(/Firefox/i);

export const isChrome = ua && !!ua.match(/Chrome|CriOS/i);
export const isWindowsPhone = ua && !!ua.match(/Windows Phone/i);
export const isSymbian = ua && (!!ua.match(/SymbianOS/i) || isWindowsPhone);
export const isTablet = ua && (!!ua.match(/iPad|PlayBook/i) || (isAndroid && !ua.match(/Mobile/i)) || (isFirefox && !!ua.match(/Tablet/i)));
export const isPhone = ua && (!!ua.match(/iPhone/i) && !isTablet);

export const isPC = !isPhone && !isAndroid && !isSymbian;
export const isMobile =
	ua &&
	!!ua.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);

// 获取匹配
const getMatchMap = () => {
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

const matchInfoMap = () => {
	let _match = getMatchMap();
	let obj = {};
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
const getOSVersion = (os) => {
	let _osVersion = '';
	// 系统版本信息
	let osVersion = {
		Windows: function() {
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
		Android: function() {
			return ua.replace(/^.*Android ([\d.]+);.*$/, '$1');
		},
		iOS: function() {
			return ua.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
		},
		Debian: function() {
			return ua.replace(/^.*Debian\/([\d.]+).*$/, '$1');
		},
		'Windows Phone': function() {
			return ua.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
		},
		'Mac OS': function() {
			return ua.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
		},
		WebOS: function() {
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
const getOrientationStatu = () => {
	var orientationStatus = '';
	var orientation = window.matchMedia('(orientation: portrait)');
	if (orientation.matches) {
		orientationStatus = '竖屏';
	} else {
		orientationStatus = '横屏';
	}
	return orientationStatus;
};

const getBrowserInfo = (baseInfo) => {
	let _mime = function(option, value) {
		var mimeTypes = navigator.mimeTypes;
		for (var key in mimeTypes) {
			if (mimeTypes[key][option] == value) {
				return true;
			}
		}
		return false;
	};

	let match = getMatchMap();
	let is360 = false;
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
			case 71: // 无收藏栏,贴边
				break;
			case 74: // 无收藏栏,非贴边
				break;
			case 99: // 有收藏栏,贴边
				break;
			case 102: // 有收藏栏,非贴边
				match['360EE'] = true;
				break;
			case 75: // 无收藏栏,贴边
				break;
			case 74: // 无收藏栏,非贴边
				break;
			case 105: // 有收藏栏,贴边
				break;
			case 104: // 有收藏栏,非贴边
				match['360SE'] = true;
				break;
			default:
				break;
		}
	}

	let browerVersionMap = {
		Safari: function() {
			return ua.replace(/^.*Version\/([\d.]+).*$/, '$1');
		},
		Chrome: function() {
			return ua.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
		},
		IE: function() {
			return ua.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
		},
		Edge: function() {
			return ua.replace(/^.*Edge\/([\d.]+).*$/, '$1');
		},
		Firefox: function() {
			return ua.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
		},
		'Firefox Focus': function() {
			return ua.replace(/^.*Focus\/([\d.]+).*$/, '$1');
		},
		Chromium: function() {
			return ua.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
		},
		Opera: function() {
			return ua.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
		},
		Vivaldi: function() {
			return ua.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
		},
		Yandex: function() {
			return ua.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
		},
		Arora: function() {
			return ua.replace(/^.*Arora\/([\d.]+).*$/, '$1');
		},
		Lunascape: function() {
			return ua.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
		},
		QupZilla: function() {
			return ua.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
		},
		'Coc Coc': function() {
			return ua.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
		},
		Kindle: function() {
			return ua.replace(/^.*Version\/([\d.]+).*$/, '$1');
		},
		Iceweasel: function() {
			return ua.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
		},
		Konqueror: function() {
			return ua.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
		},
		Iceape: function() {
			return ua.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
		},
		SeaMonkey: function() {
			return ua.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
		},
		Epiphany: function() {
			return ua.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
		},
		360: function() {
			return ua.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
		},
		'360SE': function() {
			var hash = { 63: '10.0', 55: '9.1', 45: '8.1', 42: '8.0', 31: '7.0', 21: '6.3' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return hash[chrome_version] || '';
		},
		'360EE': function() {
			var hash = { 69: '11.0', 63: '9.5', 55: '9.0', 50: '8.7', 30: '7.5' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return hash[chrome_version] || '';
		},
		Maxthon: function() {
			return ua.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
		},
		QQBrowser: function() {
			return ua.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
		},
		QQ: function() {
			return ua.replace(/^.*QQ\/([\d.]+).*$/, '$1');
		},
		Baidu: function() {
			return ua.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
		},
		UC: function() {
			return ua.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
		},
		Sogou: function() {
			return ua.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
		},
		LBBROWSER: function() {
			var version = '';
			if (ua.indexOf('LieBaoFast') > -1) {
				version = ua.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
			}
			var hash = { 57: '6.5', 49: '6.0', 46: '5.9', 42: '5.3', 39: '5.2', 34: '5.0', 29: '4.5', 21: '4.0' };
			var chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
			return version || hash[chrome_version] || '';
		},
		'2345Explorer': function() {
			return ua.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
		},
		TheWorld: function() {
			return ua.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
		},
		XiaoMi: function() {
			return ua.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
		},
		Quark: function() {
			return ua.replace(/^.*Quark\/([\d.]+).*$/, '$1');
		},
		Qiyu: function() {
			return ua.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
		},
		Wechat: function() {
			return ua.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
		},
		WechatWork: function() {
			return ua.replace(/^.*wxwork\/([\d.]+).*$/, '$1');
		},
		Taobao: function() {
			return ua.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
		},
		Alipay: function() {
			return ua.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
		},
		Weibo: function() {
			return ua.replace(/^.*weibo__([\d.]+).*$/, '$1');
		},
		Douban: function() {
			return ua.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
		},
		Suning: function() {
			return ua.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
		},
		iQiYi: function() {
			return ua.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
		}
	};
	let browserVersion = '';
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
export const getDeviceInfo = () => {
	if (Vue.prototype.$isServer) return {};
	let baseInfo = matchInfoMap();
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

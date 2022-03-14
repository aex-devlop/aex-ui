/* 生成组件的入口文件 存放在 src/index.js*/

var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string'); // json-templater 可以让string与变量结合 输出一些内容
var uppercamelcase = require('uppercamelcase'); // 把string转化为驼峰 foo-bar >> FooBar
var path = require('path');
var endOfLine = require('os').EOL; // os.EOL属性是一个常量，返回当前操作系统的换行符（Windows系统是\r\n，其他系统是\n）

// 入口文件导出路径
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');

// 头部 import文件模板
var IMPORT_TEMPLATE = "import {{name}} from '../packages/{{package}}/index.js';";

// 安装组件名称模板
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';

// 主模板中{{ inclue }},{{ install }},{{ version }},{{ list }}为需要替换的模板语法
// {{ include }} 需要替换为 import Row from '../packages/row/index.js';
// {{ install }} 是为需要安装的组件
// {{ version }} 是当前版本号
// {{ list }} 是最终导出的模块
var MAIN_TEMPLATE = `
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */

{{include}}
import locale from 'aex-ui/src/locale';
import CollapseTransition from 'aex-ui/src/transitions/collapse-transition';

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  // 注入语言包
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  // 循环注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  Vue.use(Clickoutside);

  // 如果有需要可以在这里全局注入opts，例如：Vue.use(AexUi,opts)
  Vue.prototype.$AEXUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // 这里放置的都是原型方法
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  Vue.prototype.$toast = Toast;
  

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};
`;

// delete Components.font;
// 获取所有组件的名字，存放在数组中
var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach((name) => {
	var componentName = uppercamelcase(name);

	includeComponentTemplate.push(
		render(IMPORT_TEMPLATE, {
			name: componentName,
			package: name
		})
	);

	// 如果不是以下的需要挂载原型的方法，就全部放入components数组里，用来循环安装
	if (['Loading', 'MessageBox', 'Notification', 'Message', 'InfiniteScroll', 'Toast', 'Clickoutside'].indexOf(componentName) === -1) {
		installTemplate.push(
			render(INSTALL_COMPONENT_TEMPLATE, {
				name: componentName,
				component: name
			})
		);
	}

	// 放入export default 里全部输入
	if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
	include: includeComponentTemplate.join(endOfLine),
	install: installTemplate.join(',' + endOfLine),
	version: process.env.VERSION || require('../../package.json').version,
	list: listTemplate.join(',' + endOfLine)
});

// 结果输出到src/index.js中
fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] 构建入口文件完成:', OUTPUT_PATH);

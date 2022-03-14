// icon初始化, 这个就是生成一个 icon.json的文件，用于文档中使用
// 在’examples/docs/icon.md’中调用icon.json文件，生成网页文档
'use strict';
var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme/src/icon.less'), 'utf8');

var nodes = postcss.parse(fontFile);
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
	var selector = node.selector || '';
	var reg = new RegExp(/\.aex-icon-([^:]+):before/);
	var arr = selector.match(reg);

	if (arr && arr[1]) {
		classList.push(arr[1]);
	}
});

classList.reverse(); // 希望按 css 文件顺序倒序排列

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});

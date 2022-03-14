const shell = require('shelljs');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const sourceDir = path.join(process.cwd(), 'font');
const targetDir = path.join(process.cwd(), 'packages/theme/src');

if (!shell.test('-e', 'package.json')) {
	console.log(chalk.yellow.bgRedBright('请在项目根目录执行此命令!!！'));
	shell.exit(1);
}

// copy 字体文件
fs.copySync(path.join(sourceDir, `iconfont.eot`), path.join(targetDir, 'fonts/icon/iconfont.eot'));
fs.copySync(path.join(sourceDir, `iconfont.ttf`), path.join(targetDir, 'fonts/icon/iconfont.ttf'));
fs.copySync(path.join(sourceDir, `iconfont.woff`), path.join(targetDir, 'fonts/icon/iconfont.woff'));
fs.copySync(path.join(sourceDir, `iconfont.woff2`), path.join(targetDir, 'fonts/icon/iconfont.woff2'));

// 更新icon.less
shell.cat(path.join(sourceDir, `iconfont.css`)).to(path.join(targetDir, 'icon.less'));

let endCss = `
[class^='aex-icon-'],
[class*=' aex-icon-'] {
	font-family: 'aex-icon-' !important;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	display: inline-block;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.aex-icon-loading {
	animation: rotating 0.7s linear infinite;
}
@keyframes rotating {
	0% {
		transform: rotateZ(0deg);
	}
	100% {
		transform: rotateZ(360deg);
	}
}
`;
shell.ShellString(endCss).toEnd(path.join(targetDir, 'icon.less'));
shell.sed('-i', /url\('iconfont\./, `url('fonts/icon/iconfont.`, path.join(targetDir, 'icon.less'));
fs.removeSync(sourceDir);
console.log(chalk.yellow.bgRedBright('icon 更新成功, 可运行 yarn deploy 命令 发布组件库！'));

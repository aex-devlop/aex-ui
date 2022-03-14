/* 根据 components.json 把对应的.less文件(如果没有就自动生成一个空的) 自动导入到  packages/theme/src/index.less中,后面每次新增组件，就不用手动去引入新增组件的样式了*/

var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = ['theme'];
ComponentKeys = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

// 判断文件是否存在
function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

// 先导入基础样式
var indexContent = `/* 这里是通过 './build/bin/gen-cssfile.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/gen-cssfile.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/gen-cssfile.js' 自动生成的，不要改动！！！ */

@import "./base.less";\n
`;

themes.forEach((theme) => {
    ComponentKeys.forEach(function(key) {
        if (['icon', 'option', 'option-group'].indexOf(key) > -1) return; // 这几个样式暂时不用导入 TODO:
        var fileName = key + '.less';
        indexContent += '@import "./' + fileName + '";\n'; // 拼接导入代码
        var filePath = path.resolve(basepath, theme, 'src', fileName);

        // 如果less文件不存在就先创建一个空的
        if (!fileExists(filePath)) {
            fs.writeFileSync(filePath, '', 'utf8');
            console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
        }
    });

    // 写入index.less
    fs.writeFileSync(path.resolve(basepath, theme, 'src', 'index.less'), indexContent);
});

var fs = require('fs');
var save = require('file-save');
var resolve = require('path').resolve;
var basename = require('path').basename;
var localePath = resolve(__dirname, '../../src/locale/lang');
var fileList = fs.readdirSync(localePath);

// babel 编译/转换一下
var transform = function(filename, name, cb) {
    require('babel-core').transformFile(
        resolve(localePath, filename),
        {
            plugins: ['add-module-exports', ['transform-es2015-modules-umd', { loose: true }]],
            moduleId: name,
        },
        cb
    );
};

fileList
    .filter(function(file) {
        return /\.js$/.test(file);
    })
    .forEach(function(file) {
        var name = basename(file, '.js'); // 获取文件名

        transform(file, name, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                var code = result.code;
                code = code
                    .replace("define('", "define('aexui/locale/")
                    .replace('global.', 'global.AEXUI.lang = global.AEXUI.lang || {}; \n    global.AEXUI.lang.');
                save(resolve(__dirname, '../../lib/umd/locale', file)).write(code);

                console.log(`[语言包编译完成]：${file}`);
            }
        });
    });

var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
    externals[`aex-ui/packages/${key}`] = `aex-ui/lib/${key}`;
});

externals['aex-ui/src/locale'] = 'aex-ui/lib/locale';
utilsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`aex-ui/src/utils/${file}`] = `aex-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`aex-ui/src/mixins/${file}`] = `aex-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`aex-ui/src/transitions/${file}`] = `aex-ui/lib/transitions/${file}`;
});

externals = [
    Object.assign(
        {
            vue: 'vue',
        },
        externals
    ),
    nodeExternals(),
];

exports.externals = externals;

// 别名
exports.alias = {
    main: path.resolve(__dirname, '../src'),
    packages: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'aex-ui': path.resolve(__dirname, '../'),
};

exports.vue = {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue',
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

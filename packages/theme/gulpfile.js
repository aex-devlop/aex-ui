'use strict';

const { series, src, dest } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

// 编译并压缩less文件，并输出到 lib
function compile() {
    return src('./src/*.less')
        .pipe(less())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['ie > 9', '> 0.2%', 'last 2 versions', 'not dead'],
                grid: true,
            })
        )
        .pipe(cssmin())
        .pipe(dest('./lib'));
}

// 把字体文件copy到 lib
function copyfont() {
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);

const Config = require('markdown-it-chain'); // 渲染 markdown 基本语法
const anchorPlugin = require('markdown-it-anchor'); // 为各级标题添加锚点
const slugify = require('transliteration').slugify; // 中文转拼音
const containers = require('./containers'); // 用于创建自定义的块级容器
const overWriteFenceRule = require('./fence');

const config = new Config();

config.options
    .html(true)
    .end()

    // .plugin('anchor')
    // .use(anchorPlugin, [
    //     {
    //         level: 2,
    //         slugify: slugify,
    //         permalink: true,
    //         permalinkBefore: true,
    //     },
    // ])
    // .end()

    .plugin('containers')
    .use(containers)
    .end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;

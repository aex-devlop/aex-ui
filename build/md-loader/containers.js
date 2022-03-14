const mdContainer = require('markdown-it-container'); // 用于创建自定义的块级容器

module.exports = (md) => {
    md.use(mdContainer, 'demo', {
        validate(params) {
            return params.trim().match(/^demo\s*(.*)$/);
        },
        // 把demo代码放到div.kv-demo里面
        render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
                const description = m && m.length > 1 ? m[1] : '';
                const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                // 先把demo中的代码放到demo-block的之中，然后程序继续render fence，按照上面的fence规则渲染出代码部分，作为隐藏的查看代码。
                return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--aex-demo: ${content}:aex-demo-->
        `;
            }
            return '</demo-block>';
        },
    });

    md.use(mdContainer, 'tip');
    md.use(mdContainer, 'warning');
};

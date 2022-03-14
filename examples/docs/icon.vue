<template>
    <div id="icon">
        <h2>Icon 图标</h2>
        <aex-text>提供了一套常用的图标集合。</aex-text>

        <h3>使用方法</h3>
        <aex-text>通过设置类名为 aex-icon-iconName 来使用，例如：</aex-text>
        <pre> &lt;i class="aex-icon-edit"&gt;&lt;/i&gt; </pre>
        <aex-text>或者通过设置 name 属性 来使用即可。例如：</aex-text>
        <pre> &lt;aex-icon name="edit"&gt;&lt;/aex-icon&gt; </pre>
        <h3>图标集合</h3>
        <aex-row>
            <aex-col :span="4" v-for="name in $icon" :key="name">
                <div class="icon-item" @click="_onCopy('aex-icon-' + name)">
                    <i :class="'aex-icon-' + name"></i>
                    <span class="icon-name">{{ 'aex-icon-' + name }}</span>
                </div>
            </aex-col>
        </aex-row>
    </div>
</template>
<script>
import copy from 'copy-to-clipboard';
export default {
    name: 'color',
    methods: {
        _onCopy(txt) {
            copy(txt);
            this.$message.success('已复制到剪贴板！');
        },
    },
};
</script>

<style lang="less" scope>
@import 'packages/theme/src/common/var.less';

#icon {
    .aex-row {
        border: solid 1px #eaeefb;
        border-radius: 4px;
    }
    .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-right: -1px;
        margin-bottom: -1px;
        &:hover {
            color: @--color-primary;
        }
        i {
            font-size: 32px;
        }
    }

    pre {
        background: #f8f8f8;
        padding: 14px 0;
    }
}
</style>

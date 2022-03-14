<script>
import Emitter from 'aex-ui/src/mixins/emitter';

export default {
    name: 'AexCheckboxGroup',

    componentName: 'AexCheckboxGroup',

    mixins: [Emitter],

    inject: {
        aexFormItem: {
            default: '',
        },
    },

    props: {
        value: {},
        disabled: Boolean,
        min: Number,
        max: Number,
        size: String,
        fill: String,
        textColor: String,
    },

    computed: {
        _aexFormItemSize() {
            return (this.aexFormItem || {}).aexFormItemSize;
        },
        checkboxGroupSize() {
            return this.size || this._aexFormItemSize || (this.$AEXUI || {}).size;
        },
    },

    watch: {
        value(value) {
            this.dispatch('aexFormItem', 'aex.form.change', [value]);
        },
    },
};
</script>

<template>
    <div class="aex-checkbox-group" role="group" aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>

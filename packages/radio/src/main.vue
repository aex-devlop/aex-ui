<template>
    <label
        class="aex-radio"
        :class="[
            (border || checkbox) && radioSize ? 'aex-radio--' + radioSize : '',
            { 'is-disabled': isDisabled },
            { 'is-focus': focus },
            { 'is-bordered': border },
            { 'is-checkbox': checkbox },
            { 'is-checked': model === label },
        ]"
        role="radio"
        :aria-checked="model === label"
        :aria-disabled="isDisabled"
        :tabindex="tabIndex"
        @keydown.space.stop.prevent="model = isDisabled ? model : label"
    >
        <span
            class="aex-radio__input"
            :class="{
                'is-disabled': isDisabled,
                'is-checked': model === label,
            }"
        >
            <span class="aex-radio__inner" v-if="!checkbox"></span>
            <input
                ref="radio"
                class="aex-radio__original"
                :value="label"
                type="radio"
                aria-hidden="true"
                v-model="model"
                @focus="focus = true"
                @blur="focus = false"
                @change="handleChange"
                :name="name"
                :disabled="isDisabled"
                tabindex="-1"
            />
        </span>
        <span class="aex-radio__label" @keydown.stop>
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
        <span class="aex-radio__checkbox" v-if="!!checkbox"></span>
    </label>
</template>
<script>
import Emitter from 'aex-ui/src/mixins/emitter';

export default {
    name: 'AexRadio',

    mixins: [Emitter],

    inject: {
        aexForm: {
            default: '',
        },

        aexFormItem: {
            default: '',
        },
    },

    componentName: 'AexRadio',

    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
        border: Boolean,
        size: String,
        checkbox: Boolean,
    },

    data() {
        return {
            focus: false,
        };
    },
    computed: {
        isGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.componentName !== 'AexRadioGroup') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
            }
            return false;
        },
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value : this.value;
            },
            set(val) {
                if (this.isGroup) {
                    this.dispatch('AexRadioGroup', 'input', [val]);
                } else {
                    this.$emit('input', val);
                }
                this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
            },
        },
        _aexFormItemSize() {
            return (this.aexFormItem || {}).aexFormItemSize;
        },
        radioSize() {
            const temRadioSize = this.size || this._aexFormItemSize || (this.$AEXUI || {}).size;
            return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
        },
        isDisabled() {
            return this.isGroup
                ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
                : this.disabled || (this.elForm || {}).disabled;
        },
        tabIndex() {
            return this.isDisabled || (this.isGroup && this.model !== this.label) ? -1 : 0;
        },
    },

    methods: {
        handleChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model);
                this.isGroup && this.dispatch('AexRadioGroup', 'handleChange', this.model);
            });
        },
    },
};
</script>

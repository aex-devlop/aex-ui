<template>
	<div
		:class="[
			'aex-button',
			buttonSize && `aex-button--${buttonSize}`,
			type && `aex-button--${type}`,
			{
				'is-disabled': buttonDisabled,
				'is-loading': loading,
				'is-round': round,
				'is-circle': circle,
				'is-block': block,
				'is-finish': finish
			}
		]"
		:disabled="disabled || loading"
		@click="!!isDebounce ? _onClickDebounce() : _onClick()"
		:style="style"
	>
		<i class="aex-icon-loading" v-if="loading"></i>
		<i :class="icon" v-if="icon && !loading"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</div>
</template>

<script>
import debounce from 'throttle-debounce/debounce';
export default {
	name: 'AexButton',
	inject: {
		aexForm: {
			default: ''
		},
		aexFormItem: {
			default: ''
		}
	},
	props: {
		width: String,
		size: String, // large,default,medium,small,mini
		type: {
			type: String,
			default: 'primary' // primary,outline,secondary,tertiary,success,danger,warning
		},
		icon: {
			type: String,
			default: ''
		},
		finish: Boolean, // 活动结束
		loading: Boolean,
		disabled: Boolean,
		round: Boolean,
		circle: Boolean,
		block: Boolean,
		isDebounce: Boolean
	},
	computed: {
		_aexFormItemSize() {
			return (this.aexFormItem || {}).aexFormItemSize;
		},
		buttonSize() {
			return (
				this.size || this._aexFormItemSize || (this.$AEXUI || {}).size
			);
		},
		buttonDisabled() {
			return this.disabled || (this.aexForm || {}).disabled;
		},
		style() {
			let style = {};
			this.width && (style.width = this.width);
			return style;
		}
	},
	methods: {
		_onClickDebounce: debounce(300, function(e) {
			if (!this.disabled) {
				this.$emit('click', e);
			}
		}),
		_onClick(e) {
			if (!this.disabled) {
				this.$emit('click', e);
			}
		}
	}
};
</script>

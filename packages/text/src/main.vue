<template>
	<div
		:class="[
			'aex-text',
			type && `aex-text--${type}`,
			size && `aex-text--${size}`,
			title && `aex-text-title--${title}`,
			disabled && 'is-disabled',
			ellipsis && 'aex-text-ellipsis',
			`font-family-${family}`
		]"
		@click="_onClick"
	>
		<a :href="href" v-if="!!href" :target="target" :class="['aex-text-link', underline && 'is-underline']">
			<slot></slot>
		</a>
		<slot v-else> </slot>
	</div>
</template>

<script>
export default {
	name: 'AexText',
	props: {
		type: String,
		size: String,
		title: String,
		disabled: Boolean,
		ellipsis: Boolean,
		href: String,
		underline: Boolean,
		family: {
			type: String,
			default: 'regular'
		},
		target: {
			type: String,
			defalult: '_self'
		}
		// copyable: {},
	},
	methods: {
		_onClick(event) {
			if (!this.disabled) {
				if (!this.href) {
					this.$emit('click', event);
				}
			}
		}
	}
};
</script>

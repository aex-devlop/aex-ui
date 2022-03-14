<template>
	<div class="aex-breadcrumb" aria-label="Breadcrumb" role="navigation">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'AexBreadcrumb',

	props: {
		separator: {
			type: String,
			default: '/'
		},
		separatorClass: {
			type: String,
			default: ''
		}
	},

	provide() {
		return {
			aexBreadcrumb: this
		};
	},

	mounted() {
		const items = this.$el.querySelectorAll('.aex-breadcrumb__item');
		if (items.length) {
			items[items.length - 1].setAttribute('aria-current', 'page');
		}
	}
};
</script>

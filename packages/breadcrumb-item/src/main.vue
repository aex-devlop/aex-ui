<template>
	<span class="aex-breadcrumb__item">
		<span
			:class="['aex-breadcrumb__inner', to ? 'is-link' : '']"
			ref="link"
			role="link"
		>
			<slot></slot>
		</span>
		<i
			v-if="separatorClass"
			class="aex-breadcrumb__separator"
			:class="separatorClass"
		></i>
		<span v-else class="aex-breadcrumb__separator" role="presentation">{{
			separator
		}}</span>
	</span>
</template>
<script>
export default {
	name: 'AexBreadcrumbItem',
	props: {
		to: {},
		replace: Boolean
	},
	data() {
		return {
			separator: '',
			separatorClass: ''
		};
	},

	inject: ['aexBreadcrumb'],

	mounted() {
		this.separator = this.aexBreadcrumb.separator;
		this.separatorClass = this.aexBreadcrumb.separatorClass;
		const link = this.$refs.link;
		link.setAttribute('role', 'link');
		link.addEventListener('click', (_) => {
			const { to, $router } = this;
			if (!to || !$router) return;
			this.replace ? $router.replace(to) : $router.push(to);
		});
	}
};
</script>

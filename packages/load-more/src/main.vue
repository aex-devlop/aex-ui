<template>
	<div class="aex-load-more">
		<template v-if="hasMore">
			<div v-if="!loading" @click="_click">
				<slot>{{ t(`aex.loadMore.load`) }}</slot>
			</div>
			<div v-else>
				<slot name="loading-text">{{ t(`aex.loadMore.loading`) }}</slot>
			</div>
		</template>
		<div v-else>
			<slot name="loaded-text">{{ t(`aex.loadMore.loaded`) }}</slot>
		</div>
	</div>
</template>

<script>
import Locale from 'aex-ui/src/mixins/locale';
export default {
	name: 'AexLoadMore',
	mixins: [Locale],
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		hasMore: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		_click() {
			this.$emit('click');
		}
	}
};
</script>

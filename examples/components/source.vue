<template>
	<div class="doc-source">
		<side-bar :activeIndex="activeIndex" :routeConf="routeConf" />
		<aex-scrollbar tag="div" wrap-class="doc-source__content">
			<router-view></router-view>
		</aex-scrollbar>
		<aex-backtop target=".doc-source__content"></aex-backtop>
	</div>
</template>

<script>
import sourceConf from '../routes/source.routes';
import SideBar from './side-bar.vue';
export default {
	components: { SideBar },
	data() {
		return {
			activeIndex: 'articles',
		};
	},
	computed: {
		routeConf() {
			return sourceConf.children;
		},
	},
};
</script>

<style lang="less" scope>
@import 'aex-ui/packages/theme/src/common/var.less';
.doc-source {
	display: flex;
	height: 100%;

	&__content {
		padding: 0 20px 40px;
		flex: 1;
		width: calc(100vw - 210px);
		height: 100%;
		box-sizing: border-box;
		margin: 0;
	}
}
</style>

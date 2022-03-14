<template>
	<div class="doc-components">
		<side-bar :activeIndex="activeIndex" :routeConf="routeConf" />
		<aex-scrollbar tag="div" wrap-class="doc-components__content">
			<router-view></router-view>
		</aex-scrollbar>
		<aex-backtop target=".doc-components__content"></aex-backtop>
	</div>
</template>

<script>
import componentConf from '../routes/component.routes';
import SideBar from './side-bar.vue';
export default {
	name: 'App',
	components: { SideBar },
	data() {
		return {
			activeIndex: 'guide',
		};
	},
	computed: {
		routeConf() {
			return componentConf.children;
		},
	},
};
</script>

<style lang="less" scope>
@import 'aex-ui/packages/theme/src/common/var.less';
.doc-components {
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

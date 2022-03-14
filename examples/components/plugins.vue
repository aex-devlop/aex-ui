<template>
	<div class="doc-plugins">
		<side-bar :activeIndex="activeIndex" :routeConf="routeConf" />
		<aex-scrollbar tag="div" wrap-class="doc-plugins__content">
			<router-view></router-view>
		</aex-scrollbar>
		<aex-backtop target=".doc-plugins__content"></aex-backtop>
	</div>
</template>

<script>
import ruleCof from '../routes/plugins.routes';
import SideBar from './side-bar.vue';
export default {
	components: { SideBar },
	data() {
		return {
			activeIndex: 'code-style'
		};
	},
	computed: {
		routeConf() {
			return ruleCof.children;
		}
	}
};
</script>

<style lang="less" scope>
@import 'aex-ui/packages/theme/src/common/var.less';
.doc-plugins {
	display: flex;
	height: 100%;

	&__content {
		padding: 20px 20px 40px;
		flex: 1;
		width: calc(100vw - 210px);
		height: 100%;
		box-sizing: border-box;
		margin: 0;
	}
}
</style>

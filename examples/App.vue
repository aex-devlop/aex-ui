<template>
	<div class="doc">
		<div class="doc-header">
			<div class="doc-header__logo">AEXUI</div>
			<aex-menu :default-active="activeIndex" mode="horizontal" router>
				<aex-menu-item index="/components/guide">组件</aex-menu-item>
				<aex-menu-item index="/rules/code-style">开发规范</aex-menu-item>
				<aex-menu-item index="/source/articles">资源</aex-menu-item>
				<aex-menu-item index="/plugins/base">插件</aex-menu-item>
			</aex-menu>
		</div>
		<div class="doc-body">
			<router-view></router-view>
		</div>
		<!-- <Lantern></Lantern> -->
		<Bingdundun></Bingdundun>
	</div>
</template>

<script>
import Lantern from './components/lantern.vue';
import Bingdundun from './components/bingdundun.vue';
export default {
	name: 'App',
	components: { Lantern, Bingdundun },
	data() {
		return { activeIndex: '/components/guide' };
	},
	mounted() {
		L2Dwidget.init({
			pluginRootPath: 'live2dw/',
			pluginJsPath: 'lib/',
			pluginModelPath: 'live2d-widget-model-tororo/assets/',
			tagMode: true,
			debug: false,
			model: { jsonPath: '/live2dw/live2d-widget-model-tororo/assets/tororo.model.json' },
			display: { position: 'right', width: 150, height: 300, hOffset: 0, vOffset: 50 },
			mobile: { show: true },
			log: false
		});
	}
};
</script>

<style lang="less" scope>
@import 'aex-ui/packages/theme/src/common/var.less';
.doc {
	margin: 0;
	padding: 0;
	height: 100vh !important;

	&-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		border-bottom: solid 1px #f6f7f9;
		&__logo {
			width: 224px;
			font-size: 46px;
			color: #3378ff;
			font-weight: bold;
			text-shadow: 5px 5px 5px #dbdee6;
		}
		> .aex-menu--horizontal {
			flex: 1;
			border: none !important;
		}
	}
	&-body {
		margin: 0;
		padding: 0;
		height: calc(100% - 61px);
	}
}
</style>

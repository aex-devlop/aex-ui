<template>
	<aex-scrollbar tag="div" wrap-class="doc-sidebar">
		<aex-menu :default-active="defaultActive" router>
			<template v-for="(item, index) in routeConf">
				<template v-if="!!item.group">
					<aex-menu-item-group :key="index">
						<span slot="title">{{ item.title }}</span>
						<aex-menu-item v-for="child in item.group" :index="child.path" :key="child.name">
							{{ child.title }}
						</aex-menu-item>
					</aex-menu-item-group>
				</template>
				<template v-else>
					<aex-menu-item :index="item.path" :key="item.name">
						{{ item.title }}
					</aex-menu-item>
				</template>
			</template>
		</aex-menu>
	</aex-scrollbar>
</template>

<script>
export default {
	name: 'SideBar',
	props: {
		activeIndex: String,
		routeConf: Array
	},
	data() {
		return {
			defaultActive: this.activeIndex
		};
	}
};
</script>

<style lang="less" scope>
@import 'aex-ui/packages/theme/src/common/var.less';
.doc-sidebar {
	width: 240px;
	height: 100%;
	.aex-menu-item-group__title {
		color: #000;
	}
	.no-group {
		.aex-menu-item-group__title {
			display: none;
		}
	}
}
</style>

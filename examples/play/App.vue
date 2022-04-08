<template>
	<div id="app">
		<!-- <div onMouseOver="this.style.color='red';" onMouseOut="this.style.color='blue';">adfasd</div> -->
		<!-- <aex-button @click="transZH">中文</aex-button>
		<aex-button @click="transEN">Englishs</aex-button>
		<div>{{ t(`aex.empty.coming_soon`) }}</div> -->
		<aex-load-more
			:loading="loading"
			:has-more="true"
			@click="onLoad"
		></aex-load-more>
	</div>
</template>
<script>
import Locale from 'aex-ui/src/mixins/locale';
import { t, use } from 'aex-ui/src/locale';
import en from 'aex-ui/src/locale/lang/en';
import zh from 'aex-ui/src/locale/lang/zh-CN';
import copy from 'copy-to-clipboard';
import { exponentToNumber, clearzero, zeroize, thousands } from 'aex-ui/src/utils/number'
export default {
	name: 'App',
	mixins: [Locale],
	data() {
		return {
			loading: false,
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		};
	},
	components: {},
	computed: {},
	methods: {
		transZH() {
			use(zh);
			this.$forceUpdate();
		},
		transEN() {
			use(en);
			this.$forceUpdate();
		},
		captch() {
			console.log('nlnlkn');
		},
		onLoad() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 2000);
		}
	},
	mounted(){
		let num = zeroize('12.1234',0)
		console.log('zeroize',num)
	}
};
</script>

<style lang="less">
@import 'packages/theme/src/common/var.less';
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 40px;
	padding: 40px;
}
</style>

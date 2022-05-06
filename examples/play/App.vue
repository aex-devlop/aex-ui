<template>
	<div id="app">
		<aex-button @click='test'>CLICK</aex-button>
	</div>
</template>
<script>
import copy from 'copy-to-clipboard';
import { exponentToNumber, clearzero, zeroize, thousands } from 'aex-ui/src/utils/number'
export default {
	name: 'App',
	data() {
		return {
			loading: true,
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
		test() {
			let as = this.$msgbox({
                    title: 'API确认111',
                    message: 'API Key跟您的账号安全紧密相关，凡知晓您API',
                    confirmButtonText: '确定',
                    // callback: action => {
                    //     this.$message({
                    //         message: `action: ${ action }`
                    //     });
                    // }
                });
						setTimeout(() => {
this.$msgbox.close()			
							this.$msgbox({
							        title: 'API确认22222',
							        message: 'API Key跟您的账号安全紧sdfsadfasdf密相关，凡知晓您API',
							        confirmButtonText: '确定',
							        // callback: action => {
							        //     this.$message({
							        //         message: `action: ${ action }`
							        //     });
							        // }
							    });
		}, 1000);
						setTimeout(() => {
this.$msgbox.close()			
							this.$msgbox({
							        title: 'API确认233332',
							        message: 'API Key跟您的账号安全紧sdfsadfasdf密相关，凡知晓您API',
							        confirmButtonText: '确定',
							        // callback: action => {
							        //     this.$message({
							        //         message: `action: ${ action }`
							        //     });
							        // }
							    });
		}, 1500);
				
		},
	},
	mounted(){
		
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

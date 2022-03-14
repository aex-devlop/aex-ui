import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

import hljs from 'highlight.js';
import AexUI from 'main/index';
import demoBlock from './components/demo-block';

import 'packages/theme/src/index.less';
import 'packages/theme/src/display.less';
import './styles/demo-styles/index.less';
import './styles/common.less';
import icon from './icon.json';

Vue.config.productionTip = false;
Vue.use(AexUI);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);

Vue.prototype.$icon = icon; // Icon 列表页用

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes,
});
router.afterEach((route) => {
	// https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
	Vue.nextTick(() => {
		const blocks = document.querySelectorAll('pre code:not(.hljs)');
		Array.prototype.forEach.call(blocks, hljs.highlightBlock);
	});

	document.title = 'Aex UI';
});

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');

export default {
	title: '开发资源',
	name: 'source',
	path: '/source/',
	component: () => import('../components/source'),
	children: [
		{
			title: '文章/链接',
			name: 'articles',
			path: 'articles',
			component: () => import('../docs/source/articles.md')
		},
		{
			title: '浏览器渲染',
			name: 'browser',
			path: 'browser',
			component: () => import('../docs/source/browser/browser.md')
		},
		{
			title: 'js,css前端优化知识点',
			name: 'optimization',
			path: 'optimization',
			component: () => import('../docs/source/js-css-optimization/js-css-optimization.md')
		},
		{
			title: 'Vue 渲染机制',
			name: 'vue-render',
			path: 'vue-render',
			component: () => import('../docs/source/vue-render/vue-render.md')
		},
		{
			title: 'Vue 生命周期',
			name: 'vue-cycle',
			path: 'vue-cycle',
			component: () => import('../docs/source/vue-cycle/vue-cycle.md')
		},
		{
			title: 'Vuex 技巧与实践',
			name: 'vuex-course',
			path: 'vuex-course',
			component: () => import('../docs/source/vuex-course/index.md')
		},
		{
			title: 'Firebase-Google',
			name: 'firebase-google',
			path: 'firebase-google',
			component: () => import('../docs/source/firebase/google.md')
		},
		{
			title: '代码设计与多人协作',
			name: 'cooperation',
			path: 'cooperation',
			component: () => import('../docs/source/cooperation/index.md')
		},
		{
			title: 'vuex 持久化状态',
			name: 'vuex-persistedstate',
			path: 'vuex-persistedstate',
			component: () => import('../docs/source/vuex-persistedstate/index.md')
		},
		{
			title: 'telegram 登录',
			name: 'telegram',
			path: 'telegram',
			component: () => import('../docs/source/telegram/index.md')
		},
		{
			title: '前端与Nginx',
			name: 'FE_and_nginx',
			path: 'FE_and_nginx',
			component: () => import('../docs/source/FE_and_nginx/index.md')
		},
		{
			title: 'decimal使用',
			name: 'decimal',
			path: 'decimal',
			component: () => import('../docs/source/decimal.md')
		}
	]
};

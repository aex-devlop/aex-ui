export default {
	title: '代码规范',
	name: 'plugins',
	path: '/plugins/',
	component: () => import('../components/plugins'),
	children: [
		{
			title: '通用插件',
			name: 'base',
			path: 'base',
			component: () => import('../docs/plugins/base.md')
		}
	]
};

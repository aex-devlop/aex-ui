export default {
	title: '代码规范',
	name: 'rules',
	path: '/rules/',
	component: () => import('../components/rules'),
	children: [
		{
			title: '开发文档',
			name: 'devlop',
			path: 'devlop',
			component: () => import('../docs/rules/devlop.md')
		},
		{
			title: '代码风格',
			name: 'code-style',
			path: 'code-style',
			component: () => import('../docs/rules/code-style.md')
		},
		{
			title: '代码规范',
			name: 'code-rule',
			path: 'code-rule',
			component: () => import('../docs/rules/code-rule.md')
		}
	]
};

import componentConf from './component.routes';
import rulesConf from './rule.routes';
import sourceConf from './source.routes';
import pluginsConf from './plugins.routes';

export default [
	{
		path: '/',
		redirect: '/components/guide'
	},
	{
		...componentConf,
		children: componentConf.children.reduce((arr, item) => arr.concat(item.group), [])
	},
	sourceConf,
	rulesConf,
	pluginsConf
];

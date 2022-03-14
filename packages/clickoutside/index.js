import Clickoutside from '../../src/utils/clickoutside';

/* istanbul ignore next */
Clickoutside.install = function(Vue) {
	Vue.directive(Clickoutside.name, Clickoutside);
};

export default Clickoutside;

import Tabs from './src/main';

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
};

export default Tabs;

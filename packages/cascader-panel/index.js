import CascaderPanel from './src/main';

/* istanbul ignore next */
CascaderPanel.install = function(Vue) {
  Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;

import OptionGroup from './src/main';

/* istanbul ignore next */
OptionGroup.install = function(Vue) {
  Vue.component(OptionGroup.name, OptionGroup);
};

export default OptionGroup;

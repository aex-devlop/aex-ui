import Dropdown from './src/main';

/* istanbul ignore next */
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown;

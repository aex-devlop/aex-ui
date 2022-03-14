import DropdownItem from './src/main';

/* istanbul ignore next */
DropdownItem.install = function(Vue) {
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem;

import DropdownMenu from './src/main';

/* istanbul ignore next */
DropdownMenu.install = function(Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu);
};

export default DropdownMenu;

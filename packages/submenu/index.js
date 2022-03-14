import Submenu from './src/main';

/* istanbul ignore next */
Submenu.install = function(Vue) {
  Vue.component(Submenu.name, Submenu);
};

export default Submenu;

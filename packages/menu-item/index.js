import MenuItem from './src/main';

/* istanbul ignore next */
MenuItem.install = function(Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;

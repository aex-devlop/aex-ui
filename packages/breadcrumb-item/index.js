import BreadcrumbItem from './src/main';

/* istanbul ignore next */
BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;

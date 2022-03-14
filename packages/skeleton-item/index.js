import SkeletonItem from './src/main';

/* istanbul ignore next */
SkeletonItem.install = function(Vue) {
  Vue.component(SkeletonItem.name, SkeletonItem);
};

export default SkeletonItem;

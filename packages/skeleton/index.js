import Skeleton from './src/main';

/* istanbul ignore next */
Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;

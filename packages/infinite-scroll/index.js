import InfiniteScroll from './src/main';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
    Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;

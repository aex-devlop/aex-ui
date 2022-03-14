import Pagination from './src/main.js';

/* istanbul ignore next */
Pagination.install = function(Vue) {
    Vue.component(Pagination.name, Pagination);
};

export default Pagination;

import Autocomplete from './src/main';

/* istanbul ignore next */
Autocomplete.install = function(Vue) {
  Vue.component(Autocomplete.name, Autocomplete);
};

export default Autocomplete;

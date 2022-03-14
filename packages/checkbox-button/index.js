import CheckboxButton from './src/main';

/* istanbul ignore next */
CheckboxButton.install = function(Vue) {
  Vue.component(CheckboxButton.name, CheckboxButton);
};

export default CheckboxButton;

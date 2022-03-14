import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import AexUi from 'main/index';

import 'packages/theme/src/index.less';
import '../styles/common.less';

Vue.use(AexUi);

new Vue({
    render: (h) => h(App),
}).$mount('#app');

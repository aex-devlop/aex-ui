import Notification from './src/main';

/* istanbul ignore next */
Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
};

export default Notification;

import Toast from './toast';
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (toastOptions) => {
      const Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: toastOptions,
      });
      toast.$slots.default = toastOptions.message;
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  },
};

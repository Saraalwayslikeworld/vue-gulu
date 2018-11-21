import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Aside from './aside';
import Content from './content';
import Header from './header';
import Footer from './footer';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-aside', Aside);
Vue.component('g-content', Content);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    msg: 'hi',
  },
  methods: {
    console() {
      console.log(1111111111);
    },
  },
});

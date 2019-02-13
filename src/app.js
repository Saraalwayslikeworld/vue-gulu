import Vue from 'vue';
import Button from './button/button';
import Icon from './icon/icon';
import ButtonGroup from './button/button-group';
import Input from './input/input';
import Row from './layout/row';
import Col from './layout/col';
import Layout from './container/layout';
import Aside from './container/aside';
import Content from './container/content';
import Header from './container/header';
import Footer from './container/footer';
import Toast from './toast/toast';
import Plugin from './toast/plugin';
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabs-head';
import TabsItem from './tabs/tabs-item';
import TabsContent from './tabs/tabs-content';
import TabsPane from './tabs/tabs-pane';

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
Vue.component('g-toast', Toast);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-content', TabsContent);
Vue.component('g-tabs-pane', TabsPane);

Vue.use(Plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    msg: 'hi',
    selected: 'music'
  },
  created() {
    // this.$toast({
    //   message: '无法起作用',
    //   closeBtn: {
    //     text: '知道了hjhguyguyguyuuguygyuguu',
    //     callback: () => {
    //       console.log('sss知道了');
    //     },
    //   },
    // });
  },
  methods: {

  },
});

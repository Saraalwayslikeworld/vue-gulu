import Vue from 'vue';
import Tabs from '../src/tabs/tabs';
import tabsItem from '../src/tabs/tabs-item';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('tabsItem', () => {
  it('存在.', () => {
    expect(tabsItem).to.exist;
  });
  it('接受name props.', () => {
    const Constructor = Vue.extend(tabsItem);
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      },
    }).$mount();
    expect(vm.$el.getAttribute('data-name')).to.equal('xxx');
  });

});

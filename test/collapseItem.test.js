import Vue from 'vue';
// import Collapse from '../src/collapse/collapse';
import CollapseItem from '../src/collapse/collapseItem';


const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('CollapseItem', () => {
  it('存在.', () => {
    expect(CollapseItem).to.exist;
  });
  it('接受name props.', () => {
    const Constructor = Vue.extend(CollapseItem);
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      },
    }).$mount();
    expect(vm.$el.getAttribute('data-name')).to.equal('xxx');
  });
  it('接受title props.', () => {
    const Constructor = Vue.extend(CollapseItem);
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
        title: 'yyyyy'
      },
    }).$mount();
    expect(vm.$el.querySelector('.title-wrapper').innerText.trim()).to.equal('yyyyy');
  });

});

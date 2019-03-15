import Vue from 'vue';
import Row from '../src/layout/row';
import Col from '../src/layout/col';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist;
  });
  it('可以设置gutter.', (done) => {
    Vue.component('lu-row', Row);
    Vue.component('lu-col', Col);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
        <lu-row gutter="10">
            <lu-col span="12"></lu-col>
            <lu-col span="12"></lu-col>
        </lu-row>`;
    const vm = new Vue({
      el: div,
    });
    setTimeout(() => {
      const row = vm.$el.querySelector('.row');
      expect(getComputedStyle(row).marginLeft).to.equal('-5px');
      expect(getComputedStyle(row).marginRight).to.equal('-5px');
      const cols = vm.$el.querySelectorAll('.col');
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('5px');
      expect(getComputedStyle(cols[1]).paddingRight).to.equal('5px');
      done();
    }, 0);
  });
  it('可以设置align.', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: 'right',
      },
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end');
    vm.$el.remove();
    vm.$destroy();
  });
});

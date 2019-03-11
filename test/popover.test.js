import Vue from 'vue';
import Popover from '../src/popover/popover';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {
  // const Constructor = Vue.extend(Popover);

  it('存在.', () => {
    expect(Popover).to.exist;
  });
  it('可以接受trigger属性.', (done) => {
    const div = document.createElement('div');
    const Constructor = Vue.extend(Popover);

    const vm = new Constructor({
      el: div,
      propsData: {
        trigger: 'hover',
      },
    }).$mount(div);
    // 造一个带有target的假事件
    let event = new Event('mouseenter');
    // 分派事件
    vm.$el.dispatchEvent(event);
    vm.$nextTick(()=>{
      const element = document.body.querySelector('.content-wrapper');
      expect(element).to.exist;
      done();
    })
  });

  it('可以接受placement属性.', (done) => {
    Vue.component('g-popover',Popover)
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <g-popover placement="bottom" ref="a">
      <template slot="content">
        <span>我是点击内容。</span>
      </template>
      <button>点击我 激活</button>
    </g-popover>
    `;
    const vm = new Vue({
      el: div,
    });
    vm.$el.querySelector('button').click();
    vm.$nextTick(()=>{
      const element = vm.$refs.a.$refs.contentWrapper;
      expect(element.classList.contains('position-bottom')).to.be.true;
      done();
    })
  });
});

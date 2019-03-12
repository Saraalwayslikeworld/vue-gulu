import Vue from 'vue';
import Collapse from '../src/collapse/collapse';
import CollapseItem from '../src/collapse/collapseItem';


const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.exist;
  });
  xit('接受actived props.', (done) => {
    Vue.component('g-collapse', Collapse);
    Vue.component('g-collapse-item', CollapseItem);
    const div = document.createElement('div');
    div.innerHTML = `
    <g-collapse actived="2">
      <g-collapse-item title="aaaaa" name="1">
        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      </g-collapse-item>
      <g-collapse-item title="bbbbb" name="2">
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </g-collapse-item>
      <g-collapse-item title="ccccc" name="3">
        ccccccccccccccccccccccccccccccccccccccccc
      </g-collapse-item>
    </g-collapse>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const collapseItem = vm.$el.querySelector(`.collapse-item[data-name="2"]`);
      expect(collapseItem.classList.contains('show')).to.be.true;
      done();
    })
  });
  xit('接受 single props', (done) => {
    Vue.component('g-collapse', Collapse);
    Vue.component('g-collapse-item', CollapseItem);
    const div = document.createElement('div');
    div.innerHTML = `
    <g-collapse :actived.sync="2" single ref="collapse">
    <g-collapse-item title="aaaaa" name="1">
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </g-collapse-item>
    <g-collapse-item title="bbbbb" name="2">
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    </g-collapse-item>
    <g-collapse-item title="ccccc" name="3">
      ccccccccccccccccccccccccccccccccccccccccc
    </g-collapse-item>
  </g-collapse>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    // console.log(vm)
    vm.$nextTick(() => {
      const collapseItem1 = vm.$el.querySelector(`.collapse-item[data-name="1"]`);
      const collapseItem2 = vm.$el.querySelector(`.collapse-item[data-name="2"]`);
      collapseItem1.click();
      expect(collapseItem1.classList.contains('show')).to.be.true;
      expect(collapseItem2.classList.contains('show')).to.be.false;
      done();
    })
  });
});

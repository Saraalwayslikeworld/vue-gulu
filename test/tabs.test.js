import Vue from 'vue';
import Tabs from '../src/tabs/tabs';
import TabsHead from '../src/tabs/tabs-head';
import tabsItem from '../src/tabs/tabs-item';
import TabsContent from '../src/tabs/tabs-content';
import TabsPane from '../src/tabs/tabs-pane';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist;
  });
  it('接受direction props.', (done) => {
    Vue.component('g-tabs', Tabs);
    Vue.component('g-tabs-head', TabsHead);
    Vue.component('g-tabs-item', tabsItem);
    Vue.component('g-tabs-content', TabsContent);
    Vue.component('g-tabs-pane', TabsPane);
    const div = document.createElement('div');
    div.innerHTML = `
        <g-tabs direction="vertical">
          <g-tabs-head>
            <g-tabs-item name="index">首页</g-tabs-item>
            <g-tabs-item name="cook">烹饪</g-tabs-item>
            <g-tabs-item name="music">音乐</g-tabs-item>
          </g-tabs-head>
          <g-tabs-content>
            <g-tabs-pane name="index">首页内容</g-tabs-pane>
            <g-tabs-pane name="cook">烹饪内容</g-tabs-pane>
            <g-tabs-pane name="music">音乐内容</g-tabs-pane>
          </g-tabs-content>
        </g-tabs>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const tabs = vm.$el.querySelector('.tabs');
      const tabsHead = vm.$el.querySelector('.tabs-head');
      expect(tabs.classList.contains('vertical')).to.be.true;
      expect(tabsHead.classList.contains('vertical')).to.be.true;
      done();
    })
  });
  it('接受 selected props', (done) => {
    Vue.component('g-tabs', Tabs);
    Vue.component('g-tabs-head', TabsHead);
    Vue.component('g-tabs-item', tabsItem);
    Vue.component('g-tabs-content', TabsContent);
    Vue.component('g-tabs-pane', TabsPane);
    const div = document.createElement('div');
    div.innerHTML = `
        <g-tabs selected="cook">
          <g-tabs-head>
            <g-tabs-item name="index">首页</g-tabs-item>
            <g-tabs-item name="cook">烹饪</g-tabs-item>
            <g-tabs-item name="music">音乐</g-tabs-item>
          </g-tabs-head>
          <g-tabs-content>
            <g-tabs-pane name="index">首页内容</g-tabs-pane>
            <g-tabs-pane name="cook">烹饪内容</g-tabs-pane>
            <g-tabs-pane name="music">音乐内容</g-tabs-pane>
          </g-tabs-content>
        </g-tabs>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const tabsItem = vm.$el.querySelector(`.tabs-item[data-name="cook"]`);
      expect(tabsItem.classList.contains('active')).to.be.true;
      done();
    })
  });
});

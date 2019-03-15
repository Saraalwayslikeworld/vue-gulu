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
    Vue.component('lu-tabs', Tabs);
    Vue.component('lu-tabs-head', TabsHead);
    Vue.component('lu-tabs-item', tabsItem);
    Vue.component('lu-tabs-content', TabsContent);
    Vue.component('lu-tabs-pane', TabsPane);
    const div = document.createElement('div');
    div.innerHTML = `
        <lu-tabs direction="vertical">
          <lu-tabs-head>
            <lu-tabs-item name="index">首页</lu-tabs-item>
            <lu-tabs-item name="cook">烹饪</lu-tabs-item>
            <lu-tabs-item name="music">音乐</lu-tabs-item>
          </lu-tabs-head>
          <lu-tabs-content>
            <lu-tabs-pane name="index">首页内容</lu-tabs-pane>
            <lu-tabs-pane name="cook">烹饪内容</lu-tabs-pane>
            <lu-tabs-pane name="music">音乐内容</lu-tabs-pane>
          </lu-tabs-content>
        </lu-tabs>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const tabs = vm.$el.querySelector('.lu-tabs');
      const tabsHead = vm.$el.querySelector('.lu-tabs-head');
      expect(tabs.classList.contains('vertical')).to.be.true;
      expect(tabsHead.classList.contains('vertical')).to.be.true;
      done();
    })
  });
  it('接受 selected props', (done) => {
    Vue.component('lu-tabs', Tabs);
    Vue.component('lu-tabs-head', TabsHead);
    Vue.component('lu-tabs-item', tabsItem);
    Vue.component('lu-tabs-content', TabsContent);
    Vue.component('lu-tabs-pane', TabsPane);
    const div = document.createElement('div');
    div.innerHTML = `
        <lu-tabs selected="cook">
          <lu-tabs-head>
            <lu-tabs-item name="index">首页</lu-tabs-item>
            <lu-tabs-item name="cook">烹饪</lu-tabs-item>
            <lu-tabs-item name="music">音乐</lu-tabs-item>
          </lu-tabs-head>
          <lu-tabs-content>
            <lu-tabs-pane name="index">首页内容</lu-tabs-pane>
            <lu-tabs-pane name="cook">烹饪内容</lu-tabs-pane>
            <lu-tabs-pane name="music">音乐内容</lu-tabs-pane>
          </lu-tabs-content>
        </lu-tabs>`;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div,
    });
    vm.$nextTick(() => {
      const tabsItem = vm.$el.querySelector(`.lu-tabs-item[data-name="cook"]`);
      expect(tabsItem.classList.contains('active')).to.be.true;
      done();
    })
  });
});

import Vue from 'vue';
import Input from '../src/input';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist;
  });
  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it('可以接受value.', () => {
      vm = new Constructor({
        propsData: {
          value: '123',
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('123');
    });
    it('可以接受error.', () => {
      vm = new Constructor({
        propsData: {
          error: 'error',
        },
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-warning');
      const errorMsg = vm.$el.querySelector('.error-msg');
      expect(errorMsg.innerText).to.equal('error');
    });
    it('可以设置readonly.', () => {
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true);
    });
    it('可以设置disabled.', () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
    });
  });
  describe('事件', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount();

        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 造一个带有target的假事件
        let event = new Event(eventName);
        Object.defineProperty(event, 'target', { value: { value: 'hi' } });
        const inputElement = vm.$el.querySelector('input');
        // 为input分派事件
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('hi');
      });
    });
  });
});

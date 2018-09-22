import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

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

// // 单元测试 BDD TDD assert
// import chai from 'chai';
// import spies from 'chai-spies';
// chai.use(spies);
// const expect = chai.expect;
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'success',
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-success')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'success',
//             loading: true,
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'success',
//             loading: true,
//             iconPosition: 'right',
//         }
//     })
//     vm.$mount('#test1')
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'success',
//         }
//     })
//     vm.$mount('#test2')

//     let spy = chai.spy(()=>{})
//     vm.$on('click',spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }

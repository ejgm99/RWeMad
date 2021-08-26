import Vue from 'vue'
import App from './App.vue'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
import VueRouter from 'vue-router';
// import DeepMoji from './components/DeepMoji.vue'
// import LSTM from './components/LSTM.vue'

const Foo = { template: '<div>foo</div>',
             script:'console.log("foo")'}

const Bar = { template: '<div>bar</div>',
             script:'console.log("bar")'} 

Vue.use(VueRouter)
Vue.use(VueKatex);

const routes = [
  {path : '/foo', component:Foo},
  {path : '/bar', component:Bar}
]

const router = new VueRouter({
  routes
})

Vue.use(VueKatex)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

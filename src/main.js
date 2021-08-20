import Vue from 'vue'
import App from './App.vue'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex)
new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import App from './App';
import createCompoents from 'packages';
createCompoents(Vue);
new Vue({
  el: '#app',
  render: h => h(App)
});

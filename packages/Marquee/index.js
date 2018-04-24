import marquee from './main';
marquee.install = function(Vue) {
  Vue.component(marquee.name, marquee);
};
export default marquee;

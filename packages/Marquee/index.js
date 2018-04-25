import marquee from './marquee';
marquee.install = function(Vue) {
  Vue.component(marquee.name, marquee);
};
export default marquee;

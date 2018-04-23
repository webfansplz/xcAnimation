import FadeIn from './FadeIn';
const Components = [FadeIn];
export default Vue => {
  Components.map(c => {
    Vue.component(c.name, c);
  });
};

import FadeIn from './FadeIn';
import Marquee from './Marquee';
import MarqueeItem from './Marquee/marquee-item';
const Components = [FadeIn, Marquee, MarqueeItem];
export default Vue => {
  Components.map(c => {
    Vue.component(c.name, c);
  });
};

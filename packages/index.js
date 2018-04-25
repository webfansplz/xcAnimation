import FadeIn from './FadeIn';
import Marquee from './Marquee';
import MarqueeItem from './Marquee/marquee-item';
import SmlsMarquee from './SmlsMarquee/smlsMarquee';
import SmlsMarqueeItem from './SmlsMarquee/smlsMarquee-item';

const Components = [FadeIn, Marquee, MarqueeItem, SmlsMarquee, SmlsMarqueeItem];
export default Vue => {
  Components.map(c => {
    Vue.component(c.name, c);
  });
};

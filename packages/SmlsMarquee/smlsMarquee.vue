<template>
  <div class="xc-smlsMarquee-wrapper" :style="{height:`${Height}px`}">
    <div class="xc-smlsMarquee-box" ref="box" :style="{transform:`translateY(${curY}px)`}">
      <ul class="xc-smlsMarquee" ref="list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
const AnimationFn = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
export default {
  name: 'xc-smlsMarquee',
  props: {
    //动画速度 fast or slow
    speed: {
      type: String,
      default: 'fast'
    }
  },
  data() {
    return {
      Height: 0,
      count: 0,
      curY: 0,
      duration: 0,
      Timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  methods: {
    init() {
      this.count++;
      if (this.count == 0 || this.count != this.$refs.list.children.length) return false;
      const node = this.$refs.list.cloneNode(true);
      this.Height = this.$refs.list.offsetHeight;
      this.$refs.box.appendChild(node);
      this.step();
    },
    step() {
      this.curY -= this.speed == 'fast' ? 1 : 0.5;
      if (this.curY > -this.Height) {
        AnimationFn(this.step);
      } else {
        this.curY = 0;
        AnimationFn(this.step);
      }
    }
  }
};
</script>
<style lang="less">
.xc-smlsMarquee-wrapper {
  width: 100%;
  overflow: hidden;
  .xc-smlsMarquee-box {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .xc-smlsMarquee {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
  }
}
</style>
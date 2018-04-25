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
export default {
  name: 'xc-smlsMarquee',
  data() {
    return {
      Height: 0,
      count: 0,
      curY: 0,
      duration: 0,
      Timer: null,
      AnimationFn: null
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  created() {
    this.AnimationFn = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
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
    c() {
      console.log(1);
    },
    step() {
      console.log(this.AnimationFn);
      console.log(window.requestAnimationFrame);
      this.curY -= 1;
      // if (this.curY > -120) {
      //   this.AnimationFn(this.step);
      // } else {
      //   this.curY = 0;
      //   this.AnimationFn(this.step);
      // }
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
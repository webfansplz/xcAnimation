<template>
  <div class="xc-smlsMarquee-wrapper" :style="{height:`${Height}px`}">
    <div ref="box" :class="['xc-smlsMarquee-box',{'Animate':status&&type=='stair'}]" :style="{transform:`translateY(${curY}px)`}">
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
      default: 'slow'
    },
    //跑马灯类型 stair or line
    type: {
      type: String,
      default: 'stair'
    }
  },
  data() {
    return {
      Height: 0,
      count: 0,
      curY: 0,
      duration: 0,
      Timer: null,
      status: true
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
      this.type == 'stair' && this.stairStep();
      this.type == 'line' && this.lineStep();
    },
    stairStep() {
      const { children } = this.$refs.list;
      const itemHeight = `${this.Height / children.length}`;
      this.Timer = setInterval(() => {
        if (this.curY > -this.Height) {
          this.status = true;
          this.curY -= itemHeight;
          if (this.curY == -this.Height) {
            clearInterval(this.Timer);
            setTimeout(() => {
              this.status = false;
              this.curY = 0;
              this.stairStep();
            }, 300);
          }
        }
      }, this.speed == 'fast' ? 800 : 1500);
    },
    lineStep() {
      this.curY -= this.speed == 'fast' ? 1 : 0.5;
      if (this.curY > -this.Height) {
        AnimationFn(this.lineStep);
      } else {
        this.curY = 0;
        AnimationFn(this.lineStep);
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
  .Animate {
    transition: 0.3s;
  }
  .xc-smlsMarquee {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
  }
}
</style>
<template>
  <div class="xc-marquee" :style="{height:`${Height}px`}">
    <ul class="xc-marquee-box" ref="box" :style="{transform:`translateY(${curY}px)`,transition:`transform ${animated?duration:0}ms`}">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'xc-marquee',
  props: {
    //切换动画时间
    duration: {
      type: Number,
      default: 300
    },
    //切换时间间隙
    interval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      //是否动画
      animated: true,
      count: 0,
      Height: 0,
      curY: 0,
      Timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  methods: {
    init() {
      this.count++;
      if (this.count == 0 || this.count != this.$refs.box.children.length) return false;
      const node = this.$refs.box.firstChild.cloneNode(true);
      this.$refs.box.appendChild(node);
      this.start();
    },
    start() {
      const { offsetHeight, children } = this.$refs.box;
      this.Height = `${offsetHeight / children.length}`;
      clearInterval(this.Timer);
      this.Timer = setInterval(() => {
        this.animated = true;
        this.curY -= this.Height;
        if (Math.abs(this.curY) == offsetHeight - this.Height) {
          setTimeout(() => {
            this.animated = false;
            this.curY = 0;
          }, this.duration);
        }
      }, this.interval);
    }
  }
};
</script>
<style lang="less">
.xc-marquee {
  width: 100%;
  overflow: hidden;
}
.xc-marquee-box {
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
}
</style>
<template>
  <div class="xc-marquee" :style="{height:Height}">
    <ul class="xc-marquee-box" ref="box" :style="{transform:`translateY(${curY}px)`,transition:`transform ${duration}ms`}">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'marquee',
  data() {
    return {
      count: 0,
      Height: 0,
      curY: 0,
      duration: 200,
      interval: 2000,
      Timer: null
    };
  },
  beforeDestroy() {
    clearInterval(this.Timer);
  },
  methods: {
    init() {
      this.count++;
      if (this.count != this.$refs.box.children.length || this.count == 0) return false;
      this.start();
    },
    start() {
      const { offsetHeight, children, firstChild } = this.$refs.box;
      const node = firstChild.cloneNode(true);
      this.$refs.box.appendChild(node);
      this.Height = `${offsetHeight / children.length}px`;
      clearInterval(this.Timer);
      this.Timer = setInterval(() => {
        this.duration = 200;
        this.curY = this.curY - 21;
        if (this.curY == -105) {
          setTimeout(() => {
            this.duration = 0;
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
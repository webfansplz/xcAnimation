<template>
  <div id="App">
    <!-- <span @click="visible=!visible">点击</span>
    <xc-fadeIn>
      <span v-show="visible" class="item">123456</span>
    </xc-fadeIn> -->
    <xc-smlsMarquee class="list">
      <xc-smlsMarquee-item v-for="(item,i) in box" :key="i">{{item}}</xc-smlsMarquee-item>
    </xc-smlsMarquee>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      title: '',
      visible: true,
      box: [
        'Css是世界上最好的语言1',
        'Css是世界上最好的语言2',
        'Css是世界上最好的语言3',
        'Css是世界上最好的语言4',
        'Css是世界上最好的语言5'
      ]
    };
  }
};
</script>
<style scoped lang="less">
#App {
  .item {
    display: inline-block;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
    background-color: #f33;
  }
  .list {
    li {
      display: block;
      width: 300px;
      height: 1.5rem;
      line-height: 1.5rem;
    }
  }
}
</style>
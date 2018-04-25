<template>
  <div id="App">
    <xc-smlsMarquee class="list">
      <xc-smlsMarquee-item v-for="(item,i) in box" :key="i" tag="li">{{item}}</xc-smlsMarquee-item>
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
        'Javascript是世界上最好的语言1',
        'Javascript是世界上最好的语言2',
        'Javascript是世界上最好的语言3',
        'Javascript是世界上最好的语言4',
        'Javascript是世界上最好的语言5'
      ]
    };
  }
};
</script>
<style scoped lang="less">
#App {
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
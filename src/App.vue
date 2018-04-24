<template>
  <div id="App">
    <marquee>
      <marquee-item v-for="(item,i) in box" :key="i">{{item}}</marquee-item>
    </marquee>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      title: '',
      visible: true,
      box: []
    };
  },
  created() {
    setTimeout(() => {
      this.title = 'javascript';
      this.box = [
        'Javascript是世界上最好的语言1',
        'Javascript是世界上最好的语言2',
        'Javascript是世界上最好的语言3',
        'Javascript是世界上最好的语言4',
        'Javascript是世界上最好的语言5'
      ];
    }, 2800);
  }
};
</script>
<style scoped lang="less">
#App {
  .list {
    li {
      display: block;
      width: 200px;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
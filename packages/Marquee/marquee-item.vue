<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'xc-marquee-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.init();
    });
  }
};
</script>
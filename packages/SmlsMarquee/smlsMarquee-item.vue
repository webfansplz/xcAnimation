<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'xc-smlsMarquee-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.init();
    });
  }
};
</script>
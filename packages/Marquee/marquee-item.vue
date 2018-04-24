<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'marquee-item',
  mounted() {
    this.$nextTick(() => {
      this.$parent.init();
    });
  }
};
</script>
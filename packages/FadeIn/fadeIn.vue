<template>
  <transition name="fade" :appear=true>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'xc-fadeIn'
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
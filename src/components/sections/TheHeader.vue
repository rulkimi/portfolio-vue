<template>
  <header class="header bg-header" id="header">
    <NavigationsMenu />
  </header>
</template>

<script>
import NavigationsMenu from '../NavigationsMenu.vue';
export default {
  components: {
    NavigationsMenu
  },
  data() {
    return {
      scrollY: 0
    };
  },
  watch: {
    scrollY(newScrollY) {
      const header = document.getElementById('header');
      newScrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
    });
  }
}
</script>


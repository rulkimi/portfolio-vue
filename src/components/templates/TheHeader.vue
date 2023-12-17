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

<style scoped>
.header {
  width: 100%;
  position: fixed;
  bottom: 2rem;
  left: 0;
  z-index: var(--z-fixed);
}

/* large screen */
@media screen and (min-width: 1023px) {
  .header {
    top: 0;
    bottom: initial;
    background-color: var(--body-color);
    transition: .4s;
  }

  /* change background header  */
  .bg-header {
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, .1);
  }

  .dark-theme .bg-header {
    box-shadow: 0 6px 24px hsla(207, 24%, 8%, .6);
  }
}
</style>


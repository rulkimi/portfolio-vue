<template>
  <header class="header bg-header" id="header">
    <div class="portfolio-message-container">
      <div class="portfolio-message">
        <span>Thank you for visiting my portfolio! I've recently updated my work.</span>
        <a href="https://rulkimi.github.io/kimi-portfolio" class="portfolio-button">Go to New Portfolio</a>
      </div>
    </div>
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
.portfolio-message-container {
  background-color: #f0f8f8;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.portfolio-message {
    max-width: 1200px;
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
}

.portfolio-message p {
    font-size: 1.1em;
    margin-bottom: 15px;
}

.portfolio-button {
    display: inline-block;
    background-color: #2aa397;
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

.portfolio-button:hover {
    background-color: #2aa397ce;
}
</style>
<template>
  <TheHeader />
  <main class="main">
    <HomePage />
  </main>
</template>

<script>
import TheHeader from '@/components/sections/TheHeader.vue';
import HomePage from '@/components/sections/HomePage.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomePage
}
}
</script>

<template>
  <TheHeader />
  <main class="main">
    <HomePage />
  </main>
</template>

<script>
import TheHeader from '@/components/templates/TheHeader.vue';
import HomePage from '@/components/templates/HomePage.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomePage
}
}
</script>

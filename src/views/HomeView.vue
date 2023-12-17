<template>
  <TheHeader />
  <main class="main">
    <HomePage />
    <MySkills />
  </main>
</template>

<script>
import TheHeader from '@/components/sections/TheHeader.vue';
import HomePage from '@/components/sections/HomePage.vue';
import MySkills from '@/components/sections/MySkills.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomePage,
    MySkills
}
}
</script>

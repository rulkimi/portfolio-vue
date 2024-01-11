<template>
  <TheHeader />
  <main class="main">
    <HomePage />
    <MySkills />
    <MyQualifications />
    <MyAspirations />
    <SmallProjects />
    <SchoolProjects />
  </main>
</template>

<script>
import TheHeader from '@/components/sections/TheHeader.vue';
import HomePage from '@/components/sections/HomePage.vue';
import MySkills from '@/components/sections/MySkills.vue';
import MyQualifications from '@/components/sections/MyQualifications.vue';
import MyAspirations from '@/components/sections/MyAspirations.vue';
import SmallProjects from '@/components/sections/SmallProjects.vue';
import SchoolProjects from '@/components/sections/SchoolProjects.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomePage,
    MySkills,
    MyQualifications,
    MyAspirations,
    SmallProjects,
    SchoolProjects
}
}
</script>

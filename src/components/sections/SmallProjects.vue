<template>
  <PageSection type="small-projects" title="Small Projects" subtitle="To showcase my works and determination to learn">
    <div v-for="project in projects" :key="project.title" class="small-projects__content">
      <h3 class="small-projects__title">
        <i :class="project.icon"></i> {{ project.title }}
      </h3>
      <component :is="project.component" />
    </div>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue';
import WheelsOfFortune from '../WheelsOfFortune.vue';

export default {
  components: {
    PageSection,
    WheelsOfFortune
  },
  data() {
    return {
      projects: [
        { title: 'Wheels of Fortune', icon: 'ri-donut-chart-fill', component: 'wheels-of-fortune' }
      ],
    };
  },
};
</script>

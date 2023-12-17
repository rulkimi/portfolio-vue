<template>
  <PageSection type="aspirations" title="Aspirations" subtitle="What I'm pursuing">
    <div v-for="aspiration in aspirations" class="aspirations__card">
      <i :class="aspiration.icon"></i>
      <h2 class="aspirations__title">{{ aspiration.title }}</h2>
      <p class="aspirations__description">
        {{ aspiration.description }}
      </p>
      <div class="aspirations__border"></div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue';

export default {
  components: {
    PageSection
  },
  data() {
    return {
      aspirations: [
        { 
          title: 'Website Design',
          icon: 'ri-code-line',
          description: `To create visually stunning and user-friendly experiences
                        through web design and front-end development.`
        }, {
          title: 'Fullstack Development',
          icon: 'ri-layout-4-line',
          description: `To expand my skills, I aspire to delve into full-stack development,
                        enhancing my ability to create dynamic functionalities.`
        }, {
          title: 'Language Master',
          icon: 'ri-quill-pen-line',
          description: `To master the languages I've learned to a level of proficiency
                        that allows me to use them confidently in a professional capacity.`
        }
      ]
    }
  }
}
</script>
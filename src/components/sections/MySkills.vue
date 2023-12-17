<template>
  <section class="skills section" id="skills">
    <h2 class="section__title">Skills</h2>
    <span class="section__subtitle">My favourite skills</span>
    <div class="skills__container container grid section__border">
      <SkillsContent v-for="skill in skills" :key="skill.title" :title="skill.title" :icon="skill.icon" :skills="skill.types"/>
    </div>
  </section>
</template>

<script>
import SkillsContent from '../SkillsContent.vue';

export default {
  components: {
    SkillsContent
  },
  data() {
    return {
      skills: [
        { title: 'Coding skills',
          icon: 'ri-code-line',
          types: [
            { name: 'HTML', mastery: 'Intermediate', image: require('@/assets/img/html-1.svg') },
            { name: 'CSS', mastery: 'Intermediate', image: require('@/assets/img/css-3.svg') },
            { name: 'JavaScript', mastery: 'Intermediate', image: require('@/assets/img/logo-javascript.svg') },
            { name: 'Vue Js', mastery: 'Intermediate', image: require('@/assets/img/vue-9.svg') },
            { name: 'C++', mastery: 'Beginner', image: require('@/assets/img/cpp.svg') },
            { name: 'Python', mastery: 'Beginner', image: require('@/assets/img/python-5.svg') },
          ]
        },
        { title: 'Languages',
          icon: 'ri-pantone-line',
          types: [
            { name: 'Malay', mastery: 'Native Speaker', image: require('@/assets/img/malaysia.svg') },
            { name: 'English', mastery: 'Highly Proficient', image: require('@/assets/img/united-kingdom.svg') },
            { name: 'Mandarin', mastery: 'Conversational (HSK4)', image: require('@/assets/img/china-2.svg') },
            { name: 'Japanese', mastery: 'Conversatioal (N3)', image: require('@/assets/img/japan.jpg') },
            { name: 'Thai', mastery: 'Beginner', image: require('@/assets/img/thailand.svg') },
          ]
        },
      ]
    }
  }
}
</script>

<template>
  <PageSection type="skills" title="Skills" subtitle="My favourite skills">
    <div v-for="item in skills" class="skills__content">
      <h3 class="skills__title">
        <i :class="item.icon"></i> {{ item.title }}
      </h3>
      <div class="skills__info">
        <div v-for="skill in item.types" :key="skill.name" class="skills__data">
          <div class="skills__blob">
            <img :src="skill.image" :alt="skill.name">
          </div>
          <h3 class="skills__name">{{ skill.name }}</h3>
          <span class="skills__subtitle">{{ skill.mastery }}</span>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue'

export default {
  components: {
    PageSection
  },
  data() {
    return {
      skills: [
        { title: 'Tech Skills',
          icon: 'ri-code-line',
          types: [
            { name: 'HTML', mastery: 'Intermediate', image: require('@/assets/img/html-1.svg') },
            { name: 'CSS', mastery: 'Intermediate', image: require('@/assets/img/css-3.svg') },
            { name: 'JavaScript', mastery: 'Intermediate', image: require('@/assets/img/logo-javascript.svg') },
            { name: 'Vue Js', mastery: 'Intermediate', image: require('@/assets/img/vue-9.svg') },
            { name: 'Figma', mastery: 'Beginner', image: require('@/assets/img/figma-logo.svg') },
            { name: 'Python', mastery: 'Beginner', image: require('@/assets/img/python-5.svg') }
          ]
        },
        {
          title: 'Languages',
          icon: 'ri-pantone-line',
          types: [
            { name: 'Malay', mastery: 'Native Speaker', image: require('@/assets/img/malaysia.svg') },
            { name: 'English', mastery: 'Highly Proficient', image: require('@/assets/img/united-kingdom.svg') },
            { name: 'Mandarin', mastery: 'Conversational (HSK4)', image: require('@/assets/img/china-2.svg') },
            { name: 'Japanese', mastery: 'Conversatioal (N3)', image: require('@/assets/img/japan.jpg') },
            { name: 'Thai', mastery: 'Beginner', image: require('@/assets/img/thailand.svg') }
          ]
        },
      ]
    }
  }
}
</script>

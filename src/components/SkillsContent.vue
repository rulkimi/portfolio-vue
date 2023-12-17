<template>
  <div class="skills__content">
    <h3 class="skills__title">
      <i :class="icon"></i> {{ title }}
    </h3>
    <div class="skills__info">
      <div v-for="skill in skills" :key="skill.name" class="skills__data">
        <div class="skills__blob">
          <img :src="skill.image" :alt="skill.name">
        </div>
        <h3 class="skills__name">{{ skill.name }}</h3>
        <span class="skills__subtitle">{{ skill.mastery }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'skills']
}
</script>
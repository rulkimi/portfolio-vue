<template>
  <div class="home__info">
    <div v-for="info in biodata" :key="info.title">
      <h3 class="home__info-title">{{ info.title }}</h3>
      <p class="home__info-description" v-html="addLineBreaks(info.description)"></p>
    </div>
  </div>
  <div class="home__info">
    <div v-for="info in workInfos" :key="info.title">
      <h3 class="home__info-title">{{ info.title }}</h3>
      <p class="home__info-number">{{ info.number }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biodata: [
        { title: 'BIOGRAPHY', description: 'Self-taught developer passionate about programming languages.'},
        { title: 'CONTACT', description: 'azrulkimi00@gmail.com' },
        { title: 'PASSION', description: 'Website Design<br>Foreign Languages<br>Programming' }
      ],
      workInfos: [
        { title: 'YEARS OF EXPERIENCE', number: '01' },
        { title: 'COMPLETED PROJECTS', number: '08+' },
        { title: 'COMPANIES WORKED', number: '03' }
      ]
    }
  },
  methods: {
    addLineBreaks(text) {
      return text.replace(/\n/g, '<br>');
    }
  }
}
</script>

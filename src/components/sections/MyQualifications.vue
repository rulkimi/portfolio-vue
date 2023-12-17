<template>
  <PageSection type="qualification" title="Qualification" subtitle="Experience & Education">
    <div v-for="item in qualifications" :key="item.title" class="qualification__content">
      <h3 class="qualification__title">
        <i :class="item.icon"></i> {{ item.title }}
      </h3>
      <div class="qualification__info">
        <div v-for="qualification in item.types">
          <h3 class="qualification__name">{{ qualification.name }}</h3>
          <span class="qualification__place">{{ qualification.place }}</span>
          <span class="qualification__year">{{ qualification.year }}</span>
        </div>
      </div>
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
      qualifications: [
        {
          title: 'Education',
          icon: 'ri-pencil-ruler-2-line',
          types: [
            { name: 'Bachelor of Mechanical Engineering', place: 'Universiti Malaya -- CGPA: 3.71', year: '2019 - 2023' },
            { name: 'Foundation in Engineering', place: 'UiTM Dengkil -- CGPA: 4.00', year: '2018 - 2019' },
            { name: 'Highschool Diploma', place: 'SMK Abdul Jalil -- SPM: 10A1B', year: '2016 - 2017' }
          ]
        }, {
          title: 'Work',
          icon: 'ri-building-line',
          types: [
            { name: 'Front-end Developer', place: 'Mesiniaga Digital Sdn. Bhd. - Selangor', year: 'Sept 2023 - Now' },
            { name: 'Software Trainee', place: 'Knex Inc. - Kuala Lumpur', year: 'May 2022 - Apr 2023' },
            { name: 'Site Engineer Trainee', place: 'MEGATARA SDN. BHD. - Kuala Lumpur', year: 'Jul 2022 - Sep 2022' }
          ]
        }
      ]
    }
  }
}
</script>
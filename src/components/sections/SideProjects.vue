<template>
  <PageSection :notGrid="true" type="projects" title="Side Projects" subtitle="Most recent work">
    <swiper
      class="projects__container swiper"
      :breakpoints="{ 1200: { slidesPerView: 2 } }"
      navigation
      loop
      :pagination="{ clickable: true }"
      :space-between="56"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(project, index) in projects" :key="index">
        <div class="projects__content">
          <img :src="project.image" :alt="`projects image ${index}`" class="projects__img">
          <div>
            <span class="projects__subtitle">{{ project.subtitle }}</span>
            <h1 class="projects__title">{{ project.title }}</h1>
            <a :href="project.docs.link" target="_blank" class="projects__button">
              {{ project.docs.isDemo ? 'View demo' : 'View in GitHub' }} <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-next" @click="slideNext()">
        <i class="ri-arrow-right-s-line"></i>
      </div>

      <div class="swiper-button-prev" @click="slidePrev()">
        <i class="ri-arrow-left-s-line"></i>
      </div>

      <!-- swiper pagination  -->
      <div class="swiper-pagination"></div>

    </swiper>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'SideProjects',
  components: { PageSection, Swiper, SwiperSlide },
  data() {
    return {
      projects: [
        {
          image: require('@/assets/img/bus-location-project.png'),
          subtitle: 'Fullstack App',
          title: 'Bus Location Tracker',
          docs: {
            isDemo: true,
            link: 'https://rulkimi.github.io/bus-location-server/'
          }
        },
        {
          image: require('@/assets/img/instagram-nonfollowers-project.png'),
          subtitle: 'Static Website',
          title: 'Instagram Non-followers Checker',
          docs: {
            isDemo: true,
            link: 'https://rulkimi.github.io/insta-nonfollowers/',
          }
        },
        {
          image: require('@/assets/img/ceramics-project.jpg'),
          subtitle: 'Machine Learning',
          title: 'Ceramics Classification',
          docs: {
            isDemo: false,
            link: 'https://github.com/rulkimi/ml-ceramics-classification'
          } 
        },
        {
          image: require('@/assets/img/bridge-project.jpg'),
          subtitle: 'C++',
          title: 'Bridge Stress Analysis',
          docs: {
            isDemo: false,
            link: 'https://github.com/rulkimi/bridge-stress-analysis'
          } 
        },
      ],
    };
  },
  setup() {
    let swiperInstance;

    const onSwiper = (swiper) => {
      swiperInstance = swiper;
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    const slideNext = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      } else {
        console.error('Swiper instance not available');
      }
    };

    const slidePrev = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      } else {
        console.error('Swiper instance not available');
      }
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
      slideNext,
      slidePrev,
    };
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

<template>
  <PageSection type="projects" title="School Projects" subtitle="Most recent work">
    <swiper
      class="projects__container swiper"
      :slides-per-view="2"
      navigation
      :pagination="{ clickable: true }"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="projects__content">
          <img src="@/assets/img/quiz-project.png" alt="projects image" class="projects__img">
          <div>
            <span class="projects__subtitle">Quiz Website</span>
            <h1 class="projects__title">HSK4 Quiz Website</h1>
            <a href="https://rulkimi.github.io/quiz/" target="_blank" class="projects__button">
              View demo <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </swiper-slide>
      
      <swiper-slide>
        <div class="projects__content">
          <img src="@/assets/img/duet-project.png" alt="projects image" class="projects__img">
          <div>
            <span class="projects__subtitle">Web Design</span>
            <h1 class="projects__title">Duet Display Replication</h1>
            <a href="https://rulkimi.github.io/duet-display-clone/" target="_blank" class="projects__button">
              View demo <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="projects__content">
          <img src="@/assets/img/duet-project.png" alt="projects image" class="projects__img">
          <div>
            <span class="projects__subtitle">Web Design</span>
            <h1 class="projects__title">Duet Display Replication</h1>
            <a href="https://rulkimi.github.io/duet-display-clone/" target="_blank" class="projects__button">
              View demo <i class="ri-arrow-right-line"></i>
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
  name: 'SchoolProjects',
  components: { PageSection, Swiper, SwiperSlide },
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

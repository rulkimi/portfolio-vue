<template>
  <TheHeader />
  <main class="main">
    <HomePage />
    <MySkills />
    <MyQualifications />
    <SmallProjects />
    <SideProjects />
    <MyAspirations />
    <ContactMe />
  </main>
  <TheFooter />
  <a href="#" class="scrollup" id="scroll-up" @click="scrollToTop">
    <i class="ri-arrow-up-line"></i>
  </a>
</template>

<script>
import TheHeader from '@/components/sections/TheHeader.vue';
import HomePage from '@/components/sections/HomePage.vue';
import MySkills from '@/components/sections/MySkills.vue';
import MyQualifications from '@/components/sections/MyQualifications.vue';
import MyAspirations from '@/components/sections/MyAspirations.vue';
import SmallProjects from '@/components/sections/SmallProjects.vue';
import SideProjects from '@/components/sections/SideProjects.vue';
import ContactMe from '@/components/sections/ContactMe.vue';
import TheFooter from './components/sections/TheFooter.vue';
import { sr } from '@/utils/scroll-reveal';

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    HomePage,
    MySkills,
    MyQualifications,
    MyAspirations,
    SmallProjects,
    SideProjects,
    ContactMe,
    TheFooter
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollUp() {
      const scrollUpElement = document.getElementById('scroll-up');
      window.scrollY >= 350
        ? scrollUpElement.classList.add('show-scroll')
        : scrollUpElement.classList.remove('show-scroll');
    }
  },
  mounted() {
    sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`);
    sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100});
    sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'});
    sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'});
    sr.reveal(`.qualification__content, .aspirations__card`, {interval: 100});

    window.addEventListener('scroll', this.scrollUp);
    this.scrollUp();
  }
}
</script>

<style>
/* button from google*/
.stop-watch-body button, .tic-tac-toe button, .rock-paper-scissor .reset-score-button {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}
</style>

<template>
  <section class="home section" id="home">
    <div class="home__container container grid section__border">
      <div class="home__data grid">
        <h1 class="home__title">
            Hi, I'm Kimi <br>
            Frontend Developer <br>
            Based in Kuala Lumpur <br>
        </h1>
        <div class="home__blob grid">
          <div class="home__perfil">
            <img src="@/assets/img/azrul_photo.png" alt="home perfil">
          </div>
          <img src="@/assets/img/shape-wawes.svg" alt="assets/img/shape-circle.svg" class="home__shape-wawes">
          <img src="@/assets/img/shape-circle.svg" alt="" class="home__shape-circle">
        </div>
        <ul class="home__social">
          <a href="https://www.linkedin.com/in/azrul-hakimi-75a32420a/" target="_blank" class="home__social-link">
            <i class="ri-linkedin-box-line"></i>
          </a>
          <a href="https://github.com/rulkimi" target="_blank" class="home__social-link">
            <i class="ri-github-line"></i>
          </a>
          <a href="https://github.com/rulkimi/azrul-portfolio/raw/main/azrul-resume.pdf" target="_blank" download="https://github.com/rulkimi/quiz/blob/main/azrul_resume.pdf"><button class="home__resume" role="button">Download Resume</button></a>
        </ul>
      </div>
      <HomeInfos />
    </div>
  </section>
</template>

<script>
import HomeInfos from '../HomeInfos.vue';
export default {
  components: {
    HomeInfos
  }
}
</script>
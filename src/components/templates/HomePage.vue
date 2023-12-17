<template>
  <section class="home section" id="home">
    <div class="home__container container grid section__border">
      <div class="home__data grid">
        <h1 class="home__title">
            Hi, I'm Azrul <br>
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
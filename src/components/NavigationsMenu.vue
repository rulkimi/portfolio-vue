<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">
      Azrul
    </a>
    <div class="nav__menu" ref="nav-menu">
      <ul class="nav__list grid">
        <li v-for="item in items" class="nav__item">
          <a :href="item.link" class="nav__link" @click="toggleMenu">
            <i class="ri-home-5-line"></i> {{ item.title }}
          </a>
        </li>
      </ul>
      <!-- Close button -->
      <div class="nav__close" id="nav-close" @click="toggleMenu">
        <i class="ri-close-line"></i>
      </div>
    </div>
    <div class="nav__buttons">
      <!-- theme change buttons -->
      <i class="ri-moon-line change-theme" id="theme-button"></i>

      <!-- toggle button -->
      <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
        <i class="ri-menu-4-line"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', link: '#home'},
        { title: 'Skills', link: '#skills'},
        { title: 'Qualification', link: '#qualification'},
        { title: 'Aspirations', link: '#aspirations'},
        { title: 'Projects', link: '#small-projects'},
        { title: 'Contact', link: '#contact'},
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.$refs['nav-menu'].classList.toggle('show-menu');
    }
  }
}
</script>
<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">
      Azrul
    </a>
    <div class="nav__menu" ref="nav-menu">
      <ul class="nav__list grid">
        <li v-for="item in items" class="nav__item">
          <a :href="item.link" class="nav__link" @click="toggleMenu" :class="{ 'active-link': isActiveLink(item.link) }">
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
        { title: 'Home', link: '#home' },
        { title: 'Skills', link: '#skills' },
        { title: 'Qualification', link: '#qualification' },
        { title: 'Aspirations', link: '#aspirations' },
        { title: 'Projects', link: '#small-projects' },
        { title: 'Contact', link: '#contact' },
      ],
      activeLink: '#home', // Add a new data property to track the active link
    };
  },
  methods: {
    isActiveLink(link) {
      return this.activeLink === link;
    },
    toggleMenu() {
      this.$refs['nav-menu'].classList.toggle('show-menu');
    },
    scrollActive() {
      const scrollDown = window.scrollY;

      this.items.forEach((item) => {
        const targetSection = document.querySelector(item.link);
        if (targetSection) {
          const sectionHeight = targetSection.offsetHeight,
                sectionTop = targetSection.offsetTop - 58;

          if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            this.activeLink = item.link;
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollActive);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollActive);
  },
};
</script>
<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">
      <img class="kimi__logo" src="/kimi.svg" alt="Kimi's personal logo.">Kimi
    </a>
    <div class="nav__menu" ref="nav-menu">
      <ul class="nav__list grid">
        <li v-for="item in items" class="nav__item">
          <a :href="item.link" class="nav__link" @click="toggleMenu" :class="{ 'active-link': isActiveLink(item.link) }">
            <i :class="item.icon"></i> {{ item.title }}
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
      <i class="change-theme" :class="currentIconClass" id="theme-button" @click="toggleTheme"></i>

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
        { title: 'Home', link: '#home', icon: 'ri-home-5-line' },
        { title: 'Skills', link: '#skills', icon: 'ri-trophy-line' },
        { title: 'Qualification', link: '#qualification', icon: 'ri-book-open-line' },
        { title: 'Projects', link: '#small-projects', icon: 'ri-image-line' },
        { title: 'Aspirations', link: '#aspirations', icon: 'ri-briefcase-line' },
        { title: 'Contact', link: '#contact', icon: 'ri-chat-3-line' },
      ],
      activeLink: '#home', // Add a new data property to track the active link
      darkTheme: false,
      currentIconClass: 'ri-sun-line',
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
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      this.currentIconClass = this.darkTheme ? 'ri-moon-line' : 'ri-sun-line';
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('selected-theme', this.darkTheme ? 'dark' : 'light');
      localStorage.setItem('selected-icon', this.currentIconClass);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollActive);

    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme) {
      this.darkTheme = selectedTheme === 'dark';
      this.currentIconClass = selectedTheme === 'dark' ? 'ri-moon-line' : 'ri-sun-line';
      document.body.classList[this.darkTheme ? 'add' : 'remove']('dark-theme');
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollActive);
  },
};
</script>

<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">
      Kimi
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
      <i class="ri-moon-line change-theme" id="theme-button" @click="toggleTheme"></i>

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
        { title: 'Projects', link: '#small-projects' },
        { title: 'Aspirations', link: '#aspirations' },
        { title: 'Contact', link: '#contact' },
      ],
      activeLink: '#home', // Add a new data property to track the active link
      darkTheme: 'dark-theme',
      iconTheme: 'ri-sun-line',
    };
  },
  computed: {
    currentTheme() {
      return this.$el.classList.contains(this.darkTheme) ? 'dark' : 'light';
    },
    currentIconClass() {
      return document.body.classList.contains(this.darkTheme) ? 'ri-moon-line' : 'ri-sun-line';
    },
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
      const body = document.body;
      body.classList.toggle(this.darkTheme);
      localStorage.setItem('selected-theme', body.classList.contains(this.darkTheme) ? 'dark' : 'light');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollActive);

    // Apply the theme and icon on component mount
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
    if (selectedTheme) {
      this.$el.classList[selectedTheme === 'dark' ? 'add' : 'remove'](this.darkTheme);
      this.$el.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](this.iconTheme);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollActive);
  },
};
</script>

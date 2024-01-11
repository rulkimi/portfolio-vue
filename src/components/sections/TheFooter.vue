<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">Azrul</h1>
      <p>Junior Front-end Developer</p>

      <ul class="footer__list">
        <li v-for="(link, index) in footerLinks" :key="index">
          <a :href="link.href" class="footer__link">{{ link.text }}</a>
        </li>
      </ul>

      <ul class="footer_social">
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.href" target="_blank" class="footer__social-link">
          <i :class="social.icon"></i>
        </a>
      </ul>

      <span class="footer__copy">
        Special Thanks to Bedimcode
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        { text: "Home", href: "#home" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#small-projects" },
      ],
      socialLinks: [
        { icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/in/azrul-hakimi-75a32420a/" },
        { icon: "ri-github-line", href: "https://www.github.com/rulkimi" },
      ],
    };
  },
};
</script>
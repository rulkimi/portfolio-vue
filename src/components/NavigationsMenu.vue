<template>
  <nav class="nav container">
    <a href="#" class="nav__logo">
      Azrul
    </a>
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list grid">
        <li v-for="item in items" class="nav__item">
          <a :href="item.link" class="nav__link">
            <i class="ri-home-5-line"></i> {{ item.title }}
          </a>
        </li>
      </ul>
      <!-- Close button -->
      <div class="nav__close" id="nav-close">
        <i class="ri-close-line"></i>
      </div>
    </div>
    <div class="nav__buttons">
        <!-- theme change buttons -->
        <i class="ri-moon-line change-theme" id="theme-button"></i>

        <!-- toggle button -->
        <div class="nav__toggle" id="nav-toggle">
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
  }
}
</script>

<style scoped>
.nav {
  height: calc(var(--header-height) + .5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--body-color);
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, .1);
  padding-inline: 1.5rem;
  border-radius: 3rem;
}
.nav__logo, .nav__toggle, .nav__close {
  color: var(--title-font);
}

.nav__logo {
  font-family: var(--title-font);
  font-weight: var(--font-medium);
}

.nav__toggle {
  display: flex;
  font-size: 1.25rem;
  cursor: pointer;
}

@media screen and (max-width: 1023px) {
  .nav__menu {
    position: fixed;
    width: 88%;
    left: 0;
    right: 0;
    bottom: -60%;
    margin: 0 auto;
    background-color: var(--body-color);
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, .1);
    padding: 2rem 1.5rem 5rem;
    border-radius: 2rem;
    transition: bottom .3s;
  }
}

@media screen and (min-width: 1023px) {
  .nav {
    width: initial;
    height: calc(var(--header-height) + 1.5rem);
    box-shadow: none;
    border-radius: 0;
    column-gap: 3rem;
    margin-inline: 1.5rem;
    padding: 0;
  }
  .nav__link i, .nav__toggle, .nav__close {
    display: none;
  }
  .nav__menu {
    width: initial;
    margin-left: auto;
    background-color: var(--body-color);
    transition: background .4s;
  }
  .nav__list {
    display: flex;
    column-gap: 3rem;
  }
  .nav__link {
    font-size: var(--normal-font-size);
  }

  .dark-theme .nav, .dark-theme .nav__menu {
    background-color: var(--body-color);
    box-shadow: none;
  }

  .change-theme {
    color: var(--text-color-light);
  }

  .change-theme:hover {
    color: var(--title-color);
  }
}

/* for small devices */
@media screen and (max-width: 575px) {
  .nav_menu {
    padding-bottom: 4rem;
  }

  .nav__list {
    gap: 1rem 1.25rem;
  }
}

.nav__list {
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  gap: 2rem 3rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: .25rem;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  transition: color .3s;
}

.nav__link:hover {
  color: var(--title-color);
}

.nav__link i {
  font-size: 1.25 rem;
}

.nav__close {
  position: absolute;
  right: 1.5rem;
  bottom: .7rem;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Show menu */
.show-menu {
  bottom: 2rem;
}


/* Active link */
.active-link {
  color: var(--title-color);
}

.nav__buttons {
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
}

.change-theme {
  font-size: 1.25rem;
  color: var(--title-color);
  cursor: pointer;
  transition: color .3s;
}
</style>
<template>
  <section class="section" :class="type" :id="type">
    <h2 class="section__title">{{ title }}</h2>
    <span class="section__subtitle">{{ subtitle }}</span>
    <div class="container grid section__border" :class="`${type}__container`">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['type', 'title', 'subtitle']
}
</script>
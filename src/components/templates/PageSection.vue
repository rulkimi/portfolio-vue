<template>
  <section class="section" :class="type" :id="type">
    <h2 class="section__title">{{ title }}</h2>
    <span class="section__subtitle">{{ subtitle }}</span>
    <div class="container section__border" :class="notGrid ? '' : `${type}__container grid`">

      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['type', 'title', 'subtitle', 'notGrid']
}
</script>
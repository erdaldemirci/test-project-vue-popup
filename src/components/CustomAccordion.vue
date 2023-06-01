<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      CustomAccordion: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { CustomAccordion: this.CustomAccordion };
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>

<template>
  <li class="accordion__item">
    <div class="accordion__trigger" :class="{ 'accordion__trigger_active': visible }" @click="open">
      <slot name="accordion-trigger"></slot>
    </div>

    <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  props: {},
  inject: ["CustomAccordion"],
  data() {
    return {
      index: null
    };
  },
  computed: {
    visible() {
      return this.index == this.CustomAccordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.CustomAccordion.active = null;
      } else {
        this.CustomAccordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.CustomAccordion.count++;
  }
};
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  padding: 0;
  margin-bottom: 10px;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;

  background-color: #f5f5f5;




}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}



</style>

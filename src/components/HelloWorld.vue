<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <bootstrap-modal :showModal="showModalNow" @closeModal="closeMyModal"></bootstrap-modal>
    <a href="#" @click="toggleModal">PAY</a>
  </div>
</template>

<script>
import BootstrapModal from "./BootstrapModal.vue"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    "bootstrap-modal": BootstrapModal,
  },
  data() {
    return {
      showModalNow: false,
    }
  },
  methods: {
    closeMyModal() {
      this.showModalNow = false;
    },
    toggleModal() {
      this.showModalNow = !this.showModalNow;
    }
  }
}
</script>

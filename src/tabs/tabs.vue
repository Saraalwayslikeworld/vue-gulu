<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "gTabs",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    selected: {
      type: String | Number,
      require: true
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  }
};
</script>

<style scoped lang="scss">
</style>
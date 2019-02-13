<template>
  <div class="tabs-pane" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsPane",
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      require: true
    }
  },
  computed: {
    activeClass() {
      return this.active ? "active" : "";
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  }
};
</script>

<style scoped lang="scss">
.tabs-pane {
  display: none;
  &.active {
    display: block;
  }
}
</style>
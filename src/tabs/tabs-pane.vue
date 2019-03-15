<template>
  <div class="lu-tabs-pane" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lu-tabs-pane",
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

<style lang="scss">
.lu-tabs-pane {
  padding: 10px;
  display: none;
  &.active {
    display: block;
  }
}
</style>
<template>
  <div class="tabs-item" @click="select" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsItem",
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
  },
  methods: {
    select() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style scoped lang="scss">
$tabs-height: 24px;
$tabs-font-size: 20px;
.tabs-item {
  height: $tabs-height;
  font-size: $tabs-font-size;
  padding: 0 2em;
  &.active {
    background: red;
  }
}
</style>
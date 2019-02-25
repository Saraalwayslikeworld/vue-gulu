<template>
  <div class="tabs" :class="directionClass">
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
  computed: {
    directionClass() {
      return this.direction === "vertical"
        ? "vertical"
        : this.direction === "horizontal"
        ? "horizontal"
        : "";
    }
  },
  props: {
    selected: {
      type: String | Number,
      require: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["vertical", "horizontal"].includes(val);
      }
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn(
          "tabs的子组件应该是tabs-head和tabs-content，但你没有写组件"
        );
    }
    this.eventBus.$emit("direction", this.direction);
    this.$children.forEach(vm => {
      if (vm.$options.name === "gTabsHead") {
        vm.$children.forEach(child => {
          if (
            child.$options.name === "gTabsItem" &&
            child.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, child);
          }
        });
      }
    });
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  }
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  &.horizontal {
    flex-direction: column;
  }
  &.vertical {
    flex-direction: row;
  }
}
</style>
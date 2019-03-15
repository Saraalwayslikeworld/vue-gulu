<template>
  <div class="lu-tabs" :class="directionClass">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "lu-tabs",
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
  methods:{
    checkChildren(){
      if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn(
          "tabs的子组件应该是tabs-head和tabs-content，但你没有写组件"
        );
      }
    },
    selectTab() {
      this.$children.forEach(vm => {
        if (vm.$options.name === "lu-tabs-head") {
          vm.$children.forEach(child => {
            if ( child.$options.name === "lu-tabs-item" && child.name === this.selected) {
              this.eventBus.$emit("update:selected", this.selected, child);
            }
          });
        }
      });
    }
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
    this.eventBus.$emit("direction", this.direction);
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  }
};
</script>

<style lang="scss">
.lu-tabs {
  display: flex;
  &.horizontal {
    flex-direction: column;
  }
  &.vertical {
    flex-direction: row;
  }
}
</style>
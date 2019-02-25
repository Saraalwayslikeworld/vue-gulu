<template>
  <div class="tabs-head" :class="directionClass">
    <slot></slot>
    <div class="active-line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gTabsHead",
  data() {
    return {
      direction: "horizontal"
    };
  },
  inject: ["eventBus"],
  computed: {
    directionClass() {
      return this.direction === "vertical"
        ? "vertical"
        : this.direction === "horizontal"
        ? "horizontal"
        : "";
    }
  },
  mounted() {
    this.eventBus.$on("direction", direction => {
      this.direction = direction;
    });
    this.eventBus.$on("update:selected", (name, vm) => {
      this.$nextTick(() => {
        let { width, height, top, left } = vm.$el.getBoundingClientRect();
        if (this.direction === "horizontal") {
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style.left = `${left}px`;
          this.$refs.line.style.top = `${top + height}px`;
        } else if (this.direction === "vertical") {
          this.$refs.line.style.left = `${left + width}px`;
          this.$refs.line.style.top = `${top}px`;
          this.$refs.line.style.height = `${height}px`;
        }
      });
    });
  }
};
</script>

<style scoped lang="scss">
$active-color: #64a1ee;
.tabs-head {
  // position: relative;
  > .active-line {
    position: absolute;
    background: $active-color;
    transition: all 300ms ease;
  }
  &.horizontal {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
    > .active-line {
      left: 0;
      width: 1px;
      height: 1px;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
  &.vertical {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #eee;
    > .active-line {
      top: 0;
      width: 1px;
      height: 1px;
    }
    > .actions-wrapper {
      margin-top: auto;
    }
  }
}
</style>
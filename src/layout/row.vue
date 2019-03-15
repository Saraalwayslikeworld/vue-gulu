<template>
  <div class="lu-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'lu-row',
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(val) {
        return ['center', 'left', 'right'].includes(val);
      },
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      return { marginRight: -this.gutter / 2 + 'px', marginLeft: -this.gutter / 2 + 'px' };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    },
  },
};
</script>
<style lang="scss" scoped>
.lu-row {
  display: flex;
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>

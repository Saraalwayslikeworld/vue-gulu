<template>
    <div class="lu-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'lu-layout',
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'lu-aside') {
        this.layoutClass.hasAside = true;
      }
    });
  },
  data() {
    return {
      layoutClass: {
        hasAside: false,
      },
    };
  },
};
</script>
<style lang="scss" >
.lu-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasAside {
    flex-direction: row;
  }
}
</style>

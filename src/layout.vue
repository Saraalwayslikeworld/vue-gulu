<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'g-layout',
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'gAside') {
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
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasAside {
    flex-direction: row;
  }
}
</style>

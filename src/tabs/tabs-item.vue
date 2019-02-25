<template>
  <div class="tabs-item" @click="select" :data-name="name" :class="{'active': this.active}">
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
  computed: {},
  inject: ["eventBus"],
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", name => {
        this.active = this.name === name;
      });
  },
  methods: {
    select() {
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style scoped lang="scss">
$tabs-font-size: 16px;
$active-color: #64a1ee;
$tabs-height: 40rpx;

.tabs-item {
  // height: 100%;
  font-size: $tabs-font-size;
  padding: 0.2em 1em;
  display: flex;
  align-items: center;
  &.active {
    color: $active-color;
  }
}
</style>
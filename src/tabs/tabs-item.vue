<template>
  <div class="lu-tabs-item" @click="select" :data-name="name" :class="{'active': this.active}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lu-tabs-item",
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

<style lang="scss">
@import '../var';


.lu-tabs-item {
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
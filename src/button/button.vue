
<template>
  <button class="lu-button" :class="{[`icon-${iconPosition}`]:true,[`btn-${type}`]:true,['disable']:disabled}" :disabled="disabled" @click="trrigerClick">
    <lu-icon v-if="icon && !loading" :name="icon" class="icon" />
    <lu-icon v-if="loading" name="loading" class="loading" />
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../icon/icon";
export default {
  name: "lu-button",
  components: {
    "lu-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        return val === "left" || val === "right";
      }
    },
    type: {
      type: String,
      default: "",
      validator(val) {
        return val === "" || val === "round";
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    trrigerClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../var';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lu-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0.3em 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &.btn-round {
    border-radius: 50%;
    width: $button-height;
    padding: 0.4em;
    > .icon {
      margin: 0;
    }
    > .content {
      display: none;
    }
  }
  &.disable {
    background: $disabled-bg;
    color: $disabled-color;
    &:hover {
      border: 1px solid $disabled-bg;
    }
    & > .icon {
      fill: $disabled-color;
    }
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $botton-avtive-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.2rem;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2rem;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 4s infinite linear;
  }
}
</style>


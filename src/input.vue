<template>
  <div class="wrapper" :class="{error}">
    <!-- <label class="label">{{label}}</label> -->
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" @change="$emit('change',$event.target.value)" @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <g-icon name="warning" class="icon-error"></g-icon>
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon.vue';
export default {
  name: 'g-input',
  components: {
    'g-icon': Icon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
    // placeholder: {
    //     type: String,
    // },
    // label:{
    //     type: String,
    //     default: ''
    // },
    // labelPosition: {
    //     type: String,
    //     default: 'top'
    // },
  },
};
</script>
<style lang="scss" scoped>
// --font-size: 14px;
// --border-radius: .3rem;
// --border-color: #ccc;
// --border-color-hover: #666;
// --button-bg: #fff;
// --botton-active-bg: #ccc;
// --disabled-bg: #ddd;
$disabled-color: #999;
$tip-color: rgb(118, 175, 80);
$error-color: rgb(197, 75, 38);
$height: 32px;
$border-color: #ccc;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.3);
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $error-color;
    }
    .icon-error,
    .error-msg {
      fill: $error-color;
      color: $error-color;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 2px $box-shadow-color;
    }
    &[disabled] {
      border-color: $disabled-color;
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
}
</style>

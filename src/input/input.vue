<template>
  <div class="lu-input" :class="{error}">
    <form action>
    <input 
      :type="type" 
      :placeholder="placeholder" 
      :value="value" 
      :disabled="disabled" 
      :readonly="readonly" 
      @change="$emit('change',$event.target.value)" 
      @input="$emit('input',$event.target.value)" 
      @focus="$emit('focus',$event.target.value)" 
      @blur="$emit('blur',$event.target.value)" 
      @keydown="confirm"
      />
    </form>
    <template v-if="error">
      <lu-icon name="warning" class="icon-error"></lu-icon>
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "../icon/icon";
export default {
  name: "lu-input",
  components: {
    "lu-icon": Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
        type: String,
    },
  },
  methods: {
    confirm(e) {
      if(e.keyCode === 13) {
        e.preventDefault();
        this.$emit('confirm', e.target.value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../var';
.lu-input {
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
  input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    outline: none;
    -webkit-appearance: none; //去除ios默认样式
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      // outline: none;
      box-shadow: inset 0 1px 2px $box-shadow-color;
    }
    &[disabled] {
      border-color: $disabled-color;
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
  ::-webkit-search-cancel-button { display: none; } //去除搜索取消默认样式
}
</style>

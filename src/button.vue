
<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true,[`btn-${type}`]:true,['disable']:disabled}" :disabled="disabled" @click="trrigerClick">
    <g-icon v-if="icon && !loading" :name="icon" class="icon" />
    <g-icon v-if="loading" name="loading" class="loading" />
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon';
export default {
  name: 'g-button',
  components: {
    'g-icon': Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        return val === 'left' || val === 'right';
      },
    },
    type: {
      type: String,
      default: '',
      validator(val) {
        return val === '' || val === 'round';
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    trrigerClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0.3em 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &.btn-round {
    border-radius: 50%;
    width: var(--button-height);
    padding: 0.4em;
    > .icon {
      margin: 0;
    }
    > .content {
      display: none;
    }
  }
  &.disable {
    background: var(--disabled-bg);
    color: var(--disabled-color);
    &:hover {
      border: 1px solid var(--disabled-bg);
    }
    & > .icon {
      fill: var(--disabled-color);
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--botton-avtive-bg);
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



<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading" name="loading" class="loading"></g-icon>
        <div class="content">
          <slot></slot>
        </div>        
    </button>
</template>

<script>

export default {
    props: {
      icon:{},
      loading: {
        type: Boolean,
        default: false,
      },
      iconPosition:{
        type: String,
        default: 'left',
        validator(val) {
          return ( val === 'left' || val === 'right');
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  @keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: .3rem 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--botton-avtive-bg);
    }
    &:focus {
      outline: none;
    }
    >.icon {
      order: 1;
      margin-right: .2rem;
    }
    >.content { order: 2;}
    &.icon-right{
      >.icon {
        order: 2;
        margin-right: 0;
        margin-left: .2rem;
      }
      >.content { order: 1; }
    }
    .loading {
      animation: spin 4s infinite linear;
    }
  }
</style>


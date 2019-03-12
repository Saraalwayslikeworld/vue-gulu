<template>
  <div class="collapse-item" :class="{show: active}" @click="toggle">
    <div class="title-wrapper">
      {{title}}
      <!-- <slot name="title"></slot> -->
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gCollapseItem',
    props: {
      title: {
        required: true,
        type: String,
      },
      name: {
        required: true,
        type: String | Number,
      },
    },
    data() {
      return {
        active: false
      }
    },
    mounted(){
      this.eventBus.$on('selectListChange', (val)=>{
        this.active = val.includes(this.name);
      })
    },
    methods: {
      toggle() {
        if(this.active === true){
          this.eventBus.$emit('removeItem',this.name)
        } else if(this.active === false){
          this.eventBus.$emit('addItem',this.name)
        }
      },
    },
    inject:['eventBus'],
  }
</script>

<style lang="scss" scoped>
.collapse-item {
  transition: all 300ms ease;
  .title-wrapper {
    min-height: 2rem;
    padding: .5em 1em;
    border-top: 1px solid #999;
    margin-top: -1px;
  }
  .content-wrapper {
    height: 0;
    overflow: hidden;
  }
  &:first-child {
    .title-wrapper {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  &.show {
    .content-wrapper {
      height: auto;
      margin-top: -1px;
      border-top: 1px solid #999;
    }
  }
}
</style>
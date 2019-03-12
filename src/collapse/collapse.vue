<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

  export default {
    name: "gCollapse",
    props: {
      actived: {
        type: String | Number,
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        selectList:[],
        eventBus: new Vue(),
      }
    },
    mounted() {
      this.eventBus.$on('addItem',(name)=>{
        if(this.single){
          this.selectList = [name];
        } else {
          this.selectList.push(name);
        }
        this.$emit('change',this.selectList)
        this.eventBus.$emit('selectListChange',this.selectList)
      })
      this.eventBus.$on('removeItem',(name)=>{
        this.selectList.forEach((item,index)=>{
          if(item === name){
            this.selectList.splice(index,1);
            this.eventBus.$emit('selectListChange',this.selectList)
            this.$emit('change',this.selectList)
          }
        });
      })
      this.eventBus.$emit('addItem',this.actived)
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    }
  }
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #999;
  border-radius: 10px;
}
</style>
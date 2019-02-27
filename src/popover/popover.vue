<template>
  <div class="popover" @click.stop="onClick" ref="popover" @mouseover="onHover" @mouseleave="hoverLeave">
    <div ref="contentWrapper" class="content-wrapper" :class="[`position-${placement}`]" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "g-popover",
  props: {
    placement: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "right", "left"].includes(val);
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(val) {
        return ["hover", "click"].includes(val);
      }
    },
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onHover(){
      if(this.trigger !== 'hover'){return;}
      this.open('hover');
    },
    hoverLeave() {
      if(this.trigger !== 'hover'){return;}
      this.close('hover');
    },
    onClick(e) {
      if(this.trigger !== 'click'){return;}
      if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
    },
    open(type = 'click') {
      this.visible = true;
      this.$nextTick(() => {
        this.putContent();
        type === 'click' && document.addEventListener("click", this.onClickDocument);
      });
    },
    close(type = 'click') {
      this.visible = false;
      type === 'click' && document.removeEventListener("click", this.onClickDocument);
    },
    onClickDocument(e) {
      if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target) || this.$refs.popover && this.$refs.popover.contains(e.target)){
        return;
      }
      this.close();
    },
    putContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let {
        width,
        height,
        left,
        top
      } = triggerWrapper.getBoundingClientRect();
      let { height: height2} = contentWrapper.getBoundingClientRect();
      switch (this.placement){
        case 'left':
        top = top + window.pageYOffset + (height - height2)/2 + 'px';
        left = left + window.pageXOffset  + 'px';
        break;
        case 'right':
        top = top + window.pageYOffset + (height - height2)/2 +'px';
        left = left + window.pageXOffset + width + 'px';
        break;
        default:
        top = top + window.pageYOffset + 'px';
        left = left + window.pageXOffset + 'px';
        break;
      }
      contentWrapper.style.top = top;
      contentWrapper.style.left = left;
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
$bgColor:rgba(0,0,0,0.3) ;
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border-radius: $border-radius;
  background: $bgColor;
  padding: .3em .5em;
  max-width: 20em;
  word-break: break-all;
  &::after {
    content: '';
    display: inline-block;
    width: 0px;
    height: 0px;
    border: 8px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(calc(-100% - 8px));
    margin-bottom: 8px;
    &::after {
      top: 100%;
      left: 12px;
      border-top-color: $bgColor;
    }
  }
  &.position-bottom {
    transform: translateY(100%);
    margin-top: 10px;
    &::after {
      bottom: 100%;
      left: 12px;
      border-bottom-color: $bgColor;
    }
  }
  &.position-left {
    transform: translateX(calc(-100% - 8px));
    &::after {
      transform: translateY(-50%);
      top: 50%;
      left:100%;
      border-left-color: $bgColor;
    }
  }
  &.position-right {
    margin-left: 8px;
    &::after {
      transform: translateY(-50%);
      top: 50%;
      right: 100%;
      border-right-color: $bgColor;
    }
  }
}
</style>
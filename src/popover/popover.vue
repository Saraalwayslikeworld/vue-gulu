<template>
  <div class="popover"  ref="popover" >
    <div ref="contentWrapper" class="content-wrapper" :class="[`position-${placement}`]" v-if="visible">
      <slot name="content" :close="close" ></slot>
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
  mounted() {
    if(this.trigger === 'click') {
      this.$refs.popover.addEventListener('click',this.onClick);
    } else {
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed() {
    if(this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click',this.onClick);
    } else {
      this.$refs.popover.removeEventListener('mouseenter',this.open)
      this.$refs.popover.removeEventListener('mouseleave',this.close)
    }
  },
  methods: {
    onClick(e) {
      if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.putContent();
        this.trigger === 'click' && document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      this.trigger === 'click' && document.removeEventListener("click", this.onClickDocument);
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
      const { width, height, left, top } = triggerWrapper.getBoundingClientRect();
      const { height: height2} = contentWrapper.getBoundingClientRect();
      let positionConfig = {
        top: {
          top: top + window.pageYOffset,
          left:left + window.pageXOffset
        },
        bottom: {
          top: top + window.pageYOffset,
          left:left + window.pageXOffset
        },
        left: {
          top: top + window.pageYOffset + (height - height2)/2,
          left:left + window.pageXOffset
        },
        right: {
          top: top + window.pageYOffset + (height - height2)/2,
          left: left + window.pageXOffset + width
        }
      }
      contentWrapper.style.top = positionConfig[this.placement].top + 'px';
      contentWrapper.style.left = positionConfig[this.placement].left + 'px';
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #999;
$border-radius: 4px;
$bgColor: #fff ;
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
  filter: drop-shadow(0px 2px 4px rgba(0,0,0,.3));

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
      border-bottom: none;
      border-top-color: $bgColor;
    }
  }
  &.position-bottom {
    transform: translateY(100%);
    margin-top: 10px;
    &::after {
      bottom: 100%;
      left: 12px;
      border-top: none;
      border-bottom-color: $bgColor;
    }
  }
  &.position-left {
    transform: translateX(calc(-100% - 8px));
    &::after {
      transform: translateY(-50%);
      top: 50%;
      left:100%;
      border-right: none;
      border-left-color: $bgColor;
    }
  }
  &.position-right {
    margin-left: 8px;
    &::after {
      transform: translateY(-50%);
      top: 50%;
      right: 100%;
      border-left: none;
      border-right-color: $bgColor;
    }
  }
}
</style>
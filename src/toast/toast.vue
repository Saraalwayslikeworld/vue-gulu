<template>
  <div class="toast">
    <p class="message" v-html="message" v-if="htmlEnable" :class="{'border-right':closeBtn.text?true:false}"></p>
    <p class="message" :class="{'border-right':closeBtn.text?true:false}" v-else>
      <slot></slot>
    </p>
    <div class="confirm" v-if="closeBtn" @click="closeBtn.callback()">{{closeBtn.text}}</div>
  </div>
</template>
<script>
export default {
  name: "g-toast",
  props: {
    message: {
      type: String,
      default: "消息通知"
    },
    htmlEnable: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 500
    },
    closeBtn: {
      type: Object,
      default() {
        return {
          text: "",
          callback: null
        };
      }
    }
  },
  mounted() {
    this.execAutoClose();
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }
  }
};
</script>
<style lang="scss">
$font-size: 14px;
$tosat-bg: rgba(41, 38, 38, 0.637);
.toast {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  background: $tosat-bg;
  border-radius: 5px;
  color: #fff;
  font-size: $font-size;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .message {
    word-break: break-all;
    width: 200px;
    padding: 10px 20px;
    &.border-right {
      border-right: 1px solid #ccc;
    }
  }
  > .confirm {
    // border-left: 1px solid #ccc;
    padding: 10px 10px;
  }
}
</style>

<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border:1px solid green; height:100%">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const validator = (val) => {
  let valid = true;
  let keys = Object.keys(val);
  keys.forEach((key) => {
    if (!['span', 'offset'].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: 'g-col',
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      let { offset, span, phone, ipad, narrowPc, pc, widePc } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`, ...(ipad ? [`col-ipad-${ipad.span}`, `offset-ipad-${ipad.offset}`] : []), ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`, `offset-narrow-pc-${narrowPc.offset}`] : []), ...(pc ? [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`] : []), ...(widePc ? [`col-wide-pc-${widePc.span}`, `offset-wide-pc-${widePc.offset}`] : [])];
    },
    colStyle() {
      return { paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px' };
    },
  },
};
</script>
<style lang="scss" scoped>
$height: 50px;
.col {
  height: $height;
  width: 100%;
  @for $i from 1 through 24 {
    &.col-#{$i} {
      width: ($i/24) * 100%;
    }
  }
  @for $i from 1 through 24 {
    &.offset-#{$i} {
      margin-right: ($i/24) * 100%;
    }
  }
  // @media (max-width: 576px) {
  //   $class-prefix: phone-;
  //   @for $i from 1 through 24 {
  //     &.col-#{$class-prefix}#{$i} {
  //       width: ($i/24) * 100%;
  //     }
  //   }
  //   @for $i from 1 through 24 {
  //     &.offset-#{$class-prefix}#{$i} {
  //       margin-right: ($i/24) * 100%;
  //     }
  //   }
  // }
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: ipad-;
    @for $i from 1 through 24 {
      &.col-#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.offset-#{$class-prefix}#{$i} {
        margin-right: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: narrow-pc-;
    @for $i from 1 through 24 {
      &.col-#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.offset-#{$class-prefix}#{$i} {
        margin-right: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: pc-;
    @for $i from 1 through 24 {
      &.col-#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.offset-#{$class-prefix}#{$i} {
        margin-right: ($i/24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: wide-pc-;
    @for $i from 1 through 24 {
      &.col-#{$class-prefix}#{$i} {
        width: ($i/24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.offset-#{$class-prefix}#{$i} {
        margin-right: ($i/24) * 100%;
      }
    }
  }
}
</style>


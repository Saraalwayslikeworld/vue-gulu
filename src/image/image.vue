<template>
  <div class="img-wrapper" :style="imageStyle" ref='webuyImg'>
  </div>
</template>

<script>
  export default {
    name: 'webuyImage',
    data() {
      return {
        imgUrl: '',
      };
    },
    props: {
      lazyLoad: {
        type: Boolean,
        default: false,
      },
      defaultSrc: {
        type: Boolean,
        default: '',
      },
      src: {
        type: String,
        required: true,
      },
      mode: {
        type: String,
        default: 'aspectFit',
        validator(val) {
          return ['aspectFit', 'widthFix'].includes(val);
        },
      },
    },
    computed: {
      imageStyle() {
        return `background: url(${this.imgUrl}) center center no-repeat;
        background-size: ${this.mode === 'aspectFit' ? 'contain' : 'cover'}`
      },
    },
    mounted() {
      if (this.lazyLoad) {
        this.imgUrl = this.defaultSrc;
        document.addEventListener('srcoll', this.watchscroll);
      } else {
        this.imgUrl = this.src;
      }
    },
    mothods: {
      eventHandle() {

      },
      watchscroll() {
        console.log('scroll');
        const bodyScrollHeight = document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const img = this.$refs.webuyImg;
        const imgHeight = img.offsetTop;
        if (imgHeight < windowHeight + bodyScrollHeight) {
          this.imgUrl = this.src;
        }
      },
    },
  };
</script>

<style scoped  lang="scss">
  .img-wrapper {
    width: 100px;
    height: 100px;
  }
</style>
<template>
  <div class="_showLoading" v-show="show">
    <view class="loading">
      <image src="/static/icon/ic_toast_loading.gif"></image>
    </view>
  </div>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$loadingStore.state.show
    },
    title() {
      return this.$loadingStore.state.title
    },
    content() {
      return this.$loadingStore.state.content
    }
  },
  methods: {},
  beforeDestroy() {
    this.$loadingStore.commit('hideLoading')
  }
}
</script>

<style lang="scss" scoped>
._showLoading {
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0,0,0,0.4); */
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10000;
  .loading {
    position: relative;
    top: 50vh;
    left: 375rpx;
    transform: translate(-50%, -50%);
    width: 200rpx;
    height: 200rpx;
    // margin-left: 275rpx;
    // margin-top: 300rpx;

    text-align: center;
    line-height: 200rpx;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20rpx;
  }
  .loading image {
    width: 80rpx;
    height: 80rpx;
    vertical-align: middle;
  }
  /* 无限旋转动画 */
  .rotate {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 0.6s linear infinite;
    -moz-animation: rotate 0.6s linear infinite;
    -o-animation: rotate 0.6s linear infinite;
    animation: rotate 0.6s linear infinite;
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(359deg);
    }

    to {
      -webkit-transform: rotate(0deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(359deg);
    }

    to {
      -moz-transform: rotate(0deg);
    }
  }

  @-o-keyframes rotate {
    from {
      -o-transform: rotate(359deg);
    }

    to {
      -o-transform: rotate(0deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(359deg);
    }

    to {
      transform: rotate(0deg);
    }
  }

  /* 无限旋转动画 end */
}
</style>

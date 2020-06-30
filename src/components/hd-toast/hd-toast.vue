<template>
    <div class="_showToast" v-show="show" :class="{mask:mask}">
        <view class="toast">
            <image  class="img" v-if="image" :src="image"></image>
            <image class="icon" v-if="icon" :src="icon"></image>
            <view class="title">
                {{title}}
            </view>
        </view>
    </div>
</template>

<script>
export default {
    computed: {
        show() {
            return this.$toastStore.state.show
        },
        title() {
            return this.$toastStore.state.title
        },
        icon() {
            // if (this.$toastStore.state.icon === 'success') {
            //     return require('@/static/icon/ic_toast_success.png')
            // } else if (this.$toastStore.state.icon === 'warning') {
            //     return require('@/static/icon/ic_toast_warning.png')
            // } else if (this.$toastStore.state.icon === 'error') {
            //     return require('@/static/icon/ic_toast_error.png')
            // }
            return null
        },
        image() {
            return this.$toastStore.state.image
        },
        mask() {
            return this.$toastStore.state.mask
        }
    },
    methods: {},
    beforeDestroy() {
        this.$toastStore.commit('hideToast')
    }
}
</script>

<style lang="scss" scoped>
._showToast {
    position: absolute;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    &.mask {
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
    }
    .toast {
        position: absolute;
        display: inline-block;
        max-width: 400rpx;
        min-width: 104rpx;
        box-sizing: border-box;
        padding: 30rpx;
        top: 50vh;
        left: 375rpx;
        transform: translate(-50%,-50%);
        color: #ffffff;
        background-color: rgba(0,0,0,0.7);
        border-radius: 16rpx;
        .icon,.img{
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          height: 44rpx;
          width: 44rpx;
          margin-bottom: 24rpx;
        }
        .title {
            max-width: 360rpx;
            min-width: 120rpx;
            line-height: 40rpx;
            text-align: center;
            font-size: 28rpx;
            font-weight: 500;
            color: #F7F7F7;
        }
    }
    .toast image {
        width: 44rpx;
        height: 44rpx;
        margin-bottom: 10rpx;
    }
}
</style>

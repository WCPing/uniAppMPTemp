import Vuex from 'vuex'
export default function init(v) {
  const defaultConfig = {
    title: '',
    content: '',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#65686F',
    confirmText: '确定',
    confirmColor: '#FB6D2B'
  }
  // 挂在store到全局Vue原型上
  v.prototype.$modalStore = new Vuex.Store({
    state: {
      show: false,
      title: '',
      content: '',
      showCancel: true,
      cancelText: '',
      cancelColor: '',
      confirmText: '',
      confirmColor: '',
      success: null
    },
    mutations: {
      hideModal(state) {
        // 小程序导航条页面控制
        // #ifndef H5
        if (state.hideTabBar) {
          wx.showTabBar()
        }
        // #endif
        state.show = false
      },
      showModal(state, data) {
        state = Object.assign(state, defaultConfig, data)
        state.show = true
      },
      success(state, res) {
        const cb = state.success
        const resObj = {
          cancel: false,
          confirm: false
        }
        res == 'confirm' ? (resObj.confirm = true) : (resObj.cancel = true)
        cb && cb(resObj)
      }
    }
  })
  // 注册$showModal到Vue原型上，以方便全局调用
  v.prototype.$showModal = function(option) {
    if (typeof option === 'object') {
      // #ifndef H5
      if (option.hideTabBar) {
        wx.hideTabBar()
      }
      // #endif

      v.prototype.$modalStore.commit('showModal', option)
    } else {
      throw '配置项必须为对象传入的值为：' + typeof option
    }
  }
}

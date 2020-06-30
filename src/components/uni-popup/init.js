import Vuex from 'vuex'

export default function init(v) {
  // 挂在store到全局Vue原型上
  v.prototype.$popupStore = new Vuex.Store({
    state: {
    	data:{}
		},
    mutations: {
    	confirm(state,data) {
				state.data.onConfirm && state.data.onConfirm(data)
			},
      hide(state) {
				state.data.ref.close()
      },
      show(state, data) {
        if (!data.ref) {
        	console.error('必须指定配置项popup')
        }
 				console.log(data)
				state.data = data
        data.ref.open()
      }
    }
  })
  // 注册$showModal到Vue原型上，以方便全局调用
  v.prototype.$showPopup = function (option) {
  	console.log(option)
    if (typeof option === 'object') {
      v.prototype.$popupStore.commit('show', option)
    } else {
      throw '配置项必须为对象传入的值为：' + typeof option;
    }
  }
}
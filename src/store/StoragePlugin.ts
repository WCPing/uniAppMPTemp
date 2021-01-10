/**
 * 对vuex state进行持久化存储，主要用来跨页面间调用
 *
 * @param store
 */
import CommonUtil from '@/utils/CommonUtil'

const storagePlugin = (store) => {
  const key = 'vuex'
  // 从缓存中读取
  const storageState = uni.getStorageSync(key)
  const initState = CommonUtil.copy(store.state)
  Object.assign(initState, storageState)
  store.replaceState(initState)

  store.subscribe((mutation, state) => {
    uni.setStorageSync(key, state)
  })
}

export default storagePlugin

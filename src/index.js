import { Compile } from './Compile'
import observe from './Observever'

/**
 * @class 双向绑定类 MVVM
 * @param {[type]} options [description]
 */

export default class MVVM {
  constructor(options) {
    this.$options = options || {}
    const data = this._data = this.$options.data
    const self = this
    Object.keys(data).forEach(key => {
      self._proxyData(key)
    })
    observe(data, this)

    new Compile(Option.el || document.body, this)
  }

  /**
  * [属性代理]
  * @param  {[type]} key    [数据key]
  * @param  {[type]} setter [属性set]
  * @param  {[type]} getter [属性get]
  */
  _proxyData(key, setter, getter) {
    const self = this
    setter = setter || Object.defineProperty(this, key, {
      configurable: false,
      enumerable: true,
      get() {
        return self._data[key]
      },
      set(newVal) {
        self.data[key] = newVal
      }
    })
  }
}


function observe(value, asRootData) {
  if (!value || typeof value !== 'object') {
    return;
  }

  return new Observer(value)
}


class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }

  walk = (obj) => {
    Object.keys(obj).forEach(key => {
      this.observeProperty(obj, key, obj[key])
    })
  }

  observeProperty = (obj, key, val) => {
    const dep = new Dep()
    let childObserve = observe(val)

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (dep.target) {
          dep.depend()
        }

        if (childObserve) {
          childObserve.dep.depend()
        }

        return val
      },

      set(newVal) {
        if (val === newVal || (newVal !== newVal && val !== val)) {
          return;
        }

        val = newVal

        // 监听子属性
        childObserve = observe(newVal)
        // 通知数据变更
        dep.notify()
      }
    })
  }
}


let uid = 0


// 依赖类
class Dep {
  target = null

  constructor() {
    this.id = uid++    // dep id
    this.subs = []     // 存储Watcher 
  }

  // 添加订阅者
  addSub() {

  }

  // 一处订阅者
  removeSub() {

  }


  // 通知数据变更
  notify() {
    this.subs.forEach(sub => {
      // 执行sub的update数据更新
      sub.update()
    })
  }


  // 
  depend() {

  }
}

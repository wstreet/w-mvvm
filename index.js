function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    observeProperty(data, key, data[key])
  })
}

function observeProperty(obj, key, value) {
  observe(value)
  Object.defineProperty(obj, key, {
    enumerable: true, // 可以枚举
    configurable: true, // 可以重新定义
    get() {
      return value
    },
    set(newValue) {
      if (value === newValue || (newValue !== newValue && value !== value)) {
        return;
      }
      console.log(`${key}更新了, ${value} ==> ${newValue}`)
      // 可以做通知视图的操作
      value = newValue
    }
  })
}

const data = {
  name: 'wstreet',
  men: {
    sex: 1
  }
}
observe(data)
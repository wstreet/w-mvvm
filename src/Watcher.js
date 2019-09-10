
import { Dep } from './Observever'

/*
 * @class观察类
 * @param   vm        vm对象
 * @param   expOrFn   属性表达式
 * @param   cb        回调函数
*/

export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.expOrFn = expOrFn.trim()
    this.cb = cb
    this.depIds = {}

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = this.parseGetter(expOrFn)
    }

    this.value = this.get()
  }

  update() {
    this.run()
  }

  run() {
    const newVal = this.get()
    const oldVal = this.value

    if (newVal === oldVal) {
      return;
    }

    this.value = newVal

    this.cb.call(this.vm, newVal, oldVal)
  }

  get() {
    Dep.target = this // 将当前订阅者指向自己
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  addDep(dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depIds[dep.id] = dep
    }
  }

  parseGetter(exp) {
    if (/[^\w.$]/.test(exp)) {
      return
    }

    const exps = exp.split('.')
    return obj => {
      for (let i = 0, len = exps.length; i < len; i++) {
        if (!obj) {
          return;
        }
        obj = obj[exps[i]]
      }
      return obj
    }
  }

}
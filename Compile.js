class Compile {
  constructor(el, value) {
    this.$val = value
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)
    if (this.$el) {
      this.$fragment = this.nodeFragment(this.$el)
      this.compileElement(this.$fragment)

      // 将文档碎片放回真是dom
      this.$el.appendChild(this.$fragment)
    }
  }

  compileElement = (el) => {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      const text = node.textContent
      const reg = /\{\{((?:.|\n)+?)\}\}/

      // 如果是element节点
      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) { // 如果是text节点
        this.compileText(node, RegExp.$1.trim())
      }

      if (node.childNodes && node.childNodes.length) { // 解析子节点包含的指令
        this.compileElement(node)
      }
    })
  }

  nodeFragment = (el) => {
    const fragement = document.createDocumentFragment()
    let child
    while (child = el.firstChild) {
      fragement.append(child)
    }
    return fragement
  }

  // 指令解析
  compile = (node) => {
    const nodeAttrs = node.attributes

    Array.from(nodeAttrs).map(attr => {
      const attrName = attr.name

      if (this.isDirective(attrName)) {
        const exp = attr.value
        const dir = attrName.substring(2)
        // 事件指令
        if (this.isEventDirective) {
          compileUtil.eventHandler(node, this.$vm, exp, dir)
        } else {
          // 普通指令
          compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
        }
        // node.innerHTML = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp]
        node.removeAttribute(attrName)
      }
    })
  }


  compileText = (node, exp) => {
    node.textContent = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp]
  }


  isElementNode = (node) => {
    return node.nodeType === 1
  }

  isTextNode = (node) => {
    return node.nodeType === 3
  }
  // x-yy指令判断
  isDirective = (attr) => {
    return attr.indexOf('x-') === 0
  }

  // 事件指令判断
  isEventDirective = (dir) => {
    return dir.indexOf('on') === 0
  }
}



let $elm
let timer = null

const compileUtils = {
  bind(node, vm, exp, dir) {
    const updateFn = update[`${dir}Updater`]
    updateFn && updateFn(node, this._getVmVal)

    new Watcher(vm, exp, (value, oldValue) => {
      updateFn && updateFn(node, value, oldValue)
    })
  },

  html(node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },

  text(node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },

  class(node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },

  model(node, vm, exp) {
    this.bind(node, vm, exp, 'model')

    const self = this
    const val = this._getVmVal(vm, exp)

    node.addEventListener('input', e => {
      const newVal = e.target.value
      $elm = e.target

      if (val === newVal) {
        return
      }

      // 设置定时器完成ui异步渲染
      clearTimeout(timer)
      timer = setTimeout(() => {
        self._setVmVal(vm, exp, newVal)

        val = newVal
      })
    })
  },

  // 事件处理
  eventHandler(node, vm, exp, dir) {
    const eventType = dir.split(':')[1]

    const fn = vm.$options.methods && vm.$options.methods[exp]

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },

  _getVmVal(vm, exp) {

  }

}
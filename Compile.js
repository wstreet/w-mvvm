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
        node.innerHTML = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp]
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

  isDirective = (attr) => {
    return attr.indexOf('x-') === 0
  }
}


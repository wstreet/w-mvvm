(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MVVM"] = factory();
	else
		root["MVVM"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MVVM; });
/* harmony import */ var _Compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Observever__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class 双向绑定类 MVVM
 * @param {[type]} options [description]
 */

var MVVM =
/*#__PURE__*/
function () {
  function MVVM(options) {
    _classCallCheck(this, MVVM);

    this.$options = options || {};
    var data = this._data = this.$options.data;
    var self = this;
    Object.keys(data).forEach(function (key) {
      self._proxyData(key);
    });
    Object(_Observever__WEBPACK_IMPORTED_MODULE_1__["default"])(data, this);
    new _Compile__WEBPACK_IMPORTED_MODULE_0__["Compile"](Option.el || document.body, this);
  }
  /**
  * [属性代理]
  * @param  {[type]} key    [数据key]
  * @param  {[type]} setter [属性set]
  * @param  {[type]} getter [属性get]
  */


  _createClass(MVVM, [{
    key: "_proxyData",
    value: function _proxyData(key, setter, getter) {
      var self = this;
      setter = setter || Object.defineProperty(this, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          return self._data[key];
        },
        set: function set(newVal) {
          self.data[key] = newVal;
        }
      });
    }
  }]);

  return MVVM;
}();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compile", function() { return Compile; });
/* harmony import */ var _Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }


var $elm;
var timer = null;
var compileUtils = {
  bind: function bind(node, vm, exp, dir) {
    var updateFn = update["".concat(dir, "Updater")];
    updateFn && updateFn(node, this._getVmVal);
    new _Watcher__WEBPACK_IMPORTED_MODULE_0__["default"](vm, exp, function (value, oldValue) {
      updateFn && updateFn(node, value, oldValue);
    });
  },
  html: function html(node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },
  text: function text(node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },
  "class": function _class(node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },
  model: function model(node, vm, exp) {
    this.bind(node, vm, exp, 'model');
    var self = this;

    var val = this._getVmVal(vm, exp);

    node.addEventListener('input', function (e) {
      var newVal = e.target.value;
      $elm = e.target;

      if (val === newVal) {
        return;
      } // 设置定时器完成ui异步渲染


      clearTimeout(timer);
      timer = setTimeout(function () {
        self._setVmVal(vm, exp, newVal);

        val = (_readOnlyError("val"), newVal);
      });
    });
  },
  // 事件处理
  eventHandler: function eventHandler(node, vm, exp, dir) {
    console.log(vm, 'vm');
    var eventType = dir.split(':')[1];
    var fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },
  _getVmVal: function _getVmVal(vm, exp) {
    var val = vm;
    var exps = exp.split('.');
    exps.forEach(function (key) {
      key = key.trim();
      val = val[key];
    });
    return val;
  },
  _setVmVal: function _setVmVal(vm, exp, value) {
    var val = vm;
    var exps = exp.split('.');
    exps.forEach(function (key, index) {
      key = key.trim();

      if (index < exps.length - 1) {
        val = val[key];
      } else {
        val[key] = value;
      }
    });
  }
};
var updater = {
  htmlUpdater: function htmlUpdater(node, value) {
    node.innerHtml = typeof value === 'undefined' ? '' : value;
  },
  textUpdater: function textUpdater(node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value;
  },
  classUpdater: function classUpdater() {},
  modelUpdater: function modelUpdater(node, value, oldValue) {
    if ($elm === node) {
      return false;
    }

    $elm = undefined;
    node.value = typeof value === 'undefined' ? '' : value;
  }
};
var Compile = function Compile(_el, vm) {
  var _this = this;

  _classCallCheck(this, Compile);

  this.compileElement = function (el) {
    var childNodes = el.childNodes;
    Array.from(childNodes).forEach(function (node) {
      var text = node.textContent;
      var reg = /\{\{((?:.|\n)+?)\}\}/; // 如果是element节点

      if (_this.isElementNode(node)) {
        _this.compile(node);
      } else if (_this.isTextNode(node) && reg.test(text)) {
        // 如果是text节点
        _this.compileText(node, RegExp.$1.trim());
      }

      if (node.childNodes && node.childNodes.length) {
        // 解析子节点包含的指令
        _this.compileElement(node);
      }
    });
  };

  this.nodeFragment = function (el) {
    var fragement = document.createDocumentFragment();
    var child;

    while (child = el.firstChild) {
      fragement.append(child);
    }

    return fragement;
  };

  this.compile = function (node) {
    var nodeAttrs = node.attributes;
    Array.from(nodeAttrs).map(function (attr) {
      var attrName = attr.name;

      if (_this.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2); // 事件指令

        if (_this.isEventDirective) {
          compileUtils.eventHandler(node, _this.$vm, exp, dir);
        } else {
          // 普通指令
          compileUtils[dir] && compileUtils[dir](node, _this.$vm, exp);
        } // node.innerHTML = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp]


        node.removeAttribute(attrName);
      }
    });
  };

  this.compileText = function (node, exp) {
    node.textContent = typeof _this.$vm[exp] === 'undefined' ? '' : _this.$vm[exp];
  };

  this.isElementNode = function (node) {
    return node.nodeType === 1;
  };

  this.isTextNode = function (node) {
    return node.nodeType === 3;
  };

  this.isDirective = function (attr) {
    return attr.indexOf('x-') === 0;
  };

  this.isEventDirective = function (dir) {
    return dir.indexOf('on') === 0;
  };

  this.$vm = vm;
  this.$el = this.isElementNode(_el) ? _el : document.querySelector(_el);

  if (this.$el) {
    this.$fragment = this.nodeFragment(this.$el);
    this.compileElement(this.$fragment); // 将文档碎片放回真是dom

    this.$el.appendChild(this.$fragment);
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _Observever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/*
 * @class观察类
 * @param   vm        vm对象
 * @param   expOrFn   属性表达式
 * @param   cb        回调函数
*/

var Watcher =
/*#__PURE__*/
function () {
  function Watcher(vm, expOrFn, cb) {
    _classCallCheck(this, Watcher);

    this.vm = vm;
    this.expOrFn = expOrFn.trim();
    this.cb = cb;
    this.depIds = {};

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = this.parseGetter(expOrFn);
    }

    this.value = this.get();
  }

  _createClass(Watcher, [{
    key: "update",
    value: function update() {
      this.run();
    }
  }, {
    key: "run",
    value: function run() {
      var newVal = this.get();
      var oldVal = this.value;

      if (newVal === oldVal) {
        return;
      }

      this.value = newVal;
      this.cb.call(this.vm, newVal, oldVal);
    }
  }, {
    key: "get",
    value: function get() {
      _Observever__WEBPACK_IMPORTED_MODULE_0__["Dep"].target = this; // 将当前订阅者指向自己

      var value = this.getter.call(this.vm, this.vm);
      _Observever__WEBPACK_IMPORTED_MODULE_0__["Dep"].target = null;
      return value;
    }
  }, {
    key: "addDep",
    value: function addDep(dep) {
      if (!this.depIds.hasOwnProperty(dep.id)) {
        dep.addSub(this);
        this.depIds[dep.id] = dep;
      }
    }
  }, {
    key: "parseGetter",
    value: function parseGetter(exp) {
      if (/[^\w.$]/.test(exp)) {
        return;
      }

      var exps = exp.split('.');
      return function (obj) {
        for (var i = 0, len = exps.length; i < len; i++) {
          if (!obj) {
            return;
          }

          obj = obj[exps[i]];
        }

        return obj;
      };
    }
  }]);

  return Watcher;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dep", function() { return Dep; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function observe(value, asRootData) {
  console.log(value);

  if (!value || _typeof(value) !== 'object') {
    return;
  }

  return new Observer(value);
}

var Observer = function Observer(value) {
  var _this = this;

  _classCallCheck(this, Observer);

  this.walk = function (obj) {
    Object.keys(obj).forEach(function (key) {
      _this.observeProperty(obj, key, obj[key]);
    });
  };

  this.observeProperty = function (obj, key, val) {
    var dep = new Dep();
    var childObserve = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        if (dep.target) {
          dep.depend();
        }

        if (childObserve) {
          childObserve.dep.depend();
        }

        return val;
      },
      set: function set(newVal) {
        if (val === newVal || newVal !== newVal && val !== val) {
          return;
        }

        val = newVal; // 监听子属性

        childObserve = observe(newVal); // 通知数据变更

        dep.notify();
      }
    });
  };

  this.value = value;
  this.walk(value);
};

var uid = 0; // 依赖类

var Dep =
/*#__PURE__*/
function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.target = null;
    this.id = uid++; // dep id

    this.subs = []; // 存储Watcher 
  } // 添加订阅者


  _createClass(Dep, [{
    key: "addSub",
    value: function addSub(sub) {
      this.subs.push(sub);
    } // 移除订阅者

  }, {
    key: "removeSub",
    value: function removeSub(sub) {
      var index = this.subs.indexOf(sub);

      if (index !== -1) {
        this.subs.splice(index, 1);
      }
    } // 通知数据变更

  }, {
    key: "notify",
    value: function notify() {
      this.subs.forEach(function (sub) {
        // 执行sub的update数据更新
        sub.update();
      });
    } // 

  }, {
    key: "depend",
    value: function depend() {
      Dep.target.addDep(this);
    }
  }]);

  return Dep;
}();

/***/ })
/******/ ])["default"];
});
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/step/src/main.vue?vue&type=template&id=285709d3&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "aex-step",
      class: [
        _vm.isDot && "is-dot",
        _vm.isStrip && "is-strip",
        _vm.isSimple ? "is-simple" : "is-" + _vm.$parent.direction,
        !_vm.isStrip && _vm.isLast && !_vm.space && !_vm.isCenter && "is-flex",
        _vm.isCenter && !_vm.isVertical && !_vm.isSimple && "is-center"
      ],
      style: _vm.style()
    },
    [
      !_vm.isStrip
        ? [
            _c(
              "div",
              {
                class: ["aex-step__head", _vm.isProcess && "is-process"],
                style: _vm.isFinished
                  ? { borderColor: _vm.finishColor, color: _vm.finishColor }
                  : ""
              },
              [
                _c(
                  "div",
                  { staticClass: "aex-step__line", style: _vm.lineStyle() },
                  [
                    _c("i", {
                      staticClass: "aex-step__line-inner",
                      style: _vm.lineInnerStyle
                    })
                  ]
                ),
                !_vm.isDot
                  ? _c(
                      "div",
                      {
                        ref: "stepIcon",
                        staticClass: "aex-step__icon",
                        class: "is-" + (_vm.icon ? "icon" : "text"),
                        style:
                          !_vm.icon && _vm.isProcess
                            ? {
                                borderColor: _vm.finishColor,
                                color: "#fff",
                                background: _vm.finishColor
                              }
                            : ""
                      },
                      [
                        !_vm.isFinished || !_vm.__finishedIcon
                          ? _vm._t("icon", [
                              _vm.icon
                                ? _c("i", {
                                    staticClass: "aex-step__icon-inner",
                                    class: [_vm.icon]
                                  })
                                : !_vm.isSimple
                                ? _c(
                                    "div",
                                    { staticClass: "aex-step__icon-inner" },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(_vm.index) +
                                          "\n\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _c("i", {
                              staticClass: "aex-step__icon-inner is-status",
                              class: _vm.__finishedIcon
                            })
                      ],
                      2
                    )
                  : _c("div", {
                      ref: "stepIcon",
                      staticClass: "aex-step__icon",
                      style: _vm.isFinished
                        ? {
                            borderColor: _vm.finishColor,
                            background: _vm.finishColor
                          }
                        : ""
                    }),
                _vm.textDirection == "horizontal"
                  ? _c(
                      "div",
                      {
                        ref: "titleHorizontal",
                        staticClass: "aex-step__title--horizontal",
                        style: _vm.isFinished ? { color: _vm.finishColor } : ""
                      },
                      [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                      2
                    )
                  : _vm._e()
              ]
            ),
            _vm.textDirection == "vertical"
              ? _c("div", { staticClass: "aex-step__main" }, [
                  _c(
                    "div",
                    {
                      ref: "title",
                      staticClass: "aex-step__title",
                      style: _vm.isFinished ? { color: _vm.finishColor } : ""
                    },
                    [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                    2
                  ),
                  _vm.isSimple
                    ? _c("div", { staticClass: "aex-step__arrow" })
                    : _c(
                        "div",
                        {
                          staticClass: "aex-step__description",
                          style: _vm.isFinished
                            ? { color: _vm.finishColor }
                            : ""
                        },
                        [
                          _vm._t("description", [
                            _vm._v(_vm._s(_vm.description))
                          ])
                        ],
                        2
                      )
                ])
              : _vm._e()
          ]
        : [
            _c(
              "div",
              {
                staticClass: "aex-step__strip__line",
                style: _vm.isFinished ? { background: _vm.finishColor } : ""
              },
              [
                _c(
                  "div",
                  {
                    ref: "title",
                    staticClass: "aex-step__strip__title",
                    style: _vm.isFinished ? { color: "#fff" } : ""
                  },
                  [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                  2
                )
              ]
            ),
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isFinished,
                  expression: "isFinished"
                }
              ],
              staticClass: "aex-step__strip__arrow",
              style: { borderLeftColor: _vm.finishColor }
            })
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/step/src/main.vue?vue&type=template&id=285709d3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/step/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
	name: 'AexStep',

	props: {
		title: String,
		icon: String,
		finishedIcon: String,
		description: String
	},

	data: function data() {
		return {
			index: -1,
			lineInnerStyle: {}
		};
	},
	beforeCreate: function beforeCreate() {
		this.$parent.steps.push(this);
	},
	beforeDestroy: function beforeDestroy() {
		var steps = this.$parent.steps;
		var index = steps.indexOf(this);
		if (index >= 0) {
			steps.splice(index, 1);
		}
	},


	computed: {
		// 后面处理横向文字 TODO:
		textDirection: function textDirection() {
			return this.$parent.textDirection;
		},
		isProcess: function isProcess() {
			return this.$parent.active + 1 == this.index;
		},
		isFinished: function isFinished() {
			return this.index >= 0 && this.index <= this.$parent.active;
		},

		// 完成时的图标
		__finishedIcon: function __finishedIcon() {
			return this.finishedIcon || this.$parent.finishedIcon;
		},

		// 完成时的颜色
		finishColor: function finishColor() {
			return this.$parent.finishColor;
		},
		isCenter: function isCenter() {
			return this.$parent.alignCenter;
		},
		isVertical: function isVertical() {
			return this.$parent.direction === 'vertical';
		},
		isSimple: function isSimple() {
			return this.$parent.simple;
		},
		isDot: function isDot() {
			return this.$parent.dot;
		},
		isStrip: function isStrip() {
			return this.$parent.strip;
		},
		isLast: function isLast() {
			var parent = this.$parent;
			return parent.steps[parent.steps.length - 1] === this;
		},
		stepsCount: function stepsCount() {
			return this.$parent.steps.length;
		},
		space: function space() {
			var isSimple = this.isSimple,
			    space = this.$parent.space;

			return isSimple ? '' : space;
		}
	},

	methods: {
		calcProgress: function calcProgress(val) {
			var step = 100; // line-inner 的动态宽度
			var style = {};
			style.transitionDelay = 150 * this.index + 'ms'; // 默认延迟
			if (val < this.index) {
				step = 0;
				style.transitionDelay = -150 * this.index + 'ms';
			}

			style.borderWidth = step && !this.isSimple ? '1px' : 0;
			this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

			this.lineInnerStyle = style;
		},
		lineStyle: function lineStyle() {
			// 如果是 vertical 模式,不处理，
			if (this.isVertical) return {};
			var titleHorizontal = this.$refs['titleHorizontal'];
			var stepIcon = this.$refs.stepIcon;
			var titleHorizontalWidth = !!titleHorizontal ? titleHorizontal.offsetWidth : 0;
			var stepIconWidth = !!stepIcon ? stepIcon.offsetWidth : 0;
			var _offset = stepIconWidth + titleHorizontalWidth + 10 + 'px';
			return {
				left: !this.isCenter ? _offset : this.textDirection == 'horizontal' ? 'calc(50% + ' + _offset + ' - 10px)' : 'calc(50% + 20px)'
			};
		},
		style: function style() {
			var style = {};
			var parent = this.$parent;
			var len = parent.steps.length;

			if (!!this.isStrip) {
				style.flexBasis = 100 / len + '%';
				if (this.$parent.active > this.index) {
					style.background = this.finishColor;
				}
			} else {
				var space = typeof this.space === 'number' ? this.space + 'px' : this.space ? this.space : 100 / (len - (this.isCenter ? 0 : 1)) + '%';
				style.flexBasis = space;
				if (this.isVertical) return style;
				if (this.isLast) {
					var titleHorizontal = this.$refs['titleHorizontal'];
					style.maxWidth = 100 / this.stepsCount + '%';
					// 如果最后一个是titleHorizontal模式，就加个宽度
					style.width = !!titleHorizontal ? titleHorizontal.offsetWidth + 30 + 'px' : 'auto';
				} else {
					style.marginRight = -this.$parent.stepOffset + 'px';
				}
			}
			return style;
		}
	},

	mounted: function mounted() {
		var _this = this;

		var unwatch = this.$watch('index', function (val) {
			_this.$watch('$parent.active', _this.calcProgress, {
				immediate: true
			});
			unwatch();
		});
	}
});
// CONCATENATED MODULE: ./packages/step/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/step/src/main.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/step/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/step/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var step = __webpack_exports__["default"] = (main);

/***/ })

/******/ });
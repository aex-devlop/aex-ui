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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("aex-ui/lib/mixins/migrating");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("aex-ui/lib/utils/shared");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("aex-ui/lib/mixins/emitter");

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/main.vue?vue&type=template&id=19e66f26&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.type === "textarea" ? "aex-textarea" : "aex-input",
        _vm.inputSize ? "aex-input--" + _vm.inputSize : "",
        {
          "is-focus": _vm.focused,
          "is-disabled": _vm.inputDisabled,
          "is-exceed": _vm.inputExceed,
          "aex-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "aex-input-group--append": _vm.$slots.append,
          "aex-input-group--prepend": _vm.$slots.prepend,
          "aex-input--prefix": _vm.$slots.prefix || _vm.prefixIcon,
          "aex-input--suffix":
            _vm.$slots.suffix ||
            _vm.suffixIcon ||
            _vm.clearable ||
            _vm.showPassword
        }
      ],
      on: {
        mouseenter: function($event) {
          _vm.hovering = true
        },
        mouseleave: function($event) {
          _vm.hovering = false
        }
      }
    },
    [
      _vm.type !== "textarea"
        ? [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "aex-input-group__prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.$slots.prefix || _vm.prefixIcon
              ? _c(
                  "span",
                  { staticClass: "aex-input__prefix" },
                  [
                    _vm._t("prefix"),
                    _vm.prefixIcon
                      ? _c("i", {
                          staticClass: "aex-input__icon",
                          class: _vm.prefixIcon
                        })
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.type !== "textarea"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      staticClass: "aex-input__inner",
                      attrs: {
                        tabindex: _vm.tabindex,
                        type: _vm.showPassword
                          ? _vm.passwordVisible
                            ? "text"
                            : "password"
                          : _vm.type,
                        disabled: _vm.inputDisabled,
                        readonly: _vm.readonly,
                        autocomplete: _vm.autoComplete || _vm.autocomplete,
                        "aria-label": _vm.label
                      },
                      on: {
                        compositionstart: _vm.handleCompositionStart,
                        compositionupdate: _vm.handleCompositionUpdate,
                        compositionend: _vm.handleCompositionEnd,
                        input: _vm.handleInput,
                        focus: _vm.handleFocus,
                        blur: _vm.handleBlur,
                        change: _vm.handleChange,
                        keyup: _vm.handleKeyup,
                        keydown: _vm.handleKeydown
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm._e(),
            _vm.getSuffixVisible()
              ? _c("span", { staticClass: "aex-input__suffix" }, [
                  _c(
                    "span",
                    { staticClass: "aex-input__suffix-inner" },
                    [
                      !_vm.showClear ||
                      !_vm.showPwdVisible ||
                      !_vm.isWordLimitVisible
                        ? [
                            _vm._t("suffix"),
                            _vm.suffixIcon
                              ? _c("i", {
                                  staticClass: "aex-input__icon",
                                  class: _vm.suffixIcon
                                })
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm.showClear
                        ? _c("i", {
                            staticClass:
                              "aex-input__icon aex-icon-error aex-input__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                              },
                              click: _vm.clear
                            }
                          })
                        : _vm._e(),
                      _vm.showPwdVisible
                        ? _c("i", {
                            class: [
                              "aex-input__icon",
                              "aex-input__clear",
                              !!_vm.passwordVisible
                                ? "aex-icon-eye-open"
                                : "aex-icon-eye-close"
                            ],
                            on: { click: _vm.handlePasswordVisible }
                          })
                        : _vm._e(),
                      _vm.isWordLimitVisible
                        ? _c("span", { staticClass: "aex-input__count" }, [
                            _c(
                              "span",
                              { staticClass: "aex-input__count-inner" },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.textLength) +
                                    "/" +
                                    _vm._s(_vm.upperLimit) +
                                    " "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm.validateState
                    ? _c("i", {
                        staticClass: "aex-input__icon",
                        class: ["aex-input__validateIcon", _vm.validateIcon]
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "aex-input-group__append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ]
        : _c(
            "textarea",
            _vm._b(
              {
                ref: "textarea",
                staticClass: "aex-textarea__inner",
                style: _vm.textareaStyle,
                attrs: {
                  tabindex: _vm.tabindex,
                  disabled: _vm.inputDisabled,
                  readonly: _vm.readonly,
                  autocomplete: _vm.autoComplete || _vm.autocomplete,
                  "aria-label": _vm.label
                },
                on: {
                  compositionstart: _vm.handleCompositionStart,
                  compositionupdate: _vm.handleCompositionUpdate,
                  compositionend: _vm.handleCompositionEnd,
                  input: _vm.handleInput,
                  focus: _vm.handleFocus,
                  blur: _vm.handleBlur,
                  change: _vm.handleChange
                }
              },
              "textarea",
              _vm.$attrs,
              false
            )
          ),
      _vm.isWordLimitVisible && _vm.type === "textarea"
        ? _c(
            "span",
            { class: ["aex-input__count", _vm.inputExceed && "is-exceed"] },
            [_vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit))]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/main.vue?vue&type=template&id=19e66f26&

// EXTERNAL MODULE: external "aex-ui/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "aex-ui/lib/mixins/migrating"
var migrating_ = __webpack_require__(10);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./packages/input/src/calcTextareaHeight.js
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};
// EXTERNAL MODULE: external "aex-ui/lib/utils/merge"
var merge_ = __webpack_require__(9);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// EXTERNAL MODULE: external "aex-ui/lib/utils/shared"
var shared_ = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/main.vue?vue&type=script&lang=js&
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
	name: 'AexInput',

	componentName: 'AexInput',

	mixins: [emitter_default.a, migrating_default.a],

	inheritAttrs: false,

	inject: {
		aexForm: {
			default: ''
		},
		aexFormItem: {
			default: ''
		}
	},

	data: function data() {
		return {
			textareaCalcStyle: {},
			hovering: false,
			focused: false,
			isComposing: false,
			passwordVisible: false
		};
	},


	props: {
		value: [String, Number],
		size: String,
		resize: String,
		form: String,
		disabled: Boolean,
		readonly: Boolean,
		type: {
			type: String,
			default: 'text'
		},
		autosize: {
			type: [Boolean, Object],
			default: false
		},
		autocomplete: {
			type: String,
			default: 'off'
		},
		/** @Deprecated in next major version */
		autoComplete: {
			type: String,
			validator: function validator(val) {
				 false && false;
				return true;
			}
		},
		validateEvent: {
			type: Boolean,
			default: true
		},
		suffixIcon: String,
		prefixIcon: String,
		label: String,
		clearable: {
			type: Boolean,
			default: false
		},
		showPassword: {
			type: Boolean,
			default: false
		},
		showWordLimit: {
			type: Boolean,
			default: false
		},
		tabindex: String
	},

	computed: {
		_aexFormItemSize: function _aexFormItemSize() {
			return (this.aexFormItem || {}).aexFormItemSize;
		},
		validateState: function validateState() {
			return this.aexFormItem ? this.aexFormItem.validateState : '';
		},
		needStatusIcon: function needStatusIcon() {
			return this.aexForm ? this.aexForm.statusIcon : false;
		},
		validateIcon: function validateIcon() {
			return {
				validating: 'aex-icon-loading',
				success: 'aex-icon-check-circle',
				error: 'aex-icon-error'
			}[this.validateState];
		},
		textareaStyle: function textareaStyle() {
			return merge_default()({}, this.textareaCalcStyle, { resize: this.resize });
		},
		inputSize: function inputSize() {
			return this.size || this._aexFormItemSize || (this.$AEXUI || {}).size;
		},
		inputDisabled: function inputDisabled() {
			return this.disabled || (this.aexForm || {}).disabled;
		},
		nativeInputValue: function nativeInputValue() {
			return this.value === null || this.value === undefined ? '' : String(this.value);
		},
		showClear: function showClear() {
			return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
		},
		showPwdVisible: function showPwdVisible() {
			return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
		},
		isWordLimitVisible: function isWordLimitVisible() {
			return this.showWordLimit && this.$attrs.maxlength && (this.type === 'text' || this.type === 'textarea') && !this.inputDisabled && !this.readonly && !this.showPassword;
		},
		upperLimit: function upperLimit() {
			return this.$attrs.maxlength;
		},
		textLength: function textLength() {
			if (typeof this.value === 'number') {
				return String(this.value).length;
			}

			return (this.value || '').length;
		},
		inputExceed: function inputExceed() {
			// show exceed style if length of initial value greater then maxlength
			return this.isWordLimitVisible && this.textLength >= this.upperLimit;
		}
	},

	watch: {
		value: function value(val) {
			this.$nextTick(this.resizeTextarea);
			if (this.validateEvent) {
				this.dispatch('AexFormItem', 'aex.form.change', [val]);
			}
		},

		// native input value is set explicitly
		// do not use v-model / :value in template
		// see: https://github.com/ElemeFE/element/issues/14521
		nativeInputValue: function nativeInputValue() {
			this.setNativeInputValue();
		},

		// when change between <input> and <textarea>,
		// update DOM dependent value and styles
		// https://github.com/ElemeFE/element/issues/14857
		type: function type() {
			var _this = this;

			this.$nextTick(function () {
				_this.setNativeInputValue();
				_this.resizeTextarea();
				_this.updateIconOffset();
			});
		}
	},

	methods: {
		focus: function focus() {
			this.getInput().focus();
		},
		blur: function blur() {
			this.getInput().blur();
		},
		getMigratingConfig: function getMigratingConfig() {
			return {
				props: {
					icon: 'icon is removed, use suffix-icon / prefix-icon instead.',
					'on-icon-click': 'on-icon-click is removed.'
				},
				events: {
					click: 'click is removed.'
				}
			};
		},
		handleBlur: function handleBlur(event) {
			this.focused = false;
			this.$emit('blur', event);
			if (this.validateEvent) {
				this.dispatch('AexFormItem', 'aex.form.blur', [this.value]);
			}
		},
		select: function select() {
			this.getInput().select();
		},
		resizeTextarea: function resizeTextarea() {
			if (this.$isServer) return;
			var autosize = this.autosize,
			    type = this.type;

			if (type !== 'textarea') return;
			if (!autosize) {
				this.textareaCalcStyle = {
					minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
				};
				return;
			}
			var minRows = autosize.minRows;
			var maxRows = autosize.maxRows;

			this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
		},
		setNativeInputValue: function setNativeInputValue() {
			var input = this.getInput();
			if (!input) return;
			if (input.value === this.nativeInputValue) return;
			input.value = this.nativeInputValue;
		},
		handleFocus: function handleFocus(event) {
			this.focused = true;
			this.$emit('focus', event);
		},
		handleCompositionStart: function handleCompositionStart() {
			this.isComposing = true;
		},
		handleCompositionUpdate: function handleCompositionUpdate(event) {
			var text = event.target.value;
			var lastCharacter = text[text.length - 1] || '';
			this.isComposing = !Object(shared_["isKorean"])(lastCharacter);
		},
		handleCompositionEnd: function handleCompositionEnd(event) {
			if (this.isComposing) {
				this.isComposing = false;
				this.handleInput(event);
			}
		},
		handleInput: function handleInput(event) {
			// should not emit input during composition
			// see: https://github.com/ElemeFE/element/issues/10516
			if (this.isComposing) return;

			// hack for https://github.com/ElemeFE/element/issues/8548
			// should remove the following line when we don't support IE
			if (event.target.value === this.nativeInputValue) return;

			this.$emit('input', event.target.value);

			// ensure native input value is controlled
			// see: https://github.com/ElemeFE/element/issues/12850
			this.$nextTick(this.setNativeInputValue);
		},
		handleKeyup: function handleKeyup(event) {
			this.$emit('keyup', event);
		},
		handleKeydown: function handleKeydown(event) {
			this.$emit('keydown', event);
		},
		handleChange: function handleChange(event) {
			this.$emit('change', event.target.value);
		},
		calcIconOffset: function calcIconOffset(place) {
			var elList = [].slice.call(this.$el.querySelectorAll('.aex-input__' + place) || []);
			if (!elList.length) return;
			var el = null;
			for (var i = 0; i < elList.length; i++) {
				if (elList[i].parentNode === this.$el) {
					el = elList[i];
					break;
				}
			}
			if (!el) return;
			var pendantMap = {
				suffix: 'append',
				prefix: 'prepend'
			};

			var pendant = pendantMap[place];
			if (this.$slots[pendant]) {
				el.style.transform = 'translateX(' + (place === 'suffix' ? '-' : '') + this.$el.querySelector('.aex-input-group__' + pendant).offsetWidth + 'px)';
			} else {
				el.removeAttribute('style');
			}
		},
		updateIconOffset: function updateIconOffset() {
			this.calcIconOffset('prefix');
			this.calcIconOffset('suffix');
		},
		clear: function clear() {
			this.$emit('input', '');
			this.$emit('change', '');
			this.$emit('clear');
			this.focus();
		},
		handlePasswordVisible: function handlePasswordVisible() {
			var _this2 = this;

			this.passwordVisible = !this.passwordVisible;
			this.$nextTick(function () {
				_this2.focus();
			});
		},
		getInput: function getInput() {
			return this.$refs.input || this.$refs.textarea;
		},
		getSuffixVisible: function getSuffixVisible() {
			return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon;
		}
	},

	created: function created() {
		this.$on('inputSelect', this.select);
	},
	mounted: function mounted() {
		this.setNativeInputValue();
		this.resizeTextarea();
		this.updateIconOffset();
	},
	updated: function updated() {
		this.$nextTick(this.updateIconOffset);
	}
});
// CONCATENATED MODULE: ./packages/input/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/input/src/main.vue





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
component.options.__file = "packages/input/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var input = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("aex-ui/lib/utils/merge");

/***/ })

/******/ });
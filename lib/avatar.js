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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/avatar/src/main.vue?vue&type=script&lang=js&

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
	name: 'AexAvatar',

	props: {
		size: {
			type: [Number, String],
			default: 40,
			validator: function validator(val) {
				if (typeof val === 'string') {
					return ['large', 'medium', 'small'].includes(val);
				}
				return typeof val === 'number';
			}
		},
		shape: {
			type: String,
			default: 'circle',
			validator: function validator(val) {
				return ['circle', 'square'].includes(val);
			}
		},
		icon: String,
		src: String,
		alt: String,
		srcSet: String,
		error: Function,
		fit: {
			type: String,
			default: 'cover'
		}
	},

	data: function data() {
		return {
			isImageExist: true
		};
	},


	computed: {
		avatarClass: function avatarClass() {
			var size = this.size,
			    icon = this.icon,
			    shape = this.shape;

			var classList = ['aex-avatar'];

			if (size && typeof size === 'string') {
				classList.push('aex-avatar--' + size);
			}

			if (icon) {
				classList.push('aex-avatar--icon');
			}

			if (shape) {
				classList.push('aex-avatar--' + shape);
			}

			return classList.join(' ');
		},
		sizeStyle: function sizeStyle() {
			return typeof this.size === 'number' ? {
				height: this.size + 'px',
				width: this.size + 'px',
				lineHeight: this.size + 'px'
			} : {};
		}
	},

	methods: {
		handleError: function handleError() {
			var error = this.error;

			var errorFlag = error ? error() : undefined;
			if (errorFlag !== false) {
				this.isImageExist = false;
			}
		},
		renderAvatar: function renderAvatar() {
			var h = this.$createElement;
			var icon = this.icon,
			    src = this.src,
			    alt = this.alt,
			    isImageExist = this.isImageExist,
			    srcSet = this.srcSet,
			    fit = this.fit;

			if (isImageExist && src) {
				return h('img', {
					attrs: {
						src: src,

						alt: alt,
						srcSet: srcSet
					},
					on: {
						'error': this.handleError
					},
					style: { 'object-fit': fit }
				});
			}

			if (icon) {
				return h('i', { 'class': icon });
			}
			if (this.$slots.default) {
				return this.$slots.default;
			}
			return h('img', {
				attrs: {
					src: 'data:image/png;base64,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',
					alt: alt
				},
				style: { 'object-fit': fit }
			});
		}
	},

	render: function render() {
		var h = arguments[0];
		var avatarClass = this.avatarClass,
		    size = this.size;


		var sizeStyle = typeof size === 'number' ? {
			height: size + 'px',
			width: size + 'px',
			lineHeight: size + 'px'
		} : {};

		return h(
			'span',
			{ 'class': avatarClass, style: sizeStyle },
			[this.renderAvatar()]
		);
	}
});
// CONCATENATED MODULE: ./packages/avatar/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/avatar/src/main.vue
var render, staticRenderFns




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
component.options.__file = "packages/avatar/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/avatar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var avatar = __webpack_exports__["default"] = (main);

/***/ })

/******/ });
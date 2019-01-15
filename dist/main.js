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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/decko/dist/decko.js":
/*!******************************************!*\
  !*** ./node_modules/decko/dist/decko.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { var mod; }})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});\n\n//# sourceMappingURL=decko.js.map\n\n//# sourceURL=webpack:///./node_modules/decko/dist/decko.js?");

/***/ }),

/***/ "./src/demo/constructor/constructor.js":
/*!*********************************************!*\
  !*** ./src/demo/constructor/constructor.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constructor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructor.scss */ \"./src/demo/constructor/constructor.scss\");\n/* harmony import */ var _constructor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_constructor_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tick_tick_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick/tick.scss */ \"./src/demo/tick/tick.scss\");\n/* harmony import */ var _tick_tick_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tick_tick_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\n\n\nlet Sliderm3pageContent = (_class = class Sliderm3pageContent {\n    constructor(element) {\n        this.sliderm3pageContentDiv = element;\n        this.sliderm3Div = $('.sliderm3', element)[0];\n        this.sliderm3pageInputDiv = $('.sliderm3page__inputs', element)[0];\n        this.inputTickHintDiv = $('.tick-hint', this.sliderm3pageInputDiv)[0];\n        this.inputTickScaleDiv = $('.tick-scale', this.sliderm3pageInputDiv)[0];\n        this.inputTickIntervalDiv = $('.tick-interval', this.sliderm3pageInputDiv)[0];\n        this.inputTickVerticalDiv = $('.tick-vertical', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermLengthDiv = $('.sliderm-length', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermValue2Div = $('.sliderm-value2', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermValue1Div = $('.sliderm-value1', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermMinDiv = $('.sliderm-min', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermMaxDiv = $('.sliderm-max', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermStepDiv = $('.sliderm-step', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermIntervalsDiv = $('.sliderm-intervals', this.sliderm3pageInputDiv)[0];\n        this.inputSlidermResultDiv = $('.sliderm3page__result', element)[0];\n        this.chooseColorLineDiv = $('.chooseColor__item', element)[0];\n        this.chooseColorRangeDiv = $('.chooseColor__item', element)[1];\n        this.chooseColorPointDiv = $('.chooseColor__item', element)[2];\n        this.chooseColorScaleDiv = $('.chooseColor__item', element)[3];\n        this.chooseColorTextDiv = $('.chooseColor__item', element)[4];\n\n        this.setInputs();\n\n        this.sliderm3pageInputDiv.addEventListener('change', this.inputsChange);\n        this.sliderm3pageInputDiv.addEventListener('click', this.inputsClick);\n        this.sliderm3Div.addEventListener('mousemove', this.sliderm3change);\n        this.sliderm3Div.addEventListener('mousedown', this.sliderm3change);\n\n        $(this.chooseColorLineDiv.parentElement).bind(\"DOMSubtreeModified\", this.setResult);\n    }\n\n    sliderm3change() {\n        this.setInputs();\n        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src=\"sliderm3.js\"></script>`;\n        this.sliderm3Div.dispatchEvent(new Event('draw'));\n    }\n\n    inputsChange() {\n        this.getInputs();\n        this.sliderm3Div.dispatchEvent(new Event('draw'));\n    }\n\n    inputsClick() {\n        this.getInputs();\n        this.setInputs();\n        // if (this.sliderm3Div.div.dataset.interval) \t\n        //     this.div.dataset.value1 = this.range.value1 < +this.range.value2 ? this.range.value1 : this.range.value2;\t\n        this.sliderm3Div.dispatchEvent(new Event('draw'));\n    }\n\n    setResult() {\n        this.sliderm3Div.dataset.colorLine = this.chooseColor2color(this.chooseColorLineDiv);\n        this.sliderm3Div.dataset.colorRange = this.chooseColor2color(this.chooseColorRangeDiv);\n        this.sliderm3Div.dataset.colorPoint = this.chooseColor2color(this.chooseColorPointDiv);\n        this.sliderm3Div.dataset.colorScale = this.chooseColor2color(this.chooseColorScaleDiv);\n        this.sliderm3Div.dataset.colorText = this.chooseColor2color(this.chooseColorTextDiv);\n        this.sliderm3Div.dispatchEvent(new Event('draw'));\n        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src=\"sliderm3.js\"></script>`;\n    }\n    chooseColor2color(div) {\n        if (div) {\n            var sliders = div.getElementsByClassName('sliderm3');\n            var red = sliders[0].getAttribute('data-value2');\n            var green = sliders[1].getAttribute('data-value2');\n            var blue = sliders[2].getAttribute('data-value2');\n            var opacity = sliders[3].getAttribute('data-value2') / 255;\n            //red, green, blue, opacity\n            return `rgba(${red}, ${green}, ${blue}, ${opacity})`;\n        }\n        return \"gray\";\n    }\n    getInputs() {\n        this.sliderm3Div.dataset.hint = this.inputTickHintDiv.classList.contains('true') ? 'true' : '';\n        this.sliderm3Div.dataset.scale = this.inputTickScaleDiv.classList.contains('true') ? 'true' : '';\n        this.sliderm3Div.dataset.interval = this.inputTickIntervalDiv.classList.contains('true') ? 'true' : '';\n        this.sliderm3Div.dataset.vertical = this.inputTickVerticalDiv.classList.contains('true') ? 'true' : '';\n        this.sliderm3Div.dataset.length = this.inputSlidermLengthDiv.value || \"100%\";\n        this.sliderm3Div.dataset.value2 = this.inputSlidermValue2Div.value;\n        if (this.inputSlidermValue1Div.value) this.sliderm3Div.dataset.value1 = this.inputSlidermValue1Div.value;\n        this.sliderm3Div.dataset.min = this.inputSlidermMinDiv.value;\n        this.sliderm3Div.dataset.max = this.inputSlidermMaxDiv.value;\n        this.sliderm3Div.dataset.step = this.inputSlidermStepDiv.value;\n        this.sliderm3Div.dataset.intervals = this.inputSlidermIntervalsDiv.value;\n        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src=\"sliderm3.js\"></script>`;\n    }\n    setInputs() {\n        if (this.sliderm3Div.dataset.interval) this.inputSlidermValue1Div.value = Math.round(this.sliderm3Div.dataset.value1 * 100) / 100;else this.inputSlidermValue1Div.value = \"\";\n        this.inputSlidermValue2Div.value = Math.round(this.sliderm3Div.dataset.value2 * 100) / 100;\n        this.inputSlidermMinDiv.value = this.sliderm3Div.dataset.min;\n        this.inputSlidermMaxDiv.value = this.sliderm3Div.dataset.max;\n        this.inputSlidermStepDiv.value = this.sliderm3Div.dataset.step;\n        this.inputSlidermIntervalsDiv.value = this.sliderm3Div.dataset.intervals;\n        this.inputSlidermLengthDiv.value = this.sliderm3Div.dataset.length;\n        if (this.sliderm3Div.dataset.hint) $(this.inputTickHintDiv).addClass('true');\n        if (this.sliderm3Div.dataset.scale) $(this.inputTickScaleDiv).addClass('true');\n        if (this.sliderm3Div.dataset.interval) $(this.inputTickIntervalDiv).addClass('true');\n        if (this.sliderm3Div.dataset.vertical) $(this.inputTickVerticalDiv).addClass('true');\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, \"sliderm3change\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"sliderm3change\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"inputsChange\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"inputsChange\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"inputsClick\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"inputsClick\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"setResult\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"setResult\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"chooseColor2color\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"chooseColor2color\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"getInputs\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"getInputs\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"setInputs\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"setInputs\"), _class.prototype)), _class);\n\n\n$('.sliderm3page__content').each((index, element) => new Sliderm3pageContent(element));\n\n//# sourceURL=webpack:///./src/demo/constructor/constructor.js?");

/***/ }),

/***/ "./src/demo/constructor/constructor.scss":
/*!***********************************************!*\
  !*** ./src/demo/constructor/constructor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/demo/constructor/constructor.scss?");

/***/ }),

/***/ "./src/demo/favicon.ico":
/*!******************************!*\
  !*** ./src/demo/favicon.ico ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"/favicon.ico\";\n\n//# sourceURL=webpack:///./src/demo/favicon.ico?");

/***/ }),

/***/ "./src/demo/index.js":
/*!***************************!*\
  !*** ./src/demo/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/demo/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favicon.ico */ \"./src/demo/favicon.ico\");\n/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_favicon_ico__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constructor_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor/constructor */ \"./src/demo/constructor/constructor.js\");\n\n\n\n\n\nconsole.log(\"Run...\");\n\n//# sourceURL=webpack:///./src/demo/index.js?");

/***/ }),

/***/ "./src/demo/scss/main.scss":
/*!*********************************!*\
  !*** ./src/demo/scss/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/demo/scss/main.scss?");

/***/ }),

/***/ "./src/demo/tick/tick.scss":
/*!*********************************!*\
  !*** ./src/demo/tick/tick.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/demo/tick/tick.scss?");

/***/ })

/******/ });
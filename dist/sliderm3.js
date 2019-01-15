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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sliderm3.js");
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

/***/ "./src/sliderm3.js":
/*!*************************!*\
  !*** ./src/sliderm3.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet Sliderm3 = (_class = class Sliderm3 {\n    constructor(element) {\n        this.div = element;\n        this.div.style.position = 'relative';\n        this.div.style.userSelect = 'none';\n        this.div.style.width = '100%';\n        this.draw();\n        this.div.oncontextmenu = function () {\n            return false;\n        };\n        this.div.ondragstart = function () {\n            return false;\n        };\n        this.div.onselectstart = function () {\n            return false;\n        };\n        this.mousedown = 0;\n        this.div.addEventListener('draw', this.draw);\n        document.addEventListener('mousemove', this.sliderm3MouseMoveListener);\n        document.addEventListener('mouseup', this.sliderm3CancelMove);\n        window.addEventListener('resize', this.resizeThrottler);\n    }\n\n    resizeThrottler() {\n        if (!this.resizeTimeout) {\n            this.resizeTimeout = setTimeout(function () {\n                this.resizeTimeout = null;\n                this.draw();\n            }.bind(this), 66);\n        }\n    }\n\n    sliderm3MouseDownListener(e) {\n        if (this.div.dataset.interval && e.clientX < this.getCoords(this.rangeDiv).left + this.rangeDiv.offsetWidth - this.div.dataset.pointSize / 2) this.mousedown = 1;else this.mousedown = 2;\n        this.changeRange(e);\n    }\n\n    sliderm3MouseMoveListener(e) {\n        if (this.mousedown != 0) {\n            this.changeRange(e);\n        }\n    }\n\n    changeRange(e) {\n        var newValue = this.div.dataset.step * Math.round((+this.div.dataset.min + (e.clientX - this.getCoords(this.lineDiv).left - +this.div.dataset.lineHeight / 2) * this.range / this.rangeMaxWidth) / this.div.dataset.step);\n        if (this.mousedown == 1) {\n            this.div.dataset.value1 = newValue;\n            if (+this.div.dataset.value1 > +this.div.dataset.value2) this.div.dataset.value1 = this.div.dataset.value2;\n            if (+this.div.dataset.value1 < +this.div.dataset.min) this.div.dataset.value1 = this.div.dataset.min;\n        }\n        if (this.mousedown == 2) {\n            this.div.dataset.value2 = newValue;\n            if (this.div.dataset.interval && +this.div.dataset.value2 < +this.div.dataset.value1) this.div.dataset.value2 = this.div.dataset.value1;\n            if (!this.div.dataset.interval && +this.div.dataset.value2 < +this.div.dataset.min) this.div.dataset.value2 = this.div.dataset.min;\n            if (+this.div.dataset.value2 > +this.div.dataset.max) this.div.dataset.value2 = this.div.dataset.max;\n        }\n        this.draw();\n    }\n\n    sliderm3CancelMove() {\n        this.mousedown = 0;\n    }\n\n    getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n            top: box.top,\n            left: box.left\n        };\n    }\n\n    draw() {\n        if (this.lineDiv) this.lineDiv.remove();\n        this.drawLine();\n        if (this.div.dataset.scale) this.drawScale();\n        this.drawRange();\n        if (this.div.dataset.interval) this.drawPoint1();\n        this.drawPoint2();\n    }\n    drawLine() {\n        this.lineDiv = document.createElement(\"div\");\n        this.lineDiv.className = \"sliderm3__line\";\n        this.lineDiv.style.height = `${this.div.dataset.lineHeight}px`;\n        this.div.style.maxWidth = this.div.dataset.length;\n        // this.lineDiv.style.width = `${this.div.offsetWidth<this.div.dataset.length?this.div.offsetWidth:this.div.dataset.length}px`;\n        this.lineDiv.style.borderRadius = `${this.div.dataset.lineHeight / 2}px`;\n        this.lineDiv.style.backgroundColor = this.div.dataset.colorLine;\n        this.div.appendChild(this.lineDiv);\n        this.lineDiv.addEventListener('mousedown', this.sliderm3MouseDownListener);\n    }\n    drawScale() {\n        this.scaleDiv = document.createElement(\"ul\");\n        this.scaleDiv.className = \"sliderm3__scale\";\n        this.scaleDiv.style.position = 'absolute';\n        this.scaleDiv.style.margin = '0px';\n        this.scaleDiv.style.padding = '0px';\n        this.scaleDiv.style.display = 'flex';\n        this.scaleDiv.style.fontSize = `${this.div.dataset.pointSize * 3 / 6}px`;\n        this.scaleDiv.style.justifyContent = 'space-between';\n        this.scaleDiv.style.top = `${+this.div.dataset.pointSize > +this.div.dataset.lineHeight ? +this.div.dataset.lineHeight + (+this.div.dataset.pointSize - +this.div.dataset.lineHeight) / 2 + 5 : +this.div.dataset.lineHeight + 5}px`;\n        this.scaleDiv.style.color = this.div.dataset.colorScale;\n        this.lineDiv.appendChild(this.scaleDiv);\n        this.scaleDiv.style.width = `${+this.lineDiv.offsetWidth * 1.04}px`;\n        var digit;\n        for (var i = 0; i <= this.div.dataset.intervals; i++) {\n            digit = document.createElement('li');\n            digit.className = \"sliderm3__digit\";\n            digit.style.listStyleType = 'none';\n            digit.innerHTML = Math.round(+this.div.dataset.min + (this.div.dataset.max - this.div.dataset.min) * i / this.div.dataset.intervals);\n            this.scaleDiv.appendChild(digit);\n        }\n    }\n    drawRange() {\n        this.rangeMaxWidth = this.lineDiv.offsetWidth - this.div.dataset.lineHeight;\n        this.range = this.div.dataset.max - this.div.dataset.min;\n        this.rangeDiv = document.createElement(\"div\");\n        this.rangeDiv.className = \"sliderm3__range\";\n        this.rangeDiv.style.height = 'inherit';\n        this.rangeDiv.style.position = 'absolute';\n        this.rangeDiv.style.top = '0';\n        if (this.div.dataset.interval) {\n            this.rangeDiv.style.width = `${(this.div.dataset.value2 - this.div.dataset.value1) * this.rangeMaxWidth / this.range}px`;\n            this.rangeDiv.style.left = `${(this.div.dataset.value1 - this.div.dataset.min) * this.rangeMaxWidth / this.range + this.div.dataset.lineHeight / 2}px`;\n        } else {\n            this.rangeDiv.style.width = `${(this.div.dataset.value2 - this.div.dataset.min) * this.rangeMaxWidth / this.range}px`;\n            this.rangeDiv.style.left = `${this.div.dataset.lineHeight / 2}px`;\n        }\n        this.rangeDiv.style.borderRadius = 'inherit';\n        this.rangeDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)';\n        this.lineDiv.appendChild(this.rangeDiv);\n\n        this.pointRange = document.createElement(\"div\");\n        this.pointRange.className = \"sliderm3__point-range\";\n        this.pointRange.style.position = 'absolute';\n        this.pointRange.style.height = `${this.div.dataset.lineHeight}px`;\n        this.pointRange.style.width = `${+this.rangeDiv.offsetWidth + +this.div.dataset.lineHeight}px`;\n        this.pointRange.style.borderRadius = `${this.div.dataset.lineHeight / 2}px`;\n        this.pointRange.style.top = `${this.lineDiv.offsetHeight / 2 - this.div.dataset.lineHeight / 2}px`;\n        this.pointRange.style.left = `${-this.div.dataset.lineHeight / 2}px`;\n        this.pointRange.style.backgroundColor = this.div.dataset.colorRange;\n        this.rangeDiv.appendChild(this.pointRange);\n    }\n    drawPoint1() {\n        this.point1Div = document.createElement(\"div\");\n        this.point1Div.className = \"sliderm3__point\";\n        this.point1Div.style.position = 'absolute';\n        this.point1Div.style.height = this.point1Div.style.width = `${this.div.dataset.pointSize}px`;\n        this.point1Div.style.borderRadius = '50%';\n        this.point1Div.style.top = `${this.lineDiv.offsetHeight / 2 - this.div.dataset.pointSize / 2}px`;\n        this.point1Div.style.left = `${-this.div.dataset.pointSize / 2}px`;\n        this.point1Div.style.backgroundColor = this.div.dataset.colorPoint;\n        this.rangeDiv.appendChild(this.point1Div);\n        if (this.div.dataset.hint) this.drawHint(this.point1Div, this.div.dataset.value1);\n    }\n    drawPoint2() {\n        this.point2Div = document.createElement(\"div\");\n        this.point2Div.className = \"sliderm3__point\";\n        this.point2Div.style.position = 'absolute';\n        this.point2Div.style.height = this.point2Div.style.width = `${this.div.dataset.pointSize}px`;\n        this.point2Div.style.borderRadius = '50%';\n        this.point2Div.style.top = `${this.lineDiv.offsetHeight / 2 - this.div.dataset.pointSize / 2}px`;\n        this.point2Div.style.left = `${this.rangeDiv.offsetWidth - this.div.dataset.pointSize / 2}px`;\n        this.point2Div.style.backgroundColor = this.div.dataset.colorPoint;\n        this.rangeDiv.appendChild(this.point2Div);\n        if (this.div.dataset.hint) this.drawHint(this.point2Div, this.div.dataset.value2);\n    }\n    drawHint(div, value) {\n        var hintDiv = document.createElement(\"div\");\n        hintDiv.className = \"sliderm3__hint\";\n        hintDiv.style.position = 'absolute';\n        hintDiv.style.display = 'flex';\n        hintDiv.style.alignItems = 'center';\n        hintDiv.style.padding = '2px 8px';\n        hintDiv.style.borderRadius = '4px';\n        hintDiv.style.height = `${this.div.dataset.pointSize}px`;\n        hintDiv.style.fontSize = `${this.div.dataset.pointSize * 4 / 6}px`;\n        hintDiv.style.backgroundColor = 'inherit';\n        hintDiv.style.color = this.div.dataset.colorText;\n        hintDiv.innerHTML = Math.round(value * 100) / 100;\n        div.appendChild(hintDiv);\n\n        var arrowDiv = document.createElement(\"div\");\n        arrowDiv.className = \"sliderm3__arrow\";\n        arrowDiv.style.position = 'absolute';\n        arrowDiv.style.content = '';\n        arrowDiv.style.transform = 'rotate(-45deg)';\n        arrowDiv.style.zIndex = '-1';\n        arrowDiv.style.height = `${this.div.dataset.pointSize / 3}px`;\n        arrowDiv.style.width = `${this.div.dataset.pointSize / 3}px`;\n        arrowDiv.style.backgroundColor = 'inherit';\n        hintDiv.appendChild(arrowDiv);\n\n        // if (dataset.vertical) {\n        //     hintDiv.style.transform = 'rotate(90deg) translateX(0px)';\n        //     hintDiv.style.top = `${-dataset.pointSize - hintDiv.offsetWidth/2}px`;\n        //     hintDiv.style.left = `${dataset.pointSize/2 - hintDiv.offsetWidth/2}px`;\n        //     arrowDiv.style.top = `${hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2}px`;\n        //     arrowDiv.style.left = `${hintDiv.offsetWidth - arrowDiv.offsetWidth/2 - 1}px`;\n        // } else {\n        hintDiv.style.transform = 'rotate(0deg)';\n        hintDiv.style.top = `${-this.div.dataset.pointSize * 3 / 2}px`;\n        hintDiv.style.left = `${this.div.dataset.pointSize / 2 - hintDiv.offsetWidth / 2}px`;\n        arrowDiv.style.top = `${hintDiv.offsetHeight - arrowDiv.offsetHeight / 2}px`;\n        arrowDiv.style.left = `${hintDiv.offsetWidth / 2 - arrowDiv.offsetWidth / 2}px`;\n        // }\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, 'resizeThrottler', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'resizeThrottler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sliderm3MouseDownListener', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'sliderm3MouseDownListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sliderm3MouseMoveListener', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'sliderm3MouseMoveListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeRange', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'changeRange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sliderm3CancelMove', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'sliderm3CancelMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'draw', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'draw'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawLine', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawLine'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawScale', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawScale'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawRange', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawRange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawPoint1', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawPoint1'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawPoint2', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawPoint2'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawHint', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'drawHint'), _class.prototype)), _class);\n\n\n[].forEach.call(document.getElementsByClassName('sliderm3'), element => new Sliderm3(element));\n\n//# sourceURL=webpack:///./src/sliderm3.js?");

/***/ })

/******/ });
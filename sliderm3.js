!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var i,o,a;o=[e],void 0===(a="function"==typeof(i=function(t){"use strict";t.__esModule=!0;var e={},n=Object.prototype.hasOwnProperty,i={memoize:function(t){var i=arguments.length<=1||void 0===arguments[1]?e:arguments[1],o=i.cache||{};return function(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var s=String(a[0]);return!1===i.caseSensitive&&(s=s.toLowerCase()),n.call(o,s)?o[s]:o[s]=t.apply(this,a)}},debounce:function(t,e){if("function"==typeof e){var n=t;t=e,e=n}var i=e&&e.delay||e||0,o=void 0,a=void 0,r=void 0;return function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];o=n,a=this,r||(r=setTimeout(function(){t.apply(a,o),o=a=r=null},i))}},bind:function(t,e,n){var i=n.value;return{configurable:!0,get:function(){var t=i.bind(this);return Object.defineProperty(this,e,{value:t,configurable:!0,writable:!0}),t}}}},o=s(i.memoize),a=s(i.debounce),r=s(function(t,e){return t.bind(e)},function(){return i.bind});function s(t,e){var n,i=(e=e||t.decorate||(n=t,function(t){return"function"==typeof t?n(t):function(e,i,o){o.value=n(o.value,t,e,i,o)}}))();return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];var r=o.length;return(r<2?e:r>2?i:t).apply(void 0,o)}}t.memoize=o,t.debounce=a,t.bind=r,t.default={memoize:o,debounce:a,bind:r}})?i.apply(e,o):i)||(t.exports=a)},function(t,e,n){"use strict";n.r(e);n(2);var i=n(0);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observers=[]}var e,n,i;return e=t,(n=[{key:"subscribe",value:function(t){this.observers.push(t)}},{key:"unsubscribe",value:function(t){this.observers=this.observers.filter(function(e){return e!==t})}},{key:"broadcast",value:function(t){this.observers.forEach(function(e){return e(t)})}}])&&o(e.prototype,n),i&&o(e,i),t}();var r,s=function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.min||(e.min=0),(!e.max||+e.max<+e.min)&&(e.max=+e.min+100),e.endRange||(e.endRange=(+e.max-+e.min)/2+ +e.min),+e.endRange>+e.max&&(e.endRange=+e.max),+e.endRange<+e.min&&(e.endRange=+e.min),(!e.startRange||+e.startRange<+e.min)&&(e.startRange=+e.min),+e.startRange>+e.endRange&&(e.startRange=+e.endRange),e.step||(e.step=1),e.intervals||(e.intervals=3),e.length||(e.length=300),e.lineHeight||(e.lineHeight=25),e.pointSize||(e.pointSize=50),e.colorLine||(e.colorLine="rgba(230, 230, 230, 1)"),e.colorRange||(e.colorRange="rgba(231, 87, 53, 1)"),e.colorPoint||(e.colorPoint="rgba(231, 87, 53, 1)"),e.colorScale||(e.colorScale="rgba(231, 87, 53, 1)"),e.colorText||(e.colorText="rgba(255, 255, 255, 0.8"),e};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n,i,o){var a={};return Object.keys(i).forEach(function(t){a[t]=i[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}var m,f=(u((r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=h(this,d(e).call(this))).setModel(t),n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,a),n=e,(i=[{key:"setModel",value:function(t){var e=new s(t);Object.assign(this,e),this.broadcastModelChanged("changedSlider")}},{key:"setStartRange",value:function(t){this.startRange=t,this.checkStartRange(),this.broadcastModelChanged("changedStartRange")}},{key:"checkStartRange",value:function(){+this.startRange>+this.endRange&&(this.startRange=this.endRange),+this.startRange<+this.min&&(this.startRange=this.min)}},{key:"setEndRange",value:function(t){this.endRange=t,this.checkEndRange(),this.broadcastModelChanged("changedEndRange")}},{key:"checkEndRange",value:function(){this.interval&&+this.endRange<+this.startRange&&(this.endRange=this.startRange),!this.interval&&+this.endRange<+this.min&&(this.endRange=this.min),+this.endRange>+this.max&&(this.endRange=this.max)}},{key:"broadcastModelChanged",value:function(t){var e=Object.assign({},this);delete e.observers,this.broadcast({description:t,model:e})}}])&&c(n.prototype,i),o&&c(n,o),e}()).prototype,"setModel",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setModel"),r.prototype),u(r.prototype,"setStartRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setStartRange"),r.prototype),u(r.prototype,"checkStartRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"checkStartRange"),r.prototype),u(r.prototype,"setEndRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setEndRange"),r.prototype),u(r.prototype,"checkEndRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"checkEndRange"),r.prototype),r);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e,n,i,o){var a={};return Object.keys(i).forEach(function(t){a[t]=i[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}var w=(P((m=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=v(this,b(e).call(this))).element=t,n.element.oncontextmenu=function(){return!1},n.element.ondragstart=function(){return!1},n.element.onselectstart=function(){return!1},n.refreshSlider(),document.addEventListener("mouseup",n.cancelMove),n.activePoint="no",window.addEventListener("resize",n.resizeThrottler),n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,a),n=e,(i=[{key:"mouseDownListener",value:function(t){var e=this.isEventPositionLessThenEndPoint(t);this.element.dataset.interval&&e?this.activePoint="startPoint":this.activePoint="endPoint",this.setDatasetFromEvent(t),document.addEventListener("mousemove",this.mouseMoveListener),this.broadcastChangedPoint()}},{key:"isEventPositionLessThenEndPoint",value:function(t){return this.element.dataset.vertical?t.clientY>this.getCoords(this.endPointElement).top+ +this.element.dataset.pointSize:t.clientX<this.getCoords(this.endPointElement).left}},{key:"getCoords",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,left:e.left}}},{key:"setDatasetFromEvent",value:function(t){"startPoint"==this.activePoint?this.element.dataset.startRange=this.getNewValueFromEvent(t):this.element.dataset.endRange=this.getNewValueFromEvent(t)}},{key:"getNewValueFromEvent",value:function(t){var e;return e=this.element.dataset.vertical?this.lineElement.offsetHeight-(t.clientY-this.getCoords(this.lineElement).top+ +this.element.dataset.lineHeight/2):t.clientX-this.getCoords(this.lineElement).left-+this.element.dataset.lineHeight/2,this.element.dataset.step*Math.round((+this.element.dataset.min+e*this.range/this.rangeMaxWidth)/this.element.dataset.step)}},{key:"mouseMoveListener",value:function(t){"no"!=this.activePoint&&(this.setDatasetFromEvent(t),this.broadcastChangedPoint())}},{key:"broadcastChangedPoint",value:function(){"startPoint"==this.activePoint&&this.broadcast({setStartRange:this.element.dataset}),"endPoint"==this.activePoint&&this.broadcast({setEndRange:this.element.dataset})}},{key:"cancelMove",value:function(){this.activePoint="no",document.removeEventListener("mousemove",this.mouseMoveListener)}},{key:"resizeThrottler",value:function(){this.resizeTimeout||(this.resizeTimeout=setTimeout(function(){this.resizeTimeout=null,this.refreshSlider()}.bind(this),50))}},{key:"refreshSlider",value:function(){this.lineElement&&this.lineElement.remove(),this.drawLine(),this.element.dataset.scale&&this.drawScale(),this.drawRange(),this.element.dataset.interval&&this.drawStartPoint(),this.drawEndPoint()}},{key:"changeStartRange",value:function(){this.changeRange(),this.countStartPointElementTop(),this.countStartPointElementLeft(),this.startHintArrow&&(this.startHintArrow[0].childNodes[0].nodeValue=Math.round(100*this.element.dataset.startRange)/100,this.setHintPosition(this.startHintArrow[0],this.startHintArrow[1]))}},{key:"changeEndRange",value:function(){this.changeRange(),this.countEndPointElementTop(),this.countEndPointElementLeft(),this.endHintArrow&&(this.endHintArrow[0].childNodes[0].nodeValue=Math.round(100*this.element.dataset.endRange)/100,this.setHintPosition(this.endHintArrow[0],this.endHintArrow[1]))}},{key:"changeRange",value:function(){this.countRangeElementBandAndIndent(),this.countPointRangeElement()}},{key:"drawLine",value:function(){this.lineElement=document.createElement("div"),this.lineElement.className="sliderm3__line",this.element.dataset.vertical?(this.lineElement.style.height=this.element.dataset.length,this.element.style.maxWidth="".concat(this.element.dataset.lineHeight,"px")):(this.lineElement.style.height="".concat(this.element.dataset.lineHeight,"px"),this.element.style.maxWidth=this.element.dataset.length),this.lineElement.style.borderRadius="".concat(this.element.dataset.lineHeight/2,"px"),this.lineElement.style.backgroundColor=this.element.dataset.colorLine,this.element.appendChild(this.lineElement),this.lineElement.addEventListener("mousedown",this.mouseDownListener)}},{key:"drawScale",value:function(){var t;this.scaleElement=document.createElement("ul"),this.scaleElement.className="sliderm3__scale",this.scaleElement.style.fontSize="".concat(3*this.element.dataset.pointSize/6,"px"),this.scaleElement.style.color=this.element.dataset.colorScale,this.lineElement.appendChild(this.scaleElement),this.element.dataset.vertical?(this.scaleElement.style.flexDirection="column-reverse",this.scaleElement.style.left="".concat(+this.element.dataset.pointSize>+this.element.dataset.lineHeight?+this.element.dataset.lineHeight+(+this.element.dataset.pointSize-+this.element.dataset.lineHeight)/2+5:+this.element.dataset.lineHeight+5,"px"),this.scaleElement.style.height="".concat(+this.lineElement.offsetHeight,"px")):(this.scaleElement.style.top="".concat(+this.element.dataset.pointSize>+this.element.dataset.lineHeight?+this.element.dataset.lineHeight+(+this.element.dataset.pointSize-+this.element.dataset.lineHeight)/2+5:+this.element.dataset.lineHeight+5,"px"),this.scaleElement.style.width="".concat(+this.lineElement.offsetWidth,"px"));for(var e=0;e<=this.element.dataset.intervals;e++)(t=document.createElement("li")).style.listStyleType="none",t.innerHTML=Math.round(+this.element.dataset.min+(this.element.dataset.max-this.element.dataset.min)*e/this.element.dataset.intervals),this.scaleElement.appendChild(t)}},{key:"drawRange",value:function(){this.element.dataset.vertical?this.rangeMaxWidth=this.lineElement.offsetHeight-this.element.dataset.lineHeight:this.rangeMaxWidth=this.lineElement.offsetWidth-this.element.dataset.lineHeight,this.range=this.element.dataset.max-this.element.dataset.min,this.rangeElement=document.createElement("div"),this.rangeElement.className="sliderm3__range",this.countRangeElementBandAndIndent(),this.lineElement.appendChild(this.rangeElement),this.pointRange=document.createElement("div"),this.pointRange.className="sliderm3__point-range",this.countPointRangeElement(),this.pointRange.style.borderRadius="".concat(this.element.dataset.lineHeight/2,"px"),this.pointRange.style.backgroundColor=this.element.dataset.colorRange,this.rangeElement.appendChild(this.pointRange)}},{key:"countRangeElementBandAndIndent",value:function(){if(this.element.dataset.interval){var t=(this.element.dataset.endRange-this.element.dataset.startRange)*this.rangeMaxWidth/this.range,e=(this.element.dataset.startRange-this.element.dataset.min)*this.rangeMaxWidth/this.range;this.element.dataset.vertical?(this.rangeElement.style.height="".concat(t,"px"),this.rangeElement.style.top="".concat(this.rangeMaxWidth-t+this.element.dataset.lineHeight/2-e,"px")):(this.rangeElement.style.width="".concat(t,"px"),this.rangeElement.style.left="".concat(e+this.element.dataset.lineHeight/2,"px"))}else{t=(this.element.dataset.endRange-this.element.dataset.min)*this.rangeMaxWidth/this.range;this.element.dataset.vertical?(this.rangeElement.style.height="".concat(t,"px"),this.rangeElement.style.top="".concat(this.rangeMaxWidth-t+this.element.dataset.lineHeight/2,"px")):(this.rangeElement.style.width="".concat(t,"px"),this.rangeElement.style.left="".concat(this.element.dataset.lineHeight/2,"px"))}}},{key:"countPointRangeElement",value:function(){if(this.element.dataset.vertical){this.pointRange.style.width="".concat(this.element.dataset.lineHeight,"px");var t=+this.rangeElement.offsetHeight+ +this.element.dataset.lineHeight;this.pointRange.style.height="".concat(t,"px"),this.pointRange.style.top="".concat(-this.element.dataset.lineHeight/2,"px")}else this.pointRange.style.height="".concat(this.element.dataset.lineHeight,"px"),this.pointRange.style.width="".concat(+this.rangeElement.offsetWidth+ +this.element.dataset.lineHeight,"px"),this.pointRange.style.left="".concat(-this.element.dataset.lineHeight/2,"px")}},{key:"drawStartPoint",value:function(){this.startPointElement=document.createElement("div"),this.startPointElement.className="sliderm3__point",this.startPointElement.style.height=this.startPointElement.style.width="".concat(this.element.dataset.pointSize,"px"),this.countStartPointElementTop(),this.countStartPointElementLeft(),this.startPointElement.style.backgroundColor=this.element.dataset.colorPoint,this.lineElement.appendChild(this.startPointElement),this.element.dataset.hint&&(this.startHintArrow=this.drawHint(this.startPointElement,this.element.dataset.startRange))}},{key:"countStartPointElementTop",value:function(){this.element.dataset.vertical?this.startPointElement.style.top="".concat(this.rangeElement.offsetTop+this.rangeElement.offsetHeight-this.element.dataset.pointSize/2,"px"):this.startPointElement.style.top="".concat(this.lineElement.offsetHeight/2-this.element.dataset.pointSize/2,"px")}},{key:"countStartPointElementLeft",value:function(){this.element.dataset.vertical?this.startPointElement.style.left="".concat(this.element.dataset.lineHeight/2-this.element.dataset.pointSize/2,"px"):this.startPointElement.style.left="".concat(this.rangeElement.offsetLeft-this.element.dataset.pointSize/2,"px")}},{key:"drawEndPoint",value:function(){this.endPointElement=document.createElement("div"),this.endPointElement.className="sliderm3__point",this.endPointElement.style.height=this.endPointElement.style.width="".concat(this.element.dataset.pointSize,"px"),this.countEndPointElementTop(),this.countEndPointElementLeft(),this.endPointElement.style.backgroundColor=this.element.dataset.colorPoint,this.lineElement.appendChild(this.endPointElement),this.element.dataset.hint&&(this.endHintArrow=this.drawHint(this.endPointElement,this.element.dataset.endRange))}},{key:"countEndPointElementTop",value:function(){this.element.dataset.vertical?this.endPointElement.style.top="".concat(this.rangeElement.offsetTop-this.element.dataset.pointSize/2,"px"):this.endPointElement.style.top="".concat(this.lineElement.offsetHeight/2-this.element.dataset.pointSize/2,"px")}},{key:"countEndPointElementLeft",value:function(){this.element.dataset.vertical?this.endPointElement.style.left="".concat(this.element.dataset.lineHeight/2-this.element.dataset.pointSize/2,"px"):this.endPointElement.style.left="".concat(this.rangeElement.offsetLeft+this.rangeElement.offsetWidth-this.element.dataset.pointSize/2,"px")}},{key:"drawHint",value:function(t,e){var n=document.createElement("div");n.className="sliderm3__hint",n.style.height="".concat(this.element.dataset.pointSize,"px"),n.style.fontSize="".concat(4*this.element.dataset.pointSize/6,"px"),n.style.color=this.element.dataset.colorText,n.innerHTML=Math.round(100*e)/100,t.appendChild(n);var i=document.createElement("div");return i.className="sliderm3__arrow",i.style.height="".concat(this.element.dataset.pointSize/3,"px"),i.style.width="".concat(this.element.dataset.pointSize/3,"px"),n.appendChild(i),this.setHintPosition(n,i),[n,i]}},{key:"setHintPosition",value:function(t,e){this.element.dataset.vertical?(t.style.left="".concat(-this.element.dataset.pointSize/2-t.offsetWidth,"px"),t.style.top="".concat(this.element.dataset.pointSize/2-t.offsetHeight/2,"px"),e.style.top="".concat(t.offsetHeight/2-e.offsetHeight/2,"px"),e.style.left="".concat(t.offsetWidth-e.offsetWidth/2-1,"px")):(t.style.top="".concat(-this.element.dataset.pointSize/2-t.offsetHeight,"px"),t.style.left="".concat(this.element.dataset.pointSize/2-t.offsetWidth/2,"px"),e.style.top="".concat(t.offsetHeight-e.offsetHeight/2-1,"px"),e.style.left="".concat(t.offsetWidth/2-e.offsetWidth/2,"px"))}}])&&y(n.prototype,i),o&&y(n,o),e}()).prototype,"mouseDownListener",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"mouseDownListener"),m.prototype),P(m.prototype,"mouseMoveListener",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"mouseMoveListener"),m.prototype),P(m.prototype,"cancelMove",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"cancelMove"),m.prototype),P(m.prototype,"resizeThrottler",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"resizeThrottler"),m.prototype),P(m.prototype,"refreshSlider",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"refreshSlider"),m.prototype),P(m.prototype,"changeStartRange",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"changeStartRange"),m.prototype),P(m.prototype,"changeEndRange",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"changeEndRange"),m.prototype),P(m.prototype,"changeRange",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"changeRange"),m.prototype),P(m.prototype,"drawLine",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawLine"),m.prototype),P(m.prototype,"drawScale",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawScale"),m.prototype),P(m.prototype,"drawRange",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawRange"),m.prototype),P(m.prototype,"countRangeElementBandAndIndent",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countRangeElementBandAndIndent"),m.prototype),P(m.prototype,"countPointRangeElement",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countPointRangeElement"),m.prototype),P(m.prototype,"drawStartPoint",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawStartPoint"),m.prototype),P(m.prototype,"countStartPointElementTop",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countStartPointElementTop"),m.prototype),P(m.prototype,"countStartPointElementLeft",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countStartPointElementLeft"),m.prototype),P(m.prototype,"drawEndPoint",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawEndPoint"),m.prototype),P(m.prototype,"countEndPointElementTop",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countEndPointElementTop"),m.prototype),P(m.prototype,"countEndPointElementLeft",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"countEndPointElementLeft"),m.prototype),P(m.prototype,"drawHint",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"drawHint"),m.prototype),P(m.prototype,"setHintPosition",[i.bind],Object.getOwnPropertyDescriptor(m.prototype,"setHintPosition"),m.prototype),m);var R=function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=n,this.view.subscribe(function(t){t.setStartRange&&i.model.setStartRange(t.setStartRange.startRange),t.setEndRange&&i.model.setEndRange(t.setEndRange.endRange)}),this.model.subscribe(function(t){Object.assign(i.view.element.dataset,t.model),t.description&&("changedStartRange"==t.description&&i.view.changeStartRange(),"changedEndRange"==t.description&&i.view.changeEndRange(),"changedSlider"==t.description&&i.view.refreshSlider())})};n.d(e,"default",function(){return S});var S=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.classList.add("sliderm3");var n=new s(e.dataset),i=new f(n),o=new w(e);new R(i,o)}},function(t,e,n){}]);
//# sourceMappingURL=sliderm3.js.map
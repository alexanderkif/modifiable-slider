!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){var i,o,r;o=[e],void 0===(r="function"==typeof(i=function(t){"use strict";t.__esModule=!0;var e={},n=Object.prototype.hasOwnProperty,i={memoize:function(t){var i=arguments.length<=1||void 0===arguments[1]?e:arguments[1],o=i.cache||{};return function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];var s=String(r[0]);return!1===i.caseSensitive&&(s=s.toLowerCase()),n.call(o,s)?o[s]:o[s]=t.apply(this,r)}},debounce:function(t,e){if("function"==typeof e){var n=t;t=e,e=n}var i=e&&e.delay||e||0,o=void 0,r=void 0,a=void 0;return function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];o=n,r=this,a||(a=setTimeout(function(){t.apply(r,o),o=r=a=null},i))}},bind:function(t,e,n){var i=n.value;return{configurable:!0,get:function(){var t=i.bind(this);return Object.defineProperty(this,e,{value:t,configurable:!0,writable:!0}),t}}}},o=s(i.memoize),r=s(i.debounce),a=s(function(t,e){return t.bind(e)},function(){return i.bind});function s(t,e){var n,i=(e=e||t.decorate||(n=t,function(t){return"function"==typeof t?n(t):function(e,i,o){o.value=n(o.value,t,e,i,o)}}))();return function(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var a=o.length;return(a<2?e:a>2?i:t).apply(void 0,o)}}t.memoize=o,t.debounce=r,t.bind=a,t.default={memoize:o,debounce:r,bind:a}})?i.apply(e,o):i)||(t.exports=r)},function(t){t.exports={sliderClass:"my-awesome-slider-1234",defaults:{min:"0",step:"1",intervals:"3",length:"300",lineHeight:"25",pointSize:"50",colorLine:"rgba(230, 230, 230, 1)",colorRange:"rgba(231, 87, 53, 1)",colorPoint:"rgba(231, 87, 53, 1)",colorScale:"rgba(231, 87, 53, 1)",colorText:"rgba(255, 255, 255, 0.8)"},sliders:[{min:20,max:120,startRange:20,endRange:70,step:1,intervals:3,hint:"true",scale:"true",interval:"true",vertical:"true",length:300,lineHeight:25,pointSize:50,colorLine:"rgba(230, 230, 230, 1)",colorRange:"rgba(231, 87, 53, 1)",colorPoint:"rgba(231, 87, 53, 1)",colorScale:"rgba(231, 87, 53, 1)",colorText:"rgba(255, 255, 255, 0.8)"},{min:0,max:100,startRange:0,endRange:75,step:25,intervals:4,hint:"",scale:"true",interval:"",vertical:"",length:260,lineHeight:5,pointSize:20,colorLine:"#e6e6e6",colorRange:"#4eb7a8",colorPoint:"#4eb7a8",colorScale:"lightgrey",colorText:"white"},{min:0,max:100,startRange:30,endRange:80,step:10,intervals:3,hint:"true",scale:"",interval:"true",vertical:"",length:260,lineHeight:22,pointSize:20,colorLine:"rgba(50, 153, 181, 0.3)",colorRange:"rgba(50, 153, 181, 0)",colorPoint:"rgba(50, 153, 181, 1)",colorScale:"lightgrey",colorText:"white"},{min:100,max:300,startRange:130,endRange:180,step:2,intervals:4,hint:"true",scale:"true",interval:"",vertical:"true",length:300,lineHeight:36,pointSize:36,colorLine:"rgba(255, 223, 85, 0.3)",colorRange:"rgba(255, 223, 85, 1)",colorPoint:"rgba(255, 223, 85, 1)",colorScale:"rgba(255, 223, 85, 1)",colorText:"white"},{min:1,max:3,startRange:1,endRange:2,step:1,intervals:2,hint:"",scale:"true",interval:"",vertical:"true",length:220,lineHeight:100,pointSize:80,colorLine:"lightgrey",colorRange:"lightgrey",colorPoint:"#33bb33",colorScale:"#33bb33",colorText:"white"},{min:0,max:1,startRange:0,endRange:0,step:1,intervals:1,hint:"",scale:"",interval:"",vertical:"",length:220,lineHeight:100,pointSize:80,colorLine:"lightgrey",colorRange:"#3333bb",colorPoint:"lightgrey",colorScale:"#3333bb",colorText:"white"}]}},function(t,e,n){"use strict";n.r(e);n(3);var i=n(0);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r,a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observers=[]}var e,n,i;return e=t,(n=[{key:"subscribe",value:function(t){this.observers.push(t)}},{key:"unsubscribe",value:function(t){this.observers=this.observers.filter(function(e){return e!==t})}},{key:"broadcast",value:function(t){this.observers.forEach(function(e){return e(t)})}}])&&o(e.prototype,n),i&&o(e,i),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,n,i,o){var r={};return Object.keys(i).forEach(function(t){r[t]=i[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}var d,g=(u((r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,h(e).call(this))).setModel(t),n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,a),n=e,(i=[{key:"normalizeModel",value:function(t){return(!t.max||+t.max<+t.min)&&(t.max=+t.min+100),t.endRange||(t.endRange=(+t.max-+t.min)/2+ +t.min),t.startRange||(t.startRange=+t.min),+t.endRange>+t.max&&(t.endRange=+t.max),+t.endRange<+t.min&&(t.endRange=+t.min),+t.startRange<+t.min&&(t.startRange=+t.min),+t.startRange>+t.endRange&&(t.startRange=+t.endRange),t}},{key:"setModel",value:function(t){var e=this.normalizeModel(t);Object.assign(this,e),this.broadcastModelChanged("changedSlider")}},{key:"setStartRange",value:function(t){this.startRange=t,this.checkStartRange(),this.broadcastModelChanged("changedStartRange")}},{key:"checkStartRange",value:function(){+this.startRange>+this.endRange&&(this.startRange=this.endRange),+this.startRange<+this.min&&(this.startRange=this.min)}},{key:"setEndRange",value:function(t){this.endRange=t,this.checkEndRange(),this.broadcastModelChanged("changedEndRange")}},{key:"checkEndRange",value:function(){this.interval&&+this.endRange<+this.startRange&&(this.endRange=this.startRange),!this.interval&&+this.endRange<+this.min&&(this.endRange=this.min),+this.endRange>+this.max&&(this.endRange=this.max)}},{key:"broadcastModelChanged",value:function(t){var e=Object.assign({},this);delete e.observers,this.broadcast({description:t,model:e})}}])&&l(n.prototype,i),o&&l(n,o),e}()).prototype,"setModel",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setModel"),r.prototype),u(r.prototype,"setStartRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setStartRange"),r.prototype),u(r.prototype,"checkStartRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"checkStartRange"),r.prototype),u(r.prototype,"setEndRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"setEndRange"),r.prototype),u(r.prototype,"checkEndRange",[i.bind],Object.getOwnPropertyDescriptor(r.prototype,"checkEndRange"),r.prototype),r);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e,n,i,o){var r={};return Object.keys(i).forEach(function(t){r[t]=i[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}var S=(E((d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=f(this,v(e).call(this))).element=t,n.element.oncontextmenu=function(){return!1},n.element.ondragstart=function(){return!1},n.element.onselectstart=function(){return!1},n.refreshSlider(),document.addEventListener("mouseup",n.cancelMove),n.activePoint="no",window.addEventListener("resize",n.resizeThrottler),n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,a),n=e,(i=[{key:"mouseDownListener",value:function(t){var e=this.isEventPositionLessThenEndPoint(t);this.element.dataset.interval&&e?this.activePoint="startPoint":this.activePoint="endPoint",this.setDatasetFromEvent(t),document.addEventListener("mousemove",this.mouseMoveListener),this.broadcastChangedPoint()}},{key:"isEventPositionLessThenEndPoint",value:function(t){return this.element.dataset.vertical?t.clientY>this.getCoords(this.endPointElement).top+ +this.element.dataset.pointSize:t.clientX<this.getCoords(this.endPointElement).left}},{key:"getCoords",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,left:e.left}}},{key:"setDatasetFromEvent",value:function(t){"startPoint"==this.activePoint?this.element.dataset.startRange=this.getNewValueFromEvent(t):this.element.dataset.endRange=this.getNewValueFromEvent(t)}},{key:"getNewValueFromEvent",value:function(t){var e;return e=this.element.dataset.vertical?this.lineElement.offsetHeight-(t.clientY-this.getCoords(this.lineElement).top+ +this.element.dataset.lineHeight/2):t.clientX-this.getCoords(this.lineElement).left-+this.element.dataset.lineHeight/2,this.element.dataset.step*Math.round((+this.element.dataset.min+e*this.range/this.rangeMaxWidth)/this.element.dataset.step)}},{key:"mouseMoveListener",value:function(t){"no"!=this.activePoint&&(this.setDatasetFromEvent(t),this.broadcastChangedPoint())}},{key:"broadcastChangedPoint",value:function(){"startPoint"==this.activePoint&&this.broadcast({startRange:this.element.dataset.startRange}),"endPoint"==this.activePoint&&this.broadcast({endRange:this.element.dataset.endRange})}},{key:"cancelMove",value:function(){this.activePoint="no",document.removeEventListener("mousemove",this.mouseMoveListener)}},{key:"resizeThrottler",value:function(){this.resizeTimeout||(this.resizeTimeout=setTimeout(function(){this.resizeTimeout=null,this.refreshSlider()}.bind(this),50))}},{key:"refreshSlider",value:function(){this.lineElement&&this.lineElement.remove(),this.drawLine(),this.lineElement.addEventListener("mousedown",this.mouseDownListener),this.element.dataset.scale&&this.drawScale(),this.drawRange(),this.changeRange(),this.element.dataset.interval&&this.drawStartPoint(),this.drawEndPoint()}},{key:"changeStartRange",value:function(){this.changeRange(),this.countStartPointElementTop(),this.countStartPointElementLeft(),this.startHintArrow&&(this.startHintArrow[0].childNodes[0].nodeValue=Math.round(100*this.element.dataset.startRange)/100,this.setHintPosition(this.startHintArrow[0],this.startHintArrow[1]))}},{key:"changeEndRange",value:function(){this.changeRange(),this.countEndPointElementTop(),this.countEndPointElementLeft(),this.endHintArrow&&(this.endHintArrow[0].childNodes[0].nodeValue=Math.round(100*this.element.dataset.endRange)/100,this.setHintPosition(this.endHintArrow[0],this.endHintArrow[1]))}},{key:"changeRange",value:function(){this.calculateRangePosition(),this.countPointRangeElement()}},{key:"drawLine",value:function(){this.lineElement=document.createElement("div"),this.lineElement.className="sliderm3__line",this.element.dataset.vertical?(this.lineElement.style.height=this.element.dataset.length,this.element.style.maxWidth="".concat(this.element.dataset.lineHeight,"px")):(this.lineElement.style.height="".concat(this.element.dataset.lineHeight,"px"),this.element.style.maxWidth=this.element.dataset.length),this.lineElement.style.borderRadius="".concat(this.element.dataset.lineHeight/2,"px"),this.lineElement.style.backgroundColor=this.element.dataset.colorLine,this.element.appendChild(this.lineElement)}},{key:"drawScale",value:function(){this.scaleElement=document.createElement("ul"),this.scaleElement.className="sliderm3__scale";var t=this.element.dataset;this.scaleElement.style.fontSize="".concat(.5*t.pointSize,"px"),this.scaleElement.style.color=t.colorScale,this.lineElement.appendChild(this.scaleElement),t.vertical?(this.scaleElement.style.flexDirection="column-reverse",this.scaleElement.style.left="".concat(this.getScaleLeft(t),"px"),this.scaleElement.style.height="".concat(+this.lineElement.offsetHeight,"px")):(this.scaleElement.style.top="".concat(this.getScaleTop(t),"px"),this.scaleElement.style.width="".concat(+this.lineElement.offsetWidth,"px")),this.drawDigits(t)}},{key:"drawDigits",value:function(t){for(var e,n=0;n<=t.intervals;n++)(e=document.createElement("li")).style.listStyleType="none",e.innerHTML=Math.round(+t.min+(t.max-t.min)*n/t.intervals),this.scaleElement.appendChild(e)}},{key:"getScaleTop",value:function(t){return+t.pointSize>+t.lineHeight?+t.lineHeight+(+t.pointSize-+t.lineHeight)/2+5:+t.lineHeight+5}},{key:"getScaleLeft",value:function(t){return+t.pointSize>+t.lineHeight?+t.lineHeight+(+t.pointSize-+t.lineHeight)/2+5:+t.lineHeight+5}},{key:"drawRange",value:function(){var t=this.element.dataset;t.vertical?this.rangeMaxWidth=this.lineElement.offsetHeight-t.lineHeight:this.rangeMaxWidth=this.lineElement.offsetWidth-t.lineHeight,this.range=t.max-t.min,this.rangeElement=document.createElement("div"),this.rangeElement.className="sliderm3__range",this.lineElement.appendChild(this.rangeElement),this.pointRange=document.createElement("div"),this.pointRange.className="sliderm3__point-range",this.pointRange.style.borderRadius="".concat(t.lineHeight/2,"px"),this.pointRange.style.backgroundColor=t.colorRange,this.rangeElement.appendChild(this.pointRange)}},{key:"calculateRangePosition",value:function(){var t=this.element.dataset;if(t.interval)var e=(t.endRange-t.startRange)*this.rangeMaxWidth/this.range;else e=(t.endRange-t.min)*this.rangeMaxWidth/this.range;var n=(t.startRange-t.min)*this.rangeMaxWidth/this.range;t.vertical?(this.setRangeElementTop(e,n),this.rangeElement.style.height="".concat(e,"px")):(this.setRangeElementLeft(n),this.rangeElement.style.width="".concat(e,"px"))}},{key:"setRangeElementTop",value:function(t,e){var n=this.rangeMaxWidth-t+this.element.dataset.lineHeight/2;this.element.dataset.interval?this.rangeElement.style.top="".concat(n-e,"px"):this.rangeElement.style.top="".concat(n,"px")}},{key:"setRangeElementLeft",value:function(t){this.element.dataset.interval?this.rangeElement.style.left="".concat(t+this.element.dataset.lineHeight/2,"px"):this.rangeElement.style.left="".concat(this.element.dataset.lineHeight/2,"px")}},{key:"countPointRangeElement",value:function(){if(this.element.dataset.vertical){this.pointRange.style.width="".concat(this.element.dataset.lineHeight,"px");var t=+this.rangeElement.offsetHeight+ +this.element.dataset.lineHeight;this.pointRange.style.height="".concat(t,"px"),this.pointRange.style.top="".concat(-this.element.dataset.lineHeight/2,"px")}else this.pointRange.style.height="".concat(this.element.dataset.lineHeight,"px"),this.pointRange.style.width="".concat(+this.rangeElement.offsetWidth+ +this.element.dataset.lineHeight,"px"),this.pointRange.style.left="".concat(-this.element.dataset.lineHeight/2,"px")}},{key:"drawStartPoint",value:function(){this.startPointElement=document.createElement("div"),this.startPointElement.className="sliderm3__point",this.startPointElement.style.height=this.startPointElement.style.width="".concat(this.element.dataset.pointSize,"px"),this.countStartPointElementTop(),this.countStartPointElementLeft(),this.startPointElement.style.backgroundColor=this.element.dataset.colorPoint,this.lineElement.appendChild(this.startPointElement),this.element.dataset.hint&&(this.startHintArrow=this.drawHint(this.startPointElement,this.element.dataset.startRange))}},{key:"countStartPointElementTop",value:function(){this.element.dataset.vertical?this.startPointElement.style.top="".concat(this.rangeElement.offsetTop+this.rangeElement.offsetHeight-this.element.dataset.pointSize/2,"px"):this.startPointElement.style.top="".concat(this.lineElement.offsetHeight/2-this.element.dataset.pointSize/2,"px")}},{key:"countStartPointElementLeft",value:function(){this.element.dataset.vertical?this.startPointElement.style.left="".concat(this.element.dataset.lineHeight/2-this.element.dataset.pointSize/2,"px"):this.startPointElement.style.left="".concat(this.rangeElement.offsetLeft-this.element.dataset.pointSize/2,"px")}},{key:"drawEndPoint",value:function(){this.endPointElement=document.createElement("div"),this.endPointElement.className="sliderm3__point",this.endPointElement.style.height=this.endPointElement.style.width="".concat(this.element.dataset.pointSize,"px"),this.countEndPointElementTop(),this.countEndPointElementLeft(),this.endPointElement.style.backgroundColor=this.element.dataset.colorPoint,this.lineElement.appendChild(this.endPointElement),this.element.dataset.hint&&(this.endHintArrow=this.drawHint(this.endPointElement,this.element.dataset.endRange))}},{key:"countEndPointElementTop",value:function(){this.element.dataset.vertical?this.endPointElement.style.top="".concat(this.rangeElement.offsetTop-this.element.dataset.pointSize/2,"px"):this.endPointElement.style.top="".concat(this.lineElement.offsetHeight/2-this.element.dataset.pointSize/2,"px")}},{key:"countEndPointElementLeft",value:function(){this.element.dataset.vertical?this.endPointElement.style.left="".concat(this.element.dataset.lineHeight/2-this.element.dataset.pointSize/2,"px"):this.endPointElement.style.left="".concat(this.rangeElement.offsetLeft+this.rangeElement.offsetWidth-this.element.dataset.pointSize/2,"px")}},{key:"drawHint",value:function(t,e){var n=document.createElement("div");n.className="sliderm3__hint",n.style.height="".concat(this.element.dataset.pointSize,"px"),n.style.fontSize="".concat(4*this.element.dataset.pointSize/6,"px"),n.style.color=this.element.dataset.colorText,n.innerHTML=Math.round(100*e)/100,t.appendChild(n);var i=document.createElement("div");return i.className="sliderm3__arrow",i.style.height="".concat(this.element.dataset.pointSize/3,"px"),i.style.width="".concat(this.element.dataset.pointSize/3,"px"),n.appendChild(i),this.setHintPosition(n,i),[n,i]}},{key:"setHintPosition",value:function(t,e){this.element.dataset.vertical?(t.style.left="".concat(-this.element.dataset.pointSize/2-t.offsetWidth,"px"),t.style.top="".concat(this.element.dataset.pointSize/2-t.offsetHeight/2,"px"),e.style.top="".concat(t.offsetHeight/2-e.offsetHeight/2,"px"),e.style.left="".concat(t.offsetWidth-e.offsetWidth/2-1,"px")):(t.style.top="".concat(-this.element.dataset.pointSize/2-t.offsetHeight,"px"),t.style.left="".concat(this.element.dataset.pointSize/2-t.offsetWidth/2,"px"),e.style.top="".concat(t.offsetHeight-e.offsetHeight/2-1,"px"),e.style.left="".concat(t.offsetWidth/2-e.offsetWidth/2,"px"))}}])&&y(n.prototype,i),o&&y(n,o),e}()).prototype,"mouseDownListener",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"mouseDownListener"),d.prototype),E(d.prototype,"mouseMoveListener",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"mouseMoveListener"),d.prototype),E(d.prototype,"cancelMove",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"cancelMove"),d.prototype),E(d.prototype,"resizeThrottler",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"resizeThrottler"),d.prototype),E(d.prototype,"refreshSlider",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"refreshSlider"),d.prototype),E(d.prototype,"changeStartRange",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"changeStartRange"),d.prototype),E(d.prototype,"changeEndRange",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"changeEndRange"),d.prototype),E(d.prototype,"changeRange",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"changeRange"),d.prototype),E(d.prototype,"drawLine",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawLine"),d.prototype),E(d.prototype,"drawScale",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawScale"),d.prototype),E(d.prototype,"drawRange",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawRange"),d.prototype),E(d.prototype,"calculateRangePosition",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"calculateRangePosition"),d.prototype),E(d.prototype,"countPointRangeElement",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"countPointRangeElement"),d.prototype),E(d.prototype,"drawStartPoint",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawStartPoint"),d.prototype),E(d.prototype,"countStartPointElementTop",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"countStartPointElementTop"),d.prototype),E(d.prototype,"countStartPointElementLeft",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"countStartPointElementLeft"),d.prototype),E(d.prototype,"drawEndPoint",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawEndPoint"),d.prototype),E(d.prototype,"countEndPointElementTop",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"countEndPointElementTop"),d.prototype),E(d.prototype,"countEndPointElementLeft",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"countEndPointElementLeft"),d.prototype),E(d.prototype,"drawHint",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"drawHint"),d.prototype),E(d.prototype,"setHintPosition",[i.bind],Object.getOwnPropertyDescriptor(d.prototype,"setHintPosition"),d.prototype),d);var R=function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=n,this.view.subscribe(function(t){t.startRange&&i.model.setStartRange(t.startRange),t.endRange&&i.model.setEndRange(t.endRange)}),this.model.subscribe(function(t){Object.assign(i.view.element.dataset,t.model),t.description&&("changedStartRange"==t.description&&i.view.changeStartRange(),"changedEndRange"==t.description&&i.view.changeEndRange(),"changedSlider"==t.description&&i.view.refreshSlider())})};n.d(e,"default",function(){return O});var P,w=n(1),O=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e.classList.add("sliderm3"),this.model=new g(e.dataset),this.view=new S(e),new R(this.model,this.view)};(P=jQuery).fn.modSlider=function(){return this.each(function(){var t=this;!function(t){var e={};Object.assign(e,w.defaults);var n=P.extend(e,t);for(var i in n)t[i]=n[i]}(this.dataset),new O(this).model.subscribe(function(e){P(t).trigger({type:"slider.stateChange",start:"true"==e.model.interval?e.model.startRange:e.model.min,end:e.model.endRange})})})}},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"/favicon.ico"},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(4),n(5);var i,o=n(0),r=(n(6),n(7),n(2));function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n,i,o){var r={};return Object.keys(i).forEach(function(t){r[t]=i[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}var l=n(1),c=(s((i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.div=e.querySelector(".".concat(l.sliderClass)),this.pageInput=e.querySelector(".page__inputs"),this.inputTickHint=this.pageInput.querySelector(".tick-hint"),this.inputTickScale=this.pageInput.querySelector(".tick-scale"),this.inputTickInterval=this.pageInput.querySelector(".tick-interval"),this.inputTickVertical=this.pageInput.querySelector(".tick-vertical"),this.inputSlidermLength=this.pageInput.querySelector(".sliderm-length"),this.inputSlidermLineHeight=this.pageInput.querySelector(".sliderm-line-height"),this.inputSlidermPointSize=this.pageInput.querySelector(".sliderm-point-size"),this.inputEndRange=this.pageInput.querySelector(".sliderm-end-range"),this.inputStartRange=this.pageInput.querySelector(".sliderm-start-range"),this.inputSlidermMin=this.pageInput.querySelector(".sliderm-min"),this.inputSlidermMax=this.pageInput.querySelector(".sliderm-max"),this.inputSlidermStep=this.pageInput.querySelector(".sliderm-step"),this.inputSlidermIntervals=this.pageInput.querySelector(".sliderm-intervals"),this.inputSlidermResult=e.querySelector(".page__result"),this.chooseColorLine=e.querySelectorAll(".chooseColor__item")[0],this.chooseColorRange=e.querySelectorAll(".chooseColor__item")[1],this.chooseColorPoint=e.querySelectorAll(".chooseColor__item")[2],this.chooseColorScale=e.querySelectorAll(".chooseColor__item")[3],this.chooseColorText=e.querySelectorAll(".chooseColor__item")[4],this.chooseColors=this.chooseColorLine.closest(".chooseColor"),this.setInputs(),$(this.inputSlidermResult).on("click",this.copyResult),$(this.pageInput).on("change",this.inputsChange),$(this.pageInput).on("click",this.inputsClick),$(this.div).on("mousedown",this.sliderMouseDown),$(this.chooseColors).on("mousedown",this.chooseColorMouseDown),$(document).on("mouseup",this.cancelMove)}var e,n,i;return e=t,(n=[{key:"chooseColorMouseDown",value:function(){this.setResult(),$(document).on("mousemove",this.chooseColorMouseMove)}},{key:"chooseColorMouseMove",value:function(){this.setResult()}},{key:"cancelMove",value:function(){$(document).off("mousemove",this.chooseColorMouseMove),$(document).off("mousemove",this.sliderMouseMove)}},{key:"sliderMouseDown",value:function(){this.change(),$(document).on("mousemove",this.sliderMouseMove)}},{key:"sliderMouseMove",value:function(){this.change()}},{key:"change",value:function(){this.setInputs(),this.inputSlidermResult.innerHTML="".concat(this.div.outerHTML.split(">")[0],"></div>")}},{key:"inputsChange",value:function(){this.getInputs(),this.refreshElement()}},{key:"inputsClick",value:function(){this.getInputs(),this.setInputs(),this.refreshElement()}},{key:"setResult",value:function(){this.div.dataset.colorLine=this.chooseColor2color(this.chooseColorLine),this.div.dataset.colorRange=this.chooseColor2color(this.chooseColorRange),this.div.dataset.colorPoint=this.chooseColor2color(this.chooseColorPoint),this.div.dataset.colorScale=this.chooseColor2color(this.chooseColorScale),this.div.dataset.colorText=this.chooseColor2color(this.chooseColorText),this.refreshElement(),this.inputSlidermResult.innerHTML="".concat(this.div.outerHTML.split(">")[0],"></div>")}},{key:"chooseColor2color",value:function(t){if(t){var e=t.getElementsByClassName("sliderm3"),n=e[0].getAttribute("data-end-range"),i=e[1].getAttribute("data-end-range"),o=e[2].getAttribute("data-end-range"),r=e[3].getAttribute("data-end-range")/255;return"rgba(".concat(n,", ").concat(i,", ").concat(o,", ").concat(r,")")}return"gray"}},{key:"getInputs",value:function(){this.div.dataset.hint=this.inputTickHint.classList.contains("true")?"true":"",this.div.dataset.scale=this.inputTickScale.classList.contains("true")?"true":"",this.div.dataset.interval=this.inputTickInterval.classList.contains("true")?"true":"",this.div.dataset.vertical=this.inputTickVertical.classList.contains("true")?"true":"",this.div.dataset.length=this.inputSlidermLength.value||"100%",this.div.dataset.lineHeight=this.inputSlidermLineHeight.value||10,this.div.dataset.pointSize=this.inputSlidermPointSize.value||20,this.div.dataset.endRange=this.inputEndRange.value,this.inputStartRange.value&&(this.div.dataset.startRange=this.inputStartRange.value),this.div.dataset.min=this.inputSlidermMin.value,this.div.dataset.max=this.inputSlidermMax.value,this.div.dataset.step=this.inputSlidermStep.value,this.div.dataset.intervals=this.inputSlidermIntervals.value,this.inputSlidermResult.innerHTML="".concat(this.div.outerHTML.split(">")[0],"></div>")}},{key:"setInputs",value:function(){this.div.dataset.interval?this.inputStartRange.value=Math.round(100*this.div.dataset.startRange)/100:this.inputStartRange.value="",this.inputEndRange.value=Math.round(100*this.div.dataset.endRange)/100,this.inputSlidermMin.value=this.div.dataset.min,this.inputSlidermMax.value=this.div.dataset.max,this.inputSlidermStep.value=this.div.dataset.step,this.inputSlidermIntervals.value=this.div.dataset.intervals,this.inputSlidermLength.value=this.div.dataset.length,this.inputSlidermLineHeight.value=this.div.dataset.lineHeight,this.inputSlidermPointSize.value=this.div.dataset.pointSize,this.div.dataset.hint&&$(this.inputTickHint).addClass("true"),this.div.dataset.scale&&$(this.inputTickScale).addClass("true"),this.div.dataset.interval&&$(this.inputTickInterval).addClass("true"),this.div.dataset.vertical&&$(this.inputTickVertical).addClass("true")}},{key:"refreshElement",value:function(){var t=document.createElement("div");t.className=this.div.className,Object.assign(t.dataset,this.div.dataset),this.div.closest(".page__slider").replaceChild(t,this.div),this.div=t,new r.default(t),$(this.div).on("mousedown",this.sliderMouseDown)}},{key:"copyResult",value:function(){this.select(),document.execCommand("copy"),alert("Copied the text: "+this.value)}}])&&a(e.prototype,n),i&&a(e,i),t}()).prototype,"chooseColorMouseDown",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"chooseColorMouseDown"),i.prototype),s(i.prototype,"chooseColorMouseMove",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"chooseColorMouseMove"),i.prototype),s(i.prototype,"cancelMove",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"cancelMove"),i.prototype),s(i.prototype,"sliderMouseDown",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"sliderMouseDown"),i.prototype),s(i.prototype,"sliderMouseMove",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"sliderMouseMove"),i.prototype),s(i.prototype,"change",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"change"),i.prototype),s(i.prototype,"inputsChange",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"inputsChange"),i.prototype),s(i.prototype,"inputsClick",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"inputsClick"),i.prototype),s(i.prototype,"setResult",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"setResult"),i.prototype),s(i.prototype,"chooseColor2color",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"chooseColor2color"),i.prototype),s(i.prototype,"getInputs",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"getInputs"),i.prototype),s(i.prototype,"setInputs",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"setInputs"),i.prototype),s(i.prototype,"refreshElement",[o.bind],Object.getOwnPropertyDescriptor(i.prototype,"refreshElement"),i.prototype),i);$(".page__content").each(function(t,e){return new c(e)});var h=n(1);$(".".concat(h.sliderClass)).modSlider().on("slider.stateChange",function(t){console.log("".concat(t.start,", ").concat(t.end))})}]);
//# sourceMappingURL=main.js.map
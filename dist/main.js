!function(t){var e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){var o,r,s;r=[e],void 0===(s="function"==typeof(o=function(t){"use strict";t.__esModule=!0;var e={},i=Object.prototype.hasOwnProperty,o={memoize:function(t){var o=arguments.length<=1||void 0===arguments[1]?e:arguments[1],r=o.cache||{};return function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];var l=String(s[0]);return!1===o.caseSensitive&&(l=l.toLowerCase()),i.call(r,l)?r[l]:r[l]=t.apply(this,s)}},debounce:function(t,e){if("function"==typeof e){var i=t;t=e,e=i}var o=e&&e.delay||e||0,r=void 0,s=void 0,n=void 0;return function(){for(var e=arguments.length,i=Array(e),l=0;l<e;l++)i[l]=arguments[l];r=i,s=this,n||(n=setTimeout(function(){t.apply(s,r),r=s=n=null},o))}},bind:function(t,e,i){var o=i.value;return{configurable:!0,get:function(){var t=o.bind(this);return Object.defineProperty(this,e,{value:t,configurable:!0,writable:!0}),t}}}},r=l(o.memoize),s=l(o.debounce),n=l(function(t,e){return t.bind(e)},function(){return o.bind});function l(t,e){var i,o=(e=e||t.decorate||(i=t,function(t){return"function"==typeof t?i(t):function(e,o,r){r.value=i(r.value,t,e,o,r)}}))();return function(){for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];var n=r.length;return(n<2?e:n>2?o:t).apply(void 0,r)}}t.memoize=r,t.debounce=s,t.bind=n,t.default={memoize:r,debounce:s,bind:n}})?o.apply(e,r):o)||(t.exports=s)},function(t,e,i){},function(t,e,i){t.exports=i.p+"/favicon.ico"},function(t,e,i){},function(t,e,i){},,,function(t,e,i){"use strict";i.r(e);i(1),i(2);var o,r=i(0);i(3),i(4);function s(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e,i,o,r){var s={};return Object.keys(o).forEach(function(t){s[t]=o[t]}),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=i.slice().reverse().reduce(function(i,o){return o(t,e,i)||i},s),r&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(r):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(t,e,s),s=null),s}var l=(n((o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sliderm3pageContentDiv=e,this.sliderm3Div=$(".sliderm3",e)[0],this.sliderm3pageInputDiv=$(".sliderm3page__inputs",e)[0],this.inputTickHintDiv=$(".tick-hint",this.sliderm3pageInputDiv)[0],this.inputTickScaleDiv=$(".tick-scale",this.sliderm3pageInputDiv)[0],this.inputTickIntervalDiv=$(".tick-interval",this.sliderm3pageInputDiv)[0],this.inputTickVerticalDiv=$(".tick-vertical",this.sliderm3pageInputDiv)[0],this.inputSlidermLengthDiv=$(".sliderm-length",this.sliderm3pageInputDiv)[0],this.inputEndRangeDiv=$(".sliderm-end-range",this.sliderm3pageInputDiv)[0],this.inputStartRangeDiv=$(".sliderm-start-range",this.sliderm3pageInputDiv)[0],this.inputSlidermMinDiv=$(".sliderm-min",this.sliderm3pageInputDiv)[0],this.inputSlidermMaxDiv=$(".sliderm-max",this.sliderm3pageInputDiv)[0],this.inputSlidermStepDiv=$(".sliderm-step",this.sliderm3pageInputDiv)[0],this.inputSlidermIntervalsDiv=$(".sliderm-intervals",this.sliderm3pageInputDiv)[0],this.inputSlidermResultDiv=$(".sliderm3page__result",e)[0],this.chooseColorLineDiv=$(".chooseColor__item",e)[0],this.chooseColorRangeDiv=$(".chooseColor__item",e)[1],this.chooseColorPointDiv=$(".chooseColor__item",e)[2],this.chooseColorScaleDiv=$(".chooseColor__item",e)[3],this.chooseColorTextDiv=$(".chooseColor__item",e)[4],this.chooseColors=$(this.chooseColorLineDiv.parentElement),this.setInputs(),$(this.sliderm3pageInputDiv).on("change",this.inputsChange),$(this.sliderm3pageInputDiv).on("click",this.inputsClick),$(this.sliderm3Div).on("mousedown",this.sliderMouseDown),this.chooseColors.on("mousedown",this.chooseColorMouseDown),$(document).on("mouseup",this.cancelMove)}var e,i,o;return e=t,(i=[{key:"chooseColorMouseDown",value:function(){this.setResult(),$(document).on("mousemove",this.chooseColorMouseMove)}},{key:"chooseColorMouseMove",value:function(){this.setResult()}},{key:"cancelMove",value:function(){$(document).off("mousemove",this.chooseColorMouseMove),$(document).off("mousemove",this.sliderMouseMove)}},{key:"sliderMouseDown",value:function(){this.sliderm3change(),$(document).on("mousemove",this.sliderMouseMove)}},{key:"sliderMouseMove",value:function(){this.sliderm3change()}},{key:"sliderm3change",value:function(){this.setInputs(),this.inputSlidermResultDiv.innerHTML="".concat(this.sliderm3Div.outerHTML.split(">")[0],'></div><script src="sliderm3.js"><\/script>'),this.sliderm3Div.dispatchEvent(new Event("refreshView"))}},{key:"inputsChange",value:function(){this.getInputs(),this.sliderm3Div.dispatchEvent(new Event("refreshView"))}},{key:"inputsClick",value:function(){this.getInputs(),this.setInputs(),this.sliderm3Div.dispatchEvent(new Event("refreshView"))}},{key:"setResult",value:function(){this.sliderm3Div.dataset.colorLine=this.chooseColor2color(this.chooseColorLineDiv),this.sliderm3Div.dataset.colorRange=this.chooseColor2color(this.chooseColorRangeDiv),this.sliderm3Div.dataset.colorPoint=this.chooseColor2color(this.chooseColorPointDiv),this.sliderm3Div.dataset.colorScale=this.chooseColor2color(this.chooseColorScaleDiv),this.sliderm3Div.dataset.colorText=this.chooseColor2color(this.chooseColorTextDiv),this.sliderm3Div.dispatchEvent(new Event("refreshView")),this.inputSlidermResultDiv.innerHTML="".concat(this.sliderm3Div.outerHTML.split(">")[0],'></div><script src="sliderm3.js"><\/script>')}},{key:"chooseColor2color",value:function(t){if(t){var e=t.getElementsByClassName("sliderm3"),i=e[0].getAttribute("data-end-range"),o=e[1].getAttribute("data-end-range"),r=e[2].getAttribute("data-end-range"),s=e[3].getAttribute("data-end-range")/255;return"rgba(".concat(i,", ").concat(o,", ").concat(r,", ").concat(s,")")}return"gray"}},{key:"getInputs",value:function(){this.sliderm3Div.dataset.hint=this.inputTickHintDiv.classList.contains("true")?"true":"",this.sliderm3Div.dataset.scale=this.inputTickScaleDiv.classList.contains("true")?"true":"",this.sliderm3Div.dataset.interval=this.inputTickIntervalDiv.classList.contains("true")?"true":"",this.sliderm3Div.dataset.vertical=this.inputTickVerticalDiv.classList.contains("true")?"true":"",this.sliderm3Div.dataset.length=this.inputSlidermLengthDiv.value||"100%",this.sliderm3Div.dataset.endRange=this.inputEndRangeDiv.value,this.inputStartRangeDiv.value&&(this.sliderm3Div.dataset.startRange=this.inputStartRangeDiv.value),this.sliderm3Div.dataset.min=this.inputSlidermMinDiv.value,this.sliderm3Div.dataset.max=this.inputSlidermMaxDiv.value,this.sliderm3Div.dataset.step=this.inputSlidermStepDiv.value,this.sliderm3Div.dataset.intervals=this.inputSlidermIntervalsDiv.value,this.inputSlidermResultDiv.innerHTML="".concat(this.sliderm3Div.outerHTML.split(">")[0],'></div><script src="sliderm3.js"><\/script>')}},{key:"setInputs",value:function(){this.sliderm3Div.dataset.interval?this.inputStartRangeDiv.value=Math.round(100*this.sliderm3Div.dataset.startRange)/100:this.inputStartRangeDiv.value="",this.inputEndRangeDiv.value=Math.round(100*this.sliderm3Div.dataset.endRange)/100,this.inputSlidermMinDiv.value=this.sliderm3Div.dataset.min,this.inputSlidermMaxDiv.value=this.sliderm3Div.dataset.max,this.inputSlidermStepDiv.value=this.sliderm3Div.dataset.step,this.inputSlidermIntervalsDiv.value=this.sliderm3Div.dataset.intervals,this.inputSlidermLengthDiv.value=this.sliderm3Div.dataset.length,this.sliderm3Div.dataset.hint&&$(this.inputTickHintDiv).addClass("true"),this.sliderm3Div.dataset.scale&&$(this.inputTickScaleDiv).addClass("true"),this.sliderm3Div.dataset.interval&&$(this.inputTickIntervalDiv).addClass("true"),this.sliderm3Div.dataset.vertical&&$(this.inputTickVerticalDiv).addClass("true")}}])&&s(e.prototype,i),o&&s(e,o),t}()).prototype,"chooseColorMouseDown",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"chooseColorMouseDown"),o.prototype),n(o.prototype,"chooseColorMouseMove",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"chooseColorMouseMove"),o.prototype),n(o.prototype,"cancelMove",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"cancelMove"),o.prototype),n(o.prototype,"sliderMouseDown",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"sliderMouseDown"),o.prototype),n(o.prototype,"sliderMouseMove",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"sliderMouseMove"),o.prototype),n(o.prototype,"sliderm3change",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"sliderm3change"),o.prototype),n(o.prototype,"inputsChange",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"inputsChange"),o.prototype),n(o.prototype,"inputsClick",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"inputsClick"),o.prototype),n(o.prototype,"setResult",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"setResult"),o.prototype),n(o.prototype,"chooseColor2color",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"chooseColor2color"),o.prototype),n(o.prototype,"getInputs",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"getInputs"),o.prototype),n(o.prototype,"setInputs",[r.bind],Object.getOwnPropertyDescriptor(o.prototype,"setInputs"),o.prototype),o);$(".sliderm3page__content").each(function(t,e){return new l(e)}),console.log("Run...")}]);
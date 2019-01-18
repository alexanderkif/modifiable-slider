!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){var s,o,n;o=[e],void 0===(n="function"==typeof(s=function(t){"use strict";t.__esModule=!0;var e={},i=Object.prototype.hasOwnProperty,s={memoize:function(t){var s=arguments.length<=1||void 0===arguments[1]?e:arguments[1],o=s.cache||{};return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var l=String(n[0]);return!1===s.caseSensitive&&(l=l.toLowerCase()),i.call(o,l)?o[l]:o[l]=t.apply(this,n)}},debounce:function(t,e){if("function"==typeof e){var i=t;t=e,e=i}var s=e&&e.delay||e||0,o=void 0,n=void 0,r=void 0;return function(){for(var e=arguments.length,i=Array(e),l=0;l<e;l++)i[l]=arguments[l];o=i,n=this,r||(r=setTimeout(function(){t.apply(n,o),o=n=r=null},s))}},bind:function(t,e,i){var s=i.value;return{configurable:!0,get:function(){var t=s.bind(this);return Object.defineProperty(this,e,{value:t,configurable:!0,writable:!0}),t}}}},o=l(s.memoize),n=l(s.debounce),r=l(function(t,e){return t.bind(e)},function(){return s.bind});function l(t,e){var i=(e=e||t.decorate||function(t){return function(e){return"function"==typeof e?t(e):function(i,s,o){o.value=t(o.value,e,i,s,o)}}}(t))();return function(){for(var s=arguments.length,o=Array(s),n=0;n<s;n++)o[n]=arguments[n];var r=o.length;return(r<2?e:r>2?i:t).apply(void 0,o)}}t.memoize=o,t.debounce=n,t.bind=r,t.default={memoize:o,debounce:n,bind:r}})?s.apply(e,o):s)||(t.exports=n)},,function(t,e,i){"use strict";i.r(e);var s,o,n=i(0);function r(t,e,i,s,o){var n={};return Object.keys(s).forEach(function(t){n[t]=s[t]}),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce(function(i,s){return s(t,e,i)||i},n),o&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(o):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(t,e,n),n=null),n}let l=(r((s=class{constructor(t,e){this.model=t,this.view=e,this.toDraw(),document.addEventListener("mousemove",this.sliderm3MouseMoveListener),document.addEventListener("mouseup",this.sliderm3CancelMove),this.mousedown=0,window.addEventListener("resize",this.sliderm3ResizeThrottler),this.view.div.addEventListener("sliderm3modelChanged",this.sliderm3modelChanged)}sliderm3modelChanged(){this.model.dataset=this.view.div.dataset,this.toDraw()}toDraw(){this.view.model=this.model.dataset,this.view.div.dispatchEvent(new Event("draw")),this.view.lineDiv.addEventListener("mousedown",this.sliderm3MouseDownListener)}sliderm3ResizeThrottler(){this.resizeTimeout||(this.resizeTimeout=setTimeout(function(){this.resizeTimeout=null,this.toDraw()}.bind(this),66))}sliderm3MouseDownListener(t){var e;e=this.model.dataset.vertical?t.clientY>this.getCoords(this.view.point2Div).top+ +this.model.dataset.pointSize:t.clientX<this.getCoords(this.view.rangeDiv).left+ +this.view.rangeDiv.offsetWidth-+this.model.dataset.pointSize/2,this.model.dataset.interval&&e?this.mousedown=1:this.mousedown=2,this.changeRange(t)}sliderm3MouseMoveListener(t){0!=this.mousedown&&this.changeRange(t)}changeRange(t){var e;e=this.model.dataset.vertical?this.view.lineDiv.offsetHeight-(t.clientY-this.getCoords(this.view.lineDiv).top+ +this.model.dataset.lineHeight/2):t.clientX-this.getCoords(this.view.lineDiv).left-+this.model.dataset.lineHeight/2;var i=this.model.dataset.step*Math.round((+this.model.dataset.min+e*this.view.range/this.view.rangeMaxWidth)/this.model.dataset.step);this.model.checkNewValue(i,this.mousedown),this.toDraw()}sliderm3CancelMove(){this.mousedown=0}getCoords(t){var e=t.getBoundingClientRect();return{top:e.top,left:e.left}}}).prototype,"sliderm3modelChanged",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"sliderm3modelChanged"),s.prototype),r(s.prototype,"toDraw",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"toDraw"),s.prototype),r(s.prototype,"sliderm3ResizeThrottler",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"sliderm3ResizeThrottler"),s.prototype),r(s.prototype,"sliderm3MouseDownListener",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"sliderm3MouseDownListener"),s.prototype),r(s.prototype,"sliderm3MouseMoveListener",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"sliderm3MouseMoveListener"),s.prototype),r(s.prototype,"changeRange",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"changeRange"),s.prototype),r(s.prototype,"sliderm3CancelMove",[n.bind],Object.getOwnPropertyDescriptor(s.prototype,"sliderm3CancelMove"),s.prototype),s),h=(r((o=class{constructor(t){this.div=t,this.model=t.dataset,this.div.style.position="relative",this.div.style.userSelect="none",this.div.style.width="100%",this.div.oncontextmenu=function(){return!1},this.div.ondragstart=function(){return!1},this.div.onselectstart=function(){return!1},this.draw(),this.div.addEventListener("draw",this.draw)}draw(){this.lineDiv&&this.lineDiv.remove(),this.drawLine(),this.model.scale&&this.drawScale(),this.drawRange(),this.model.interval&&this.drawPoint1(),this.drawPoint2()}drawLine(){this.lineDiv=document.createElement("div"),this.lineDiv.className="sliderm3__line",this.model.vertical?(this.lineDiv.style.height=this.model.length,this.div.style.maxWidth=`${this.model.lineHeight}px`):(this.lineDiv.style.height=`${this.model.lineHeight}px`,this.div.style.maxWidth=this.model.length),this.lineDiv.style.borderRadius=`${this.model.lineHeight/2}px`,this.lineDiv.style.backgroundColor=this.model.colorLine,this.div.appendChild(this.lineDiv)}drawScale(){var t;this.scaleDiv=document.createElement("ul"),this.scaleDiv.className="sliderm3__scale",this.scaleDiv.style.position="absolute",this.scaleDiv.style.margin="0px",this.scaleDiv.style.padding="0px",this.scaleDiv.style.display="flex",this.scaleDiv.style.fontSize=`${3*this.model.pointSize/6}px`,this.scaleDiv.style.justifyContent="space-between",this.scaleDiv.style.color=this.model.colorScale,this.lineDiv.appendChild(this.scaleDiv),this.model.vertical?(this.scaleDiv.style.flexDirection="column-reverse",this.scaleDiv.style.left=`${+this.model.pointSize>+this.model.lineHeight?+this.model.lineHeight+(+this.model.pointSize-+this.model.lineHeight)/2+5:+this.model.lineHeight+5}px`,this.scaleDiv.style.height=`${+this.lineDiv.offsetHeight}px`):(this.scaleDiv.style.top=`${+this.model.pointSize>+this.model.lineHeight?+this.model.lineHeight+(+this.model.pointSize-+this.model.lineHeight)/2+5:+this.model.lineHeight+5}px`,this.scaleDiv.style.width=`${+this.lineDiv.offsetWidth}px`);for(var e=0;e<=this.model.intervals;e++)(t=document.createElement("li")).style.listStyleType="none",t.innerHTML=Math.round(+this.model.min+(this.model.max-this.model.min)*e/this.model.intervals),this.scaleDiv.appendChild(t)}drawRange(){if(this.model.vertical?this.rangeMaxWidth=this.lineDiv.offsetHeight-this.model.lineHeight:this.rangeMaxWidth=this.lineDiv.offsetWidth-this.model.lineHeight,this.range=this.model.max-this.model.min,this.rangeDiv=document.createElement("div"),this.rangeDiv.className="sliderm3__range",this.rangeDiv.style.height="inherit",this.rangeDiv.style.position="absolute",this.model.interval){var t=(this.model.value2-this.model.value1)*this.rangeMaxWidth/this.range,e=(this.model.value1-this.model.min)*this.rangeMaxWidth/this.range;this.model.vertical?(this.rangeDiv.style.height=`${t}px`,this.rangeDiv.style.top=`${this.rangeMaxWidth-t-e+this.model.lineHeight/2}px`):(this.rangeDiv.style.width=`${t}px`,this.rangeDiv.style.left=`${e+this.model.lineHeight/2}px`)}else{t=(this.model.value2-this.model.min)*this.rangeMaxWidth/this.range;this.model.vertical?(this.rangeDiv.style.height=`${t}px`,this.rangeDiv.style.top=`${this.rangeMaxWidth-t+this.model.lineHeight/2}px`):(this.rangeDiv.style.width=`${t}px`,this.rangeDiv.style.left=`${this.model.lineHeight/2}px`)}if(this.rangeDiv.style.borderRadius="inherit",this.rangeDiv.style.backgroundColor="rgba(255, 255, 255, 0)",this.lineDiv.appendChild(this.rangeDiv),this.pointRange=document.createElement("div"),this.pointRange.className="sliderm3__point-range",this.pointRange.style.position="absolute",this.model.vertical){this.pointRange.style.width=`${this.model.lineHeight}px`;var i=+this.rangeDiv.offsetHeight+ +this.model.lineHeight;this.pointRange.style.height=`${i}px`,this.pointRange.style.top=`${-this.model.lineHeight/2}px`}else this.pointRange.style.height=`${this.model.lineHeight}px`,this.pointRange.style.width=`${+this.rangeDiv.offsetWidth+ +this.model.lineHeight}px`,this.pointRange.style.left=`${-this.model.lineHeight/2}px`;this.pointRange.style.borderRadius=`${this.model.lineHeight/2}px`,this.pointRange.style.backgroundColor=this.model.colorRange,this.rangeDiv.appendChild(this.pointRange)}drawPoint1(){this.point1Div=document.createElement("div"),this.point1Div.className="sliderm3__point",this.point1Div.style.position="absolute",this.point1Div.style.height=this.point1Div.style.width=`${this.model.pointSize}px`,this.point1Div.style.borderRadius="50%",this.model.vertical?(this.point1Div.style.top=`${this.rangeDiv.offsetHeight-this.model.pointSize/2}px`,this.point1Div.style.left=`${this.model.lineHeight/2-this.model.pointSize/2}px`):(this.point1Div.style.top=`${this.lineDiv.offsetHeight/2-this.model.pointSize/2}px`,this.point1Div.style.left=`${-this.model.pointSize/2}px`),this.point1Div.style.backgroundColor=this.model.colorPoint,this.rangeDiv.appendChild(this.point1Div),this.model.hint&&this.drawHint(this.point1Div,this.model.value1)}drawPoint2(){this.point2Div=document.createElement("div"),this.point2Div.className="sliderm3__point",this.point2Div.style.position="absolute",this.point2Div.style.height=this.point2Div.style.width=`${this.model.pointSize}px`,this.point2Div.style.borderRadius="50%",this.model.vertical?(this.point2Div.style.top=`${-this.model.pointSize/2}px`,this.point2Div.style.left=`${this.model.lineHeight/2-this.model.pointSize/2}px`):(this.point2Div.style.top=`${this.lineDiv.offsetHeight/2-this.model.pointSize/2}px`,this.point2Div.style.left=`${this.rangeDiv.offsetWidth-this.model.pointSize/2}px`),this.point2Div.style.backgroundColor=this.model.colorPoint,this.rangeDiv.appendChild(this.point2Div),this.model.hint&&this.drawHint(this.point2Div,this.model.value2)}drawHint(t,e){this.hintDiv=document.createElement("div"),this.hintDiv.className="sliderm3__hint",this.hintDiv.style.position="absolute",this.hintDiv.style.display="flex",this.hintDiv.style.alignItems="center",this.hintDiv.style.padding="2px 8px",this.hintDiv.style.borderRadius="4px",this.hintDiv.style.height=`${this.model.pointSize}px`,this.hintDiv.style.fontSize=`${4*this.model.pointSize/6}px`,this.hintDiv.style.backgroundColor="inherit",this.hintDiv.style.color=this.model.colorText,this.hintDiv.innerHTML=Math.round(100*e)/100,t.appendChild(this.hintDiv),this.arrowDiv=document.createElement("div"),this.arrowDiv.className="sliderm3__arrow",this.arrowDiv.style.position="absolute",this.arrowDiv.style.content="",this.arrowDiv.style.transform="rotate(-45deg)",this.arrowDiv.style.zIndex="-1",this.arrowDiv.style.height=`${this.model.pointSize/3}px`,this.arrowDiv.style.width=`${this.model.pointSize/3}px`,this.arrowDiv.style.backgroundColor="inherit",this.hintDiv.appendChild(this.arrowDiv),this.model.vertical?(this.hintDiv.style.left=`${-this.model.pointSize/2-this.hintDiv.offsetWidth}px`,this.hintDiv.style.top=`${this.model.pointSize/2-this.hintDiv.offsetHeight/2}px`,this.arrowDiv.style.top=`${this.hintDiv.offsetHeight/2-this.arrowDiv.offsetHeight/2}px`,this.arrowDiv.style.left=`${this.hintDiv.offsetWidth-this.arrowDiv.offsetWidth/2-1}px`):(this.hintDiv.style.top=`${-this.model.pointSize/2-this.hintDiv.offsetHeight}px`,this.hintDiv.style.left=`${this.model.pointSize/2-this.hintDiv.offsetWidth/2}px`,this.arrowDiv.style.top=`${this.hintDiv.offsetHeight-this.arrowDiv.offsetHeight/2-1}px`,this.arrowDiv.style.left=`${this.hintDiv.offsetWidth/2-this.arrowDiv.offsetWidth/2}px`)}}).prototype,"draw",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"draw"),o.prototype),r(o.prototype,"drawLine",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawLine"),o.prototype),r(o.prototype,"drawScale",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawScale"),o.prototype),r(o.prototype,"drawRange",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawRange"),o.prototype),r(o.prototype,"drawPoint1",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawPoint1"),o.prototype),r(o.prototype,"drawPoint2",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawPoint2"),o.prototype),r(o.prototype,"drawHint",[n.bind],Object.getOwnPropertyDescriptor(o.prototype,"drawHint"),o.prototype),o);[].forEach.call(document.getElementsByClassName("sliderm3"),t=>new l(new class{constructor(t){this.dataset=t}checkNewValue(t,e){1==e&&(this.dataset.value1=t,+this.dataset.value1>+this.dataset.value2&&(this.dataset.value1=this.dataset.value2),+this.dataset.value1<+this.dataset.min&&(this.dataset.value1=this.dataset.min)),2==e&&(this.dataset.value2=t,this.dataset.interval&&+this.dataset.value2<+this.dataset.value1&&(this.dataset.value2=this.dataset.value1),!this.dataset.interval&&+this.dataset.value2<+this.dataset.min&&(this.dataset.value2=this.dataset.min),+this.dataset.value2>+this.dataset.max&&(this.dataset.value2=this.dataset.max))}}(t.dataset),new h(t)))}]);

import { bind } from 'decko';
import EventObserver from './EventObserver';
const THROTTLE_THRESHOLD = 50;

export default class View extends EventObserver {
    constructor(element) {
        super();
        this.element = element;
        this.model = this.element.dataset;
        this.element.oncontextmenu = function() {return false;};    
        this.element.ondragstart = function() {return false;};
        this.element.onselectstart = function() {return false;};
        this.refreshSlider();
        document.addEventListener('mouseup', this.cancelMove);
        this.activePoint = "no";
        window.addEventListener('resize', this.resizeThrottler);
        this.element.addEventListener('refreshView', this.refreshView);
    }
    
    @bind
    refreshView() {
        this.broadcast({refreshModel: this.model});
        this.refreshSlider();
    }
    
    @bind
    mouseDownListener(e) {
        var lessThanEndPoint = this.isEventPositionLessThenEndPoint(e);
        if (this.model.interval && lessThanEndPoint)
            this.activePoint = "startPoint";
        else
            this.activePoint = "endPoint";
        this.setModelFromEvent(e);
        document.addEventListener('mousemove', this.mouseMoveListener);
        this.broadcastChangedPoint();
    }

    isEventPositionLessThenEndPoint(e) {
        if (this.model.vertical)
            return e.clientY > this.getCoords(this.endPointElement).top + +this.model.pointSize;
        else
            return e.clientX < this.getCoords(this.endPointElement).left;
    }

    getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left
        };
    }

    setModelFromEvent(e) {
        if (this.activePoint == "startPoint") 
            this.model.startRange = this.getNewValueFromEvent(e);
        else
            this.model.endRange = this.getNewValueFromEvent(e);
    }

    getNewValueFromEvent(e) {
        var differenceInPixels;
        if (this.model.vertical)
            differenceInPixels = this.lineElement.offsetHeight - (e.clientY - this.getCoords(this.lineElement).top + +this.model.lineHeight/2);
        else
            differenceInPixels = e.clientX - this.getCoords(this.lineElement).left - +this.model.lineHeight/2;        
        return this.model.step * Math.round((+this.model.min + differenceInPixels * this.range / this.rangeMaxWidth) / this.model.step);
    }
    
    @bind
    mouseMoveListener(e) {
        if (this.activePoint != "no") {
            this.setModelFromEvent(e);
            this.broadcastChangedPoint();
        }
    }

    broadcastChangedPoint() {
        if (this.activePoint == "startPoint")
            this.broadcast({ setStartRange: this.model});
        if (this.activePoint == "endPoint")
            this.broadcast({ setEndRange: this.model});
    }

    @bind
    cancelMove() {
        this.activePoint = "no";
        document.removeEventListener('mousemove', this.mouseMoveListener);
    }

    @bind
    resizeThrottler() {
        if ( !this.resizeTimeout ) {
            this.resizeTimeout = setTimeout(function() {
                this.resizeTimeout = null;
                this.refreshSlider();
            }.bind(this), THROTTLE_THRESHOLD);
        }
    }
    
    @bind
    refreshSlider() {
        if (this.lineElement) this.lineElement.remove();
        this.drawLine();
        if (this.model.scale) this.drawScale();
        this.drawRange();
        if (this.model.interval) this.drawStartPoint();
        this.drawEndPoint();
    };
    
    @bind
    changeStartRange() {
        this.changeRange();
        this.countStartPointElementTop();
        this.countStartPointElementLeft();
        if (this.startHintArrow) {
            this.startHintArrow[0].childNodes[0].nodeValue = Math.round(this.model.startRange * 100) / 100;
            this.setHintPosition(this.startHintArrow[0], this.startHintArrow[1]);
        }
    };
    
    @bind
    changeEndRange() {
        this.changeRange();
        this.countEndPointElementTop();
        this.countEndPointElementLeft();
        if (this.endHintArrow) {
            this.endHintArrow[0].childNodes[0].nodeValue = Math.round(this.model.endRange * 100) / 100;
            this.setHintPosition(this.endHintArrow[0], this.endHintArrow[1]);
        }
    };
    
    @bind
    changeRange() {
        this.countRangeElement();
        this.countPointRangeElement();
    };
    
    @bind
    drawLine() {
        this.lineElement = document.createElement("div");
        this.lineElement.className = "sliderm3__line";
        if (this.model.vertical) {
            this.lineElement.style.height = this.model.length;
            this.element.style.maxWidth = `${this.model.lineHeight}px`;
        }
        else {
            this.lineElement.style.height = `${this.model.lineHeight}px`;
            this.element.style.maxWidth = this.model.length;
        }
        this.lineElement.style.borderRadius = `${this.model.lineHeight / 2}px`;
        this.lineElement.style.backgroundColor = this.model.colorLine;
        this.element.appendChild(this.lineElement); 
        this.lineElement.addEventListener('mousedown', this.mouseDownListener);
    };
    
    @bind
    drawScale() {
        this.scaleElement = document.createElement("ul");
        this.scaleElement.className = "sliderm3__scale";
        this.scaleElement.style.fontSize = `${this.model.pointSize * 3 / 6}px`;
        this.scaleElement.style.color = this.model.colorScale;
        this.lineElement.appendChild(this.scaleElement);
        if (this.model.vertical) {
            this.scaleElement.style.flexDirection = 'column-reverse';
            this.scaleElement.style.left = `${+this.model.pointSize > +this.model.lineHeight? +this.model.lineHeight + (+this.model.pointSize - +this.model.lineHeight)/2 + 5: +this.model.lineHeight + 5}px`;
            this.scaleElement.style.height = `${+this.lineElement.offsetHeight}px`;
        }
        else {
            this.scaleElement.style.top = `${+this.model.pointSize > +this.model.lineHeight? +this.model.lineHeight + (+this.model.pointSize - +this.model.lineHeight)/2 + 5: +this.model.lineHeight + 5}px`;
            this.scaleElement.style.width = `${+this.lineElement.offsetWidth}px`;
        }
        var digit;
        for(var i = 0; i <= this.model.intervals; i++) {
            digit = document.createElement('li');
            digit.style.listStyleType = 'none';
            digit.innerHTML = Math.round( +this.model.min + (this.model.max - this.model.min) * i / this.model.intervals);
            this.scaleElement.appendChild(digit);
        }
    };
    
    @bind
    drawRange() {
        if (this.model.vertical) this.rangeMaxWidth = this.lineElement.offsetHeight - this.model.lineHeight;
        else this.rangeMaxWidth = this.lineElement.offsetWidth - this.model.lineHeight;
        this.range = this.model.max - this.model.min;
        this.rangeElement = document.createElement("div");
        this.rangeElement.className = "sliderm3__range";
        this.countRangeElement();
        this.lineElement.appendChild(this.rangeElement);

        this.pointRange = document.createElement("div");
        this.pointRange.className = "sliderm3__point-range";
        this.countPointRangeElement();
        this.pointRange.style.borderRadius = `${this.model.lineHeight/2}px`;
        this.pointRange.style.backgroundColor = this.model.colorRange;
        this.rangeElement.appendChild(this.pointRange);
    };

    @bind
    countRangeElement() {
        if (this.model.interval) {
            var long = (this.model.endRange - this.model.startRange) * this.rangeMaxWidth / this.range;
            var startline = (this.model.startRange - this.model.min) * this.rangeMaxWidth / this.range;
            if (this.model.vertical) {
                this.rangeElement.style.height = `${long}px`;
                this.rangeElement.style.top = `${this.rangeMaxWidth - long + this.model.lineHeight / 2 - startline}px`;
            }
            else {
                this.rangeElement.style.width = `${long}px`;
                this.rangeElement.style.left = `${startline + this.model.lineHeight / 2}px`;
            }
        }
        else {
            var long = (this.model.endRange - this.model.min) * this.rangeMaxWidth / this.range;
            if (this.model.vertical) {
                this.rangeElement.style.height = `${long}px`;
                this.rangeElement.style.top = `${this.rangeMaxWidth - long + this.model.lineHeight / 2}px`;
            }
            else {
                this.rangeElement.style.width = `${long}px`;
                this.rangeElement.style.left = `${this.model.lineHeight / 2}px`;
            }
        }
    }
    
    @bind
    countPointRangeElement() {
        if (this.model.vertical) {
            this.pointRange.style.width = `${this.model.lineHeight}px`;
            var height = +this.rangeElement.offsetHeight + +this.model.lineHeight;
            this.pointRange.style.height = `${height}px`;
            this.pointRange.style.top = `${-this.model.lineHeight / 2}px`;
        }
        else {
            this.pointRange.style.height = `${this.model.lineHeight}px`;
            this.pointRange.style.width = `${+this.rangeElement.offsetWidth + +this.model.lineHeight}px`;
            this.pointRange.style.left = `${-this.model.lineHeight / 2}px`;
        }
    }

    @bind
    drawStartPoint() {
        this.startPointElement = document.createElement("div");
        this.startPointElement.className = "sliderm3__point";
        this.startPointElement.style.height = this.startPointElement.style.width = `${this.model.pointSize}px`;
        this.countStartPointElementTop();
        this.countStartPointElementLeft();
        this.startPointElement.style.backgroundColor = this.model.colorPoint;
        this.lineElement.appendChild(this.startPointElement);
        if (this.model.hint) this.startHintArrow = this.drawHint(this.startPointElement, this.model.startRange);
    };
    
    @bind
    countStartPointElementTop() {
        if (this.model.vertical)
            this.startPointElement.style.top = `${this.rangeElement.offsetTop + this.rangeElement.offsetHeight - this.model.pointSize / 2}px`;
        else
            this.startPointElement.style.top = `${this.lineElement.offsetHeight / 2 - this.model.pointSize / 2}px`;
    }
    
    @bind
    countStartPointElementLeft() {
        if (this.model.vertical)
            this.startPointElement.style.left = `${this.model.lineHeight / 2 - this.model.pointSize / 2}px`;
        else
            this.startPointElement.style.left = `${this.rangeElement.offsetLeft - this.model.pointSize / 2}px`;
    }

    @bind
    drawEndPoint() {
        this.endPointElement = document.createElement("div");
        this.endPointElement.className = "sliderm3__point";
        this.endPointElement.style.height = this.endPointElement.style.width = `${this.model.pointSize}px`;
        this.countEndPointElementTop();
        this.countEndPointElementLeft();
        this.endPointElement.style.backgroundColor = this.model.colorPoint;
        this.lineElement.appendChild(this.endPointElement);
        if (this.model.hint) this.endHintArrow = this.drawHint(this.endPointElement, this.model.endRange);
    };

    @bind
    countEndPointElementTop() {
        if (this.model.vertical)
            this.endPointElement.style.top = `${this.rangeElement.offsetTop - this.model.pointSize/2}px`;
        else 
            this.endPointElement.style.top = `${this.lineElement.offsetHeight/2 - this.model.pointSize/2}px`;
    };

    @bind
    countEndPointElementLeft() {
        if (this.model.vertical)
            this.endPointElement.style.left = `${this.model.lineHeight / 2 - this.model.pointSize / 2}px`;
        else
            this.endPointElement.style.left = `${this.rangeElement.offsetLeft + this.rangeElement.offsetWidth - this.model.pointSize / 2}px`;
    }

    @bind
    drawHint(div, value) {
        var hintElement = document.createElement("div");
        hintElement.className = "sliderm3__hint";
        hintElement.style.height = `${this.model.pointSize}px`;
        hintElement.style.fontSize = `${this.model.pointSize * 4 / 6}px`;
        hintElement.style.color = this.model.colorText;
        hintElement.innerHTML = Math.round(value * 100) / 100;
        div.appendChild(hintElement);
        
        var arrowElement = document.createElement("div");
        arrowElement.className = "sliderm3__arrow";  
        arrowElement.style.height = `${this.model.pointSize/3}px`;
        arrowElement.style.width = `${this.model.pointSize/3}px`;
        hintElement.appendChild(arrowElement);

        this.setHintPosition(hintElement, arrowElement);
        return [hintElement,arrowElement];
    };

    @bind
    setHintPosition(hintElement, arrowElement) {
        if (this.model.vertical) {
            hintElement.style.left = `${-this.model.pointSize / 2 - hintElement.offsetWidth}px`;
            hintElement.style.top = `${this.model.pointSize / 2 - hintElement.offsetHeight / 2}px`;
            arrowElement.style.top = `${hintElement.offsetHeight / 2 - arrowElement.offsetHeight / 2}px`;
            arrowElement.style.left = `${hintElement.offsetWidth - arrowElement.offsetWidth / 2 - 1}px`;
        }
        else {
            hintElement.style.top = `${-this.model.pointSize / 2 - hintElement.offsetHeight}px`;
            hintElement.style.left = `${this.model.pointSize / 2 - hintElement.offsetWidth / 2}px`;
            arrowElement.style.top = `${hintElement.offsetHeight - arrowElement.offsetHeight / 2 - 1}px`;
            arrowElement.style.left = `${hintElement.offsetWidth / 2 - arrowElement.offsetWidth / 2}px`;
        }
    }
}

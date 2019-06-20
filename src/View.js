
import { bind } from 'decko';
import EventObserver from './EventObserver';
const THROTTLE_THRESHOLD = 50;
const MIN_DISTANCE_SLIDER_SCALE = 5;

export default class View extends EventObserver {
    constructor(element) {
        super();
        this.element = element;
        this.element.oncontextmenu = function() {return false;};    
        this.element.ondragstart = function() {return false;};
        this.element.onselectstart = function() {return false;};
        this.refreshSlider();
        document.addEventListener('mouseup', this.cancelMove);
        this.activePoint = "no";
        window.addEventListener('resize', this.resizeThrottler);
    }
    
    @bind
    mouseDownListener(e) {
        var lessThanEndPoint = this.isEventPositionLessThenEndPoint(e);
        if (this.element.dataset.interval && lessThanEndPoint) {
            this.activePoint = "startPoint";
        }
        else {
            this.activePoint = "endPoint";
        }
        this.setDatasetFromEvent(e);
        document.addEventListener('mousemove', this.mouseMoveListener);
        this.broadcastChangedPoint();
    }

    isEventPositionLessThenEndPoint(e) {
        if (this.element.dataset.vertical) {
            return e.clientY > this.getCoords(this.endPointElement).top + +this.element.dataset.pointSize;
        }
        else {
            return e.clientX < this.getCoords(this.endPointElement).left;
        }
    }

    getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left
        };
    }

    setDatasetFromEvent(e) {
        if (this.activePoint == "startPoint") {
            this.element.dataset.startRange = this.getNewValueFromEvent(e);
        }
        else {
            this.element.dataset.endRange = this.getNewValueFromEvent(e);
        }
    }

    getNewValueFromEvent(e) {
        var differenceInPixels;
        if (this.element.dataset.vertical) {
            differenceInPixels = this.lineElement.offsetHeight - 
                (e.clientY - this.getCoords(this.lineElement).top + +this.element.dataset.lineHeight/2);
        }
        else {
            differenceInPixels = e.clientX - 
                this.getCoords(this.lineElement).left - +this.element.dataset.lineHeight/2;
        }
        return this.element.dataset.step * Math.round((+this.element.dataset.min + 
            differenceInPixels * this.range / this.rangeMaxWidth) / this.element.dataset.step);
    }
    
    @bind
    mouseMoveListener(e) {
        if (this.activePoint != "no") {
            this.setDatasetFromEvent(e);
            this.broadcastChangedPoint();
        }
    }

    broadcastChangedPoint() {
        if (this.activePoint == "startPoint") {
            this.broadcast({ startRange: this.element.dataset.startRange});
        }
        if (this.activePoint == "endPoint") {
            this.broadcast({ endRange: this.element.dataset.endRange});
        }
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
        if (this.lineElement) {
            this.lineElement.remove();
        }
        this.drawLine();
        this.lineElement.addEventListener('mousedown', this.mouseDownListener);
        if (this.element.dataset.scale) {
            this.drawScale();
        }
        this.drawRange();
        this.changeRange();
        if (this.element.dataset.interval) {
            this.drawStartPoint();
        }
        this.drawEndPoint();
    };
    
    @bind
    changeStartRange() {
        this.changeRange();
        this.countStartPointElementTop();
        this.countStartPointElementLeft();
        if (this.startHintArrow) {
            this.startHintArrow[0].childNodes[0].nodeValue = Math.round(this.element.dataset.startRange * 100) / 100;
            this.setHintPosition(this.startHintArrow[0], this.startHintArrow[1]);
        }
    };
    
    @bind
    changeEndRange() {
        this.changeRange();
        this.countEndPointElementTop();
        this.countEndPointElementLeft();
        if (this.endHintArrow) {
            this.endHintArrow[0].childNodes[0].nodeValue = Math.round(this.element.dataset.endRange * 100) / 100;
            this.setHintPosition(this.endHintArrow[0], this.endHintArrow[1]);
        }
    };
    
    @bind
    changeRange() {
        this.calculateRangePosition();
        this.countPointRangeElement();
    };
    
    @bind
    drawLine() {
        this.lineElement = document.createElement("div");
        this.lineElement.className = "sliderm3__line";
        if (this.element.dataset.vertical) {
            this.lineElement.style.height = this.element.dataset.length;
            this.element.style.maxWidth = `${this.element.dataset.lineHeight}px`;
        }
        else {
            this.lineElement.style.height = `${this.element.dataset.lineHeight}px`;
            this.element.style.maxWidth = this.element.dataset.length;
        }
        this.lineElement.style.borderRadius = `${this.element.dataset.lineHeight / 2}px`;
        this.lineElement.style.backgroundColor = this.element.dataset.colorLine;
        this.element.appendChild(this.lineElement); 
    };
    
    @bind
    drawScale() {
        this.scaleElement = document.createElement("ul");
        this.scaleElement.className = "sliderm3__scale";
        let dataset = this.element.dataset;
        this.scaleElement.style.fontSize = `${dataset.pointSize * 3 / 6}px`;
        this.scaleElement.style.color = dataset.colorScale;
        this.lineElement.appendChild(this.scaleElement);
        if (dataset.vertical) {
            this.scaleElement.style.flexDirection = 'column-reverse';
            this.scaleElement.style.left = `${this.getScaleLeft(dataset)}px`;
            this.scaleElement.style.height = `${+this.lineElement.offsetHeight}px`;
        }
        else {
            this.scaleElement.style.top = `${this.getScaleTop(dataset)}px`;
            this.scaleElement.style.width = `${+this.lineElement.offsetWidth}px`;
        }
        this.drawDigits(dataset);
    };
    
    drawDigits(dataset) {
        var digit;
        for (var i = 0; i <= dataset.intervals; i++) {
            digit = document.createElement('li');
            digit.style.listStyleType = 'none';
            digit.innerHTML = Math.round(+dataset.min +
                (dataset.max - dataset.min) * i / dataset.intervals);
            this.scaleElement.appendChild(digit);
        }
    }

    getScaleTop(dataset) {
        return +dataset.pointSize > +dataset.lineHeight ?
            +dataset.lineHeight + (+dataset.pointSize - +dataset.lineHeight) / 2 + MIN_DISTANCE_SLIDER_SCALE :
            +dataset.lineHeight + MIN_DISTANCE_SLIDER_SCALE;
    }

    getScaleLeft(dataset) {
        return +dataset.pointSize > +dataset.lineHeight ?
            +dataset.lineHeight + (+dataset.pointSize - +dataset.lineHeight) / 2 + MIN_DISTANCE_SLIDER_SCALE :
            +dataset.lineHeight + MIN_DISTANCE_SLIDER_SCALE;
    }

    @bind
    drawRange() {
        let dataset = this.element.dataset;
        if (dataset.vertical) {
            this.rangeMaxWidth = this.lineElement.offsetHeight - dataset.lineHeight;
        }
        else {
            this.rangeMaxWidth = this.lineElement.offsetWidth - dataset.lineHeight;
        }
        this.range = dataset.max - dataset.min;
        this.rangeElement = document.createElement("div");
        this.rangeElement.className = "sliderm3__range";
        this.lineElement.appendChild(this.rangeElement);

        this.pointRange = document.createElement("div");
        this.pointRange.className = "sliderm3__point-range";
        this.pointRange.style.borderRadius = `${dataset.lineHeight/2}px`;
        this.pointRange.style.backgroundColor = dataset.colorRange;
        this.rangeElement.appendChild(this.pointRange);
    };

    @bind
    calculateRangePosition() {
        let dataset = this.element.dataset;
        if (dataset.interval) {
            var rangeBand = (dataset.endRange - dataset.startRange) * this.rangeMaxWidth / this.range;
        }
        else {
            var rangeBand = (dataset.endRange - dataset.min) * this.rangeMaxWidth / this.range;
        }
        
        var rangeIndent = (dataset.startRange - dataset.min) * this.rangeMaxWidth / this.range;

        if (dataset.vertical) {
            this.setRangeElementTop(rangeBand, rangeIndent);
            this.rangeElement.style.height = `${rangeBand}px`;
        }
        else {
            this.setRangeElementLeft(rangeIndent);
            this.rangeElement.style.width = `${rangeBand}px`;
        }
    }
    
    setRangeElementTop(rangeBand, rangeIndent) {
        var top = this.rangeMaxWidth - rangeBand + this.element.dataset.lineHeight / 2;
        if (this.element.dataset.interval) {
            this.rangeElement.style.top = `${top - rangeIndent}px`;
        }
        else {
            this.rangeElement.style.top = `${top}px`;
        }
    }

    setRangeElementLeft(rangeIndent) {
        if (this.element.dataset.interval) {
            this.rangeElement.style.left = `${rangeIndent + this.element.dataset.lineHeight / 2}px`;
        }
        else {
            this.rangeElement.style.left = `${this.element.dataset.lineHeight / 2}px`;
        }
    }
    
    @bind
    countPointRangeElement() {
        if (this.element.dataset.vertical) {
            this.pointRange.style.width = `${this.element.dataset.lineHeight}px`;
            var height = +this.rangeElement.offsetHeight + +this.element.dataset.lineHeight;
            this.pointRange.style.height = `${height}px`;
            this.pointRange.style.top = `${-this.element.dataset.lineHeight / 2}px`;
        }
        else {
            this.pointRange.style.height = `${this.element.dataset.lineHeight}px`;
            this.pointRange.style.width = `${+this.rangeElement.offsetWidth + +this.element.dataset.lineHeight}px`;
            this.pointRange.style.left = `${-this.element.dataset.lineHeight / 2}px`;
        }
    }

    @bind
    drawStartPoint() {
        this.startPointElement = document.createElement("div");
        this.startPointElement.className = "sliderm3__point";
        this.startPointElement.style.height = this.startPointElement.style.width = `${this.element.dataset.pointSize}px`;
        this.countStartPointElementTop();
        this.countStartPointElementLeft();
        this.startPointElement.style.backgroundColor = this.element.dataset.colorPoint;
        this.lineElement.appendChild(this.startPointElement);
        if (this.element.dataset.hint) {
            this.startHintArrow = this.drawHint(this.startPointElement, this.element.dataset.startRange);
        }
    };
    
    @bind
    countStartPointElementTop() {
        if (this.element.dataset.vertical) {
            this.startPointElement.style.top = 
                `${this.rangeElement.offsetTop + this.rangeElement.offsetHeight - this.element.dataset.pointSize / 2}px`;
        }
        else {
            this.startPointElement.style.top = 
                `${this.lineElement.offsetHeight / 2 - this.element.dataset.pointSize / 2}px`;
        }
    }
    
    @bind
    countStartPointElementLeft() {
        if (this.element.dataset.vertical) {
            this.startPointElement.style.left = 
                `${this.element.dataset.lineHeight / 2 - this.element.dataset.pointSize / 2}px`;
        }
        else {
            this.startPointElement.style.left = 
                `${this.rangeElement.offsetLeft - this.element.dataset.pointSize / 2}px`;
        }
    }

    @bind
    drawEndPoint() {
        this.endPointElement = document.createElement("div");
        this.endPointElement.className = "sliderm3__point";
        this.endPointElement.style.height = this.endPointElement.style.width = `${this.element.dataset.pointSize}px`;
        this.countEndPointElementTop();
        this.countEndPointElementLeft();
        this.endPointElement.style.backgroundColor = this.element.dataset.colorPoint;
        this.lineElement.appendChild(this.endPointElement);
        if (this.element.dataset.hint) {
            this.endHintArrow = this.drawHint(this.endPointElement, this.element.dataset.endRange);
        }
    };

    @bind
    countEndPointElementTop() {
        if (this.element.dataset.vertical) {
            this.endPointElement.style.top = 
                `${this.rangeElement.offsetTop - this.element.dataset.pointSize/2}px`;
        }
        else {
            this.endPointElement.style.top = 
                `${this.lineElement.offsetHeight/2 - this.element.dataset.pointSize/2}px`;
        }
    };

    @bind
    countEndPointElementLeft() {
        if (this.element.dataset.vertical) {
            this.endPointElement.style.left = 
                `${this.element.dataset.lineHeight / 2 - this.element.dataset.pointSize / 2}px`;
        }
        else {
            this.endPointElement.style.left = 
                `${this.rangeElement.offsetLeft + this.rangeElement.offsetWidth - this.element.dataset.pointSize / 2}px`;
        }
    }

    @bind
    drawHint(div, value) {
        var hintElement = document.createElement("div");
        hintElement.className = "sliderm3__hint";
        hintElement.style.height = `${this.element.dataset.pointSize}px`;
        hintElement.style.fontSize = `${this.element.dataset.pointSize * 4 / 6}px`;
        hintElement.style.color = this.element.dataset.colorText;
        hintElement.innerHTML = Math.round(value * 100) / 100;
        div.appendChild(hintElement);
        
        var arrowElement = document.createElement("div");
        arrowElement.className = "sliderm3__arrow";  
        arrowElement.style.height = `${this.element.dataset.pointSize/3}px`;
        arrowElement.style.width = `${this.element.dataset.pointSize/3}px`;
        hintElement.appendChild(arrowElement);

        this.setHintPosition(hintElement, arrowElement);
        return [hintElement,arrowElement];
    };

    @bind
    setHintPosition(hintElement, arrowElement) {
        if (this.element.dataset.vertical) {
            hintElement.style.left = `${-this.element.dataset.pointSize / 2 - hintElement.offsetWidth}px`;
            hintElement.style.top = `${this.element.dataset.pointSize / 2 - hintElement.offsetHeight / 2}px`;
            arrowElement.style.top = `${hintElement.offsetHeight / 2 - arrowElement.offsetHeight / 2}px`;
            arrowElement.style.left = `${hintElement.offsetWidth - arrowElement.offsetWidth / 2 - 1}px`;
        }
        else {
            hintElement.style.top = `${-this.element.dataset.pointSize / 2 - hintElement.offsetHeight}px`;
            hintElement.style.left = `${this.element.dataset.pointSize / 2 - hintElement.offsetWidth / 2}px`;
            arrowElement.style.top = `${hintElement.offsetHeight - arrowElement.offsetHeight / 2 - 1}px`;
            arrowElement.style.left = `${hintElement.offsetWidth / 2 - arrowElement.offsetWidth / 2}px`;
        }
    }
}

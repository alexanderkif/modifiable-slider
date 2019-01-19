import { bind } from 'decko';

class Sliderm3controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.toDraw();
        document.addEventListener('mouseup', this.sliderm3CancelMove);
        this.activePoint = 0;
        window.addEventListener('resize', this.sliderm3ResizeThrottler);
        this.view.div.addEventListener('sliderm3modelChanged', this.sliderm3modelChanged);
    }

    @bind
    sliderm3modelChanged() {
        this.model.dataset = this.view.div.dataset;
        this.model.checkValue1();
        this.model.checkValue2();
        this.toDraw();
    }

    @bind
    toDraw() {
        this.view.model = this.model.dataset;
        this.view.div.dispatchEvent(new Event('draw'));
        this.view.lineDiv.addEventListener('mousedown', this.sliderm3MouseDownListener);
    }

    @bind
    sliderm3ResizeThrottler() {
        if ( !this.resizeTimeout ) {
            this.resizeTimeout = setTimeout(function() {
                this.resizeTimeout = null;
                this.toDraw();
            }.bind(this), 66);
        }
    }
    
    @bind
    sliderm3MouseDownListener(e) {
        var lessThanPoint2;
        if (this.model.dataset.vertical) {
            lessThanPoint2 = e.clientY > this.getCoords(this.view.point2Div).top + +this.model.dataset.pointSize;
        }
        else {
            lessThanPoint2 = e.clientX < this.getCoords(this.view.point2Div).left;
        }
        if (this.model.dataset.interval && lessThanPoint2)
            this.activePoint = 1;
        else
            this.activePoint = 2;
        document.addEventListener('mousemove', this.sliderm3MouseMoveListener);
        this.changeRange(e);
    }
    
    @bind
    sliderm3MouseMoveListener(e) {
        if (this.activePoint != 0) {
            this.changeRange(e);
        }
    }

    @bind
    changeRange(e) {
        var differenceInPixels;
        if (this.model.dataset.vertical) {
            differenceInPixels = this.view.lineDiv.offsetHeight - (e.clientY - this.getCoords(this.view.lineDiv).top + +this.model.dataset.lineHeight/2);
        }
        else {
            differenceInPixels = e.clientX - this.getCoords(this.view.lineDiv).left - +this.model.dataset.lineHeight/2;
        }
        var newValue = this.model.dataset.step * Math.round((+this.model.dataset.min + differenceInPixels * this.view.range / this.view.rangeMaxWidth) / this.model.dataset.step);
        if (this.activePoint == 1) this.model.setNewValue1(newValue);
        if (this.activePoint == 2) this.model.setNewValue2(newValue);
        this.toDraw();
    }

    @bind
    sliderm3CancelMove() {
        this.activePoint = 0;
        document.removeEventListener('mousemove', this.sliderm3MouseMoveListener);
    }

    getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left
        };
    }
}

class Sliderm3model {
    constructor(dataset) {
        this.dataset = dataset;
    }

    setNewValue1(newValue) {
        this.dataset.value1 = newValue;
        this.checkValue1();
    }

    checkValue1() {
        if (+this.dataset.value1 > +this.dataset.value2)
            this.dataset.value1 = this.dataset.value2;
        if (+this.dataset.value1 < +this.dataset.min)
            this.dataset.value1 = this.dataset.min;
    }

    setNewValue2(newValue) {
        this.dataset.value2 = newValue;
        this.checkValue2();
    }

    checkValue2() {
        if (this.dataset.interval && +this.dataset.value2 < +this.dataset.value1)
            this.dataset.value2 = this.dataset.value1;
        if (!this.dataset.interval && +this.dataset.value2 < +this.dataset.min)
            this.dataset.value2 = this.dataset.min;
        if (+this.dataset.value2 > +this.dataset.max)
            this.dataset.value2 = this.dataset.max;
    }
}

class Sliderm3view {
    constructor(element) {
        this.div = element;
        this.model = element.dataset;
        this.div.style.position = 'relative';
        this.div.style.userSelect = 'none';
        this.div.style.width = '100%';
        this.div.oncontextmenu = function() {return false;};    
        this.div.ondragstart = function() {return false;};
        this.div.onselectstart = function() {return false;};
        this.draw();
        this.div.addEventListener('draw', this.draw);
    }
    
    @bind
    draw() {
        if (this.lineDiv) this.lineDiv.remove();
        this.drawLine();
        if (this.model.scale) this.drawScale();
        this.drawRange();
        if (this.model.interval) this.drawPoint1();
        this.drawPoint2();
    };
    
    @bind
    drawLine() {
        this.lineDiv = document.createElement("div");
        this.lineDiv.className = "sliderm3__line";
        if (this.model.vertical) {
            this.lineDiv.style.height = this.model.length;
            this.div.style.maxWidth = `${this.model.lineHeight}px`;
        }
        else {
            this.lineDiv.style.height = `${this.model.lineHeight}px`;
            this.div.style.maxWidth = this.model.length;
        }
        this.lineDiv.style.borderRadius = `${this.model.lineHeight / 2}px`;
        this.lineDiv.style.backgroundColor = this.model.colorLine;
        this.div.appendChild(this.lineDiv); 
    };
    
    @bind
    drawScale() {
        this.scaleDiv = document.createElement("ul");
        this.scaleDiv.className = "sliderm3__scale";
        this.scaleDiv.style.position = 'absolute';
        this.scaleDiv.style.margin = '0px';
        this.scaleDiv.style.padding = '0px';
        this.scaleDiv.style.display = 'flex';
        this.scaleDiv.style.fontSize = `${this.model.pointSize * 3 / 6}px`;
        this.scaleDiv.style.justifyContent = 'space-between';
        this.scaleDiv.style.color = this.model.colorScale;
        this.lineDiv.appendChild(this.scaleDiv);
        if (this.model.vertical) {
            this.scaleDiv.style.flexDirection = 'column-reverse';
            this.scaleDiv.style.left = `${+this.model.pointSize > +this.model.lineHeight? +this.model.lineHeight + (+this.model.pointSize - +this.model.lineHeight)/2 + 5: +this.model.lineHeight + 5}px`;
            this.scaleDiv.style.height = `${+this.lineDiv.offsetHeight}px`;
        }
        else {
            this.scaleDiv.style.top = `${+this.model.pointSize > +this.model.lineHeight? +this.model.lineHeight + (+this.model.pointSize - +this.model.lineHeight)/2 + 5: +this.model.lineHeight + 5}px`;
            this.scaleDiv.style.width = `${+this.lineDiv.offsetWidth}px`;
        }
        var digit;
        for(var i = 0; i <= this.model.intervals; i++) {
            digit = document.createElement('li');
            digit.style.listStyleType = 'none';
            digit.innerHTML = Math.round( +this.model.min + (this.model.max - this.model.min) * i / this.model.intervals);
            this.scaleDiv.appendChild(digit);
        }
    };
    
    @bind
    drawRange() {
        if (this.model.vertical) this.rangeMaxWidth = this.lineDiv.offsetHeight - this.model.lineHeight;
        else this.rangeMaxWidth = this.lineDiv.offsetWidth - this.model.lineHeight;
        this.range = this.model.max - this.model.min;
        this.rangeDiv = document.createElement("div");
        this.rangeDiv.className = "sliderm3__range";
        this.rangeDiv.style.height = 'inherit';
        this.rangeDiv.style.position = 'absolute';
        if (this.model.interval) {
            var long = (this.model.value2 - this.model.value1) * this.rangeMaxWidth / this.range;
            var startline = (this.model.value1 - this.model.min) * this.rangeMaxWidth / this.range;
            if (this.model.vertical) {
                this.rangeDiv.style.height = `${long}px`;
                this.rangeDiv.style.top = `${this.rangeMaxWidth - long - startline + this.model.lineHeight / 2}px`;
            } 
            else {
                this.rangeDiv.style.width = `${long}px`;
                this.rangeDiv.style.left = `${startline + this.model.lineHeight / 2}px`;
            }
        }
        else {
            var long = (this.model.value2 - this.model.min) * this.rangeMaxWidth / this.range;
            if (this.model.vertical) {
                this.rangeDiv.style.height = `${long}px`;
                this.rangeDiv.style.top = `${this.rangeMaxWidth - long + this.model.lineHeight / 2}px`;
            }
            else {
                this.rangeDiv.style.width = `${long}px`;
                this.rangeDiv.style.left = `${this.model.lineHeight / 2}px`;
            }
        }
        
        this.rangeDiv.style.borderRadius = 'inherit';
        this.rangeDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        this.lineDiv.appendChild(this.rangeDiv);

        this.pointRange = document.createElement("div");
        this.pointRange.className = "sliderm3__point-range";
        this.pointRange.style.position = 'absolute';
        if (this.model.vertical) {
            this.pointRange.style.width = `${this.model.lineHeight}px`;
            var height = +this.rangeDiv.offsetHeight + +this.model.lineHeight;
            this.pointRange.style.height = `${height}px`;
            this.pointRange.style.top = `${ -this.model.lineHeight/2}px`;
        }
        else {
            this.pointRange.style.height = `${this.model.lineHeight}px`;
            this.pointRange.style.width = `${+this.rangeDiv.offsetWidth + +this.model.lineHeight}px`;
            this.pointRange.style.left = `${ -this.model.lineHeight/2}px`;
        }
        this.pointRange.style.borderRadius = `${this.model.lineHeight/2}px`;
        this.pointRange.style.backgroundColor = this.model.colorRange;
        this.rangeDiv.appendChild(this.pointRange);
    };
    
    @bind
    drawPoint1() {
        this.point1Div = document.createElement("div");
        this.point1Div.className = "sliderm3__point";
        this.point1Div.style.position = 'absolute';
        this.point1Div.style.height = this.point1Div.style.width = `${this.model.pointSize}px`;
        this.point1Div.style.borderRadius = '50%';
        if (this.model.vertical) {
            this.point1Div.style.top = `${this.rangeDiv.offsetHeight - this.model.pointSize/2}px`;
            this.point1Div.style.left = `${this.model.lineHeight/2 - this.model.pointSize/2}px`;
        }
        else {
            this.point1Div.style.top = `${this.lineDiv.offsetHeight/2 - this.model.pointSize/2}px`;
            this.point1Div.style.left = `${ -this.model.pointSize/2}px`;
        }
        this.point1Div.style.backgroundColor = this.model.colorPoint;
        this.rangeDiv.appendChild(this.point1Div);
        if (this.model.hint) this.drawHint(this.point1Div, this.model.value1);
    };
    
    @bind
    drawPoint2() {
        this.point2Div = document.createElement("div");
        this.point2Div.className = "sliderm3__point";
        this.point2Div.style.position = 'absolute';
        this.point2Div.style.height = this.point2Div.style.width = `${this.model.pointSize}px`;
        this.point2Div.style.borderRadius = '50%';
        if (this.model.vertical) {
            this.point2Div.style.top = `${ -this.model.pointSize/2}px`;
            this.point2Div.style.left = `${this.model.lineHeight/2 - this.model.pointSize/2}px`;
        }
        else {
            this.point2Div.style.top = `${this.lineDiv.offsetHeight/2 - this.model.pointSize/2}px`;
            this.point2Div.style.left = `${this.rangeDiv.offsetWidth - this.model.pointSize/2}px`;
        }
        this.point2Div.style.backgroundColor = this.model.colorPoint;
        this.rangeDiv.appendChild(this.point2Div);
        if (this.model.hint) this.drawHint(this.point2Div, this.model.value2);
    };

    @bind
    drawHint(div, value) {
        this.hintDiv = document.createElement("div");
        this.hintDiv.className = "sliderm3__hint";
        this.hintDiv.style.position = 'absolute';
        this.hintDiv.style.display = 'flex';
        this.hintDiv.style.alignItems = 'center';
        this.hintDiv.style.padding = '2px 8px';
        this.hintDiv.style.borderRadius = '4px';
        this.hintDiv.style.height = `${this.model.pointSize}px`;
        this.hintDiv.style.fontSize = `${this.model.pointSize * 4 / 6}px`;
        this.hintDiv.style.backgroundColor = 'inherit';
        this.hintDiv.style.color = this.model.colorText;
        this.hintDiv.innerHTML = Math.round(value * 100) / 100;
        div.appendChild(this.hintDiv);
        
        this.arrowDiv = document.createElement("div");
        this.arrowDiv.className = "sliderm3__arrow";    
        this.arrowDiv.style.position = 'absolute';
        this.arrowDiv.style.content = '';
        this.arrowDiv.style.transform = 'rotate(-45deg)';
        this.arrowDiv.style.zIndex = '-1';
        this.arrowDiv.style.height = `${this.model.pointSize/3}px`;
        this.arrowDiv.style.width = `${this.model.pointSize/3}px`;
        this.arrowDiv.style.backgroundColor = 'inherit';
        this.hintDiv.appendChild(this.arrowDiv);

        if (this.model.vertical) {
            this.hintDiv.style.left = `${-this.model.pointSize/2 - this.hintDiv.offsetWidth}px`;
            this.hintDiv.style.top = `${this.model.pointSize/2 - this.hintDiv.offsetHeight/2}px`;
            this.arrowDiv.style.top = `${this.hintDiv.offsetHeight/2 - this.arrowDiv.offsetHeight/2}px`;
            this.arrowDiv.style.left = `${this.hintDiv.offsetWidth - this.arrowDiv.offsetWidth/2 - 1}px`;
        } else {
            this.hintDiv.style.top = `${-this.model.pointSize/2 - this.hintDiv.offsetHeight}px`;
            this.hintDiv.style.left = `${this.model.pointSize/2 - this.hintDiv.offsetWidth/2}px`;
            this.arrowDiv.style.top = `${this.hintDiv.offsetHeight - this.arrowDiv.offsetHeight/2 - 1}px`;
            this.arrowDiv.style.left = `${this.hintDiv.offsetWidth/2 - this.arrowDiv.offsetWidth/2}px`;
        }
    };
}

[].forEach.call(document.getElementsByClassName('sliderm3'), element => new Sliderm3controller(new Sliderm3model(element.dataset), new Sliderm3view(element)));

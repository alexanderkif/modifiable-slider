import { bind } from 'decko';

class Sliderm3 {
    constructor(element) {
        this.div = element;
        this.div.style.position = 'relative';
        this.div.style.userSelect = 'none';
        this.div.style.width = '100%';
        this.draw();
        this.div.oncontextmenu = function() {return false;};    
        this.div.ondragstart = function() {return false;};
        this.div.onselectstart = function() {return false;};
        this.mousedown = 0;
        this.div.addEventListener('draw', this.draw);
        document.addEventListener('mousemove', this.sliderm3MouseMoveListener);
        document.addEventListener('mouseup', this.sliderm3CancelMove);
        window.addEventListener('resize', this.resizeThrottler);
    }

    @bind
    resizeThrottler() {
        if ( !this.resizeTimeout ) {
            this.resizeTimeout = setTimeout(function() {
                this.resizeTimeout = null;
                this.draw();
            }.bind(this), 66);
        }
    }
    
    @bind
    sliderm3MouseDownListener(e) {
        if (this.div.dataset.interval && e.clientX < this.getCoords(this.rangeDiv).left + this.rangeDiv.offsetWidth - this.div.dataset.pointSize/2)
            this.mousedown = 1;
        else
            this.mousedown = 2;
        this.changeRange(e);
    }
    
    @bind
    sliderm3MouseMoveListener(e) {
        if (this.mousedown != 0) {
            this.changeRange(e);
        }
    }

    @bind
    changeRange(e) {
        var newValue = this.div.dataset.step * Math.round((+this.div.dataset.min + (e.clientX - this.getCoords(this.lineDiv).left - +this.div.dataset.lineHeight/2) * this.range / this.rangeMaxWidth) / this.div.dataset.step);
        if (this.mousedown == 1) {
            this.div.dataset.value1 = newValue;
            if (+this.div.dataset.value1 > +this.div.dataset.value2) this.div.dataset.value1 = this.div.dataset.value2;
            if (+this.div.dataset.value1 < +this.div.dataset.min) this.div.dataset.value1 = this.div.dataset.min;
        }
        if (this.mousedown == 2) {
            this.div.dataset.value2 = newValue;
            if (this.div.dataset.interval && +this.div.dataset.value2 < +this.div.dataset.value1) 
                this.div.dataset.value2 = this.div.dataset.value1;
            if (!this.div.dataset.interval && +this.div.dataset.value2 < +this.div.dataset.min) this.div.dataset.value2 = this.div.dataset.min;
            if (+this.div.dataset.value2 > +this.div.dataset.max) this.div.dataset.value2 = this.div.dataset.max;
        }
        this.draw();
    }

    @bind
    sliderm3CancelMove() {
        this.mousedown = 0;
    }

    getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left
        };
    }
    
    @bind
    draw() {
        if (this.lineDiv) this.lineDiv.remove();
        this.drawLine();
        if (this.div.dataset.scale) this.drawScale();
        this.drawRange();
        if (this.div.dataset.interval) this.drawPoint1();
        this.drawPoint2();
    };
    
    @bind
    drawLine() {
        this.lineDiv = document.createElement("div");
        this.lineDiv.className = "sliderm3__line";
        this.lineDiv.style.height = `${this.div.dataset.lineHeight}px`;
        this.div.style.maxWidth = this.div.dataset.length;
        // this.lineDiv.style.width = `${this.div.offsetWidth<this.div.dataset.length?this.div.offsetWidth:this.div.dataset.length}px`;
        this.lineDiv.style.borderRadius = `${this.div.dataset.lineHeight / 2}px`;
        this.lineDiv.style.backgroundColor = this.div.dataset.colorLine;
        this.div.appendChild(this.lineDiv); 
        this.lineDiv.addEventListener('mousedown', this.sliderm3MouseDownListener);
    };
    
    @bind
    drawScale() {
        this.scaleDiv = document.createElement("ul");
        this.scaleDiv.className = "sliderm3__scale";
        this.scaleDiv.style.position = 'absolute';
        this.scaleDiv.style.margin = '0px';
        this.scaleDiv.style.padding = '0px';
        this.scaleDiv.style.display = 'flex';
        this.scaleDiv.style.fontSize = `${this.div.dataset.pointSize * 3 / 6}px`;
        this.scaleDiv.style.justifyContent = 'space-between';
        this.scaleDiv.style.top = `${+this.div.dataset.pointSize > +this.div.dataset.lineHeight? +this.div.dataset.lineHeight + (+this.div.dataset.pointSize - +this.div.dataset.lineHeight)/2 + 5: +this.div.dataset.lineHeight + 5}px`;
        this.scaleDiv.style.color = this.div.dataset.colorScale;
        this.lineDiv.appendChild(this.scaleDiv);
        this.scaleDiv.style.width = `${+this.lineDiv.offsetWidth * 1.04}px`;
        var digit;
        for(var i = 0; i <= this.div.dataset.intervals; i++) {
            digit = document.createElement('li');
            digit.className = "sliderm3__digit";
            digit.style.listStyleType = 'none';
            digit.innerHTML = Math.round( +this.div.dataset.min + (this.div.dataset.max - this.div.dataset.min) * i / this.div.dataset.intervals);
            this.scaleDiv.appendChild(digit);
        }
    };
    
    @bind
    drawRange() {
        this.rangeMaxWidth = this.lineDiv.offsetWidth - this.div.dataset.lineHeight;
        this.range = this.div.dataset.max - this.div.dataset.min;
        this.rangeDiv = document.createElement("div");
        this.rangeDiv.className = "sliderm3__range";
        this.rangeDiv.style.height = 'inherit';
        this.rangeDiv.style.position = 'absolute';
        this.rangeDiv.style.top = '0';
        if (this.div.dataset.interval) {
            this.rangeDiv.style.width = `${(this.div.dataset.value2 - this.div.dataset.value1) * this.rangeMaxWidth / this.range}px`;
            this.rangeDiv.style.left = `${(this.div.dataset.value1 - this.div.dataset.min) * this.rangeMaxWidth / this.range + this.div.dataset.lineHeight / 2}px`;
        }
        else {
            this.rangeDiv.style.width = `${(this.div.dataset.value2 - this.div.dataset.min) * this.rangeMaxWidth / this.range}px`;
            this.rangeDiv.style.left = `${this.div.dataset.lineHeight / 2}px`;
        }        
        this.rangeDiv.style.borderRadius = 'inherit';
        this.rangeDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        this.lineDiv.appendChild(this.rangeDiv);

        this.pointRange = document.createElement("div");
        this.pointRange.className = "sliderm3__point-range";
        this.pointRange.style.position = 'absolute';
        this.pointRange.style.height = `${this.div.dataset.lineHeight}px`;
        this.pointRange.style.width = `${+this.rangeDiv.offsetWidth + +this.div.dataset.lineHeight}px`;
        this.pointRange.style.borderRadius = `${this.div.dataset.lineHeight/2}px`;
        this.pointRange.style.top = `${this.lineDiv.offsetHeight/2 - this.div.dataset.lineHeight/2}px`;
        this.pointRange.style.left = `${ -this.div.dataset.lineHeight/2}px`;
        this.pointRange.style.backgroundColor = this.div.dataset.colorRange;
        this.rangeDiv.appendChild(this.pointRange);
    };
    
    @bind
    drawPoint1() {
        this.point1Div = document.createElement("div");
        this.point1Div.className = "sliderm3__point";
        this.point1Div.style.position = 'absolute';
        this.point1Div.style.height = this.point1Div.style.width = `${this.div.dataset.pointSize}px`;
        this.point1Div.style.borderRadius = '50%';
        this.point1Div.style.top = `${this.lineDiv.offsetHeight/2 - this.div.dataset.pointSize/2}px`;
        this.point1Div.style.left = `${ -this.div.dataset.pointSize/2}px`;
        this.point1Div.style.backgroundColor = this.div.dataset.colorPoint;
        this.rangeDiv.appendChild(this.point1Div);
        if (this.div.dataset.hint) this.drawHint(this.point1Div, this.div.dataset.value1);
    };
    
    @bind
    drawPoint2() {
        this.point2Div = document.createElement("div");
        this.point2Div.className = "sliderm3__point";
        this.point2Div.style.position = 'absolute';
        this.point2Div.style.height = this.point2Div.style.width = `${this.div.dataset.pointSize}px`;
        this.point2Div.style.borderRadius = '50%';
        this.point2Div.style.top = `${this.lineDiv.offsetHeight/2 - this.div.dataset.pointSize/2}px`;
        this.point2Div.style.left = `${this.rangeDiv.offsetWidth - this.div.dataset.pointSize/2}px`;
        this.point2Div.style.backgroundColor = this.div.dataset.colorPoint;
        this.rangeDiv.appendChild(this.point2Div);
        if (this.div.dataset.hint) this.drawHint(this.point2Div, this.div.dataset.value2);
    };

    @bind
    drawHint(div, value) {
        var hintDiv = document.createElement("div");
        hintDiv.className = "sliderm3__hint";
        hintDiv.style.position = 'absolute';
        hintDiv.style.display = 'flex';
        hintDiv.style.alignItems = 'center';
        hintDiv.style.padding = '2px 8px';
        hintDiv.style.borderRadius = '4px';
        hintDiv.style.height = `${this.div.dataset.pointSize}px`;
        hintDiv.style.fontSize = `${this.div.dataset.pointSize * 4 / 6}px`;
        hintDiv.style.backgroundColor = 'inherit';
        hintDiv.style.color = this.div.dataset.colorText;
        hintDiv.innerHTML = Math.round(value * 100) / 100;
        div.appendChild(hintDiv);
        
        var arrowDiv = document.createElement("div");
        arrowDiv.className = "sliderm3__arrow";    
        arrowDiv.style.position = 'absolute';
        arrowDiv.style.content = '';
        arrowDiv.style.transform = 'rotate(-45deg)';
        arrowDiv.style.zIndex = '-1';
        arrowDiv.style.height = `${this.div.dataset.pointSize/3}px`;
        arrowDiv.style.width = `${this.div.dataset.pointSize/3}px`;
        arrowDiv.style.backgroundColor = 'inherit';
        hintDiv.appendChild(arrowDiv);

        // if (dataset.vertical) {
        //     hintDiv.style.transform = 'rotate(90deg) translateX(0px)';
        //     hintDiv.style.top = `${-dataset.pointSize - hintDiv.offsetWidth/2}px`;
        //     hintDiv.style.left = `${dataset.pointSize/2 - hintDiv.offsetWidth/2}px`;
        //     arrowDiv.style.top = `${hintDiv.offsetHeight/2 - arrowDiv.offsetHeight/2}px`;
        //     arrowDiv.style.left = `${hintDiv.offsetWidth - arrowDiv.offsetWidth/2 - 1}px`;
        // } else {
            hintDiv.style.transform = 'rotate(0deg)';
            hintDiv.style.top = `${-this.div.dataset.pointSize*3/2}px`;
            hintDiv.style.left = `${this.div.dataset.pointSize/2 - hintDiv.offsetWidth/2}px`;
            arrowDiv.style.top = `${hintDiv.offsetHeight - arrowDiv.offsetHeight/2}px`;
            arrowDiv.style.left = `${hintDiv.offsetWidth/2 - arrowDiv.offsetWidth/2}px`;
        // }
    };
}

[].forEach.call(document.getElementsByClassName('sliderm3'), element => new Sliderm3(element));

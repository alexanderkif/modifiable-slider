import { bind } from 'decko';
import "./constructor.scss";
import "../tick/tick.scss";

var dataJson = require('../data.json');

class PageContent {
    constructor(element) {
        this.div = element.querySelector(`.${dataJson.sliderClass}`);
        this.pageInput = element.querySelector('.page__inputs');
        this.inputTickHint = this.pageInput.querySelector('.tick-hint');
        this.inputTickScale = this.pageInput.querySelector('.tick-scale');
        this.inputTickInterval = this.pageInput.querySelector('.tick-interval');	
        this.inputTickVertical = this.pageInput.querySelector('.tick-vertical');	
        this.inputSlidermLength = this.pageInput.querySelector('.sliderm-length');	
        this.inputEndRange = this.pageInput.querySelector('.sliderm-end-range');	
        this.inputStartRange = this.pageInput.querySelector('.sliderm-start-range');	
        this.inputSlidermMin = this.pageInput.querySelector('.sliderm-min');	
        this.inputSlidermMax = this.pageInput.querySelector('.sliderm-max');	
        this.inputSlidermStep = this.pageInput.querySelector('.sliderm-step');	
        this.inputSlidermIntervals = this.pageInput.querySelector('.sliderm-intervals');	
        this.inputSlidermResult = element.querySelector('.page__result');
        this.chooseColorLine = element.querySelectorAll('.chooseColor__item')[0];	
        this.chooseColorRange = element.querySelectorAll('.chooseColor__item')[1];
        this.chooseColorPoint = element.querySelectorAll('.chooseColor__item')[2];	
        this.chooseColorScale = element.querySelectorAll('.chooseColor__item')[3];	
        this.chooseColorText = element.querySelectorAll('.chooseColor__item')[4];
        this.chooseColors = this.chooseColorLine.closest('.chooseColor');

        this.setInputs();

        $(this.pageInput).on('change', this.inputsChange);	
        $(this.pageInput).on('click', this.inputsClick);
        $(this.div).on('mousedown', this.sliderMouseDown);

        $(this.chooseColors).on("mousedown", this.chooseColorMouseDown);
        $(document).on("mouseup", this.cancelMove);
    }

    @bind
    chooseColorMouseDown() {
        this.setResult();	
        $(document).on("mousemove", this.chooseColorMouseMove);
    }

    @bind
    chooseColorMouseMove() {
        this.setResult();
    }

    @bind
    cancelMove() {
        $(document).off("mousemove", this.chooseColorMouseMove);
        $(document).off("mousemove", this.sliderMouseMove);
    }

    @bind
    sliderMouseDown() {
        this.change();
        $(document).on("mousemove", this.sliderMouseMove);
    }

    @bind
    sliderMouseMove() {
        this.change();
    }

    @bind
    change() {
        this.setInputs();
        this.inputSlidermResult.innerHTML = `${this.div.outerHTML.split('>')[0]}></div><script src=".js"></script>`;
        this.div.dispatchEvent(new Event('refreshView'));		
    }

    @bind
    inputsChange() {
        this.getInputs();
        this.div.dispatchEvent(new Event('refreshView'));	
    }

    @bind
    inputsClick() {
        this.getInputs();
        this.setInputs();		
        this.div.dispatchEvent(new Event('refreshView'));
    }

    @bind
    setResult() {	
        this.div.dataset.colorLine = this.chooseColor2color(this.chooseColorLine);	
        this.div.dataset.colorRange = this.chooseColor2color(this.chooseColorRange);	
        this.div.dataset.colorPoint = this.chooseColor2color(this.chooseColorPoint);	
        this.div.dataset.colorScale = this.chooseColor2color(this.chooseColorScale);	
        this.div.dataset.colorText = this.chooseColor2color(this.chooseColorText);
        this.div.dispatchEvent(new Event('refreshView'));	
        this.inputSlidermResult.innerHTML = `${this.div.outerHTML.split('>')[0]}></div><script src=".js"></script>`;
    };	

    @bind
    chooseColor2color(div) {	   
        if (div) {
            var sliders = div.getElementsByClassName('sliderm3');
            var red = sliders[0].getAttribute('data-end-range');
            var green = sliders[1].getAttribute('data-end-range');
            var blue = sliders[2].getAttribute('data-end-range');
            var opacity = sliders[3].getAttribute('data-end-range')/255;
            //red, green, blue, opacity
            return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        }
        return "gray";
    };
        
    @bind
    getInputs() {	
        this.div.dataset.hint = this.inputTickHint.classList.contains('true')?'true':'';	
        this.div.dataset.scale = this.inputTickScale.classList.contains('true')?'true':'';	
        this.div.dataset.interval = this.inputTickInterval.classList.contains('true')?'true':'';	
        this.div.dataset.vertical = this.inputTickVertical.classList.contains('true')?'true':'';	
        this.div.dataset.length = this.inputSlidermLength.value || "100%";	
        this.div.dataset.endRange = this.inputEndRange.value;	
        if (this.inputStartRange.value) this.div.dataset.startRange = this.inputStartRange.value;	
        this.div.dataset.min = this.inputSlidermMin.value;	
        this.div.dataset.max = this.inputSlidermMax.value;	
        this.div.dataset.step = this.inputSlidermStep.value;	
        this.div.dataset.intervals = this.inputSlidermIntervals.value;
        this.inputSlidermResult.innerHTML = `${this.div.outerHTML.split('>')[0]}></div><script src=".js"></script>`;
    };

    @bind
    setInputs() {
        if (this.div.dataset.interval) 	
            this.inputStartRange.value = Math.round(this.div.dataset.startRange * 100) / 100;	
        else this.inputStartRange.value = "";
        this.inputEndRange.value = Math.round(this.div.dataset.endRange * 100) / 100;	
        this.inputSlidermMin.value = this.div.dataset.min;	
        this.inputSlidermMax.value = this.div.dataset.max;	
        this.inputSlidermStep.value = this.div.dataset.step;	
        this.inputSlidermIntervals.value = this.div.dataset.intervals;	
        this.inputSlidermLength.value = this.div.dataset.length;	
        if (this.div.dataset.hint) $(this.inputTickHint).addClass('true');	
        if (this.div.dataset.scale) $(this.inputTickScale).addClass('true');	
        if (this.div.dataset.interval) $(this.inputTickInterval).addClass('true');
        if (this.div.dataset.vertical) $(this.inputTickVertical).addClass('true');	
    };
}

$('.page__content').each((index,element) => new PageContent(element));
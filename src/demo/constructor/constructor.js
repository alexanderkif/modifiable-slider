import { bind } from 'decko';
import "./constructor.scss";
import "../tick/tick.scss";

class Sliderm3pageContent {
    constructor(element) {
        this.sliderm3pageContentDiv = element;
        this.sliderm3Div = $('.sliderm3', element)[0];
        this.sliderm3pageInputDiv = $('.sliderm3page__inputs', element)[0];
        this.inputTickHintDiv = $('.tick-hint', this.sliderm3pageInputDiv)[0];
        this.inputTickScaleDiv = $('.tick-scale', this.sliderm3pageInputDiv)[0];
        this.inputTickIntervalDiv = $('.tick-interval', this.sliderm3pageInputDiv)[0];	
        this.inputTickVerticalDiv = $('.tick-vertical', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermLengthDiv = $('.sliderm-length', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermValue2Div = $('.sliderm-value2', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermValue1Div = $('.sliderm-value1', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermMinDiv = $('.sliderm-min', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermMaxDiv = $('.sliderm-max', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermStepDiv = $('.sliderm-step', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermIntervalsDiv = $('.sliderm-intervals', this.sliderm3pageInputDiv)[0];	
        this.inputSlidermResultDiv = $('.sliderm3page__result', element)[0];
        this.chooseColorLineDiv = $('.chooseColor__item', element)[0];	
        this.chooseColorRangeDiv = $('.chooseColor__item', element)[1];
        this.chooseColorPointDiv = $('.chooseColor__item', element)[2];	
        this.chooseColorScaleDiv = $('.chooseColor__item', element)[3];	
        this.chooseColorTextDiv = $('.chooseColor__item', element)[4];

        this.setInputs();

        this.sliderm3pageInputDiv.addEventListener('change', this.inputsChange);	
        this.sliderm3pageInputDiv.addEventListener('click', this.inputsClick);
        this.sliderm3Div.addEventListener('mousemove', this.sliderm3change);
        this.sliderm3Div.addEventListener('mousedown', this.sliderm3change);

        $(this.chooseColorLineDiv.parentElement).bind("DOMSubtreeModified", this.setResult);
    }

    @bind
    sliderm3change() {
        this.setInputs();
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src="sliderm3.js"></script>`;
        this.sliderm3Div.dispatchEvent(new Event('draw'));		
    }

    @bind
    inputsChange() {
        this.getInputs();
        this.sliderm3Div.dispatchEvent(new Event('draw'));	
    }

    @bind
    inputsClick() {
        this.getInputs();
        this.setInputs();	
        // if (this.sliderm3Div.div.dataset.interval) 	
        //     this.div.dataset.value1 = this.range.value1 < +this.range.value2 ? this.range.value1 : this.range.value2;	
        this.sliderm3Div.dispatchEvent(new Event('draw'));
    }

    @bind
    setResult() {	
        this.sliderm3Div.dataset.colorLine = this.chooseColor2color(this.chooseColorLineDiv);	
        this.sliderm3Div.dataset.colorRange = this.chooseColor2color(this.chooseColorRangeDiv);	
        this.sliderm3Div.dataset.colorPoint = this.chooseColor2color(this.chooseColorPointDiv);	
        this.sliderm3Div.dataset.colorScale = this.chooseColor2color(this.chooseColorScaleDiv);	
        this.sliderm3Div.dataset.colorText = this.chooseColor2color(this.chooseColorTextDiv);
        this.sliderm3Div.dispatchEvent(new Event('draw'));	
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src="sliderm3.js"></script>`;
    };	

    @bind
    chooseColor2color(div) {	   
        if (div) {
            var sliders = div.getElementsByClassName('sliderm3');
            var red = sliders[0].getAttribute('data-value2');
            var green = sliders[1].getAttribute('data-value2');
            var blue = sliders[2].getAttribute('data-value2');
            var opacity = sliders[3].getAttribute('data-value2')/255;
            //red, green, blue, opacity
            return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        }
        return "gray";
    };
        
    @bind
    getInputs() {	
        this.sliderm3Div.dataset.hint = this.inputTickHintDiv.classList.contains('true')?'true':'';	
        this.sliderm3Div.dataset.scale = this.inputTickScaleDiv.classList.contains('true')?'true':'';	
        this.sliderm3Div.dataset.interval = this.inputTickIntervalDiv.classList.contains('true')?'true':'';	
        this.sliderm3Div.dataset.vertical = this.inputTickVerticalDiv.classList.contains('true')?'true':'';	
        this.sliderm3Div.dataset.length = this.inputSlidermLengthDiv.value || "100%";	
        this.sliderm3Div.dataset.value2 = this.inputSlidermValue2Div.value;	
        if (this.inputSlidermValue1Div.value) this.sliderm3Div.dataset.value1 = this.inputSlidermValue1Div.value;	
        this.sliderm3Div.dataset.min = this.inputSlidermMinDiv.value;	
        this.sliderm3Div.dataset.max = this.inputSlidermMaxDiv.value;	
        this.sliderm3Div.dataset.step = this.inputSlidermStepDiv.value;	
        this.sliderm3Div.dataset.intervals = this.inputSlidermIntervalsDiv.value;
        this.inputSlidermResultDiv.innerHTML = `${this.sliderm3Div.outerHTML.split('>')[0]}></div><script src="sliderm3.js"></script>`;
    };

    @bind
    setInputs() {
        if (this.sliderm3Div.dataset.interval) 	
            this.inputSlidermValue1Div.value = Math.round(this.sliderm3Div.dataset.value1 * 100) / 100;	
        else this.inputSlidermValue1Div.value = "";
        this.inputSlidermValue2Div.value = Math.round(this.sliderm3Div.dataset.value2 * 100) / 100;	
        this.inputSlidermMinDiv.value = this.sliderm3Div.dataset.min;	
        this.inputSlidermMaxDiv.value = this.sliderm3Div.dataset.max;	
        this.inputSlidermStepDiv.value = this.sliderm3Div.dataset.step;	
        this.inputSlidermIntervalsDiv.value = this.sliderm3Div.dataset.intervals;	
        this.inputSlidermLengthDiv.value = this.sliderm3Div.dataset.length;	
        if (this.sliderm3Div.dataset.hint) $(this.inputTickHintDiv).addClass('true');	
        if (this.sliderm3Div.dataset.scale) $(this.inputTickScaleDiv).addClass('true');	
        if (this.sliderm3Div.dataset.interval) $(this.inputTickIntervalDiv).addClass('true');
        if (this.sliderm3Div.dataset.vertical) $(this.inputTickVerticalDiv).addClass('true');	
    };
}

$('.sliderm3page__content').each((index,element) => new Sliderm3pageContent(element));
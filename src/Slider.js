import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';

export default class Slider {
    constructor(element) {
        element.classList.add("sliderm3");
        var model = new Model(element.dataset);
        var view = new View(element);
        new Controller(model, view);
    }
}

(function($){
    $.fn.modSlider = function(defaults){
        return this.each(function(){
            if (!this.dataset.min) {
                this.dataset.min = defaults.min;
            }
            if (!this.dataset.max) {
                this.dataset.max = +this.dataset.min + 100;
            }
            if (!this.dataset.endRange){
                this.dataset.endRange = (+this.dataset.max - +this.dataset.min)/2 + +this.dataset.min;
            }
            if (!this.dataset.startRange) {
                this.dataset.startRange = +this.dataset.min;
            }
            if (!this.dataset.step) {
                this.dataset.step = defaults.step; 
            }
            if (!this.dataset.intervals) {
                this.dataset.intervals = defaults.intervals; 
            }
            if (!this.dataset.length) {
                this.dataset.length = defaults.length; 
            }
            if (!this.dataset.lineHeight) {
                this.dataset.lineHeight = defaults.lineHeight;
            }
            if (!this.dataset.pointSize) {
                this.dataset.pointSize = defaults.pointSize;
            }
            if (!this.dataset.colorLine) {
                this.dataset.colorLine = defaults.colorLine;
            }
            if (!this.dataset.colorRange) {
                this.dataset.colorRange = defaults.colorRange;
            }
            if (!this.dataset.colorPoint) {
                this.dataset.colorPoint = defaults.colorPoint;
            }
            if (!this.dataset.colorScale) {
                this.dataset.colorScale = defaults.colorScale;
            }
            if (!this.dataset.colorText) {
                this.dataset.colorText = defaults.colorText;
            }
            new Slider(this);
        }) 
    }
})(jQuery);
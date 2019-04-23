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
       
        var countDefaults = function(dataset){
            let template = {};
            Object.assign(template, defaults);
            let data = $.extend(template, dataset);
            if (!data.max) {
                data.max = +data.min + 100;
            }
            if (!data.endRange){
                data.endRange = (+data.max - +data.min)/2 + +data.min;
            }
            if (!data.startRange) {
                data.startRange = +data.min;
            }
            for (var key in data) {
                dataset[key] = data[key];
            }            
        };

        var makeSlider = function(){
            countDefaults(this.dataset);
            new Slider(this);
        }

        return this.each(makeSlider);
    }
})(jQuery);
import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';

var dataJson = require('../demo/data.json');

export default class Slider {
    constructor(element) {
        element.classList.add("sliderm3");
        this.model = new Model(element.dataset);
        this.view = new View(element);
        new Controller(this.model, this.view);
    }
}

(function($){
    $.fn.modSlider = function(){
        var setDefaults = function(dataset){
            let template = {};
            Object.assign(template, dataJson.defaults);
            let data = $.extend(template, dataset);
            for (var key in data) {
                dataset[key] = data[key];
            }            
        };

        var makeSlider = function(){
            setDefaults(this.dataset);
            let slider = new Slider(this);
            slider.model.subscribe(data => {
                $(this).trigger({
                    type: 'slider.stateChange',
                    start: data.model.interval == 'true' ? data.model.startRange : data.model.min,
                    end: data.model.endRange
                });
            });
        }

        return this.each(makeSlider);
    }
})(jQuery);
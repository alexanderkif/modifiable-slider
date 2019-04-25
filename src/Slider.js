import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';

var dataJson = require('../demo/data.json');

export default class Slider {
    constructor(element) {
        element.classList.add("sliderm3");
        var model = new Model(element.dataset);
        var view = new View(element);
        new Controller(model, view);
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
            new Slider(this);
        }

        return this.each(makeSlider);
    }
})(jQuery);
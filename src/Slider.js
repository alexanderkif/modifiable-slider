import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';
import Config from './Config';

export default class Slider {
    constructor(sliderClass) {
        [].forEach.call(document.getElementsByClassName(sliderClass), element => {
            element.classList.add("sliderm3");
            new Config(element.dataset);
            var model = new Model(element.dataset);
            var view = new View(element);
            new Controller(model, view);
        });        
    }
}
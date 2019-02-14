import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';
import Config from './Config';

export default class Slider {
    constructor(element) {
        element.classList.add("sliderm3");
        let normalizedModel = new Config(element.dataset);
        var model = new Model(normalizedModel);
        var view = new View(element);
        new Controller(model, view);
    }
}
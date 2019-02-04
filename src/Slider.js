import "./sliderm3.scss";
import Model from './Model';
import View from './View';
import Controller from './Controller';
import Validate from './Validate';

export default class Slider {
    constructor(element) {
        element.classList.add("sliderm3");
        new Validate(element.dataset);
        var model = new Model(element.dataset);
        var view = new View(element);
        new Controller(model, view);
    }
}
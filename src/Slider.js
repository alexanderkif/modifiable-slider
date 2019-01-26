
import Model from './Model';
import View from './View';
import Controller from './Controller';

export default class Slider {
    constructor(element) {
        var model = new Model(element.dataset);
        var view = new View(element);
        new Controller(model, view);
    }
}
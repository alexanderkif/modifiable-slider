import Model from './Model';
import View from './View';
import Controller from './Controller';

[].forEach.call(document.getElementsByClassName('sliderm3'), element => {
    var model = new Model(element.dataset);
    var view = new View(element);
    new Controller(model, view);
});

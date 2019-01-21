import { bind } from 'decko';

class Sliderm3controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.subscribe(data => this.changeRange(data.newValue, data.activePoint));
        this.toDraw();
    }

    @bind
    changeRange(newValue, activePoint) {
        if (activePoint == 1) this.model.setNewValue1(newValue);
        if (activePoint == 2) this.model.setNewValue2(newValue);
        this.toDraw();
    }

    @bind
    toDraw() {
        this.view.model = this.model.dataset;
        this.view.div.dispatchEvent(new Event('draw'));
    }
}

export default Sliderm3controller;
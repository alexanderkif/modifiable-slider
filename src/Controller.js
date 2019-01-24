import { bind } from 'decko';

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.subscribe(data => this.changeRange(data.model, data.activePoint));
        this.toDraw();
    }

    @bind
    changeRange(model, activePoint) {
        Object.assign(this.model, model);
        if (activePoint == 1) this.model.setStartRange(model.startRange);
        if (activePoint == 2) this.model.setEndRange(model.endRange);
        this.toDraw();
    }

    @bind
    toDraw() {
        Object.assign(this.view.element.dataset, this.model);
        this.view.draw();
    }
}

import { bind } from 'decko';

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.subscribe(data => this.changeRange(data));
        this.model.subscribe(data => {
            Object.assign(this.view.element.dataset, data.model);
            this.view.draw();
        });
    }

    @bind
    changeRange(data) {
        if (data.refreshModel) Object.assign(this.model, data.refreshModel);
        if (data.setStartRange) this.model.setStartRange(data.setStartRange.startRange);
        if (data.setEndRange) this.model.setEndRange(data.setEndRange.endRange);
    }
}

import { bind } from 'decko';

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.subscribe(data => {
            if (data.setStartRange) this.model.setStartRange(data.setStartRange.startRange);
            if (data.setEndRange) this.model.setEndRange(data.setEndRange.endRange);
        });
        this.model.subscribe(data => {
            Object.assign(this.view.element.dataset, data.model);
            if(data.description){
                if(data.description == 'changedStartRange')
                    this.view.changeStartRange();
                if(data.description == 'changedEndRange')
                    this.view.changeEndRange();
                if(data.description == 'changedSlider')
                    this.view.refreshSlider();
            }
        });
    }
}

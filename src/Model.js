import { bind } from 'decko';
import EventObserver from './EventObserver';

export default class Model extends EventObserver {
    constructor(model) {
        super();
        this.setModel(model);
    }

    normalizeModel(model) {
        if (+model.max < +model.min) {
            model.max = +model.min + 100;
        }
        if (+model.endRange > +model.max) {
            model.endRange = +model.max;
        }
        if (+model.endRange < +model.min) {
            model.endRange = +model.min;
        }
        if (+model.startRange < +model.min) {
            model.startRange = +model.min;
        }
        if (+model.startRange > +model.endRange){
            model.startRange = +model.endRange;
        }
        return model;
    }

    @bind
    setModel(model) {
        let normalizedModel = this.normalizeModel(model);
        Object.assign(this, normalizedModel);
        this.broadcastModelChanged('changedSlider');
    }

    @bind
    setStartRange(newValue) {
        this.startRange = newValue;
        this.checkStartRange();
        this.broadcastModelChanged('changedStartRange');
    }

    @bind
    checkStartRange() {
        if (+this.startRange > +this.endRange) {
            this.startRange = this.endRange;
        }
        if (+this.startRange < +this.min) {
            this.startRange = this.min;
        }
    }

    @bind
    setEndRange(newValue) {
        this.endRange = newValue;
        this.checkEndRange();
        this.broadcastModelChanged('changedEndRange');
    }

    @bind
    checkEndRange() {
        if (this.interval && +this.endRange < +this.startRange) {
            this.endRange = this.startRange;
        }
        if (!this.interval && +this.endRange < +this.min) {
            this.endRange = this.min;
        }
        if (+this.endRange > +this.max) {
            this.endRange = this.max;
        }
    }

    broadcastModelChanged(description) {
        var model = Object.assign({}, this);
        delete model.observers;
        this.broadcast({ description: description, model: model });
    }
}

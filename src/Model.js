import { bind } from 'decko';
import EventObserver from './EventObserver';

export default class Model extends EventObserver {
    constructor(dataset) {
        super();
        Object.assign(this, dataset);
    }

    @bind
    setStartRange(newValue) {
        this.startRange = newValue;
        this.checkStartRange();
        this.broadcastModelChanged();
    }

    @bind
    checkStartRange() {
        if (+this.startRange > +this.endRange)
            this.startRange = this.endRange;
        if (+this.startRange < +this.min)
            this.startRange = this.min;
    }

    @bind
    setEndRange(newValue) {
        this.endRange = newValue;
        this.checkEndRange();
        this.broadcastModelChanged();
    }

    @bind
    checkEndRange() {
        if (this.interval && +this.endRange < +this.startRange)
            this.endRange = this.startRange;
        if (!this.interval && +this.endRange < +this.min)
            this.endRange = this.min;
        if (+this.endRange > +this.max)
            this.endRange = this.max;
    }

    broadcastModelChanged() {
        var model = Object.assign({}, this);
        delete model.observers;
        this.broadcast({ model: model });
    }
}

import { bind } from 'decko';

export default class Model {
    constructor(dataset) {
        Object.assign(this, dataset);
    }

    @bind
    setStartRange(newValue) {
        this.startRange = newValue;
        this.checkStartRange();
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
}

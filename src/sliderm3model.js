import { bind } from 'decko';

class Sliderm3model {
    constructor(dataset) {
        this.dataset = dataset;
    }

    @bind
    setNewValue1(newValue) {
        this.dataset.value1 = newValue;
        this.checkValue1();
    }

    @bind
    checkValue1() {
        if (+this.dataset.value1 > +this.dataset.value2)
            this.dataset.value1 = this.dataset.value2;
        if (+this.dataset.value1 < +this.dataset.min)
            this.dataset.value1 = this.dataset.min;
    }

    @bind
    setNewValue2(newValue) {
        this.dataset.value2 = newValue;
        this.checkValue2();
    }

    @bind
    checkValue2() {
        if (this.dataset.interval && +this.dataset.value2 < +this.dataset.value1)
            this.dataset.value2 = this.dataset.value1;
        if (!this.dataset.interval && +this.dataset.value2 < +this.dataset.min)
            this.dataset.value2 = this.dataset.min;
        if (+this.dataset.value2 > +this.dataset.max)
            this.dataset.value2 = this.dataset.max;
    }
}

export default Sliderm3model;
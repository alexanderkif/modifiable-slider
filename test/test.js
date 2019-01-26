import Model from "../src/Model";
var assert = require('assert');

describe('Model tests', function(){
    var model;

    beforeEach(function() {
        model = new Model({
        min: 10,
        max: 20,
        startRange: 12,
        endRange: 18
        });
    });

    it('check constructor', function(){
        assert.equal(model.min, 10);
        assert.equal(model.max, 20);
        assert.equal(model.startRange, 12);
        assert.equal(model.endRange, 18);
    });

    it('setStartRange set good value', function(){
        model.setStartRange(15);
        assert.equal(model.startRange, 15);
    });

    it('checkStartRange set value lower min', function(){
        model.setStartRange(5);
        assert.equal(model.startRange, 10);
    });

    it('checkStartRange set value higher endRange', function(){
        model.setStartRange(19);
        assert.equal(model.startRange, 18);
    });

    it('setEndRange set good value', function(){
        model.setEndRange(15);
        assert.equal(model.endRange, 15);
    });

    it('checkEndRange set value lower startRange with interval', function(){
        model.interval = true;
        model.setEndRange(11);
        assert.equal(model.endRange, 12);
    });

    it('checkEndRange set value lower startRange without interval', function(){
        model.setEndRange(5);
        assert.equal(model.endRange, 10);
    });

    it('checkEndRange set value higher max', function(){
        model.setEndRange(22);
        assert.equal(model.endRange, 20);
    });
})
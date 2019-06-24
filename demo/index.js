
import "./scss/main.scss";
import "./favicon.ico";
import "./constructor/constructor";

var dataJson = require('./data.json');

$(`.${dataJson.sliderClass}`).modSlider()
.on('slider.stateChange', function(event) {
    console.log(`${event.start}, ${event.end}`);
});

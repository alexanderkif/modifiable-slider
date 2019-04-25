
import "./scss/main.scss";
import "./favicon.ico";
import "./constructor/constructor";

var dataJson = require('./data.json');

$(`.${dataJson.sliderClass}`).modSlider();

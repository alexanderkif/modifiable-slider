
import "./scss/main.scss";
import "./favicon.ico";
import "./constructor/constructor";
import Slider from "../src/Slider";

var dataJson = require('./data.json');
// [].forEach.call(document.getElementsByClassName(dataJson.sliderClass), element => {
//     new Slider(element);
// });

$(`.${dataJson.sliderClass}`).modSlider();


import "./scss/main.scss";
import "./favicon.ico";
import "./constructor/constructor";
import Slider from "../src/Slider";

console.log("Run...");

var dataJson = require('./data.json');
new Slider(dataJson.sliderClass);

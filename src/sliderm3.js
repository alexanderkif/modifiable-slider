import "./sliderm3.scss";
import Slider from "./Slider";

var dataJson = require('../demo/data.json');

[].forEach.call(document.getElementsByClassName(dataJson.sliderClass), element => new Slider(element));

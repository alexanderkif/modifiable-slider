import "./sliderm3.scss";
import Slider from "./Slider";

[].forEach.call(document.getElementsByClassName('sliderm3'), element => new Slider(element));

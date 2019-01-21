import Sliderm3model from './sliderm3model';
import Sliderm3view from './sliderm3view';
import Sliderm3controller from './sliderm3controller';

[].forEach.call(document.getElementsByClassName('sliderm3'), element => {
    var model = new Sliderm3model(element.dataset);
    var view = new Sliderm3view(element);
    new Sliderm3controller(model, view);
});

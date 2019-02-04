
export default class Validate {
    constructor(dataset) {
        if (!dataset.min) 
            dataset.min = 0;
        if (!dataset.max || +dataset.max < +dataset.min) 
            dataset.max = +dataset.min + 100;
        if (!dataset.endRange)
            dataset.endRange = (+dataset.max - +dataset.min)/2 + +dataset.min;
        if (+dataset.endRange > +dataset.max) 
            dataset.endRange = +dataset.max;
        if (+dataset.endRange < +dataset.min) 
            dataset.endRange = +dataset.min;
        if (!dataset.startRange || +dataset.startRange < +dataset.min) 
            dataset.startRange = +dataset.min;
        if (+dataset.startRange > +dataset.endRange)
            dataset.startRange = +dataset.endRange;

         if (!dataset.step) dataset.step = 1; 
         if (!dataset.intervals) dataset.intervals = 3; 
         if (!dataset.length) dataset.length = 300; 
         if (!dataset.lineHeight) dataset.lineHeight = 25;
         if (!dataset.pointSize) dataset.pointSize = 50;
         if (!dataset.colorLine) dataset.colorLine = "rgba(230, 230, 230, 1)";
         if (!dataset.colorRange) dataset.colorRange = "rgba(231, 87, 53, 1)";
         if (!dataset.colorPoint) dataset.colorPoint = "rgba(231, 87, 53, 1)";
         if (!dataset.colorScale) dataset.colorScale = "rgba(231, 87, 53, 1)";
         if (!dataset.colorText) dataset.colorText = "rgba(255, 255, 255, 0.8";
    }
}
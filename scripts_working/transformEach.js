/*************by Shanfan Huang, the visual designer. http://shanfanhuang.com *******
                                        Transform EACH
                        This work is released under Creative Commons 
                  Attribution-NonCommercial-ShareAlike (CC BY-NC-SA 3.0)
                    http://creativecommons.org/licenses/by-nc-sa/3.0/

***********************************************************************************/
var def = {
    degree: 0,
    scaleX: 100,
    scaleY: 100
    };
var components = {
    degree: {
        type: 'number', label: 'degree',
        steppers: true, range: [0, 360], units: 'degree'
    },
    scaleX: {
        type: 'number', label: 'Scale Width',
        steppers: true, min: 1, units: 'percent'
    },
    scaleY: {
        type: 'number', label: 'Scale Height',
        steppers: true, min: 1, units: 'percent'
    },
    btn: {
        type: 'button', value: 'Transform Each',
        onClick: function(){
            var paths = document.getItems({
                selected: true
            });

            if (paths.length > 0 ){
                for(i=0; i<paths.length; i++) {
                    var path = paths[i];
                    path.rotate(def.degree);
                    path.scale(def.scaleX/100, def.scaleY/100);
                };
            };
        }
    }
};

var palette = new Palette('Transform Each', components, def);

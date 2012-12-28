
var layer = document.activeLayer;
print(layer.name); 

var sel = document.getItems({ 
    type:  'TextItem',
    selected: false,
});


for (i=0;i<sel.length;i++) {
	if (layer.children.length != 0){
		if (sel[i].isDescendant(layer)==true){
			sel[i].selected = true;
			}
		}
	}

// var char1 = document.characterStyle["Street Type 3.75"];

var layerSel = document.getItems({
	type: 'TextItem',
	selected: true,
});

for (j=0;j<layerSel.length;j++) {
	if (layer.name == "street type") {
		layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
		layerSel[j].characterStyle.fontSize = 3.75;
		layerSel[j].characterStyle.horizontalScale = .95;
		layerSel[j].characterStyle.tracking = 50;
		layerSel[j].characterStyle.leading = 4;
		layerSel[j].characterStyle.capitalization = 'all';
		layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
		}
		else {
		if (layer.name == "water type") {
			layerSel[j].characterStyle.font = app.fonts['Goudy']['Bold Italic'];
			layerSel[j].characterStyle.fontSize = 5;
			layerSel[j].characterStyle.horizontalScale = .95;
			layerSel[j].characterStyle.tracking = 50;
			layerSel[j].characterStyle.leading = 5;
			layerSel[j].characterStyle.capitalization = 'normal';
			layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
			}
			else {
			if (layer.name == "trail type") {
				layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
				layerSel[j].characterStyle.fontSize = 4.5;
				layerSel[j].characterStyle.horizontalScale = .95;
				layerSel[j].characterStyle.tracking = 50;
				layerSel[j].characterStyle.leading = 4.8;
				layerSel[j].characterStyle.capitalization = 'normal';
				layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
				}
			}
		}
	}
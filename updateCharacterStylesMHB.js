/******************
update character styles from FreeHand for Moon template character styles
select all type on an active layer and apply character syle properties to match the template
	TO DO: 1. figure out the easy way of doing this by referencing actual Character Styles from the templates character styles' panel
	 			note: scriptographer does not have an object array for defined character styles in the document. bummer!
				instead, create variables for each character style and assign them that way?
      	   2. make script cycle through all layers in the document and auto assign character styles to correct layers.
*******************/

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
		layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,80);
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
				else {
					if (layer.name == "'to' type & arrow" || layer.name == "'to' type") {
					layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
					layerSel[j].characterStyle.fontSize = 5;
					layerSel[j].characterStyle.horizontalScale = .95;
					layerSel[j].characterStyle.tracking = 50;
					layerSel[j].characterStyle.leading = 6;
					layerSel[j].characterStyle.capitalization = 'normal';
					layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
					}
					else {
						if (layer.name == "town type") {
						layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
						layerSel[j].characterStyle.fontSize = 5;
						layerSel[j].characterStyle.horizontalScale = .90;
						layerSel[j].characterStyle.tracking = 50;
						layerSel[j].characterStyle.leading = 5.33;
						layerSel[j].characterStyle.capitalization = 'normal';
						layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
						}
						else {
							if (layer.name == "city type") {
							layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
							layerSel[j].characterStyle.fontSize = 5.75;
							layerSel[j].characterStyle.horizontalScale = .90;
							layerSel[j].characterStyle.tracking = 50;
							layerSel[j].characterStyle.leading = 6.13;
							layerSel[j].characterStyle.capitalization = 'normal';
							layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
							}
							else {
							    if (layer.name == "open space type") {
							    layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
							    layerSel[j].characterStyle.fontSize = 5;
							    layerSel[j].characterStyle.horizontalScale = .90;
							    layerSel[j].characterStyle.tracking = 50;
							    layerSel[j].characterStyle.leading = 7;
							    layerSel[j].characterStyle.capitalization = 'all';
							    layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
							    }
							}
					    }
				    }
			    }
		    }
	    }
    }
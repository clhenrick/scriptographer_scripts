/******************
update character styles from FreeHand for Moon template character styles
select all type on an active layer and apply character syle properties to match the template
	TO DO: 1. figure out the easy way of doing this by referencing actual Character Styles from the templates character styles' panel
	 			note: scriptographer does not have an object array for defined character styles in the document. bummer!
				instead, create variables for each character style and assign them that way?
      	   2. make script cycle through all layers in the document and auto assign character styles to correct layers.
*******************/

// get the active layer
var layer = document.activeLayer;
print(layer.name); 

// set variable for Groups in active layer
var group = document.getItems({
    type: 'Group',
    selected: false
});

// set variable for TextItems in active layer
var sel = document.getItems({ 
    type:'TextItem',
    selected: false
});

// loop through active layer and select all type
for (i=0;i<sel.length;i++) {
	if (layer.children.length != 0){
		if (sel[i].isDescendant(layer)==true){
			   sel[i].selected = true;
			}
		}
	}

// loop through active layer and select all groups
for (i=0;i<group.length;i++) {
	if (layer.children.length != 0){
		if (group[i].isDescendant(layer)==true){
			   group[i].selected = true;
			}
		}
	}

// set variable for selected textItems in active layer
var layerSel = document.getItems({
	type: 'TextItem',
	selected: true,
});

// set variable for selected groups in active layer
var groupSel = document.getItems({
    type: 'Group',
    selected: true,
});

// otherwise apply characterStyle properties to all other TypeItems 
 for (j=0;j<layerSel.length;j++) {
     for (k=0;k<groupSel.length;k++) {
		if (layer.name == "street type") {
		layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
		layerSel[j].characterStyle.fontSize = 3.75;
		layerSel[j].characterStyle.horizontalScale = .95;
		layerSel[j].characterStyle.tracking = 50;
		layerSel[j].characterStyle.leading = 5;
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
						if (layer.name == "town type" | layer.name == "Town Type") {
						layerSel[j].characterStyle.font = app.fonts['Univers']['55 Roman'];
						layerSel[j].characterStyle.fontSize = 5;
						layerSel[j].characterStyle.horizontalScale = .90;
						layerSel[j].characterStyle.tracking = 50;
						layerSel[j].characterStyle.leading = 5.33;
						layerSel[j].characterStyle.capitalization = 'normal';
						layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
						}
						else {
							if (layer.name == "city type" | layer.name == "City Type") {
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
							    layerSel[j].characterStyle.horizontalScale = .83;
							    layerSel[j].characterStyle.tracking = 50;
							    layerSel[j].characterStyle.leading = 7;
							    layerSel[j].characterStyle.capitalization = 'all';
							    layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
							    }
							   else {
									if (layer.name == "sight type" && layerSel[j].isChild(groupSel[k])==false) {
									layerSel[j].characterStyle.font = app.fonts['Univers']['65 Bold'];
									layerSel[j].characterStyle.fontSize = 4.5;
									layerSel[j].characterStyle.horizontalScale = .83;
									layerSel[j].characterStyle.tracking = 50;
									layerSel[j].characterStyle.leading = 4.8;
									layerSel[j].characterStyle.capitalization = 'all';
									layerSel[j].characterStyle.fillColor = new CMYKColor(0,0,0,100);
									}
							        else {
							             if (layer.name == "title" | layer.name == "Title") {
							             layerSel[j].characterStyle.font = app.fonts['InterstatePro']['Black'];
							             layerSel[j].characterStyle.fontSize = 13;
							             }
							             else {
												if (layer.name == "hwy shields" | layer.name == "shield type") {
												layerSel[j].characterStyle.font = app.fonts['Interstate']['Bold'];
												layerSel[j].characterStyle.fontSize = 4;
												layerSel[j].characterStyle.horizontalScale = .93;
												layerSel[j].characterStyle.tracking = 50;
												layerSel[j].characterStyle.leading = 3.5;
												layerSel[j].characterStyle.capitalization = 'all';
											//	layerSel[j].characterStyle.fillColor = lastChild.firstChild.fillColor;
												layerSel[j].characterStyle.baselineShift = -.28;
												}
												 else {
													  if (layer.name == "scale/copyright" && layerSel[j].characterStyle.font == "Futura"){
													  layerSel[j].remove();
													  }
							                   }
							             }
							        }
								}
							}
						}
					}
				}
			}
		}
	 }
  }

// assign characterStyle properties to textItems only in the 'sight type' layer that are grouped
for (k=0;k<groupSel.length;k++) {
    if (layer.name == "sight type"){
        groupSel[k].firstChild.characterStyle.font = app.fonts['InterstatePro']['BoldItalic'];
        groupSel[k].firstChild.characterStyle.fontSize = 4.5;
		groupSel[k].firstChild.characterStyle.horizontalScale = .83;
		groupSel[k].firstChild.characterStyle.tracking = 0;
		groupSel[k].firstChild.characterStyle.leading = 4.8;
		groupSel[k].firstChild.characterStyle.capitalization = 'all';
		groupSel[k].firstChild.characterStyle.fillColor = new CMYKColor(0,0,0,100);
		groupSel[k].firstChild.characterStyle.baselineShift = -.4;
		}
	}
  
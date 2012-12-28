/**********

apply characterStyle font, font size, and fill color from template key to all textItems in the document's
	artboard that share the same layer as text items in the key.
	
TO DO: loop through all layers in the document to search for text that matches certain layer names.
	then apply matching character styles by matching layer

**********/

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

/*
//set layer character style variables by selecting the upper left most text item in that layer:
//I didn't finish figuring out how to do it this way, but I assume you would use the position of the matchThis text item which would fall into the -x, -y quadrant of the coordinate system.
var layer1 = document.layers["city type"];
layer1.activate();

console.log(layer1.name);
		
var char1 = document.getItems({
	type: 'TextItem',
	selected: false,
	})

//select all text within the layer	
for (i=0; i<char1.length; i++){
	if (layer1.children.length != 0){
		if (char1[i].isDescendant(layer1) == true){
			char1[i].selected = true;
			}
		}
	}

*/

var matchThis = document.getItems({
	type: 'TextItem',
	selected: true,
	});

//set the matchThis variable to the last instance of the array (which should be the template key text item and thus have the correct character style)	
var matchThis = matchThis[matchThis.length-1];

var textSel = document.getItems({
	type: 'TextItem',
	selected: true,
});

for (j=0; j<textSel.length; j++){
	textSel[j].characterStyle.font == matchThis.characterStyle.font;
	textSel[j].characterStyle.fontSize == matchThis.characterStyle.fontSize;
	textSel[j].characterStyle.fillColor == matchThis.characterStyle.fillColor;
	}

/*	
for (j=0; j<layer1.children.length; j++) {
	layer1.children[j].characterStyle.font == matchThis.characterStyle.font;
	}
*/

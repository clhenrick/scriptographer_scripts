/**********

Select all over print fills and strokes, turn off overprints but keep fillColor and strokeColor

**********/

var sel = document.getItems({ 
    visible: true,
    types: [Group, Path, TextItem]
});

for (i=0; i<sel.length; i++) {
	if (sel[i].strokeOverprint == true) {
		sel[i].selected = true;
		//sel[i].strokeOverprint = false;
		} else { if (sel[i].fillOverprint == true) {
				sel[i].selected = true;
				//sel[i].fillOverprint = false;
	}
	}
	}


var overPrint = document.getItems({
	selected: true,
});

overPrint = overPrint[0];

var noverPrint = document.selectedItems;
	for (j=0; j<noverPrint.length; j++) {
		noverPrint[j].fillColor == overPrint.fillColor;
		noverPrint[j].strokeColor == overPrint.strokeColor;
		noverPrint[j].strokeOverprint = false;
		noverPrint[j].fillOverprint = false;
		noverPrint[j].layer == overPrint.layer;
	}
//select text in layers and automatically apply template character styles.

//get all text within a range of layers
var sel = document.getItems({
	type: 'TextItem',
	selected: true,
	});
	
document.activeLayer = sel.activeLayer;
	
var layer = document.activeLayer;	
print (layer.name);


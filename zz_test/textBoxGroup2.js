//take a text item above an object on the same layer and group them.

var layer = document.activeLayer;
print(layer.name);

var text = document.getItems({
	type: [AreaText, PointText],
	selected: true,
	//isDescendant(layer): true, 
	});
	
var box = document.getItems({
	type: 'Path',
	selected: true,
	//isDescendant(layer): true,
	});

var textClone = text.clone();
	textClone = new Point(text);
	
var boxClone = box.clone();
	//boxClone = new Rectangle();

if (layer.children.length != 0) {	
	for (i=1;i<text.length && i<box.length;i++) {
		console.log("Selected Items" + '\r' + text);
		textBoxGroup(text[i], box[i]);
		}
	}
	
function textBoxGroup(textAlt, boxAlt) {
	if (textClone.isClose(boxClone, 3) == true) {
		for (j=0;j<textAlt.length;j++){
		
			var textBox= new Group();
			var textAlts = textAlt[j];
			textBox.appendTop(textAlts);
			textBox.appendBottom(boxClone);
			console.log(textBox);
		}	
	}
}

//if (textClone.x - boxClone.x = 0 && textClone.y - boxClone.y = 0) {
//if (textClone.position == boxClone.position)
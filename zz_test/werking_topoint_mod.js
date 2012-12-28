//the script to end FreeHand to Illustrator converstion text frustration!!!

//select all text objects that are area type or text on a path
var getText = document.getItems({
	type: [AreaText,PathText]
	});
	
for (var i=0,t=getText.length;i<t;i++) {
	var text = getText[i] ;
	text.selected = true;
	}

// get all selected AreaText items and run toPointText
var selectedItems = document.getItems({ 
    type: [AreaText,PathText], 
    selected: true
    });

//write an if / else statement here to differentiate between area and point text

for ( i=0;i<selectedItems.length;i++ ){
	toPointText(selectedItems[i]);
	}
		
function toPointText(areaText){
	
	// copy the areatext to a new object
	var text = areaText.clone();
	
	//create two periods to measure the angle
	text.content = "..";
	
	//convert to outlines
	var points = text.createOutline();
	
	//remove cloned text
	text.remove();
	
	//get angle between periods
	var vector = points.children[0].bounds.center-points.children[1].bounds.center;
	console.log(vector);
	
	//create PointText item and content
	var pointText = new PointText(points.lastChild.bounds.center);
	pointText.content = areaText.content;
	
	//rotate with respect to the first character
	pointText.rotate(vector.angle, points.lastChild.bounds.center);
	
	//clean up
	points.remove();
	areaText.remove();
}


function pathToPointText(pathText){
	
	// copy the pathText to a new object
	var text = pathText.clone();
	
	//create two periods to measure the angle
	text.content = ".."
	
	//convert to outlines
	var points = text.createOutlines();
	
	//remove cloned text
	text.remove();
	
	//get angle between periods
	var vector = points.children[0].bounds.center-points.children[1].bounds.center;
	
	//create PointText item and content
	var pointText = new PointText(points.lastChild.bounds.center);
	
	//clean up
	points.remove();
	patText.remove();
}

//	scriptographer properties to look into: textItem (range, position, character style),
//	also document hierarchy properties to keep text in proper layers

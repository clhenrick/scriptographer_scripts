//select text objects
var getText = document.getItems({
	type: [AreaText,PathText]
	});


// get all selected AreaText items and run toPointText
var selectedItems = document.getItems({ 
    type: [AreaText,PathText], 
    selected: true
});

for ( i=0;i<selectedItems.length;i++ ){
	toPointText(selectedItems[i]);
	console.log(selectedItems[i]); 
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
	var vector = points.firstChild.bounds.center-points.lastChild.bounds.center;
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
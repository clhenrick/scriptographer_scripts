/******************
Get selected PathText items and run toPointText
This version will convert pathText if the path segment points have handles.
******************/

var selectedItems = document.getItems({ 
    type: PathText, 
    selected: true
});

for ( i=0;i<selectedItems.length;i++ ){
//		if (selectedItems.textPath.segments[i].handleIn.length == 0 || selectedItems.textPath.segments.handleOut.length == 0){
			
			toPointText(selectedItems[i]);
//			}
	}

function toPointText(pathText){
	
	// copy the areatext to a new object
	var text = pathText.clone();
	
	//create two periods to measure the angle
	text.content = "..";
	
	//convert to outlines
	var points = text.createOutline();
	
	//remove cloned text
	text.remove();
	
	//get angle between periods
	var vector = points.firstChild.bounds.center-points.lastChild.bounds.center;
	
	//create PointText item and content
	var pointText = new PointText(points.lastChild.bounds.center);
	pointText.content = pathText.content;
	
	//assign character and paragraph styles as well as offset
	pointText.characterStyle = pathText.characterStyle;
	pointText.paragraphStyle = pathText.paragraphStyle;
	pointText.characterStyle.baselineShift = 0;
	pointText.layer = pathText.layer;
	pointText.paragraphStyle.maxLetterSpacing = pathText.paragraphStyle.maxLetterSpacing;
	pointText.startOffset = pathText.startOffset; 
	
	//rotate with respect to the first character
	pointText.rotate(vector.angle, points.lastChild.bounds.center);
	
	// Sometimes the offsets are garbage. If so, set the startOffset to 0
	// note: the following code results in the script ending prematurely. 
	// To Do: fix!
	/*
	if( pointText.startOffset == areaText.endOffset){
		poinText.startOffset = 0;
	}
	pathText.endOffset = pathText.textPath.length;
	pathText.selected=true;
	*/
	
	//clean up
	points.remove();
	pathText.remove();
}

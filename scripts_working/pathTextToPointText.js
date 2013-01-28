/******************
Get selected PathText items and run toPointText

TO DO:
   1. Keep text on same layer, it changes layers for some reason when running script text across multiple layers is selected.
   2. Ignore PathText that isn't a straight line / that has handles
      so that text that actually needs a path (ie on a curvy road) is preserved.
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
	
	//create PointText item and content
	var pointText = new PointText(points.lastChild.bounds.center);
	pointText.content = areaText.content;
	
	//assign character and paragraph styles as well as offset
	pointText.characterStyle = areaText.characterStyle;
	pointText.paragraphStyle = areaText.paragraphStyle;
	pointText.layer = areaText.layer;
	pointText.paragraphStyle.maxLetterSpacing = areaText.paragraphStyle.maxLetterSpacing;

	//pointText.startOffset = areaText.startOffset; //doesn't seem to do anything...
	
	//rotate with respect to the first character
	pointText.rotate(vector.angle, points.lastChild.bounds.center);
	
	// Sometimes the offsets are garbage. If so, set the startOffset to 0
	//this following code results in the script ending prematurely...
	/*
	if( pointText.startOffset == areaText.endOffset){
		poinText.startOffset = 0;
	}
	pathText.endOffset = pathText.textPath.length;
	pathText.selected=true;
	*/
	
	//clean up
	points.remove();
	areaText.remove();
}
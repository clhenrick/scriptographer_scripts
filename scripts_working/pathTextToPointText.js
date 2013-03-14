/******************
Get selected PathText items that do not have handles on the path segment points and run toPointText

TO DO:
   1. Keep text on same layer, it changes layers for some reason when running script text across multiple layers is selected.
   2. possibly ignore pathText that has two or more segments with different angles?
   3. Detach each word from path but keep in the same position.
******************/

var selectedItems = document.getItems({ 
    type: PathText, 
    selected: true
});

// select only PathText that does not have handles
for ( i=0;i<selectedItems.length;i++ ){
    if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.length-1].handleIn.length==0){
        if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.length-1].handleOut.length==0){
           if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.length-2].handleIn.length==0){
              if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.length-2].handleOut.length==0){
                 if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.index=0].handleIn.length==0){
                     if (selectedItems[i].textPath.segments[selectedItems[i].textPath.segments.index=0].handleOut.length==0){
            
            console.log(selectedItems[i].textPath.segments)
			toPointText(selectedItems[i]);
			
			            }
			         }
			      }
			   }
		    }
	    }
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
	pointText.content = pathText.visibleRange.content;
	
	//assign character and paragraph styles as well as offset
	pointText.characterStyle = pathText.characterStyle;
	pointText.paragraphStyle = pathText.paragraphStyle;
	pointText.layer = pathText.layer;
	pointText.paragraphStyle.maxLetterSpacing = pathText.paragraphStyle.maxLetterSpacing;
	pointText.characterStyle.baselineShift = 0; //set baseline shift to 0 

	pointText.startOffset = pathText.startOffset; 
	
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
	pathText.remove();
}
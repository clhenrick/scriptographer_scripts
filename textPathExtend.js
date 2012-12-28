// Text Path Extend for scriptographer. 
// TO DO: fix the angle calculation, shorten the length the script extends by, keep the text left aligned and the left handle placed close to the left most point on the path. 
// Basically refine the script to keep the text in the correct position :)
// **make sure text stays on the correct layer, noticing when text is selected on multiple layers it seems to put them on a single / topmost layer after executing.


var sel = document.getItems({ 
    type: PathText, 
    selected: true
});

// If the visibleRange does not equal the whole range, then extend the path.

for(i=0;i<sel.length;i++){
	if(sel[i].range!=sel[i].visibleRange){
		textPathExtend(sel[i]);
	}
	//this proved problematic as everytime a path with displayed text is selected by the for statement the dialogue box appears.
	//else {Dialog.alert("There is no text on paths to extend!"); 
	//}
}

/* 
textPathExtend: if a path needs to be lengthened,
calculate a vector that smoothly extends the path.
Check to see if the last curve has handles.
If so, use the last handle point to get the appropriate angle.
If not, use the last segment point.
*/

function textPathExtend (testP){
	//define the vector variable as follows:
	var vector;
	//if the last segment point on the text path's left handle is non-existant 
	if ( testP.textPath.segments[testP.textPath.segments.length-1].handleIn.length==0 ){
	//and if the second to last segment point's right text handle does exist
		if( testP.textPath.segments[testP.textPath.segments.length-2].handleOut.length!=0 ){
		//then set the vector variable to equal the angle between the last segment point and the second to last point's right handle
			vector=testP.textPath.segments[testP.textPath.segments.length-1].point-testP.textPath.segments[testP.textPath.segments.length-2].handleOut;
		}
		//but if the right handle of the second to last segment point does not exist
		if( testP.textPath.segments[testP.textPath.segments.length-2].handleOut.length==0 ){
		//then set the vector variable to the angle between the last point and second to last point
			vector=testP.textPath.segments[testP.textPath.segments.length-1].point-testP.textPath.segments[testP.textPath.segments.length-2].point;
		}
	}
	//BUT if the last segment point's left handle is greater than 0 / does exist
	if ( testP.textPath.segments[testP.textPath.segments.length-1].handleIn.length!=0 ){
		//set the vector variable to the angle between the last segment point and it's left handle
		vector=testP.textPath.segments[testP.textPath.segments.length-1].point-testP.textPath.segments[testP.textPath.segments.length-1].handleIn;
	}
//now set the length of the vector variable to 50 (points)
	vector.length=50;
	
var sel = document.getItems({ 
    type: PathText, 
    selected: false
});
	


// Eventually add a script that extends area text boxes that are too small for their enclosed text.
// Then convert this text to point type.
// The start of such a script follows below:



//select all text objects that are area type or text on a path
var getText = document.getItems({
	type: [AreaText,PathText]
	});
//loop through all objects that are AreaText or PathText and select them.	
for (var i=0,t=getText.length;i<t;i++) {
	var text = getText[i] ;
	text.selected = true;
	}
	
//add to the vector length to the testP's last point (I assume this is what += means)
	vector+=testP.textPath.segments[testP.textPath.segments.length-1].point;

	// Because sel[i].textPath is Read-Only, we need a temporary path to hold the extension.

	var tempPath = new Path (testP.textPath.segments);
	tempPath.add(vector);
	var pathText = new PathText (tempPath);
	tempPath.remove();
	pathText.content = testP.content;
	pathText.characterStyle = testP.characterStyle;
	pathText.paragraphStyle = testP.paragraphStyle;
	pathText.startOffset = testP.startOffset;
	
	// Sometimes the offsets are garbage. If so, set the startOffset to 0
	
	if( pathText.startOffset == testP.endOffset){
		pathText.startOffset = 0;
	}
	pathText.endOffset = pathText.textPath.length;
	pathText.selected=true;
	testP.remove();
}

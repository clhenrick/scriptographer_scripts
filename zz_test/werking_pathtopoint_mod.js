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
if (selectedItems(type: AreaText, selected: true))
{

for ( i=0;i<selectedItems.length;i++ ){
	pathToPointText(selectedItems[i]);
	}

function pathToPointText(pathText){
	
	// copy the pathText to a new object
	var text = pathText.clone();
	
	//create two periods to measure the angle
	text.content = ".."
	
	//convert to outlines
	var points = text.createOutline();
	
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
}

else

{
alert ("No area text was found.");
}

//properties to look into: textItem(range, position, character style),
//	also document hierarchy properties to keep text in proper layers
//	append points to a text on path line when the text is not visible untill it is visible? -adobe scripting guide.jsx

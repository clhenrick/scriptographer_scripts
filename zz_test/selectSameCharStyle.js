/***********
GOAL: select text that has the same font and font fill color as the current text selection.
Point size, tracking, and leading may vary and should not be considered parameters.
***********/


//set variable for selected text
var sel = document.getItems({ 
    type:  'TextItem',
    selected: true
});

//document.currentStyle = sel.characterStyle;
		
//select all other text that has the same character style
for (i=0;i<sel.length;i++) {
	var text = sel[i];
	//if (sel[i].characterStyle.font==0 && sel[i].characterStyle.fillColor==0) {
	if (sel[i].characterStyle.font == sel[0].characterStyle.font && sel[i].characterStyle.fillColor == sel[0].fillColor) {
	text.selected = true ;
	}
}

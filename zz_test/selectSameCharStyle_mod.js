//select text that has the same font and font fill color as the current text selection.
//Point size, tracking, and leading may vary and should not be considered parameters.


//tell illustrator to use the selected text item to copy the characterStyle.font and
//characterStyle.fillColor properties from.
var matchThis = document.getItems({
	type: 'TextItem',
	selected: true,
	});

//set the variable to the first instance of the array	
matchThis = matchThis[0];

//set variable for text to look through
var sel = document.getItems({ 
    type:  'TextItem',
    selected: false,
});

console.log("Selected Items" + '\r' + sel);
	
//select all text that has the same character style
for (i=0;i<sel.length;i++) {
	if ((sel[i].characterStyle.font == matchThis.characterStyle.font) && (sel[i].layer == matchThis.layer) && (sel[i].characterStyle.fontSize == matchThis.characterStyle.fontSize)) {
			sel[i].selected = true;
		}
	}

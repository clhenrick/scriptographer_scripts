//select text that has the same font and font fill color as the current text selection. Point size, tracking, and leading may vary and should not be considered parameters.
//as of now the script does nothing.

//tell illustrator use the selected text item to copy characterStyle.font and characterStyle.fillColor from
var matchThis = document.getItems({
	type: 'TextItem',
	selected: true,
	});
	
matchThis=matchThis[0];


//set variable for text to look through
var sel = document.getItems({ 
    type:  'TextItem',
    selected: false,
});

/*******************

Use the console to debug code.
Here, it will print the text string 'Selected Items', and then the variable "sel" on the next line.

-not quite understanding how console.log will help debug, know it prints data to the console but not sure how this helps....

*******************/

console.log("Selected Items" + '\r' + sel);

/*******************

sel will return an array of objects, not the objects themselves

*******************/


//document.currentStyle = sel.characterStyle; //thought I might be able to assign the document.currentStyle to the selected character style as a work around but not sure.
	
//select all text that has the same character style
for (i=0;i<sel.length;i++) {
	//var text = sel[0];
	//sel[i].selected = false;
if (sel[i].characterStyle.font == matchThis.characterStyle.font) {
	if (sel[i].characterStyle.fillColor == matchThis.characterStyle.fillColor){
		sel[i].selected = true;
		}	
	}
}

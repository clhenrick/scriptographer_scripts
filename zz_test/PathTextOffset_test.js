var sel = document.getItems({ 
    type: PathText, 
    selected: true
});

// set the text slider handle of the path text to the left most position on the path.

for(i=0;i<sel.length;i++){
	sel[i].startOffset=0;
	sel[i].paragraphStyle.justification='left';
	//sel[i].endOffset=sel[i].range.end+10;
	//sel[i].endOffset=sel[i].range.characters[-1]+5;
	console.log(sel[i].content);
	//console.log(sel[i].range.characters[-1]);
	}
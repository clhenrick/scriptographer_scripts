//select all text objects 
var getText = document.getItems({
	type: 'PathText',
	});
	
for (i=0,t=getText.length;i<t;i++) {
	var text = getText[i] ;
	text.selected = true;
	}

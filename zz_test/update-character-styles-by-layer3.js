layer1= document.layers["city type"];
char1 = document.characterStyle["City Type"];

sel=document.selectedItems;
for ( i = 0; i < sel.length; i++ ) {
	if (sel[i].layer == layer1){
		sel[i].characterStyle == char1.characterStyle;
		}
	}

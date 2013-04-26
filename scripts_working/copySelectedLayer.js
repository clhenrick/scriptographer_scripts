/*

takes a layer, duplicates it, renames it,
and turns off original layer

*/

// get the selected items in the document
var selItems = document.activeLayer.children;
print(selItems);

var layerSel = document.activeLayer;
print(layerSel);

var forLater = layerSel;

//make a duplicate layer
var layerCopy = new Layer();

for (i=0; i<selItems.length; i++){
    duplicateLayer(selItems[i]);
}


function duplicateLayer(items){
    if (items != layerCopy.children){
    
        var itemsCopy = items.clone();
        
        print(itemsCopy);
         
        layerCopy.appendTop(itemsCopy);
        
        print(layerCopy.children);
        
        // itemsCopy.remove();
    
    }
}

var oldLayer = forLater;
var newLayer = layerCopy;

print(newLayer);
print(oldLayer);

// copy the original layer name to the duplicate
newLayer.name = oldLayer.name + ' IN TECHNO-COLOR!';

// move the newLayer below the oldlayer
newLayer.moveBelow(oldLayer);

// make the old layer hidden
oldLayer.visible = false;

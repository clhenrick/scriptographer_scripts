/*****************************************************

takes a selected layer, duplicates it, renames it,
moves it below original layer, and turns off
the original layer

TO DO:
make script iterate over all layers in the document
so that multiple selected layers (or selected objects
across multitple layers) can be duplicated with one run
of the script

eventually filter document layers so that only certain
layers are duplicated based on name, and then have
graphic styles applied to their children objects.

*****************************************************/

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

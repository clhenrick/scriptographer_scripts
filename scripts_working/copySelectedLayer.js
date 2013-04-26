/*****************************************************

takes a selected layer, duplicates it, renames it,
moves it below original layer, and turns off
the original layer

TO DO:
make script iterate over all layers in the document
so that multiple selected layers (or selected objects
across multiple layers) can be duplicated with one run
of the script.

eventually filter document layers so that only certain
layers are duplicated based on layer.name, and then have
graphic styles applied to their children.

*****************************************************/

// get the selected items in the document
var selItems = document.activeLayer.children;
print(selItems);

// get the active / selected layer in the document
var layerSel = document.activeLayer;
print(layerSel);

// save the original layer in a variable
var forLater = layerSel;

// make a new layer to copy original layer's items into
var layerCopy = new Layer();

// loop through the selected items and send to duplicateLayer()
for (i=0; i<selItems.length; i++){
    duplicateLayer(selItems[i]);
}

// copy original layer's items to the new layer
function duplicateLayer(items){
    if (items != layerCopy.children){
        
        // clone the original layer's items
        var itemsCopy = items.clone();
        
        // print the items to debug
        print(itemsCopy);
        
        // copy the items to the new layer 
        layerCopy.appendTop(itemsCopy);
        
        // print the new layer's items to debug
        print(layerCopy.children);
    
    }
}

// rename the layer variables
var oldLayer = forLater;
var newLayer = layerCopy;

// print their names to make sure it's working
print(newLayer);
print(oldLayer);

// copy the original layer name to the duplicate
newLayer.name = oldLayer.name + ' IN B/W';

// move the newLayer below the oldlayer
newLayer.moveBelow(oldLayer);

// make the old layer hidden
oldLayer.visible = false;

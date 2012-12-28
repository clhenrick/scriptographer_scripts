print(document.activeLayer.name); // 'Layer 1'
var layer = new Layer();
layer.name = 'A new layer';
layer.activate();
print(document.activeLayer.name); // 'A new layer'
print(document.layers.length); // 2
//group append test

var position = new Point(100,100);
var group = new Group();
var text = new PointText(position);
text.content = '101';
text.characterStyle.fillColor = new CMYKColor(0,0,0,80);

var box = new Path.Rectangle(new Point(100,90), new Point(120,120));
box.strokeColor = new CMYKColor(0,0,0,80);
box.strokeWidth = .3;
box.fillColor = new CMYKColor(0,0,0,0);

group.appendTop(text);
group.appendBottom(box);


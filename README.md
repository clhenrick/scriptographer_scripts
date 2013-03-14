scriptographer scripts .js
==========================
javascript for use with the Scriptographer plugin for Adobe Illustrator version <= CS5.5
* These are scripts that I find useful for cartography in AI, similar to the ones found [here.](http://kelsocartography.com/blog/?tag=script)
* Some of these scripts were developed with help from [Alex Blackwood](pxqxbxd@gmail.com)
* The transFormEach.js script was created by [Shanfan Huang](http://shanfanhuang.com), the visual designer. 

The scripts in the scripts_working folder do the following:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  -pathTextToPointText.js 
     takes a selected text on a path and makes it point text. Ignores path text with handles so that 
     path text that truly needs to be on a path stays on a path.
  
  -pathTextToPointText_ignoreHandles.js
     same as above script but will convert path text with handles
     
  -selectSameCharacterStyle.js
     will select all other text in the document that matches a currently selected text item's properties (font family, font style, color, etc.)
     *note: freehand file text data has some properties that scriptographer doesn't recognize so this script won't always work.
     
  -selectSameContent.js
     will select all other grouped objects that contain the same text as a currently selected grouped object that contains text
     
  -textPathExtend.js
     will extend path text handles when not long enough to display text contained (when a little red plus symbol is showing)
     
  -transformEach.js
     similar to AI's native transform each command but better as it doesn't seem to limit the total number of objects you can have selected.
     
  -updateCharacterStylesByLayer.js
     assigns properties to text based on what layer the text is in, for moon take a hike styles.
  
  -updateCharacterStylesMHB.js
     similar to above script but for moon hand books black/white style.

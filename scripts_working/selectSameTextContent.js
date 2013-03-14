/************
select same text content
************/

var matchThis = document.getItems({ 
    type: 'TextItem', 
    selected: true
});

matchThis = matchThis[0];

var notSelected = document.getItems({
    type: 'TextItem',
    selected: false
});

for (i=0; i<notSelected.length; i++){
   if (notSelected[i].content == matchThis.content){
       notSelected[i].parent.fullySelected = true
       }
    }
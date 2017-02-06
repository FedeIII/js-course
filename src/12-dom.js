
var div = document.getElementById('myDiv');

div.innerHtml('Text');
div.innerHtml('<div id="newDiv"></div>');

var div2 = document.createElement('div');
div2.id = 'newDiv';

div.appendChild(div2);

//...//

var newDiv = document.getElementById('newDiv');

/////////////////////

var $div = $('#myDiv');
var $div2 = $('#newDiv');
$div.append($div2);

//...//

var $newDiv = $div.find('#newDiv');

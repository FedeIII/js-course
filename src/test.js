
var a = 21;

a = a * 2;

console.log(a);

//////////////////////

2 + 'px'

//////////////////////

var obj;

//...//

obj = {
    a: 'a'
}

//...//

if (obj) {
    obj.a
}

//////////////////////

var a = true;
var b = {};
var c = 'any string';

var d = a && b && c;

d

//////////////////////

var a = null;
var b = false;
var c = undefined;

var d = a && b && c;

d

//////////////////////

[]
![] //to boolean
''+![] //to string
[]+![] //to string x2
''
+false //to number
+'' //to boolean
+[] //to string
([]+![])[+[]] //f

([]+![])[+[]]+([]+!![])[+!+[]+!+[]+!+[]]+([]+[][[]])[+!+[]+!+[]]+([]+!![])[+!+[]+!+[]+!+[]]

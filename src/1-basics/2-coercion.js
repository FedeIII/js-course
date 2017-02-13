/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The engine "coerces" the data in a variable into a different type during some
operations:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

4 + 2;   //6

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Regular numeric addition, because both variables have data of type Number
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

4 + '2';    //42

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Different types, so coerces the 4 from Number to String to use the overloaded
behavior of + operand: string concatenation
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var obj;

//...//

obj = {
  a: 'a'
};

//...//

if (obj) {
  obj.a;
}

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
An object always coerces to true in boolean operations, allowing using it as
condition to access its properties. The ONLY values that coerce to false are:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

if (false)
if (0)
if (undefined)
if (null)
if (NaN)
if ('')

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
As all the values can coerce to the Boolean type, the boolean operators
process only the minimum necessary operators to kwnow the result of the
operation and return the last operator processed:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var a = true;
var b = {};
var c = 'any string';
a && b && c;    //'any string'

var a = '';
var b = true;
var c = true;
a && b && c;    //''

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The first output is var c cause until its evaluation the result of the two
AND operations wasn't solved. The second output is var a cause it is falsy
and the rest of the operands won't change the result, so are not evaluated
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Coercion is considered one of the "bad parts" of Javascript, should be avoided
when possible and used only for specific controlled cases
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

[]      // 1. empty array coerces to true

![]     // 2. negation not defined for Array, coerces to Boolean:
        //    !true => false

''+![]  // 3. binary + operand not defined for String + Boolean, coerces
        //    Boolean to String: '' + 'false' => 'false'

[]+![]  // 4. binary + operand not defined for Array + Boolean, coerces Array
        //    to String: ''+![] => 'false' (see example 3)

+false  // 5. unary + operand coerces Boolean to Number: +0 => 0

+''     // 6. unary + operand coerces String to Boolean: +false => 0 (see 5)

+[]     // 7. unary + operand coerces Array to String: +'' => 0 (see 6)

a[i]    // 8. access element Number i from Array a

([]+![])[+[]] // 9. access element Number +[] from Array []+![] coerces
              // String 'false' to Array ['f', 'a', 'l', 's', 'e']:
              // 'false'[0] => 'f'

([]+![])[+[]]+([]+!![])[+!+[]+!+[]+!+[]]+([]+[][[]])[+!+[]+!+[]]+([]+!![])[+!+[]+!+[]+!+[]]

//outputs: 'fede'

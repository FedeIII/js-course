/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Javascript is compiled by the engine just before executing it. The compiler
uses multiple tricks to speed up the execution changing the code in the process
without changin its outcome. The engine is free to detect that in this program:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var a = 21;

a = a * 2;

console.log(a);     //42

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
the variable "a" is only used in its scope to console log it, so it could well
compile that whole program into the following one with the exact same output:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

console.log(42);    //42

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The compiler is in charge of this process known as hoisting that lets you
access a variable in a scope before it has been declared. For example:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

console.log(b);     //undefined

var b = 42;

console.log(b);     //42

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
will compile to:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var b;

console.log(b);     //undefined

b = 42;

console.log(b);     //42

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
ES6 "let" and "const" help the compiler do optimizations to variables which
don't change along the program execution:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

let a;
a = 42;     //42

const b;    //SyntaxError: Missing initializer in const declaration

const b = 42;
b = 21;     //TypeError: Assignment to constant variable.

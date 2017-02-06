/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Javascript is actually a compiled language, compiled by the engine just
before executing it. The compiler uses a lot of tricks to speed up the
execution, so the fine tuning of a js program performance should be left to the
engine. As far as the developer knows, the engine is free to detect that in
this program:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var a = 21;

a = a * 2;

console.log(a);

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
the variable "a" is only used in its scope to console log it, so it could well
compile that whole program into the following one:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

console.log(42);

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
So in js, the concerns of a developer should be around performance issues of
a higher level like DOM elements access and creation, asynchronicity and
concurrency or maintainability and legibility of the code
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

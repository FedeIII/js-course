/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Starting with a function that prints its parameters
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function printArgs (a, b, c) {
    console.log(a, b, c);
}

printArgs(1, 2, 3); // 1 2 3

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If the arguments are passed in an array
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var arr = [1, 2, 3];
printArgs(arr);     // [1, 2, 3] undefined undefined

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
We could destructure the array manually, with some imperative code
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

printArgs(arr[0], arr[1], arr[2]);  // 1 2 3

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Or we could destructure it with the spread operator in a more declarative way
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

printArgs(...arr);  // 1 2 3

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
To accept an arbitrary number of arguments we need to declare the parameters
of the function with the gather operator that scopes the arguments in an
array parameter
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

printArgs(1, 2, 3, 4); // 1 2 3

function printArgs (...args) {
    console.log(args);
}

printArgs(1, 2, 3, 4); // [1, 2, 3, 4]

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Combining both gather and spread operators can replicate the original
function but with any number of parameters
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function printArgs (...args) {
    console.log(...args);
}

printArgs(1, 2, 3); // 1 2 3
printArgs(1, 2, 3, 4); // 1 2 3 4

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The gather operator will pick all the values until the last one, the spread
operator can be used to compose an array from others
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function printArgs (a, b, ...rest) {
    var arr = [2, 3];
    var printedArgs = [a, ...arr, b, ...rest];
    console.log(...printedArgs);
}

printArgs(1, 4, 5, 6);  // 1 2 3 4 5 6

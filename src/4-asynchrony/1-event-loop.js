/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Starting example: log number from 0 to 5 and log the final value of the var
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('final value:', i);

// 0 // 1 // 2 // 3 // 4 // 5 // final value: 6

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
This delays the log of the number that same 'number' of seconds
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var i = 3
setTimeout(function () {
    console.log(i);
}, i * 1000);

// 3 *after 3 sec*

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Using that to print the numbers from 0 to 5 results in:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

// 6 *instantly*
// 6 *after 1 sec*
// 6 *after another sec*
// ...
// 6 *after a total of 5 sec*

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The callbacks passed to setTimeout are put in the JS event loop, a stack of
chunks of code to be executed. The first chunk gives values to 'i' and sets 6
callbacks with timeouts. The next chunk (first timeout triggered), logs 'i',
but after the execution of the first chunk, 'i' was left with the value 6
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
We can store the correct value for 'i' in the scope of the callback sent to
the event loop
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function delayNumber (j) {
    // j is actually a scoped value for i
    setTimeout(function () {
        console.log(j);
    }, j * 1000);
}

for (var i = 0; i <= 5; i++) {
    delayNumber(i);
}

// 0 *instantly*
// 1 *after 1 sec*
// 2 *after another sec*
// ...
// 5 *after a total of 5 sec*

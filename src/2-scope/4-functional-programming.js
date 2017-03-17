/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
As first class citizens, functions can be passed as params to other functions
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function formal () {
    console.log('Greetings');
}

function coloquial () {
    console.log('Hi mate!');
}

function selector (num, fn1, fn2) {
    if (num % 2 != 0) {
        fn1();
    } else {
        fn2();
    }
}

selector(1, formalSalute, coloquialSalute);   // 'Greetings'
selector(2, formalSalute, coloquialSalute);   // 'Hi mate!'


/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Functions can also be returned by other functions
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createSalute (salute1, salute2) {
    return function (num) {
        if (num % 2 != 0) {
            salute1();
        } else {
            salute2();
        }
    };
}

var salute = createSalute(formal, coloquial);

salute(1);  // 'Greetings'
salute(2);  // 'Hi mate!'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Functions can be partially executed thanks to being first class citizens
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createSalute (selector, salute1, salute2) {
    return function (num) {
        selector(num, salute1, salute2);
    };
}

var salute = createSalute(selector, formal, coloquial);

salute(1);  // 'Greetings'
salute(2);  // 'Hi mate!'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Currying a function is partially applying one parameter and return a function
than can apply the next one
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function add (a, b) {
    return a + b;
}

add(5, 2); //7

function curry (fn, a) {
    return function (b) {
        return add(a, b);
    }
}

var add5 = curry(add, 5);

add5(2); //7

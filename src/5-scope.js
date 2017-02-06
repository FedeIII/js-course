function add (a, b) {
    return a + b;
}

add(5, 2); //7

function currify (fn, a) {
    return function (b) {
        return add(a, b);
    }
}

var add5 = currify(add, 5);

add5(2); //7

var a = 'a global';
global.a;
a;
this.a;

function foo () {
    var a = 'a foo';
    console.log(this.a);
}

foo();

// //////////////////////////

var a = 'a global';

function foo () {
    console.log(this.a);
}

var obj = {
    a: 'a obj',
    foo: foo
};

obj.foo();

// //////////////////////////

var bar = obj.foo;

bar();

// //////////////////////////

bar.call(obj);

var baz = bar.bind(obj);
baz();

var obj2 = {
    a: 'a obj2',
    foo: baz
}

obj2.foo();

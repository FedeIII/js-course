/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The context and the scope are two separate things. The context is always the
reference to an object. The only occasion where both are equivalent is in
the global scope - global context
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var a = 'a global';
global.a;
a;
this.a;

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If a function is called by itself, the context will be the global context,
and will be different than the function scope
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function foo () {
    var a = 'a foo';
    console.log(this.a);
}

foo();  // 'a global'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If a function is called through an object, the context will be the object
itself
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var obj = {
    a: 'a obj',
    foo: function () {
        console.log(this.a);
    }
};

obj.foo();  // 'a obj'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Unlike the scope, which is lexical, the context depends on where the function
has been called, not where has been defined
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function foo () {
    console.log(this.a);
}

var obj = {
    a: 'a obj',
    foo: foo
};

obj.foo();  // 'a obj'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The functions do not have an owner, and because the context depends on where
they have been called and not where they where first defined, the context of
a function can change thoughout a program
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

obj.foo();  // 'a obj'

var bar = obj.foo;

bar();  // 'a global'

var obj2 = {
    a: 'a obj2',
    foo: obj.foo
};

obj2.foo(); // 'a obj2'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
We can manually fix the context of a function through the function properties
call, apply (for a particular call) and bind (forever)
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

bar();              // 'a global'
bar.call(obj);      // 'a obj'
bar.apply(obj2);    // 'a obj2'
bar();              // 'a global'

var baz = bar.bind(obj);
baz();  // 'a obj'

var obj2 = {
    a: 'a obj2',
    foo: baz
}

obj2.foo(); // 'a obj'

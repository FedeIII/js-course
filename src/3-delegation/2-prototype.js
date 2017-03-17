/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The last way of changing a function context is through the "new" keyword.
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function foo () {
    this.a = 'a foo';
}

var obj = new foo();

obj.a;  // 'a foo'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
But the "new" keyword has another effect: it links the object created to the
"prototype" of the function
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

foo.prototype;
foo.prototype.b = 'b foo';

var obj = new foo();
obj.a;  // 'a foo'
obj.b;  // 'b foo'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
b is not a real attribute inside obj, we are accessing an attribute of foo
prototype through and object created by foo, cause no b attibute was found in
obj.
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

foo.prototype;              // {b: 'b foo'}
obj.prototype;              // undefined
Object.getPrototypeOf(obj); // {b: 'b foo'}
obj.__proto__;              // {b: 'b foo'}

//////////////////////

var obj1 = new foo();

foo.prototype.b = 'new b foo';

var obj2 = new foo();

obj1.b;
obj2.b;

//////////////////////

var obj = {
    b: 'b obj'
};

var obj2 = Object.create(obj);
obj2.b;

var obj3 = {};
Object.setPrototypeOf(obj3, obj);

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
Because obj has no b attribute, we go through the prototype chain looking for
it. Because we linked obj to the prototype of foo, we can find it there
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Remember, prototype is a property of the function, not the object created
with it, but we can inspect the prototype of any object with getPrototypeOf
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

foo.prototype;              // {b: 'b foo'}
obj.prototype;              // undefined
Object.getPrototypeOf(obj); // {b: 'b foo'}
obj.__proto__;              // {b: 'b foo'}

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Because the prototype actually exists outside the created object, it can be
altered after its creating and still have effect on that object
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var obj1 = new foo();

foo.prototype.b = 'new b foo';

var obj2 = new foo();

obj1.b; // 'new b foo'
obj2.b; // 'new b foo'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
A more direct way of linking prototypally two objects is with Object.create()
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var obj = {
    b: 'b obj'
};

var obj2 = Object.create(obj);
obj2.b; // 'b obj'

var obj3 = {};
Object.setPrototypeOf(obj3, obj);
obj3.b; // 'b obj'

function foo () {
    this.a = 'a';
}

var obj = new foo();

obj.a;

//////////////////////

foo.bar = 'foobar';
foo.baz = function baz () {
    console.log('foobaz');
}

//////////////////////

foo.prototype;
foo.prototype.b = 'b foo';

var obj = new foo();
obj.a;
obj.b;

//////////////////////

foo.prototype;
obj.prototype;
Object.getPrototypeOf(obj);
obj.__proto__;

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

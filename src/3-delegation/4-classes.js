/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
With ES6, new keywords are introduced to create "classes" such as class,
extends, super and a few others
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

class Animal {
	constructor (name) {
		this.name = name;
    }

	identify () {
		return 'This is ' + this.name;
	}
};

class Cat extends Animal {
	constructor (name) {
		super(name);
    }

	speak () {
		console.log('Meow! ' + super.identify());
    }
}

const fry = new Cat('Fry');
fry.identify(); // 'This is Fry'
fry.speak();    // Meow! This is Fry

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
This makes javascript a lot more "class friendly" making inheritance more
readable, but it really is sintactic sugar for what is really happening below
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

Animal.prototype;                       // Object {constructor: function, identify: function}
Cat.prototype;                          // Animal {constructor: function, speak: function}
Object.getPrototypeOf(Cat.prototype);   // Object {constructor: function, identify: function}

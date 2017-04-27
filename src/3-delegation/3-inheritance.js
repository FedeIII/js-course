/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Through delegation we can try to imitate classes and inheritance. We start
with a function to act as both a class and its constructor
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Animal (name) {
    this.name = name;
}

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The new keyword makes the function return a new object and the context is a
direct reference to it
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var dog = new Animal('Seymour');
var toad = new Animal('Hypnotoad');

dog.name;   // 'Seymour'
toad.name;   // 'Hypnotoad'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
The common properties and methods of all the objects created by that function
are stored in the attribute "prototype" of the function that created them
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var commonProps = {
    identify: function () {
        return 'This is ' + this.name;
    }
}

Animal.prototype = commonProps;

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If the object does not have a property, it will be searched through the
prototype chain, and because the methods are called through the object, the
context (this) inside them will reference the object itself
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

Animal.prototype.identify();    // 'This is undefined'
commonProps.identify();         // 'This is undefined'
dog.identify();                 // 'This is Seymour'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Now lets imitate inheritance between classes. We start with a function to act
as the child class that will inherit from the previous Animal function
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Cat (name) {
    Animal(name);
}

var fry = new Cat('Fry');
fry.name;   // undefined
name;       // 'Fry'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If we want to execute the Animal constructor with the correct context, we
have to pass it somehow using any of the three approaches we saw before
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Cat (name) {
    var instance = new Animal(name);
    return instance;
}

Cat.prototype.speak = function () {
    console.log('Meow! ' + this.identify());
};

var fry = new Cat('Fry');
fry.identify(); // 'This is Fry'
fry.speak();    // TypeError: fry.speak is not a function

// fry automatically delegates to Animal prototype BUT
// doesn't delegate to own constructor Cat prototype (misuse of "new" keyword)

function Cat (name) {
    this.super = Animal;
    this.super(name);
}

Cat.prototype.speak = function () {
    console.log('Meow! ' + this.identify());
};

var fry = new Cat('Fry');
fry.identify(); // TypeError: fry.identify is not a function
fry.speak();    // TypeError: fry.identify is not a function

// fry delegates correctly to Cat's prototype BUT
// Cat's prototype is not delegating to Animal prototype

function Cat (name) {
    Animal.call(this, name);
}

Cat.prototype.speak = function () {
    console.log('Meow! ' + this.identify());
};

var fry = new Cat('Fry');
fry.identify(); // TypeError: fry.identify is not a function
fry.speak();    // TypeError: fry.identify is not a function

// fry delegates correctly to Cat's prototype BUT
// Cat's prototype is not delegating to Animal prototype

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
To "inherit" the props from Animal's prototype we have to link Cat's
prototype to Animal's prototype (child class delegates on parent class)
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Cat (name) {
    Animal.call(this, name);
}

// prototype chain creation!
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.speak = function () {
    console.log('Meow! ' + this.identify());
};

var fry = new Cat('Fry');
fry.identify(); // 'This is Fry'
fry.speak();    // Meow! This is Fry

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
This code can be simplified if we stop thinking about inheritance and classes
and we program directly using delegation
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var Animal = {
    init: function (name) {
        this.name = name;
    },

    identify: function () {
        return 'This is ' + this.name;
    }
};

var Cat = Object.create(Animal);

Cat.speak = function () {
    console.log('Meow! ' + this.identify());
};

var cat = Object.create(Cat);
cat.init('Fry');

cat.speak();    // Meow! This is Fry

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Instead of create the object and THEN initializing it (through "init") we
can create and initialize with the same function
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Animal (name) {
	return {
		name: name,
		identify: function () {
            return 'This is ' + this.name;
        }
	};
}

function Cat (name) {
	var cat = Object.create(Animal(name));
	cat.speak = function () {
		console.log('Meow! ' + this.identify());
	};
    return cat;
}

var fry = Cat('Fry');

fry.speak();    // Meow! This is Fry

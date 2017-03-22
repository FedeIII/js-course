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
have to pass it somehow with any of the three methods we saw before
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function Cat (name) {
    var instance = new Animal(name);
    return instance;
}

function Cat (name) {
    this.super = Animal;
    this.super(name);
}

function Cat (name) {
    Animal.call(this, name);
}

var fry = new Cat('Fry');
fry.name;   // 'Fry'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
To inherit the common props from the prototype we have to link the prototype
of the child class to the prototype of the parent class
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

fry.identify;   // undefined

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.speak = function () {
    console.log('Meow! ' + this.identify());
};

var cat1 = new Cat('Fry');
var cat2 = new Cat('Leela');

cat1.speak();
cat2.speak();

///////////////////////////////////////////////

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

var cat1 = Object.create(Cat);
cat1.init('Fry');
var cat2 = Object.create(Cat);
cat2.init('Leela');

cat1.speak();
cat2.speak();

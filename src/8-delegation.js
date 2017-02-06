function Animal (name) {
    this.name = name;
}

Animal.prototype.identify = function () {
    return 'This is ' + this.name;
};

function Cat (name) {
    Animal.call(this, name);
}

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

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
We start with a function to create a user through a name with an id scoped
within it
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createUser (name) {
    var id = Math.random();
    console.log('I am ' + name + ', with user id ' + id);
}

createUser('Fry');      // 'I am Fry, with user id 0.21412459603111178'
createUser('Leela');    // 'I am Leela, with user id 0.7965079365552226'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
If we want to access the user id we can return a new object with user data
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createUser (name) {
    var id = Math.random();
    console.log('I am ' + name + ', with user id ' + id);

    return {
        name: name,
        id: id
    };
}

var fry = createUser('Fry');    // 'I am Fry, with user id 0.6248906175757216'
fry.name;   // 'Fry'
fry.id;     // 0.6248906175757216

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Instead of an object we can return a function that identifies the user
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createUser (name) {
    var id = Math.random();

    return function identify () {
        console.log('I am ' + name + ', with user id ' + id);
    };
}

var leela = createUser('Leela');
leela();  // 'I am Leela, with user id 0.09509241109474664'

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Javascript also alows us to add attributes to functions, as they are a
special kind of object (an executable object), but an object nevertheless
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createUser (name) {
    var id = Math.random();

    function identify () {
        console.log('I am ' + name + ', with user id ' + id);
    };

    identify.id = id;
    identify.name = name;

    return identify;
}

var nibbler = createUser('Nibbler');
nibbler();    // 'I am Nibbler, with user id 0.11119433922190392'
nibbler.name; // 'Leela'
nibbler.id;   // 0.11119433922190392

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
As a last level to compose the message, we can set the returned function to
admit a parameter
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function createUser (name) {
    var id = Math.random();

    function identify (salute) {
        console.log(`I am ${name}, with user id ${id}. ${salute}`);
    };

    identify.id = id;
    identify.name = name;

    return identify;
}

var hermes = createUser('Hermes');
hermes();    // 'I am Hermes, with user id 0.5088030018528695. '
hermes('Hi!');    // 'I am Hermes, with user id 0.5088030018528695. Hi!'

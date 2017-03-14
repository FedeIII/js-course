function moduleFactory (deps, options) {

    var something = options.a + options.b;

    function doSomething () {
        return deps.do(something);
    }

    return {
        isActive: true,
        returnSomething: function () {
            return doSomething();
        }
    };
}

var deps = {
    do: function (foo) {
        return foo;
    }
};

var options = {
    a: 1,
    b: 2
};

var myModule = moduleFactory(deps, options);

myModule.isActive;
myModule.returnSomething();

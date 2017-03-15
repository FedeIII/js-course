/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
With revealing module pattern you use the scope to have the equivalent of
private and public properties and methods:
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

function counterModule (start) {
    var count = start;

    function add (num) {
        count += num;
    }

    return {
        tick: function () {
            add(1);
        },

        show: function () {
            return count;
        },

        increment: function (amount) {
            add(amount);
        }
    };
}

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
count is a "private property", a local variable scoped inside counter module
add is a "private method", a local function only avalaible inside the module
tick, show and increment are "public methods" returned by the module in an
object so they can be accessed from outside
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var counter = counterModule(0);

counter.show(); // 0

counter.tick();
counter.tick();
counter.show(); // 2

counter.increment(5);
counter.show(); // 7

/****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
Every time you call counterModule you return not only an object with the
public methods but also a particular scope for those methods to work with.
If you have multiple objects created with this module, each of them will have
its own particular and independent scope to alter
****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******/

var counter1 = counterModule(0);
var counter2 = counterModule(0);

counter1.tick();

counter2.tick();
counter2.tick();
counter2.tick();

counter1.show();    // 1
counter2.show();    // 3

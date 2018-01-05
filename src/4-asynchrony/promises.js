// No asynchronicity

function requestBeer () {
    const beer = {
        drink () {
            console.log('tasty!');
        }
    };

    return beer;
};

const myBeer = requestBeer();
myBeer.drink();

// Enter the asynchronicity

function requestBeer () {
    const ticket = {
        orderNumber: Math.random();
    };
};

const myTicket = requestBeer();
myTicket.then(orderNumber => {
    if (orderNumber === myTicket.orderNumber) {

    }
});

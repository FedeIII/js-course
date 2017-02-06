function requestProduct (type, discount, id) {
    console.log('found a ' + type + ' with a discount of ' + discount + '% with id ' + id);
}

requestProduct('hotel', 20, 1234);

var type = 'hotel';
var discount = 20;

requestProduct(type, discount, 1234);
requestProduct(type, discount, 1235);
requestProduct(type, discount, 1236);

var type = 'flight';
var discount = 10;

requestProduct(type, discount, 'UX0001');
requestProduct(type, discount, 'UX0002');
requestProduct(type, discount, 'UX0003');

///////////////////////////////////////

function requestHotel (id) {
    var type = 'hotel';
    var discount = 20;
    requestProduct(type, discount, id);
}

function requestFlight (id) {
    var type = 'flight';
    var discount = 10;
    requestProduct(type, discount, id);
}

requestHotel(1234);
requestHotel(1235);
requestHotel(1236);

requestFlight('UX0001');
requestFlight('UX0002');
requestFlight('UX0003');

///////////////////////////////////////

function requestProductFactory (productType) {

    var discount = productType == 'hotel' ? 20 : 10;

    return function (productId) {
        requestProduct(productType, discount, productId);
    }
}

var requestHotel = reqeustProductFactory('hotel');
var requestFlight = reqeustProductFactory('flight');

//...//

requestHotel(1234);
requestHotel(1235);
requestHotel(1236);

requestFlight('UX0001');
requestFlight('UX0002');
requestFlight('UX0003');

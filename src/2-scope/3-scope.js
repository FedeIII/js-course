
var cache = {};

var urls = ['url1', 'url2', 'url3'];

urls.forEach(function (url) {

    $.ajax(url).then(function (response) {

        cache[url] = response;

    });

});

////////////////////////

$.ajax('url1');  // scope 1
$.ajax('url2');  // scope 2
$.ajax('url3');  // scope 3

function scope1 (response) {
    // here url equals url1
}

function scope2 (response) {
    // here url equals url2
}

function scope3 (response) {
    // here url equals url3
}

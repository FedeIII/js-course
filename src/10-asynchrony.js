var server = {
    status: 1,
    request (resolve, reject) {
        if (this.status) {
            setTimeout(function () {
                resolve('server success');
            }, 1000);
        } else {
            setTimeout(function () {
                reject('server failure');
            }, 1000);
        }
    }
};

server.request(
    function (response) {
        console.log(response);
        server.request(
            function (newResponse) {
                console.log(newResponse);
            },

            function (newError) {
                console.log(newError);
            }
        );
        console.log('synchrony?');
    },

    function (error) {
        console.log(error);
    }
);

var server = {
    status: 1,
    request () {
        var response = new Promise((resolve, reject) => {
            if (this.status) {
                setTimeout(function () {
                    resolve('server success');
                }, 1000);
            } else {
                setTimeout(function () {
                    reject('server failure');
                }, 1000);
            }
        });

        return response;
    }
};

////////////////////

server.request().then(
    res => console.log(res),
    err => console.log(err)
);

////////////////////

server.request().then(
    (res) => console.log(res)
).catch(
    (err) => console.log(err)
);

////////////////////

server.request().then((res) => {
    console.log(res);
    server.status = 0;
    return server.request();
}).catch((err) => {
    console.log(err);
});

////////////////////

server.request().then((res) => {
    console.log(res);
    return server.request();
}).then((res) => {
    console.log(res);
}).then(() => {
    console.log('synchrony!');
}).catch((err) => {
    console.log(err);
});

////////////////////

var a = Promise.resolve(2);
a.then(res => console.log(res));

////////////////////

function parseStep1 (data) {
    var promise = server.parse(data);

    return promise;
}

function parseStep2 (data) {
    var parsedData = parse(data);

    return parsedData
}

server.request()
    .then(function (response) {
        return parseStep1(response);
    }).then(function (parsedResponse1) {
        return parseStep2(parsedResponse1);
    }).then(function (finalResponse) {
        console.log(finalResponse);
    });

////////////////////

return validateProjectExist()
    .then(validateProject)
    .then(validateTag)
    .catch(validationError)
    .then(changeVersion)
    .then(generateChangelog)
    .then(generateDocumentation)
    .then(addChangelog)
    .then(commitChangelog)
    .then(addTag)
    .catch(function (err) {
        log.error('There was an error in commit proccess.');
        if (err) {
            log.error(err);
        }
    });

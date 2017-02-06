for (var i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('final value ', i);

////////////////////

function sendMessage (i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

////////////////////

function sendMessages () {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

////////////////////

function sendMessages () {
    for (var i = 0; i <= 5; i++) {
        sendMessage(i);
    }
}

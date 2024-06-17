new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
        reject('we dont know');
    }
    resolve(42);
});

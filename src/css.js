let sayHello = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
    }, 2000);
    reject('unable to say hi');
});

sayHello
    .then(function (msg) {
        console.log('🚀 ~ msg:', msg);
    })
    .catch(function (err) {
        console.warn('🚀 ~ err:', err);
    });

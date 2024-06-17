let sayHello = new Promise(function (resolve, reject) {
    reject('unable to say hi');
    setTimeout(function () {
        resolve('hi, universe');
    }, 5000);
});

sayHello
    .then(function (msg) {
        console.log('🚀 ~ msg:', msg);
    })
    .catch(function (error) {
        console.warn('🚀 ~ error:', error);
    });

console.warn('show this line of errror');

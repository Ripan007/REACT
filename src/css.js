let sayHello = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
    }, 2000);
});

sayHello.then(function (msg) {
    console.log('🚀 ~ msg:', msg);
});

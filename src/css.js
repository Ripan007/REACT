let sayHello = new Promise(function (resolve, reject) {
    resolve('hi universe');
    setTimeout(function () {}, 1000);
});

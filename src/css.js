let count = new Promise(function (resolve, reject) {
    resolve(1);
});

count.then(function (num) {
    console.log('🚀 ~ num:', num);
    return count + 1;
});

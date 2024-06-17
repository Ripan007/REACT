new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
        reject('we dont know');
    }
    resolve(42);
})
    .then(function (answer) {
        console.log('🚀 ~ answer:', answer);
    })
    .then(function (error) {
        console.warn('🚀 ~ error:', error);
    })
    .finally(function () {
        console.log('no matter what , we will run');
    });

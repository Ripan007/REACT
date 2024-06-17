let question = new Promise(function (resolve, reject) {
    resolve(42);
});

setTimeout(function () {
    question.then(function (answer) {
        console.log('🚀 ~ answer:', answer);
    });
}, 3000);

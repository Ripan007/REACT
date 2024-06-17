fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        console.log('🚀 ~ response:', response);
    })
    .catch(function (err) {
        console.warn(err);
    });

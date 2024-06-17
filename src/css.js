Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
])
    .then(function (responses) {
        return Promise.all(
            responses.map(function (response) {
                return response.json();
            })
        );
    })
    .then(function (data) {
        console.log('🚀 ~ data:', data[0]);
    })
    .catch(function (err) {
        console.warn(err);
    });

//  that wait for asynchronous code to resolve before contuining

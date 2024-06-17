Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
]).then(function (responses) {
    return Promises.all(
        responses.map(function (response) {
            return response.json();
        })
    );
});

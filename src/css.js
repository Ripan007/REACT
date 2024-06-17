fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        console.log('🚀 ~ response:', response);
    })
    .catch(function (err) {
        console.warn(err);
    });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('🚀 ~ data:', data);
    })
    .catch(function (err) {
        console.warn(err);
    });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        console.log('🚀 ~ data:', data);
    })
    .catch(function (err) {
        console.warn(err);
    });

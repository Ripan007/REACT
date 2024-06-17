async function asyncFun() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('🚀 ~ data:', data);
        });
    console.log('show this message');
}
asyncFun();

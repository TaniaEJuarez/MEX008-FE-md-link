// Fetch permite realizar peticiones a http mediante el uso de promesas implementando la API Fetch //
const fetch = require('node-fetch');

let promise = fetch('https://api.github.com/users/TaniaEJuarez');
promise.then((res)=>{
    return res.json();
}).then((json) => {
    console.log(json);
});
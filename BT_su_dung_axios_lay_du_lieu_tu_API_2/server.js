// const axios = require("axios");
// axios = require('axios');
// async function getAllUser (){
//     let json = await axios.get('https://jsonplaceholder.typicode.com/users');
//     return json.data;
// }
// getAllUser().then(result => console.log(result));

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users/1').then((res)=> {
    console.log(res.data)
})
axios.get('https://jsonplaceholder.typicode.com/users/2').then((res)=> {
    console.log(res.data)
})
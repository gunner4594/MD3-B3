// const axios = require("axios");
axios = require('axios');
function getPictureOfDay () {
    return new Promise(function (resolve){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(function (json){
                resolve(json.data);
            })
    })
}
getPictureOfDay().then(result => {
    console.log(result);
})
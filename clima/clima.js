const APIs = require('../API_KEYS') ;

const axios = require('axios');

const getClima = async (lat, lng) => {
    url=`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${APIs.API_KEYS.openweather}`;
    console.log(url);
    const resp = await axios.get(url);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}



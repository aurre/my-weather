const axios = require('axios');
const apiKey = require('./secret');

const API_URL_CITY = 'http://api.openweathermap.org/data/2.5/weather?q=';

const toFahrenheit = temp => Math.round((9 / 5) * (temp - 273) + 32);
const toCelsius = temp => Math.round((temp - 32) * 0.5556);
// let flags = process.argv;
// flags = flags.slice(-1).toString();

// console.log(process.argv);

module.exports = {
  getWeather: flags => {
    let city = flags;
    if (!city) {
      return new Error('City missing!');
    }

    axios
      .get(`${API_URL_CITY}${city},us&appid=${apiKey}`)
      .then(res => {
        let temp = toFahrenheit(res.data.main.temp);
        let response = Object.assign({
          city: res.data.name,
          country: res.data.sys.country,
          Condition: res.data.weather[0].description,
          Temperature: temp + ' F',
        });
        console.log(response);
        return response;
      })
      .catch(error => {
        console.log('Sorry', error.response.data.message);
      });
  },
};

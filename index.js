const axios = require('axios');
// const apiKey = require('./secret');

const API_URL_CITY = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'b31d089c7cf4494d9ce4ded2a6bfb0f4';

const toFahrenheit = temp => Math.round((9 / 5) * (temp - 273) + 32);
const toCelsius = temp => Math.round((temp - 32) * 0.5556);

module.exports = {
  getWeather: flags => {
    return new Promise((resolve, reject) => {
      let city = flags;
      if (!city) {
        return new Error('City missing!');
      }
      axios
        .get(`${API_URL_CITY}${city},us&appid=${apiKey}`)
        .then(res => {
          let temp = toFahrenheit(res.data.main.temp);
          let result = Object.assign({
            city: res.data.name,
            country: res.data.sys.country,
            Condition: res.data.weather[0].description,
            Temperature: temp + ' F',
          });
          resolve(result);
        })
        .catch(error => {
          reject('Sorry', error.response.data.message);
        });
    });
  },
};

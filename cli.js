#!/usr/bin/env node

const program = require('commander');
const weather = require('./index.js');

program
  .arguments('<input>')
  .option('-c, --city <city>', 'City you want to lookup weather for')
  .option('-C, --country <country>', 'Country you want to lookup weather for')
  .option(
    '-cel, --celsius<celsius>',
    'Convert temp in celsius. Default to Fahrenheit'
  )
  .action(function(file) {
    console.log(
      'city: %s country: %s file: %s',
      program.city,
      program.country,
      file
    );
  })
  .parse(process.argv);

if (program.city) {
  let cityNumber = process.argv.indexOf(program.city);

  weather.getWeather(process.argv[cityNumber]).then(res => {
    console.log(res);
  });
}

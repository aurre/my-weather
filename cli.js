#!/usr/bin/env node

const program = require('commander');
const weather = require('./index.js');
const chalk = require('chalk');

program
  .version('0.1.0')
  .arguments('<input>')
  .option('-c, --city <city>', 'City you want to lookup weather for')
  .option('-C, --country <country>', 'Country you want to lookup weather for')
  .option(
    '-s, --scale <scale>',
    'Convert temp in celsius. Default to Fahrenheit'
  )
  .option(
    '-f, --forecast [value]',
    'Optional if you want to see the weather for the next 5 days'
  )
  .action(function(file) {
    console.log(
      'city: %s country: %s, scale: %s file: %s',
      program.city,
      program.country,
      program.scale,
      file
    );
  })

  .on('option:verbose', function() {
    process.env.VERBOSE = this.verbose;
  })

  // error on unknown commands

  .on('command:*', function() {
    console.error(
      chalk.red(
        'Invalid command: %s\nSee --help for a list of available commands.'
      ),
      program.args.join(' ')
    );
    process.exit(1);
  })
  .parse(process.argv);

let flags = {
  city: 'chicago',
  country: 'us',
  scale: 'f',
};

if (program.city) {
  let cityIndex = process.argv.indexOf(program.city);
  flags.city = process.argv.slice(cityIndex).toString();
}
if (program.country) {
  let countryIndex = process.argv.indexOf(program.country);
  flags.country = process.argv.slice(countryIndex).toString();
}
if (program.scale) {
  let scaleIndex = process.argv.indexOf(program.scale);
  flags.scale = process.argv.slice(scaleIndex).toString();
}

if (program.forecast) {
} else {
  weather.getWeather(flags).then(res => {
    console.log(chalk.red(`${res.city}, ${res.country}`));
    console.log(chalk.cyan(`Condition: ${chalk.yellow(res.condition)}`));
    console.log(chalk.cyan(`Temperature: ${chalk.yellow(res.temperature)}`));
  });
}

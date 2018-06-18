# weather-cli(Command Line Tool)

Check the weather for your city from your terminal

### Install

```shell
$ npm install -g weather-cli
```

```shell
$ weather --help

  Usage
    $ weather <input>

  Options
    --city, -c City you want to lookup weather for
    --country, -C Country you want to lookup weather for
    --scale, -s Weather scale. Defaults to Celcius
    --help Show this help message
    --version Display version info and exit
    config Set the default location

  Examples
    $ weather -c Dhaka -C Bangladesh
    Dhaka, Bangladesh
    Condition: Partly Cloudy
    Temperature: 32°C

    $ weather config -c Dhaka -C Bangladesh
    Default location set to Dhaka, Bangladesh
```

### Issues

Report a bug in issues.

### Author

Raysa Aurrecochea

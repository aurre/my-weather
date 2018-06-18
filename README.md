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
    --scale, -s Weather scale. Defaults to Fahrenheit
    --help Show this help message
    --version Display version info and exit
    config Set the default location

  Examples
    $ weather -c Chicago -C US
    Chicago, US
    Condition: Partly Cloudy
    Temperature: 72°F

    $ weather config -c Chicago -C US
    Default location set to Chicago, US
```

### Issues

Report a bug in issues.

### Author

Raysa Aurrecochea

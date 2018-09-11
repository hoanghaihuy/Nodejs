const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (err, result) => {
  if (err) {
    console.log("Get geolocation error: ", err);
  } else {
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (err, result) => {
      if (err) {
        console.log("Get weather error: ", err);
      } else {
        console.log(
          `It's currently ${result.temperature}. It feels like ${
            result.apparentTemperature
          }.`,
        );
      }
    });
  }
});

// 944a4916fa0aa166c0178aa29d316d60
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

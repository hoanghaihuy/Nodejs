const yargs = require("yargs");
const axios = require("axios");

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCthR5BEn21xBOMCGo-qqui8a9jDRNLDOk`;

axios
  .get(geocodeURL)
  .then(res => {
    if (res.data.status === "ZERO_RESULT") {
      throw new Error("Unable to find that address.");
    }
    var lat = res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/944a4916fa0aa166c0178aa29d316d60/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(res => {
    var temperature = res.data.currently.temperature;
    var apparentTemperature = res.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. But feels like ${apparentTemperature}`,
    );
  })
  .catch(err => {
    if (err.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(err.message);
    }
  });

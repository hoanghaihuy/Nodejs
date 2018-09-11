const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      uri: `https://api.darksky.net/forecast/944a4916fa0aa166c0178aa29d316d60/${lat},${lng}`,
      json: true,
    },
    (err, res, body) => {
      if (!err && res.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      } else {
        callback("Unable to fetch weather.");
      }
    },
  );
};

module.exports = { getWeather };

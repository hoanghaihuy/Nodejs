const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodeAddress}`,
      json: true,
    },
    (err, res, body) => {
      if (err) {
        callback("Unable to connect to Google servers");
      } else if (body.status !== "OK") {
        callback("Unable to find that address");
      } else {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      }
    },
  );
};

module.exports = {
  geocodeAddress,
};

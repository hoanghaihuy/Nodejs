const request = require("request");

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var encodeAddress = encodeURIComponent(address);

      request(
        {
          url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodeAddress}`,
          json: true,
        },
        (err, res, body) => {
          if (err) {
            reject("Unable to connect to Google servers");
          } else if (body.status !== "OK") {
            reject("Unable to find that address");
          } else {
            console.log(body);
            resolve({
              address: body.results[0].formatted_address,
              latitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng,
            });
          }
        },
      );
    });
  });
};

geocodeAddress("chua nen lane lang street hanoi").then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  err => {
    console.log(err);
  },
);

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/1240b19cb11e64aade9ee01c735e3f46/" +
    latitude +
    "," +
    longitude +
    "?units=si&lang=zh-tw";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, {
        currently: body.currently
      });
    }
  });
};

module.exports = forecast;

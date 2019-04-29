const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const app = express();
const port = process.env.PORT || 3000;

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const ViewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", ViewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather APP",
    name: "Lynn Chen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Lynn Chen"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "I have a problem",
    name: "Lynn Chen"
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You need to provide a search term"
    });
  }
  res.send({
    products: []
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You need to provide an address"
    });
  } else {
    geocode(
      req.query.address,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
            return res.send({ error });
          }
          res.send({
            forecast: forecastData.currently.temperature,
            location: location,
            address: req.query.address
          });
        });
      }
    );
  }
});

app.get("/help/*", (req, res) => {
  res.render("404_Page", {
    title: "404",
    errorMessage: "Help article not found",
    name: "Lynn Chen"
  });
});

//for those pages doesn't exist
app.get("*", (req, res) => {
  res.render("404_Page", {
    title: "404",
    errorMessage: "404 Page",
    name: "Lynn Chen"
  });
});

//port
app.listen(port, () => {
  console.log("Server is up on port" + port);
});

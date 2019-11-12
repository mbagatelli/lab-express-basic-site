const express = require("express");
const app = express();

app.use(express.static("public"));

/* app.get("/stylesheets/style.css", (request, response, next) => {
  response.sendFile(__dirname + "/public/stylesheets/style.css");
  //response.send("OIOI number 1");
}); */

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
  //response.send("OIOI number 1");
});

app.get("/about", (request, response, next) => {
  //response.send("ABOUT World");
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
  //response.send("ABOUT World");
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photos", (request, response, next) => {
  //response.send("ABOUT World");
  response.sendFile(__dirname + "/views/photos.html");
});

app.get("*", (request, response, next) => {
  response.status(404);
  //response.send("I can't find the page you're looking for.");
  response.sendFile(__dirname + "/views/error.html");
});

app.listen(3000);

"use strict";

console.log("App is running!");

var template = React.createElement(
  "h1",
  null,
  "This is a template from app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

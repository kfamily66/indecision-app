"use strict";

var visibility = false;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Toggle visibility"
    ),
    React.createElement(
      "button",
      { onClick: toggleDetails },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "p",
      null,
      "Here some additional info about it!"
    )
  );

  ReactDOM.render(template, appRoot);
};

render();

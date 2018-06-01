let visibility = false;

const toggleDetails = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Toggle visibility</h1>
      <button onClick={toggleDetails}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <p>Here some additional info about it!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

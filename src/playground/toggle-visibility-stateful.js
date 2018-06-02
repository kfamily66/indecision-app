class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle Visibility</h1>
        <button onClick={this.handleToggle}>
          {this.state.visibility ? "Hide text" : "Show text"}
        </button>
        {this.state.visibility && <p>This is a full text with details.</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById("app"));

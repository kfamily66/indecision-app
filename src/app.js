class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOption}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.map(option => <Option key={option} optionText={option} />)}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.option.value = "";
    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

import React from "react";

export default class AddOption extends React.Component {
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
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <input autoFocus={true} type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

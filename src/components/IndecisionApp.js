import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };
  handleRemoveOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
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
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

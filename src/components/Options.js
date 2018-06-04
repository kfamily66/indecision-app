import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleRemoveOption={props.handleRemoveOption}
      />
    ))}
  </div>
);

export default Options;

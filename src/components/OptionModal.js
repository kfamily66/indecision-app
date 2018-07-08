import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
    onRequestClose={props.handleClearSelectedOption}
    className="modal"
    closeTimeoutMS={200}
    ariaHideApp={false}
  >
    <h3 className="modal__title">You should choose</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;

import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop"  />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <i className="fa fa-search"></i>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

function Modal() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay  />,
        document.getElementById("modal-overlay-root")
      )}
    </React.Fragment>
  );
}

export default Modal;

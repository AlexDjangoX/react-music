import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ toggleModal }) => {
  return <div className="backdrop" onClick={toggleModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.toggleModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

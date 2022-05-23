import React, { Fragment } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const closeModal = () => {
    props.onClose();
  };
  return (
    <Fragment>
      <div
        className={classes.modal + " " + (props.isOpen ? "" : classes.hidden)}
      >
        <button className={classes["close-modal"]} onClick={closeModal}>
          &times;
        </button>
        <p>este es un modal</p>
      </div>
      <div
        className={classes.overlay + " " + (props.isOpen ? "" : classes.hidden)}
        onClick={closeModal}
      ></div>
    </Fragment>
  );
};

export default Modal;

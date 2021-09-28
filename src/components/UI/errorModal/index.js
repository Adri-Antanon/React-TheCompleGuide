import ReactDom from "react-dom";
import React from "react";

import { Button, Card } from "..";

import classes from "./styles.module.css";

const Backdrop = ({ onError }) => {
  return <div className={classes.backdrop} onClick={onError} />;
};

const ModalOverlay = ({ title, message, onError }) => {
  return (
    <Card classname={classes.modal}>
      <header className={classes.header}>
        <h2> {title} </h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onError}> Okay </Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = ({ title, message, onError }) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onError={onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay message={message} title={title} onError={onError} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

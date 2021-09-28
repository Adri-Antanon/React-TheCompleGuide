import { Button, Card } from "..";

import classes from "./styles.module.css";

export const ErrorModal = ({ title, message, onError }) => {
  return (
    <>
      <div className={classes.backdrop}>
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
      </div>
    </>
  );
};

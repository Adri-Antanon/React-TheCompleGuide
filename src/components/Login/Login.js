import React, { useEffect, useState, useReducer, useContext } from "react";

import {
  USER_INPUT,
  INPUT_BLUR,
  passwordReducer,
  emailReducer,
} from "../../lib/authReducer";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");
    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Checking for validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("cleanup");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: USER_INPUT, val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: USER_INPUT, val: event.target.value });

    setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: INPUT_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: INPUT_BLUR });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          label="E-Mail"
          id="email"
          type="email"
          state={emailState}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          state={passwordState}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

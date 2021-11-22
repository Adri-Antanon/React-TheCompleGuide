import { useRef, useContext } from "react";
import { API_KEY, FIREBASE_RESET_PASSWORD } from "../../config/constants";
import AuthContext from "../../store/AuthContext";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    if (enteredNewPassword.length <= 6) {
      console.log("The password has a minimun of 6 characters");
      return;
    }

    fetch(`${FIREBASE_RESET_PASSWORD}${API_KEY}`, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //Asumo que siempre va a funcionar y no va a haber problemas
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

import { CartIcon } from "../../Cart";

import classes from "./styles.module.css";

export const HeaderCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

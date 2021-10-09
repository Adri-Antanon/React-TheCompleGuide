import { HeaderCartButton } from "..";
import classes from "./styles.module.css";

export const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src="meals.jpg" alt="A table full of delicious food!" />
      </div>
    </>
  );
};

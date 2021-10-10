import { useContext } from "react";
import { MealItemForm } from "..";
import classes from "./styles.module.css";
import CartContext from "../../../store/cart-context";

export const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `${price.toFixed(2)}¢`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

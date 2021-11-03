import { useContext, useState } from "react";

import { Modal } from "../../UI";
import { CartItem, Checkout } from "../";

import classes from "./styles.module.css";
import CartContext from "../../../store/cart-context";

export const Cart = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout((previousState) => !previousState);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <CartItem
          amount={cartItem.amount}
          price={cartItem.price}
          name={cartItem.name}
          key={cartItem.id}
          onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
          onAdd={cartItemAddHandler.bind(null, cartItem)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

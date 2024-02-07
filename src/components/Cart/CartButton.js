import react, { useState } from "react";
import classes from "./CartButton.module.css";
import { hideCart } from "../store/CartReducer";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const showCartHandler = () => {
    setShowCart((prev) => {
      dispatch(hideCart(!prev));
      return !prev;
    });
  };
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

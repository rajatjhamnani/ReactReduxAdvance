import classes from "./CartButton.module.css";
import { hideCart } from "../store/ShowCart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(hideCart());
  };
  const quantity = useSelector((state) => state.cartData.totalQuantity);
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;

import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartartItems = useSelector((state) => state.cartData.items);
  return (
    <Card className={classes.cart}>
      {cartartItems.length == 0 ? (
        <h2>Your cart is Empty</h2>
      ) : (
        <h2>Your Shopping Cart</h2>
      )}
      <ul>
        {cartartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect } from "react";

import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./components/store/CartActions";
let isInitial = true;
function App() {
  const cartIsShown = useSelector((state) => state.toggle.showCart);
  const cart = useSelector((state) => state.cartData);
  const notification = useSelector((state) => state.toggle.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

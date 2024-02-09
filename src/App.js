import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect } from "react";
import { showNotification } from "./components/store/ShowCart";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
  const cartIsShown = useSelector((state) => state.toggle.showCart);
  const cart = useSelector((state) => state.cartData);
  const notification = useSelector((state) => state.toggle.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://expense-tracker-87bd8-default-rtdb.firebaseio.com/cartData.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      dispatch(
        showNotification({
          status: "success",
          title: "success",
          message: "sent cart data successfully",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);
  console.log(cartIsShown);
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

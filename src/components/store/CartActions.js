import { replaceCart } from "./CartSlice";
import { showNotification } from "./ShowCart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://expense-tracker-87bd8-default-rtdb.firebaseio.com/cartData.json"
      );

      if (!response.ok) {
        throw new Error("cound not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(replaceCart(cartData));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://expense-tracker-87bd8-default-rtdb.firebaseio.com/cartData.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "success",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    }
  };
};

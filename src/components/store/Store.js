import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ShowCart";
import { cartDataSlice } from "./CartSlice";

const store = configureStore({
  reducer: { toggle: cartSlice.reducer, cartData: cartDataSlice.reducer },
});
export default store;

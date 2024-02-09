import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  notification: null,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    hideCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { hideCart, showNotification } = cartSlice.actions;
export default cartSlice.reducer;

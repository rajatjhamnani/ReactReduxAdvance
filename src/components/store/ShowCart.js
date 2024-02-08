import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    hideCart: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { hideCart } = cartSlice.actions;
export default cartSlice.reducer;

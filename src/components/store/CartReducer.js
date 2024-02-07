import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: null,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    hideCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
});

export const { hideCart } = cartSlice.actions;
export default cartSlice.reducer;

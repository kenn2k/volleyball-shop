import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;

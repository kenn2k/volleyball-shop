import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import toggleSlice from "./toggle-slice";
import filterSlice from "./filter-slice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    toggle: toggleSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;

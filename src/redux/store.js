import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,  // burası obje olmalı, key istediğin isim olabilir
  },
});

export default store;

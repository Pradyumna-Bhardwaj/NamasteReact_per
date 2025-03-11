import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//  main redux store config
const appStore = configureStore({
  //  all reducers for the redux store config
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

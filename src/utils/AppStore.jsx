import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import appReducer from './appSlice';

const AppStore = configureStore({
    reducer:{
        cart: cartReducer,
        app: appReducer,
    }
})
export default AppStore;
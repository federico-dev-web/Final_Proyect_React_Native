import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice.js";
import favouriteProductsSlice from "./slices/favouriteProductsSlice.js";
import cartSlice from "./slices/cartSlice.js";
import notificationsSlice from "./slices/notificationsSlice.js";

export const store = configureStore({
    reducer: { 
        homeSlice, 
        favouriteProductsSlice,
        cartSlice,
        notificationsSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice.js";
import favouriteProductsSlice from "./slices/favouriteProductsSlice.js";
import cartSlice from "./slices/cartSlice.js";
import notificationsSlice from "./slices/notificationsSlice.js";
import authSlice from "./slices/authSlice.js";


import { ecommerceApi } from "../services/ecommerceApi.js";

export const store = configureStore({
    reducer: { 
        //homeSlice, 
        favouriteProductsSlice,
        cartSlice,
        notificationsSlice,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ecommerceApi.middleware)
})
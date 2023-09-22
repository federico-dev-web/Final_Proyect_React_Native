import { createSlice } from "@reduxjs/toolkit";

const favouriteProductsSlice = createSlice({
    name: "favourites",
    initialState: {
        favouriteProductList: []
    },
    reducers: {
        addToFavourites: (state, action) => {
            let newFavList = [...state.favouriteProductList]
            newFavList.push(action.payload)
            state.favouriteProductList = newFavList
        },
        removeFromFavList: (state, action) => {
            let currentFavList = [...state.favouriteProductList]
            let newFavList = currentFavList.filter(el => el.title != (action.payload).title)
            state.favouriteProductList = newFavList
        }
    }
})

export const { addToFavourites, removeFromFavList } = favouriteProductsSlice.actions;

export default favouriteProductsSlice.reducer
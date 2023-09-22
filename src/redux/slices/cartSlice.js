import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: []
    },
    reducers: {
        addToCartList: (state, action) => {
            let newCart = [...state.cartList]
            newCart.push(action.payload)
            state.cartList = newCart
        }
    }
})

export const { addToCartList } = cartSlice.actions;

export default cartSlice.reducer
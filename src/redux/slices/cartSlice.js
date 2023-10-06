import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: []
    },
    reducers: {
        addToCartList: (state, action) => {
            let currentCart = [...state.cartList]
            let newItem = {...action.payload, 'count': 1}
            if (currentCart.some(el => el.title == newItem.title)) {
                currentCart[currentCart.findIndex(el => el.title == newItem.title)].count ++
            } else {
                let item = {...newItem, 'count': 1}
                currentCart.push(item)
            }
            state.cartList = currentCart
        },
        removeFromCart: (state, action) => {
            let currentCartList = [...state.cartList]
            let newCartList = currentCartList.filter(el => el.title != (action.payload).title)
            state.cartList = newCartList
        }
    }
})

export const { addToCartList, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer
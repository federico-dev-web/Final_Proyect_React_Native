import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories.js";
import { products } from "../../data/products.js";


const homeSlice = createSlice({
    name: "home",
    initialState: {
        allCategories: categories,
        allProducts: products
    },
    reducers: {
        
    }
})

export default homeSlice.reducer
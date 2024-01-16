import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../ProductSlice.jsx/ProductSlice";

const store = configureStore({
    reducer : ProductSlice.reducer
})

export default store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    proList : [],
    favList : [],
}

export const ProductSlice = createSlice({
    name : 'productcard',
    initialState,
    reducers: {
        addPro : (state , action) => {
            const newItem = action.payload;
            if(!state.proList.some(item => item._id === newItem._id)){
                newItem.Quantity = 1
                state.proList.push(newItem)
            }
        },
        removePro : (state , action) => {
            const id = action.payload
            state.proList = state.proList.filter(ele => ele._id !== id)
        },
        favPro : (state , action) => {
            const newId = action.payload;
            if(!state.favList.includes(newId)){
                state.favList.push(newId)
            }
        },
        incresQuntity : (state ,action) =>{
            const id = action.payload
            state.proList = state.proList.map(ele => {
                if(ele._id === id){
                    return {...ele , Quantity: ele.Quantity + 1 }
                }else{
                    return ele
                }
            })
        },
        dicrisQuntity : (state ,action) =>{
            const id = action.payload
            state.proList = state.proList.map(ele => {
                if(ele._id === id){
                    return {...ele , Quantity: ele.Quantity - 1 }
                }else{
                    return ele
                }
            })
        },
    }
})

export const {addPro , removePro , favPro , incresQuntity  , dicrisQuntity} = ProductSlice.actions
export default ProductSlice.reducer

import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
        shoePrice: [],
    },

    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.shoePrice.push(action.payload.price);
            state.total += action.payload.price;
            console.log(state.quantity, action.payload.price);
        },

        removeProduct:(state, action)=>{
            if(state.quantity > 0) {
                state.quantity -= 1;
                state.total = state.total - state.shoePrice.pop(1);
                state.products.pop(1);
            }
            console.log(state.total, state.products.shoePrice);
        },
    },
});

export const {addProduct, removeProduct} = cartSlice.actions
export default cartSlice.reducer;
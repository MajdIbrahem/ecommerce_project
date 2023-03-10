import { createSlice } from '@reduxjs/toolkit';
const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice:0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
    },
        resetCart(state) {
            state.items=[]
            state.totalQuantity= 0
            state.totalPrice=0
    },
        addItemToCart(state, actions) {
            const newItem = actions.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.totalPrice=state.totalPrice+ +actions.payload.price
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    img: newItem.img,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, actions) {
            const id = actions.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            state.totalPrice=state.totalPrice- +actions.payload.price
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - +existingItem.price;
            }
        }
    }
});
export const {replaceCart, addItemToCart,removeItemFromCart,resetCart } = cartSlice.actions;
export default cartSlice.reducer
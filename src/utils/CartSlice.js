import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
    try {
        const cartItems = localStorage.getItem('cartItems');
        return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
};

const saveCartToStorage = (items) => {
    try {
        localStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
};

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromStorage()
    },
    reducers:{
        addItem:(state, action) =>{
            state.items.push(action.payload);
            saveCartToStorage(state.items);
        },
        removeItem:(state, action) =>{
            const payload = action.payload;
            if (typeof payload === "number") {
                state.items.splice(payload, 1);
            } else if (payload !== undefined) {
                const index = state.items.findIndex(
                    (item) => item.card?.info?.id === payload
                );
                if (index !== -1) state.items.splice(index, 1);
            } else {
                state.items.pop();
            }
            saveCartToStorage(state.items);
        },
        clearCart:(state) =>{
            state.items.length = 0;
            saveCartToStorage(state.items);
        },
    },
});

export const {addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;
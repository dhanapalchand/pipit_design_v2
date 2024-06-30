import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    itemsAdded: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
        itemExists.totalPrice = itemExists.quantity * action.payload.price; // Adjust total price for the item
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
    },
    itemsDelete: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price; // Adjust total price for the item
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price; // Adjust total price for the item
      }
    }
  }
});

// Selector to calculate total price of all items in the cart
export const selectTotalPrice = state => 
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);

export const { itemsAdded, itemsDelete, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

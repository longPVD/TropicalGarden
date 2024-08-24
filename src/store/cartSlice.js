// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      state.totalItems--;
      state.totalPrice -= action.payload.price;
    },
    deleteItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      state.totalItems -= item.quantity;
      state.totalPrice -= item.quantity * item.price;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
        state.items = [];
        state.totalItems= 0;
        state.totalPrice= 0;
      },
  }
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './productsSearchOperations';

const initialState = {
  product: { name: '', number: '' },
  user: {
    email: 'vova1@gmail.com',
    password: 'vova1@gmail.com',
  },
  parameters: {
    weight: 100,
    height: 170,
    age: 30,
    desiredWeight: 60,
    bloodType: 1,
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzQwMjNkYmUwMzdjNDA4ZGU4NTM3ODkiLCJzaWQiOiI2MzQwMjQ0MGUwMzdjNDA4ZGU4NTM3OGEiLCJpYXQiOjE2NjUxNDc5NjgsImV4cCI6MTY2NTE1MTU2OH0.7j7wdtgAuo0QHkEhcNFuKdMgT5bYcJ4RWgqDx8bRKws',
  isLoading: false,
  isLoggedIn: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [addProduct.pending]: state => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const productReducer = productSlice.reducer;

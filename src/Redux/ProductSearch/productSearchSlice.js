import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './productsSearchOperations';

// const initialState = {
//   product: { title: '', weight: '' },
//   // parameters: {
//   //   weight: 100,
//   //   height: 170,
//   //   age: 30,
//   //   desiredWeight: 60,
//   //   bloodType: 1,
//   // },
//   token: null,
//   isLoading: false,
//   isLoggedIn: true,
// };

const productSlice = createSlice({
  name: 'product',
  initialState: { items: [] },
  extraReducers: {
    [addProduct.pending]: state => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.title = payload.title;
      state.weight = payload.weight;
      state.items.push(payload);

      // state.token = payload.token;
      // state.isLoggedIn = true;
      // state.isLoading = false;
    },
    [addProduct.rejected]: (state, { payload }) => {
      // state.isLoading = false;
      state.error = payload;
    },
  },
});

export const productReducer = productSlice.reducer;

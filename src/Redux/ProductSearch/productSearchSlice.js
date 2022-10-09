import { createSlice } from '@reduxjs/toolkit';
import { addProduct, eatenProduct } from './productsSearchOperations';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    eatenProduct: null,
    daySummary: null,
    items: [],
    productId: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addProduct.pending]: state => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      // state.title = payload.title;
      // state.weight = payload.weight;
      // state.eatenProduct = payload.day.eatenProducts;
      state.id = payload[0]._id;
      state.items.push(payload);
      state.isLoading = false;
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // =====eatenProduct=====
    [eatenProduct.pending]: state => {
      state.isLoading = true;
    },
    [eatenProduct.fulfilled]: (state, { payload }) => {
      state.eatenProduct = payload.day.eatenProducts;
      state.daySummary = payload.daySummary; //скільки ми захавали
      state.isLoading = false;
    },
    [eatenProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const productReducer = productSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  eatenProduct,
  deleteEatenProduct,
  dayInfo,
} from './productsSearchOperations';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    eatenProduct: null,
    daySummary: null,
    items: [],
    productId: null,
    weight: null,
    date: null,
    isLoading: false,
    error: null,
    dayId: null,
    eatenProductId: null,
    product: [],
  },
  extraReducers: {
    [addProduct.pending]: state => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.id = payload[0]._id; //змінив id на productId
      state.items = payload;
      state.isLoading = false;
      state.product = payload;
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
      state.weight = payload.eatenProduct.weight;
      state.eatenProduct = payload.day.eatenProducts;
      state.daySummary = payload.daySummary; //скільки ми захавали
      state.isLoading = false;
      state.dayId = payload.day.id;
      state.eatenProductId = payload.eatenProduct.id;
    },
    [eatenProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // =====dayInfo=====
    [dayInfo.pending]: state => {
      state.isLoading = true;
    },
    [dayInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      // state.date = payload.day.date;//???????????????????????
      state.daySummary = payload.daySummary;
    },
    [dayInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // =====deleteProduct=====
    [deleteEatenProduct.pending]: state => ({
      ...state,
      isLoading: true,
    }),
    [deleteEatenProduct.fulfilled]: (state, { payload }) => {
      state.eatenProduct = state.eatenProduct.filter(
        item => item.id !== payload.eatenProductId
      );
      state.isLoading = false;
    },
    [deleteEatenProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const productReducer = productSlice.reducer;

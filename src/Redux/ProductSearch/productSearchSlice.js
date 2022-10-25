import { createSlice } from '@reduxjs/toolkit';
import { searchProduct, dateSetAction } from './productsSearchOperations';

const initialState = {
  productSearch: [],
  isLoading: false,
  error: null,
  date: null,
  calendarDate: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [searchProduct.pending]: state => {
      state.isLoading = true;
    },
    [searchProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.productSearch = payload;
    },
    [searchProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dateSetAction]: (state, { payload }) => {
      state.date = payload;
      return state;
    },
  },
});

export const productReducer = productSlice.reducer;

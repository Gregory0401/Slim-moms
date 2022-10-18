import { createSlice } from '@reduxjs/toolkit';
import { dailyRate, dailyRateWithUserId } from './DailyRateOperations';

const initialState = {
  dailyRate: null,
  notAllowedProducts: [],
  summaries: [],
  id: null,
  isLoading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [dailyRate.pending]: state => {
      
      state.isLoading = true;
      state.notAllowedProducts = []
    },
    [dailyRate.fulfilled]: (
      state,
      { payload: { dailyRate, notAllowedProducts } }
    ) => {
      state.isLoading = false;
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.error = null;
    },
    [dailyRate.rejected]: (state, { payload }) => {
      
      state.isLoading = false;
      state.error = payload;
      
    },
    [dailyRateWithUserId.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dailyRateWithUserId.fulfilled]: (
      state,
      { payload: { dailyRate, notAllowedProducts, id, summaries } }
    ) => {
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.id = id;
      state.summaries = summaries;
      state.error = null;
      state.isLoading = false;
    },
    [dailyRateWithUserId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;

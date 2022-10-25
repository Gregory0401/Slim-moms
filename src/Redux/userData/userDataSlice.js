import { createSlice } from '@reduxjs/toolkit';
import {
  dailyRate,
  dailyRateWithUserId,
  eatenProduct,
  deleteEatenProduct,
  dayInfo,
  userInfo,
} from './userDataOperations';

const initialState = {
  dayId: null,
  eatenProducts: [],
  dailyRate: null,
  daySummary: {},
  notAllowedProducts: null,
  eatenProductId: null,
  isLoading: false,
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: {
    [dailyRate.pending]: state => {
      state.isLoading = true;
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
      { payload: { dailyRate, notAllowedProducts } }
    ) => {
      state.dailyRate = dailyRate;
      state.notAllowedProducts = notAllowedProducts;
      state.error = null;
      state.isLoading = false;
    },
    [dailyRateWithUserId.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [eatenProduct.pending]: state => {
      state.isLoading = true;
    },
    [eatenProduct.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.eatenProducts = payload.newDay
        ? payload.newDay.eatenProducts
        : payload.day.eatenProducts;
      state.daySummary = payload.newSummary
        ? payload.newSummary
        : payload.daySummary;
      state.dayId = payload.newDay ? payload.newDay.id : payload.day.id;
      state.eatenProductId = payload.eatenProduct.id;
    },
    [eatenProduct.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dayInfo.pending]: state => {
      state.isLoading = true;
    },
    [dayInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.daySummary = payload.daySummary ? payload.daySummary : payload;
      state.eatenProducts = payload.eatenProducts;
      state.dayId = payload.id;
    },
    [dayInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [userInfo.pending]: state => {
      state.isLoading = true;
    },
    [userInfo.fulfilled]: (
      state,
      { payload: { dailyRate, daySummary, eatenProducts, notAllowedProducts } }
    ) => {
      state.isLoading = false;
      state.dailyRate = dailyRate;
      state.daySummary = daySummary;
      state.notAllowedProducts = notAllowedProducts;
      state.eatenProducts = eatenProducts;
    },
    [userInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteEatenProduct.pending]: state => ({
      ...state,
      isLoading: true,
    }),
    [deleteEatenProduct.fulfilled]: (state, { payload }) => {
      state.eatenProducts = state.eatenProducts.filter(
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

export const userDataReducer = userDataSlice.reducer;

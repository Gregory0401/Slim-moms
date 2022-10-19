import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  eatenProduct,
  deleteEatenProduct,
  dayInfo,
  userInfo,
  dateSetAction,
} from './productsSearchOperations';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    eatenProducts: [],
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
    notAllowedProducts: [],
    userId: null,
    userDaySummary: null,
    calendarDate: null,
  },
  extraReducers: {
    [addProduct.pending]: state => {
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.id = payload[0]._id;
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
      state.eatenProducts = [payload?.newDay ? payload.newDay : payload.day];
      state.daySummary = payload?.newSummary
        ? payload?.newSummary
        : payload.daySummary;
      state.isLoading = false;

      state.dayId = payload?.newDay ? payload?.newDay.id : payload.day?.id;
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
      state.daySummary = payload.daySummary;
      state.dayId = payload.id;
    },
    [dayInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // ===== userInfo =====

    [userInfo.pending]: state => {
      state.isLoading = true;
    },
    [userInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.notAllowedProducts = payload.userData.notAllowedProducts;
      state.userId = payload.id;
      state.eatenProducts = payload?.days.filter(
        item => item._id === state.dayId
      );
      state.eatenProducts = payload.days;
    },
    [userInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // =====deleteProduct=====
    [deleteEatenProduct.pending]: state => ({
      ...state,
      isLoading: true,
    }),
    [deleteEatenProduct.fulfilled]: (state, { payload }) => {
      state.eatenProducts = state.eatenProducts
        .flatMap(item => item.eatenProducts)
        .filter(item => item.id !== payload.eatenProductId);
      state.isLoading = false;
    },
    [deleteEatenProduct.rejected]: (state, { payload }) => {
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

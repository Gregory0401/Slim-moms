import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  eatenProduct,
  deleteEatenProduct,
  dayInfo,
  userInfo,
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
<<<<<<< HEAD
=======
    // =====
>>>>>>> dev
    userDaySummary: null,
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
      state.eatenProducts = [payload.day];
      state.daySummary = payload.daySummary;
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
      state.daySummary = payload.daySummary;
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
<<<<<<< HEAD
      state.eatenProduct = payload.days.filter(
        item => item._id === state.dayId
      );
=======
      console.log(22222222);
      // =====
      // state.eatenProduct = payload.days.daySummary;
      state.eatenProducts = payload.days;
      // state.eatenProducts = payload.days.filter(
      //   item => item._id === state.dayId
      //   // console.log(item._id);
      // );

      // =====
>>>>>>> dev
      // state.daySummary = payload.days.daySummary;
      // state.daySummary = payload.days.filter(item => item._id === state.dayId);
      // console.log(state.dayId);
      // console.log(state.daySummary[0]);
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

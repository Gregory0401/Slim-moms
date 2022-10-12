import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// vova1@gmail.com

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async ({ title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/product/?search=${title}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const eatenProduct = createAsyncThunk(
  'product/eatenProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day', credentials);
      console.log('eatenProduct', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dayInfo = createAsyncThunk(
  'product/dayInfo',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/day/info', credentials);
      console.log('dayInfo', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (data, { rejectWithValue }) => {
    try {
      await axios.delete('/day', {
        data,
      });
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);

// export const productSearch = createAsyncThunk(
//   'product/get',
//   async (search, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/product', {
//         params: {
//           search,
//         },
//       });

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

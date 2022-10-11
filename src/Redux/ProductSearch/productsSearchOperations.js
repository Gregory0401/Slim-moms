import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// vova1@gmail.com

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/product/?search=${credentials.title}`,
        credentials
      );
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
      // console.log(data);
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

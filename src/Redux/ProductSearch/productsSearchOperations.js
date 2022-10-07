import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/product/?search=${credentials}`,
        credentials
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (eatenProductId, { rejectWithValue }) => {
    try {
      await axios.delete(`/day/${eatenProductId}`);
      return eatenProductId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

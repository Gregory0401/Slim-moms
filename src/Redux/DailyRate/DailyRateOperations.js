import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const dailyRate = createAsyncThunk(
  'dailyRate/calculator',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('daily-rate', params);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const dailyRateWithUserId = createAsyncThunk(
  'dailyRate/calculator',
  async ({ params, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`daily-rate/${userId}`, params);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

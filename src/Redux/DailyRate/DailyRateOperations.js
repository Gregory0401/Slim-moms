import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const dailyRate = createAsyncThunk(
  'dailyRate/dailyRate',
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
  'dailyRate/dailyRateWithUserId',
  async ({ userId, ...params }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`daily-rate/${userId}`, params);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

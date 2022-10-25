import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const dailyRate = createAsyncThunk(
  'userData/dailyRate',
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
  'userData/dailyRateWithUserId',
  async ({ userId, ...params }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`daily-rate/${userId}`, params);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const eatenProduct = createAsyncThunk(
  'userData/eatenProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/day', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue('eatenProduct : Произошла ошибка');
    }
  }
);

export const dayInfo = createAsyncThunk(
  'userData/dayInfo',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/day/info', credentials);
      return response.data;
    } catch (error) {
      if (error.response.status === 403) {
        return rejectWithValue('Для начала узнай свою суточную норму калорий');
      }
      return rejectWithValue('dayInfo : Произошла ошибка');
    }
  }
);

export const userInfo = createAsyncThunk(
  'userData/userInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user');
      const { days, userData } = response.data;
      const dailyRate = userData.dailyRate;
      const notAllowedProducts = userData.notAllowedProducts;
      let eatenProducts = [];
      const daySummary = {};

      if (days.length > 0) {
        const date = new Date().toISOString().split('T')[0];
        const isToday = days.find(day => day.date === date);
        if (isToday) {
          const todaySummary = days[days.length - 1];

          eatenProducts = todaySummary.eatenProducts;
        }
      }

      const result = {
        dailyRate,
        notAllowedProducts,
        eatenProducts,
        daySummary,
      };

      return result;
    } catch (error) {
      return rejectWithValue('userInfo : Произошла ошибка');
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'userData/deleteEatenProduct',
  async (data, { rejectWithValue }) => {
    try {
      await axios.delete('/day', {
        data,
      });
      return data;
    } catch (error) {
      return rejectWithValue('deleteEatenProduct : Произошла ошибка');
    }
  }
);

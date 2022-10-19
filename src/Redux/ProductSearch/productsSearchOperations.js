import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async ({ title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/product/?search=${title}`);
      return data;
    } catch (error) {
      if (error.response.status === 403) {
        return rejectWithValue(
          toast.info('Для начала узнай свою суточную норму калорий')
        );
      } else if (error.response.status === 400) {
        return rejectWithValue(
          toast.error('По этому запросу не найдено разрешенных продуктов')
        );
      }
      return rejectWithValue(toast.error('addProduct Произошла ошибка'));
    }
  }
);

export const eatenProduct = createAsyncThunk(
  'product/eatenProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(toast.error('eatenProduct : Произошла ошибка'));
    }
  }
);

export const dayInfo = createAsyncThunk(
  'product/dayInfo',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/day/info', credentials);
      return data;
    } catch (error) {
      if (error.response.status === 403) {
        return rejectWithValue(
          toast.error('Для начала узнай свою суточную норму калорий')
        );
      }
      return rejectWithValue(toast.error('dayInfo : Произошла ошибка'));
    }
  }
);

export const userInfo = createAsyncThunk(
  'product/userInfo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(toast.error('userInfo : Произошла ошибка'));
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
      return rejectWithValue(
        toast.error('deleteEatenProduct : Произошла ошибка')
      );
    }
  }
);

export const formateDate = startDate => {
  const chosenDate = format(startDate, 'yyyy-MM-dd');
  return { payload: chosenDate };
};

export const dateSetAction = createAction('date/set', formateDate);

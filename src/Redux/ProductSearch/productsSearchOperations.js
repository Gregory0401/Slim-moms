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
      console.log('id продукту, який шукаємо', data[0]._id);
      // console.log(data);
      // console.log({
      //   id: data[0]._id,
      //   title: data[0].title.ru,
      //   weight: data[0].weight,
      // });
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
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'day/deleteEatenProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete('/day', credentials);
      console.log(credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

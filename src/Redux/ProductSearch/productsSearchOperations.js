import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// =====

// import { selectAccessToken } from '../Auth/authSelectors';
// import { useSelector } from 'react-redux';
// =====

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// const token = useSelector(selectAccessToken);

// vova1@gmail.com

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/product/?search=${credentials.title}`,
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

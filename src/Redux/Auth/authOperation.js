import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://https://slimmom-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/register', credentials);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      token.set(data.accessToken);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('auth/logout');
      token.unset();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  '/auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    const persistedSid = state.auth.sid;
    
    try {
      const { data } = await axios.post('auth/refresh', persistedSid);
      token.set(data.newAccessToken);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('user');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

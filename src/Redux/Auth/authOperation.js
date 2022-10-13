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
      if (e.response.status === 409) {
        return rejectWithValue('Такой пользователь уже зарегистрирован');
      } else {

        return rejectWithValue('Что-то пошло не так...');

      }
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
      return e.response.status === 403
        ? rejectWithValue('Некорректная электронная почта или пароль')
        : rejectWithValue('Что-то пошло не так...');
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
      return rejectWithValue('Что-то пошло не так...');
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('user');
      return data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так...');
    }
  }
);

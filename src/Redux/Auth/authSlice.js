import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refresh,
  fetchCurrentUser,
} from './authOperation';

const initialState = {
  user: { username: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      state.user = user;
      state.error = null;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (
      state,
      { payload: { user, accessToken, refreshToken, sid } }
    ) => {
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.sid = sid;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { username: null, email: null };
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [refresh.pending]: state => {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refresh.fulfilled]: (
      state,
      { payload: { user, newAccessToken, newRefreshToken, sid } }
    ) => {
      state.user = user;
      state.accessToken = newAccessToken;
      state.refreshToken = newRefreshToken;
      state.sid = sid;
      state.error = null;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = payload;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled]: (
      state,
      { payload: { email, username, id } }
    ) => {
      state.user.username = username;
      state.user.email = email;
      state.user.id = id;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { productReducer } from './ProductSearch/productSearchSlice';
import { userDataReducer } from './userData/userDataSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'sid'],
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
// =====

const userDataPersistConfig = {
  key: 'userData',
  storage,
  whitelist: ['daySummary', 'eatenProducts'],
};

const userDataPersistedReducer = persistReducer(
  userDataPersistConfig,
  userDataReducer
);
// =====

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    userData: userDataPersistedReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

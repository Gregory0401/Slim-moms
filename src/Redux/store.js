import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { productReducer } from './ProductSearch/productSearchSlice';
import { dailyRateReducer } from './DailyRate/DailyRateSlice';
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

const productPersistConfig = {
  key: 'product',
  storage,
  whitelist: ['daySummary', 'eatenProducts', 'dayId'],
};

const productPersistedReducer = persistReducer(
  productPersistConfig,
  productReducer
);
// =====

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    product: productPersistedReducer,
    dailyRate: dailyRateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

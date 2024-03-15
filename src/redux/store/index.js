import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import {storage} from '@/storage';
import rootReducer from '../reducer';
import {configureStore} from '@reduxjs/toolkit';
import { PRESIST_REDUCER_KEY } from '@/constants/common';

const persistConfig = {
  key: PRESIST_REDUCER_KEY,
  storage, // mmkv storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// store with persist
const persistor = persistStore(store);

export {store, persistor};

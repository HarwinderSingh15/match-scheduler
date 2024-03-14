import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer';
import {storage} from '@/storage';

const persistConfig = {
  key: 'temp-root',
  storage, // mmkv storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// redux store
const store = configureStore({
  reducer: persistedReducer,
});

// store with persist
const persistor = persistStore(store);

export {store, persistor};

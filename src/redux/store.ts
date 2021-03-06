import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import {combineReducers} from 'redux';
import {persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  appState: mainSlice
});

const persistConfig = {key: 'root', version: 1, storage};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

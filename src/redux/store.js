import { configureStore, combineReducers } from '@reduxjs/toolkit';

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

import { authReducer } from './authSlice';
import { tasksReducerMain } from './mainPageSlice';
import { tasksReducerCategoryList } from './categoryPage/categorySlice';
import { tasksReducerCategoryItem } from './categoryPage/itemSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'theme'],
};

const persistConfigMain = {
  key: 'main',
  storage,
  whitelist: ['items'],
};

const persistConfigList = {
  key: 'categoryList',
  storage,
  whitelist: ['dataList'],
};

const persistConfigItem = {
  key: 'categoryItem',
  storage,
  whitelist: ['dataItem'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  main: persistReducer(persistConfigMain, tasksReducerMain),
  categoryList: persistReducer(persistConfigList, tasksReducerCategoryList),
  categoryItem: persistReducer(persistConfigItem, tasksReducerCategoryItem),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

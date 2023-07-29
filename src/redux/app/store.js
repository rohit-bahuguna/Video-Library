import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import videoReducer from "../features/videoSlice"

const videoPersistConfig = {
    key: 'root',
    storage,
    whiteList: ['video']
};


export const store = configureStore({
    reducer: persistReducer(videoPersistConfig, videoReducer),

});

export const persistor = persistStore(store);
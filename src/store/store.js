import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { localStorageMiddleware, reHydrateStore} from "./auth-slice";
import logger from 'redux-logger'
import { localStorageDataMiddleware, } from "./data-slice";
import dataSlice from './data-slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        data:dataSlice
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([localStorageMiddleware,localStorageDataMiddleware,logger]),
});


export default store;
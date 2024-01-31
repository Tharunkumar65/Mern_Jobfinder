import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import jobReducer from './slices/jobSlice'
const  store = configureStore({
    reducer:{
      auth : authReducer,
      jobs: jobReducer

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true
});


export default store;
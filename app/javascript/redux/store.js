import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducers';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;

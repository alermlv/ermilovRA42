import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import factsReducer from './factsSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
    facts: factsReducer
  }
});

export default store;
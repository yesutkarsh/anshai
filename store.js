import { configureStore } from '@reduxjs/toolkit';
import toggleSliceReducer from './ToggleSlice';

const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer,
  },
});

export default store;

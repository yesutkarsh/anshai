import { configureStore } from '@reduxjs/toolkit';
import toggleSliceReducer from './ToggleSlice';
import configSliceReducer from "./utils/ConfigSlice"
const store = configureStore({
  reducer: {
    toggle: toggleSliceReducer,
    config:configSliceReducer
  },
});

export default store;

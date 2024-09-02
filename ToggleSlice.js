import { createSlice } from "@reduxjs/toolkit";
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    Customize: false,
  },
  reducers: {
    toggleCustomize:(state,action)=>{
        state.Customize = !state.Customize
    }
  },
});

export const { toggleCustomize } = toggleSlice.actions;

export default toggleSlice.reducer;

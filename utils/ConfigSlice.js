import { createSlice } from "@reduxjs/toolkit";
const config = createSlice({
  name: 'toggle',
  initialState: {
    config:`
Role: "You are an AI Virtual Assistant, similar to JARVIS from Iron Man."
Tone: "Friendly and conversational."
Format: "Provide a concise and straightforward answer without asking additional questions, also use my name when answering if possible."
About “My Name is Ansh and you are my buddy"
    `
  },
  reducers:{
    chnageConfig:(state,action)=>{
      state.config = action.payload
    }
  }
  });


export const { chnageConfig } = config.actions;

export default config.reducer;

import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { value: '', error: null },
  reducers: {
    setGreeting: (state, action) => {
      state.value = action.payload;
      state.error = null;
    },
    setGreetingError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setGreeting, setGreetingError } = greetingSlice.actions;
export default greetingSlice.reducer;
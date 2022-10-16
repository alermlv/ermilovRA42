import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: []
};

const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    addFacts(state, action) {
      state.content = action.payload
    },
  },
});

export const { addFacts } = factsSlice.actions;

export default factsSlice.reducer;
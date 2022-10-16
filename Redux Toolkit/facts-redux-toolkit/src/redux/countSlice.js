import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount(state, action) {
      state.value = action.payload
    },
  },
});

export const { addCount } = countSlice.actions;

export default countSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const imageSlice = createSlice({
  name: "image",
  initialState: [],
  reducers: {
    addImage: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (src) => {
        const id = nanoid();
        return { payload: { id, src } };
      },
    },
  },
});

export const { addImage } = imageSlice.actions;

export default imageSlice.reducer;
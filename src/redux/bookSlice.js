import { createSlice } from "@reduxjs/toolkit";
import bookData from "../data/bookData";

const bookSlice = createSlice({
  name: "books",
  initialState: bookData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // New book at top
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

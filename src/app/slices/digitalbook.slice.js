import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBooks } from "../actions/digitalbook.action";

const digitalBookSlice = createSlice({
  name: "digitalbook",
  initialState: {
    books: [],
    status:"success"
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = action.payload;
      state.status = "success";
    });
  },
});

export const {} = digitalBookSlice.actions;

export default digitalBookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPapers } from "../actions/paper.action";

const paperSlice = createSlice({
  name: "paper",
  initialState: {
    papers: [],
    status:"success"
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllPapers.fulfilled, (state, action) => {
      // Add user to the state array
      state.papers = action.payload;
      state.status = "success";
    });
  },
});

// export const {} = paperSlice.actions;

export default paperSlice.reducer;

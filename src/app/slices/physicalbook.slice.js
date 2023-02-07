import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPhysicalBooks,donatePhysicalBook } from "../actions/physicalbook.action";
import { toast } from "react-toastify";

const physicalBookSlice = createSlice({
  name: "physicalbook",
  initialState: {
    books: [],
    status:"success"
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllPhysicalBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = action.payload;
      state.status = "success";
    });
    builder.addCase(donatePhysicalBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = [...state.physicalbooks,action.payload];
      state.status = "success";
      toast.success("Donation Succes");
    });
  },
});

// export const {} = digitalBookSlice.actions;

export default physicalBookSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { addMessage } from '../actions/contactus.action';

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    status: 'success',
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addMessage.fulfilled, () => {
      // Add user to the state array
    });
  },
});

// export const {} = audiobookSlice.actions;

export default contactUsSlice.reducer;

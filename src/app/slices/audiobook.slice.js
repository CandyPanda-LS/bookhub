import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../actions/audiobook.action';

const audiobookSlice = createSlice({
  name: 'audiobook',
  initialState: {
    audiobooks: [],
    status: 'success',
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.audiobooks = action.payload;
      state.status = 'success';
    });
  },
});

// export const {} = audiobookSlice.actions;

export default audiobookSlice.reducer;

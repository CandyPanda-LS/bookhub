import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUDIOBOOKAPI } from '../api/audiobook.api';

export const fetchAllBooks = createAsyncThunk('audiobook/fetchAllBooks', async () => {
  const response = await AUDIOBOOKAPI.fetchAllBooks();
  return response.data;
});

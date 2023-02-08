import { createAsyncThunk } from '@reduxjs/toolkit';
import { CONTACTUSAPI } from '../api/contactus.api';

export const addMessage = createAsyncThunk('contactUs/addMessage', async (newMessage) => {
  const response = await CONTACTUSAPI.saveMessage(newMessage);
  return response.data;
});

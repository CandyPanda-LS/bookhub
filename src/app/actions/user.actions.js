import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERAPI } from "../api/user.api";

export const login = createAsyncThunk(
  "user/login",
  async (userCredentials) => {
    const response = await USERAPI.login(userCredentials);
    return response.data;
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const response = await USERAPI.getUser();
    return response.data;
  }
);
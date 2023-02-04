import { createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "../actions/user.actions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loginStatus: false,
  },
  reducers: {
    logout: (state) => {
      window.location.href = "/login"
      localStorage.removeItem("Authorization");
      state.user = null;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      window.location.href = "/"
      state.user = action.payload;
      state.loginStatus = true;
      localStorage.setItem("Authorization", action.payload.accessToken);
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.loginStatus = true;
    });
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    listUsers: [],
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.listUsers.push(action.payload);
    },
    registerFailure: (state, action) => {
      state.error = true;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, registerSuccess, registerFailure, logout } = userSlice.actions;
export default userSlice.reducer;
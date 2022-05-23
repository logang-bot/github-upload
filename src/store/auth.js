import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action) {
      console.log(action.payload);
      state.token = action.payload;
      state.isAuth = true;
      localStorage.setItem("userToken", action.payload);
    },
    setLogout(state) {
      state.isAuth = false;
      state.token = "";
      localStorage.removeItem("userToken");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

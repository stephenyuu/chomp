import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  profileThunk,
  registerThunk,
  logoutThunk,
} from "../../services/users/users-thunk";
const initialState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action) => {
        console.log("in update user action.payload")
        console.log(action.payload)
        state.currentUser = action.payload;
        console.log("state current user")
        console.log(state.currentUser)
      },
  },
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateUser } = usersSlice.actions;
export default usersSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSessionThunk,
  updateSessionThunk
} from "../../services/sessions/sessions-thunk";
const initialState = {
  session: null,
};

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
  extraReducers: {
    [createSessionThunk.fulfilled]: (state, action) => {
        state.session = action.payload;
      },
    [updateSessionThunk.fulfilled]: (state, action) => {
      state.session = action.payload;
    },
  },
});

export default sessionsSlice.reducer;
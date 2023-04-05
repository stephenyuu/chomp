import { createSlice } from "@reduxjs/toolkit";
import { findRxsThunk } from "../../services/rxs/rxs-thunk";

const initialState = {
  rxs: [],
  loading: false,
};

const rxsSlice = createSlice({
  name: "rxs",
  initialState,
  reducers: {},
  extraReducers: {
    [findRxsThunk.pending]: (state, action) => {
      state.loading = true;
      state.rxs = [];
    },
    [findRxsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.rxs = action.payload;
    },
    [findRxsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    }
  },
});

export default rxsSlice.reducer;

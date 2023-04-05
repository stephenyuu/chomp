import { createAsyncThunk } from "@reduxjs/toolkit";
import { findRxs } from "./rxs-service";

export const findRxsThunk = createAsyncThunk("rxs/findRxs", async (rxSearchCriteria) => {
  const rxs = await findRxs(rxSearchCriteria);
  return rxs;
});

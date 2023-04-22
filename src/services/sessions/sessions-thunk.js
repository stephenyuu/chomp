import * as sesssionService from "./session-services"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const joinSessionThunk = createAsyncThunk(
  "sessions/join",
  async (session, thunkAPI) => await sesssionService.joinSession(session)
);

export const createSessionThunk = createAsyncThunk(
  "sessions/createSession",
  async (session, thunkAPI) => await sesssionService.createSession(session)
);

export const updateSessionThunk = createAsyncThunk(
    "sessions/updateSession",
    async (user) => {
        await sesssionService.updateSession(user);
        return user;
    }
);
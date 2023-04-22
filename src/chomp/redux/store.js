import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user-reducer";
import sessionReducer from "./session-reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    sessions: sessionReducer
  },
});

export default store;
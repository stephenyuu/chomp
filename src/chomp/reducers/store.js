import { configureStore } from "@reduxjs/toolkit";
import rxReducer from "./rx-reducer";

const store = configureStore({
  reducer: {
    rxs: rxReducer,
  },
});

export default store;

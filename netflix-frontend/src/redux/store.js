import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    app: userReducer,
    movie: movieReducer,
    search: searchReducer,
  },
});

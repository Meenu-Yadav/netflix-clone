import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedMovie: null,
    matchedMovies: null,
  },
  reducers: {
    getSearchedMovies: (state, action) => {
      const { searchMovie, matchedMovies } = action.payload;
      state.searchedMovie = searchMovie;
      state.matchedMovies = matchedMovies;
    },
  },
});

export const { getSearchedMovies } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggleSearch: false,
    trailer: null,
    open: false,
    movieId: "",
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    toggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    getTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  toggleSearch,
  getTrailer,
  setOpen,
  setMovieId,
} = movieSlice.actions;
export default movieSlice.reducer;

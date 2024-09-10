export const API_END_POINT = "http://localhost:4040/api/v1/user";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGM3YTcxZjk2NjA2M2Y3MTQ5OWViMTYwYmQ5Nzg5NCIsIm5iZiI6MTcyNTgxMTg4Ni45ODQwNTEsInN1YiI6IjY2ZGRiYzNiODYwZTc1MWJmYzg0YmZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ufa5FZgTIv58aXKyBclnAwiMfIPfDfPx4voJKs8Q0vU",
  },
};

export const API_NOW_PLAYING = "http://api.themoviedb.org/3/movie/now_playing";
export const API_POPULAR = "http://api.themoviedb.org/3/movie/popular";
export const API_TOP_RATED = "http://api.themoviedb.org/3/movie/top_rated";
export const API_UPCOMING = "http://api.themoviedb.org/3/movie/upcoming";
export const BANNER_URL = "https://image.tmdb.org/t/p/w500";
export const API_SEARCH = "https://api.themoviedb.org/3/search/movie?query=";
